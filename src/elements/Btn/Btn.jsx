"use client"
import "./style.css"

const Btn = (props) => {
    const handleClickEvent = () => {
        console.log("handle events")
    }
    return (
        <button
            onClick={handleClickEvent}
        >
            {props.name}
        </button>
    );
};

export default Btn;
