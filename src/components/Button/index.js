class Button {
    // private variables
    #outerHTML = '';
    // public variables
    constructor(options) {
        let { type = null, value = 'Default', handler = null, renderTo } = options;
        if (!renderTo) throw new Error(`"renderTo" does not specified!`);
        let buttonElem = document.createElement('button');
        if (type) buttonElem.setAttribute('type', type);
        buttonElem.innerText = value;
        if (handler) this.attachEvent({ elem: buttonElem, type: 'click', func: handler });
        this.#outerHTML = buttonElem.outerHTML;
        document.querySelector(renderTo).appendChild(buttonElem);
    }
    get html() {
        return this.#outerHTML;
    }
    // Methods
    // Event setter
    attachEvent(eventConfig) {
        let { type = null, func = null, elem = null } = eventConfig;
        this[`on${type}`] = func;
        elem && type && func ? elem.addEventListener(type, func) : '';
    }
    detachEvent(eventConfig) {
        let { type = null, func = null, elem = null } = eventConfig;
        this[`on${type}`] = null;
        elem && type && func ? elem.removeEventListener(type, func) : '';
    }
}
export default Button;
