const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceLoadTimeSchema = Schema({
    resource: {
        type: String,
        required: true,
        unique: true,
    },
    redirectTime: {
        type: Number,
        required: true,
    },
    dnsLookUpTime: {
        type: Number,
        required: true,
    },
    tcpTime: {
        type: Number,
        required: true,
    },
    secureConnectionTime: {
        type: Number,
        required: true,
    },
    responseTime: {
        type: Number,
        required: true,
    },
    fetchUntilResponseEndTime: {
        type: Number,
        required: true,
    },
    RequestStartUntilResponseEndTime: {
        type: Number,
        required: true,
    },
    startUntilResponseEndTime: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Resource", resourceLoadTimeSchema);
