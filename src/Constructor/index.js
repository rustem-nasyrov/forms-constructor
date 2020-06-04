'use strict';

import UI from './UI';

export default class ConstructorUI {
    #options = options;
    rootElem = null;

    constructor(el) {
        this.rootElem = el;
        // console.log(this.#options);
        // new UI(this.rootElem, options);
        console.dir(this);
    }
}

const options = {
    items: {
        type: 'panel',
        label: {},
    },
};
