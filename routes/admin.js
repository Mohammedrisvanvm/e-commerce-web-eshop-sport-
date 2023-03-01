import Express, { Router } from "express";
import {
  getaddcategories,
  getAdminPage,
  getdashboard,
  getgategoriesManagemenet,
  getProductManagement,
  getuserManagement,
  postaddcategories,
  postAdminPage,
  postProductManagement,
} from "../controllers/admincontroller.js";
import { multiupload } from "../helpers/multer.js";

var router = Express.Router();

router.get("/", getAdminPage);
router.post("/", postAdminPage);
router.get("/dashboard", getdashboard);
router.get("/userManagement", getuserManagement);
router.get("/categoriesManagement", getgategoriesManagemenet);
router.get("/productManagement", getProductManagement);
router.post("/productManagement",multiupload,postProductManagement)
router.get("/addcategories", getaddcategories);
router.post("/addcategories", postaddcategories);

export default router;
