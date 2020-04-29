'use strict';

import Label from '../Label';

export default class Field {
    parentElem = null;
    elem = null;
    constructor(elem, options) {
        let fieldElem = document.createElement('input');
        // let fieldContainer
        let { type = 'text', label = null } = options;
        let fieldElemContainer = document.createElement('div');

        this.parentElem = elem;
        this.elem = fieldElem;
        let fieldsCount = document.querySelectorAll('input').length;
        this.elem.id = `fc-field-${fieldsCount}-${type}`;
        fieldElemContainer.id = `fc-field-${fieldsCount}`;
        fieldElem.type = type;

        this.applyExistingOptionsToElem(options);
        fieldElemContainer.appendChild(this.elem);
        if (label) new Label(this.elem, label);
        this.parentElem.appendChild(fieldElemContainer);
    }
    applyExistingOptionsToElem(options) {
        for (let option in options) {
            if (typeof this.elem[option] !== 'undefined') {
                this.elem[option] = options[option];
            }
        }
    }
}
