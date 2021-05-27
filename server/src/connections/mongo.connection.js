import mongoose from 'mongoose';
import chalk from 'chalk';

const connectionString = process.env.MONGO_CONNECTION_STRING;

export const mongoConnection = async () => {
  console.log(chalk.bgYellow.bold('Database is connecting. Please wait...'));
  try {
    await mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(chalk.bgGreen.bold('Database connected successfully'));
  } catch (error) {
    console.log(chalk.bgRed.bold('Database connection failed'));
    process.exit(1);
  }
};
