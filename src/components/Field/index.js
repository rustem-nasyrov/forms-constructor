class Field {
    #outerHTML = '';
    get html() {
        return this.#outerHTML;
    }
    constructor(options) {
        let { type = 'text', value = '', text = '' } = options,
            fieldElem = document.createElement('input');
        fieldElem.setAttribute('type', type);
        fieldElem.setAttribute('value', value);
        fieldElem.innerHTML = text;
        this.#outerHTML = fieldElem.outerHTML;
    }
}
export default Field;
