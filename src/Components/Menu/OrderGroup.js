
import RobotoTitle from "../Titles/RobotoTitle";
import "./group.css";
import OrderItem from "./OrderItem";

const OrderGroup = ({children, data, orderAddHandler, drink}) => {
    return (
        <div className="menuItemGroup">
            <RobotoTitle color="black" size="1.4rem">{children}</RobotoTitle>
            {data.map((item) => <OrderItem {...item} drink={drink} orderAddHandler={orderAddHandler}/>)}
        </div>
    )
}

export default OrderGroup;