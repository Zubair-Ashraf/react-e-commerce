import mongoose from 'mongoose';
import chalk from 'chalk';

const connectionString = process.env.MONGO_CONNECTION_STRING;

export const mongoConnection = async () => {
  await mongoose.connect(
    connectionString,
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (err) {
      if (!err)
        console.log(chalk.bgGreen.bold('Database connected successfully'));
      else console.log(chalk.bgRed.bold('Database connection failed'));
    }
  );
};
