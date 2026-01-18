const checkIsSeller = (req, res, next) => {
  let isSeller = true;
  if (isSeller) {
    next();
  } else {
    return res.status(403).send({ msg: "unauthorized." });
  }
};

const checkIsBuyer = (req, res, next) => {
  let isBuyer = true;
  if (isBuyer) {
    next();
  } else {
    return res.status(403).send({ msg: "unauthorized." });
  }
};

module.exports = {
  checkIsBuyer: checkIsBuyer,
  checkIsSeller,
};
