'use strict';

export default class Fieldset {
    constructor(opt) {
        // Defining variables
        let { el, options } = opt,
            { label = null, name = null } = options;

        // DOM
        let fieldsetElem = document.createElement('fieldset');
        this.elem = fieldsetElem;
        this.elem.id = `${el.parentNode.id}-fieldset-${el.querySelectorAll('fieldset').length}`;
        // Setting options
        if (label) this.createLabel(label);

        el.appendChild(fieldsetElem);
    }
    createLabel(labelText) {
        let legendElem = document.createElement('legend');
        legendElem.innerText = labelText;
        this.elem.appendChild(legendElem);
    }
}
