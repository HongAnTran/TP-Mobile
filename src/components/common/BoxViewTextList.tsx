import React, { ReactNode } from 'react'
import CheckFillIcon from '@/components/icons/CheckFillIcon';
import { cn } from '@/lib/utils';

export interface BoxViewTextItem {
    description: ReactNode, id: number
}
export default function BoxViewTextList({ list, icon, title, classNameIcon, className, iconItem }:
    { className?: string, list: BoxViewTextItem[], title?: string, icon?: ReactNode, iconItem?: ReactNode, classNameIcon?: string }) {
    return (
        <div className={cn("  rounded-xl border border-gray-300 overflow-hidden shadow-lg", className)}>
            <div className="flex items-center border-b  border-gray-500 p-2">
                <span className={cn("text-xl mr-2", classNameIcon)} >{icon}</span>
                <h2 className="  text-primary  font-semibold text-base">{title}</h2>
            </div>
            <ul className=" flex flex-col gap-2 text-gray-700 p-2">
                {list.map((item) => {
                    return (<li key={item.id} className="flex  items-center gap-2">
                        {iconItem}
                        {/* <div className='  h-full flex-shrink-0 flex items-center justify-center'>{icon}</div> */}
                        <div className=' relative  text-xs'>
                            {item.description}
                        </div>
                    </li>)
                })}
            </ul>
        </div>
    )
}

