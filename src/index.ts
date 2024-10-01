const express: any = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

app.get("/api/v1/posts", async (req: any, res: any) => {
    const {flag, data} = req.query;
    try {
        if(flag == "CREATE") {
            console.log(data);
            const createResponse = await axios.get(`${process.env.ZSOURCE_CREATE_SERVER_URI}/api/v1/posts/create?data=${data}`); 
            res.json(createResponse.data);
        } else if(flag == "READ") {
            const readResponse = await axios.get(`${process.env.ZSOURCE_READ_SERVER_URI}/api/v1/posts/read`, {
                data
            });
            res.json(JSON.stringify({readResponse}));
        }

    } catch (error) {
        res.json(JSON.stringify({err: "1024 Error Occured"}));
    }
})

app.get("/health", (req: any,res: any)=>{
        res.send({data:"data from health checks"});
        console.log("printing from health route");
});

app.listen(PORT, () => {
    console.log(`[LOG] API server running on port ${PORT}`);
});