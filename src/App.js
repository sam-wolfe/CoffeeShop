import './App.css';
import Navbar from './Components/Navbar/Navbar';
import PlayfairTitle from './Components/Titles/PlayfairTitle';
import RobotoTitle from './Components/Titles/RobotoTitle';
import Map from './Components/Map/Map';
import { useEffect, useState } from 'react';
import { AiOutlineCoffee, AiOutlineInstagram } from "react-icons/ai";
import { RiCake3Line } from "react-icons/ri";
import { BiCookie } from "react-icons/bi";
import { FaFacebookF, FaBlog } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Circle from './Components/Outlines/Cirlcle';
import BoxIcon from './Components/Outlines/BoxIcon';
import TextLogo from './Components/TextLogo/TextLogo';


// TODO break into smaller components
const App = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className="App" >
        <Navbar scrollPosition={scrollPosition} fadeout={500} />
        <div className="b-coffee">
            <div className="b-coffee-title">
                <PlayfairTitle size={'4rem'}>Lorem Ipsum</PlayfairTitle>
                <section className="b-coffee-text">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Amet justo donec enim diam vulputate ut pharetra. 
                    Enim diam vulputate 
                </section>
            </div>
        </div>
        <div className="offering-display">
            <div className="food-icons">
                <div>
                    <AiOutlineCoffee className="food-icon"/>
                    <p>Hot Drinks</p>
                </div>
                <div>
                    <RiCake3Line className="food-icon"/>
                    <p>Baked Goods</p>
                </div>
                <div>
                    <BiCookie className="food-icon"/>
                    <p>Snacks</p>
                </div>
            </div>
            <p className="offering-text">
                Egestas purus viverra accumsan in nisl nisi. 
                Quis auctor elit sed vulputate mi sit amet mauris. 
                Tempus quam pellentesque nec nam. Et leo duis ut diam quam. 
                Lobortis scelerisque fermentum dui faucibus. Sit amet 
                luctus venenatis lectus. Mattis vulputate enim nulla 
                aliquet porttitor lacus. In metus vulputate eu scelerisque 
                felis imperdiet proin. 
            </p>
            <p className="offering-map-title">
                Located in the heart of downtown
            </p>
            <Map />
        </div>
        <div className="BEANS-overlay">
            <PlayfairTitle size="5rem">Enjoy Our Coffee?</PlayfairTitle>
            <div className="soushmead leftTest">
                <Circle><FaFacebookF /></Circle> <span>Share us on Facebook</span>
            </div>
            <div className="soushmead rightTest">
                <span>Follow us on Twitter</span> <Circle><FiTwitter /></Circle>
            </div>
            <div className="soushmead leftTest">
                <Circle><FaBlog /></Circle> <span>Read our Blog</span>
            </div>
        </div>
        <div className="BEANS" />
        <div className="triptych">
            <div className="triptych-left"></div>
            <div className="triptych-center">
                <div>
                    <PlayfairTitle size="5rem" color="black">
                        Lorem Ipsum
                    </PlayfairTitle>
                </div>
                <div>
                    <p className="triptych-text">
                        Egestas purus viverra accumsan in nisl nisi. 
                        Quis auctor elit sed vulputate mi sit amet mauris. 
                        Tempus quam pellentesque nec nam. Et leo duis ut diam quam. 
                        Lobortis scelerisque fermentum dui faucibus. Sit amet 
                        luctus venenatis lectus. Mattis vulputate enim nulla 
                        aliquet porttitor lacus. In metus vulputate eu scelerisque 
                        felis imperdiet proin. 
                    </p>
                </div>
            </div>
            <div className="triptych-right"></div>
        </div>
        <div className="footer">
            <div className="footerDeets">
                <div id="footerAddress">
                    <RobotoTitle>ADRESS</RobotoTitle> 
                    <p>3562 Lorem ipsum</p>
                    <p>Dolor suit amet</p>
                    <p>Americuh</p>
                </div>
                <div id="footerHours">
                    <RobotoTitle>HOURS</RobotoTitle> 
                    <p>8-9 Monday - Friday</p>
                    <p>Closed Holidays</p>
                </div>
            </div>
            <div className="footerContact">
                <div>
                <RobotoTitle>CONTACT US</RobotoTitle> 
                <p>(555) 555 - 5555</p>
                </div>
                <div>
                <p>Or email:</p>
                <form>
                    <input type="text"></input>
                    <input type="text"></input>
                    <textarea></textarea>
                    <button>Submit</button>
                </form>
                </div>
            </div>
            <div className="footerFollow">
                <RobotoTitle>FOLLOW US</RobotoTitle> 
                <a href="#" className="cart-icon">
                    <BoxIcon><FaFacebookF /></BoxIcon>

                </a>
                <a href="#" className="cart-icon">
                    <BoxIcon><FiTwitter /></BoxIcon>
                </a>
                <a href="#" className="cart-icon">
                    <BoxIcon><FaBlog /></BoxIcon>
                </a>
                <a href="#" className="cart-icon">
                    <BoxIcon><AiOutlineInstagram /></BoxIcon>
                </a>
            </div>
            <div className="footerLogos">
                {/* TODO make svg a component */}
                <div className="logo">
                    <svg version="1.1" id="Layer_1" x="0px" y="0px"
                        viewBox="0 0 960 560" enableBackground="new 0 0 960 560">
                        <path fill="white" d="M406.691,457.148C198.588,445.411,35.444,293.376,25.037,109.715c-2.079,12.163-3.494,24.545-4.203,37.119
                            C9.555,346.82,180.428,519.099,402.491,531.623c222.062,12.524,411.225-139.449,422.503-339.436
                            c0.71-12.574,0.695-25.037-0.003-37.356C793.998,336.157,614.793,468.885,406.691,457.148z"/>
                        <path fill="white" d="M194.596,132.573c2.917-41.212,183.023-62.528,411.075-50.499c-15.257-1.359-30.753-2.597-46.447-3.71
                            c-249.596-17.671-454.463,3.652-457.575,47.628c-3.114,43.978,126.88,122.711,518.437,115.029
                            c119.646-2.346,133.93-41.259-95.592-41.754C310.292,192.027,191.678,173.784,194.596,132.573z"/>
                        <path fill="white" d="M682.928,84.445c0.03-32.596-372.473-53.463-527.813-28.935c-49.086,7.75,88.437-23.131,205.768-23.238
                            c77.763-0.071,400.296,12.484,400.261,52.236c-0.03,39.754-113.594,102.199-440.97,70.085
                            c-100.033-9.814-109.655-45.731,82.542-31.401C582.493,130.47,682.898,121.699,682.928,84.445z"/>
                        <path fill="white" d="M910.478,217.542c-9.438,84.772-82.027,147.283-166.05,146.463c5.512,1.189,11.133,2.108,16.857,2.743
                            c91.051,10.14,173.028-54.973,183.1-145.431c10.07-90.458-55.578-172.007-146.628-182.145c-5.725-0.638-11.412-0.976-17.05-1.031
                            C862.855,55.824,919.917,132.771,910.478,217.542z"/>
                    </svg>
                </div>
            <TextLogo />
            </div>
        </div>
    </div>
  );
}

export default App;
