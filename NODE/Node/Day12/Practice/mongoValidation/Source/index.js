var courseSchema = require('./Model/course');
const mongoose = require('mongoose');
const Course =  mongoose.model('Course', courseSchema);

mongoose.connect('mongodb://127.0.0.1:27017/Module12PracticeValidation', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Could not connect to MongoDB', err);
    });
    


async function createCourse(){
    const course = new Course({
        name: 'Angular Course',
        author: 'Mosh Hamedani',
        tags: ['angular', 'frontend'],
        date: new Date(),
        isPublished: true,
        price: 15.8
    });
    const result = await course.save();
    console.log(result);
}
createCourse();