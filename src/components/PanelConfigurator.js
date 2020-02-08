function createPanelConfigurator(panelId, x, y, winHeight, winWidth) {
    const panel = Ext.getCmp(panelId) || null;
    let panelHeight = panel.getHeight() || 0,
        panelWidth = panel.getWidth() || 0,
        panelPadding = window.getComputedStyle(panel.getEl().dom, null).getPropertyPriority('padding') || 0;
    if (Ext.getCmp('panelConfWin')) Ext.getCmp('panelConfWin').destroy();
    if (panel) {
        Ext.create('Ext.window.Window', {
            id: 'panelConfWin',
            layout: 'border',
            iconCls: 'fa fa-cog',
            iconAlign: 'left',
            ghost: false,
            title: 'Настройка панели',
            // x: x - 190,
            // y: y + 32,
            height: 300,
            width: 220,
            maximizable: false,
            resizable: false,
            draggable: true,
            items: [{
                xtype: 'form',
                layout: {
                    type: 'hbox',
                    vertical: true,
                    pack: 'start',
                    align: 'center',
                },
                region: 'center',
                defaultType: 'textfield',
                autoScroll: true,
                items: [{
                    fieldLabel: 'Ширина (px)',
                    labelAlign: 'top',
                    allowBlank: true,
                    name: 'formpanel-width',
                    value: panel.getWidth(),
                    flex: 1,
                }, {
                    fieldLabel: 'Высота (px)',
                    labelAlign: 'top',
                    allowBlank: true,
                    name: 'formpanel-height',
                    value: panel.getHeight(),
                    flex: 1,
                }, {
                    fieldLabel: 'Внутренние отступы (px)',
                    labelAlign: 'top',
                    allowBlank: true,
                    name: 'formpanel-padding',
                    value: panelPadding,
                    flex: 1,
                    margin: '0 0 10px'
                }],
            }, ],
            fbar: [{
                xtype: 'button',
                text: 'Сохранить',
                handler: function (btn) {
                    let values = btn.up('window').down('form').getValues();
                    for (let key in values) {
                        switch (key.split('-').pop()) {
                            case 'height':
                                panelHeight = parseFloat(values[key]);
                                break;
                            case 'width':
                                panelWidth = parseFloat(values[key]);
                                break;
                            case 'padding':
                                panelPadding = parseFloat(values[key]);
                                break;
                        }
                    }
                    panel.setConfig({
                        height: panelHeight,
                        width: panelWidth,
                    });
                    panel.setStyle({
                        padding: `${panelPadding}px`,
                    });
                    btn.up('window').destroy();
                },
            }, {
                xtype: 'button',
                text: 'Отмена',
                handler: btn => btn.up('window').destroy(),
            }],
        }).show().center();
    }
};

export {
    createPanelConfigurator
};