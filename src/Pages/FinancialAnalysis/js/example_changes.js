import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

export default function changes() {
    const containerChanges = document.getElementById('example_changes');
    const dataChanges = [
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

    const optionChanges = {
        data: dataChanges,
        colHeaders: [
            'Период',
            'Всего <br \/> просмотров',
            'Органические <br \/> показы',
            'CPM показы',
            'Доля органических <br \/> показов',
            'Доля рекламных <br \/> показов',
        ],
        columns: [
            { dataChangesManual: 0, type: "text" },
            { dataChangesManual: 1, type: "text" },
            { dataChangesManual: 2, type: "text" },
            { dataChangesManual: 3, type: "text" },
            { dataChangesManual: 4, type: "text" },
            { dataChangesManual: 5, type: "text" }
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

    const hotChanges = new Handsontable(containerChanges, optionChanges);
}

