Ext.define('UH.model.User', {
    extend: 'Ext.data.Model',
    fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'firstName',
            type: 'string'
        }, {
            name: 'lastName',
            type: 'string'
        }, {
            name: 'dob',
            type: 'date',
            dateFormat: 'd/m/Y'
        }, {
            name: 'email',
            type: 'string'
        }],
    proxy: {
        type: 'ajax',
        method: 'POST',
        actionMethods: {
            create: 'POST',
            read: 'POST',
            update: 'POST',
            destroy: 'POST'
        },
        extraParams: {
            classname: 'User'
        },
        api: {
            read: 'http://localhost:57774/csp/user/uh.web.UserHandler.cls?action=read',
            create: 'http://localhost:57774/csp/user/uh.web.UserHandler.cls?action=create',
            update: 'http://localhost:57774/csp/user/uh.web.UserHandler.cls?action=update',
            destroy: 'http://localhost:57774/csp/user/uh.web.UserHandler.cls?action=destroy'
        },
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            encode: true,
            writeAllFields: true,
            root: 'data',
            record: 'row'
        }
    }

});
