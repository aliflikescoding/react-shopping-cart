import { FaGithub } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import logo from "../assets/shopping-market-logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { Input } from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center border-t-2 p-10">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-2xl font-bold">SIGN UP FOR OUR NEWS LETTER</h1>
          <Input placeholder='Email' />
          <button className="bg-primary flex rounded-md text-background px-5 py-2 font-bold">
            sign up
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center py-12 border-2">
        <div className="flex gap-5 sm:gap-12">
          <div className="text-center sm:text-left">
            <h1 className="font-bold text-lg sm:text-2xl">Categories</h1>
            <p className="text-md sm:text-lg hover:underline text-primary cursor-pointer">clothes</p>
            <p className="text-md sm:text-lg hover:underline text-primary cursor-pointer">gadgets</p>
            <p className="text-md sm:text-lg hover:underline text-primary cursor-pointer">equipment</p>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="font-bold text-lg sm:text-2xl">Categories</h1>
            <p className="text-md sm:text-lg hover:underline text-primary cursor-pointer">clothes</p>
            <p className="text-md sm:text-lg hover:underline text-primary cursor-pointer">gadgets</p>
            <p className="text-md sm:text-lg hover:underline text-primary cursor-pointer">equipment</p>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="font-bold text-lg sm:text-2xl">Categories</h1>
            <p className="text-md sm:text-lg hover:underline text-primary cursor-pointer">clothes</p>
            <p className="text-md sm:text-lg hover:underline text-primary cursor-pointer">gadgets</p>
            <p className="text-md sm:text-lg hover:underline text-primary cursor-pointer">equipment</p>
          </div>
        </div>
        <div className="mt-5 lg:mt-0 lg:ml-12">
          <a className="flex items-center gap-2 cursor-pointer" to="/">
            <img src={logo} alt="logo" className="w-[40px] sm:w-[75px]"/>
            <h1 className="text-2xl sm:text-4xl text-montserrat font-bold uppercase"><span className="text-primary">Shopping</span><span className="text-secondary">Market</span></h1>
          </a>
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-lg sm:text-2xl">Follow Us On Social Media</h1>
            <div className="flex gap-12">
              <p className="text-md sm:text-2xl pt-2 text-primary cursor-pointer"><FaInstagram /></p>
              <p className="text-md sm:text-2xl pt-2 text-primary cursor-pointer"><FaXTwitter /></p>
              <p className="text-md sm:text-2xl pt-2 text-primary cursor-pointer"><FaMeta /></p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5 font-montserrat text-background bg-gradient-to-r from-primary to-secondary">
        <a className="flex items-center gap-2 hover:underline text-xl m-2" href="https://github.com/aliflikescoding" target="_">
          <p className="" >aliflikescoding</p>
          <FaGithub />
        </a>
        <div className="text-center text-lg m-2">
          <p>A project created for <a href="https://www.theodinproject.com/" className="underline capitalize" target="_">the odin project</a></p>
        </div>
        <p className="text-sm flex items-center gap-2 m-2">copyright 2024 <MdCopyright /></p>
      </div>
    </footer>
  )
}

export default Footer