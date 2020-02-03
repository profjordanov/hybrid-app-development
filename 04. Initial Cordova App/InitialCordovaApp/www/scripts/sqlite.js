var database = null;

function initDatabase() {
    var database = window.sqlitePlugin.openDatabase({
        name: 'sample.db',
        location: 'default'
    });

    database.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name, score)');
        tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Alice', 101]);
        tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Betty', 202]);
    }, function (error) {
        console.log('Transaction ERROR: ' + error.message);
    }, function () {
        console.log('Populated database OK');
    });

    database.transaction(function (tx) {
        tx.executeSql('SELECT count(*) AS mycount FROM DemoTable', [], function (tx, rs) {
            console.log('Record count (expected to be 2): ' + rs.rows.item(0).mycount);
        }, function (tx, error) {
            console.log('SELECT error: ' + error.message);
        });
    });
}