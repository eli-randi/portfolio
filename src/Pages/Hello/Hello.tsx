import ProfilePic from '../../Assets/ProfilePic.png'
import './Hello.css';
import CSSIcon from '../../Assets/CSSIcon.png'
import HTMLIcon from '../../Assets/HTMLIcon.png'
import JSIcon from '../../Assets/JSIcon.png'
import ReactIcon from '../../Assets/ReactIcon.png'
import ReduxIcon from '../../Assets/ReduxIcon.png'
import TypeScriptIcon from '../../Assets/TypeScriptIcon.png';
import GitIcon from '../../Assets/GitLogo.svg'

const technologies: { name: string, icon: string }[] = [
  {
    name: 'React',
    icon: ReactIcon
  },
  {
    name: 'JavaScript',
    icon: JSIcon
  },
  {
    name: 'TypeScript',
    icon: TypeScriptIcon
  },
  {
    name: 'Redux',
    icon: ReduxIcon
  },
  {
    name: 'Git',
    icon: GitIcon
  },
  {
    name: 'HTML',
    icon: HTMLIcon
  },
  {
    name: 'CSS',
    icon: CSSIcon
  },
]


export const Hello = () => {

  return (
    <div className="Hello-Page">
      <div className='Content'>
        <div className="Introduction">
          <h1>Hello,</h1>
          <p>I'm <span>Elisa Randisi</span> and I'm a frontend developer based in the UK.
            I'm passionate about creating digital products that are both technically and visually great. 
            In my free time you can find me rewatching old shows I've already seen (currently Seinfeld) and escaping the British weather!
          </p>
        </div>
        <div className="Profile-Pic">
          <img src={ProfilePic} height={200} alt='Profile' />
        </div>
        <div className='Technologies'>
          <h3>Some of the technologies you'll see in my projects</h3>
          <div className='TechnologiesBox'>
            {technologies.map((tech) => {
              return (
                <div
                  key={tech.name}
                  className='Technology'>
                  <div className='TechIcon'>
                    <img src={tech.icon} height={20} alt='Computing language icon' />
                  </div>
                  <div className='TechName'>
                    <p>
                      {tech.name}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}