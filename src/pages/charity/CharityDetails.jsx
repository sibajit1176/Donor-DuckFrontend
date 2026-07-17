import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import CharityHero from "../../components/charity/CharityHero";
import CharityStatistics from "../../components/charity/CharityStatistics";
import CharityAbout from "../../components/charity/CharityAbout";
import CharityProjects from "../../components/charity/CharityProjects";
import CharityDonationCard from "../../components/charity/CharityDonationCard";
import CharityDonationTable from "../../components/charity/CharityDonationTable";

import {
    getCharityProfileAllDetailsforAlluser,
} from "../../services/charity.service";
import DonationModal from "../../components/projects/DonationModal";
import { createDonation } from "../../services/donation.service";
import { initializeCashfree } from "../../utils/cashfree";

const CharityDetails = () => {

    const { id } = useParams();

    const [loading, setLoading] = useState(true);

    const [charity, setCharity] = useState(null);

    const [donationOpen, setDonationOpen] = useState(false);

    const [donationForm, setDonationForm] = useState({
        organizationName: "",
        projectTitle: "",
        amount: "",
        message: "",
    });

    const [paymentLoading, setPaymentLoading] = useState(false);

    useEffect(() => {

        fetchCharity();

    }, [id]);

    const fetchCharity = async () => {

        try {

            setLoading(true);

            const result =
                await getCharityProfileAllDetailsforAlluser(id);

            setCharity(result);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to load charity."
            );

        } finally {

            setLoading(false);

        }

    };

   const handleDonate = (project) => {

    setDonationForm({
        organizationName: charity.charity.organizationName,
        projectTitle: project.title,
        amount: "",
        message: "",
        charityId: charity.charity.id,
        projectId: project.id,
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
        };

        const result = await createDonation(payload);

        setDonationOpen(false);

        startPayment(result.paymentSessionId);

    } catch (error) {

        toast.error(
            error.response?.data?.message ||
            "Payment failed."
        );

    } finally {

        setPaymentLoading(false);

    }
};

  const startPayment = async (paymentSessionId) => {

    const cashfree = await initializeCashfree();

    await cashfree.checkout({
        paymentSessionId,
        redirectTarget: "_self",
    });

};


    if (loading) {

        return (

            <div className="flex h-[calc(100vh-80px)] items-center justify-center bg-slate-50">

                <div className="h-16 w-16 animate-spin rounded-full border-4 border-green-600 border-t-transparent" />

            </div>

        );

    }

    if (!charity) {

        return (

            <div className="flex h-[calc(100vh-80px)] items-center justify-center">

                <h1 className="text-2xl font-bold">

                    Charity Not Found

                </h1>

            </div>

        );

    }

    return (

        <div className="h-[calc(100vh-80px)] overflow-y-auto bg-slate-100 scrollbar-hide">

    <div className="mx-auto max-w-7xl px-6 py-8 space-y-8">

        {/* Hero */}

        <CharityHero
            charity={charity.charity}
            statistics={charity.statistics}
            onDonate={handleDonate}
        />

        {/* Statistics */}

        <CharityStatistics
            statistics={charity.statistics}
        />

        {/* About */}

        <CharityAbout
            charity={charity.charity}
        />

        {/* Projects */}

        <CharityProjects
            projects={charity.projects}
            onDonate={handleDonate}
        />

        {/* Recent Donations */}

        <CharityDonationTable
            donations={charity.donations}
        />

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

export default CharityDetails;