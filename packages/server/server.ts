import express from 'express';
const app = express();
const port = 3001;
import cors from 'cors';

const corsConfig  = {
    origin: 'http://localhost:3000',
};

app.use(cors( corsConfig));

app.get("/data", (req, res) => {
    res.json({
        foo: "bar"
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});