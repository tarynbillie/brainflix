const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const videoData = require('./videoData').videoLinks;
const commentsData = require('./commentsData').videoDetails;

const PORT = process.env.PORT || 8080;

// passing a middleware function..anybody is now allowed to acess any file that I put into the public folder
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

// body-parser middleware for POST
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// COR middleware (like club bouncer seeing if you have access)
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
  next();
});

// ----------------------GET REQUEST FOR ENDPOINT VIDEOS-----------------
app.get('/videos', (req, res) => {
  res.json(videoData);
})

// --------------------GET REQUEST FOR SPECIFIC VIDEO ID------------------
app.get('/videos/:id', (req, res) => {
  console.log('route was triggered with path', req.path);
  req.params.id = Number(req.params.id);

  const videoSpec = commentsData.find(video => {
    return video.id === req.params.id;

  })
  res.json(videoSpec);
  console.log(commentsData);
  console.log(req.params.id);
  console.log(videoSpec)
})

// ---------------------POST REQUEST TO ADD COMMENT TO PARTICULAR VIDEO---------------
const comment = [];
let lastId = 1;
app.post('/videos/:id/comments', (req, res) => {
  const comment = {
    name: 'Taryn',
    comment: req.body.comment,
    id: lastId++,
    timestamp: Date.now()
  };

  const videoSpec = commentsData.find(video => {
    console.log(video.id);
    console.log(req.params.id);
    // adding a plus will compare number to number instead of number to string whcih will always be false
    return video.id === +req.params.id;
  });

  videoSpec.comments.unshift(comment);
  res.json(comment);
})

app.get('/videos/:id/comments', (req, res) => {
  res.json(comment)
  // location.reload(true);
})


// passing const port as port environment or 8080 so the user can choose what port they would want to run on their local device/host
app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`server is listening on ${PORT}...be careful what you say!`)
})

