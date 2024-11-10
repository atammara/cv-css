import Image from 'next/image';
import "../style/hero.css"
import { IoLogoGithub, IoLogoLinkedin, IoLogoVercel } from 'react-icons/io5';
import Link from 'next/link';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="content">
                <div className="text">
                    <h3>Ammara Rajput</h3>
                    <h1>UI/UX Designer</h1>
                    <p>Designed and developed responsive websites using Next.js, Tailwind CSS, and TypeScript for personal and academic projects.
                    Focused on delivering modern, scalable web solutions tailored to client and project needs.</p>
                    <div className="socialIcons">
                        <Link href='https://vercel.com/ammara-tasawwurs-projects' target='_blank'>
                        <i className="icon-vercel"><IoLogoVercel /></i>
                        </Link>
                        <Link href='https://www.linkedin.com/in/ammara-rajpoot-253b53283/' target='_blank'>
                        <i className="icon-linkedin"><IoLogoLinkedin /></i>
                        </Link>
                        <Link href='https://github.com/atammara?tab=repositories' target='_blank'>
                        <i className="icon-github"><IoLogoGithub /></i>
                        </Link>
                    </div>
                    <div className="buttons">
                        <Link href='/contact'>
                        <button className="ContactMe">Contact Me</button>
                        </Link>
                    </div>
                    <div className="stats-container">
                        <div className="stat-box">
                            <h3>1+</h3>
                            <p>Experiences</p>
                        </div>
                        <div className="stat-box">
                            <h3>21+</h3>
                            <p>Project done</p>
                        </div>
                        <div className="stat-box">
                            <h3>80+</h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>

                {/* Image component for profile image */}
                <div className="imageContainer">
                    <Image
                        src="/closeup.avif"
                        alt="Profile Image"
                        width={400}
                        height={500}
                        className="profileImage"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
