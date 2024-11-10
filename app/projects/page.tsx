import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function projects() {
    return (
        <section id="Projects">
            <a href="#Projects" className="arrow"
            >
                <Image src="/assets/image.png" alt="" className="icon1"
                    width={100}
                    height={100}
                /></a>
            <p className="heading-p">Browse My Recent</p>
            <h1 className="heading">Projects</h1>
            <div className="container project-container">

                <div className="project">
                    <Image
                        src="/assets/banquee.png"
                        alt="banquee"
                        width={100}
                        height={100}
                    />
                    <h3>Project 1</h3>
                    <div className="header-action-area">
                        <Link href="https://github.com/AyeshaQadir7/Banquee-SaaS-Bank-Website" className="btn">GitHub</Link>
                        <Link href="https://banquee-ayeshaqadir.vercel.app/" className="btn">Live Demo</Link>
                    </div>
                </div>

                <div className="project">
                    <Image
                        src="/assets/innoweb.png"
                        alt="innoweb"
                        width={100}
                        height={100}
                    />
                    <h3>Project 1</h3>

                    <div className="header-action-area">
                        <Link href="https://github.com/AyeshaQadir7/InnoWeb" className="btn">GitHub</Link>
                        <Link href="https://innoweb-ayeshaqadir.vercel.app/" className="btn">Live Demo</Link>
                    </div>
                </div>

                <div className="project">
                    <Image
                        src="/assets/resumebuilder.png"
                        alt="resume builder"
                        width={100}
                        height={100}
                    />
                    <h3>Project 1</h3>
                    <div className="header-action-area">
                        <Link href="https://github.com/AyeshaQadir7/Hackathon_minus_one" className="btn">GitHub</Link>
                        <Link href="https://hackathonminusonemilestone05.vercel.app/" className="btn">Live Demo</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default projects