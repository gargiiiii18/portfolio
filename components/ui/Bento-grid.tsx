import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  img,
  spareImg,
  imgClassName,
  titleClassName,
  className,
  title,
  description,
  header,
  icon,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  spareImg?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white mx-8 md:mx-0 p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      style={{
        background: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
        backgroundColor: 'linear-gradient(90deg,rgba(250, 20, 238, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)'
      }}
    >
    
      {/* <div className={cn(
        id === 6 && "flex justify-center h-full"
      )}>
        <div className="absolute w-full h-full">
            <img 
            className={cn(
              imgClassName, 'object-center', 'object-cover'
            )}
            src={img}
            alt={spareImg} />
        </div>
      </div> */}

      {/* {header} */}
       {id===6 ? (
          <div className="transition duration-200 group-hover/bento:translate-x-2">
            <BackgroundGradientAnimation gradientBackgroundStart="rgb(157, 78, 221)
" gradientBackgroundEnd="rgb(0, 255, 255)" size="30%">
              <div className="absolute z-50 flex h-55 w-full justify-center items-center text-white font-bold"/>
            </BackgroundGradientAnimation>
          </div>
        ) : (
      <div className="transition duration-200 group-hover/bento:translate-x-2">

        {/* {icon} */}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
         <div className="h-full w-full">
            <img 
            className={cn(
              imgClassName, 'object-center', 'object-cover'
            )}
            src={img}
            alt={spareImg} />
            
        </div>
       
      </div>
        )
      }
    
    </div>
  );
};
