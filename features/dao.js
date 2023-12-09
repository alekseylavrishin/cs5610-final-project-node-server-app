import model from "./model.js";

export const findAllLikes = () => model.find();

export const createUserLikesRecipe = (userId, recipeId, recipeName, recipeImage) =>
    model.create({user: userId, recipeId: recipeId, recipeName, recipeImage});

export const deleteUserLikesRecipe = (userId, recipeId) =>
    model.deleteOne({user: userId, recipeId: recipeId});

export const findUsersThatLikeRecipe = (recipeId) =>
    model.find({recipeId: recipeId}).populate("user");

export const findRecipesThatUserLikes = (userId) =>
    model.find({user: userId});