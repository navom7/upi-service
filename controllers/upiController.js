const db = require('../models')
const {validateUPI, QRCode} = require('../helper/helperFunctions.js')

const {
    createNewUPIService,
    updateAllUpis,
    findOneUPI
 } = require('../service/upiService.js')

//create main Model


const upi = db.upi


const createNewUPI = async(req, res) => {
    if(!req || !req.body){
        return res.status(400).send({isSucces: false, message: "Invalid Request!"});
    }
    let reqBody = req.body;

    if(!reqBody.user_id || !reqBody.upi_id){
        return res.status(400).send({isSucces: false, message: "Invalid Request!"});
    }

    let isValidUPI = await validateUPI(reqBody.upi_id);
    if(!isValidUPI) {
        return res.status(400).send({isSucces: false, message: "UPI id is invalid!"});
    }

    let newUpiRequest = {
        user_id: reqBody.user_id,
        upi_id: reqBody.upi_id,
        is_primay: true //because every new upi should be primary
    }
    updateAllUpis(newUpiRequest);
    const newUPIResponse = await createNewUPIService(newUpiRequest);
    res.status(200).send(newUPIResponse)



}


const getUPIByUserId = async(req, res) => {
    if(!req || !req.body){
        return res.status(400).send({isSucces: false, message: "Invalid Request!"});
    }
    let reqBody = req.body;

    if(!reqBody.user_id){
        return res.status(400).send({isSucces: false, message: "user_id needed to find upi"});
    }

    let foundUPI = await findOneUPI(reqBody);

    let upiId = await QRCode(foundUPI.upi_id);
    return res.status(200).send({isSucces: true, message: 'qrCode is logged in console!'});

}






module.exports = {
    createNewUPI,
    getUPIByUserId
}
