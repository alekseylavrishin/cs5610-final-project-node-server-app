import * as dao from "./dao.js";

function InstructionsRoutes(app) {

    const createInstructionInfo = async (req, res) => {
        try {
            const recipeId = req.params.recipeId;
            const recipeName = req.body.recipeName;
            const instructions = req.body.instructions;
            const submit = await dao.createInstructionInfo(recipeId, recipeName, instructions);
            res.json(submit);

        }
        catch (error){
            res.json(error);
        }
    }

    const deleteInstructionInfo = async (req, res) => {
        const recipeId = req.params.recipeId;
        const status = await dao.deleteInstructionInfo(recipeId);
        res.json(status);
        
    }

    const getInstructionInfo = async (req, res) => {
        const recipeId = req.params.recipeId;
        const instruction = await dao.getInstructionInfo(recipeId);
        res.json(instruction);
    }

    const getAllInstructions = async (req, res) => {
        const instruction = await dao.getAllInstructions();
        res.json(instruction);
    }



    app.post("/api/instructions/:recipeId", createInstructionInfo);
    app.delete("/api/instructions/:recipeId", deleteInstructionInfo);
    app.get("/api/instructions/:recipeId", getInstructionInfo);
    app.get("/api/instructions", getAllInstructions);


}
export default InstructionsRoutes;