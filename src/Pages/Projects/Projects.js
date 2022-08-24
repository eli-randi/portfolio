import './Projects.css'
import { sectionHeaders } from '../../Styling/Styling';
import RandditLogo from '../../Assets/RandditLogo.png'
import ZoopisaLogo from '../../Assets/ZoopisaLogo.png'
import SqueezeLogo from '../../Assets/SqueezeLogo.png'
import RandditSS from '../../Assets/RandditScreenshot.png'
import ZoopisaSS from '../../Assets/ZoopisaScreenshot.png'
import SqueezeSS from '../../Assets/SqueezeScreenshot.png'
import GitHubLogo from '../../Assets/GitHubLogo.svg'
import UrlLogo from '../../Assets/UrlLogo.svg'

export const Projects = () => {

    const projects = [
        {
            name: 'Randdit',
            description: 'Randdit ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            logo: RandditLogo,
            image: RandditSS,
            gitHubUrl: 'https://github.com/eli-randi/randdit',
            url: 'https://randdit.elisa.codes/homepage',
            borderColour: '#C0B7F9',
            footerColour: '#7C559A'
        },
        {
            name: 'Zoopisa',
            description: 'Zoopisa ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            logo: ZoopisaLogo,
            image: ZoopisaSS,
            gitHubUrl: 'https://github.com/eli-randi/zoopisa',
            url: 'https://zoopisa.elisa.codes/',
            borderColour: '#DB7F8E',
            footerColour: '#B15766'
        },
        {
            name: 'Squeeze',
            description: 'Squeeze ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            logo: SqueezeLogo,
            image: SqueezeSS,
            gitHubUrl: 'https://github.com/eli-randi/squeeze-portal',
            url: 'https://portal2.thisissqueeze.com/home',
            borderColour: '#FDCA19',
            footerColour: '#CC7A00'
        },


    ]

    return (
        <div className="Projects-Page">
            {sectionHeaders('Projects', 'right')}
            <div className="ProjectContent">
                {projects.map((project, index) => {

                    return (
                        <div className='ProjectBox'>
                            <div className='ProjectImage'>
                                <img src={project.image} style={{ borderColor: project.borderColour }} />
                                <div className='ProjectLogo'>
                                    <img src={project.logo} />
                                </div>
                            </div>
                            <div className='ProjectDescription'>
                                <p>{project.description}</p>
                            </div>
                            <div className='ProjectLinks' style={{backgroundColor: project.footerColour}}>
                                <div className='ProjectLinksImg'>
                                <img src={GitHubLogo} onClick={() => window.open(project.gitHubUrl)} />
                                <img src={UrlLogo} onClick={() => window.open(project.url)} />
                                </div>
                                <h3>{project.name}</h3>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}