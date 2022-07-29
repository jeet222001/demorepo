const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Module13Practices', { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    const authorSchema = new mongoose.Schema({
        name: String,
        bio: String,
        website: String
    });

    const Author = mongoose.model('Author', authorSchema);

    const Course = mongoose.model('Course', new mongoose.Schema({
        name: String,
        authors: [authorSchema]
    }));

    async function createCourse(name,authors){
        const course = new Course({
            name,
            authors
        });
        const result = await course.save();
        console.log(result);
    }

    async function listCourses(){
        const courses = await Course.find();
        console.log(courses);
    }
    async function updateAuthor(courseId){
        const course = await Course.update({_id:courseId},{
            $unset:{
                'author':''
            }
        });
        console.log(course);
    }

    async function addAuthor(courseId,author){
        const course = await Course.findById(courseId);
        course.authors.push(author);
        const result = await course.save();
        console.log(result);
    }

    async function removeAuthor(courseId,authorId){
        const course = await Course.findById(courseId);
        const author = course.authors.id(authorId);
        author.remove();
        const result = await course.save();
        console.log(result);
    }

// removeAuthor('629f32a43f0a7079b2b98b64','629f32a43f0a7079b2b98b63')
