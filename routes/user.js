import express, { Router } from "express";
import {
  addresspage,
  addtocart,
  addtowishlist,
  cart,
  contactus,
  deletefromaddress,
  deletefromcart,
  deletefromwishlist,
  editaddress,
  forgottenPassword,
  getcheckout,
  getforget3,
  getOtpValidate,
  getsignUpOtp,
  guestpage,
  incdec,
  jersey,
  newp,
  orderDetails,
  payment,
  postaddresspage,
  postaddressprofile,
  postcheckout,
  postforget3,
  postForgottenPassword,
  postOtpValidate,
  postsignUpOtp,
  productPage,
  promoCode,
  resendOTP,
  shop,
  shorts,
  signupresendOTP,
  userGetLogin,
  userGetSignup,
  userlogout,
  userPostLogin,
  userPostSignup,
  userprofile,
  wishlist,
} from "../controllers/userController.js";
import { ifuser } from "../middleware/middleware.js";

var router = express.Router();

router.get("/", guestpage);
router.get("/login", userGetLogin);
router.post("/login", userPostLogin);
router.get("/signup", userGetSignup);
router.post("/signup", userPostSignup);
router.get("/otp", forgottenPassword);
router.post("/otp", postForgottenPassword);
router.get("/otpValidate", getOtpValidate);
router.post("/otpValidate", postOtpValidate);
router.get("/signUpOtp", getsignUpOtp);
router.post("/signUpOtp", postsignUpOtp);
router.get("/forget3", getforget3);
router.post("/forget3", postforget3);
router.get("/resendotp", resendOTP);
router.get("/signupResendOtp", signupresendOTP);
router.get("/logout", userlogout);
router.get('/productpage/:id',productPage)
router.get('/wishlist',ifuser,wishlist)
router.get('/cart',ifuser,cart)
router.get('/profile',ifuser,userprofile)
router.get('/shop',shop)
router.get('/jersey',jersey)
router.get('/shorts',shorts)
router.get('/contactus',contactus)
router.get('/checkout',ifuser,getcheckout)
router.post('/checkout',ifuser,postcheckout)
router.get('/address',ifuser,addresspage)
router.post('/address',postaddresspage)
router.post('/addressprofile',postaddressprofile)
router.post('/orderconfirmationpage',)
router.get('/editprofile/:data',ifuser,editaddress)
router.get("/trash",ifuser,payment)
router.get('/orders',orderDetails)




//axios
router.get('/addtowishlist/:data',ifuser,addtowishlist)
router.get('/deletefromwishlist/:data',ifuser,deletefromwishlist)
router.get('/addtocart/:data',ifuser,addtocart)
router.get('/deletefromcart',ifuser,deletefromcart)
router.get('/incdec',ifuser,incdec)
router.get("/deletefromaddress/:data",ifuser,deletefromaddress)
router.get('/promoCode/:data',ifuser,promoCode)


router.get('/new',ifuser,newp)
export default router;
