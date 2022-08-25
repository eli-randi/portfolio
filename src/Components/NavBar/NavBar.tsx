import ELogo from '../../Assets/ELogo.png'
import NavLinkButton from '../../Assets/NavLinkButton.png'
import NavLinkButtonActive from '../../Assets/NavLinkButtonActive.png'

import './NavBar.css'


const activeLinkBox: JSX.Element =
  <div className='NavLinkButtonBox'>
    <img src={NavLinkButton} height={20} alt='Nav Link Button' className='InactiveButton' />
    <img src={NavLinkButtonActive} height={20} alt='Nav Link Button' className='ActiveButton' />
  </div>

const inactiveLinkBox: JSX.Element =
  <div className='NavLinkButtonBox'>
    <img src={NavLinkButton} height={20} alt='Nav Link Button' className='InactiveButton' />
  </div>

export const NavBar : ( activeLink: any ) => JSX.Element = ({ activeLink }) => {
  const handleNavLinks: (link: string) => void = (link) => {
    const refLink: HTMLElement | null = document.getElementById(link);
    refLink?.scrollIntoView({ behavior: 'smooth' });
  }

  const links: string[] = ['Hello', 'Experience', 'Projects', 'Contact']

  return (
    <div className='NavBar'>
      <div className="Logo">
        <img src={ELogo} height={'100%'} alt='E Logo' />
      </div>
      <div className='NavLinks'>
        {links.map((link) => {
          return (
            <div 
              className='NavLink'
              onClick={() => handleNavLinks(link)}
              key={link}
              >
              {activeLink === link ? activeLinkBox : inactiveLinkBox}
              <h6 className={activeLink === link ? 'ActiveTextLink' : 'InactiveTextLink'}>
                {link}
              </h6>
            </div>
          )
        })}
      </div>
    </div>
  )
}
