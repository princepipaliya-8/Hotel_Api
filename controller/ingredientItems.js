import ingredientItemsModel from '../model/ingredientItems/ingredientItems.js'

export const ingredientItemsGet = async (req, res) => {
    const ingredientItemsData = await ingredientItemsModel.find({}).populate({ path: "ingredients", populate: { path: "ingredientDescriptionDetailes" } })

    res.status(200).json({
        "msg": "ingredientItems Detailes",
        "data": ingredientItemsData
    })
}
export const ingredientItemsPost = async (req, res) => {
    const { ingredientItems, ingredients } = req.body

    const ingredientItemsData = new ingredientItemsModel({
        ingredientItems, ingredients
    })

    await ingredientItemsData.save()

    res.status(201).json({
        "msg": "ingredientItemsData Posted",
        "data": ingredientItemsData
    })
}