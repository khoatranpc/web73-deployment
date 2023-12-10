import expresss from 'express';
import mongoose from 'mongoose';
import UserModel from './models/user.js';

mongoose.connect('mongodb+srv://mindx:mindx@test-demployment.gzmrvrg.mongodb.net/lesson9?retryWrites=true&w=majority');

const app = expresss();

app.get('/users', async (req, res) => {
    const listUser = await UserModel.find({});
    res.status(200).send({
        message: 'Thành công!',
        data: listUser
    });
});
app.get('/', (req, res) => {
    res.send({
        message: 'Kết nối thành công!'
    });
})

app.listen(8000, () => {
    console.log('Server is running!');
})