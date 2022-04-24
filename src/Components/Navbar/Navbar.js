import BoxIcon from "../Outlines/BoxIcon";
import TextLogo from "../TextLogo/TextLogo";
import "./nav.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({scrollPosition, fadeout}) => {
    // Fade out over fadeout count of scroll position
    let fade_count = fadeout || 300;
    const op = -100*((scrollPosition/fade_count)-1);
    console.log(op)

    return (
        // Make nav bar fade out, don't render if opaticy is 0%.
        op > 0 && <nav className="navbar" style={{
            opacity: op >= 0 ? `${op}%` : "0%"
        
    }}>
        <a href="#" className="logo">
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
            <TextLogo />
        </a>

        <ul className="nav-links">
            <li className="nav-item"><a href="#">Menu</a></li>
            <li className="nav-item"><a href="#">Order</a></li>
            {/* TODO fix padding witout important */}
            <li className="cart-icon">
                <a href="#" className="cart-icon">
                    <BoxIcon><AiOutlineShoppingCart /></BoxIcon>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;