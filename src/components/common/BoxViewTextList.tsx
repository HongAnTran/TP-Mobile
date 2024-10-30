import React, { ReactNode } from 'react'
import CheckFillIcon from '@/components/icons/CheckFillIcon';
import { cn } from '@/lib/utils';
export default function BoxViewTextList({ list, icon, title, classNameIcon, className }: { className?: string, list: ReactNode[], title?: string, icon?: ReactNode, classNameIcon?: string }) {
    return (
        <div className={cn("  rounded-xl border border-gray-500 overflow-hidden shadow-lg", className)}>
            <div className="flex items-center border-b  border-gray-500 p-2">
                <span className={cn("text-2xl mr-2", classNameIcon)} >{icon}</span>
                <h2 className="  text-primary  font-semibold text-lg">{title}</h2>
            </div>
            <ul className=" flex flex-col gap-2 text-gray-700 p-2">
                {list.map((item, index) => {
                    return (<li key={index} className="flex  items-start gap-2">
                        <div className='  h-full flex-shrink-0 flex items-center justify-center'><CheckFillIcon /></div>
                        <div className=' relative -top-1'>
                            {item}
                        </div>
                    </li>)
                })}
            </ul>
        </div>
    )
}

