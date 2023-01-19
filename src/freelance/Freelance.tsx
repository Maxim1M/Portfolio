import React from 'react';
import s from './Freelance.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Freelance = () => {

    return (
        <div className={s.freelanceBlock}>
            <div className={`${sContainer.container} ${s.freelanceContainer}`}>
                <h2 className={s.title}>Рассматриваю вариант удаленной работы</h2>
                <button className={s.freelance}>Нанять меня</button>
            </div>
        </div>
    )
}
