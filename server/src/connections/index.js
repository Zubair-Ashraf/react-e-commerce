import { mongoConnection } from './mongo.connection';

const connections = () => {
  mongoConnection();
};

export default connections;
