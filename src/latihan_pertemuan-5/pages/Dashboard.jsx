import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { IoArrowBack } from "react-icons/io5";
import PageHeader from "../components/PageHeader";
import CardCount from "../components/CardCount";
import cardData from "../data/cardData.json";

const iconMap = {
    FaShoppingCart: <FaShoppingCart />,
    FaTruck: <FaTruck />,
    FaBan: <FaBan />,
    FaDollarSign: <FaDollarSign />,
};

export default function Dashboard() {
    return (
        <div id="dashboard-container">
            <PageHeader
                title="Dashboard"
                breadcrumb={["Home", "Dashboard", "Order List"]}
            >
                {/* Children untuk action-button */}
                <div className="flex space-x-2">
                    {/* Add Button */}
                    <button id="add-button" className="bg-hijau text-white px-4 py-2 flex items-center rounded-lg">
                        <BiPlus className="mr-2" />
                        Add
                    </button>

                    {/* Export Button */}
                    <button id="export-button" className="bg-blue-500 text-white px-4 py-2 flex items-center rounded-lg">
                        <FiDownload className="mr-2" />
                        Export
                    </button>

                    {/* Kembali Button */}
                    <button id="back-button" className="bg-gray-500 text-white px-4 py-2 flex items-center rounded-lg">
                        <IoArrowBack className="mr-2" />
                        Kembali
                    </button>
                </div>
            </PageHeader>

            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {cardData.map((data, index) => (
                    <CardCount
                        key={index}
                        icon={iconMap[data.icon]}
                        count={data.count}
                        label={data.label}
                        bgColor={data.bgColor}
                    />
                ))}
            </div>
        </div>
    );
}