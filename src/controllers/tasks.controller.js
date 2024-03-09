import { pool } from "../db.js";

export const getAllTasks = (req, res) => res.send("Getting tasks");

export const getTask = (req, res) => res.send("Getting single task");

export const createTask = async (req, res) => {
  // I take the user's data.
  const { title, description } = req.body;

  // db insert
  const { rows } = await pool.query(
    "INSERT INTO task (title, description) VALUES ($1, $2)",
    [title, description]
  );

  console.log(rows);

  res.send("creando tarea");
};

export const updateTask = (req, res) => res.send("Updating single task");

export const deleteTask = (req, res) => res.send("Deleting task");
