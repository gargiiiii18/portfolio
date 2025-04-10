import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/Bento-grid';

const Grid = () => {
  return (
   <section id='about'>
        <BentoGrid>
            {[{id: 1, title: 'Title1', description: 'Desc1'}].map((item)=>(
                <BentoGridItem 
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                />
            ))}
        </BentoGrid>
   </section>
  )
}

export default Grid