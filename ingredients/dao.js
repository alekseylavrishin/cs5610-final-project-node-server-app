import model from "./model.js";

export const createIngredientInfo = (recipeId, recipeName, extendedIngredients) =>
    model.create({recipeId, recipeName, extendedIngredients});

export const deleteIngredientInfo = (recipeId) =>
    model.deleteOne({recipeId: recipeId});

export const getIngredientInfo = (recipeId) =>
    model.findOne({recipeId: recipeId});

export const getAllIngredients = () =>
    model.find();