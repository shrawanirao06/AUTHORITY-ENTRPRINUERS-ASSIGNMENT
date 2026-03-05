const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

app.post('/login', (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password required"
        });
    }

    if (username === "admin" && password === "admin") {
        return res.status(200).json({
            message: "Login successful"
        });
    }

    return res.status(401).json({
        message: "Invalid credentials"
    });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});