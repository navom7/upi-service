const dbModels = require('../models/index.js')
const { validatePattern } = require("bhimupijs")
var QR_Code = require('qrcode')
const validateUPI = (req) => {
    var data =  validatePattern(req)  // validatePattern function only validate the  UPI ID pattern.
    return data.isQueryPatternValid;
}

const QRCode = async (req) => {
    
    QR_Code.toString(req,{type:'terminal'}, function (err, url) {
        qrString = JSON.stringify(url);
        console.log(url)
    })
}



module.exports = {
    validateUPI,
    QRCode
}
