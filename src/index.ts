import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/box', (req, res) => {
    const scaleFactor = 0.1;
    
    const width = req.body.width * scaleFactor;
    const height = req.body.height * scaleFactor;
    const length = req.body.length * scaleFactor;
    
    const vertices = [
         -length / 2, -height / 2, width / 2,
         length / 2, -height / 2, width / 2,
         length / 2, height / 2, width / 2,
         -length / 2, height / 2, width / 2,
         
         -length / 2, -height / 2, -width / 2,
         length / 2, -height / 2, -width / 2,
         length / 2, height / 2, -width / 2,
         -length / 2, height / 2, -width / 2,
    ];

    const indices = [
        0, 1, 2,
        0, 2, 3,
    
        4, 5, 6,
        4, 6, 7,
    
        3, 2, 6,
        3, 6, 7,
    
        0, 4, 5,
        0, 5, 1,
    
        0, 3, 7,
        0, 7, 4,
    
        1, 5, 6,
        1, 6, 2
    ];

    res.json({ vertices, indices });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});