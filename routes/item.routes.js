import { Router } from "express";
import { registerItemFinder } from "../controllers/finder.controller.js";
import { registerItemOwner } from "../controllers/owner.controller.js";

import { upload } from './../middlewares/multer.middleware.js';
const router= Router();

router.route("/finder").post(upload.single('image'), registerItemFinder);
router.route("/owner").post(upload.single('image'), registerItemOwner);

export default router;