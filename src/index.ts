const express: any = require('express');
const axios = require('axios');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

app.get("/api/v1/posts", async (req: any, res: any) => {
    const {flag, data} = req.query;
    console.log(flag,data);
    try {
        if(flag == "CREATE") {
            // const createResponse = await axios.get('/api/v1/posts/create', {
            //     data
            // });

            const createResponse = {resp: "CREATE fetched"}
            res.json(JSON.stringify({createResponse}));
        } else if(flag == "READ") {
            // const readResponse = await axios.get('/api/v1/posts/read', {
            //     data
            // });
            const readResponse = {resp: "READ fetched"}
            res.json(JSON.stringify({readResponse}));
        }

    } catch (error) {
        res.json(JSON.stringify({err: "1024 Error Occured"}));
    }
})


app.listen(PORT, () => {
    console.log(`[LOG] API server running on port ${PORT}`);
});