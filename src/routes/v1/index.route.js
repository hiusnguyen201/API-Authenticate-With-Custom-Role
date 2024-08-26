import express from "express";
const router = express.Router();

import authRouter from "./auth.route.js";
import accountRouter from "./account.route.js";
import roleRouter from "./role.route.js";
import { isAuthorized } from "#src/http/middlewares/jwtAuth.js";

router.use("/auth", authRouter);
router.use("/account", isAuthorized, accountRouter);
router.use("/roles", isAuthorized, roleRouter);

export default router;
