const express = require('express');
const app = express();
const port = 3000;

// This tells the server how to read the form data sent by the player
app.use(express.urlencoded({ extended: true }));

// When a player visits your site, send them your index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// When a player submits a flag, run this check!
app.post('/submit-flag', (req, res) => {
    const userFlag = req.body.flag;
    const correctFlag = "CTF{my_first_flag}"; // This is the secret password!

    if (userFlag === correctFlag) {
        res.send("<h1>NO YOU COULLDNT! You hacked it!</h1>");
    } else {
        res.send("<h1>whomp whomp</h1><br><a href='/'>Go back</a>, how does this look");
    }
});

// Turn the server on
app.listen(port, () => {
    console.log(`Your CTF server is running at http://localhost:${port}`);
});