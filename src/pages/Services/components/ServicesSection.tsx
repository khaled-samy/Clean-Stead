import React from 'react'
import ServicesItems from './servicesData'
import ServiceSection from './ServiceSection'

interface IServicesSection {
  itemsNumber: number
  showMoreItems: () => void
}

export default function ServicesSection ({ itemsNumber, showMoreItems }: IServicesSection): JSX.Element {
  return (
        <>

        {/* Services Items Information Section */}
        <h3 className="text-[25px] pt-[60px] pb-[35px] font-bold">
          الخدمات المتوفرة في تنظيف المنازل
        </h3>
        <div className="flex gap-10 flex-wrap">
          {ServicesItems.slice(0, itemsNumber).map((service, index) => (
            <ServiceSection key={index} index={0} service={service.text}/>
          ))}
        </div>
        {ServicesItems.length > itemsNumber && (

        // Service Item Section
          <div className="flex justify-between items-center w-full h-[36px] text-center mt-[25px]">
            <div className="h-0.5 bg-[#F2F2F2] my-5 md:w-4/5 w-full"></div>
            <div className=" md:w-[16%] w-full">
              <button
                className="w-[100%]"
                onClick={showMoreItems}
              >
                رؤية المزيد &#9207;
              </button>
            </div>
            <div className="h-0.5 bg-[#F2F2F2] my-5 md:w-4/5 w-full"></div>
          </div>
        )}
      </>
  )
}
