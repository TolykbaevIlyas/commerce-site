'use client'
import React from 'react'
import { IButton } from '../types'
import s from './assets/style/style.module.css'

const Button = ({children,onClick,className,type,variant}:IButton) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`${className}
                  ${variant === "1" ? `  font-bold text-white bg-primary rounded-sm ${s.Button}` : null}
                  ${variant === "2" ? `` : null}
                  ${variant === "3" ? ` font-bold text-black rounded-lg border-2 border-black ${s.Button}` : null}
                  ${variant === "4" ? ` font-bold text-primary border-2 border-primary rounded-sm ${s.Button}` : null}
                  ${variant === "5" ? ` font-bold text-primary bg-white rounded-sm ${s.Button}` : null}
                  ${variant === "6" ? ` font-bold bg-primary4 rounded-sm` : null}
                  `}
                  
                  >
        {children}
    </button>
  )
}

export default Button