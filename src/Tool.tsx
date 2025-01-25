import './Tool.css'
import like from "./assets/flat-color-icons_like.svg";
import folder from "./assets/eva_folder-add-outline.svg";

interface ToolProps {
    icon: string;
    toolName: string;
    pay: string;
    description: string;
}

function Tool({icon, toolName, pay, description}: ToolProps) {
    return (
        <div className="toolCard">
            <div className="orangeCircle"></div>
            <img className="toolCardIcon" src={icon} alt=""/>
            <p className="toolCardName">{toolName}</p>
            <p className="toolCardPay">{pay}</p>
            <p className="toolCardDesc">{description}</p>
            <div className="toolCardActions">
                <img src={like} alt=""/>
                <img src={folder} alt=""/>
            </div>
            <button className="toolCardVisit">Visit</button>
        </div>
    )
}
export default Tool;
