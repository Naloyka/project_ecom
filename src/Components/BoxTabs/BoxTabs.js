import './box-tabs.css'

function BoxTabs(props) {
    return (
        <section class="box-tabs">
            <nav class="btn-group">
                <button class="btn">Продажи</button>
                <button class="btn btn_active">Трафик</button>
                <button class="btn">Реклама: CPM</button>
                <button class="btn">Реклама: CPO</button>
                <button class="btn">Вся реклама</button>
                <button class="btn">Конверсии</button>
                <button class="btn">ДРР</button>
            </nav>
            {props.children}
        </section>
    )
}

export default BoxTabs;