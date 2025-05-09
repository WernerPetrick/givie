import { Link } from '@inertiajs/react'
import GiftLogo from '../../assets/gift-logo.png'

function Footer() {
  return(
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-base-content p-10">
        <aside>
          <img 
            src={GiftLogo} 
            alt="Givie Logo" 
            className="w-16 h-auto mb-2" 
          />
          <p>
            Givie
            <br />
            No More Guessing, Just Givie
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link className='link link-hover'>About Us</Link>
          <Link className='link link-hover'>Contact</Link>
          <Link className='link link-hover'>Careers</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className='link link-hover'>Terms of use</Link>
          <Link className='link link-hover'>Privacy policy</Link>
          <Link className='link link-hover'>Cookie policy</Link>
        </nav>
      </footer>
    </>
  )
}

export default Footer