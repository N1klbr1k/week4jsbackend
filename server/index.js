const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())



app.get('/api/users', (req, res) => {
   let friends = ['jim', 'gem', 'bob', 'tim', 'billy'];
   res.status(200).send(friends) 
})

app.get('/weather/:temperature', (req, res) => {
    const { temperature } = req.params;
    let phrase = `<h3>it was ${temperature} today<h3>`;
    res.status(200).send(phrase);

})







app.listen(4000, () => console.log('server running on port 4000')) 