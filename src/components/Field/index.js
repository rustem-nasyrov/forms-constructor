export default class Field {
    constructor(fieldset) {
        Field.createWrapper(fieldset);
        fieldset.add({
            xtype: 'splitbutton',
            tooltip: 'Добавить элемент',
            text: 'Добавить элемент',
            // iconCls: 'fa fa-plus',
            // arrowVisible: false,
            menu: new Ext.menu.Menu({
                plain: true,
                items: Field.getComponents(),
                listeners: {
                    click: function(menu, item) {
                        let fieldtype = item.getEl().dom.dataset.fieldType;
                        console.log();
                        fieldset.add({
                            xtype: fieldtype,
                            fieldLabel: fieldtype,
                        });
                    },
                },
            }),
        });
    }
}

Field.getComponents = () => {
    return [
        {
            text: 'Checkbox',
            autoEl: {
                'data-field-type': 'checkboxfield',
            },
        },
        {
            text: 'Combobox',
            autoEl: {
                'data-field-type': 'combobox',
            },
        },
        {
            text: 'Date',
            autoEl: {
                'data-field-type': 'datefield',
            },
        },
        {
            text: 'Displayfield',
            autoEl: {
                'data-field-type': 'displayfield',
            },
        },
        {
            text: 'File',
            autoEl: {
                'data-field-type': 'filefield',
            },
        },
        {
            text: 'FileButton',
            autoEl: {
                'data-field-type': 'filebutton',
            },
        },
        {
            text: 'Hidden',
            autoEl: {
                'data-field-type': 'hiddenfield',
            },
        },
        {
            text: 'HtmlEditor',
            autoEl: {
                'data-field-type': 'htmleditor',
            },
        },
        {
            text: 'Number',
            autoEl: {
                'data-field-type': 'numberfield',
            },
        },
        {
            text: 'Picker',
            autoEl: {
                'data-field-type': 'pickerfield',
            },
        },
        {
            text: 'Radio',
            autoEl: {
                'data-field-type': 'radiofield',
            },
        },
        {
            text: 'Spinner',
            autoEl: {
                'data-field-type': 'spinnerfield',
            },
        },
        {
            text: 'Tag',
            autoEl: {
                'data-field-type': 'tagfield',
            },
        },
        {
            text: 'Text',
            autoEl: {
                'data-field-type': 'textfield',
            },
        },
        {
            text: 'TextArea',
            autoEl: {
                'data-field-type': 'textareafield',
            },
        },
        {
            text: 'Time',
            autoEl: {
                'data-field-type': 'timefield',
            },
        },
    ];
};

Field.createWrapper = fieldset => {
    console.log(fieldset);
};
