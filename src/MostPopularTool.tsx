import "./MostPopularTools.css"
import figma from './assets/grommet-icons_figma.svg';
import sketch from './assets/logos_sketch.svg'
import vscode from './assets/logos_visual-studio-code.svg'
import notion from './assets/notion.svg'
import slack from './assets/grommet-icons_slack.svg'
import invision from './assets/logos_invision-icon.svg'
import Tool from "./Tool.tsx";

function MostPopularTools() {
    return (
        <section className="MostPopularTools">
            <div className="popularToolsText">
                <p>Most Popular Tools</p>
                <p>Tools for the best Designers and Developers most popularly used in the world</p>
            </div>
            <div className="popularToolCards">
                <Tool icon={figma} toolName={"Figma"} pay={"Free"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                <Tool icon={sketch} toolName={"Figma"} pay={"Trial & Paid"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                <Tool icon={vscode} toolName={"Figma"} pay={"Free"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                <Tool icon={notion} toolName={"Figma"} pay={"Trial & Paid"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                <Tool icon={slack} toolName={"Figma"} pay={"Trial & Paid"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                <Tool icon={invision} toolName={"Figma"} pay={"Trial & Paid"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
            </div>

            <button className="LoadMore">Load More</button>
        </section>
    )
}


export default MostPopularTools;