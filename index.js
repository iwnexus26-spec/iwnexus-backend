
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
let users = [];

app.get('/', (req,res)=>{
 res.send(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>BEE</title><style>
body{margin:0;background:#02040a;color:#fff;font-family:Arial;min-height:100vh}
.h{background:#facc15;padding:20px;text-align:center;color:#000;font-weight:900;font-size:22px;border-radius:0 0 20px 20px}
.box{max-width:380px;margin:20px auto;padding:0 14px}
.card{background:#151d2f;border-radius:16px;padding:18px;margin:10px 0;border:1px solid #222}
input{width:100%;padding:12px;margin:6px 0;border-radius:10px;border:1px solid #333;background:#0f172a;color:#fff;outline:none}
button{width:100%;padding:13px;border:none;border-radius:10px;font-weight:800;margin:6px 0;cursor:pointer}
.y{background:#facc15;color:#000}.hidden{display:none}
.tab{display:inline-block;width:48%;padding:10px;text-align:center;background:#1e293b;border-radius:8px;cursor:pointer;color:#888;margin:1%}.tab.on{background:#facc15;color:#000}
.w{text-align:center}.big{width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,#facc15,#f59e0b);color:#000;font-weight:900;font-size:18px;border:none;margin:20px auto;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 0 30px rgba(250,204,21,0.4)}.big.on{background:radial-gradient(circle,#22c55e,#16a34a);color:#fff}
.stats{display:flex;gap:8px;margin:10px 0}.s{flex:1;background:#1e293b;border-radius:10px;padding:8px;text-align:center}.s b{color:#facc15;display:block}
</style></head><body>
<div class="h">🐝 iwnexus BEE</div>
<div class="box">
<div class="card" id="a">
<div><div class="tab on" id="tS" onclick="tab('s')">Signup</div><div class="tab" id="tL" onclick="tab('l')">Login</div></div>
<div id="fS"><input id="name" placeholder="Name"><input id="mobile" placeholder="Mobile 0300xxxxxxx"><button class="y" onclick="signup()">START EARNING 🚀</button></div>
<div id="fL" class="hidden"><input id="lmobile" placeholder="Mobile"><button class="y" onclick="login()">LOGIN</button></div>
</div>
<div class="card hidden" id="b">
<div class="w">
<h3 style="color:#facc15">Welcome <span id="uName">User</span> 👋</h3>
<div class="stats"><div class="s"><b id="gb">0.000</b><span style="font-size:10px;color:#888">GB</span></div><div class="s"><b id="bal">$0.00</b><span style="font-size:10px;color:#888">BAL</span></div><div class="s"><b id="stat">OFF</b><span style="font-size:10px;color:#888">STAT</span></div></div>
<button class="big" id="btn" onclick="toggleWifi()"><span style="font-size:40px" id="ico">📶</span><span id="txt">TAP TO<br>WIFI</span></button>
<p style="font-size:11px;color:#888" id="hint">Tap to start earning</p>
<button class="y" onclick="withdraw()">💸 WITHDRAW $10</button>
<button style="background:none;color:#555;font-size:11px" onclick="logout()">Logout</button>
</div>
</div>
</div>
<script>
let myData=JSON.parse(localStorage.getItem("iw")||"null");let it=null;let on=false;
function tab(t){document.getElementById("fS").classList.toggle("hidden",t!='s');document.getElementById("fL").classList.toggle("hidden",t!='l');document.getElementById("tS").classList.toggle("on",t=='s');document.getElementById("tL").classList.toggle("on",t=='l')}
function show(u){document.getElementById("a").classList.add("hidden");document.getElementById("b").classList.remove("hidden");document.getElementById("uName").innerText=u.name;upd(u)}
function upd(u){document.getElementById("gb").innerText=(u.gb||0).toFixed(3);document.getElementById("bal").innerText="$"+(u.balance||0).toFixed(2)}
if(myData){show(myData)}
async function signup(){const n=document.getElementById("name").value,m=document.getElementById("mobile").value;if(!n||!m){alert("Name Mobile");return}try{const r=await fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,mobile:m})});const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("iw",JSON.stringify(myData));show(myData)}}catch(e){alert("Error")}}
async function login(){const m=document.getElementById("lmobile").value.trim();if(!m){alert("Mobile");return}try{const r=await fetch("/api/login-mobile/"+m);const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("iw",JSON.stringify(myData));show(myData)}else alert("Not found")}catch{}}
async function earn(){if(!myData)return;try{const r=await fetch("/api/earn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:myData.id})});const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("iw",JSON.stringify(myData));upd(myData)}}catch{}}
function toggleWifi(){const b=document.getElementById("btn"),i=document.getElementById("ico"),t=document.getElementById("txt"),s=document.getElementById("stat"),h=document.getElementById("hint");if(!on){on=true;b.classList.add("on");i.innerText="✅";t.innerHTML="WIFI<br>ON";s.innerText="ON";s.style.color="#22c55e";h.innerText="🟢 Earning...";it=setInterval(earn,8000);earn();}else{on=false;b.classList.remove("on");i.innerText="📶";t.innerHTML="TAP TO<br>WIFI";s.innerText="OFF";h.innerText="Tap to start";clearInterval(it);}}
function withdraw(){if(!myData)return;alert(myData.balance>=10?"Withdraw $"+myData.balance:"Min $10 - Balance $"+myData.balance.toFixed(2))}
function logout(){localStorage.removeItem("iw");location.reload()}
</script></body></html>`);
});
app.post('/api/signup',(req,res)=>{const {name,mobile}=req.body;if(!name||!mobile)return res.json({success:false});const id='PK-'+(users.length+1);const u={id,name,mobile,gb:0,balance:0};users.push(u);res.json({success:true,user:u})});
app.post('/api/earn',(req,res)=>{const {id}=req.body;const u=users.find(x=>x.id===id);if(!u)return res.json({success:false});u.gb+=0.004;u.balance+=0.0006;res.json({success:true,user:u})});
app.get('/api/login-mobile/:mobile',(req,res)=>{const u=users.find(x=>x.mobile===req.params.mobile);if(!u)return res.json({success:false});res.json({success:true,user:u})});
app.get('/api/admin',(req,res)=>{res.json({users})});
const PORT=process.env.PORT||5000;app.listen(PORT,()=>console.log('LIVE'));module.exports=app;
