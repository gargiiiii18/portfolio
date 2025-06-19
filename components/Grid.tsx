import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bento-grid";
import {gridItems} from "../data/index";

export function BentoGridDemo() {
  
  return (
    <BentoGrid className="max-w-4xl h-full mx-auto z-20">
      {gridItems.map(({title, description, img, id, className, imgClassName, desc2}, i) => (
        
        <BentoGridItem
          id={id}
          key={i}
          title={title}
          description={description}
          desc2={desc2}
          img = {img ?? undefined}
          imgClassName={imgClassName}
          className={className}
        />
      ))}
    </BentoGrid>
  );
}

