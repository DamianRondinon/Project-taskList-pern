import pg from "pg";

export const pool = new pg.Pool({
    port: 5432,
    host: "localhost",
    user: "postgres",
    password: "sampdoria764",
    database: "task_db",
});

pool.on("connect", () => {
    console.log("connected");
});