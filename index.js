const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let totalTraffic = 0;
let totalPayout = 0;

app.get('/', (req,res)=>{
  res.send('<h1>iwnexus API Live - Zero Start</h1><p>Min Withdraw $10 - Reg Users Only - Background Active</p><a href="/api/admin">Admin Panel</a>');
});

app.post('/api/signup', (req,res)=>{
  const {name, mobile, email} = req.body;
  if(!name || !mobile) return res.json({success:false});
  const id = 'PK-'+String(users.length+1).padStart(3,'0');
  const user = {id, name, mobile, email, gb:0, balance:0, verified:true, joined: new Date()};
  users.push(user);
  console.log('New:', id);
  res.json({success:true, user});
});

app.post('/api/earn', (req,res)=>{
  const {id, amount} = req.body;
  const user = users.find(u=>u.id===id);
  if(!user) return res.json({success:false});
  const gbAdd = amount || 0.002;
  const earnAdd = gbAdd * 0.15;
  user.gb += gbAdd;
  user.balance += earnAdd;
  totalTraffic += gbAdd;
  totalPayout += earnAdd;
  res.json({success:true, user});
});

app.get('/api/admin', (req,res)=>{
  res.json({
    totalNodes: users.length,
    activeNodes: users.filter(u=>u.gb>0).length,
    totalTraffic: totalTraffic.toFixed(3),
    grossRevenue: (totalTraffic*0.50).toFixed(2),
    totalPayout: totalPayout.toFixed(2),
    netProfit: (totalTraffic*0.35).toFixed(2),
    minWithdraw: 10,
    users
  });
});

app.get('/api/user/:id', (req,res)=>{
  const user = users.find(u=>u.id===req.params.id);
  if(!user) return res.json({success:false});
  res.json({success:true, user, canWithdraw: user.balance>=10});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log('LIVE '+PORT));
