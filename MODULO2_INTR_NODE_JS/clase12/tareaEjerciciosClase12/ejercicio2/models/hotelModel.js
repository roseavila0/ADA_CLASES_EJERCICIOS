const fs = require ('fs')
const path = require ('path')

// Ruta del archivo JSON con la lista de hoteles
const dataPath = path.join(__dirname, '../data/hotels.json');

const hotelModel =  {

    getHotelById: (id) => {
        const rawData = fs.readFileSync(dataPath);
        const hotels = JSON.parse(rawData);
        return hotels.find( hotel => hotel.id === id) || null;
    }
}

module.exports = hotelModel