import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer>
            <ul className="nav-links">
                <li><Link href="#About">About</Link></li>
                <li><Link href="#Experiences">Experience</Link></li>
                <li><Link href="#Projects">Project</Link></li>
                <li><Link href="#Contact">Contact</Link></li>
            </ul>
            <p>&copy; Ayesha Abdul Qadir 2024 || All Rights Reserved.</p>
        </footer>
    )
}

export default Footer