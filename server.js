const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app = express();

const PORT = process.env.PORT || 4000;

// GraphQL
app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}));

// Listening
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));