export default class Fieldset {
    constructor(btn) {
        const win = this.createConfigurationWindow(btn);
        win.show();
    }
    getLayoutDirection(btn) {
        let dir = btn.getEl().dom.getAttribute('data-layout');
        if (dir === 'hbox') return 'горизонтальное';
        if (dir === 'vbox') return 'вертикальное';
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
            items: [{
                fieldLabel: 'Название',
                labelAlign: 'top',
                emptyText: 'Группа',
                name: 'fieldset-name',
                value: '',
            }, {
                fieldLabel: 'Высота',
                labelAlign: 'top',
                emptyText: '200 / 0px / 50% ',
                name: 'fieldset-height',
                value: null,
            }, {
                fieldLabel: 'Ширина',
                labelAlign: 'top',
                emptyText: '200 / 0px / 50% ',
                name: 'fieldset-width',
                value: null,
            }, {
                fieldLabel: 'Направление',
                labelAlign: 'top',
                xtype: 'displayfield',
                value: this.getLayoutDirection(btn),
            }],
            fbar: [{
                xtype: 'button',
                text: 'Добавить',
            }, {
                xtype: 'button',
                text: 'Отмена',
                handler: btn => btn.up('window').destroy(),
            }],
        });
    }
}