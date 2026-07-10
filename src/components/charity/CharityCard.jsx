import { FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const CharityCard = ({ charity }) => {

    const navigate = useNavigate();

    return (

        <div
            className="
    bg-white
    rounded-2xl
    overflow-hidden
    shadow-md
    hover:shadow-xl
    transition
    cursor-pointer
    w-full
  "
            onClick={() => navigate(`/charities/${charity.id}`)}
        >
            <img
                src={charity.logo || "https://placehold.co/600x350?text=Charity"}
                className="h-40 w-full object-cover"
                alt=""
            />

            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">
                    {charity.name}
                </h2>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {charity.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                        <FiUsers />
                        <span>{charity.totalProjects} Projects</span>
                    </div>

                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm rounded-lg">
                        View
                    </button>
                </div>
            </div>
        </div>

    );

};

export default CharityCard;