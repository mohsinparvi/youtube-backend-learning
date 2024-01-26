import { Router } from "express";
import {
  checkCookie,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/cookie").post(checkCookie);
router.route("/login").post(loginUser);
//SECURED: routes
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
