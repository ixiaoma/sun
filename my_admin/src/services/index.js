import fetchData from './fetch-data'

var roomData = {
    getRoomData(params){
        return fetchData.get("/product/getRoomData",params)
    }
}

export {roomData}