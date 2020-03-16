import DataParser from './Utils/DataParser';
class FormsConstructor {
    constructor(elemId) {
        let data = {
            form: {
                id: 'baseID',
                height: 400,
                width: '100%',
            },
            items: [
                {
                    type: 'number',
                    renderTo: '#ws_cp-body',
                    beforeLabel: 'before',
                    afterLabel: 'after',
                    dataList: {
                        id: '',
                        values: [1, 2, 1488, 4, 5, 69, 7, 4.2, 9, 0],
                    },
                    name: 'testr',
                    readOnly: false,
                    min: 0,
                    max: 30,
                    step: 1,
                    value: 1,
                    style: { height: '30px', width: '100px' },
                },
                {
                    type: 'range',
                    renderTo: '#ws_cp-body',
                    value: '1000',
                    step: 10,
                },
                {
                    type: 'string',
                    renderTo: '#ws_cp-body',
                    attrs: {},
                    styles: {},
                    data: {},
                    value: 'Idale',
                },
                {
                    type: 'email',
                    renderTo: '#ws_cp-body',
                    attrs: {},
                    styles: {},
                    data: {},
                    value: 'midale0@123-reg.co.uk',
                },
                {
                    type: 'select',
                    renderTo: '#ws_cp-body',
                    value: [
                        {
                            value: 'fe',
                            text: 'female',
                        },
                        {
                            value: 'ma',
                            text: 'male',
                        },
                        {
                            value: 'heli',
                            text: 'Boeing AH-64 Apache',
                        },
                        {
                            value: 'another',
                            text: 'binary',
                        },
                        {
                            value: 'anothernon',
                            text: 'nonbinary',
                        },
                    ],
                },
                {
                    type: 'date',
                    renderTo: '#ws_cp-body',
                    value: '1969-04-20',
                },
                {
                    type: 'string',
                    renderTo: '#ws_cp-body',
                    value: '188.40.87.166',
                },
                {
                    value: 'Submit',
                    type: 'submit',
                    renderTo: '#ws_cp-body',
                    handler: function() {
                        console.log(this.innerText);
                    },
                },
                {
                    value: 'Submit1',
                    type: 'button',
                    renderTo: '#ws_cp-body',
                    handler: function() {
                        console.log(this.innerText);
                    },
                },
            ],
        };
        new DataParser(data, elemId);
    }
}
export default FormsConstructor;
