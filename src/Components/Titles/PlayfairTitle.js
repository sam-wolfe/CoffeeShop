
import "./playfair.css";

const PlayfairTitle = (props)  => {
    return (
      <span className="ptitle" style={
        //   default font weight of 400 and size of 3rem, or get from props 
        //   on tag
          {
              'fontWeight': props.weight || 400,
              'fontSize': `${props.size || '3rem'}`,
              'color': `${props.color || 'white'}`
          }
          }>
          {props.children}
      </span>
    );
  }
  
  export default PlayfairTitle;