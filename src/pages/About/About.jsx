import React, { useEffect, useState } from 'react';
// import  '../../js/dob.js'
import drImage from '../../../public/favIcon.jpg'


const About = () => {

   return (
        <div>
       
              {/* <title>Indrojit Mondal | Software Engineer | Entrepreneur </title>
               */}
              <meta name="description" content="Learn more about Indrojit Mondal, a full-stack developer based in Bangladesh." />
        <meta name="keywords" content="Indrojit Mondal, Web Developer, Full Stack Developer, React Developer Bangladesh" />
        <meta name="author" content="Indrojit Mondal" />
        <link rel="canonical" href="https://indrojit.vercel.app/about" />
            
            <main className="w-11/12 md:w-10/12 bg-about py-10 mx-auto ">
                <div className="about-conatiner pb-12 w-full h-auto grid gap-6 grid-cols-1 lg:grid-cols-12 lg:grid-rows-12 ">
                    {/* left */}
                    <div className="about-left border rounded-b-md shadow-md  lg:col-span-4 lg:row-span-12">
                        {/* <img src="images/indrojit@ku.jpg" className="w-full rounded-sm " alt="indrojit"> */}
                        <img src={drImage} className="w-full rounded-sm " alt="indrojit" />

                        <div className="w-full text-center ">
                            {/* <h1>Indrojit Mondal</h1> */}
                            <h1 className="text-3xl pt-4">
                                {' '}
                                <span>Dr. Md. Ashraful</span> <span>Islam </span>
                            </h1>
                            {/* <span className="text-primary"> opustamc</span>@
                            
            <span className="text-primary">gmail.com </span>
                            
                             */}
                            <p className="pb-2 text-lg">MBBS | BCS(Health) <br />
                            FCPS(Neuro Medicine) (FP) <br />
                            CCD(Birdem), PGT(Medicine) <br />
                            <span className='text-md'>Experience in Medicine, Brain & Spinal Cord</span>
                            <br />
                            Sathira Medical College Hospital
                            </p> 
                            

                        

                            <hr />
                        </div>

                      
                    </div>

                    {/* Right */}
                    <div className="about-right p-4 border rounded-sm border-gray-300 lg:col-span-8 lg:row-span-12 ">
                       

                        <p className=" text-justify  text-base">
                            {' '}
                            {/* <span>Welcome to Indrojit,</span> <br /> */}
                              <span className="text-primary">  Dr. Md. Ashraful Islam</span> 
                               
                            
                            
                            {/* &nbsp;  */}
                          
                            {/* flex flex-col md:flex-row gap-4 */}
                            Dr. Md. Ashraful Islam is a dedicated and experienced medical professional specializing in Neuro Medicine, Brain, and Spinal Cord diseases. He completed his MBBS and BCS (Health) and further advanced his expertise through FCPS (Neuro Medicine) (FP), along with CCD from Birdem and PGT in Medicine. With extensive experience in treating neurological and general medical conditions, he is committed to providing compassionate, modern, and patient-centered healthcare services.

<br /> 
Currently serving at Sathira Medical College Hospital, Dr. Ashraful Islam focuses on the diagnosis and treatment of brain, nerve, and spinal cord disorders while ensuring quality medical care for every patient. His dedication, professionalism, and clinical expertise have earned the trust of many patients seeking advanced neurological and medical treatment.
                        </p>

                        {/* <h2 className="pb-2 text-justify  text-base">
                            His areas of expertise include <span className="text-primary">ReactJS, NodeJS, and MongoDB</span>. In free time, He enjoys solving problems on LeetCode and Codeforces to enhance his skills.
                        </h2> */}

                        

                    

                       
                        
                    </div>
                </div>
            </main>
            
            
        </div>
    );
};

export default About;