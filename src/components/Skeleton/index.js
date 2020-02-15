import createFormLayout from './createFormLayout';
import { addPanel } from './Panel';

class BuildSkeleton {
    constructor(id) {
        const panel = Ext.getCmp(id);
        panel.add({
            xtype: 'panel',
            title: 'Конструктор форм',
            headerCollapse: true,
            titleAlign: 'center',
            layout: {
                type: 'border',
                align: 'stretch'
            },
            cls: 'forms-constructor',
            id: `${panel.getId()}-forms-constructor`,
            items: [
                {
                    xtype: 'panel',
                    region: 'center',
                    header: false,
                    height: panel.getHeight(),
                    id: `${panel.getId()}-forms-constructor-canvas`
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
                        pack: 'end'
                    },
                    items: [
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
                                            BuildSkeleton.createFormLayout(`${panel.getId()}-forms-constructor-canvas`);
                                        }
                                        return;
                                    }
                                });
                            }
                        },
                        {
                            iconCls: 'fa fa-save',
                            tooltip: 'Сохранить форму',
                            height: 64,
                            width: 64
                        }
                    ]
                }
            ]
        });

        BuildSkeleton.createFormLayout(`${panel.getId()}-forms-constructor-canvas`);
    }
}

BuildSkeleton.createFormLayout = createFormLayout;
// Exporting skeleton build class
export default BuildSkeleton;
