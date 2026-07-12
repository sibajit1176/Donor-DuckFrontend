const DonationTableRow = ({ donation }) => {

    return (

        <tr className="border-b hover:bg-green-50 transition">

            <td className="px-5 py-4 font-medium">
                {donation.user?.name}
            </td>

            <td className="px-5 py-4">
                {donation.project?.title}
            </td>

            <td className="px-5 py-4 font-semibold text-green-600">
                ₹{Number(donation.amount).toLocaleString()}
            </td>

            <td className="px-5 py-4">
                {donation.message || "-"}
            </td>

            <td className="px-5 py-4 text-gray-500">
                {new Date(donation.createdAt).toLocaleString()}
            </td>

        </tr>

    );

};

export default DonationTableRow;