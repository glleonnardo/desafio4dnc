import Styles from './Cards.module.css'
import ButtonA from '../elements/ButtonA'
import { useState } from 'react'

function Cards({ img, title, description, tech, repo, site, hiddenInfo,btnText,subtilteImg}) {
    const [info, setInfo] = useState(false);

    const handleInfoOn = () => {
        setInfo(true);
    };

    const handleInfoOff = () => {
        setInfo(false);
    };

    return (
        <div  className={Styles.card}>
            {info ? (
                <section>
                    <div className={Styles.cardImg} onClick={handleInfoOff} >
                        <img src={img} alt="ErroIMG" />
                        <p>Clique na imagem para retornar ao conteudo inicial!</p>
                    </div>
                    <div className={Styles.hiddenCard}>                      
                            <div className={Styles.hiddenInfo}>
                                <h3>Sobre o projeto:</h3>
                                <h4>{hiddenInfo}</h4>
                                <ButtonA className={Styles.hiddenBtn} id="btnCards" text={btnText} link={site} />
                            </div>
                    </div>
                    
                </section>
            ) : (
                <section >
                    <div className={Styles.cardImg} onClick={handleInfoOn}  >
                        <img src={img} alt="ErroIMG" />
                        <p>{subtilteImg}</p>
                    </div>
                    <div className={Styles.cardText} >
                        <h3>{title}</h3>
                        <h5>
                            <strong>Tecnologias: </strong> {tech}
                        </h5>
                        <p>{description}</p>
                        <ButtonA className={Styles.btn} id="btnCards" text={'Repositório'} link={repo} />
                    </div>

                </section>
            )}
        </div>
    );
}

export default Cards;