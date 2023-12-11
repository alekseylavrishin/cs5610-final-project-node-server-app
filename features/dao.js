import model from "./model.js";

export const findAllFeatures = () => model.find();

export const createInfluencerFeaturesRecipe = (userId, recipeId, recipeName, recipeImage) =>
    model.create({user: userId, recipeId: recipeId, recipeName, recipeImage});

export const deleteInfluencerFeaturesRecipe = (userId, recipeId) =>
    model.deleteOne({user: userId, recipeId: recipeId});

export const findUsersThatLikeRecipe = (recipeId) =>
    model.find({recipeId: recipeId}).populate("user");

export const findRecipesThatInfluencerFeatures = (userId) =>
    model.find({user: userId});

export const checkIfRecipeFeatured = (recipeId) =>
    model.findOne({recipeId});