import MorePost from "../MorePost/MorePost"

const MorePosts = () => {
  return (
    <div className="flex">
        <div className="grid grid-rows-2 gap-10">
              <MorePost></MorePost>
              <MorePost></MorePost>
        </div>
        <div className="w-full">
            Col 2
        </div>
        
    </div>
  )
}
export default MorePosts