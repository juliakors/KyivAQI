
function UserRepository() {}

function createNewUser() {}


function getUser() {
}


UserRepository.prototype.createNewUser = createNewUser;
UserRepository.prototype.getUser = getUser;

module.exports = new UserRepository();