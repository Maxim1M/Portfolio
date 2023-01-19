import React, {useState} from 'react';
import s from './Projects.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {

    const [projects, setProjects] = useState([
        {id:1, title: 'Название проекта', description: 'Краткое описание'},
        {id:2, title: 'Название проекта', description: 'Краткое описание'},
    ])

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My projects</h2>
                <div className={s.projects}>
                    {projects.map(el => {
                        return (
                            <Project key={el.id} id={el.id} title={el.title} description={el.description}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
