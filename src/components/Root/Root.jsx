import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Titlebar from "../Titlebar/Titlebar"

const Root = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[60rem]">
        <Titlebar></Titlebar>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
export default Root