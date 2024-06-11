import logo from "../assets/shopping-market-logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react'
import PropTypes from 'prop-types';

const Header = ({ cartNum }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <header className="text-text relative flex items-center justify-between md:justify-around p-3 border-b-[1px]">
        <a className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="logo" className="w-[75px]"/>
          <h1 className="hidden sm:block text-4xl text-montserrat font-bold uppercase"><span className="text-primary">Shopping</span><span className="text-secondary">Market</span></h1>
        </a>
        <div className="hidden lg:block">
          <div className="flex gap-12">
            <div>
              <a className="group transition-all duration-300 hover:text-primary text-lg" href="/">
              Home
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
              </a>
            </div>
            <a className="group transition-all duration-300 hover:text-primary text-lg" href="/">
            Shop
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
            </a>
            <a className="group transition-all duration-300 hover:text-primary text-lg" href="/">
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
            </a>
          </div>
        </div>
        <a className="hidden lg:block relative cursor-pointer">
          <FaShoppingCart className="text-4xl transition-all"/>
          {cartNum > 0 && <div className="absolute text-sm right-[-10px] bottom-[-5px] bg-red-500 p-1 px-2 rounded-[50%]">{cartNum}</div>}
        </a>
        <div className="block lg:hidden">
          <Button className="bg-primary text-primary" onClick={onOpen}>
            <FaAlignJustify />
          </Button>
        </div>
      </header>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-[40px]"/>
              <h1 className="uppercase"><span className="text-primary">Shopping</span><span className="text-secondary">market</span></h1>
            </div>
          </DrawerHeader>
          <DrawerBody>
            <div className="flex justify-center">
              <div className="flex flex-col text-center">
                <a className="font-semibold text-3xl text-primary mt-8" href="/">Home</a>
                <a className="font-semibold text-3xl text-primary mt-8" href="/">Shop</a>
                <a className="font-semibold text-3xl text-primary mt-8" href="/">About</a>
              </div>
            </div>
            <div className="lg:hidden z-[1500] flex items-center justify-center fixed right-4 bottom-4 p-5 rounded-[50%] bg-gray-100">
              <a className="relative cursor-pointer">
                  <FaShoppingCart className="text-4xl transition-all"/>
                  {cartNum > 0 && <div className="absolute text-sm right-[-10px] bottom-[-5px] bg-red-500 p-1 px-2 rounded-[50%]">{cartNum}</div>}
              </a>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

Header.propTypes = {
  cartNum: PropTypes.number.isRequired,
};


export default Header