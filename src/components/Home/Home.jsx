  import Blog from "../Blog/Blog"
import Trendings from "../Trendings/Trendings"
import { useBlogsData, useSortedBlogsData } from '../../hooks/hooks'
import { useEffect, useState } from "react"
import BlogCard from "../BlogCard/BlogCard"
import MorePost from "../MorePost/MorePost"

const Home = () => {

  const { sortedData  , isLoading} = useSortedBlogsData()

  if(isLoading) {
    return "Is loading"
  }

  console.log(sortedData)

  const chunk1 = sortedData[0]
  const chunk2 = sortedData.slice(1, 4)
  const chunk3 = sortedData.slice(5, 11)
  
  console.log('The chunk is:', chunk3)

  return (
    <div>
      <div className="flex flex-col gap-16">
        <Blog data={chunk1}></Blog>
        <div className="flex justify-between">
          {
            chunk2.map(data => <BlogCard data={data}></BlogCard>)
          }
        </div>
        {
        }
        <div className="flex">
          <div className="grid grid-rows-2 gap-10">
            {
              chunk3.map(data => <MorePost data={data}></MorePost>)
            }
          </div>
          <div className="w-full">
            Col 2
          </div>
        </div>
      </div>

    </div>
  )
}
export default Home