import createFormLayout from './createFormLayout';
import { addPanel } from './Panel';

class BuildSkeleton {
    get panelId() {
        return this.id;
    }
    constructor(id, h, w) {
        this.id = id;
        // const panel = Ext.getCmp(id) || null;
        Ext.create({
            xtype: 'panel',
            renderTo: id,
            // title: 'Конструктор форм',
            // headerCollapse: true,
            // titleAlign: 'center',
            layout: {
                type: 'border',
                align: 'stretch',
            },
            cls: 'forms-constructor',
            height: h,
            width: w,
            id: `${this.id}-forms-constructor`,
            items: [
                {
                    xtype: 'panel',
                    region: 'center',
                    header: false,
                    height: h,
                    id: `${this.id}-forms-constructor-canvas`,
                },
                {
                    xtype: 'toolbar',
                    region: 'west',
                    baseCls: 'forms-constructor-toolbar',
                    padding: 0,
                    margin: 0,
                    collapsible: true,
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'end',
                    },
                    items: [
                        {
                            iconCls: 'fa fa-clipboard-list',
                            tooltip: 'Задать настройки по умолчанию',
                            height: 64,
                            width: 64,
                            handler: btn => {
                                Ext.create({
                                    xtype: 'window',
                                    height: 200,
                                    width: 400,
                                    title: 'Задание настроек по умолчанию',
                                }).show();
                            },
                        },
                        {
                            iconCls: 'fa fa-trash-alt',
                            tooltip: 'Удалить всё',
                            height: 64,
                            width: 64,
                            handler: function() {
                                Ext.Msg.show({
                                    title: 'Удаление',
                                    message: 'Вы действительно хотите удалить всё?',
                                    buttons: Ext.Msg.YESNOCANCEL,
                                    icon: Ext.Msg.QUESTION,
                                    fn: function(btn) {
                                        if (btn === 'yes') {
                                            BuildSkeleton.createFormLayout(`${this.id}-forms-constructor-canvas`);
                                        }
                                        return;
                                    },
                                });
                            },
                        },
                        {
                            iconCls: 'fa fa-save',
                            tooltip: 'Сохранить форму',
                            height: 64,
                            width: 64,
                        },
                    ],
                },
            ],
        });

        BuildSkeleton.createFormLayout(`${this.id}-forms-constructor-canvas`);
    }
}

BuildSkeleton.createFormLayout = createFormLayout;
// Exporting skeleton build class
export default BuildSkeleton;
