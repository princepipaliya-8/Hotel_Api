import orderMenuModel from "../model/orderMenu/orderMenu.js"
import orderModel from "../model/order/order.js"

export const orderMenuGet = async (req, res) => {

    const orderMenuData = await orderMenuModel.find({}).populate({ path: "orderDetailes" }).populate({ path: "customerOrder" })

    res.status(200).json({
        "msg": "Order Menu Details",
        "data": orderMenuData
    })
}

export const orderMenuPost = async (req, res) => {

    const { foodType, orderDetailes, customerOrder } = req.body

    const orderMenuData = new orderMenuModel({
        foodType, orderDetailes, customerOrder
    })
    await orderMenuData.save()
    res.status(200).json({
        "msg": "Order Menu Post",
        "data": orderMenuData
    })


}