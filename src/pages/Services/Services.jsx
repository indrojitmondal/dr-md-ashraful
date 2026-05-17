import React from 'react';
import {
    FaBrain,
    FaStethoscope,
    FaUserMd,
    FaHeartbeat,
    FaProcedures,
    FaClinicMedical
} from 'react-icons/fa';

const Services = () => {
    return (
        <div className="w-full bg-gray-50 py-16">

            <div className="w-11/12 md:w-10/12 mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Medical Services
                    </h1>

                    <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto leading-8">
                        Dr. Md. Ashraful Islam provides advanced neurological and medical
                        healthcare services with modern diagnosis, compassionate treatment,
                        and patient-centered care.
                    </p>
                </div>

                {/* Services Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Service 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl duration-300">
                        <div className="text-primary text-5xl mb-5">
                            <FaBrain />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Neuro Medicine
                        </h2>

                        <p className="text-gray-600 leading-7">
                            Specialized treatment for neurological disorders including
                            headaches, migraines, epilepsy, dizziness, and nerve diseases.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl duration-300">
                        <div className="text-primary text-5xl mb-5">
                            <FaHeartbeat />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Brain Disorders
                        </h2>

                        <p className="text-gray-600 leading-7">
                            Diagnosis and management of brain-related conditions with
                            modern medical care and professional consultation.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl duration-300">
                        <div className="text-primary text-5xl mb-5">
                            <FaProcedures />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Spinal Cord Treatment
                        </h2>

                        <p className="text-gray-600 leading-7">
                            Treatment and consultation for spinal cord diseases,
                            back pain, nerve weakness, and mobility-related problems.
                        </p>
                    </div>

                    {/* Service 4 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl duration-300">
                        <div className="text-primary text-5xl mb-5">
                            <FaUserMd />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Specialist Consultation
                        </h2>

                        <p className="text-gray-600 leading-7">
                            Personalized medical consultation with proper diagnosis,
                            treatment planning, and long-term patient care support.
                        </p>
                    </div>

                    {/* Service 5 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl duration-300">
                        <div className="text-primary text-5xl mb-5">
                            <FaStethoscope />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            General Medicine
                        </h2>

                        <p className="text-gray-600 leading-7">
                            Comprehensive healthcare services for general medical
                            conditions with modern and patient-focused treatment.
                        </p>
                    </div>

                    {/* Service 6 */}
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl duration-300">
                        <div className="text-primary text-5xl mb-5">
                            <FaClinicMedical />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Patient Care Support
                        </h2>

                        <p className="text-gray-600 leading-7">
                            Dedicated healthcare support ensuring compassionate,
                            reliable, and quality treatment for every patient.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;