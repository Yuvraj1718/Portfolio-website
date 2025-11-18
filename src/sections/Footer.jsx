import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container '>
        <div className="flex flex-col justify-center md:items-start items-center">
            <a href="/">Designed & Developed by Yuvraj</a>
        </div>
        <div className="socials">
          
            {socialImgs.map((img) => (
                <a className='icon flex flex-col items-center gap-1 group' target='_blank' href={img.url} key={img.name}>
                    <img src={img.imgPath} alt={img.name}
                    className="w-6 h-6"
                    />
                    <span className="text-xs font-medium text-gray-400 group-hover:text-indigo-400 transition-colors">
                {img.name}
              </span>
                </a>
            ))}
        </div>
            
         <div className="flex flex-col justify-center">
            <p className='text-center md:text-end'>
                © {new Date().getFullYear()} Yuvraj. All rights reserved.
            </p>
        </div>   

      </div>
    </footer>
  )
}

export default Footer
