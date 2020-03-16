class Select {
    #optionsList = '';
    #outerHTML = '';

    constructor(options) {
        let { type = 'select', value = [], multi = false, required = false, name, size = 1, renderTo } = options;
        if (!renderTo) throw new Error(`"renderTo" does not specified!`);
        let selectElem = document.createElement('select');
        if (multi) selectElem.setAttribute('multi', multi);
        if (required) selectElem.setAttribute('required');
        if (name) selectElem.setAttribute('name', name);
        if (size >= 2) selectElem.setAttribute('size', size);
        selectElem.innerHTML = this.createOptionsList(value);
        this.#outerHTML = selectElem.outerHTML;
        document.querySelector(renderTo).appendChild(selectElem);
    }

    get html() {
        return this.#outerHTML;
    }

    createOptionsList(data) {
        let optionsList = '';
        for (let i = 0; i < data.length; i++) {
            let optionElement = document.createElement('option');
            let { value, text } = data[i];
            optionElement.setAttribute('value', value);
            optionElement.innerText = text;
            optionsList += optionElement.outerHTML;
        }
        this.#optionsList = optionsList;
        return optionsList;
    }
    get getOptionsList() {
        return this.#optionsList;
    }
}
export default Select;
