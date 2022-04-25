import "./TextLogo.css";

const TextLogo = ({beeg}) => {
    return (
        <div className="textlogo">
            <span className={beeg ? 'textlogotop-beeg' : 'textlogotop'}>coffee shop</span>
            <span className={beeg ? 'textlogobottom-beeg' : 'textlogobottom'}>NAME</span>
        </div> 
    )
}

export default TextLogo;