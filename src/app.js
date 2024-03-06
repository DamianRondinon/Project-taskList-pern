// Initial configuration
import express from "express";
import morgan from "morgan";

// We add routes for tasks and authentication.
import taskRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";


const app = express();

//  Middlewares - We use Morgan with 'dev' configuration to see messages in the console.
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// The routes are placed after the middleware when they are visited.
app.get("/api", (req, res) => res.json({message: "welcome to my api"}));
app.use("/api",taskRoutes);
app.use("/api",authRoutes);

// Error handler - This is not a typical middleware; it's an error handler. We will receive the error at the beginning.
app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
    });
});

export default app;