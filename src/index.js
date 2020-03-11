import BuildSkeleton from './components/Skeleton';

Ext.define('FormsConstructor', {
    requires: [
        'Ext.window.Toast'
    ],
    constructor: function (id, h, w) {
        new BuildSkeleton(id, h ,w);
    },
});