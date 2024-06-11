import { FaGithub } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-5 font-montserrat text-background bg-gradient-to-r from-primary to-secondary">
      <a className="flex items-center gap-2 hover:underline text-xl m-2" href="https://github.com/aliflikescoding" target="_">
        <p className="" >aliflikescoding</p>
        <FaGithub />
      </a>
      <div className="text-center text-lg m-2">
        <p>created using:</p>
        <a href="https://fakeapi.platzi.com/" target="_" className="hover:underline">platzi fake store</a>
      </div>
      <p className="text-sm flex items-center gap-2 m-2">copyright 2024 <MdCopyright /></p>
    </footer>
  )
}

export default Footer