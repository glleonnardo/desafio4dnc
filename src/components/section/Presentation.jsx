import styles from './Presentation.module.css'
import { useEffect, useState } from 'react'
import ButtonA from '../elements/ButtonA'
import { FaBook, FaDesktop, FaLightbulb, FaRocket} from "react-icons/fa";

function Presentation() {

    const [text, setText] = useState('');
    const toRotate = [' Bem vindo ao meu portifolio ', '  Sou aspirante a Dev. Full-stack',];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100)
    
    useEffect(() => {
        let ticker = setInterval(() => {
            toType() 
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (!isDeleting && updatedText === fullText) {    
            setIsDeleting(true);      
            setDelta(250);

        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }
 

    return (
        <div id="presentation" className={styles.Presentation}>
            <h1><strong> Olá, eu sou Leonardo.  </strong></h1>
            <h2>*{text}</h2>

            <ul>
                <li><FaBook size={'16'} />&nbsp;Estudante de tecnologia; </li>
                <li><FaDesktop size={'16'} />&nbsp;Cursando na DNC, formaçao em tecnologia (Desenvolvedor Full-Stack);</li>
                <li><FaLightbulb  />&nbsp;Interesse em desenvolvimento front end e back end;</li>
                <li> <FaRocket size={'16'} />&nbsp;Buscando uma oportunidade de migração de carreira;</li>
            </ul>

            <div><ButtonA  text='Saber mais!' link='https://www.linkedin.com/in/gabriel-domingues-5b987b251/' /></div>

        </div>
    )
} 

export default Presentation