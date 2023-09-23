const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 80;
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());



app.post('/api/send-data', (req, res) => {
    try{
        console.log(req.body);
        const responceData = {
            'message': 'Data was received',
            'appointmentPlace': req.body.livingPlace + 'hospital',
            'appointmentType': req.body.appointmentType,// TODO: change it
            'appointmentDateSoonerCount': '10',
            'appointmentDate': '09/09/2023',
            'maxDistance': req.body.maxDistance
        }
        res.status(200).json(responceData);
    }
    catch(error){
        console.log(error);
    }
});

app.get('/', (req, res) => {
    console.log('GET REQUEST');
    res.status(200).json({message: "It's fine!"});
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});