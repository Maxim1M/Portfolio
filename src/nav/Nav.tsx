import React from 'react';
import s from './Navr.module.css'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href=''>Главная</a>
            <a href=''>Скиллы</a>
            <a href=''>Пректы</a>
            <a href=''>Контакты</a>
        </div>
    )
}