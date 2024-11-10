import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'

function contact() {
    return (
        <section id="Contact">

            <p className="heading-p">Get In Touch</p>
            <h1 className="heading">Contact Me</h1>
            <div className="contact-container container">
                <div className="email">
                    <div><i className="fa-regular fa-envelope icon1"></i></div>
                    <Link href="mailto:ayeshaabdulqadir07@gmail.com">
                        <h5>Email Me</h5>
                    </Link>
                </div>
                <div className="linkedin">
                    <i className="fa-brands fa-linkedin-in icon1"></i>
                    <Link
                        href="https://www.linkedin.com/in/ayesha-a-qadir-30a0a72b9/"
                        target="_blank"
                    >
                        <h5>LinkedIn</h5>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default contact