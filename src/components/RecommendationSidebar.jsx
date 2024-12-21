import Link from 'next/link'
import React from 'react'
import Card from './Card'
import { fetchMovieRecommendation } from '@/utils'
const RecommendationSidebar = async ({contentType,id}) => {
    const data = await fetchMovieRecommendation(contentType,id)
    // console.log(data);
  return (
    <>
    <h2 className="text-lg mx-2"> More Related</h2>
      {data?.results && data?.results.map((item, index) => (
        <Link href={`/${contentType == "tv"? "serie":"movie"}s/${item.id}`} key={item.id}>
          <Card cardData={item}></Card>
        </Link>
      ))}
    </>
   
  )
}

export default RecommendationSidebar