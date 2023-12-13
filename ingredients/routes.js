import * as dao from "./dao.js";
import {createIngredientInfo, deleteIngredientInfo, getAllIngredients, getIngredientInfo} from "./dao.js";
import * as daoLikes from "../likes/dao.js";
import * as daoFeatures from "../features/dao.js";

function IngredientsRoutes(app) {

    const createIngredientInfo = async (req, res) => {
        try {
            const recipeId = req.params.recipeId;
            const recipeName = req.body.recipeName;
            const extendedIngredients = req.body.extendedIngredients;
            console.log(extendedIngredients);
            const nutrition = await dao.createIngredientInfo(recipeId, recipeName, extendedIngredients);
            res.json(nutrition);

        }
        catch (error){
            res.json(error);
        }
    }

    const deleteIngredientInfo = async (req, res) => {
        const recipeId = req.params.recipeId;
        const status = await dao.deleteIngredientInfo(recipeId);
        res.json(status);
        
    }

    const getIngredientInfo = async (req, res) => {
        const recipeId = req.params.recipeId;
        const nutrition = await dao.getIngredientInfo(recipeId);
        res.json(nutrition);
    }

    const getAllIngredients = async (req, res) => {
        const nutrition = await dao.getAllIngredients();
        res.json(nutrition);
    }



    app.post("/api/ingredients/:recipeId", createIngredientInfo);
    app.delete("/api/ingredients/:recipeId", deleteIngredientInfo);
    app.get("/api/ingredients/:recipeId", getIngredientInfo);
    app.get("/api/ingredients", getAllIngredients);


}
export default IngredientsRoutes;