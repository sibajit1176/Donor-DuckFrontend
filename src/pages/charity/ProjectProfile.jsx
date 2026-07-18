import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectHeader from "../../components/projectProfile/ProjectHeader";
import ProjectOverviewCard from "../../components/projectProfile/ProjectOverviewCard";
import ProjectOrganizationCard from "../../components/projectProfile/ProjectOrganizationCard";
import ProjectDescriptionCard from "../../components/projectProfile/ProjectDescriptionCard";
import ProjectDonationHistory from "../../components/projectProfile/ProjectDonationHistory";
import EditProjectModal from "../../components/projectProfile/EditProjectModal";
import DeleteProjectDialog from "../../components/projectProfile/DeleteProjectDialog";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { projectProfileDetails, editprojectProfileDetails, deleteproject, uploadImage } from "../../services/project.service";

const ProjectProfile = () => {

    const { id } = useParams()

    const fileInputRef = useRef(null);

    const [uploadLoading, setUploadLoading] = useState(false);

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [editOpen, setEditOpen] = useState(false);

    const [deleteOpen, setDeleteOpen] = useState(false);

    // Replace with API data
    const [project, setProject] = useState({});

    const [editForm, setEditForm] = useState({});

    // Replace with charity API
    const [charity, setCharity] = useState({});

    // Replace with donation API
    const [donations, setDonation] = useState([]);

    useEffect(() => {
        getprojectDetails()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEditForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const payload = {
                projectId: id,
                title: editForm.title,
                description: editForm.description,
                category: editForm.category,
                goalAmount: editForm.goalAmount,
                startDate: editForm.startDate,
                endDate: editForm.endDate,
                status: editForm.status,
            };

            await editprojectProfileDetails(payload);

            setProject(editForm);

            toast.success("Project updated successfully.");

            setEditOpen(false);

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    const handleEditOpen = () => {
        setEditForm({ ...project });
        setEditOpen(true);
    };

    const handleReset = () => {

        console.log("Reset");
        editForm({})
    };

    const handleDelete = async () => {

        setLoading(true);

        try {

            console.log("Delete Project");
            const result = await deleteproject(id)
            toast.success(result.message);
            navigate("/mycharities");

        } finally {

            setLoading(false);

            setDeleteOpen(false);

        }

    };

    const getprojectDetails = async () => {
        try {
            const result = await projectProfileDetails(id)
            setProject(result.project)
            setCharity(result.charity)
            setDonation(result.donationHistory)
        } catch (error) {
            console.log(error);

        }
    }

    const handleCoverImageChange = async (e) => {
        const file = e.target.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            toast.error("Please select an image.");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            toast.error("Image size must be less than 5MB.");
            return;
        }

        try {
            setUploadLoading(true);

            const formData = new FormData();
            
            formData.append("coverImage", file);
            console.log();
            const projectId=id
            
            const result = await uploadImage(projectId, formData);

            toast.success(result.message);

            await getprojectDetails();

            e.target.value = "";

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to upload cover image."
            );

        } finally {

            setUploadLoading(false);

        }
    };

    return (

        <>

            <div
                className="
                    h-[calc(100vh-80px)]
                    overflow-y-auto
                    scrollbar-hide
                    bg-gradient-to-b
                    from-green-50
                    via-white
                    to-green-50
                "
            >

                <div className="max-w-7xl mx-auto px-6 py-6 space-y-8">

                    {/* Header */}

                    <ProjectHeader
                        project={project}
                        onEdit={handleEditOpen}
                        onDelete={() => setDeleteOpen(true)}
                        fileInputRef={fileInputRef}
                        onCoverImageChange={handleCoverImageChange}
                        uploadLoading={uploadLoading}
                    />

                    {/* Overview */}

                    <ProjectOverviewCard
                        project={project}
                    />

                    {/* Details */}

                    <div className="grid xl:grid-cols-3 gap-6 items-start">

                        <div className="xl:col-span-2">

                            <ProjectDescriptionCard
                                project={project}
                            />

                        </div>

                        <ProjectOrganizationCard
                            charity={charity}
                        />

                    </div>

                    {/* Donations */}

                    <ProjectDonationHistory
                        donations={donations}
                    />

                </div>

            </div>

            {/* Edit Modal */}

            <EditProjectModal
                isOpen={editOpen}
                onClose={() => {
                    setEditOpen(false)
                }}
                formData={editForm}
                handleChange={handleChange}
                handleSubmit={handleUpdate}
                loading={loading}
                handleReset={handleReset}
            />

            {/* Delete Dialog */}

            <DeleteProjectDialog
                isOpen={deleteOpen}
                onClose={() => setDeleteOpen(false)}
                onDelete={handleDelete}
                loading={loading}
                projectTitle={project.title}
            />

        </>

    );

};

export default ProjectProfile;