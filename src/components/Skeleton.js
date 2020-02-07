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
            id: `${panel.getId()}-forms-constructor`,
            items: [{
                    xtype: 'panel',
                    region: 'center',
                    header: false,
                    height: panel.getHeight(),
                    id: `${panel.getId()}-forms-constructor-canvas`,
                },
                {
                    xtype: 'panel',
                    region: 'east',
                    maxWidth: 300,
                    width: 300,
                    header: false,
                    collapsible: true,
                    style: {
                        borderLeft: '1px solid lightblue',
                    }
                },
            ],
        });

        BuildSkeleton.createFormLayout(`${panel.getId()}-forms-constructor-canvas`);
    }

}

BuildSkeleton.createFormLayout = function (id) {
    Ext.getCmp(id).add({
        xtype: 'form',
        layout: {
            type: 'border',
            pack: 'center',
            align: 'stretch',
        },
        bodyCls: 'forms-constructor-canvas',
        height: Ext.getCmp(id).getHeight(),
        items: [{
            xtype: 'panel',
            region: 'center',
            flex: 1,
            // draggable: true,
            // liveDrag: true,
            // simpleDrag: true,
            html: 'form panel',
        }],
    })
}