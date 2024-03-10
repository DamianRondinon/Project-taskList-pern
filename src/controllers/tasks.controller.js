import { pool } from "../db.js";

export const getAllTasks = (req, res) => res.send("Getting tasks");

export const getTask = (req, res) => res.send("Getting single task");

export const createTask = async (req, res, next) => {
  // I take the user's data.
  const { title, description } = req.body;

  // db insert

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    // We handle errors so that the server continues to function and
    // doesn't crash, allowing us to continue making requests.
    res.json(result.rows[0]);
  } catch (error) {
    if (error.code == "23505") {
      return res.send("taks already exists");
    }
    next(error);
  }
};

export const updateTask = (req, res) => res.send("Updating single task");

export const deleteTask = (req, res) => res.send("Deleting task");
