import { useEffect, useState } from "react";

import CharityProfileHeader from "../../components/charityProfile/CharityProfileHeader";
import CharityOverviewCards from "../../components/charityProfile/CharityOverviewCards";
import CharityAboutCard from "../../components/charityProfile/CharityAboutCard";
import CharityContactCard from "../../components/charityProfile/CharityContactCard";
import CharityProjects from "../../components/charityProfile/CharityProjects";
import DonationHistory from "../../components/charityProfile/DonationHistory";

import EditCharityModal from "../../components/charityProfile/EditCharityModal";
import CreateProjectModal from "../../components/charityProfile/CreateProjectModal";

import {
    getCharityProfileAllDetails,
    updateCharityProfile, // <-- your update api
} from "../../services/charity.service";
import { toast } from "react-toastify";
import { createProject } from "../../services/project.service";

const initialProject = {
    title: "",
    description: "",
    category: "",
    goalAmount: "",
    startDate: "",
    endDate: "",
};

const MyCharity = () => {
    const [loading, setLoading] = useState(true);

    const [charity, setCharity] = useState(null);

    const [formData, setFormData] = useState({});

    const [projects, setProjects] = useState([]);

    const [donations, setDonations] = useState([]);

    const [stats, setStats] = useState({});

    const [editOpen, setEditOpen] = useState(false);

    const [projectOpen, setProjectOpen] = useState(false);

    const [saveLoading, setSaveLoading] = useState(false);

    const [projectForm, setProjectForm] = useState(initialProject);

    const [projectLoading, setProjectLoading] = useState(false);

    useEffect(() => {
        fetchCharityProfile();
    }, []);

    useEffect(() => {
        if (charity) {
            setFormData(charity);
        }
    }, [charity]);

    const fetchCharityProfile = async () => {
        try {
            const result = await getCharityProfileAllDetails();

            setCharity(result.charity);
            setProjects(result.projects);
            setDonations(result.donations);
            setStats(result.stats);
        } catch (error) {
            if (error.response?.status === 404) {
                setCharity(null);
                return;
            }

            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleProjectChange = (e) => {

        const { name, value } = e.target;

        setProjectForm((prev) => ({
            ...prev,
            [name]: value,
        }));

    };

    const handleProjectReset = () => {
        setProjectForm(initialProject);
    };

    const handleReset = () => {
        setFormData(charity);
    };

    const handleCreateProject = async (e) => {

        e.preventDefault();
        if (!projectForm.title.trim())
            return toast.error("Enter project title.");

        if (!projectForm.description.trim())
            return toast.error("Enter project description.");

        if (!projectForm.category.trim())
            return toast.error("Select a project category.");

        if (!projectForm.goalAmount)
            return toast.error("Enter goal amount.");

        if (!projectForm.startDate)
            return toast.error("Select the project start date.");

        if (!projectForm.endDate)
            return toast.error("Select the project end date.");

        try {

            setProjectLoading(true);

            const result = await createProject(projectForm);
            toast.success(result.message);


            setProjectOpen(false);

            handleProjectReset();

            fetchCharityProfile(); // reload project list

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "failed."
            );

        } finally {

            setProjectLoading(false);

        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.organizationName.trim())
            return toast.error("Enter organization name.");

        if (!formData.registrationNumber.trim())
            return toast.error("Enter registration number.");

        if (!formData.description.trim())
            return toast.error("Enter description.");

        if (!formData.category.trim())
            return toast.error("Select category.");
        try {
            setSaveLoading(true);

            // Update API
            const payload = {
                organizationName: formData.organizationName,
                description: formData.description,
                category: formData.category,
                website: formData.website,
                mission: formData.mission,
                vision: formData.vision,
                phone: formData.phone,
                email: formData.email,
                address: formData.address,
                city: formData.city,
                country: formData.country,
                goalAmount: formData.goalAmount,
                state: formData.state
            }
            const result = await updateCharityProfile(payload);

            // Update local state
            setCharity(formData);
            toast.success(result.message);

            setEditOpen(false);
        } catch (error) {
            console.log(error);
            toast.error(
                error.response?.data?.message ||
                "Update failed."
            );
        } finally {
            setSaveLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="h-[calc(100vh-80px)] flex items-center justify-center">
                Loading...
            </div>
        );
    }

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
                    <CharityProfileHeader
                        charity={charity}
                        onEdit={() => setEditOpen(true)}
                    />

                    <CharityOverviewCards
                        charity={charity}
                        stats={stats}
                    />

                    <div className="grid lg:grid-cols-3 gap-6 items-stretch">
                        <div className="lg:col-span-2 h-full">
                            <CharityAboutCard charity={charity} />
                        </div>

                        <div className="h-full">
                            <CharityContactCard charity={charity} />
                        </div>
                    </div>
                    {charity.approvalStatus === "APPROVED" && (<>
                        <CharityProjects
                            projects={projects}
                            approvalStatus={charity?.approvalStatus}
                            onCreateProject={() => setProjectOpen(true)}
                        />
                        <DonationHistory
                            donations={donations}
                        />
                    </>
                    )}


                </div>
            </div>

            <EditCharityModal
                isOpen={editOpen}
                onClose={() => setEditOpen(false)}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleReset={handleReset}
                loading={saveLoading}
            />

            <CreateProjectModal
                isOpen={projectOpen}
                onClose={() => {
                    setProjectOpen(false);
                    handleProjectReset();
                }}
                formData={projectForm}
                handleChange={handleProjectChange}
                handleSubmit={handleCreateProject}
                handleReset={handleProjectReset}
                loading={projectLoading}
            />
        </>
    );
};

export default MyCharity;