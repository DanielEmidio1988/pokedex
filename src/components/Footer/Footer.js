import { FooterContainer } from "./styleFooter"
import github from "../../assets/logo-github.svg"
import linkedin from "../../assets/logo-linkedin.svg"
import email from "../../assets/mail.svg"

function Footer () {
    return (
        <FooterContainer>
            <section>
                <div>
                    <h3>Este projeto foi desenvolvido por Daniel Emidio</h3>
                </div>
                <div>
                    <span><img src={github} alt="icone github"/></span>
                    <span><img src={linkedin} alt="icone linkedin"/></span>
                    <span><img src={email} alt="icone email"/></span>
                </div>
            </section>
        
        </FooterContainer>
    )
}

export default Footer