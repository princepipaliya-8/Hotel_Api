import customerModel from "../model/customer/customer.js"

export const customerGet = async (req, res) => {
    const customer = await customerModel.find({})
    res.status(200).json({
        "message": "Customer Details",
        "data": customer
    })
}
export const customerPost = async (req, res) => {

    const { name, phone, email } = req.body

    const customer = new customerModel({
        name,
        phone,
        email
    })
    await customer.save()

    res.status(200).json({
        "message": "Customer Added",
        "data": customer
    })

}
