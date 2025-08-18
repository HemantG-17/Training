async function addUser(req, res) {
    try {
        console.log(req.body, 'req.body');
        let user=new user(req.body);
        await user.save();

    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    addUser,
}