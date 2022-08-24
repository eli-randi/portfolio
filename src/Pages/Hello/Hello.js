import ProfilePic from './ProfilePic.png'
import './Hello.css';
import CSSIcon from '../../Assets/CSSIcon.png'
import HTMLIcon from '../../Assets/HTMLIcon.png'
import JSIcon from '../../Assets/JSIcon.png'
import ReactIcon from '../../Assets/ReactIcon.png'
import ReduxIcon from '../../Assets/ReduxIcon.png'
import TypeScriptIcon from '../../Assets/TypeScriptIcon.png'

const technologies = [
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
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="Profile-Pic">
                    <img src={ProfilePic} height={200} alt='Profile'/>                
            </div>
            <div className='Technologies'>
                <h2>Some of the technologies you'll see in my projects</h2>
                <div className='TechnologiesBox'>
                    {technologies.map((tech) => {
                        return (
                            <div className='Technology'>
                                <div className='TechIcon'>
                                    <img src={tech.icon} height={20} />
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