let developer = {
  id: 1,
  name: "Hemant",
  mob: 8585927853,
  repoId: 2025
}
getDeveloper(1, (developer) => {
  console.log("details=",developer)
  getRepo(developer.repoId, (repos) => {
    console.log("repositoreis=",repos)
    getCommits(repos, (commits) => {
      console.log("commits=",commits)
    })
  })
})
function getDeveloper(id, callback) {
  setTimeout(() => {
    callback({
      id: 1,
      name: "Hemant",
      mob: 8585927853,
      repoId: 2025
    })

  }, 3000);
}
function getRepo(repoId, callback) {
  let repos = ['r1', 'r2', 'r3', 'r4']
   setTimeout(() => {
    callback(repos)
  }, 3000)
}
function getCommits(repo, callback) {
  let commits = ['callback function', 'callbackProblem Soltion']
  setTimeout(() => {
    callback(commits)
  }, 3000)
}


