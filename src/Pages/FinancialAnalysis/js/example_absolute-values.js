import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.min.css';

export default function absoluteValues() {

const containerAbsoluteValues = document.getElementById('example_absolute-values');
const dataAbsoluteValues = [
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

const optionAbsoluteValues = {
    data: dataAbsoluteValues,
    colHeaders: [
        'Период',
        'Всего <br \/> просмотров',
        'Органические <br \/> показы',
        'CPM показы',
        'Доля органических <br \/> показов',
        'Доля рекламных <br \/> показов',
    ],
    columns: [
        { dataAbsoluteValuesManual: 0, type: "text"  },
        { dataAbsoluteValuesManual: 1, type: "text" },
        { dataAbsoluteValuesManual: 2, type: "text" },
        { dataAbsoluteValuesManual: 3, type: "text" },
        { dataAbsoluteValuesManual: 4, type: "text" },
        { dataAbsoluteValuesManual: 5, type: "text" },
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

const hotAbsoluteValues = new Handsontable(containerAbsoluteValues, optionAbsoluteValues);
}