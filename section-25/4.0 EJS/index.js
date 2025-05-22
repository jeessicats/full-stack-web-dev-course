import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    //console.log(day);

    let dayNumber = "a weekday";
    let adv = "it's time to work hard";

    if (day === 0 || day === 6) {
        dayNumber = "a weekend";
        adv = "it's time to relax";
    }

    res.render("index.ejs", {
        dayType: dayNumber,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});