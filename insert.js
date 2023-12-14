const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

let sql2 = [
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("シモシワカの祠",2,2,1,5);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ジョクウシニの祠",2,2,8,5);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ナタカカの祠",3,2,4,5);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ガアヒササの祠",3,2,2,6);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ヤンサミノの祠",2,2,5,4);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("カハタナウメの祠",3,2,2,4);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("イゴションの祠",1,2,6,4);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ジルタグマチの祠",1,2,6,4);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("テンベザイの祠",1,2,2,4);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ラカショゴの祠",1,2,7,4);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ウコオジシの祠",3,2,5,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("クママイノの祠",3,2,5,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ジョシウの祠",3,2,5,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("マヤシアラの祠",3,2,7,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("マヤミイの祠",3,2,1,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("タウンヒヨの祠",4,2,1,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("イジョオの祠",1,2,2,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("インイサの祠",1,2,1,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("カダウナリの祠",1,2,3,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("グタンバチの祠",1,2,1,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("シヤモツシの祠",1,2,7,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ナチョヤハの祠",1,2,1,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("マヤウメキサの祠",1,2,2,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("マヤナシの祠",1,2,6,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("モギサリの祠",1,2,4,2);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ガノサの祠",3,2,2,3);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ギカクンの祠",3,2,4,3);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ジノドカオの祠",3,2,1,3);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("シハジョゴウの祠",3,2,6,3);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ジョクウの祠",3,2,8,3);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("タニノウダの祠",3,2,2,3);`,
  `insert into TotK("name","data_id","map_id","map2_id",treasure_id)
  values ("ウコウホの祠",1,2,1,3);`
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
