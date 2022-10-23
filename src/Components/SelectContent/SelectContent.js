import './select-content.css'

function SelectContent(props) {
    return (
        <div className="select-content">
            {props.children}
        </div>
    )
}

export default SelectContent;