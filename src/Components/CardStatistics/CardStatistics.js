import './card-statistics.css'
import Text from '../Text/Text';

function CardStatistics(props) {

    let classIcon;
    let classblock;
    let cardContent;


    if (props.color === "green") {
        classIcon = 'icon-arrow_green'
        classblock = 'color-block_green'
    }

    if (props.color === "red") {
        classIcon = 'icon-arrow_red'
        classblock = 'color-block_red'
    }

    if ((props.title === 'Просмотры карточек') || (props.title === 'CPM показы') || (props.title === 'Органические показы')) {
        cardContent = <>
            <div className="card-statistics_content">
                <div className={classIcon}></div>
                < Text text="на" />
                <div className={classblock}>
                    < Text text={props.percent || "-"} />
                </div>
                < Text text="и" />
                <div className={classblock}>
                    < Text text={props.item || "-"} />
                </div>
                < Text text="шт" />
            </div>

            <div className="card-statistics_content">
                < Text text="и составили" />
                <div className="color-block color-block_white">
                    < Text text={props.sum || "-"} />
                </div>
                < Text text="шт" />
            </div>
        </>
    } else {
        cardContent = <>
            <div className="card-statistics_content">
                <div className={classIcon}></div>
                < Text text="на" />
                <div className={classblock}>
                < Text text={props.percent || "-"} />
                </div>
                < Text text="и составили" />
            </div>

            <div className="card-statistics_content">
                <div className="color-block color-block_white">
                < Text text={props.sum || "-"} />
                </div>
                < Text text="от общего трафика" />
            </div>
        </>
    }

    return (
        <div className="card-statistics">
            <h3 className="title">{props.title}</h3>
            {cardContent}
        </div>
    )
}

export default CardStatistics;