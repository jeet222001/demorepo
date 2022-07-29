const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/playground', { useNewUrlParser: true })
    .then(() => {
        console.log('connected to MongoDB....');
    })
    .catch((error) => console.log(error));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Angular course',
        author: 'Mosh',
        tags: ['frot-end', 'Angular'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}
async function getCourses() {
    //eq,ne,gt,gte,lt,lte,in,nin operators
    

  const courses =await  Course
  .find({author: 'Mosh', isPublished: true})
    // .find({price: {$gte: 10, $lte: 20}})
  .limit(10)
  .sort({name: 1})
  .select({name:1,tags:1});
  console.log(courses);
}
async function updateCourse(id) {
    const course = await Course.findById(id);
    if (!course) return;
    course.isPublished = true;
    course.author = 'Another Author';
    const result = await course.save();
    console.log(result);
}

async function updateCourse2(id) {
    const result = await Course.update(
        { _id: id },
        {
            $set: {
                author: 'Mosh',
                isPublished: false,
            },
        }
    );
    console.log(result);
}

async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id });
    console.log(result);
}
getCourses();
// createCourse();