class ConfigAPIURL {
  // static baseUrl = process.env.URL;
  static baseUrl =
    // "http://localhost:4000" ||
    process.env.NEXT_PUBLIC_PROD_API_URL || process.env.NEXT_PUBLIC_DEV_API_URL;

  //List of common Pay Defination APIs and request method type
  static userIsLoggedin = this.baseUrl + "/user/islogin"; //get
  static userAccountlogin = this.baseUrl + "/user/accountLogin"; //post
  static mobilenoLogin = this.baseUrl + "/user/mobileNo/login"; //post
  static mobileNoSignUp = this.baseUrl + "/user/mobileNo/signup"; //post
  static newUserUpdate = this.baseUrl + "/user/updateUser"; //post
  static userVerifyotp = this.baseUrl + "/user/verify/otp"; //post
  static userResendOtp = this.baseUrl + "/user/resend/otp"; //post
  static userAccountCreate = this.baseUrl + "/user/signup"; //post
  static userExist = this.baseUrl + "/user/exist"; //post
  static userUpdate = this.baseUrl + "/user/update"; //post
  static userDelete = this.baseUrl + "/user/delete"; //post
  static userLogout = this.baseUrl + "/user/logout"; //post
  static unsubscribeEmail = this.baseUrl + "/user/unsubscribe/:email"; //get
  static userForgotpassword = this.baseUrl + "/user/forgot/password"; //get
  static userDetail = this.baseUrl + "/user/userdetail"; //get
  static checkUserPresent = this.baseUrl + "/user/checkuserpresent"; //get
  static checkUserPresentVerifyOtp =
    this.baseUrl + "/user/checkuserpresentverifyotp"; //get
  static userProfileUpdate = this.baseUrl + "/user/profile/update"; //put
  static uploadFile = this.baseUrl + "/user/upload/file"; //put

  //integrating payment gateway api
  static initiatePayment = this.baseUrl + "/user/initiate/pay";

  //inventory api
  static fetchInventoryByCategory = this.baseUrl + "/user/inventory"; //post
  static inventoryDetailsById =
    this.baseUrl + "/user/inventory/product/details"; //post

  //for orders creation and listing
  static createOrder = this.baseUrl + "/user/orders/create"; //post

  //for cart
  static cartDetails = this.baseUrl + "/user/cart/details"; //post
  static getCartCount = this.baseUrl + "/user/cart/count"; //post
  static addToCart = this.baseUrl + "/user/cart/add"; //post
  static clearCart = this.baseUrl + "/user/cart/clear"; //get
  static updateCart = this.baseUrl + "/user/cart/update"; //post

  //Category
  static getAllCategory = this.baseUrl + "/user/inventory/category"; //POST
  static getCategoryDetails = this.baseUrl + "/user/inventory"; //POST
  static searchCategorySuggestions = this.baseUrl + "/user/inventory/search"; //GET

  //user order api
  static fetchAllUserOrders = this.baseUrl + "/user/orders/all"; //get
  static requestCancellation = this.baseUrl + "/user/orders/status/update"; //Post
  static fetchOrderDetailsById = this.baseUrl + "/user/orders/details"; //post
  static approveReject = this.baseUrl + "/user/orders/approve"; //post
  static removeItemFromCart = this.baseUrl + "/user/cart/remove"; //post
  static submitFeedback = this.baseUrl + "/user/orders/feedback"; //post

  //requirement api
  static submitRequirement = this.baseUrl + "/user/orders/requirement"; //post

  //wallet related api
  static verifyWalletBalance = this.baseUrl + "/user/wallet/verify"; //post
  static fetchWalletBalance = this.baseUrl + "/user/wallet/summary"; //get
  static fetchAllWalletTransaction = this.baseUrl + "/user/wallet/transactions"; //post
  static rechargeWallet = this.baseUrl + "/user/recharge/wallet"; //post

  //google apis
  static getCordinates = this.baseUrl + "/user/location/coordinates"; //post
  static getLocation = this.baseUrl + "/user/location/search"; //post

  //to get all advertisements
  static getAllAdvertisements = this.baseUrl + "/user/advertisement"; //post

  //to get all popular services
  static getAllPopularService = this.baseUrl + "/user/inventory/popular"; //post

  //generate invoice
  static generateInvoice = this.baseUrl + "/user/invoice"; //post
  static walletInvoice = this.baseUrl + "/user/recharge/invoice";

  //addBilling
  static addBillingDetails = this.baseUrl + "/user/add/billingDetails";

  //add message
  static addOrderMessage = this.baseUrl + "/user/orders/add/message";
}
export default ConfigAPIURL;
