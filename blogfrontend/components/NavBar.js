import Image from 'next/image'
import Link from 'next/link'
//import logo from '../public/vercel.svg'
import logo from '../public/logo.png'
const NavBar = () => {
  return (
  <nav className="nav-container">
    <div className = "nav-item-con">
      <Link href="/">
        <Image src  = {logo} 
        alt="Sanity blog" 
        width={140}
        height={140}
        />
      </Link>
    </div>
    <div className="nav-item-container">
      <p>Logo text !</p>    
    </div>
  </nav>
  )
}
export default NavBar