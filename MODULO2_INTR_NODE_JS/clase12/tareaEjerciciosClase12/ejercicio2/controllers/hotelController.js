

const hotelModel = require ('../models/hotelModel')
const hotelView = require ('../views/hotelView')

const hotelController = {
    handleRequest: (id) => {
        const hotel = hotelModel.getHotelById(parseInt(id, 10))
        return hotelView.formatResponse(hotel)
     }
}

module.exports = hotelController