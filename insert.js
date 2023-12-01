const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql2 = [
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ミリョタンゴの祠",2,1,7,2);`
]

for( let sql of sql2){
  db.serialize( () => {
    db.run( sql, (error, row) => {
      if(error) {
        console.log('Error: ', error );
        return;
      }
      console.log( "データを追加しました" );
    });
  });
};
