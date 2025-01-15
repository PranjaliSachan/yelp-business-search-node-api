const config = require('../../config');
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize(config.POSTGRES_CONNECTION_STRING, {
    dialect: 'postgres'
});

class Product extends Model { }

Product.init({
    category: { type: DataTypes.STRING },
    subcategory: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    current_price: { type: DataTypes.DECIMAL },
    raw_price: { type: DataTypes.DECIMAL },
    currency: { type: DataTypes.STRING },
    discount: { type: DataTypes.INTEGER },
    likes_count: { type: DataTypes.INTEGER },
    is_new: { type: DataTypes.BOOLEAN },
    brand: { type: DataTypes.STRING },
    brand_url: { type: DataTypes.STRING },
    codcountry: { type: DataTypes.STRING },
    variation_0_color: { type: DataTypes.STRING },
    variation_1_color: { type: DataTypes.STRING },
    variation_0_thumbnail: { type: DataTypes.STRING },
    variation_0_image: { type: DataTypes.STRING },
    variation_1_thumbnail: { type: DataTypes.STRING },
    variation_1_image: { type: DataTypes.STRING },
    image_url: { type: DataTypes.STRING },
    url: { type: DataTypes.STRING },
    id: { type: DataTypes.INTEGER, primaryKey: true },
    model: { type: DataTypes.STRING }
}, {
    sequelize,
    tableName: 'products',
    modelName: 'Product',
    timestamps: false
});

module.exports = Product;