
import { AiFillPlusCircle } from "react-icons/ai";
import "./item.css";

const OrderItem = ({name, drink, orderAddHandler}) => {
    return (
        <div className="menuItemSpot">
            <div>{name}</div>
            {/* <div>{price}</div> */}
            <div onClick={() => {
                orderAddHandler(name, drink)
            }} className="add"><AiFillPlusCircle/></div>
        </div>
    )
}

export default OrderItem;