"use client"


import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { motion } from "framer-motion";
import Link from 'next/link'
import routes from '@/routes'
import { Article } from '@/types/article';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function ArticleCard({ article  ,classNameImage}: { article: Article  , classNameImage?: string}) {

  return (
    <>
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link href={`${routes.article}/${article.slug}`}>
          <Card className=' border border-gray-300 group relative'>
            <CardContent className="flex flex-col gap-2  py-4">
              <div >
                <Image className={cn( "w-full h-auto",classNameImage)}   src={article.thumnal_url} alt={article.title} width={500} height={500} />
              </div>
              <CardTitle className='   group-hover:text-blue-500 transition-colors' >{article.title}</CardTitle>
            </CardContent>
          </Card>
        </Link>
      </motion.div>

    </>

  )
}

