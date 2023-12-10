import * as dao from "./dao.js";
function FeaturesRoutes(app) {


    const findAllFeatures = async (req, res) => {
        const features = await dao.findAllFeatures();
        res.json(features);
    }

    const createInfluencerFeaturesRecipe = async (req, res) => {
        const userId = req.params.userId;
        const recipeId = req.params.recipeId;
        const recipeName = req.body.recipeName;
        const recipeImage = req.body.recipeImage;
        const feature = await dao.createInfluencerFeaturesRecipe(userId, recipeId, recipeName, recipeImage);
        res.json(feature);
    }

    const deleteInfluencerFeaturesRecipe = async (req, res) => {
        const userId = req.params.userId;
        const recipeId = req.params.recipeId;
        const status = await dao.deleteInfluencerFeaturesRecipe(userId, recipeId);
        res.json(status);
    }

    const checkIfRecipeFeatured = async (req, res) => {
        const recipeId = req.params.recipeId;
        const status = await dao.checkIfRecipeFeatured(recipeId);
        res.json(status);
    }

   /* const findUsersThatLikeRecipe = async (req, res) => {
        const recipeId = req.params.recipeId;
        const likes = await dao.findUsersThatLikeRecipe(recipeId);
        res.json(likes);
    }*/

    const findRecipesThatInfluencerFeatures = async (req, res) => {
        const userId = req.params.userId;
        const features = await dao.findRecipesThatInfluencerFeatures(userId);
        res.json(features);
    }

    app.get("/api/features", findAllFeatures);
    app.post("/api/users/:userId/features/:recipeId", createInfluencerFeaturesRecipe);
    app.delete("/api/users/:userId/features/:recipeId", deleteInfluencerFeaturesRecipe);
/*
    app.get("/api/likes/:recipeId/users", findUsersThatLikeRecipe);
*/
    app.get("/api/users/:userId/features", findRecipesThatInfluencerFeatures);
    app.get("/api/features/:recipeId", checkIfRecipeFeatured);
}
export default FeaturesRoutes;