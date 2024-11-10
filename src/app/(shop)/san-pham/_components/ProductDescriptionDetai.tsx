"use client"
import BoxInnerHtml from '@/components/common/BoxInnerHtml'
import Modal from '@/components/ui/Modal';
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

export default function ProductDescriptionDetai({detalHTML} : {detalHTML : string | null}) {
  const [isExpanded, setIsExpanded] = useState(false); // Trạng thái mở/thu lại mô tả

  const handleToggleDescription = () => {
    setIsExpanded(!isExpanded); // Đảo trạng thái khi nhấn nút
  };
  return (
    <div className=' relative'>
     <BoxInnerHtml
        className={cn(' overflow-hidden border mx-1 p-2 bg-white max-h-[500px] lg:max-h-[600px]')}
        html={detalHTML || "Hiện chưa có mô tả"}
      />
      {detalHTML && (
     <div className="absolute bottom-0 left-0 right-0 flex justify-center bg-gradient-to-t from-white/90 to-white/50">
     <Button
       onClick={handleToggleDescription}
       className="mt-2"
     >
       {isExpanded ? 'Thu lại' : 'Xem thêm'}
     </Button>
   </div>
      )}


      <Modal  open={isExpanded} onOpenChange={()=>{setIsExpanded(false)}}>
      <BoxInnerHtml
        className={cn('overflow-y-auto overflow-x-hidden max-h-[90vh] border mx-1 p-2 bg-white', {
        })}
        html={detalHTML || "Hiện chưa có mô tả"}
      />
      </Modal>
    </div>
   
  )
}



