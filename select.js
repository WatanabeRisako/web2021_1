const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');


 let sql = `
 select TotK.id, data.id as did,
 name, 
 Data.data_name, 
 Map.map_name,
 Map2.map2_name,
 Treasure.treasure_name
 from TotK 
 inner 
 join Data on TotK.data_id = Data.id 
 join Map on TotK.map_id = Map.id
 join Map2 on TotK.map2_id = Map2.id
 join Treasure on TotK.treasure_id = Treasure.id;
 `

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.name + ' : ' + data.data_name + ' : ' + data.map_name + ' : ' + data.map2_name + ' : ' + data.treasure_name);
		}
	});
});
