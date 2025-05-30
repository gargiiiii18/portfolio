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
    <BentoGrid className="max-w-4xl mx-auto z-50">
      {gridItems.map(({title, description, img, id, className, spareImg, imgClassName, titleClassName}, i) => (
        <BentoGridItem
          id={id}
          key={i}
          title={title}
          description={description}
          img = {img}
          // header={item.header}
          // icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          // className={className}
        />
      ))}
    </BentoGrid>
  );
}

