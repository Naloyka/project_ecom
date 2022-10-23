import '../Metrics/Metrics.css'
import Close from '../Close/Close';
import Info from '../Info/Info';

function Metrics(props) {
    return (
        <div className="metrics">
            <div className={"metrics__strip" + ' ' + (props.class || '')}></div>
            <div className="group-btn">
                < Info />
                < Close />
            </div>
            <span className="text">{props.name}</span>
        </div>
    )
}

export default Metrics;