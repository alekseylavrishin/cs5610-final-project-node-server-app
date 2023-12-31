import * as dao from "./dao.js";


function UserRoutes(app) {
    const createUser = async (req, res) => {
        try {
            const username = req.body.username;

            const userCheck = await dao.findUserByUsername(username);
            if (userCheck) {
                res.status(400).json(
                    {message: "Username already taken"});
                return;
            }
            const user = await dao.createUser(req.body);
            res.json(user);
        }
        catch (error){
            res.status(500).json(error);
        }
    };

    const deleteUser = async (req, res) => {
        const id = req.params.id;
        const status = await dao.deleteUser(id);
        res.json(status);
    };

    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
    };

    const findUserById = async (req, res) => {
        const id = req.params.id;
        const user = await dao.findUserById(id);
        res.json(user);
    };

    const updateUser = async (req, res) => {
        const id = req.params.id;
        const newUser = req.body;
        const status = await dao.updateUser(id, newUser);
        const currentUser = await dao.findUserById(id);
        req.session["currentUser"] = currentUser;
        res.json(status);
    };

    const updateUserAsAdmin = async (req, res) => {
        const id = req.params.id;
        const newUser = req.body;
        const status = await dao.updateUser(id, newUser);
        res.json(status);
    };

    const findUserByUsername = async (req, res) => {
        const username = req.params.username;
        const user = await dao.findUserByUsername(username);
        res.json(user);
    };

    const findUserByCredentials = async (req, res) => {
        const {username, password} = req.params;
        const user = await dao.findUserByCredentials(username, password);
        res.json(user);
    };

    const findUsersByRole = async (req, res) => {
        const role = req.params.role;
        const users = await dao.findUsersByRole(role);
        res.json(users);
    };

    const register = async (req, res) => {
        try {
            const user = await dao.findUserByUsername(
                req.body.username);
            if (user) {
                res.status(400).json(
                    {message: "Username already taken"});
                return;
            }
            const currentUser = await dao.createUser(req.body);
            req.session['currentUser'] = currentUser;
            res.json(currentUser);
        }
        catch (error){
            res.status(500).json(error);
        }
    };

    const signin = async (req, res) => {
        const { username, password } = req.body;
        const user = await dao.findUserByCredentials(username, password);
        if(user){
            const currentUser = user;
            req.session["currentUser"] = currentUser;
            res.json(user);
        } else {
            //res.sendStatus(403).json({error: "Invalid Credentials"});
            res.sendStatus(403);
        }
    };

    const signout = (req, res) => {
        //currentUser = null;
        req.session.destroy();
        res.sendStatus(200);
    };

    const account = async (req, res) => {
        const currentUser = req.session["currentUser"];
        /*if (!currentUser){
            res.sendStatus(403);
            return;
        }*/
        res.json(currentUser);
    };

    const updateFirstName = async (req, res) => {
        const id = req.params.id;
        const newFirstName = req.params.newFirstName;
        const status = await dao.updateUser(id, { firstName: newFirstName });
        res.json(status);
    };

    app.post("/api/users/signin", signin)
    app.post("/api/users", createUser);
    app.get("/api/users", findAllUsers);
    app.get("/api/users/:id", findUserById);
    app.delete("/api/users/:id", deleteUser);
    app.post("/api/users/register", register);
    app.post("/api/users/signin", signin);
    app.post("/api/users/signout", signout);
    app.post("/api/users/account", account);
    app.get("/api/users/username/:username", findUserByUsername);
    app.get("/api/users/credentials/:username/:password", findUserByCredentials);
    app.get("/api/users/role/:role", findUsersByRole);
    app.put("/api/users/:id", updateUser);
    app.put("/api/users/admin/:id", updateUserAsAdmin);


    app.get("/api/users/updateFirstName/:id/:newFirstName", updateFirstName);
}
export default UserRoutes;