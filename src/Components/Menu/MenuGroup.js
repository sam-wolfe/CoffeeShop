
import RobotoTitle from "../Titles/RobotoTitle";
import "./group.css";
import MenuItem from "./MenuItem";

const MenuGroup = ({children, data}) => {
    return (
        <div className="menuItemGroup">
            <RobotoTitle color="black" size="1.4rem">{children}</RobotoTitle>
            {data.map((item) => <MenuItem {...item} />)}
        </div>
    )
}

export default MenuGroup;