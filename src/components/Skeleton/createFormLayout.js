import { addPanel } from './Panel';
import Fieldset from '../Fieldset';
import { createPanelConfigurator } from '../PanelConfigurator';

export default function(id) {
    const panel = Ext.getCmp(id);
    panel.add({
        xtype: 'form',
        layout: 'border',
        height: Ext.getCmp(id).getHeight(),
        items: [
            {
                xtype: 'panel',
                region: 'center',
                // layout: 'absolute',
                height: panel.getHeight(),
                width: panel.getWidth(),
                style: {
                    border: '1px dashed lightgray'
                },
                items: [
                    {
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
                            zIndex: 10000
                        },
                        fixed: true,
                        docked: 'top',
                        items: [
                            {
                                tooltip: 'Добавить группу',
                                iconCls: 'fa fa-th',
                                // handler: btn => console.log(btn),
                                arrowVisible: false,
                                menu: new Ext.menu.Menu({
                                    items: [
                                        {
                                            text: 'Вертикальная группа',
                                            iconCls: 'fa fa-grip-vertical',
                                            margin: 0,
                                            autoEl: {
                                                'data-layout': 'vbox'
                                            },
                                            handler: btn => new Fieldset(btn)
                                        },
                                        {
                                            xtype: 'menuseparator'
                                        },
                                        {
                                            text: 'Горизонтальная группа',
                                            iconCls: 'fa fa-grip-horizontal',
                                            margin: 0,
                                            autoEl: {
                                                'data-layout': 'hbox'
                                            },
                                            handler: btn => new Fieldset(btn)
                                        }
                                    ]
                                })
                            },
                            {
                                tooltip: 'Настроить панель',
                                iconCls: 'fa fa-cog',
                                handler: function(btn) {
                                    let [x, y] = btn.getXY();
                                    createPanelConfigurator(btn.up('panel').getId(), x, y, 160, 400);
                                }
                            },
                            {
                                tooltip: 'Добавить панель сверху',
                                id: 'btnAddPanel_north',
                                iconCls: 'fa fa-plus',
                                handler: btn => {
                                    addPanel(btn, btn.up('form').getId());
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        id: 'btnAddPanel_east',
                        text: null,
                        iconCls: 'fa fa-plus',
                        tooltip: 'Добавить панель справа',
                        handler: btn => {
                            addPanel(btn, btn.up('form').getId());
                        },
                        style: {
                            position: 'absolute',
                            top: '50%',
                            right: '0px',
                            transform: 'translateY(-50%)'
                        }
                    },
                    {
                        xtype: 'button',
                        id: 'btnAddPanel_south',
                        text: null,
                        iconCls: 'fa fa-plus',
                        tooltip: 'Добавить панель снизу',
                        handler: btn => {
                            addPanel(btn, btn.up('form').getId());
                        },
                        style: {
                            position: 'absolute',
                            bottom: '0px',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }
                    },
                    {
                        xtype: 'button',
                        id: 'btnAddPanel_west',
                        text: null,
                        iconCls: 'fa fa-plus',
                        tooltip: 'Добавить панель слева',
                        handler: btn => {
                            addPanel(btn, btn.up('form').getId());
                        },
                        style: {
                            position: 'absolute',
                            top: '50%',
                            left: '0px',
                            transform: 'translateY(-50%)'
                        }
                    }
                ]
            }
        ]
    });
}
