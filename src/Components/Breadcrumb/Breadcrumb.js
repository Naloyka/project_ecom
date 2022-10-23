import './Breadcrumb.css'

function Breadcrumb() {
    return(
        <nav className="breadcrumb__nav">
        <ul className="breadcrumb">
            <li><a href="#" className="breadcrumb__link">Инструменты</a></li>
            <li>Финансовый анализ</li>
        </ul>
    </nav>
    )
}

export default Breadcrumb;