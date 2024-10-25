import ingredients from "../model/ingredients/ingredients.js";

export const ingredientsGet = async (req, res) => {

    const ingredientsData = await ingredients.find({}).populate("ingredientDescriptionDetailes")

    res.status(200).json({
        "msg": "Ingredients",
        "data": ingredientsData
    })
}

export const ingredientsPost = async (req, res) => {
    const { ingredientName, ingredientDescriptionDetailes } = req.body
    const ingredientsData = new ingredients({
        ingredientName, ingredientDescriptionDetailes
    })
    await ingredientsData.save()
    res.status(200).json({
        "msg": "Ingredients Post",
        "data": ingredientsData
    })
}