import { useEffect, useState } from "react";

import ProjectsHeader from "../../components/projects/ProjectsHeader.jsx";
import ProjectList from "../../components/projects/ProjectList.jsx";
import { initializeCashfree } from "../../utils/cashfree.js";
import { getprojectsForAllUser } from "../../services/project.service";
import DonationModal from "../../components/projects/DonationModal.jsx";
import { createDonation } from "../../services/donation.service.js";

const Projects = () => {

    const [loading, setLoading] = useState(true);

    const [projects, setProjects] = useState([]);

    const [donationOpen, setDonationOpen] = useState(false);

    const [donationForm, setDonationForm] = useState({
        organizationName: "",
        projectTitle: "",
        amount: "",
        message: "",
    });

    const [paymentLoading, setPaymentLoading] = useState(false);
    // const [payment,setPayment]=useState({})

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {

        try {

            const result = await getprojectsForAllUser();

            setProjects(result.projects || []);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const handleDonate = (project) => {
        setDonationForm({
            organizationName: project.charity.organizationName,
            projectTitle: project.title,
            amount: "",
            message: "",
            charityId: project.charity.id,
            projectId: project.id
        });

        setDonationOpen(true);
    };

    const handleDonationChange = (e) => {
        const { name, value } = e.target;

        setDonationForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePayment = async (e) => {
        e.preventDefault();

        try {
            setPaymentLoading(true);
            const payload = {
                amount: donationForm.amount,
                message: donationForm.message,
                charityId: donationForm.charityId,
                projectId: donationForm.projectId,
            }
            const result = await createDonation(payload)
          startPayment(result.paymentSessionId)
        } catch (error) {
            console.log(error);
        } finally {
            setPaymentLoading(false);
        }
    };

    const startPayment = async (paymentSessionId) => {

        const cashfree = await initializeCashfree();

        cashfree.checkout({

            paymentSessionId,

            redirectTarget: "_self",

        });

    };

    if (loading) {

        return (

            <div className="h-[calc(100vh-80px)] flex items-center justify-center">

                <div className="flex flex-col items-center gap-4">

                    <div className="h-12 w-12 rounded-full border-4 border-green-200 border-t-green-600 animate-spin" />

                    <p className="text-gray-600 font-medium">
                        Loading Projects...
                    </p>

                </div>

            </div>

        );

    }

    return (

        <div className="pt-0 h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide bg-gradient-to-b from-green-50 to-white">

            {/* Fixed Header */}
            <div className="sticky top-0 z-20 bg-gradient-to-b from-green-50 via-white to-white">

                <div className="max-w-7xl mx-auto px-6 pt-2">

                    <ProjectsHeader
                        totalProjects={projects.length}
                    />

                </div>

            </div>

            {/* Scrollable Content */}
            <div
                className="
            h-[calc(100vh-180px)]
            overflow-y-auto
            scrollbar-hide
            pt-2
        "
            >
                <div className="max-w-7xl mx-auto px-6 pb-8">

                    <ProjectList
                        projects={projects}
                        onDonate={handleDonate}
                    />

                </div>

            </div>
            <DonationModal
                isOpen={donationOpen}
                onClose={() => setDonationOpen(false)}
                formData={donationForm}
                handleChange={handleDonationChange}
                handleSubmit={handlePayment}
                loading={paymentLoading}
            />

        </div>

    );

};

export default Projects;