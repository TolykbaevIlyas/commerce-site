import React from 'react'
import s from '../assets/css/style.module.css'
import { IIntroForPages } from '../types'

const IntroForPages = ({pageName}:IIntroForPages) => {
  return (
    <div className={`${s.IntroFPagesBg} text-center flex flex-col justify-center items-center`}>
        <h2 className={`${s.IntroTitle} font-bold`}>{pageName}</h2>
        <p>Home &gt; {pageName}</p>
    </div>
  )
}

export default IntroForPages