import express from 'express';
import graphqlHTTP from 'express-graphql';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import schema from './graphql/schema';
import { pagesRoutes } from './pages/routes';

const PORT = 3000;
const app = express();

app.use('/', pagesRoutes);
app.use('/graphql', graphqlHTTP(() => ({
	schema,
	graphiql: true,
	pretty: true
})));

app.listen(PORT, () => console.log(`entrance-task-1  is now listening on http://localhost:${PORT}`));
