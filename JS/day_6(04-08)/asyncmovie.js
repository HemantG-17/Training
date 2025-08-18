let moives = [
    {

        id: 1,
        name: 'commando',
        type: 'Action',
        length: "120 min"
    },
    {
        id: 2,
        name: 'Sos1',
        type: 'Comedy',
        length: "120 min"
    },
    {
        id: 3,
        name: 'Sos 2',
        type: 'Comedy',
        length: "120 min"
    }
]
function getMovie(id) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let movie = moives.find((movie) => movie.id == id);
            if (movie) {
                resolve(movie);
            } else {
                reject("movie not found")
            }
        }, 3000)
    });
    return pr;
}
function getCinema(name) {
    let pr = new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Miraj Cinemas', "pvr", "MovieWorld"])
        }, 3000);
    })
    return pr;
}
function getTicket(cinema) {
    let pr = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                diamond: 400,
                golden: 300,
                silver: 250
            })
        }, 3000);
    });
    return pr;
}
async function manageMovies() {
    try{
    let movie = await getMovie(2)
    console.log(movie)
    let cinema = await getCinema(movie.name)
    console.log(cinema)
    let ticket = await getTicket(cinema)
    console.log(ticket)
    }catch(err){
        console.log(err)
    }
}
manageMovies()