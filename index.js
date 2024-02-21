import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";



const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));



app.get("/", (req, res) => {
  
    //res.sendFile(__dirname + "/index.html");
    res.sendFile(__dirname+"/index.html");
    
  });

app.get("/camera", (req, res) => {

    res.sendFile(__dirname+"/camera.html");

});
app.get("/model", (req, res) => {

  res.sendFile(__dirname+"/model.html");

});
app.get("/registration", (req, res) => {

  res.sendFile(__dirname+"/registration.html");

});
  app.listen(port,()=>
{
    console.log("using  port: "+port);
});