import {
    FiImage,
    FiX,
} from "react-icons/fi";

import { useState } from "react";

const CharityGallery = ({
    images = [],
}) => {

    const [selectedImage, setSelectedImage] =
        useState(null);

    return (

        <section className="mt-10">

            {/* Header */}

            <div className="mb-8 flex items-center justify-between">

                <div>

                    <h2 className="text-3xl font-bold text-gray-800">

                        Gallery

                    </h2>

                    <p className="mt-2 text-gray-500">

                        Photos showcasing our work and impact.

                    </p>

                </div>

                <div
                    className="
                        h-14
                        w-14
                        rounded-2xl
                        bg-green-100
                        text-green-600
                        flex
                        items-center
                        justify-center
                    "
                >

                    <FiImage size={28} />

                </div>

            </div>

            {/* Empty */}

            {images.length === 0 ? (

                <div
                    className="
                        rounded-3xl
                        border
                        border-dashed
                        border-gray-300
                        bg-white
                        py-20
                        text-center
                    "
                >

                    <div
                        className="
                            mx-auto
                            h-20
                            w-20
                            rounded-full
                            bg-green-100
                            flex
                            items-center
                            justify-center
                            text-green-600
                        "
                    >

                        <FiImage size={34} />

                    </div>

                    <h3 className="mt-5 text-2xl font-bold">

                        No Images Available

                    </h3>

                    <p className="mt-2 text-gray-500">

                        Gallery images will appear here.

                    </p>

                </div>

            ) : (

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    {images.map((image, index) => (

                        <div
                            key={index}
                            onClick={() =>
                                setSelectedImage(image)
                            }
                            className="
                                group
                                cursor-pointer
                                overflow-hidden
                                rounded-3xl
                                bg-white
                                shadow-lg
                                transition
                                hover:-translate-y-2
                                hover:shadow-2xl
                            "
                        >

                            <img
                                src={image}
                                alt=""
                                className="
                                    h-72
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-500
                                    group-hover:scale-110
                                "
                            />

                        </div>

                    ))}

                </div>

            )}

            {/* Preview */}

            {selectedImage && (

                <div
                    className="
                        fixed
                        inset-0
                        z-50
                        flex
                        items-center
                        justify-center
                        bg-black/80
                        backdrop-blur-sm
                        p-6
                    "
                >

                    <button
                        onClick={() =>
                            setSelectedImage(null)
                        }
                        className="
                            absolute
                            right-8
                            top-8
                            h-12
                            w-12
                            rounded-full
                            bg-white
                            flex
                            items-center
                            justify-center
                        "
                    >

                        <FiX size={24} />

                    </button>

                    <img
                        src={selectedImage}
                        alt=""
                        className="
                            max-h-[90vh]
                            max-w-[90vw]
                            rounded-3xl
                            shadow-2xl
                        "
                    />

                </div>

            )}

        </section>

    );

};

export default CharityGallery;