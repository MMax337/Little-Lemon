import Logo from '../assets/big_logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt='logo'></img>
      <section>
        <h3>Document Navigation</h3>
        <nav className='footer-nav'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservartions">Reservartions</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </section>
      <section>
        <h3>Contact</h3>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </section>
      <section>
        <h3>Social Media links</h3>
        <ul>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </section>
    </footer>
  )
}


export default Footer;