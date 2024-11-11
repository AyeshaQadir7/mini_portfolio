import React from 'react'
import Image from 'next/image'

function about() {
    return (
        <div>

            <section id="About">
                <p className="heading-p">Get To Know More</p>
                <h1 className="heading">About Me</h1>
                <div className="container about-container">

                    <div className="about-left">
                        <Image
                            src="/assets/aboutimg.png"
                            width={350}
                            height={350}
                            alt="main image"
                        />
                    </div>

                    <div className="about-right">
                        <div className="basic-edu">
                            <div className="edu-box">

                                <div>
                                    <i className="fa-solid fa-laptop-code"></i>
                                </div>

                                <h4>Experience</h4>
                                <p>6+ month<br />frontend development</p>

                            </div>
                            <div className="edu-box">
                                <div>
                                    <i className="fa-solid fa-award"></i>

                                </div>
                                <h4>Education</h4>
                                <p>Cloud applied gen AI engineering<br /> at GIAIC</p>
                            </div>
                        </div>

                        <p>
                            I&apos;m <span>Ayesha Abdul Qadir</span>, a dedicated Front-end Web Developer specializing in creating sleek, responsive websites. I combine clean design with powerful functionality, ensuring every project is both visually engaging and user-friendly. I’m here to help you make a lasting impression online.
                        </p>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default about