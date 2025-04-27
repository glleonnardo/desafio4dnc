import styles from '../section/Footer.module.css'
import { FaFigma, FaLinkedin, FaGithub } from "react-icons/fa";


function Footer() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.contact}>
                    <h2>Meu contato:</h2>
                    <h2>(31) 99999999</h2>
                </div>
                <div>
                    <h2>Email:</h2>
                    <h2>g.lleonnardo@gmail.com</h2>
                </div>
                <div className={styles.icons}>
                    <ul>
                        <li>
                            <a target="_blank" href="https://github.com/glleonnardo"><FaGithub className={styles.iconSize} /></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/lleonnardo/"><FaLinkedin className={styles.iconSize} /></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.figma.com/file/O2j7uVVhXUnV6dadZc2MMw/Desafio-03%3A-
                            Desenvolva-um-portfólio-com-React-hooks?type=design&node-id=0-1&mode=design&t=RKGkU5Vc57lJ
                            ZxN0-0"><FaFigma className={styles.iconSize} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
 
export default Footer;