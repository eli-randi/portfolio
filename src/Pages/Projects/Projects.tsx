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
    description: ['As a very back-end heavy start-up, my projects in Squeeze were aimed at having a very generalised front-end, so that the back-end could grow and develop without having to make any heavy changes in the front-end.',
      'Both the management portal and the new customer flow I have created helped the team save time and the sanity of dan.'],
    tech: ['React', 'ReactQuery', 'TypeScript', 'JavaScript', 'Git'],
    logo: SqueezeLogo,
    image: SqueezeSS,
    gitHubUrl: 'https://github.com/eli-randi/squeeze-portal',
    url: 'https://portal2.thisissqueeze.com/home',
    borderColour: '#FDCA19',
    footerColour: '#CC7A00'
  },
  {
    name: 'Randdit',
    description: ['Reddit + Randisi = Randdit! Created using the Reddit API and OAuth2.',
      'This mobile-friendly app renders the subreddits and posts you would see on your own personal Reddit account.',
      'Randdit uses Redux to store your posts and has an infinite scroll functionality embedded in as well.',
      'Login to see how it works! '],
    tech: ['React', 'Redux', 'JavaScript', 'Git', 'CSS'],
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
      'If I have reached my monthly API requests to Zoopla, try searching for a house in Westbury :)'],
    tech: ['React', 'GoogleMaps SDK', 'JavaScript', 'Git', 'CSS'],
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
                <div>
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
          <p>To build this portfolio I have experimented with some fun packages and animations, including AOS, SVG and Lottie animations, a FormSpree email form, and some good old fashioned CSS.</p>
          <p>For this project I used React, TypeScript and a lot of CSS</p>
        </div>
      </div>
    </div>
  )
}