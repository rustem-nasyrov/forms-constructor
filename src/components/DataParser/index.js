import Field from '../Field';
import Button from '../Button';
import Select from '../Select';

class DataParser {
    constructor(inputData, elemId) {
        if (!inputData) throw new Error('Data is not specified!');
        let dataType = typeof data,
            data = dataType === 'string' ? JSON.parse(inputData) : inputData;
        const wrap = document.getElementById(elemId);

        if (typeof data === 'object') {
            // wrap.innerHTML += `${JSON.stringify(data)}<br/><hr/>`;
            for (const key in data) {
                let fieldData = data[key];
                wrap.innerHTML += `${this.createField(fieldData)}<br/><br/>`;
            }
        }
    }
    // methods
    createField(fieldData) {
        let { type } = fieldData;
        let outerHTML = '';

        switch (type) {
            case 'select':
                outerHTML = new Select(fieldData).html;
                break;
            case 'button' || 'submit':
                outerHTML = new Button(fieldData).html;
                break;
            default:
                outerHTML = new Field(fieldData).html;
        }
        return outerHTML;
    }
}
export default DataParser;
