'use strict';

import Form from './components/Form';

export default class FormsConstructor {
    constructor(opt) {
        const { el, form } = opt;
        let rootElem = document.querySelector(el);
        if (form) new Form(el, form);
    }
}
