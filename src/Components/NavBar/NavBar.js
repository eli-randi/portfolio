import ELogo from '../../Assets/ELogo.png'
import './NavBar.css'
import NavLinkButton from './NavLinkButton.png'
import NavLinkButtonActive from './NavLinkButtonActive.png'


const activeLink =
    <div className='NavLinkButtonBox'>
        <img src={NavLinkButton} height={20} alt='Nav Link Button' className='InactiveButton' />
        <img src={NavLinkButtonActive} height={20} alt='Nav Link Button' className='ActiveButton' />
    </div>

const inactiveLink =
    <div className='NavLinkButtonBox'>
        <img src={NavLinkButton} height={20} alt='Nav Link Button' className='InactiveButton' />
    </div>

export const NavBar = (props) => {


    function handleNavLinks(link) {
        const refLink = document.getElementById(link);
        refLink.scrollIntoView({ behavior: 'smooth' });
    }

    const links = ['Hello', 'Experience', 'Projects', 'Contact']

    return (
        <div className='NavBar'>
            <div className="Logo">
                <img src={ELogo} height={'100%'} alt='E Logo' />
            </div>
            <div className='NavLinks'>
                {links.map((link) => {
                    return (
                        <div className='NavLink'
                            onClick={() => handleNavLinks(link)}>
                            {props.activeLink === link ? activeLink : inactiveLink}
                            <h6 className={props.activeLink === link ? 'ActiveTextLink' : 'InactiveTextLink'}>
                                {link}
                            </h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}