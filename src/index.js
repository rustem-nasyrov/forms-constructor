import DataParser from './components/DataParser';
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
                        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                    },
                    name: 'testr',
                    readOnly: false,
                    min: 0,
                    max: 10,
                    step: 0.5,
                    value: 1,
                },
                {
                    type: 'string',
                    renderTo: '#ws_cp-body',
                    attrs: {},
                    styles: {},
                    data: {},
                    value: 'Maurene',
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

        // new DataParser(JSON.stringify(data));
        new DataParser(data, elemId);
    }
}
export default FormsConstructor;
