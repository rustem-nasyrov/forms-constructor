'use strict';
import EventManager from '../../Utils/EventsManager';

export default class Button {
    parentElem = null;
    elem = null;
    constructor(el, options) {
        this.parentElem = el;
        let { type = 'button', text, handler = null } = options;
        // Button container
        let buttonElemContainer = document.createElement('div');
        buttonElemContainer.classList.add('fc-btn-container');
        // Button
        let buttonElem = document.createElement('button');
        this.elem = buttonElem;
        buttonElem.innerText = text || 'Button ' + document.querySelectorAll(`#${el.id} button`).length;
        // Apply created elements to 'el'
        if (handler) this.applyHandler(handler);
        buttonElemContainer.appendChild(buttonElem);
        this.parentElem.appendChild(buttonElemContainer);
    }
    applyHandler(func) {
        this.elem.addEventListener('click', func, false);
    }
}
