const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const storiesSchema = new mongoose.Schema({
    name: String,
    story: String,
});

// create a model for tickets
const Story = mongoose.model('stories', storiesSchema);


app.get('/api/stories', async (req, res) => {
    try {
        let stories = await Story.find();
        var chosenNumber = Math.floor(Math.random() * stories.length);
        let story = stories[chosenNumber];
        res.send({
            story : story //called in front end
        });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/api/stories', async (req, res) => {
    const story = new Story({
        name: req.body.name, //req = request, res = response
        story: req.body.story
    });
    try {
        await story.save();
        res.send({
            story: story
        });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
