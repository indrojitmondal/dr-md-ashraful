import React from 'react';
import doctorImage from '../../images/favIcon.jpg'; // Add doctor's image here
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="w-full bg-white">
            
            {/* Hero Section */}
            <section className="w-11/12 md:w-10/12 mx-auto py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    
                    {/* Left Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
                            Dr. Md. Ashraful Islam
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-semibold text-primary mt-4">
                            Specialist in Neuro Medicine, Brain & Spinal Cord Diseases
                        </h2>

                        <p className="text-gray-600 mt-6 leading-8 text-lg">
                            Dr. Md. Ashraful Islam is a dedicated and experienced medical professional 
                            specializing in Neuro Medicine, Brain, and Spinal Cord diseases. 
                            He completed his MBBS and BCS (Health) and further advanced his expertise 
                            through FCPS (Neuro Medicine) (FP), along with CCD from Birdem and 
                            PGT in Medicine.
                        </p>

                        <p className="text-gray-600 mt-4 leading-8 text-lg">
                            With extensive experience in treating neurological and general medical conditions, 
                            he is committed to providing compassionate, modern, and patient-centered healthcare services.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 duration-300">
                                Book Appointment
                            </Link>

                            <Link to={'/contact'} className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white duration-300">
                                Contact Now
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center">
                        <img
                            src={doctorImage}
                            alt="Dr. Md. Ashraful Islam"
                            className="w-full max-w-md h-[500px] object-cover rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Qualification Section */}
            <section className="bg-gray-100 py-16">
                <div className="w-11/12 md:w-10/12 mx-auto">
                    
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800">
                            Qualifications & Expertise
                        </h2>

                        <p className="text-gray-600 mt-4 text-lg">
                            Professional medical qualifications and specialized neurological expertise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl duration-300">
                            <h3 className="text-2xl font-bold text-primary mb-3">
                                MBBS
                            </h3>

                            <p className="text-gray-600">
                                Bachelor of Medicine and Bachelor of Surgery
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl duration-300">
                            <h3 className="text-2xl font-bold text-primary mb-3">
                                BCS (Health)
                            </h3>

                            <p className="text-gray-600">
                                Bangladesh Civil Service - Health Cadre
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl duration-300">
                            <h3 className="text-2xl font-bold text-primary mb-3">
                                FCPS
                            </h3>

                            <p className="text-gray-600">
                                FCPS (Neuro Medicine) (FP)
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl duration-300">
                            <h3 className="text-2xl font-bold text-primary mb-3">
                                CCD & PGT
                            </h3>

                            <p className="text-gray-600">
                                CCD from Birdem & PGT in Medicine
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16">
                <div className="w-11/12 md:w-10/12 mx-auto text-center">
                    
                    <h2 className="text-4xl font-bold text-gray-800">
                        About Doctor
                    </h2>

                    <p className="text-gray-600 mt-6 leading-8 text-lg max-w-4xl mx-auto">
                        Currently serving at Sathira Medical College Hospital, 
                        Dr. Ashraful Islam focuses on the diagnosis and treatment of brain, 
                        nerve, and spinal cord disorders while ensuring quality medical care 
                        for every patient.
                    </p>

                    <p className="text-gray-600 mt-4 leading-8 text-lg max-w-4xl mx-auto">
                        His dedication, professionalism, and clinical expertise have earned 
                        the trust of many patients seeking advanced neurological and medical treatment.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default Home;