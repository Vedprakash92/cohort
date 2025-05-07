import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function AccordionItem({ toggleAccordion, activeIndex, index, item, id }) {
  return (
    <div className={"border border-slate-200 px-4 hover:bg-slate-100 rounded-lg mb-1" + (activeIndex === index ? " bg-slate-100" : "")} key={id}>
        <button onClick={() =>toggleAccordion(index)} className="w-full flex justify-between items-center py-5 text-slate-800">
            <span className='font-medium text-xl font-sans'>{item.subject}</span>
            {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
        </button>
        {
            activeIndex === index && (
            <div id={`content-${index}`} className={"transition-all duration-500 ease-in-out" + (activeIndex === index ? " bg:white" : "")}>
                <div className="pb-5 text-base font-sans text-slate-500">
                {item.description}
                </div>
            </div>
            )
        }
    </div>
  )
}

export default AccordionItem