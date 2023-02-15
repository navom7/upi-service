const db = require('../models')

const Sequelize = require('sequelize')

//create main Model
const upi = db.upi

const createNewUPIService = async(req) => {

    let newUpiRequest = {
        user_id: req.user_id,
        upi_id: req.upi_id,
        is_primary: req.is_primay
    }

    const upiResponse = await upi.create(newUpiRequest);
    return upiResponse.dataValues;
}


const updateAllUpis = async (req, res) => {
    let updateUPI = await upi.update({is_primary: false}, {
        where: {
            user_id : [req.user_id]
        }
    })
    console.log(updateUPI)
    return updateUPI
}


const findOneUPI = async (req) => {
    let foundUPI = await upi.findOne({
        where: {
            user_id: req.user_id,
            is_primary: true
        }
    })
    return foundUPI.dataValues;
}



module.exports = {
    updateAllUpis,
    createNewUPIService,
    findOneUPI
}
