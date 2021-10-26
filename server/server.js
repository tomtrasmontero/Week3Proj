const express = require("express");
const app = express();
const PORT = 8080;
const { providers, utils } = require("ethers");
require("dotenv").config({
    path: __dirname + "/../.env"
});

app.use(require("body-parser").json());
// const secretKEy = `0x${process.env.REACT_APP_PRIVATE_KEY}`;
const RINKEBYURL = process.env.REACT_APP_ENDPOINT;
const provider = new providers.JsonRpcProvider(RINKEBYURL);

const getBlockData = async (block = null) => {
    let data;
    try {
        data = await provider.getBlock(block);
    } catch (err) {
        console.log(err);
    }

    return data;
}

const getAccountBalance = async (address = null) => {
    let data;
    try {
        const bigNum = await provider.getBalance(address);
        data = utils.formatEther(bigNum);
    } catch (err) {
        console.log(err);
    }

    return data;
}

app.get("/api/getBlock", (req, res) => {
    getBlockData()
        .then((response) => {
            console.log(response);
            res.json(response);
        })
        .catch(err => {
            res.status(500).send(`Error Fetching Block: ${err}`);
        });
});

app.get("/api/getBalance/:address", (req, res) => {
    getAccountBalance(req.params.address)
        .then((response) => {
            console.log(response);
            res.json(response);
        })
        .catch(err => {
            res.status(500).send(`Error Fetching Balance: ${err}`);
        });
});

app.listen(PORT, () => {
    console.log(`Server Started on port: ${PORT}`);
})