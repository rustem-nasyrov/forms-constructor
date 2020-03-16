/**
 * @description
 * @author Rustem Nasyrov
 * @date 2020-03-16
 * @class Numberfield
 */
class Numberfield {
    static dom = null;

    constructor(options) {
        let { type = 'number', value = '', text = '', renderTo } = options;
        if (type !== 'number') return;
        if (!renderTo) throw new Error(`renderTo does not specified!`);
        let numberField = document.createElement('input');
        this.dom = numberField;
        this.initConfig(options);
        document.querySelector(renderTo).appendChild(numberField);
    }

    initConfig(options) {
        let elem = this.dom;

        for (const option in options) {
            let getOptionName = (option + '').charAt(0).toUpperCase() + option.slice(1),
                getOption = 'get' + getOptionName,
                setOption = 'set' + getOptionName;
            let optionValue = options[option];

            this[option] = optionValue;
            elem[option] = optionValue;
            // Create getter methods
            this[getOption] = function() {
                return this[option];
            };
            elem[getOption] = function() {
                return elem[option];
            };
            // Create setter methods
            this[setOption] = function(val) {
                this[option] = val;
            };
            elem[setOption] = function(val) {
                elem[option] = val;
            };
        }
    }
}
export default Numberfield;
