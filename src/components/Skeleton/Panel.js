import Fieldset from '../Fieldset';
import { createPanelConfigurator } from '../PanelConfigurator';
function addPanel(btn, id) {
    const panel = Ext.getCmp(id);
    let panelWidth = 'auto';
    if (btn && panel) {
        let pos = btn
            .getId()
            .split('_')
            .pop();
        if (pos === 'left' || pos === 'right') panelWidth = '25%';
        panel.add({
            xtype: 'panel',
            id: `formInnerPanel_${pos}`,
            region: pos,
            style: {
                border: '1px dashed lightgray'
            },
            flex: 1,
            width: panelWidth,
            // layout: 'absolute',
            resizable: true,
            resizeHandles: 'all',
            split: true,
            listeners: {
                added: function(panel) {
                    panel.add({
                        xtype: 'segmentedbutton',
                        showText: true,
                        allowDepress: true,
                        allowMultiple: false,
                        height: 32,
                        width: 96,
                        style: {
                            position: 'absolute',
                            top: '0px',
                            left: '100%',
                            // transform: 'translateX(-100%)',
                            zIndex: 10000
                        },
                        x: 'calc(100% - 96px)',
                        y: 0,
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
                                handler: btn => {
                                    let [x, y] = btn.getXY();
                                    createPanelConfigurator(btn.up('panel').getId(), x, y, 160, 400);
                                }
                            },
                            {
                                tooltip: 'Удалить панель',
                                iconCls: 'fa fa-times',
                                handler: function(me) {
                                    Ext.getCmp(`formInnerPanel_${pos}`).destroy();
                                    Ext.getCmp(`btnAddPanel_${pos}`).setHidden(false);
                                }
                            }
                        ]
                    });
                }
            }
        });
        btn.setHidden(true);
    }
}

export { addPanel };
