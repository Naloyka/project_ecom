import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

export default function deviations() {

    const containerDeviations = document.getElementById('example_deviations');
    const dataDeviations = [
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ],
        [
            '1.08.2022 - 7.08.2022',
            '5106',
            '896',
            '569',
            '15%',
            '15%',
        ]
    ]

    const optionDeviations = {
        data: dataDeviations,
        colHeaders: [
            'Период',
            'Всего <br \/> просмотров',
            'Органические <br \/> показы',
            'CPM показы',
            'Доля органических <br \/> показов',
            'Доля рекламных <br \/> показов',
        ],
        columns: [
            { dataDeviationsManual: 0, type: "text" },
            { dataDeviationsManual: 1, type: "text" },
            { dataDeviationsManual: 2, type: "text" },
            { dataDeviationsManual: 3, type: "text" },
            { dataDeviationsManual: 4, type: "text" },
            { dataDeviationsManual: 5, type: "text" },
        ],
        multiColumnSorting: true,
        responsive: true,
        resizeDelay: "300",
        manualColumnResize: true,
        manualRowResize: true,
        stretchH: 'all',
        className: 'align',
        height: '650',
        licenseKey: "non-commercial-and-evaluation",
    }

    const hotDeviations = new Handsontable(containerDeviations, optionDeviations);
}