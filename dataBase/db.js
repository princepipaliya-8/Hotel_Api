
import mongoose from 'mongoose';

const db = mongoose.connect('mongodb+srv://princepipaliya1781980:hDv4sng1QOUXY3H7@hotelcluster.jgozt.mongodb.net/hotel')
    .then(() => console.log('Database Connected!'))
    .catch((error) => {
        console.log('Error', error);
    });

export default db