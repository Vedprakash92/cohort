import React from 'react'
import Accordion from '../components/Accordion';
import subjects  from '../dummyData/subjects.json';

function Tasks() {
  return (
    <>
    <div className='text-4xl font-bold w-full mb-4 flex justify-start items-center text-left'>
        Tasks
    </div>
     <Accordion data={subjects} />
    </>
   
  )
}

export default Tasks