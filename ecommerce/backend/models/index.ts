import Cart from "./Cart";
import Category from "./Category";
import Product from "./Product";
import ProductCategory from "./ProductCategory";
import ProductImage from "./ProductImage";
import User from "./User";

//  one to many relationship
User.hasMany(Product, {
  as: "products",
  foreignKey: "user_id",
});

Product.belongsTo(User, {
  as: "seller",
  foreignKey: "user_id",
});
// end

// many to many
Product.belongsToMany(Category, {
  through: ProductCategory,
  as: "categories",
  foreignKey: "productId",
  otherKey: "categoryId",
});

Category.belongsToMany(Product, {
  through: ProductCategory,
  as: "products",
  foreignKey: "categoryId",
  otherKey: "productId",
});

Product.hasMany(ProductImage, {
  foreignKey: "productId",
  as: "images",
});

Cart.belongsTo(Product, {
  foreignKey: "productId",
  as: "product",
});

Product.hasMany(Cart, {
  foreignKey: "productId",
  as: "carts",
});
