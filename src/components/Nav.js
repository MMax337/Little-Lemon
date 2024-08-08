import logo from '../assets/Logo.svg'
import './Nav.css'


const Nav = () => {
  return (
    <nav className='top-nav'>
      <a href='/'>
        <img src={logo} alt='logo'></img>
      </a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservartions">Reservartions</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav;