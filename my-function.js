const { json } = require('body-parser');
const express = require('express')
const axios = require('axios').default;
// const axios = require('axios');
const app = express()
const port = 3000



app.get('/say/:said',(req,res)=>{
   
    axios.get('https://vqvhe6b9vi.execute-api.us-east-2.amazonaws.com/livestage/say')
  .then(function (response) {
    const fulldata=response.data+" "+req.params.said
    res.send(fulldata)
  })
  .catch(function (error) {
    
    console.log(error);
  })
  .then(function () {
   
  });
})


app.listen(port, () => {

    console.log(`Example app listening at http://localhost:${port}`)
  })