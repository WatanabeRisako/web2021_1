// app.get("/db",(req,res)=>{
//   db.serialize(()=> {
//     db.all("select TotK.id,name from TotK;",(error,data)=>{
//       if(error){
//         res.render('show',{mes:"エラーです"});
//       }
//       res.render('home',{data:data});
//     })
//   })
// });