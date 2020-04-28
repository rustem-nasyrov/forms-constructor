'use strict';
import EventManager from '../../Utils/EventsManager';

export default class Button {
    constructor(opt) {
        let { type = 'button', text } = opt;
        let buttonElem = document.createElement('button');
        this.elem = buttonElem;
    }
}
