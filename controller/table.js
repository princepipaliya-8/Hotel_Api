import tableModel from "../model/table/table.js"

export const tableGet = async (req, res) => {

    const tableData = await tableModel.find({}).populate({ path: "booking", populate: { path: "customer" } })
    res.status(200).json({
        "msg": "Table Details",
        "data": tableData
    })
}
export const tablePost = async (req, res) => {

    const { tableSeat, tableNo, booking } = req.body

    const tableData = new tableModel({
        tableSeat, tableNo, booking
    })
    await tableData.save()

    res.status(200).json({
        "msg": "Table Post",
        "data": tableData
    })
}