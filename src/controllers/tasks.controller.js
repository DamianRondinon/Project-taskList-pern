import { pool } from "../db.js";

export const getAllTasks = async (req, res, next) => {
  const result = await pool.query("SELECT * FROM task");
  console.log(result);
  return res.json(result.rows);
};

export const getTask = async (req, res) => {
  const result = await pool.query("SELECT * FROM task WHERE id = $1", [
    req.params.id,
  ]);
  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "There is no task with that ID.",
    });
  }
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

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  const result = await pool.query(
    "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "There is no message with that ID",
    });
  }

  return res.json(result.rows[0]);
};

export const deleteTask = async (req, res) => {
  const result = await pool.query("DELETE FROM task WHERE id = $1", [
    req.params.id,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "There is no task with that ID",
    });
  }
  // The system is functioning, but it is not returning any tasks
  return res.sendStatus(204);
};
