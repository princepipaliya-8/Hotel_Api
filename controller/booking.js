import bookingModal from '../model/booking/booking.js'

export const bookingGet = async (req, res) => {
    const bookingData = await bookingModal.find({}).populate("customer").populate("table")
    res.json({
        "msg": "Booking Done",
        "Data": bookingData
    })
}

export const bookingPost = async (req, res) => {

    const { date, member, customer, table } = req.body

    const bookingData = new bookingModal({
        date, member, customer, table
    })
    await bookingData.save()

    res.json({
        "msg": "Booking Post"
    })
}