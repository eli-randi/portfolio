import './Experience.css'
import React, { useState } from 'react'
import { sectionHeaders } from '../../Styling/Styling'

export const Experience = () => {

    const ExperienceList = [
        {
                name: 'Squeeze',
                date: '2022 - 2022',
                description: 'Squeeze description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.',
                specialClass: 'Squeeze'
            },
        {
                name: 'OHC',
                date: '2021 - 2022',
                description: 'OHC description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.',
                specialClass: 'OHC'
            },
        {
                name: 'Whatever',
                date: '2020 - 2021',
                description: 'Whatever description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.',
                specialClass: 'Whatever'
            }
    ]
    
    const [chosenExp, setChosenExp] = useState(ExperienceList[0])
    const [specialClassName, setSpecialClassName] = useState('Squeeze')

    function handleChooseExp (exp) {
        setChosenExp(exp);
        setSpecialClassName(exp.specialClass)
    }

    return (
        <div className="Experience-Page">
            {sectionHeaders('Experience', 'left')}
            <div className='ExpContent'>
                <div className={'ExpDetails ' + specialClassName}>
                    <div className='ExpDetailsHeader'>
                        <h3>{chosenExp.name}</h3>
                        <h6>{chosenExp.date}</h6>
                    </div>
                    <div className='ExpDetailsContent'>
                        <p>{chosenExp.description}</p>
                    </div>
                    
                </div>
                <div className='ExpList'>
                    {ExperienceList.map((exp) => {
                        return (
                            <div className={'ExpListItem ' + specialClassName} onClick={() => handleChooseExp(exp)}>
                                <p>{exp.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}