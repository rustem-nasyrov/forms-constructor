'use strict';

import Label from '../Label';

export default class Combo {
    parentElem = null;
    elem = null;
    values = [];
    constructor(elem, options) {
        let fieldElem = document.createElement('select');
        // let fieldContainer
        let { type = 'select', label = null } = options;
        let fieldElemContainer = document.createElement('div');

        this.parentElem = elem;
        this.elem = fieldElem;

        let fieldsCount = document.querySelectorAll('select').length;
        this.elem.id = `fc-field-${fieldsCount}-${type}`;
        fieldElemContainer.id = `fc-field-${fieldsCount}-container`;

        delete options['type'];
        this.applyExistingOptionsToElem(options);

        fieldElemContainer.appendChild(this.elem);
        if (label) new Label(this.elem, label);
        // Setting values
        if (options.value) {
            this.parseValue({
                ...options.value,
                displayField: options.displayField,
                valueField: options.valueField,
            });
            fieldElem.innerHTML = this.values.join('');
        }
        this.parentElem.appendChild(fieldElemContainer);
    }
    applyExistingOptionsToElem(options) {
        for (let option in options) {
            if (typeof this.elem[option] !== 'undefined') {
                this.elem[option] = options[option];
            }
        }
    }
    parseValue(value) {
        let { fields = null, data = null, displayField = null, valueField = null } = value;
        if (fields == null || data == null || displayField == null || valueField == null) return;
        let optionElementsArray = [];
        for (let i = 0; i < Object.keys(data).length; i++) {
            let optionElem = document.createElement('option');
            optionElem.innerText = data[i][displayField];
            optionElem.value = data[i][valueField];
            optionElementsArray.push(optionElem.outerHTML);
        }
        this.values = optionElementsArray;
    }
}
