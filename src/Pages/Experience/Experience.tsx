import { useState } from 'react'

import { sectionHeaders } from '../../Styling/Styling'

import './Experience.css'

type ExperienceType = {
  name: string,
  date: string,
  role: string,
  description: string,
  specialClass: string
}

export const Experience: () => JSX.Element = () => {

  const ExperienceList: ExperienceType[] = [
    {
      name: 'Squeeze',
      date: '2022 - Present',
      role: 'Frontend Developer | Data Analytics Start-up',
      description: 'I\'ve been working with the guys at Squeeze (a marketing analytics start-up) as the sole frontend developer for the past few months. I work with them to design and build the customer portal, allowing them to manage their Squeeze account, as well as a new customer flow to allow the business to acquire new clients organically. I implemented this using React/React Query/TypeScript, working closely with the guys to understand their ideas and turn them into solutions.',
      specialClass: 'Squeeze'
    },
    {
      name: 'Studying',
      date: '2021 - 2022',
      role: 'Frontend Career Path | CodeCademy',
      description: 'Web Development had previously piqued my interest, but this course helped me to make a career change. I started by studying the CodeCademy Frontend course part-time (alongside my full-time job!) and eventually decided to bite the bullet, focusing my attention full-time on building my career as a frontend developer. The course covered a lot, all the way from the basics of HTML, through to building/testing React applications.',
      specialClass: 'Studying'
    },
    {
      name: 'OneHealth',
      date: '2021 - 2022',
      role: 'Account and Social Media Executive | Marketing Agency',
      description: 'I spent my time in this role responsible for around 15 client accounts. I worked closely with our tech and sales team to make sure everything ran smoothly, while maintaining good relationships with my clients and updating them on the progress of their projects. Thanks to my knowledge in digital marketing, I also took over the company\'s social media campaigns for our clients and introduced a new reporting tool to improve our efficiency.',
      specialClass: 'OHC'
    }
  ]

  const [chosenExp, setChosenExp] = useState<ExperienceType>(ExperienceList[0])
  const [specialClassName, setSpecialClassName] = useState<string>('Squeeze')

  function handleChooseExp(exp: ExperienceType) {
    setChosenExp(exp);
    setSpecialClassName(exp.specialClass)
  }

  return (
    <div className="Experience-Page">
      {sectionHeaders('Experience', 'left')}
      <div className='ExpContent'>
        <div className={'ExpDetails ' + specialClassName}>
          <div className='ExpDetailsHeader'>
            <h2>{chosenExp.name}</h2>
            <h5>{chosenExp.date}</h5>
          </div>
          <div className='ExpDetailsContent'>
            <h4>{chosenExp.role}</h4>
            <p>{chosenExp.description}</p>
          </div>

        </div>
        <div className='ExpList'>
          {ExperienceList.map((exp) => {
            return (
              <div
                key={exp.name}
                className={'ExpListItem ' + specialClassName}
                onClick={() => handleChooseExp(exp)}
              >
                <p>{exp.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}