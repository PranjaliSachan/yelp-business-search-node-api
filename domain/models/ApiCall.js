const { v4: UUID } = require('uuid');

class ApiCall {
    id;
    service_name;
    client_ip;
    timestamp;

    constructor(_ = { serviceName, clientIp: '' }) {
        this.id = UUID();
        this.service_name = _.serviceName;
        this.client_ip = _.clientIp;
        this.timestamp = new Date().toUTCString();
    }
}

module.exports = ApiCall;
