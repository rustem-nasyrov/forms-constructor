'use strict';

// Components
import Button from './Button';
import Combo from './Combo';
import Field from './Field';
import Fieldset from './Fieldset';
import Form from './Form';

export default class Components {
    elem = null;
    items = null;

    constructor(elem, items) {
        this.elem = elem;
        this.items = items ? items : null;
        if (this.items) this.parse();
    }

    // Items getters
    get itemsCount() {
        return Object.keys(this.items).length;
    }
    get itemsNamesArray() {
        return Object.keys(this.items);
    }
    get itemsType() {
        return Array.isArray(this.items) ? 'array' : typeof this.items;
    }

    // Methods
    createComponent(cmpName, { el = null, options = null }) {
        cmpName = cmpName.toLowerCase();
        switch (cmpName) {
            case 'button':
                new Button(el, options);
                break;
            case 'combo':
                new Combo(el, options);
                break;
            case 'field':
                new Field(el, options);
                break;
            case 'fieldset':
                new Fieldset(el, options);
                break;
            case 'form':
                new Form(el, options);
                break;
            default:
                new Field(el, options);
        }
    }
    parse() {
        let itemIdx = 0;

        // Handler 'array' type items
        if (this.itemsType === 'array') {
            for (itemIdx; itemIdx < this.itemsCount; itemIdx++) {
                let cmpName = this.items[itemIdx].type || 'field',
                    currentItemOptions = this.items[itemIdx];
                this.createComponent(cmpName, { el: this.elem, options: currentItemOptions });
            }
        }

        // Handler 'object' type items
        if (this.itemsType === 'object') {
            for (itemIdx; itemIdx < this.itemsCount; itemIdx++) {
                let itemType = this.itemsNamesArray[itemIdx],
                    currentItemOptions = this.items[itemType];
                let cmpName = itemType;
                this.createComponent(cmpName, { el: this.elem, options: currentItemOptions });
            }
        }
    }
}
