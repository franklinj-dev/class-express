const express = require('express');
const app = express();
const router = express.Router();
const {createUser,getUser,updateUser,deleteUser} = require('./db/dummy');

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());
app.use(router);


router.get('/users',(req, res) => {
    const listUsers = getUser();
    console.log(listUsers);
    res.json(listUsers);
})

router.post('/users', (req, res) => {
    const dataUser = req.body;
    const createdUser = createUser(dataUser);

    res.json(createdUser);
})


// app.use('/', function (require, response){

//     response.send('<h1>Hello World</h1>');

// });

app.listen(3500, function activeApp(){
    console.log("listening on http://localhost:3500");
});

