import * as dao from "./dao.js";
import * as daoLikes from "../likes/dao.js";
import * as daoFeatures from "../features/dao.js";

function NutritionRoutes(app) {

    const createNutritionInfo = async (req, res) => {
        try {
            const recipeId = req.params.recipeId;
            const recipeName = req.body.recipeName;
            const carbohydrates = req.body.carbohydrates;
            const fat = req.body.fat;
            const calories = req.body.calories;
            const protein = req.body.protein;
            const nutrition = await dao.createNutritionInfo(recipeId, recipeName, carbohydrates, fat, calories, protein);
            res.json(nutrition);


        }
        catch (error){
            console.log(error);
            res.json(error)
        }
    }

    const deleteNutritionInfo = async (req, res) => {
        const recipeId = req.params.recipeId;
        const status = await dao.deleteNutritionInfo(recipeId);
        res.json(status);

    }

    const getNutritionInfo = async (req, res) => {
            const recipeId = req.params.recipeId;
            const nutrition = await dao.getNutritionInfo(recipeId);
            res.json(nutrition);



    }

    const getAllNutrition = async (req, res) => {
        const nutrition = await dao.getAllNutrition();
        res.json(nutrition);
    }



    app.post("/api/nutrition/:recipeId", createNutritionInfo);
    app.delete("/api/nutrition/:recipeId", deleteNutritionInfo);
    app.get("/api/nutrition/:recipeId", getNutritionInfo);
    app.get("/api/nutrition", getAllNutrition);


}
export default NutritionRoutes;