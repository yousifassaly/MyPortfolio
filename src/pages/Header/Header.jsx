import "./header.css"
import { CTA } from "./CTA"
import ME from "../../assets/me.png"
import { HeadSocials } from "./HeadSocials"


export default function Header () {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Yousif Assaly</h1>
                <h5 className="text-light">FullStack Devoloper</h5>
                <CTA />
                <HeadSocials />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
            </div>
        </header>
    )
}