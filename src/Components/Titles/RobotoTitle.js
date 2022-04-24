
import "./roboto.css";

const RobotoTitle = (props)  => {
    return (
      <span className="coolROBOTS" style={
        //   default font weight of 800 and size of 3rem, or get from props 
        //   on tag
          {
              'fontWeight': props.weight || 800,
              'fontSize': `${props.size || '3rem'}`,
              'color': `${props.color || 'white'}`
          }
          }>
          {props.children}
      </span>
    )
}

export default RobotoTitle;