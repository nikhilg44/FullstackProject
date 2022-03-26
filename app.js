import express from 'express';
import db from './db/db.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import pkg from 'twitter-api-client';
const { TwitterClient } = pkg;
import pkg2 from 'twitter-api-suite';
const { Twitter } = pkg2;
import Twit from 'twit';
import Cors from 'cors';
import bodyParser from 'body-parser';




// const twitter = new Twitter({
//     consumer_key: "3PjCyxmmbhmjGBe8p8mtZLBMY",
//     consumer_secret: "nnf0t1LGbIJwHc8MBtn8oOvn7jteDAPXG1gw2IRswxfTC0nj4V",
//     access_token: "728184389058748417-IhP7fAKpFCdYlfh6iyev33Yc0q1Xj8E",
//     access_token_secret: "K8ttGGpmWGFTuIyytQoikmKaU7T4oaOeUXQzagtwAsEXu"
// });


const twitterClient = new TwitterClient({
    apiKey: "3PjCyxmmbhmjGBe8p8mtZLBMY",
    apiSecret: "nnf0t1LGbIJwHc8MBtn8oOvn7jteDAPXG1gw2IRswxfTC0nj4V",
    accessToken: "728184389058748417-9E0zcXBFHNhdJDTHz44JCFQNKVfv4rd",
    accessTokenSecret: "64gTup7sRebOFfFo2NhjxZMjnjL1HBCNY3X49DUsCJCPk"
})

const T = new Twit({
    consumer_key: "3PjCyxmmbhmjGBe8p8mtZLBMY",
    consumer_secret: "nnf0t1LGbIJwHc8MBtn8oOvn7jteDAPXG1gw2IRswxfTC0nj4V",
    access_token: "728184389058748417-9E0zcXBFHNhdJDTHz44JCFQNKVfv4rd",
    access_token_secret: "64gTup7sRebOFfFo2NhjxZMjnjL1HBCNY3X49DUsCJCPk"
  });

var app = express();
dotenv.config();
app.use(function(req, res, next){
    console.log("Start");
    next();
 });
app.get('/', function (req, res) {

//   twitterClient.tweets.statusesUpdate({
//     status: "My automated tweet"
// }).then (response => {
//     console.log("Tweeted!", response)
// }).catch(err => {
//     console.error(err)
// })
// -------------
// twitterClient.trends.trendsAvailable({
// }).then (response => {
//     console.log("Trends:", response)
// }).catch(err => {
//     console.error(err)
// })
// // twitter.post('statuses/update', {
// //         status: 'Hello world',
// //     }).thenthen (response => {
// //         console.log("Post:", response)
// //     }).catch(err => {
// //         console.error(err)
// //     })
// -----------------
const tweet = () => {
    const text = "My Automated Tweet to sharath!";
  
    const onFinish = (err, reply) => {
      if (err) {
        console.log("Error: ", err.message);
      } else {
        console.log("Success: ", reply);
      }
    };
    T.post("statuses/update", { status: text }, onFinish);
    console.log("Tweet is posted")
  };
  
  tweet();
res.send('This is my frist node project!');
});
app.get('/hello', async function (req, res) {

    res.send("hello");
  });
//console.log(process.env)
  let server=app.listen(3001, function () {
    var host = server.address().address
   var port = server.address().port
  console.log('Example app listening at %s:%s',host,port);
});
app.post("/user/generateToken", (req, res) => {
    // Validate User Here
    // Then generate JWT Token
  
    let jwtSecretKey = "gfg_jwt_secret_key";
    console.log(jwtSecretKey)
    let data = {
        time: Date(),
        userId: 12,
    }
  
    const token = jwt.sign(data, jwtSecretKey);
  
    res.send(token);
});
  
// Verification of JWT
app.get("/user/validateToken", (req, res) => {
    // Tokens are generally passed in header of request
    // Due to security reasons.
  
    let jwtSecretKey = "gfg_jwt_secret_key";
  
    try {
        console.log(req.headers)
        const token = req.header("gfg_token_header_key");
        console.log("token in GET method:",token)
        const verified = jwt.verify(token, jwtSecretKey);
        console.log("Verfication:",verified)
        if(verified){
            return res.send("Successfully Verified");
        }else{
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
});
app.use(Cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/store-data',(req, res) => {
  console.log(req.body)
  //const obj = JSON.parse(JSON.stringify(req.body));
  // let id_var=5;
  // db.query(`select max(id) from app_users`,[],(err, results) => {
  //  console.log(results)

  // });
  let sql = "INSERT INTO app_users values(nextval('app_users_seq_id'),$1,$2,$3,$4);"
  console.log("sql to be executed: ",sql)
  db.query(sql,[req.body.emailid,req.body.firstname,req.body.lastname,req.body.password],(err, results) => {
    res.send(JSON.stringify({"status": 200, "error": null, "response": "query is posted"}));
  });
});
app.post('/retrieve-data',(req, res) => {
  console.log(req.body)
  //const obj = JSON.parse(JSON.stringify(req.body));
  // let id_var=5;
  // db.query(`select max(id) from app_users`,[],(err, results) => {
  //  console.log(results)

  // });
  let sql = "SELECT id from app_users where email=$1 and password=$2"
  db.query(sql,[req.body.email,req.body.password],(err, results) => {
    if(err){
    console.log("user is not authenticated")
    }
    else{
      if(results.rowCount!=0){
      let jwtSecretKey = "gfg_jwt_secret_key";
      console.log(results)
      let data = {
          time: Date(),
          userId: results.rows[0].id,
      }
      console.log(data)
      const token = jwt.sign(data, jwtSecretKey);
    res.send(JSON.stringify({"status": 200, "error": null, "response": results.rows[0].id,"token":token}));
    }
    else{console.log("wrong credentials!")
    res.status(401).send("wrong credentials!");
  }
  }
  });
});



