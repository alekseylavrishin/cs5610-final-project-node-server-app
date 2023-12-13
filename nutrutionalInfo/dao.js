import model from "./model.js";

export const createNutritionInfo = (recipeId, recipeName, carbohydrates, fat, calories, protein) =>
    model.create({recipeId, recipeName, carbohydrates, fat, calories, protein});



export const deleteNutritionInfo = (recipeId) =>
    model.deleteOne({recipeId: recipeId});

export const getNutritionInfo = (recipeId) =>
    model.findOne({recipeId: recipeId});

export const getAllNutrition = () =>
    model.find();