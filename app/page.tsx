import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
    <div>

      <header>
        <div className="container header-container">

          <div className="header-left">

            <Image
              src="/assets/mainimg.png"
              alt=""
              width={400}
              height={400}
            />
          </div>

          <div className="header-right">
            <p><b>Hello I&apos;m</b></p>
            <h1>Ayesha</h1>
            <h2>Front-End Developer</h2>

            <div className="header-action-area">
              <Link href="/projects" className="btn" download="./images/CV.pdf">Projects</Link>
              <Link href="/contact" className="btn btn-dark">Contact info</Link>
            </div>
            <div className="header-social">

              <Link
                href="https://www.linkedin.com/in/ayesha-a-qadir-30a0a72b9/"
                target="_blank"
                className="icon1">
                <i className="fa-brands fa-linkedin"></i></Link>
              <Link
                href="https://github.com/AyeshaQadir7"
                target="_blank"
                className="icon1">
                <i className="fa-brands fa-github"></i></Link>
            </div>
          </div>
          
        </div>
      </header>

    </div>
  )
}

export default page