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
import Page from './Components/Pages/Page';
import MenuGroup from './Components/Menu/MenuGroup';
import OrderGroup from './Components/Menu/OrderGroup';
import CartItem from './Components/Menu/CartItem';


const drink_menu = [
    {title: "Coffee", data: [
        {name: "Drip", price: "2"},
        {name: "Espresso", price: "2"},
        {name: "Latte", price: "4"},
        {name: "Mocha", price: "4"},
        {name: "Americano ", price: "3"},
    ]},
    {title: "Tea", data: [
        {name: "Steeped", price: "3"},
        {name: "Matcha", price: "4"},
        {name: "London Fog", price: "4"},
        {name: "Chai Latte", price: "4"},
    ]},
    {title: "Cold", data: [
        {name: "Iced Coffee", price: "3"},
        {name: "Iced Tea", price: "3"},
        {name: "Frappe ", price: "4"},
    ]},
    {title: "No Joe", data: [
        {name: "Decaf", price: "2"},
        {name: "Hot Chocolate", price: "2"},
        {name: "Hot Apple Cider", price: "2"},
        {name: "Lemonade", price: "3"},
    ]}
]

const food_menu = [
    {title: "Cupcakes", data: [
        {name: "Chocolate Dream", price: "3"},
        {name: "Vanilla Cream", price: "3"},
        {name: "Strawberry Swirl", price: "4"},
        {name: "Loaded Lemon", price: "4"},
    ]},
    {title: "Cookies", data: [
        {name: "Chunky Chocolate", price: "3"},
        {name: "Perfect Peanut", price: "2"},
        {name: "Oatmeal Raisin", price: "3"},
        {name: "Spectacular Sugar", price: "2"},
    ]},
    {title: "Bread", data: [
        {name: "Banana Loaf", price: "2"},
        {name: "Carrot Muffin", price: "2"},
        {name: "Lemon Poppy seed", price: "2"},
        {name: "Chocolate Muffin", price: "3"},
    ]}
]


// TODO break into smaller components
const App = () => {
    const [pageID, setPageID] = useState("home");
    const [cart, setCart] = useState([]);

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

    const NavClickHander = (newPageID) => {
        setPageID(newPageID);
    };

    const orderAddHandler = (itemName, drink) => {
        // TODO hack for drink sizes, need to work into order selection menu
        const newItem = {name: itemName, isDrink: drink || false}
        setCart((prev) => [...prev, newItem])
    };

  return (
    <div className="App" >
        <Navbar scrollPosition={scrollPosition} fadeout={500} onNavClick={NavClickHander} />
        <Page ID="home" pageID={pageID}>
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
        </Page>
        <Page ID="menu" pageID={pageID}>
            <div className="menu-top">
                <TextLogo beeg={true}/>
                <RobotoTitle size="6rem" weight="300">
                    our menu
                </RobotoTitle>
            </div>
            <div className="menu-display">
                <div className="little-line"></div>
                <div className="big-line"></div>
                {/* TODO Turn menu-row into component */}
                <div className="menu-row">
                    {drink_menu.map((group) => <MenuGroup data={group.data}>{group.title}</MenuGroup>)}
                </div>
                <div className="big-line"></div>
                <div className="menu-row">
                    {food_menu.map((group) => <MenuGroup data={group.data}>{group.title}</MenuGroup>)}
                </div>
                <div className="big-line"></div>
                <div className="little-line"></div>
            </div>
        </Page>
        <Page ID="order" pageID={pageID}>
            <div className="order-top">
                <RobotoTitle size="6rem" weight="300">
                    Order online
                </RobotoTitle>
            </div>
            <div className="order-display">
                {/* TODO hack for last minute idea for order page, need to auto form 2by2 rows on order page */}
                {/* TODO hack for last minute idea for order page, select drink size needs to be refactored */}
                <div>
                    <div className="menu-row m-10">
                        {drink_menu.slice(0, 2).map((group) => <OrderGroup drink={true} data={group.data} orderAddHandler={orderAddHandler}>{group.title}</OrderGroup>)}
                    </div>
                    <div className="menu-row m-10">
                        {drink_menu.slice(2, 4).map((group) => <OrderGroup drink={true} data={group.data} orderAddHandler={orderAddHandler}>{group.title}</OrderGroup>)}
                    </div>
                    <div className="menu-row m-10">
                        {food_menu.slice(0, 2).map((group) => <OrderGroup data={group.data} orderAddHandler={orderAddHandler}>{group.title}</OrderGroup>)}
                    </div>
                    <div className="menu-row m-10">
                        {food_menu.slice(2, 3).map((group) => <OrderGroup data={group.data} orderAddHandler={orderAddHandler}>{group.title}</OrderGroup>)}
                    </div>
                </div>
                <div className="order-box">
                    <div className="cart">
                        {cart.map((item) => <CartItem drink={item.isDrink}>{item.name}</CartItem>)}
                    </div>
                    <div className="checkout-row">
                        <button onClick={() => {
                            setCart([])
                        }}>Place order</button>
                    </div>
                </div>
            </div>
        </Page>
        <div className="footer">
            <div className="footerDeets">
                <div id="footerAddress">
                    <RobotoTitle>ADDRESS</RobotoTitle> 
                    <p>3562 Charles Blvd.</p>
                    <p>Unit 3425</p>
                    <p>Seattle, WA 23564</p>
                    <p>USA</p>
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
                <p>1 (800) 555 - 5555</p>
                </div>
                <div>
                <p>Or email us:</p>
                <form>
                    <input type="text" placeholder="Email address"></input>
                    <input type="text" placeholder="Subject"></input>
                    <textarea resize="none"></textarea>
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
                {/* TODO make logo a component */}
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
