import pg from "pg";

export const pool = new pg.Pool({
    port: 5432,
    host: "localhost",
    user: "postgres",
    password: "sampdoria764",
    database: "tasksdb",
});

pool.on("connect", () => {
    console.log("connected");
});