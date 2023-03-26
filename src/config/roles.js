const allRoles = {
    user: [],
    admin: ['getUsers', 'manageUsers'],
};

// return array about keys in allRoles ['user', 'admin']
const roles = Object.keys(allRoles);

//return Map(2) { 'user' => [], 'admin' => [ 'getUsers', 'manageUsers' ] }
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
    roles,
    roleRights,
};