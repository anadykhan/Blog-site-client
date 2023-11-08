import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Titlebar from "../Titlebar/Titlebar"

const Root = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[60rem]">

        <Titlebar></Titlebar>
        <div className="mb-10">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
export default Root