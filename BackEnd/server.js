import express from 'express'
import cors from 'cors'
import { addInfos, getInfos } from './supabase.js'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getInfo', async (req, res) => {
  const nom = req.query.nom
  const email = req.query.email
  const {data,error} = await getInfos(nom,email)
  if(data != [])
  {  
      data.existe = true;
      res.json(data)
  }
  else
  {
    data = {existe : false}
    res.json(data)

  }

})

app.get('/addInfo', async (req, res) => {
  const nom = req.query.nom
  const email = req.query.email
  const {data,errot} = await getInfos(nom,email)

  if(data.length == 0)
  {
    const {data,error} = await addInfos(nom,email)
    res.json(data)

  }
  else
  {
    res.json(data)
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})