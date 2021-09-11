// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  forignKey : 'product_id',
});
// Categories have many Products
Category.hasMany(Product, {
  forignKey: 'category_id',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  though: 'ProductTag',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  though: 'ProductTag',
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
