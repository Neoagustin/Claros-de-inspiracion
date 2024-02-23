import React from 'react'

export default function ClassItem({ classTitle, src }) {
   return (
      <a href={src} className='class-container'>
         <p>{classTitle}</p>
         <p id='start-title' className='start-title'>Comienza</p>
      </a>
   )
}
