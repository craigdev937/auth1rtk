import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

export const dBase: Pool = new Pool({
    connectionString: `${connectionString}`
});

// export const dBase: Pool = new Pool({
//     host: "localhost",
//     port: 5432,
//     database: "auth1rtk",
//     user: "django",
//     password: "password1"
// });

// dBase.on("connect", () => {
//     console.log("PostgreSQL is now Connected!");
// });

// dBase.on("error", (error) => {
//     console.log("Database error", error);
// });





