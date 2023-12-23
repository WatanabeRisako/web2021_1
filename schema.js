const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql = `
select TREASURE,sql from sqlite_master where type='table';
`;

db.serialize( () => {
	db.each( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		console.log( "TotK : " + row.name );
		console.log( "Schema : " + row.id );
		console.log();
	});
});
