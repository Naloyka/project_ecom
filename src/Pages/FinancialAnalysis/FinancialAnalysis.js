import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Select from "../../Components/Select/Select";
import BlueBtn from "../../Components/Blue-btn/Blue-btn";
import CardStatistics from "../../Components/CardStatistics/CardStatistics";
import Metrics from "../../Components/Metrics/Metrics";
import BoxTabs from "../../Components/BoxTabs/BoxTabs";
import TitleMedium from "../../Components/TitleMedium/TitleMedium";
import MetricsAdd from "../../Components/MetricsAdd/MetricsAdd";
import Content from "../../Components/Content/Content";
import Flex16 from "../../Components/Flex16/Flex16";
import Box16 from "../../Components/Box16/Box16";
import SelectContent from "../../Components/SelectContent/SelectContent";
import Text from "../../Components/Text/Text";
import chart from "./js/chart";
import changes from "./js/example_changes";
import deviations from "./js/example_deviations";
import absoluteValues from "./js/example_absolute-values";
import './style/financial-analysis.css'

// Отрисовка после загрузки 

window.addEventListener('load', () => {
    chart()
    changes()
    absoluteValues()
    deviations()
})

function FinancialAnalysis() {
    return (
        <div>
            < Breadcrumb />
            < Content>
                <section className="select-group-container">
                    < Box16>
                        <SelectContent>
                            < Text text="Магазин" />
                            < Select />
                        </SelectContent>
                        <SelectContent>
                            < Text text="Категория" />
                            < Select />
                        </SelectContent>
                    </Box16>
                    < Box16>
                        <div className="select-content">
                            < Text text="Бренд" />
                            < Select />
                        </div>
                        <div className="select-content">
                            < Text text="Артикул" />
                            < Select />
                        </div>
                    </Box16>
                </section>

                < BoxTabs>

                    <div className="financial-analysis_content">
                        <section className="col-left">

                            <div className="select-group">
                                < Select />
                                < Select />
                            </div>

                            <BlueBtn />

                            {/* В зависимости от названия карточки формируется ее внешний вид*/}

                            < CardStatistics color="red" title="Просмотры карточек" percent='5,8%' item='115748' sum='1885868' />
                            < CardStatistics color="green" title="CPM показы" percent='48%' item='456' sum='1250' />
                            < CardStatistics color="red" title="Органические показы" percent='10%' item='38' sum='128' />
                            < CardStatistics color="green" title="Доля рекламных показов" percent='25%' sum='15,8%' />
                            < CardStatistics color="green" title="Доля органических показов" percent='16%' item='115748' sum='72%' />
                        </section>

                        <section className="col-right">
                            < Flex16>
                                < Metrics class="metrics__strip_blue" name="Расходы" />
                                < Metrics class="metrics__strip_red" name="Показы" />
                                < Metrics name="Клики" />
                                < Metrics name="Заказы" />
                                < Metrics name="Заказы" />
                                < MetricsAdd />
                            </Flex16>

                            <div className="container-chart">
                                <canvas className="chart" id="myChart" height="250"></canvas>
                            </div>

                            <div className="table-container">
                                < TitleMedium text="Абсолютные значения" />
                                <div id="example_absolute-values"></div>
                            </div>

                            <div className="table-container">
                                < TitleMedium text="Отклонения в абсолютные значениях" />
                                <div id="example_deviations"></div>
                            </div>

                            <div className="table-container">
                                < TitleMedium text="Изменения в относительных значениях" />
                                <div id="example_changes"></div>
                            </div>
                        </section>
                        
                    </div>
                </BoxTabs>
            </Content>
        </div>
    )
}

export default FinancialAnalysis;