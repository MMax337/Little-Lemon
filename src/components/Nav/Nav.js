import logo from '../../assets/Logo.svg'
import NavList from './NavList'
import './Nav.css'


const Nav = () => {
  return (
    <nav className='top-nav'>
      <a href='/'>
        <img src={logo} alt='logo'></img>
      </a>
      <NavList />
    </nav>
  )
}

export default Nav;