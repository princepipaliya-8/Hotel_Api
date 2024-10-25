import staffRoleModel from "../model/staffRole/staffRole.js"

export const staffGet = async (req, res) => {
    const staffData = await staffRoleModel.find({})
    res.status(200).json({
        "msg": "Staff Details",
        "data": staffData
    })
}
export const staffPost = async (req, res) => {
    const { staffRole, staffDescription } = req.body
    const staffData = new staffRoleModel({
        staffRole, staffDescription
    })
    await staffData.save()
    res.status(200).json({
        "msg": "Staff Post",
        "data": staffData
    })
}