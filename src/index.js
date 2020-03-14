import DataParser from './components/DataParser';
class FormsConstructor {
    constructor(elemId) {
        let data = {
            id: {
                type: 'number',
                attrs: {},
                styles: {},
                data: {},
                value: 1,
            },
            first_name: {
                type: 'string',
                attrs: {},
                styles: {},
                data: {},
                value: 'Maurene',
            },
            last_name: {
                type: 'string',
                attrs: {},
                styles: {},
                data: {},
                value: 'Idale',
            },
            email: {
                type: 'email',
                attrs: {},
                styles: {},
                data: {},
                value: 'midale0@123-reg.co.uk',
            },
            gender: {
                type: 'select',
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
            birthDate: {
                type: 'date',
                value: '1969-04-20',
            },
            ip_address: {
                type: 'string',
                value: '188.40.87.166',
            },
            button: {
                value: 'Submit',
                type: 'submit',
            },
            button1: {
                value: 'Submit1',
                type: 'button',
            },
        };

        // new DataParser(JSON.stringify(data));
        new DataParser(data, elemId);
    }
}
export default FormsConstructor;
