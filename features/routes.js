import * as dao from "./dao.js";
function LikesRoutes(app) {

/*
    const findAllLikes = async (req, res) => {}
*/

    const createUserLikesRecipe = async (req, res) => {
        const userId = req.params.userId;
        const recipeId = req.params.recipeId;
        const recipeName = req.body.recipeName;
        const recipeImage = req.body.recipeImage;
        const likes = await dao.createUserLikesRecipe(userId, recipeId, recipeName, recipeImage);
        res.json(likes);
    }

    const deleteUserLikesRecipe = async (req, res) => {
        const userId = req.params.userId;
        const recipeId = req.params.recipeId;
        const status = await dao.deleteUserLikesRecipe(userId, recipeId);
        res.json(status);
    }

    const findUsersThatLikeRecipe = async (req, res) => {
        const recipeId = req.params.recipeId;
        const likes = await dao.findUsersThatLikeRecipe(recipeId);
        res.json(likes);
    }

    const findRecipesThatUserLikes = async (req, res) => {
        const userId = req.params.userId;
        const likes = await dao.findRecipesThatUserLikes(userId);
        res.json(likes);
    }

    app.get("/api/likes", findAllLikes);
    app.post("/api/users/:userId/likes/:recipeId", createUserLikesRecipe);
    app.delete("/api/users/:userId/likes/:recipeId", deleteUserLikesRecipe);
    app.get("/api/likes/:recipeId/users", findUsersThatLikeRecipe);
    app.get("/api/users/:userId/likes", findRecipesThatUserLikes);
}
export default LikesRoutes;