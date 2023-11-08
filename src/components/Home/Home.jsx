import Blog from "../Blog/Blog"
import Trendings from "../Trendings/Trendings"

const Home = () => {
  return (
    <div>
      <div className="flex flex-col gap-16">
        <Blog></Blog>
        <Trendings></Trendings>
      </div>

    </div>
  )
}
export default Home