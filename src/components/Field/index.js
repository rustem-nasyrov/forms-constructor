'use strict';

import Label from '../Label';

export default class Field {
    parentElem = null;
    elem = null;
    constructor(elem, options) {
        console.group('Field');
        console.log(elem);
        console.log(options);
        console.groupEnd('Field');
        let fieldElem = document.createElement('input');
        // let fieldContainer
        let { type = 'text', label = null } = options;
        this.parentElem = elem;
        this.elem = fieldElem;
        fieldElem.type = type;
        // if (label) new Label(this.elem, label);
        this.parentElem.appendChild(fieldElem);
    }
}
