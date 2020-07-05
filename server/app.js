const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors())

// connect to database
// with cred !! beware git !!
mongoose.connect(
  'mongodb+srv://admin:Orangina823mo@cluster0-mqiyp.mongodb.net/test?retryWrites=true',
  { useNewUrlParser: true }
);

mongoose.connection.once('open', () => {
  console.log('nn3 connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log("nn3 server on 4000");
})
