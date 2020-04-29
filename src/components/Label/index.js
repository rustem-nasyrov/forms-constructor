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
            case 'input':
                this.createFieldLabel(options);
                break;
            default:
                return;
        }
    }
    get labelType() {
        return typeof this.options;
    }
}

Label.prototype.createFormLabel = function (options) {
    let { text, align = null } = options,
        labelContainer = document.createElement('div'),
        labelTextElem = document.createElement('h3');

    labelTextElem.innerText = text;

    labelTextElem.classList.add('form-title__text');
    labelContainer.classList.add('form-title');
    labelContainer.style.textAlign = align;

    labelContainer.appendChild(labelTextElem);
    this.parentElem.appendChild(labelContainer);
};

Label.prototype.createFieldsetLabel = function (options) {
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
};

Label.prototype.createFieldLabel = function (options) {
    let { text, align = 'left' } = options;
    let labelElem = document.createElement('label');
    labelElem.for = this.parentElem.id;
    if (this.labelType == 'string') {
        labelElem.innerText = options;
        this.parentElem.parentNode.prepend(labelElem);
    }
    if (this.labelType == 'object') {
        labelElem.innerText = text;
        labelElem.style.textAlign = align;
    }
};
