export default class Helper {
    constructor(cmp) {
        let [x, y] = cmp.getXY();
        console.log(x, y);
        Ext.create({
            xtype: 'panel',
            renderTo: Ext.getBody(),
            height: cmp.getHeight() + 10,
            width: cmp.getWidth() + 10,
            id: 'helper',
            x: x - 5,
            y: -y / 1.4,
            bodyStyle: 'background: transparent;',
            style: {
                background: 'rgba(0, 0, 0, 0.5)',
                overflow: 'visible',
                zIndex: 0,
                // position: 'abs'
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'right',
                    padding: 0,
                    margin: 0,
                    style: {
                        transform: 'translateX(100%)',
                    },
                    items: [
                        {
                            iconCls: 'fa fa-copy',
                            tooltip: 'Дублировать',
                            height: cmp.getHeight() / 2,
                        },
                        {
                            iconCls: 'fa fa-plus',
                            tooltip: 'Добавить элемент',
                            height: cmp.getHeight() / 2,
                        },
                    ],
                },
            ],
            // listeners: {
            //     render: function() {
            //         this.getEl().on('mouseleave', function() {
            //             Ext.getCmp(this.id).setVisible(false);
            //         });
            //     },
            // },
        });
    }
}
