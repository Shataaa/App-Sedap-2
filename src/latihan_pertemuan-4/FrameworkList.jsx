import frameworkData from "./product.json";
import { useState } from "react";

export default function FrameworkList() {
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((product) => {
        const matchesSearch =
            product.title.toLowerCase().includes(_searchTerm) ||
            product.description.toLowerCase().includes(_searchTerm);

        const matchesTag = dataForm.selectedTag
            ? product.tags.includes(dataForm.selectedTag)
            : true;

        return matchesSearch && matchesTag;
    });

    const allTags = [...new Set(frameworkData.flatMap((product) => product.tags))];

    return (
        <div className="p-8">
            {/* Search Input */}
            <input
                type="text"
                name="searchTerm"
                placeholder="Search Product..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={dataForm.searchTerm}
                onChange={handleChange}
            />

            {/* Tag Filter Dropdown */}
            <select
                name="selectedTag"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={dataForm.selectedTag}
                onChange={handleChange}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>

            {/* Card List */}
            <div className="flex flex-col md:flex-row mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFrameworks.map((item, index) => (
                        <div
                            key={item.id}
                            className="border p-4 rounded-lg shadow-md bg-white flex flex-col"
                        >
                            {/* Title and Index */}
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                                <span className="text-sm text-gray-500">#{index + 1}</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 mb-2 text-sm md:text-lg lg:text-xl xl:text-2xl">
                                {item.description}
                            </p>

                            {/* Category */}
                            <p className="text-gray-600 text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
                                Category: {item.category}
                            </p>

                            {/* Price */}
                            <p className="text-green-600 font-semibold text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
                                ${item.price}
                            </p>

                            {/* Discount */}
                            <p className="text-yellow-600 text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
                                {item.discountPercentage}% Off
                            </p>

                            {/* Rating */}
                            <p className="text-gray-600 flex items-center text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
                                {item.rating}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 text-yellow-500 ml-1"
                                >
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.168L12 18.896l-7.334 3.864 1.4-8.168L.132 9.21l8.2-1.192z" />
                                </svg>
                            </p>

                            {/* Stock */}
                            <p className="text-gray-600 text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
                                Stock: {item.stock}
                            </p>

                            {/* Brand */}
                            <p className="text-gray-600 text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
                                Brand: {item.brand}
                            </p>

                            {/* Dimensions */}
                            <p className="text-gray-600 text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
                                Dimensions:
                            </p>
                            <ul className="text-gray-600 ml-4 list-disc text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
                                <li>Width: {item.dimensions.width}</li>
                                <li>Height: {item.dimensions.height}</li>
                                <li>Depth: {item.dimensions.depth}</li>
                            </ul>

                            {/* Image */}
                            <img
                                src={item.imageURL}
                                alt={item.name}
                                className="w-full h-48 object-contain mt-4 rounded"
                            />

                            {/* Tags */}
                            <div className="flex justify-end mt-4">
                                {item.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-400 text-white px-2 py-1 text-xs rounded-full mr-2"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}