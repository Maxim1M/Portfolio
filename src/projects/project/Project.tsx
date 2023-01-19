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
            <div className={s.img}>
                 <a className={s.link}>Cмотреть</a>
            </div>
            <div className={s.title}>{title}</div>
            <span className={s.description}>
                {description}
            </span>
        </div>
    )
}
