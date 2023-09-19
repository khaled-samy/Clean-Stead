import React from 'react'
import { Link } from 'react-router-dom'
import Service from '../../../assets/service.png'

interface IServiceSection {
  index: number
  service: string
}

export default function ServiceSection ({ service }: IServiceSection): JSX.Element {
  return (
        <>
            <Link
              to="/service"
              className="w-[270px] h-[80px]"
            >
              <div className="flex border border-solid rounded-xl w-[100%] h-[100%] items-center">
                <img
                  className="h-[70px] rounded-xl mx-1"
                  src={Service}
                  alt="service"
                />
                <p className='pr-4'>{service}</p>
              </div>
            </Link>
      </>
  )
}
