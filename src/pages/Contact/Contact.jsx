import React from 'react';
import {
    FaHospital,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope
} from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="w-full bg-gray-50 py-16">

            <div className="w-11/12 md:w-10/12 mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Contact Information
                    </h1>

                    <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto leading-8">
                        Get in touch with Dr. Md. Ashraful Islam for professional
                        neurological and medical consultation services.
                    </p>

                </div>

                {/* Contact Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Left Side */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">

                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            Chamber & Hospital Information
                        </h2>

                        {/* Hospital 1 */}
                        <div className="flex gap-5 mb-8">

                            <div className="text-primary text-3xl mt-1">
                                <FaHospital />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    Sathira Medical College Hospital
                                </h3>

                                <p className="text-gray-600 mt-2 leading-7">
                                    Specialized neurological and general medical
                                    healthcare services with modern treatment facilities.
                                </p>
                            </div>

                        </div>

                        {/* Hospital 2 */}
                        <div className="flex gap-5 mb-8">

                            <div className="text-primary text-3xl mt-1">
                                <FaHospital />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    Sangram Hospital Pvt.
                                </h3>

                                <p className="text-gray-600 mt-2 leading-7">
                                    Sahid Kajal Sarani, PalashPole, Satkhira
                                </p>
                            </div>

                        </div>

                        {/* Hospital 3 */}
                        <div className="flex gap-5">

                            <div className="text-primary text-3xl mt-1">
                                <FaHospital />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    Sauda Diagnostic & Consultancy Center
                                </h3>

                                <p className="text-gray-600 mt-2 leading-7">
                                    Beside of Judge Court, Palashpole, Satkhira
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">

                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            Contact Details
                        </h2>

                        {/* Phone */}
                        <div className="flex items-center gap-5 mb-8">

                            <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl">
                                <FaPhoneAlt />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Phone Number
                                </h3>

                                <p className="text-gray-600">
                                    +8801XXXXXXXXX
                                </p>
                            </div>

                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-5 mb-8">

                            <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl">
                                <FaEnvelope />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Email Address
                                </h3>

                                <p className="text-gray-600">
                                    doctor@example.com
                                </p>
                            </div>

                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-5">

                            <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl">
                                <FaMapMarkerAlt />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Location
                                </h3>

                                <p className="text-gray-600">
                                    Satkhira, Bangladesh
                                </p>
                            </div>

                        </div>

                        {/* Button */}
                        <button className="mt-10 w-full bg-primary text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 duration-300">
                            Book Appointment
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Contact;