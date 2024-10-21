class LocalStorage {
  //Base URL For Live & Staging
  static theme = "dark";
  static lng = {
    displayName: "English (India /en_IN)",
    code: "en_IN",
  };
  static shopId = "";
  static shopName = "";
  static logo = "";

  static userDetails = {
    profileImage: "",
    walletBalance: 0,
    fname: "",
    lname: "",
    mobileNo: "",
    email: "",
    mobileNo: "",
    gstNumber: "",
    organisationName: "",
    address: "",
    state: "",
    userId: "",
    address: "",
    walletDetails: {},
  };
  static categoryNames = {};
  static subCategoriesNames = [];
  static userLoggedIn = false;
  static userPermission = [];
  static desiredOrder = [
    "Business Design",
    "Social Media Designs",
    "Print Design",
    "UI Designs",
    "Web Design",
    "Presentations",
    "CV & Resumes",
    "Invitation Designs",
  ];
  static PopularOrder = ["Business Design", "Logo", "Social Media Designs"];
}

export default LocalStorage;
