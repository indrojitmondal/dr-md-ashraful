import React from 'react';
// import  '../../js/dob.js'

import drImage from '../../../public/favIcon.jpg';

import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';

const About = () => {
    return (
        <div>
            {/* SEO Meta Tags */}
            <meta
                name="description"
                content="Learn more about Dr. Md. Ashraful Islam, Neuro Medicine Specialist."
            />
            <meta
                name="keywords"
                content="Dr. Ashraful Islam, Neuro Medicine, Brain Specialist, Spinal Cord Specialist"
            />
            <meta name="author" content="Indrojit Mondal" />
            <link rel="canonical" href="https://indrojit.vercel.app/about" />

            <main className="w-11/12 md:w-10/12 bg-about py-10 mx-auto">
                <div className="about-container pb-12 w-full grid gap-6 grid-cols-1 lg:grid-cols-12">

                    {/* Left Side */}
                    <div className="about-left border rounded-b-md shadow-md lg:col-span-4">
                        
                        <img
                            src={drImage}
                            className="w-full h-[450px] object-cover rounded-sm"
                            alt="Dr. Md. Ashraful Islam"
                        />

                        <div className="w-full text-center px-4">
                            <h1 className="text-3xl pt-4 font-semibold">
                                <span>Dr. Md. Ashraful</span>{' '}
                                <span>Islam</span>
                            </h1>

                            <p className="pb-4 pt-2 text-lg leading-8">
                                MBBS | BCS(Health) <br />
                                FCPS(Neuro Medicine) (FP) <br />
                                CCD(Birdem), PGT(Medicine) <br />

                                <span className="text-md text-primary font-medium">
                                    Experience in Medicine, Brain & Spinal Cord
                                </span>

                                <br />

                                Sathira Medical College Hospital
                            </p>

                            <hr />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="about-right p-4 border rounded-sm border-gray-300 lg:col-span-8">

                        <p className="text-justify text-base leading-8">
                            <span className="text-primary font-semibold">
                                Dr. Md. Ashraful Islam
                            </span>{' '}
                            is a dedicated and experienced medical professional
                            specializing in Neuro Medicine, Brain, and Spinal
                            Cord diseases. He completed his MBBS and BCS
                            (Health) and further advanced his expertise through
                            FCPS (Neuro Medicine) (FP), along with CCD from
                            Birdem and PGT in Medicine.

                            <br />
                            <br />

                            With extensive experience in treating neurological
                            and general medical conditions, he is committed to
                            providing compassionate, modern, and patient-centered
                            healthcare services.

                            <br />
                            <br />

                            Currently serving at Sathira Medical College
                            Hospital, Dr. Ashraful Islam focuses on the
                            diagnosis and treatment of brain, nerve, and spinal
                            cord disorders while ensuring quality medical care
                            for every patient. His dedication, professionalism,
                            and clinical expertise have earned the trust of many
                            patients seeking advanced neurological and medical
                            treatment.
                        </p>

                        {/* Images Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">

                            <div className="w-full h-[250px] overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={image1}
                                    alt="Neuro Medicine"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full h-[250px] overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={image2}
                                    alt="Brain Treatment"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full h-[250px] overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={image3}
                                    alt="Spinal Cord Treatment"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default About;