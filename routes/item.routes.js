import { Router } from "express";
import { registerItemFinder } from "../controllers/finder.controller.js";
import { registerItemOwner } from "../controllers/owner.controller.js";
import { getAllItems } from "../controllers/listItem.controller.js";
import { patchItem } from "../controllers/patch.controller.js";


import { upload } from './../middlewares/multer.middleware.js';
const router= Router();

router.route("/newFound").post(upload.single('image'), registerItemFinder);
router.route("/newLost").post(upload.single('image'), registerItemOwner);
router.route("/allItems").get(getAllItems);
router.route("/patchItem/:id").patch(patchItem);
export default router;