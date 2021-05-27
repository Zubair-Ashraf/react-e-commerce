import { Product } from '../api/products/products.model';
import { User } from '../api/users/users.model';
import { Order } from '../api/orders/orders.model';
import users from '../constants/users';
import products from '../constants/products';
import connections from '../connections';
import chalk from 'chalk';

connections();

const insertData = async () => {
  try {
    await Product.deleteMany();

    await User.deleteMany();

    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log(chalk.bgGreen.bold('Data Inserted Successfullt'));

    process.exit();
  } catch (error) {
    console.log(chalk.bgRed.bold(error));
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();

    await User.deleteMany();

    await Order.deleteMany();

    console.log(chalk.bgRed.bold('Data Destroyed :)'));

    process.exit();
  } catch (error) {
    console.log(chalk.bgRed.bold(error));
    process.exit(1);
  }
};

if (process.argv[2] === '-d') destroyData();
else insertData();
