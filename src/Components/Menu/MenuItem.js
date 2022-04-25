
import "./item.css";

const MenuItem = ({name, price}) => {
    return (
        <div className="menuItemSpot">
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
}

export default MenuItem;