
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
let users = []; let totalTraffic = 0;

app.get('/', (req,res)=>{
 res.setHeader('Content-Type','text/html');
 res.send(`<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>iwnexus BEE</title>
<style>
*{box-sizing:border-box;font-family:Arial}body{margin:0;background:#080c14;color:#fff;min-height:100vh}
.header{background:linear-gradient(135deg,#facc15,#f59e0b);padding:18px;text-align:center;border-radius:0 0 24px 24px}
.header h1{margin:0;color:#000;font-size:24px;font-weight:900}
.container{padding:12px;max-width:400px;margin:0 auto}
.card{background:#151d2f;border-radius:16px;padding:16px;margin:10px 0;border:1px solid #222}
input{width:100%;padding:12px;margin:6px 0;border-radius:10px;border:1px solid #333;background:#0f172a;color:#fff;outline:none}
button{width:100%;padding:14px;border:none;border-radius:12px;font-size:15px;font-weight:800;margin:6px 0;cursor:pointer}
.y{background:#facc15;color:#000}.hidden{display:none}
.tabs{display:flex;gap:6px;margin-bottom:10px}.tab{flex:1;padding:8px;background:#1e293b;border-radius:8px;text-align:center;color:#888;font-weight:700;font-size:13px;cursor:pointer}.tab.active{background:#facc15;color:#000}
.wifi-screen{text-align:center}
.big-btn{width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,#facc15,#f59e0b);color:#000;font-size:18px;font-weight:900;border:none;margin:20px auto;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 0 30px rgba(250,204,21,0.4)}
.big-btn.on{background:radial-gradient(circle,#22c55e,#16a34a);color:#fff}
.mini-row{display:flex;gap:8px;margin:12px 0}.mini{background:#1e293b;border-radius:10px;padding:8px;flex:1;text-align:center}.mini b{color:#facc15;display:block}.mini span{font-size:10px;color:#888}
</style></head><body>
<div class="header"><h1>🐝 iwnexus BEE</h1><p style="margin:4px 0 0;color:#000;font-size:10px;font-weight:700">TAP TO WIFI • EARN</p></div>
<div class="container">
<div class="card" id="authCard">
<div class="tabs"><div class="tab active" id="tS" onclick="tab('s')">Signup</div><div class="tab" id="tL" onclick="tab('l')">Login</div></div>
<div id="fS"><input id="name" placeholder="Name"><input id="mobile" placeholder="Mobile 0300xxxxxxx"><button class="y" onclick="signup()">START EARNING 🚀</button></div>
<div id="fL" class="hidden"><input id="lmobile" placeholder="Mobile Number"><button class="y" onclick="login()">LOGIN</button></div>
</div>
<div class="card hidden" id="wifiCard">
<div class="wifi-screen">
<h3 style="color:#facc15;margin:0">Welcome <span id="uName">User</span> 👋</h3>
<p style="font-size:12px;color:#888;margin:5px 0">Tap button to start</p>
<div class="mini-row"><div class="mini"><b id="gb">0.000</b><span>GB</span></div><div class="mini"><b id="bal">$0.00</b><span>BALANCE</span></div><div class="mini"><b id="stat">OFF</b><span>STATUS</span></div></div>
<button class="big-btn" id="wifiBtn" onclick="toggleWifi()"><span style="font-size:50px" id="wifiIcon">📶</span><span id="wifiText">TAP TO<br>WIFI</span></button>
<p style="font-size:11px;color:#888" id="hint">Tap to start earning • $10 min withdraw</p>
<button class="y" onclick="withdraw()" style="margin-top:12px">💸 WITHDRAW $10</button>
<button onclick="logout()" style="background:none;color:#555;font-size:11px;padding:6px">Logout</button>
</div>
</div>
</div>
<script>
let myData = JSON.parse(localStorage.getItem("iwnexus")||"null");
let beeInt=null,wifiOn=false;
function tab(t){document.getElementById("fS").classList.toggle("hidden",t!=='s');document.getElementById("fL").classList.toggle("hidden",t!=='l');document.getElementById("tS").classList.toggle("active",t==='s');document.getElementById("tL").classList.toggle("active",t==='l')}
function showWifi(u){document.getElementById("authCard").classList.add("hidden");document.getElementById("wifiCard").classList.remove("hidden");document.getElementById("uName").innerText=u.name;upd(u)}
function upd(u){document.getElementById("gb").innerText=(u.gb||0).toFixed(3);document.getElementById("bal").innerText="$"+(u.balance||0).toFixed(2)}
if(myData){showWifi(myData)}
async function signup(){const name=document.getElementById("name").value,mobile=document.getElementById("mobile").value;if(!name||!mobile){alert("Name & Mobile");return}try{const r=await fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,mobile})});const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("iwnexus",JSON.stringify(myData));showWifi(myData)}}catch(e){alert("Error")}}
async function login(){const m=document.getElementById("lmobile").value.trim();if(!m){alert("Mobile likho");return}try{const r=await fetch("/api/login-mobile/"+m);const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("iwnexus",JSON.stringify(myData));showWifi(myData)}else alert("Not found - Signup karo")}catch(e){alert("Error")}}
async function earn(){if(!myData)return;try{const r=await fetch("/api/earn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:myData.id,amount:0.003})});const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("iwnexus",JSON.stringify(myData));upd(myData)}}catch{}}
function toggleWifi(){const btn=document.getElementById("wifiBtn"),icon=document.getElementById("wifiIcon"),txt=document.getElementById("wifiText"),st=document.getElementById("stat"),hint=document.getElementById("hint");if(!wifiOn){wifiOn=true;btn.classList.add("on");icon.innerText="✅";txt.innerHTML="WIFI<br>ON";st.innerText="ON";st.style.color="#22c55e";hint.innerText="🟢 Earning... +$ every 10 sec";beeInt=setInterval(earn,10000);earn();}else{wifiOn=false;btn.classList.remove("on");icon.innerText="📶";txt.innerHTML="TAP TO<br>WIFI";st.innerText="OFF";hint.innerText="Tap to start earning";clearInterval(beeInt);}}
function withdraw(){if(!myData)return;if(myData.balance>=10)alert("Withdraw $"+myData.balance.toFixed(2)+" - JazzCash 24h");else alert("Min $10 - Balance $"+myData.balance.toFixed(2));}
function logout(){if(confirm("Logout?")){localStorage.removeItem("iwnexus");location.reload()}}
</script></body></html>`);
});

app.post('/api/signup', (req,res)=>{
  const {name,mobile} = req.body;
  if(!name||!mobile) return res.json({success:false});
  const id='PK-'+String(users.length+1).padStart(3,'0');
  const user={id,name,mobile,gb:0,balance:0,joined:new Date()};
  users.push(user);
  res.json({success:true,user});
});
app.post('/api/earn', (req,res)=>{
  const {id,amount}=req.body;
  const u=users.find(x=>x.id===id);
  if(!u) return res.json({success:false});
  const gb=amount||0.003;
  u.gb+=gb; u.balance+=gb*0.15; totalTraffic+=gb;
  res.json({success:true,user:u});
});
app.get('/api/login-mobile/:mobile', (req,res)=>{
  const u=users.find(x=>x.mobile===req.params.mobile);
  if(!u) return res.json({success:false});
  res.json({success:true,user:u});
});
app.get('/api/admin', (req,res)=>{res.json({totalNodes:users.length,users});});
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log('LIVE '+PORT));
module.exports=app;
