const users = [
    {
        id : '1',
        nombre : 'Franklin',
        username : 'franklin-dev',
    },
    {
        id : '2',
        name : 'John Doe',
        username : 'jdoe',
    }
];


function getUser(){
    return users; //Methodo Get
}

async function createUser(user){
    return users.push(user); //Methodo: Post
}

async function updateUser(position, changeUser){
    const getUser = await users.find((userFound) => userFound.id === position.id)

    console.log(getUser); // Meodoto Patch
}

async function deleteUser(id){
    const getUser = await users.find((userFound) => userFound.id === id.id);

    return users[getUser].pop(); //Metodo DELETE
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}