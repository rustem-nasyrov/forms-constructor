'use strict';

import EventHandler from '../../Utils/EventManager';

class Numberfield {
    static dom = null;

    constructor(options) {
        let { type = 'number', id, renderTo, dataList = null, listeners = null, handler = null } = options;
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
        if (listeners || handler) new EventHandler({ listeners, handler, component: numberField });
        this.createDataList(dataList);
    }
    getStyleString(styles) {
        return Object.keys(styles)
            .map(elem => `${elem}: ${styles[elem]}`)
            .join('; ')
            .trim();
    }

    initConfig(options) {
        let elem = this.dom;

        for (const option in options) {
            switch (option) {
                // Skip datalist option if exists
                case 'dataList':
                    continue;
                // Styling
                case 'style':
                    let styles = options[option];
                    if (typeof styles === 'string') {
                        elem[option] = this[option] = styles;
                    }
                    if (typeof styles === 'object') {
                        elem[option] = this[option] = this.getStyleString(styles);
                    }
                    break;
                // Other component properties
                default:
                    let getOptionName = (option + '').charAt(0).toUpperCase() + option.slice(1),
                        getOption = 'get' + getOptionName,
                        setOption = 'set' + getOptionName;
                    let optionValue = options[option];

                    elem[option] = this[option] = optionValue;
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
            }
        }
    }

    generateId() {
        let id = `${this.dom.parentNode.id}-numberfield-${document.querySelectorAll('input[type=number]').length}`;
        this.id = id;
        if (this.dom.parentNode) return id;
    }
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
