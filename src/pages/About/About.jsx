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
                            <h1 className="text-2xl pt-4">
                                {' '}
                                <span>Dr. Md. Ashraful</span> <span>Islam </span>
                            </h1>
                            <span className="text-primary"> opustamc</span>@
                            <span className="text-primary">gmail.com </span>
                            <p className="pb-2 text-lg">MBBS | BCS(Health)</p>

                            <div className="flex  gap-3 justify-center pb-2  ">
                                <button className="block bg-primary text-white text-lg px-2">
                                    {' '}
                                    <a
                                        href="https://docs.google.com/document/d/1hqWNarSvcF79h_sEN9XZyhvHr8jmTnX9z1vCtVR523A/edit?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Resume{' '}
                                    </a>{' '}
                                </button>
                                <button className="block bg-primary text-white text-lg px-2">
                                    <a
                                        href="https://docs.google.com/document/d/18BPN4SbpqSpByy9FXLHJ5_IaZi3icNlqP3pkmSeOfjI/edit?tab=t.0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        CV{' '}
                                    </a>
                                </button>
                            </div>
                            <div className="contactme pb-2">
                                <div className="flex justify-center gap-3">
                                    <a
                                        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=indro.cse.bu@gmail.com"
                                        title="Email"
                                        className="block"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-solid fa-envelope text-3xl hover:text-primary"></i>
                                    </a>

                                    <a
                                        href="https://github.com/indrojitmondal"
                                        title="Github"
                                        className="block"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-github text-3xl hover:text-primary"></i>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/indrojit-mondal-8a36b315a/"
                                        title="Linkedin"
                                        className="block"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa-brands fa-linkedin text-3xl hover:text-primary"></i>
                                    </a>

                                    <a
                                        href="https://www.youtube.com/@indrojitmondal8996"
                                        title="Youtube"
                                        className="block"
                                    >
                                        <i className="fa-brands fa-youtube text-3xl hover:text-primary"></i>
                                    </a>


                                    <a
                                        href="https://www.facebook.com/iamIndrojitMandol010"
                                        title="Facebook"
                                        className="block"
                                    >
                                        <i className="fa-brands fa-facebook text-3xl hover:text-primary"></i>
                                    </a>

                                   

                                    <a
                                        href="https://meet.google.com/vzp-rcgn-mhe"
                                        title="Google Meet"
                                        className="block"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fas fa-video text-3xl lg:text-3xl hover:text-primary"></i>
                                    </a>

                                    <div className>
                                        <a
                                            href="https://wa.me/8801966796110"
                                            title="WhatsApp"
                                            className="block"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fa-brands fa-whatsapp text-3xl hover:text-primary "></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <hr />
                        </div>

                        <div className="progrss  p-2">
                            <p className="text-justify  text-base">
                                As a Computer Science and Engineering graduate and a passionate programmer, He stays up-to-date with emerging technologies and embrace challenges to adapt and solve real-world problems effectively.
                            </p>

                            {/* Working Interest */}
                            <div className="Working-Interest">
                                <div className="pt-2 pb-1">
                                    <i className="fa-solid fa-computer"></i>
                                    <h1 className="inline-block font-medium"> &nbsp; His Working Interest:</h1>
                                </div>

                                <div className="pl-20">
                                   
                                   

                                     <div className="flex items-center ">
                                     
                                        
                                        <h2>✓ Web Application Development</h2>
                                    </div>

                                    <div className="flex items-center ">
                                 

                                 <h2>✓ Digital Marketing</h2>
                             </div>

                             <div className="flex items-center ">
                          

                                 <h2>✓ Graphics Designing</h2>
                             </div>
                               
                                    <div className="flex items-center ">
                                    
                                        <a
                                            href="https://www.leewayhertz.com/what-is-custom-software-development/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <h2 className> ✓ Custom Software Development</h2>
                                        </a>
                                    </div>

                                    <div className="flex items-center ">
                                 

                                        <h2>✓ Mobile Application Development</h2>
                                    </div>

                                    <div className="flex items-center ">
                                     

                                        <h2>✓ Quality Assurance & Testing</h2>
                                    </div>
                                    <div className="flex items-center ">
                                       
                                        <h2>✓ DevOps Engineering</h2>
                                    </div>
                                    <div className="flex items-center ">
                                     

                                        <h2>✓ Cybersecurity</h2>
                                    </div>
                                    <div className="flex items-center ">
                                    

                                        <h2>✓ Computer Networking</h2>
                                    </div>
                                    <div className="flex items-center ">
                                     

                                        <h2>✓ Machine Learning</h2>
                                    </div>

                                    <div className="flex items-center">
                                  

                                        <h2>✓ Robotics</h2>
                                    </div>

                                    <div className="flex items-center">
                                     

                                        <h2>✓ Internet of Things(IoT)</h2>
                                    </div>
                                    <div className="flex items-center">
                                        
                                        <h2>✓ Embedded Systems</h2>
                                    </div>
                                </div>
                            </div>

                            {/* Age */}

                            
                          
                            {/* Home */}

                            <div className="LivesIn">
                                <div className="pt-3 pb-1">
                                    <i className="fa-solid fa-house"></i>
                                    <h1 className="inline-block font-medium">&nbsp; Home: </h1>{' '}
                                    <a
                                        href="https://maps.app.goo.gl/SoqjTH11UWKLgeRc6"
                                        target="_blank"
                                        className=" hover:underline"
                                        rel="noopener noreferrer"
                                    >
                                        Paikgacha, Khulna, Bangladesh
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="about-right p-4 border rounded-sm border-gray-300 lg:col-span-8 lg:row-span-12 ">
                       

                        <p className=" text-justify  text-base">
                            {' '}
                            {/* <span>Welcome to Indrojit,</span> <br /> */}
                             This <span className="text-primary"> is Dr. Md. Ashraful Islam</span>, a passionate doctor dedicated to building innovative software. His SSC's institution is Lakshmikhola Collegiate School(LCS), Paikgacha, Khulna and HSC's institution is Paikgacha Govt College, Khulna. He received his Bachelor's degree in{' '}
                           
                            <span className="text-primary">Computer Science and Engineering(CSE) </span> from the{' '}
                            <a target="_blank" href="https://bu.ac.bd/" className="text-primary hover:underline " rel="noopener noreferrer">
                                University of Barishal.
                            </a>
                            &nbsp; 
                            Now he is taking  BD Govt Job preposition. His mission is NTRCA ICT Lecturer position right now. 
                            With 6 month of experience in ReactJS and NodeJS, alongside solving 400+ problems and 7 years experience of solving basic problems related to mathematics, algorithms, and data structures, He brings a strong technical foundation and a creative mindset to the table. His experience in software development has equipped me to tackle real-world challenges effectively.
                           
                            {/* flex flex-col md:flex-row gap-4 */}
                            
                        </p>

                        <h2 className="pb-2 text-justify  text-base">
                            His areas of expertise include <span className="text-primary">ReactJS, NodeJS, and MongoDB</span>. In free time, He enjoys solving problems on LeetCode and Codeforces to enhance his skills.
                        </h2>

                        

                    

                       
                        
                    </div>
                </div>
            </main>
            
            
        </div>
    );
};

export default About;