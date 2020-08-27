import * as express from "express";

const app = express();
const prod: boolean = process.env.NODE_ENV ==='production';

app.set('port', prod ? process.env.PORT : 3065);
app.get('/', (req, res, next) => {
    res.send("서버 정상 동작!");
})

app.listen(app.get('port'), ()=>{
    console.log("server is runnig on " + app.get('port'));
});