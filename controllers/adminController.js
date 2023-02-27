import { admins } from "../models/adminSchema.js";
import { users } from "../models/userSchema.js";


let emailerr = null;

export function getAdminPage(req, res) {
  if(req.session.admin)
{
  console.log("getdash");
  res.render("index")
} else{
  console.log("getlogin");
  res.render("adminLogin", { error: emailerr });
  console.log(emailerr);
  emailerr = null;

}
}

export async function postAdminPage(req, res) {
  console.log(req.body);
  const { name, email, password } = req.body;
  const userinfo = await admins.findOne({ email });
  console.log(userinfo);
  if (!userinfo) {
    emailerr = "admin is not found";
    res.redirect("/admin");
  } else {
    if (
      name === userinfo.name &&
      email === userinfo.email &&
      password === userinfo.password
    ) {
      console.log(200, "success");
      req.session.admin={
        id:userinfo._id
      }
      console.log(req.session.admin);
      res.redirect("/admin");
    } else {
      emailerr = "password error";
      res.redirect("/admin");
    }
  }
}
export function getdashboard(req,res){
console.log("admin");
  res.redirect("/admin")
}
export async function getuserManagement(req,res){
  console.log("usermanage");
  const userinfo=await users.find().lean()

  res.render("userManagement",{userinfo})
}
export async function getgategoriesManagemenet(req,res){

const userinfo=await users.find().lean()
  res.render("categoriesManagement",{userinfo})
}
export function getProductManagement(req,res) {
  console.log("admin profile");
  res.render('ProductManagement')
}
