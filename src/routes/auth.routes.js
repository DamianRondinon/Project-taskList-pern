// Setting up authentication routes
import {Router} from "express";

const router = Router()
// Login route
router.post("/signin", (req, res) => res.send("Logging in"));

router.post("/signup", (req, res) => res.send("Registering"));

router.post("/signout", (req, res) => res.send("Logging out"));

router.post("/profile", (req, res) => res.send("User profile"));

export default router;
