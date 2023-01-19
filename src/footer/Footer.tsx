import React from 'react';
import s from './Footer.module.css'
import sContainer from '../common/styles/Container.module.css'
import {Foot} from "./foot/Foot";

export const Footer = () => {

    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Maksim Mikhailov</h2>
                <Foot />
                <p className={s.footer}>@2023 Все права защищены</p>
            </div>
        </div>
    )
}
