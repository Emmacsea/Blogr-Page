import { useState } from "react";
import logo from "../assets/images/logo.svg";
import arrowdwn from "../assets/images/icon-arrow-light.svg";
import arrowup from "../assets/images/icon-arrow-dark.svg";
import illustratedesktop from "../assets/images/illustration-editor-desktop.svg";
import illustratemobile from "../assets/images/illustration-editor-mobile.svg";
import phone from "../assets/images/illustration-phones.svg";
import laptopdesktop from "../assets/images/illustration-laptop-desktop.svg";
import laptopmobile from "../assets/images/illustration-laptop-mobile.svg";
import menuicon from "../assets/images/icon-hamburger.svg";
import menuclose from "../assets/images/icon-close.svg"

export const Blogr = () => {
  const [isProductDropdown, setProductDropdown] = useState(false);
  const [isCompanyDropdown, setCompanyDropdown] = useState(false);
  const [isConnectDropdown, setConnectDropdown] = useState(false);
  const [isMenuIcon, setMenuIcon] = useState(false);
  return (
    <div>
      <header className="bg-header-desk bg-cover bg-center bg-primary-lightred py-8 md:px-32 px-8 rounded-bl-3xl">
        <div className="relative flex justify-between items-center w-full">
          <div className="flex justify-between items-center space-x-6">
            <div>
              <img className="w-12 md:w-16" src={logo} alt="" />
            </div>

            <nav className="hidden md:block">
              <ul className="flex items-center space-x-5">
                <li className="relative ntn">
                  <button
                    className="dropdown "
                    onClick={() => setProductDropdown(!isProductDropdown)}
                  >
                    Product
                    <img src={isProductDropdown ? arrowup : arrowdwn} alt="" />
                  </button>
                  {isProductDropdown && (
                    <ul className="dropdown-det">
                      <li className="list-name">
                        <a href="">Overview</a>
                      </li>
                      <li className="list-name">
                        <a href="">Pricing</a>
                      </li>
                      <li className="list-name">
                        <a href="">Marketplace</a>
                      </li>
                      <li className="list-name">
                        <a href="">Features</a>
                      </li>
                      <li className="list-name">
                        <a href="">Integrations</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative ntn">
                  <button
                    className="dropdown"
                    onClick={() => setCompanyDropdown(!isCompanyDropdown)}
                  >
                    Company
                    <img src={isCompanyDropdown ? arrowup : arrowdwn} alt="" />
                  </button>
                  {isCompanyDropdown && (
                    <ul className="dropdown-det">
                      <li className="list-name">
                        <a href="">About</a>
                      </li>
                      <li className="list-name">
                        <a href="">Team</a>
                      </li>
                      <li className="list-name">
                        <a href="">Blog</a>
                      </li>
                      <li className="list-name">
                        <a href="">Careers</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative ntn">
                  <button
                    className="dropdown"
                    onClick={() => setConnectDropdown(!isConnectDropdown)}
                  >
                    Connect
                    <img src={isConnectDropdown ? arrowup : arrowdwn} alt="" />
                  </button>
                  {isConnectDropdown && (
                    <ul className="dropdown-det">
                      <li className="list-name">
                        <a href="">Contact</a>
                      </li>
                      <li className="list-name">
                        <a href="">Newletter</a>
                      </li>
                      <li className="list-name">
                        <a href="">LinkedIn</a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </div>

                {/*menudrop nav  */}
          <div className="block md:hidden">
            <button onClick={() => setMenuIcon(!isMenuIcon)}>
              <img className="w-4" src={isMenuIcon ? menuclose : menuicon } alt="" />
            </button>

          {isMenuIcon && (
            <div className="absolute top-12 left-0 right-0 w-80  place-content-center py-6 px-5 bg-neutral-white rounded-md shadow-md z-10 flex flex-col justify-center items-center text-center">
              <div className="border-b-neutral-grayishblue border-b-2 w-full">
              <nav >
              <ul className="space-y-6 text-center flex flex-col justify-center items-center pb-5">
                <li className="text-center">
                  <button className="menu-drop " onClick={() => setProductDropdown(!isProductDropdown)}>Product
                    <img src={isProductDropdown ? arrowup : arrowdwn} alt="" />
                  </button>
                  {isProductDropdown && (
                    <ul className="menu-dropdown">
                    <li className="drop-name">
                      <a href="">Overview</a>
                    </li>
                    <li className="drop-name">
                      <a href="">Pricing</a>
                    </li>
                    <li className="drop-name">
                      <a href="">Marketplace</a>
                    </li>
                    <li className="drop-name">
                      <a href="">Features</a>
                    </li>
                    <li className="drop-name">
                      <a href="">Integrations</a>
                    </li>
                  </ul>
                  )}
                </li>

                <li>
                  <button className="menu-drop" onClick={() => setCompanyDropdown(!isCompanyDropdown)}>Company
                    <img src={isCompanyDropdown ? arrowup : arrowdwn} alt="" />
                  </button>
                  {isCompanyDropdown && (
                    <ul className="menu-dropdown">
                    <li className="drop-name">
                      <a href="">About</a>
                    </li>
                    <li className="drop-name">
                      <a href="">Team</a>
                    </li>
                    <li className="drop-name">
                      <a href="">Blog</a>
                    </li>
                    <li className="drop-name">
                      <a href="">Careers</a>
                    </li>
                  </ul>
                  )}
                </li>

                <li>
                  <button className="menu-drop" onClick={() => setConnectDropdown(!isConnectDropdown)}>Connect
                    <img src={isConnectDropdown ? arrowup : arrowdwn} alt="" />
                  </button>
                  {isConnectDropdown && (
                    <ul className="menu-dropdown">
                      <li className="drop-name">
                        <a href="">Contact</a>
                      </li>
                      <li className="drop-name">
                        <a href="">Newletter</a>
                      </li>
                      <li className="drop-name">
                        <a href="">LinkedIn</a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
              </div>
            <div className="flex flex-col justify-center items-center space-y-4 mt-5 text-center">
            <div className="">
              <button className="text-gradient-vddesaturateblue text-sm mr-4 font-bold " type="button">
                Login
              </button>
            </div>
            <div>
              <button
                className="flex justify-center items-center bg-primary-lightred text-sm text-neutral-white border-primary-vlightred border-2 rounded-full py-2 px-10"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
            </div>
          )}          
          </div>


          <div className="hidden md:flex gap-5 items-center">
            <div>
              <button className="ntn" type="button">
                Login
              </button>
            </div>
            <div>
              <button
                className="text-primary-lightred rounded-full bg-neutral-white py-2 px-5 text-xs border-primary-vlightred border-2 font-bold btn"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center py-14">
          <h3 className="text-neutral-white text-3xl md:text-5xl font-medium mb-4">
            A modern publishing platform
          </h3>
          <p className="text-neutral-grayishblue text-base md:text-lg font-medium">
            Grow your audience and build your online brand
          </p>

          <div className="flex justify-center items-center gap-6 text-center mt-7">
            <div>
              <button
                className="text-primary-lightred rounded-full bg-neutral-white py-2 px-3 text-xs border-primary-vlightred border-2 font-bold btn"
                type="button"
              >
                Start for Free
              </button>
            </div>
            <div>
              <button
                className="text-neutral-grayishblue text-xs bg-transparent border-neutral-grayishblue border-2 py-2 px-4 font-bold rounded-full bttn"
                type="button"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="py-14 md:px-32 px-2">
          <h2 className="text-neutral-vdgrayishblue md:text-3xl text-2xl font-bold text-center mb-11">Designed for the future</h2>

          <div className="flex flex-col-reverse md:flex-row text-center md:text-start justify-between items-center gap-36  ">
            {/* section 1 */}
            <div className="-mt-20 md:mt-7 md:px-0 px-8"> 
              <div>
                <h4 className="h">Introducing an extensible editor</h4>
                <p className="p">
                  Blogr fearures an exceedinly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embed such as images, videos, and Markdown. Extensibility with
                  plugins and themes provide easy ways to add functionality or
                  change the looks of a blog.
                </p>
              </div>
              <div>
                <h4 className="h">Robust conent management</h4>
                <p className="p">
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this,
                  functionality, your&apos;re in full control.
                </p>
              </div>
            </div>
            <div className="md:block hidden">
              <img src={illustratedesktop} alt="" />
            </div>
            <div className="md:hidden block">
              <img src={illustratemobile} alt="" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-center md:gap-44 h-auto md:h-48 bg-main-desk bg-cover bg-gradient-vddesaturateblue md:px-32 px-12 md:pb-0 pb-16 mt-16 rounded-bl-3xl rounded-tr-3xl ">
          <div className="md:hidden block md:mb-0 mb-28">
            <img className="absolute -top-16 left-52 h-40 md:h-auto" src={phone} alt="" />
          </div>
          <div className="hidden md:block">
            <img className="h-40 md:h-auto" src={phone} alt="" />
          </div>

          <div className="text-center md:text-start">
            <h2 className="text-neutral-white md:text-xl text-2xl font-bold mb-4">
              State of the Art Infrastructure
            </h2>
            <p className="text-neutral-grayishblue text-sm font-medium">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>

        <div className="flex flex-col text-center md:px-0 md:text-start justify-center md:flex-row md:justify-between md:items-center gap-44 mt-24 md:pr-32">
          <div className="hidden md:block">
            <img src={laptopdesktop} alt="" />
          </div>
          <div className="block md:hidden">
            <img src={laptopmobile} alt="" />
          </div>

          <div className="-mt-36 md:mt-3 md:px-0 px-7">
            <div>
              <h2 className="h">Free, open, simple</h2>
              <p className="p">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
            </div>

            <div>
              <h2 className="h">Powerful tooling</h2>
              <p className="p">
                Batteries included. We built a simple and straightforward CLI
                too that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-neutral-vdblackblue rounded-tr-3xl flex flex-col justify-center items-center md:flex-row  md:justify-between md:items-start px-32 py-14 mt-16 md:space-y-0 space-y-12">
        <div>
          <img className="md:w-16" src={logo} alt="" />
        </div>

        <div className="text-center md:text-start">
          <h2 className="list">Product</h2>
          <nav>
            <ul className="list-det">
              <li className="hover:underline">
                <a href="">Overview</a>
              </li>
              <li className="hover:underline">
                <a href="">Pricing</a>
              </li>
              <li className="hover:underline">
                <a href="">Marketplace</a>
              </li>
              <li className="hover:underline">
                <a href="">Features</a>
              </li>
              <li className="hover:underline">
                <a href="">Integrations</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-center md:text-start">
          <h2 className="list">Company</h2>
          <nav>
            <ul className="list-det">
              <li className="hover:underline">
                <a href="">About</a>
              </li>
              <li className="hover:underline">
                <a href="">Team</a>
              </li>
              <li className="hover:underline">
                <a href="">Blog</a>
              </li>
              <li className="hover:underline">
                <a href="">Careers</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-center md:text-start">
          <h2 className="list">Connect</h2>
          <nav>
            <ul className="list-det">
              <li className="hover:underline">
                <a href="">Contact</a>
              </li>
              <li className="hover:underline">
                <a href="">Newletter</a>
              </li>
              <li className="hover:underline">
                <a href="">LinkedIn</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};
