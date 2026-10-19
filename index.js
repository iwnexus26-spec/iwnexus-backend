const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
let users = []; let totalTraffic = 0;

app.get('/', (req,res)=>{res.send(`<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>iwnexus BEE</title>
<style
