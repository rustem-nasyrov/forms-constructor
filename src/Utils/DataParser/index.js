import Numberfield from '../../components/Numberfield';
import Button from '../../components/Button';
import Select from '../../components/Select';

class DataParser {
    constructor(inputData, elemId) {
        if (!inputData) throw new Error('Data is not specified!');
        let dataType = typeof data,
            data = dataType === 'string' ? JSON.parse(inputData) : inputData;
        const wrap = document.getElementById(elemId);

        if (typeof data === 'object') {
            for (let i = 0; i < data.items.length; i++) this.createField(data.items[i]);
        }
    }
    // methods
    createField(fieldData) {
        let { type } = fieldData;

        switch (type) {
            case 'select':
                return new Select(fieldData);
            case 'button':
            case 'submit':
                return new Button(fieldData);
            default:
                return new Numberfield(fieldData);
        }
    }
}
export default DataParser;
