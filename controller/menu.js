import menuModel from "../model/menu/menu.js";
export const menuGet = async (req, res) => {
    const menu = await menuModel.find({})
    res.status(200).json({
        "msg": "Menu",
        "data": menu
    })
}

export const menuPost = async (req, res) => {

    const { menuDate } = req.body

    const menuDetailes = new menuModel({
        menuDate
    })
    await menuDetailes.save()
    res.status(200).json({
        "msg": "Menu Post",
        "data": menuDetailes
    })
}
