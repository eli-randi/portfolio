import { ContactForm } from '../../Components/Email form/Form'
import { sectionHeaders } from '../../Styling/Styling'
import GitHubIcon from '../../Assets/GitHubIconBlue.svg'
import LinkedInIcon from '../../Assets/LinkedInIcon.svg'
import CVIcon from '../../Assets/CVIcon.svg'
import EmailIcon from '../../Assets/EmailIcon.svg'

import './Contact.css'

const contactLinks = [
  {
    label: 'GitHub',
    icon: GitHubIcon,
    url: 'https://github.com/eli-randi'
  },
  {
    label: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/elisa-randisi-539267156/'
  },
  {
    label: 'CV',
    icon: CVIcon,
    url: ''
  },
  {
    label: 'Email',
    icon: EmailIcon,
    url: 'mailto:eli.randisi@gmail.com'
  }
]

export const Contact = () => {
  return (
    <div className="Contact-Page">
      {sectionHeaders('Contact', 'left')}
      <div className="ContactContent">
        <h2>
          Get to know my work:
        </h2>
        <div className='ContactLinks'>
          {contactLinks.map((contact) => {
            return (
              <div 
                key={contact.label}
                className='ContactLinkBox'
                onClick={() => window.open(contact.url)}
              >
                <h3>{contact.label}</h3>
                <img src={contact.icon} alt='Contact Icon' />
              </div>
            )
          })}
        </div>
        <div className='ContactFormIntro'>
          <p>I’m looking for new opportunities, drop me a message if you have one,
            want to give some feedback or just say hello!</p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}