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
      role: 'Front-end Developer Contractor | Data Analytics Start-up',
      description: 'Worked for a marketing analytics start-up as main front-end developer on a project-base. Designed and built the internal and customer facing platform management portal and new customer flow to create a brand-centered UX. Focused on basing their future code base on React, ReactQuery, TypeScript, and used libraries such as MUI for certain functionalities.',
      specialClass: 'Squeeze'
    },
    {
      name: 'OneHealth Communications',
      date: '2021 - 2022',
      role: 'Account and Social Media Executive | Marketing Agency',
      description: 'Responsible for the management and delivery of concurrent projects across over 15 client accounts by translating briefs into actions across different internal teams and monitoring and reporting on their performance. Developed in my role by taking over the management of social media advertisement for clients. Responsible for expanding and improving on their strategies by implementing a new reporting platform (Squeeze actually!) in our client deliverables. ',
      specialClass: 'OHC'
    },
    {
      name: 'Studying',
      date: '2021 - 2022',
      role: 'Front-end Career Path | CodeCademy',
      description: 'My interest and passion for website development pushed me to make a career change. Started by studying the CodeCademy Front-end course part-time whilst working and then made a bet on myself and focused my attention full-time to engineering as I started working on my projects.',
      specialClass: 'Studying'
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