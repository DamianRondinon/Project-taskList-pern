// Setting up authentication routes
import {Router} from "express";
import { profile, signin, signout, signup } from "../controllers/auth.controller.js";

const router = Router()
// Login route
router.post("/signin", signin);

router.post("/signup", signup);

router.post("/signout", signout);

router.post("/profile", profile);

export default router;

