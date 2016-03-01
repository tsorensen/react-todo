'use strict';

import config from 'config';
import express from 'express';
import api from './routes';

const app = express();
const PORT = config.port;

app.use('/api', api);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
