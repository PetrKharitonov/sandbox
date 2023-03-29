import "../.././styles/Nav.css"
import logo from "../../assets/img/Star.svg"

const Nav = () => {
  return (
    <div className='nav'>
        <img src={logo} alt="logo" className="navLogo"/>
    </div>
  )
}

export default Nav