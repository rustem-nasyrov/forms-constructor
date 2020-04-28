'use strict';

// Stylesheets
import styles from './form.scss';
// Components
import Button from '../Button';
import Combo from '../Combo';
import Field from '../Field';
import Fieldset from '../Fieldset';

export default class Form {
    constructor(el, formOpt) {
        const container = document.querySelector(el);
        let formElem = document.createElement('form');
        formElem.classList.add('form');
        this.elem = formElem;
        // Form options
        let { action = null, label = null, id = 'fc-o', name, items = null, method = null } = formOpt;
        formElem.id = id;
        formElem.name = name || id;

        // Check for method option and set it
        if (method) formElem.method = method;

        // Check for action option and set it
        if (action) formElem.action = action;

        // Setting form label
        if (label) this.setFormLabel(label);

        // Creating form items
        if (items && Object.keys(items).length > 0) {
            this.createItemsContainer();
            this.parseItems(items);
        }

        container.appendChild(formElem);
    }

    // Labeling the form
    setFormLabel(text) {
        let labelElem = document.createElement('h1');
        labelElem.innerText = text;
        labelElem.classList.add('form-title');
        this.label = labelElem;
        this.elem.appendChild(labelElem);
    }

    // Create container for form items
    createItemsContainer() {
        let itemsContainer = document.createElement('div');
        itemsContainer.classList.add('form-body');
        this.itemContainer = itemsContainer;
        // Appending items container
        this.elem.appendChild(itemsContainer);
    }
    getItemsContainer() {
        return this.itemContainer;
    }

    // All form items handler
    createButton(opt) {
        new Button(opt);
    }
    createCombo(opt) {
        new Combo(opt);
    }
    createField(opt) {
        new Field(opt);
    }
    createFieldset(opt) {
        new Fieldset(opt);
    }
    // Parse items and call classes
    parseItems(items) {
        for (let itemIdx = 0; itemIdx < Object.keys(items).length; itemIdx++) {
            let item = items[itemIdx],
                itemType = item.type || 'Field';
            // if (typeof item.items !== 'undefined') {
            //     this.parseItems(item.items);
            // }
            switch (itemType) {
                case 'text':
                case 'number':
                case 'radio':
                case 'checkbox':
                case 'date':
                    itemType = 'Field';
                    break;
                default:
                    break;
            }
            itemType = itemType[0].toUpperCase() + itemType.slice(1);
            let cmpName = `create${itemType}`;
            delete item.type;
            this[cmpName]({ el: this.itemContainer, options: item });
        }
    }
}
