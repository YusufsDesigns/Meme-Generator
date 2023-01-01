import '../style.css'
import Logo from '../assets/logo.png'

export default function Header(){
    return(
        <nav className="navbar">
            <img src={Logo} alt="" />
            <span>React Course - Project 3</span>
        </nav>
    )
}