import {
    createPanelConfigurator
} from './PanelConfigurator';
import Fieldset from './Fieldset';

export default class BuildSkeleton {
    constructor(id) {
        const panel = Ext.getCmp(id);
        panel.add({
            xtype: 'panel',
            title: 'Конструктор форм',
            headerCollapse: true,
            titleAlign: 'center',
            layout: {
                type: 'border',
                align: 'stretch',
            },
            cls: 'forms-constructor',
            id: `${panel.getId()}-forms-constructor`,
            items: [{
                    xtype: 'panel',
                    region: 'center',
                    header: false,
                    height: panel.getHeight(),
                    id: `${panel.getId()}-forms-constructor-canvas`,
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
                    items: [{
                        iconCls: 'fa fa-trash-alt',
                        tooltip: 'Удалить всё',
                        height: 64,
                        width: 64,
                        handler: function() {
                            Ext.Msg.show({
                                title: 'Удаление',
                                message: 'Вы действительно хотите удалить всё?',
                                button: Ext.Msg.YESNOCANCEL,
                                icon: Ext.Msg.QUESTION,
                                fn: function(btn) {
                                    if (btn === 'yes') {
                                        BuildSkeleton.createFormLayout(`${panel.getId()}-forms-constructor-canvas`);
                                    }
                                },
                            });
                        }
                    }, {
                        iconCls: 'fa fa-save',
                        tooltip: 'Сохранить форму',
                        height: 64,
                        width: 64,
                    }],
                },
            ],
        });

        BuildSkeleton.createFormLayout(`${panel.getId()}-forms-constructor-canvas`);
    }

}

BuildSkeleton.createFormLayout = function (id) {
    const panel = Ext.getCmp(id);
    panel.add({
        xtype: 'form',
        layout: 'border',
        height: Ext.getCmp(id).getHeight(),
        items: [{
            xtype: 'panel',
            region: 'center',
            // layout: 'absolute',
            height: panel.getHeight(),
            width: panel.getWidth(),
            style: {
                border: '1px dashed lightgray',
            },
            items: [{
                xtype: 'segmentedbutton',
                showText: true,
                allowDepress: true,
                allowMultiple: false,
                height: 32,
                maxWidth: 96,
                width: 96,
                style: {
                    position: 'absolute',
                    top: '0px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10000,
                },
                fixed: true,
                docked: 'top',
                items: [{
                    tooltip: 'Добавить группу',
                    iconCls: 'fa fa-cube',
                    // handler: btn => console.log(btn),
                    arrowVisible: false,
                    menu: new Ext.menu.Menu({
                        items: [{
                            text: 'Вертикальная группа',
                            iconCls: 'fa fa-grip-vertical',
                            margin: 0,
                            autoEl: {
                                'data-layout': 'vbox',
                            },
                            handler: btn => new Fieldset(btn),
                        }, {
                            xtype: 'menuseparator',
                        }, {
                            text: 'Горизонтальная группа',
                            iconCls: 'fa fa-grip-horizontal',
                            margin: 0,
                            autoEl: {
                                'data-layout': 'hbox',
                            },
                            handler: btn => new Fieldset(btn),
                        }, ]
                    }),
                    // handler: btn => new AddComponent(btn.up('panel').getId()),
                }, {
                    tooltip: 'Настроить панель',
                    iconCls: 'fa fa-cog',
                    handler: function (btn) {
                        let [x, y] = btn.getXY();
                        createPanelConfigurator(btn.up('panel').getId(), x, y, 160, 400);
                    },
                }, {
                    tooltip: 'Добавить панель сверху',
                    id: 'btnAddPanel_north',
                    iconCls: 'fa fa-plus',
                    handler: btn => {
                        BuildSkeleton.addPanel(btn, btn.up('form').getId());
                    },
                }],
            }, {
                xtype: 'button',
                id: 'btnAddPanel_east',
                text: null,
                iconCls: 'fa fa-plus',
                tooltip: 'Добавить панель справа',
                handler: btn => {
                    BuildSkeleton.addPanel(btn, btn.up('form').getId());
                },
                style: {
                    position: 'absolute',
                    top: '50%',
                    right: '0px',
                    transform: 'translateY(-50%)',
                },
            }, {
                xtype: 'button',
                id: 'btnAddPanel_south',
                text: null,
                iconCls: 'fa fa-plus',
                tooltip: 'Добавить панель снизу',
                handler: btn => {
                    BuildSkeleton.addPanel(btn, btn.up('form').getId());
                },
                style: {
                    position: 'absolute',
                    bottom: '0px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                },
            }, {
                xtype: 'button',
                id: 'btnAddPanel_west',
                text: null,
                iconCls: 'fa fa-plus',
                tooltip: 'Добавить панель слева',
                handler: btn => {
                    BuildSkeleton.addPanel(btn, btn.up('form').getId());
                },
                style: {
                    position: 'absolute',
                    top: '50%',
                    left: '0px',
                    transform: 'translateY(-50%)',
                },
            }, ],
        }],
    });
}

BuildSkeleton.addPanel = function (btn, id) {
    const panel = Ext.getCmp(id);
    let panelWidth = 'auto';
    if (btn && panel) {
        let pos = btn.getId().split('_').pop();
        if (pos === 'left' || pos === 'right') panelWidth = '25%';
        panel.add({
            xtype: 'panel',
            id: `formInnerPanel_${pos}`,
            region: pos,
            style: {
                border: '1px dashed lightgray',
            },
            flex: 1,
            width: panelWidth,
            layout: 'absolute',
            resizable: true,
            resizeHandles: 'all',
            split: true,
            listeners: {
                added: function (panel) {
                    panel.add({
                        xtype: 'segmentedbutton',
                        showText: true,
                        allowDepress: true,
                        allowMultiple: false,
                        height: 32,
                        width: 96,
                        x: 'calc(100% - 96px)',
                        y: 0,
                        items: [{
                            tooltip: 'Добавить элемент',
                            iconCls: 'fa fa-cube',
                            handler: btn => new AddComponent(btn.up('panel').getId()),
                        }, {
                            tooltip: 'Настроить панель',
                            iconCls: 'fa fa-cog',
                            handler: btn => {
                                let [x, y] = btn.getXY();
                                createPanelConfigurator(btn.up('panel').getId(), x, y, 160, 400);
                            }
                        }, {
                            tooltip: 'Удалить панель',
                            iconCls: 'fa fa-times',
                            handler: function (me) {
                                Ext.getCmp(`formInnerPanel_${pos}`).destroy();
                                Ext.getCmp(`btnAddPanel_${pos}`).setHidden(false);
                            },
                        }],
                    });
                }
            },
        });
        btn.setHidden(true);
    }
}