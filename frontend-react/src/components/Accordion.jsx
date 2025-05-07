import React from 'react'
import AccordionItem from './UI/AccordionItem';

function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  }

  if(!data || data.length === 0) {
    return (
      <p>No data Found!</p>
    )
  };

  return (
    <div className="w-full">
      {
        data.map((item, index) => (
          <AccordionItem key={item.id} id={item.id} toggleAccordion={toggleAccordion} activeIndex={activeIndex} item={item} index={index} />
        ))
      }
    </div>
  )
}

export default Accordion