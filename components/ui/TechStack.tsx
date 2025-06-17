import React from 'react'

export const TechStack = () => {
  return (
    // <div>TechStack</div>
    <div className={`flex justify-end md:p-2 gap-2 absolute overflow-hidden -bottom-1 md:-bottom-4 lg:-right-4 -right-3`}>
                  <div className="flex flex-col gap-3">
                      {['Next.js', 'React.js', 'Express'].map((item) => (
                        <span key={item} className="py-2 px-3 text-xs lg:text-sm opacity-70 rounded-lg text-center bg-[#2a306a]">
                          {item}
                        </span>
                      ))}
                      <span className="py-4 px-3 bg-[#1c214f] opacity-70 rounded-lg"/>
                  </div>
                  <div className="flex flex-col gap-3">
                      <span className="py-4 px-3 bg-[#2a306a] opacity-70 rounded-lg"/>
                      {['MongoDB', 'PostegreSQL', 'MySQL'].map((item) => (
                        <span key={item} className="py-2 px-3 text-xs lg:text-sm opacity-70 rounded-lg text-center bg-[#1c214f]">
                          {item}
                        </span>
                      ))}
                  </div>
                      </div>
              )
            }