import React from 'react';

import image1 from '../../images/gallery1.jpg';
import image2 from '../../images/gallery2.jpg';
import image3 from '../../images/gallery3.jpg';
import image4 from '../../images/gallery4.jpg';
import image5 from '../../images/gallery5.jpg';
import image6 from '../../images/gallery6.jpg';

const Gallery = () => {

    const galleryImages = [
        {
            id: 1,
            image: image1,
            title: 'Neurology Consultation'
        },
        {
            id: 2,
            image: image2,
            title: 'Patient Care'
        },
        {
            id: 3,
            image: image3,
            title: 'Brain Treatment'
        },
        {
            id: 4,
            image: image4,
            title: 'Medical Support'
        },
        {
            id: 5,
            image: image5,
            title: 'Hospital Service'
        },
        {
            id: 6,
            image: image6,
            title: 'Spinal Care'
        }
    ];

    return (
        <div className="w-full bg-white py-16">

            <div className="w-11/12 md:w-10/12 mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Gallery
                    </h1>

                    <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto leading-8">
                        Explore moments of healthcare excellence, patient support,
                        neurological treatment, and professional medical services
                        provided by Dr. Md. Ashraful Islam.
                    </p>

                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {
                        galleryImages.map((item) => (
                            <div
                                key={item.id}
                                className="group overflow-hidden rounded-2xl shadow-lg relative"
                            >

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[320px] object-cover transform group-hover:scale-110 duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 duration-300 flex items-center justify-center">

                                    <h2 className="text-white text-2xl font-bold text-center px-4">
                                        {item.title}
                                    </h2>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
};

export default Gallery;