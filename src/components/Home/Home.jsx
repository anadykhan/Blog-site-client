import Blog from "../Blog/Blog"
import MorePosts from "../MorePosts/MorePosts"
import Trendings from "../Trendings/Trendings"

const Home = () => {
  return (
    <div>
      <div className="flex flex-col gap-16">
        <Blog></Blog>
        <Trendings></Trendings>
        <MorePosts></MorePosts>
      </div>

    </div>
  )
}
export default Home