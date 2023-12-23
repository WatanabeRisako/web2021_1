const express = require("express");
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test3.db');

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res) => {
  const message = "Hello world";
  res.render('show', {mes:message});
});

app.get("/home", (req, res) => {
    db.serialize( () => {
        db.all("select TotK.id ,name from TotK;", (error, row) => {
            if( error ) {
                res.render('show', {mes:"エラーです"});
            }
            res.render('home', {data:row});
        })
    })
})



app.get("/detail/:id", (req, res) => {
  let sql= "select Data.data_name as dname, Map.map_name as mname, Map2.map2_name as m2name,Treasure.treasure_name as tname from TotK inner join Data on TotK.data_id = data.id join Map on TotK.map_id = Map.id join Map2 on TotK.map2_id = Map2.id join Treasure on TotK.treasure_id = Treasure.id where Totk.id =" + req.params.id + ";"
  // let params = [req.params.id];
  console.log(sql);
    db.serialize( () => {
        db.all(sql, (error, row) => {
            if( error ) {
                res.render('show', {mes:"エラーです"});
            }
          console.log(row);
            res.render('detail', {data:row});
        })
    })
})

app.get("/db/:id", (req, res) => {
    db.serialize( () => {
        db.all("select id, 都道府県, 人口, 大学 from example where id =" + req.params.id + ";", (error, row) => {
            if( error ) {
                res.render('db', {mes:"エラーです"});
            }
            res.render('db', {data:row});
        })
    })
})

app.post("/insert",(req,res) =>{
  let sql = `
  insert into example(都道府県,人口,大学)values("` +req.body.name + `",` + req.body.jinko + `,` + req.body.daigaku + `);`
  console.log(sql);
  db.serialize(()=>{
    db.run(sql,(error,row)=>{
      console.log(error);
      if(error){
        res.render('show', {mes:"エラーです"});
      }
      res.redirect('/db'); //成功した場合、都道府県一覧を表示させる
    });
  });
  console.log(req.body); //確認
});

app.get("/top", (req, res) => {
    //console.log(req.query.pop);    // ①
    let desc = "";
    if( req.query.desc ) desc = " desc";
    let sql = "select id, 都道府県, 人口 from example order by 人口" + desc + " limit " + req.query.pop + ";";
    //console.log(sql);    // ②
    db.serialize( () => {
        db.all(sql, (error, data) => {
            if( error ) {
                res.render('show', {mes:"エラーです"});
            }
            //console.log(data);    // ③
            res.render('select', {data:data});
        })
    })
})
app.use(function(req, res, next) {
  res.status(404).send('ページが見つかりません');
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));

