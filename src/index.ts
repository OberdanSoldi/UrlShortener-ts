import express from 'express';
const app = express();

app.use(express.json());

import postUrl from '../src/routes/postUrl/index';
import getUrl from '../src/routes/redirectUrl/index';

app.post('/postUrl', postUrl);
app.get('/:routename', getUrl);

const port: number = 4000;
app.listen(port, () => {console.log('Server is running on port ' + port)});