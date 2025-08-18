let reposetories =
{
    id: 1,
    repoid: 123,
}

function getDevelopers(id) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                repoid: 123,
            })
        }, 3000)
    });
    return pr;
}
function getRepos(repoid) {
    let pr = new Promise((resolve) => {
        let repo = ['r1', 'r2', 'r3']
        setTimeout(() => {
            resolve(repo)
        }, 3000)
    });
    return pr;
}
function getCommits(repo) {
    let pr = new Promise((resolve) => {
        let commit = ['c1', 'c2', 'c3']
        setTimeout(() => {
            resolve(commit)
        }, 3000)

    });
    return pr;
}
getDevelopers(1)
    .then((developer) => {
        console.log(developer)
        return getRepos(reposetories.repoid)
    })
    .then((repos) => {
        console.log(repos) 
        return getCommits(repos) })
    .then((commit) => console.log(commit))
    .catch((err) => console.log("repo not found"))