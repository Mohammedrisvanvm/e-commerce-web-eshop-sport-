import Express,{Router}  from "express";
import { getAdminPage, getdashboard, getgategoriesManagemenet, getProductManagement, getuserManagement, postAdminPage} from "../controllers/admincontroller.js";



var router=Express.Router()

router.get("/",getAdminPage)
router.post("/",postAdminPage)
router.get("/dashboard",getdashboard)
router.get('/userManagement',getuserManagement)
router.get('/categoriesManagement',getgategoriesManagemenet)
router.get('/productManagement',getProductManagement)







export default router