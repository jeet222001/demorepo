var courseSchema = require('./Model/course');
const mongoose = require('mongoose');
const Course = mongoose.model('Course', courseSchema);

mongoose.connect('mongodb://127.0.0.1:27017/Module12PracticeValidation', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Could not connect to MongoDB', err);
    });



async function createCourse() {
    try {
        const course = new Course({
            name: 'Angular Course',
            category: 'Web',
            author: 'Manthan Khunt',
            tags: ['angular'],
            date: new Date(),
            isPublished: true,
            // price: 15.8
        });
        const result = await course.save();
        console.log(result);
    } catch (ex) {
        for (let field in ex.errors)
            console.log(`${ex.errors[field].message}`);
    }
}
async function getCourse() {
    const pageNumber = 2;
    const pageSize = 10;
    const courses = await Course
        .find({ _id: '629f11241ad079bed7f4d661' })
        .sort({ name: 1 })
        // .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .select({ name: 1, tags: 1, price: 1 });
    console.log(courses[0].price);
}
getCourse();