const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

 let sql = `
select id,name,data_id,map_id,map2_id,treasure_id from TotK inner join Data on TotK.data_id = Data.id where data_id=2;
 `
// inner join DATA on TotK.data = DATA.id where TotK.data=2


db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.name + ' : ' + data.data_id + ' : ' + data.map_id + ' : ' + data.map2_id + ' : ' + data.treasure_id);
		}
	});
});
