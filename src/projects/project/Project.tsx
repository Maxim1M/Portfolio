import React from 'react';
import s from './Project.module.css'

type PropsType = {
    id: number
    title: string
    description: string
}

export const Project:React.FC<PropsType> = (props) => {
    const {id, title, description, ...otherProps} = props
    return (
        <div className={s.project}>
            <div className={s.icon}>
                <div className={s.link}>Cмотреть</div>
            </div>
            <p className={s.title}>{title}</p>
            <span className={s.description}>
                {description}
            </span>
        </div>
    )
}
