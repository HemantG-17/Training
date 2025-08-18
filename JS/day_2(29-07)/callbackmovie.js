let movie = {
    id: 1,
    name: "Cammando",
    type: "Action",
    time: "125min"
}
getMovie(1, (movie) => {
    console.log(movie)
    getCinemas(movie.name, (cinemaNames) => {
        console.log(cinemaNames)
        getTicket(cinemaNames[0], (ticket) => {
            console.log(ticket)
        })
    })
})
function getMovie(id, callback) {
    setTimeout(() => {
        callback({
            id: 1,
            name: "Cammando",
            type: "Action",
            time: "125min"
        })
    }, 3000)
}
function getCinemas(name, callback) {
    setTimeout(() => {
        let cinemaNames = ['PVR', 'Maya Cineplex', 'Wave Cinemas']
        callback(cinemaNames)
    }, 3000)
}
function getTicket(cinemaName, callback) {
    setTimeout(() => {
        let ticket = {
            gold: 250,
            premium: 200,
            silver: 150
        }
        callback(ticket)
    }, 4000)
}