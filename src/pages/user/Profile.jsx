import { useEffect, useState } from "react";


import ProfileHeader from "../../components/profile/ProfileHeader";
import DonationStats from "../../components/profile/DonationStatus";
import PersonalInfoCard from "../../components/profile/PersonalInfoCard";
import AddressCard from "../../components/profile/AddressCard";
import SocialCard from "../../components/profile/SocialCard";
import AccountCard from "../../components/profile/AccountCard";
import { getProfileDetails } from "../../services/auth.service";
import EditProfileModal from "../../components/profile/EditProfileModal";


const Profile = () => {

    const [user, setUser] = useState(null);
    const [donatins, setDonations] = useState(null)
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchProfile();

    }, []);

    const fetchProfile = async () => {

        try {

            const result = await getProfileDetails();

            setUser(result.user);
            setDonations(result.donationStats)

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <h1 className="text-center mt-20">Loading...</h1>;

    }

    return (

        <>

            <div className="
              pt-4
        h-[calc(100vh-80px)]
        overflow-y-auto
        bg-gradient-to-b
        from-green-50
        to-white
        scrollbar-hide"
            >

                <div className="max-w-7xl mx-auto px-6 pb-6">

                    <ProfileHeader user={user} onEdit={() => setIsEditOpen(true)}/>

                    <DonationStats
                        role={user.role}
                        stats={donatins}
                    />

                    <div className="grid lg:grid-cols-2 gap-8 mt-8">

                        <PersonalInfoCard user={user} />

                        <AddressCard user={user} />

                        <SocialCard user={user} />

                        <AccountCard user={user} />

                    </div>

                </div>

            </div>
            <EditProfileModal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                user={user}
                setUser={setUser}
            />
        </>

    );

};

export default Profile;