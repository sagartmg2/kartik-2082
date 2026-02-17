import { Sequelize } from "sequelize";
import pg from "pg";
const sequelize = new Sequelize(
  "postgresql://neondb_owner:npg_kyIz6LmUPSi9@ep-cold-mud-a1zyb2up-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  {
    logging: false,
    dialectModule: pg,
  },
);

// export const checkDBConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     // await sequelize.sync();
//     // await sequelize.sync({ alter: true });
//     await sequelize.sync({ alter: true, force: true });
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// checkDBConnection();

// // iife
(async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync();
    await sequelize.sync({ alter: true });
    // await sequelize.sync({ alter: true, force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default sequelize;
