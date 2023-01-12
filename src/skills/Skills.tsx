import React, {useState} from 'react';
import s from './Skills.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {

    const [skill, setSkill] = useState([
        {id:1, title: 'JS', description: 'Описание способности 1'},
        {id:2, title: 'CSS', description: 'Описание способности 2'},
        {id:3, title: 'React', description: 'Описание способности 3'}
    ])

    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    {skill.map(el => {
                        return (
                            <Skill key={el.id} id={el.id} title={el.title} description={el.description}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
