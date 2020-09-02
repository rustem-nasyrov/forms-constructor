'use strict';

import Components from './components';
import ConstructorUI from './Constructor';

export default class FormsConstructor extends Components {
    constructor(opt) {
        const { el, mode = 'output', items = null } = opt;
        let rootElem = document.querySelector(el);

        switch (mode) {
            case 'builder':
            case 'constructor':
                new ConstructorUI(rootElem);
                break;
            case 'output':
                super(rootElem, items);
                break;
            default:
                super(rootElem, items);
        }
    }
}
