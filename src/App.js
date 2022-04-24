import './App.css';
import Navbar from './Components/Navbar/Navbar';
import PlayfairTitle from './Components/Titles/PlayfairTitle';
import Map from './Components/Map/Map';
import { useEffect, useState } from 'react';
import { AiOutlineCoffee, AiOutlineShoppingCart } from "react-icons/ai";
import { RiCake3Line } from "react-icons/ri";
import { BiCookie } from "react-icons/bi";
import { FaFacebookF, FaBlog } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Circle from './Components/Outlines/Cirlcle';

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
            <div className="triptych-center"></div>
            <div className="triptych-right"></div>
        </div>
        <div className="footer">

        </div>
    </div>
  );
}

export default App;
