import model from "./model.js";

export const createInstructionInfo = (recipeId, recipeName, instructions) =>
    model.create({recipeId, recipeName, instructions});

export const deleteInstructionInfo = (recipeId) =>
    model.deleteOne({recipeId: recipeId});

export const getInstructionInfo = (recipeId) =>
    model.findOne({recipeId: recipeId});

export const getAllInstructions = () =>
    model.find();