import expresss from 'express';

const app = expresss();

app.get('/', (req, res) => {
    res.send({
        message: 'Kết nối thành công!'
    });
})

app.listen(8000, () => {
    console.log('Server is running!');
})