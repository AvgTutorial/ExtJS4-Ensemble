Ext.define('UH.store.Users', {
    extend: 'Ext.data.Store',
    model: 'UH.model.User',
    autoLoad: true,
    pageSize: 50,
    autoSync: true
});
