/**
 * @description
 * @author Rustem Nasyrov
 * @date 2020-03-16
 * @class Numberfield
 */
class Numberfield {
    static dom = null;

    /**
     *Creates an instance of Numberfield.
     * @author Rustem Nasyrov
     * @date 2020-03-16
     * @param {*} options
     * @memberof Numberfield
     */
    constructor(options) {
        let { type = 'number', id, renderTo, dataList = null } = options;
        if (type !== 'number') return;
        if (!renderTo) throw new Error(`renderTo does not specified!`);
        let numberField = document.createElement('input');
        this.dom = numberField;
        this.initConfig(options);
        document.querySelector(renderTo).appendChild(numberField);
        if (!id) {
            id = this.generateId(renderTo);
            this.id = id;
            this.dom.id = id;
        }
        this.createDataList(dataList);
    }

    /**
     * @description
     * @author Rustem Nasyrov
     * @date 2020-03-16
     * @param {*} options
     * @memberof Numberfield
     */
    initConfig(options) {
        let elem = this.dom;

        for (const option in options) {
            if (option !== 'dataList') {
                let getOptionName = (option + '').charAt(0).toUpperCase() + option.slice(1),
                    getOption = 'get' + getOptionName,
                    setOption = 'set' + getOptionName;
                let optionValue = options[option];

                this[option] = optionValue;
                elem[option] = optionValue;
                // Create getter methods
                this[getOption] = function() {
                    return this[option];
                };
                elem[getOption] = function() {
                    return elem[option];
                };
                // Create setter methods
                this[setOption] = function(val) {
                    this[option] = val;
                };
                elem[setOption] = function(val) {
                    elem[option] = val;
                };
            } else {
                continue;
            }
        }
    }

    /**
     * @description
     * @author Rustem Nasyrov
     * @date 2020-03-16
     * @returns
     * @memberof Numberfield
     */
    generateId() {
        let id = `${this.dom.parentNode.id}-numberfield-${document.querySelectorAll('input[type=number]').length}`;
        this.id = id;
        if (this.dom.parentNode) return id;
    }

    /**
     * @description
     * @author Rustem Nasyrov
     * @date 2020-03-16
     * @param {*} dataList
     * @returns
     * @memberof Numberfield
     */
    createDataList(dataList) {
        if (!dataList) return;
        let dataListElem = document.createElement('datalist'),
            { id, values } = dataList;
        dataListElem.id = id.length > 0 ? id : `${this.dom.parentNode.id}-numberfield-${document.querySelectorAll('input[type=number]').length}-datalist`;
        let list = '';

        for (let i = 0; i < values.length; i++) {
            let listOption = document.createElement('option');
            listOption.value = values[i];
            list += listOption.outerHTML;
        }
        dataListElem.innerHTML += list;
        this.dom.parentNode.appendChild(dataListElem);
        this.dom.setAttribute('list', dataListElem.id);
    }
}
export default Numberfield;
