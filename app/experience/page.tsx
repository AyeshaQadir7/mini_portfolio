import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function experience() {
    return (
        <section id="Experiences">

            <Link href="#Experiences" className="arrow"
            >
                <Image
                    src="/assets/image.png"
                    alt="image"
                    className="icon1"
                    width={100}
                    height={100}
                />
            </Link>
            <p className="heading-p">Explore My</p>
            <h1 className="heading">Experience</h1>

            <div className="container experience-container">

                <div className="experience-box">
                    <h2>FrontEnd development</h2>
                    <div className="experience">

                        <div className="ex-div">
                            <div><i className="fa-solid fa-check"></i></div>
                            <div>
                                <h4>HTML</h4>
                                <p>Experienced</p>
                            </div>
                        </div>

                        <div className="ex-div">
                            <div><i className="fa-solid fa-check"></i></div>
                            <div>
                                <h4>CSS</h4>
                                <p>Experienced</p>
                            </div>
                        </div>

                        <div className="ex-div">
                            <div><i className="fa-solid fa-check"></i></div>
                            <div>
                                <h4>Typescript</h4>
                                <p>Experienced</p>
                            </div>
                        </div>

                        <div className="ex-div">
                            <div><i className="fa-solid fa-check"></i></div>
                            <div>
                                <h4>Javascript</h4>
                                <p>Experienced</p>
                            </div>
                        </div>

                        <div className="ex-div">
                            <div><i className="fa-solid fa-check"></i></div>
                            <div>
                                <h4>Next.js</h4>
                                <p>Experienced</p>
                            </div>
                        </div>

                        <div className="ex-div">
                            <div><i className="fa-solid fa-check"></i></div>
                            <div>
                                <h4>TailwindCss</h4>
                                <p>Experienced</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    )
}

export default experience