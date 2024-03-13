import { LiaFacebookSquare } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import { RiTiktokFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-black dark:text-white py-4 shadow-md shadow-gray-800 dark:shadow-gray-400">
      <div className="container  flex flex-col mx-auto md:flex-row items-center justify-between shadow-inner-top">
        <div className="rounded-lg mb-4 p-4 w-full md:w-auto">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p>Email: contact@vetguardian.com</p>
          <p>Phone: 01010011 01001111 01010011</p>
        </div>
        <nav className="flex flex-wrap gap-4">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/services" className="hover:text-gray-300">
            Services
          </a>
          <a href="/about" className="hover:text-gray-300">
            About Us
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
          <a href="/terms" className="hover:text-gray-300">
            Terms
          </a>
        </nav>
        <div className="mt-4 md:mt-0 text-center text-black dark:text-gray-300">
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex items-center ">
            <LiaFacebookSquare className="mr-4 hover:text-gray-300 dark:hover:text-gray-600" size={40} />
            <BsTwitterX className="mr-4 hover:text-gray-300 dark:hover:text-gray-600" size={30} />
            <RiTiktokFill className="mr-4 hover:text-gray-300 dark:hover:text-gray-600" size={30} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
