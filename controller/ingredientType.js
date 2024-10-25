import ingredientModel from "../model/ingredientType/ingredientType.js";

export const ingredientTypeGet = async (req, res) => {
    const ingredientTypes = await ingredientModel.find({})
    res.status(200).json({
        "msg": "Ingredient Types",
        "data": ingredientTypes
    })
}

export const ingredientTypePost = async (req, res) => {
    const { ingredientCode, ingredientDescription } = req.body

    const ingredientType = new ingredientModel({
        ingredientCode, ingredientDescription
    })
    await ingredientType.save()
    res.status(200).json({
        "msg": "Ingredient Type Post",
        "data": ingredientType
    })
}
