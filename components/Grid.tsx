import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/Bento-grid";
import {gridItems} from "../data/index";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  
  return (
    <BentoGrid className="max-w-4xl h-full mx-auto z-20">
      {gridItems.map(({title, description, img, id, className, spareImg, imgClassName, titleClassName}, i) => (
        
        <BentoGridItem
          id={id}
          key={i}
          title={title}
          description={description}
          img = {img}
          // header={item.header}
          // icon={item.icon}
          // className={id === 1 || id === 6 ? "md:col-span-3 md:row-span-4" : ""}
          imgClassName={imgClassName}
          className={className}
        />
      ))}
    </BentoGrid>
  );
}

