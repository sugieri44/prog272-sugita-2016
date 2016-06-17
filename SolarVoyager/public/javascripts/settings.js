define(function() {
    'use strict';

    return {
        useDatabase: true,
        useLocalMongoDb: true,
        report: function() {
            console.log('useDatabase', this.useDatabase);
            console.log('useLocalMongoDb', this.useLocalMongoDb);
        },
        setSettings: function(settings) {
            this.useDatabase = settings.dataType.toLowerCase() === 'database';
            this.useLocalMongoDb = settings.dataSource.toLowerCase() === 'local mongodb';
            this.report();
        }
    };
});
