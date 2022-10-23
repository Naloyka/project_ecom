import './box-tabs.css'

function BoxTabs(props) {
    return (
        <section className="box-tabs">
            <nav className="btn-group">
                <button className="btn">Продажи</button>
                <button className="btn btn_active">Трафик</button>
                <button className="btn">Реклама: CPM</button>
                <button className="btn">Реклама: CPO</button>
                <button className="btn">Вся реклама</button>
                <button className="btn">Конверсии</button>
                <button className="btn">ДРР</button>
            </nav>
            {props.children}
        </section>
    )
}

export default BoxTabs;