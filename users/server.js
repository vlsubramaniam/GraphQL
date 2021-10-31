import express from 'express';
const expressGraphQL = require('express-graphql');

const app = express();
const port = 4000;

app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true,
  })
);

app.listen(port, () =>
  console.log('The express HTTP server started at port ' + port)
);
