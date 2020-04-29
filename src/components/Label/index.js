'use strict';

export default class Label {
    parentElem = null;
    options = null;

    constructor(el, options) {
        this.parentElem = el;
        this.options = options;

        let nodeType = el.nodeName.toLowerCase();

        switch (nodeType) {
            case 'form':
                this.createFormLabel(options);
                break;
            case 'fieldset':
                this.createFieldsetLabel(options);
                break;
            default:
                return;
        }
    }
    get labelType() {
        return typeof this.options;
    }
    createFormLabel(options) {
        let { text, align = null } = options,
            labelContainer = document.createElement('div'),
            labelTextElem = document.createElement('h3');

        labelTextElem.innerText = text;

        labelTextElem.classList.add('form-title__text');
        labelContainer.classList.add('form-title');
        labelContainer.style.textAlign = align;

        labelContainer.appendChild(labelTextElem);
        this.parentElem.appendChild(labelContainer);
    }
    createFieldsetLabel(options) {
        if (this.labelType === 'string') {
            let labelElem = document.createElement('legend');
            labelElem.innerText = options;
            this.parentElem.appendChild(labelElem);
            return labelElem;
        }
        if (this.labelType === 'string') {
            let labelElem = document.createElement('legend');
            labelElem.innerText = options;
        }
    }
}
