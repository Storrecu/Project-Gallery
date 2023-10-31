const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());

// server.use(express.json());

const port = 2001;

server.listen(port, () => {
  console.log('Holiii' + port);
});

const staticServerPath = '/web/dist';
server.use(express.static(staticServerPath));
