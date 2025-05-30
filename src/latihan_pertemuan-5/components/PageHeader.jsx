import React from "react";

export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4">
            {/* Left Section */}
            <div id="pageheader-left" className="flex flex-col">
                {/* Title */}
                <span id="page-title" className="text-3xl font-semibold">
                    {title}
                </span>

                {/* Breadcrumb */}
                <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
                    {Array.isArray(breadcrumb) ? (
                        breadcrumb.map((item, index) => (
                            <React.Fragment key={index}>
                                <span
                                    id={`breadcrumb-${index}`}
                                    className={`text-gray-500 ${index === breadcrumb.length - 1 ? "font-bold" : ""}`}
                                >
                                    {item}
                                </span>
                                {index < breadcrumb.length - 1 && (
                                    <span id={`breadcrumb-separator-${index}`} className="text-gray-500">
                                        /
                                    </span>
                                )}
                            </React.Fragment>
                        ))
                    ) : (
                        <span id="breadcrumb-single" className="text-gray-500">
                            {breadcrumb}
                        </span>
                    )}
                </div>
            </div>

            {/* Right Section */}
            <div id="action-button">
                {children}
            </div>
        </div>
    );
}

