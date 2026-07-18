import { useEffect, useState } from "react";

import ProfileHeader from "../../components/profile/ProfileHeader";
import DonationStats from "../../components/profile/DonationStatus";
import PersonalInfoCard from "../../components/profile/PersonalInfoCard";
import AddressCard from "../../components/profile/AddressCard";
import SocialCard from "../../components/profile/SocialCard";
import AccountCard from "../../components/profile/AccountCard";
import EditProfileModal from "../../components/profile/EditProfileModal";
import VerifyEmailModal from "../../components/profile/VerifyEmailModal";

import {
    getProfileDetails,
    sendEmailVerificationOtp,
    updatePassword,
    uploadProfileImage,
    verifyEmailOtp,
} from "../../services/auth.service";

import { toast } from "react-toastify";
import ChangePasswordModal from "../../components/profile/ChangePasswordModal";
import { useNavigate } from "react-router-dom";
import DonationHistoryTable from "../../components/profile/DonationHistoryTable";
import { useRef } from "react";

const Profile = () => {

    const navigate = useNavigate()

    const fileInputRef = useRef(null);

    const [user, setUser] = useState(null);

    const [donations, setDonations] = useState(null);

    const [loading, setLoading] = useState(true);

    const [isEditOpen, setIsEditOpen] = useState(false);

    const [verifyModalOpen, setVerifyModalOpen] =
        useState(false);

    const [verifyLoading, setVerifyLoading] =
        useState(false);

    const [resendLoading, setResendLoading] =
        useState(false);

    const [changePasswordOpen, setChangePasswordOpen] =
        useState(false);

    const [changePasswordLoading, setChangePasswordLoading] =
        useState(false);

    const [donationHistory, setDonationHistory] = useState([]);

    const [profileImageLoading, setProfileImageLoading] = useState(false);

    useEffect(() => {

        fetchProfile();

    }, []);

    const fetchProfile = async () => {

        try {

            const result =
                await getProfileDetails();

            setUser(result.user);

            setDonations(result.donationStats);

            setDonationHistory(result.donations);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to load profile."
            );

        } finally {

            setLoading(false);

        }

    };

    // Open Verify Modal

    const openVerifyModal = async () => {

        try {

            setResendLoading(true);
            setVerifyModalOpen(true);
            const result = await sendEmailVerificationOtp(user.email);

            toast.success(result.message);



        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to send OTP."
            );

        } finally {

            setResendLoading(false);

        }

    };

    // Verify OTP

    const handleVerifyOtp = async (otp) => {

        try {

            setVerifyLoading(true);

            const result =
                await verifyEmailOtp({
                    otp,
                    email: user.email
                });

            toast.success(result.message);

            setVerifyModalOpen(false);

            fetchProfile();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Invalid OTP."
            );

        } finally {

            setVerifyLoading(false);

        }

    };

    const handleChangePassword = async (data) => {
        if (data.currentPassword === data.newPassword) {

            toast.error("New password must be different from the current password.");

            return;

        }

        if (data.newPassword !== data.confirmPassword) {

            toast.error("New password and confirm password must match.");

            return;

        }
        try {

            setChangePasswordLoading(true);

            const result = await updatePassword(data);

            toast.success(result.message);

            setChangePasswordOpen(false);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to change password."
            );

        } finally {

            setChangePasswordLoading(false);

        }

    };

    // Resend OTP

    const handleResendOtp = async () => {

        try {

            setResendLoading(true);

            const result =
                await sendEmailVerificationOtp(user.email);

            toast.success(result.message);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Unable to resend OTP."
            );

        } finally {

            setResendLoading(false);

        }

    };

   const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        return toast.error("Please select an image.");
    }

    if (file.size > 5 * 1024 * 1024) {
        return toast.error("Image size must be less than 5MB.");
    }

    try {
        setProfileImageLoading(true);

        const formData = new FormData();
        formData.append("profileImage", file);

        const result = await uploadProfileImage(formData);

        toast.success(result.message);

        await fetchProfile();

        e.target.value = "";
    } catch (error) {
        toast.error(
            error.response?.data?.message ||
            "Failed to upload image."
        );
    } finally {
        setProfileImageLoading(false);
    }
};
    if (loading) {

        return (
            <h1 className="text-center mt-20">
                Loading...
            </h1>
        );

    }

    return (

        <>

            <div
                className="
                    pt-4
                    h-[calc(100vh-80px)]
                    overflow-y-auto
                    bg-gradient-to-b
                    from-green-50
                    to-white
                    scrollbar-hide
                "
            >

                <div className="max-w-7xl mx-auto px-6 pb-6">

                    <ProfileHeader
                        user={user}
                        onEdit={() => setIsEditOpen(true)}
                        onVerifyEmail={openVerifyModal}
                        onChangePassword={() =>
                            setChangePasswordOpen(true)
                        }
                        fileInputRef={fileInputRef}
                        onProfileImageChange={handleProfileImageChange}
                        profileImageLoading={profileImageLoading}
                    />

                    <DonationStats
                        role={user.role}
                        stats={donations}
                    />

                    <div className="grid lg:grid-cols-2 gap-8 mt-8">

                        <PersonalInfoCard
                            user={user}
                        />

                        <AddressCard
                            user={user}
                        />

                        <SocialCard
                            user={user}
                        />

                        <AccountCard
                            user={user}
                        />

                    </div>
                    <div className="mt-8">
                        <DonationHistoryTable
                            donations={donationHistory}
                        />
                    </div>

                </div>

            </div>

            <EditProfileModal
                isOpen={isEditOpen}
                onClose={() =>
                    setIsEditOpen(false)
                }
                user={user}
                setUser={setUser}
            />

            <VerifyEmailModal
                open={verifyModalOpen}
                onClose={() =>
                    setVerifyModalOpen(false)
                }
                email={user.email}
                onVerify={handleVerifyOtp}
                onResend={handleResendOtp}
                loading={verifyLoading}
                resendLoading={resendLoading}
            />
            <ChangePasswordModal
                open={changePasswordOpen}
                onClose={() =>
                    setChangePasswordOpen(false)
                }
                onSubmit={handleChangePassword}
                loading={changePasswordLoading}
                onForgotPassword={() => {

                    setChangePasswordOpen(false);

                    navigate("/forgot-password");

                }}
            />

        </>

    );

};

export default Profile;