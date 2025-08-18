let movie = {
    id: 1,
    name: 'Saiyaara',
    type: 'bekar',
    time: 150,
}
getMovie(1, (movie) => {
    console.log(movie)
    getCinema(movie.name, (cinemaName) => {
        console.log(cinemaName)
        getTicket(cinemaName, (ticket) => {
            console.log(ticket)
        })
    })
})
function getMovie(id, callback) {
    setTimeout(() => {
        callback({
            id: 1,
            name: 'Harry Potter',
            type: 'Magic Thriller',
            time: 150,


        })
    }, 3000)

}
function getCinema(name, callback) {
    setTimeout(() => {
        callback(
            ['PVR', 'MirajCinema', 'Movie World Cinema']
        )

    }, 3000)
}
function getTicket(cinemaName, callback) {
    setTimeout(() => {

        if (cinemaName[0] == 'PVR') {
            callback("golden Ticket")

        }


    }, 3000)

}
