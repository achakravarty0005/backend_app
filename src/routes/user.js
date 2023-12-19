import { Router } from "express";
import userController from '../controllers/user.controller'
import {upload} from "../middlewares/multer.js"
const router = Router();

router.route('/registration').post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    
    userController.registerUser
);


module.exports = router;