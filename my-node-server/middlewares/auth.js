const checkAuthentication = (req, res, next) => {
  console.log("checkAuthentication");
  let loggedIn = true;
  if (loggedIn) {
    next();
  } else {
    return res.status(401).send({ msg: "unauthenticated" });
  }
};

// // default export
// module.exports=checkAuthentication

module.exports = {
  checkAuthentication,
};
