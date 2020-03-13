import Field from './Field';
export default class Fieldset {
    constructor(btn) {
        this.createDefaultFieldset(btn);
        // const win = this.createConfigurationWindow(btn);
        // win.show();
    }

    getLayoutDirectionTitle(btn) {
        let dir = btn.getEl().dom.getAttribute('data-layout');
        if (dir === 'hbox') return 'горизонтальное';
        if (dir === 'vbox') return 'вертикальное';
    }

    getLayoutDirection(btn) {
        return btn.getEl().dom.getAttribute('data-layout');
    }

    createConfigurationWindow(btn) {
        return Ext.create({
            xtype: 'window',
            draggable: true,
            ghost: false,
            layout: 'form',
            defaultType: 'textfield',
            width: 400,
            height: 270,
            title: 'Создание группы',
            items: [
                {
                    fieldLabel: 'Название',
                    labelAlign: 'top',
                    emptyText: 'Группа',
                    name: 'fieldset-name',
                    value: '',
                },
                {
                    fieldLabel: 'Высота',
                    labelAlign: 'top',
                    emptyText: '200 / 0px / 50% ',
                    name: 'fieldset-height',
                    value: null,
                },
                {
                    fieldLabel: 'Ширина',
                    labelAlign: 'top',
                    emptyText: '200 / 0px / 50% ',
                    name: 'fieldset-width',
                    value: null,
                },
                {
                    fieldLabel: 'Направление',
                    labelAlign: 'top',
                    xtype: 'displayfield',
                    value: this.getLayoutDirectionTitle(btn),
                },
            ],
            fbar: [
                {
                    xtype: 'button',
                    text: 'Добавить',
                    handler: btn => {
                        console.log(btn.up('window').getValues());
                        // this.createFieldset(btn.up('panel'), btn.up('form'));
                    },
                },
                {
                    xtype: 'button',
                    text: 'Отмена',
                    handler: btn => btn.up('window').destroy(),
                },
            ],
        });
    }

    createDefaultFieldset = btn => {
        const panel = btn.up('panel').up('panel');
        let fieldset = Ext.create({
            xtype: 'fieldset',
            title: '',
            scrollable: true,
            layout: this.getLayoutDirection(btn),
            items: [
                // {
                //     xtype: 'panel',
                //     bodyStyle: 'background: red;',
                //     height: 100,
                //     width: 100,
                // },
            ],
            // listeners: {
            //     add: function(panel, cmp, idx, e) {
            //         if (panel)
            //     },
            // },
        });
        new Field(fieldset);
        panel.add(fieldset);
    };
}
