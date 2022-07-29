const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Module13Practices', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

const Author = mongoose.model('Author', new mongoose.Schema({
    name: String,
    bio: String,
    website: String
}));
const Course = mongoose.model('Course', new mongoose.Schema({
    name: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
}))

async function createAuthor(name, bio, website) {
    const author = new Author({
        name,
        bio,
        website
    });
    const result = await author.save();
    console.log(result);
}

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });
    const result = await course.save();
    console.log(result);
}

async function listCourses() {
    const courses = await Course
    .find()
    .populate('author', 'name -_id')
    .populate('category')
    .select('name author')
    console.log(courses);
}

// createAuthor('Mosh', 'My bio', 'My website');
//createCourse('Node Course', '629f2d358eb50ab5640dde04');
listCourses();