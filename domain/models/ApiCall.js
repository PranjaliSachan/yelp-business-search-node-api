const config = require('../../config');
const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize(config.POSTGRES_CONNECTION_STRING, {
    dialect: 'postgres'
});

class ApiCall extends Model { }

ApiCall.init({
    id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
    service_name: { type: DataTypes.STRING, allowNull: false },
    client_ip: { type: DataTypes.STRING },
    timestamp: { type: DataTypes.DATE, allowNull: false }
}, {
    sequelize,
    tableName: 'apicall_stats',
    modelName: 'ApiCallStat',
    timestamps: false
});

module.exports = ApiCall;