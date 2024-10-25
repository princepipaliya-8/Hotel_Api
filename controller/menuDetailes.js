import menuModel from "../model/menuDetailes/menuDetailes.js";

export const menuDetailesGet = async (req, res) => {
    const menuDetailes = await menuModel.find({}).populate('menuDate').populate({ path: "ingredients" })
    res.status(200).json({
        "msg": "Menu Detailes",
        "data": menuDetailes
    })
}

export const menuDetailesPost = async (req, res) => {

    const { menuItems, menuPrice, itemDescription, menuDate, ingredients } = req.body

    const menuDetailes = new menuModel({
        menuItems, menuPrice, itemDescription, menuDate, ingredients
    })
    await menuDetailes.save()
    res.status(200).json({
        "msg": "Menu Detailes Post",
        "data": menuDetailes
    })
}