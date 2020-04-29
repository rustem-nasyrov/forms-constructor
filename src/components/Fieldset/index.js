'use strict';
// Styles
import styles from './fieldset.scss';
// Components
import Components from '../index';
import Label from '../Label';

export default class Fieldset {
    parentElem = null;
    elem = null;
    constructor(elem, options) {
        // Defining variables
        this.parentElem = elem;
        let { label = null, name = null, items = null } = options;

        // DOM
        let fieldsetElem = document.createElement('fieldset');
        this.elem = fieldsetElem;
        // Setting options

        if (label) new Label(this.elem, label);
        if (items) new Components(this.elem, items);
        this.parentElem.appendChild(fieldsetElem);
    }
}
