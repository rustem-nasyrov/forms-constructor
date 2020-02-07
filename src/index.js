import BuildSkeleton from './components/Skeleton';

Ext.define('FormsConstructor', {
    requires: [
        'Ext.window.Toast'
    ],
    constructor: function (id) {
        new BuildSkeleton(id);
    },
});