import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2A254B] text-white">
      {/* Top Section */}
      <div className="container mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Menu Section */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Menu</h1>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">New arrivals</p>
          </Link>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">Best seller</p>
          </Link>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">Recently Viewed</p>
          </Link>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">Popular this week</p>
          </Link>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">All Products</p>
          </Link>
        </div>

        {/* Category Section */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Category</h1>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">Crockery</p>
          </Link>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">Furniture</p>
          </Link>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">Homeware</p>
          </Link>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">Plants pot</p>
          </Link>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">Chair</p>
          </Link>
        </div>

        {/* Our Company Section */}
        <div>
          <h1 className="text-lg font-semibold mb-4">Our Company</h1>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">About Us</p>
          </Link>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">Vacancies</p>
          </Link>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">Contact Us</p>
          </Link>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">Privacy</p>
          </Link>
          <Link href="/">
            <p className="text-sm mb-2 cursor-pointer">Return Policy</p>
          </Link>
        </div>

        {/* Mailing List Section */}
        <div>
  <h1 className="text-lg font-semibold mb-4">Join our mailing list</h1>
  <input
    type="email"
    placeholder="you@example.com"
    className="w-full bg-white text-gray-800 p-2 rounded-md mb-2"
  />
  <span>
  <button className="w-full bg-blue-500 text-white p-2 rounded-md">
    Sign Up
  </button>
  </span>
</div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">Copyright © 2022 Avion LTD | Designed by Anas Hakeem</p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="text-white hover:text-gray-400" size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="text-white hover:text-gray-400" size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="text-white hover:text-gray-400" size={20} />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-white hover:text-gray-400" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
