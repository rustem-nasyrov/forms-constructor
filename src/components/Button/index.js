class Button {
    #outerHTML = '';
    constructor(options) {
        let { type = null, value = 'Default' } = options;
        let buttonElem = document.createElement('button');
        if (type) buttonElem.setAttribute('type', type);
        buttonElem.innerText = value;
        this.#outerHTML = buttonElem.outerHTML;
    }
    get html() {
        return this.#outerHTML;
    }
}
export default Button;
