import React from 'react';

const Footer = () => {
    return (
        <div className='font-roboto bg-about"'>
            <footer className="mt-10 footer footer-center bg-footer  p-8">

                <aside>
                    <p className="font-light text-white text-base">© {new Date().getFullYear()} <a
                            href=""
                            >Dr. Md. Ashraful Islam</a>. All Rights Reserved.</p>

                </aside>
            </footer>
        </div>
    );
};

export default Footer;