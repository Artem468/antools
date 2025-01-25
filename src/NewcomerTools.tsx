import './NewcomerTools.css'
import Tool from "./Tool.tsx";
import zeplin from './assets/zeplin.svg'
import PHPStorm from './assets/jb_phpstorm.svg'
import toolbox from './assets/jb_toolbox_app.svg'
import procreate from './assets/procreate.svg'

function NewcomerTools() {
    return (
        <section className="NewcomerTools">
            <div className="NewcomerToolsText">
                <p className="Title">Newcomer Tools</p>
                <p className="Description">Wow! see the latest update of the most recommended tools from reliable designers and developers</p>
                <button>Explore more</button>
            </div>
            <div className="NewcomerToolCards">
                <Tool icon={zeplin} toolName={'Zeplin'} pay={'Free & Paid'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
                <Tool icon={PHPStorm} toolName={'PHPStorm'} pay={'Free'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
                <Tool icon={toolbox} toolName={'Toolbox'} pay={'Free'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
                <Tool icon={procreate} toolName={'Procreate'} pay={'Paid'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
            </div>
        </section>
    )
}

export default NewcomerTools;