
import styles from './Navbar.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'
import { useState } from 'react'
import Tech from '../elements/Tech'

 
function Navbar() {
    const [showTechnologies, setShowTechnologies] = useState(false);

    const handleToggleTechnologies = () => {
        setShowTechnologies(!showTechnologies);
       
        window.scrollTo({
            top: 0,
            behavior: "smooth"   
        });
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <><nav className={styles.navbar}>
            <div  className={styles.links}>
                <ul>
                    <li><Nav.Link  onClick={() => scrollToSection('projects')} >Projetos</Nav.Link></li>
                    <li><Nav.Link onClick={() => scrollToSection('timeline')}>Sobre mim</Nav.Link></li>
                    <li><Nav.Link href='#' onClick={handleToggleTechnologies}>Tecnologias</Nav.Link></li>
                </ul>
            </div>
            <div className={styles.icons}>
                <ul>
                    <li><a target="_blank" href="https://github.com/glleonnardo"><FaGithub className={styles.iconSize} /></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/lleonnardo/"><FaLinkedin className={styles.iconSize} /></a></li>
                </ul>
            </div>

        </nav>
            {showTechnologies && (
                <div>
                    <Tech />
                </div>
            )}
        </>
    );
}

export default Navbar;