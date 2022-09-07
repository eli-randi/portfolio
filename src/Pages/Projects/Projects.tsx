import { sectionHeaders } from '../../Styling/Styling';

import RandditLogo from '../../Assets/RandditLogo.png'
import ZoopisaLogo from '../../Assets/ZoopisaLogo.png'
import SqueezeLogo from '../../Assets/SqueezeLogo.png'
import RandditSS from '../../Assets/RandditScreenshot.png'
import ZoopisaSS from '../../Assets/ZoopisaScreenshot.png'
import SqueezeSS from '../../Assets/SqueezeScreenshot.png'
import GitHubLogo from '../../Assets/GitHubLogo.svg'
import UrlLogo from '../../Assets/UrlLogo.svg'

import './Projects.css'

type ProjectType = {
  name: string,
  description: string[],
  tech: string[],
  logo: string,
  image: string,
  gitHubUrl: string,
  url: string,
  borderColour: string,
  footerColour: string
}

const projects: ProjectType[] = [
  {
    name: 'Squeeze',
    description: ['I worked with Squeeze to create their customer portal and new customer flow.',
      'As a backend heavy company, my projects are built to have a generic frontend, which renders according to responses by the backend.',
      'The apps have been built with React and I later implemented React Query and TypeScript to build a stronger frontend for future developers to manage.'
    ],
    tech: ['React', 'React Query', 'TypeScript'],
    logo: SqueezeLogo,
    image: SqueezeSS,
    gitHubUrl: 'https://github.com/eli-randi/squeeze-public',
    url: 'https://portal2.thisissqueeze.com/home',
    borderColour: '#FDCA19',
    footerColour: '#CC7A00'
  },
  {
    name: 'Randdit',
    description: ['Reddit + Randisi = Randdit! Created using the Reddit API and OAuth2.',
      'This mobile-friendly app renders the subreddits and posts you would see on your own personal Reddit account, and you can also follow/unfollow pages and vote on posts.',
      'Randdit is built using React and Redux, and also has an infinite scroll functionality that updates the store.'],
    tech: ['React', 'Redux', 'JavaScript', 'CSS'],
    logo: RandditLogo,
    image: RandditSS,
    gitHubUrl: 'https://github.com/eli-randi/randdit',
    url: 'https://randdit.elisa.codes/homepage',
    borderColour: '#C0B7F9',
    footerColour: '#7C559A'
  },
  {
    name: 'Zoopisa',
    description: ['As you can see, I love morphing website names into my own. Zoopisa is my version of Zoopla (+ Elisa).',
      'I used the Zoopla and GoogleMaps APIs to create an interactive map and house list where you can search a house on sale and see it on the map.',
      'Clicking on the houses will also open a modal where more details and similar houses will be displayed.'],
    tech: ['React', 'Git', 'JavaScript', 'CSS'],
    logo: ZoopisaLogo,
    image: ZoopisaSS,
    gitHubUrl: 'https://github.com/eli-randi/zoopisa',
    url: 'https://zoopisa.elisa.codes/',
    borderColour: '#DB7F8E',
    footerColour: '#B15766'
  }
];


export const Projects = () => {

  return (
    <div className="Projects-Page">
      {sectionHeaders('Projects', 'right')}
      <p className='ProjectsNote'>Please note that all my projects were built from scratch from my own design in Figma</p>
      <div className="ProjectContent">
        {projects.map((project) => {
          return (
            <div
              key={project.name}
              className='ProjectBox'>
              <div
                onClick={() => window.open(project.url)}
                className='ProjectImage'>
                <img src={project.image} style={{ borderColor: project.borderColour }} alt='Screenshot of project website' />
                <div className='ProjectLogo'>
                  <img src={project.logo} alt='Project Logo' />
                </div>
              </div>
              <div className='ProjectDescription'>
                <div className='DescriptionParagraph'>
                  {project.description.map((descriptionText) => <p key={descriptionText}>{descriptionText}</p>)}
                </div>
                <h4>{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</h4>
              </div>
              <div className='ProjectLinks' style={{ backgroundColor: project.footerColour }}>
                <div className='ProjectLinksImg'>
                  <img src={GitHubLogo} onClick={() => window.open(project.gitHubUrl)} alt='GitHub Logo' />
                  <img src={UrlLogo} onClick={() => window.open(project.url)} alt='External Link Icon' />
                </div>
                <h3>{project.name}</h3>
              </div>
            </div>
          )
        })}
      </div>
      <div className='PortfolioBox'>
        <div className='PortfolioLinks'>
          <h3>And of course, this portfolio!</h3>
          <img src={GitHubLogo} onClick={() => window.open('https://github.com/eli-randi/portfolio')} alt='GitHub Logo' />
        </div>
        <div className='PortfolioDescription'>
          <p>I built my portfolio in React, but I also experimented with some fun packages and animations, including AOS/SVG/Lottie animations, FormSpree, and some good old fashioned CSS.</p>
        </div>
      </div>
    </div>
  )
}