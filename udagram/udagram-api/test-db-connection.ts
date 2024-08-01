import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
console.log('POSTGRES_HOST:', process.env.POSTGRES_HOST);
console.log('POSTGRES_USERNAME:', process.env.POSTGRES_USERNAME);
console.log('POSTGRES_PASSWORD:', process.env.POSTGRES_PASSWORD);
console.log('POSTGRES_DB:', process.env.POSTGRES_DB);

const sequelize = new Sequelize({
  host: process.env.POSTGRES_HOST!,
  username: process.env.POSTGRES_USERNAME!,
  password: process.env.POSTGRES_PASSWORD!,
  database: process.env.POSTGRES_DB!,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
    require: true,
    rejectUnauthorized: false, // Adjust based on your certificate setup
  },
    
  },
  
});

(async () => {
  try {
    console.log("Testing database connection...");
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // Exit with an error code to indicate failure
  }
})();

//npx ts-node test-db-connection.ts