import app from '../src/app/app'

const port: number = 3000;


app.listen(port, (error) => {
    if(error) {
        return console.log(error);
    }
    return console.log('Server is working!');
});