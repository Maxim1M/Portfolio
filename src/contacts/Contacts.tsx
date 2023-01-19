import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Contact} from "./contact/Contact";

export const Contacts = () => {

    return (
        <div className={s.contactBlock}>
            <div className={`${sContainer.container} ${s.contactContainer}`}>
                <h2 className={s.title}>Контакты</h2>
                <Contact />
                <button className={s.freelance}>Отправить</button>
            </div>
        </div>
    )
}
