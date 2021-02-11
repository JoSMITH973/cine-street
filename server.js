require('dotenv').config()
const mydate = require('./modules/mydate')
const express = require('express')
const mytools = require('./modules/mytools')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME
    }
})
app.use(cors({origin:true}))
app.use(express.static('public'))
app.set(`view engine`, 'ejs')
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
  app.use(allowCrossDomain);

app.get('/getFilms', (req, res) => {
    knex.select('*').from('films').then((rows)=>{
        let data = []
        for (rows of rows){
            // console.log(`${mydate.infoDate(rows.name).getDay()}`)
            // console.log(`${rows.titre}`)
            data.push(rows)
        }
        return data
    })
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        if(err) throw err
    })
})

app.get('/viewAllFilms', (req, res) => {
    knex.select('*').from('list-films').then((rows)=>{
        let data = []
        for (rows of rows){
            // console.log(`${mydate.infoDate(rows.name).getDay()}`)
            // console.log(`${rows.titre}`)
            data.push(rows)
        }
        return data
    })
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        if(err) throw err
    })
})

app.get('/getUsers', (req, res) => {
    knex.select('*').from('users').then((rows)=>{
        let data = []
        for (rows of rows){
            // console.log(`${mydate.infoDate(rows.name).getDay()}`)
            // console.log(`${rows.titre}`)
            data.push(rows)
        }
        console.log(data)
        return data
    })
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        if(err) throw err
    })
})

app.get('/getUser/:email/:pwd', (req, res) => {
    knex.where({email : req.params.email, password : req.params.pwd}).select('*').from('users').then((rows)=>{
        let data = []
        for (rows of rows){
            // console.log(`${mydate.infoDate(rows.name).getDay()}`)
            // console.log(`${rows.titre}`)
            data.push(rows)
        }
        return data
    })
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        if(err) throw err
    })
})

app.get('/insertFilms', (req, res)=>{
    mytools.films(`${__dirname}/tournage.json`, (data)=>{
        //data.insertAllFilms()
    })
})

app.listen(process.env.SERV_PORT, () => {
  console.log(`App listening at http://${process.env.SERV_URL}:${process.env.SERV_PORT}`)
})