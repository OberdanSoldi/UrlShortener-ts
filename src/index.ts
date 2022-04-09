import express from 'express';
const app = express();

app.use(express.json());

import routes from './routes';

app.use(routes)

// app.use('/postUrl', postUrl);
// app.use('/', getUrl);

const port: number = 4000;
app.listen(port, () => {console.log('Server is running on port ' + port)});