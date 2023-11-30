import model from "./model.js";

export const findAllLikes = () => model.find();

export const createUserLikesRecipe = (userId, recipeId) =>
    model.create({user: userId, recipeId: recipeId});

export const deleteUserLikesRecipe = (userId, recipeId) =>
    model.deleteOne({user: userId, recipeId: recipeId});

export const findUsersThatLikeRecipe = (recipeId) =>
    model.find({recipeId: recipeId});