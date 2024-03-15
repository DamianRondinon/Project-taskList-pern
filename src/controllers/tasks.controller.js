import { pool } from "../db.js";

export const getAllTasks = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM task");
  console.log(result);
  return res.json(result.rows);
};

export const getTask = async (req, res) => {
  const result = await pool.query("SELECT * FROM task WHERE id = $1", [req.params.id]);
  return res.json(result.rows[0]);
};

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
      return res.status(409).json({
        message: "A task with that title already exists.",
      });
    }
    next(error);
  }
};

export const updateTask = (req, res) => res.send("Updating single task");

export const deleteTask = (req, res) => res.send("Deleting task");
