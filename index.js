
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
let users = []; let totalTraffic = 0;

app.get('/', (req,res)=>{
 res.setHeader('Content-Type','text/html; charset=utf-8');
 res.setHeader('Cache-Control','no-cache, no-store, must-revalidate');
 res.send(`<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Cache-Control" content="no-cache"><title>iwnexus BEE - Dark</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
<style>
html{background:#02040a !important} *{box-sizing:border-box;margin:0;padding:0} body{background:#02040a !important;color:#fff !important;font-family:'Space Grotesk',sans-serif;min-height:100vh;min-height:100dvh}
.header{padding:22px 16px 30px;text-align:center;background:linear-gradient(180deg, rgba(250,204,21,0.18), transparent)}
.logo{background:linear-gradient(135deg,#facc15,#f59e0b);display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:100px;color:#000;font-weight:800;box-shadow:0 8px 30px rgba(250,204,21,0.4)}
.container{max-width:420px;margin:-16px auto 0;padding:0 14px 20px}
.card{background:linear-gradient(145deg,#151d2f,#0d1221) !important;border:1px solid rgba(250,204,21,0.15);border-radius:22px;padding:20px;margin:12px 0;box-shadow:0 20px 50px rgba(0,0,0,0.6)}
.tabs{display:flex;background:#0a0f1e;border-radius:12px;padding:4px;gap:4px;margin-bottom:16px}.tab{flex:1;padding:11px;border-radius:9px;text-align:center;font-weight:700;font-size:13px;cursor:pointer;color:#5a6780;transition:0.3s}.tab.active{background:linear-gradient(135deg,#facc15,#f59e0b);color:#000;box-shadow:0 4px 16px rgba(250,204,21,0.3)}
.input-group{position:relative;margin:9px 0} .input-group span{position:absolute;left:12px;top:50%;transform:translateY(-50%)} input{width:100%;padding:13px 13px 13px 40px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);background:#0f172a !important;color:#fff !important;outline:none;font-size:15px} input:focus{border-color:#facc15;box-shadow:0 0 0 3px rgba(250,204,21,0.1)}
button{width:100%;padding:14px;border:none;border-radius:12px;font-size:14px;font-weight:800;cursor:pointer;transition:0.2s;text-transform:uppercase} .btn-y{background:linear-gradient(135deg,#facc15,#f59e0b);color:#000;box-shadow:0 6px 20px rgba(250,204,21,0.35)} .btn-y:active{transform:scale(0.97)} .hidden{display:none !important}
.wifi-hero{text-align:center}.avatar{width:70px;height:70px;margin:0 auto 10px;border-radius:50%;background:linear-gradient(135deg,#1e293b,#0f172a);display:flex;align-items:center;justify-content:center;font-size:28px;border:2px solid rgba(250,204,21,0.3)}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:14px 0}.sbox{background:#1e293b;border-radius:12px;padding:10px;text-align:center;border:1px solid rgba(255,255,255,0.06)}.sbox b{color:#facc15;font-size:15px;display:block}.sbox span{font-size:9px;color:#64748b;letter-spacing:1px}
.wifi-wrap{position:relative;margin:22px auto;width:220px;height:220px;display:flex;align-items:center;justify-content:center}.ring{position:absolute;border-radius:50%;border:1px solid rgba(250,204,21,0.25);animation:exp 2.2s ease-out infinite}.ring:nth-child(2){inset:18px;animation-delay:0.4s}.ring:nth-child(3){inset:36px;animation-delay:0.8s}@keyframes exp{0%{transform:scale(0.8);opacity:1}100%{transform:scale(1.35);opacity:0}}
.big-btn{position:relative;z-index:2;width:160px;height:160px;border-radius:50%;border:none;background:radial-gradient(circle at 35% 35%,#facc15,#eab308 40%,#a16207);color:#000;font-weight:900;font-size:13px;box-shadow:0 0 0 8px rgba(250,204,21,0.12),0 18px 40px rgba(250,204,21,0.5),inset 0 2px 1px rgba(255,255,255,0.5);display:flex;flex-direction:column;align-items:center;justify-content:center}.big-btn.on{background:radial-gradient(circle at 35% 35%,#4ade80,#22c55e 40%,#15803d);color:#fff;box-shadow:0 0 0 10px rgba(34,197,94,0.15),0 18px 40px rgba(34,197,94,0.6);animation:glow 1.2s infinite alternate}@keyframes glow{from{box-shadow:0 0 0 10px rgba(34,197,94,0.12),0 18px 40px rgba(34,197,94,0.5)}to{box-shadow:0 0 0 18px rgba(34,197,94,0.06),0 26px 60px rgba(34,197,94,0.7)}}
.status-line{margin-top:14px;padding:9px 14px;background:rgba(15,23,42,0.7);border:1px solid rgba(255,255,255,0.06);border-radius:100px;display:inline-flex;align-items:center;gap:8px;font-size:11px;color:#94a3b8}.dot{width:8px;height:8px;border-radius:50%;background:#ef4444;box-shadow:0 0 8px #ef4444}.dot.on{background:#22c55e;box-shadow:0 0 8px #22c55e}
.coin{position:fixed;pointer-events:none;font-size:16px;font-weight:800;color:#facc15;z-index:9999;animation:fly 1.1s ease-out forwards}@keyframes fly{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-90px) scale(1.3);opacity:0}}
</style></head><body style="background:#02040a !important">
<div class="header"><div class="logo">🐝 iwnexus BEE</div><p style="margin-top:10px;font-size:10px;letter-spacing:2px;color:#facc15;opacity:0.9">ZERO START • TAP TO WIFI • EARN REAL</p></div>
<div class="container">
<div class="card" id="authCard">
<div style="text-align:center;margin-bottom:12px"><div style="font-size:32px">✨</div><h3 style="margin-top:6px;font-size:17px">Join the Hive</h3><p style="font-size:11px;color:#64748b;margin-top:3px">Share WiFi • Earn Real Money</p></div>
<div class="tabs"><div class="tab active" id="tS" onclick="tab('s')">SIGNUP</div><div class="tab" id="tL" onclick="tab('l')">LOGIN</div></div>
<div id="fS"><div class="input-group"><span>👤</span><input id="name" placeholder="Full Name"></div><div class="input-group"><span>📱</span><input id="mobile" placeholder="0300 1234567"></div><button class="btn-y" onclick="signup()">🚀 START EARNING NOW</button><p style="font-size:9px;color:#475569;text-align:center;margin-top:8px">🔒 100% Secure • $10 min withdraw</p></div>
<div id="fL" class="hidden"><div class="input-group"><span>📱</span><input id="lmobile" placeholder="Your Mobile Number"></div><button class="btn-y" onclick="login()">⚡ LOGIN TO HIVE</button></div>
</div>
<div class="card hidden" id="wifiCard">
<div class="wifi-hero">
<div class="avatar">👑</div>
<h3 style="font-size:18px">Hey <span id="uName" style="color:#facc15">User</span>! 👋</h3>
<p style="font-size:11px;color:#64748b;margin:4px 0 10px">Tap button to start earning</p>
<div class="stats"><div class="sbox"><b id="gb">0.000</b><span>GB</span></div><div class="sbox"><b id="bal">$0.00</b><span>BALANCE</span></div><div class="sbox"><b id="stat">OFF</b><span>STATUS</span></div></div>
<div class="wifi-wrap"><div class="ring"></div><div class="ring"></div><div class="ring"></div><button class="big-btn" id="wifiBtn" onclick="toggleWifi()"><span style="font-size:44px" id="wifiIcon">📡</span><span id="wifiText" style="margin-top:4px;line-height:1.1">TAP TO<br>WIFI</span></button></div>
<div class="status-line"><div class="dot" id="dot"></div><span id="hint">Ready • Tap to start earning</span></div>
<div style="margin-top:16px;display:grid;grid-template-columns:1fr 1fr;gap:8px"><button class="btn-y" style="font-size:12px" onclick="withdraw()">💸 WITHDRAW</button><button style="background:rgba(255,255,255,0.06);color:#94a3b8;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:13px;font-size:12px" onclick="earnBonus()">🎁 BONUS</button></div>
<button style="background:none;color:#475569;font-size:10px;padding:8px;margin-top:6px" onclick="logout()">Logout</button>
</div>
</div>
</div>
<script>
let myData = JSON.parse(localStorage.getItem("iwnexus")||"null");
let beeInt=null,wifiOn=false;
function tab(t){document.getElementById("fS").classList.toggle("hidden",t!=='s');document.getElementById("fL").classList.toggle("hidden",t!=='l');document.getElementById("tS").classList.toggle("active",t==='s');document.getElementById("tL").classList.toggle("active",t==='l')}
function showWifi(u){document.getElementById("authCard").classList.add("hidden");document.getElementById("wifiCard").classList.remove("hidden");document.getElementById("uName").innerText=(u.name||"User").split(" ")[0];upd(u)}
function upd(u){document.getElementById("gb").innerText=(u.gb||0).toFixed(3);document.getElementById("bal").innerText="$"+(u.balance||0).toFixed(2)}
function coin(){const c=document.createElement("div");c.className="coin";c.innerText=["+$0.01 💰","+0.004 GB ⚡"][Math.floor(Math.random()*2)];c.style.left=(40+Math.random()*30)+"%";c.style.top="55%";document.body.appendChild(c);setTimeout(()=>c.remove(),1100)}
if(myData){showWifi(myData)}
async function signup(){const name=document.getElementById("name").value.trim(),mobile=document.getElementById("mobile").value.trim();if(!name||mobile.length<10){alert("Name & Mobile sahi likho");return}try{const r=await fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,mobile})});const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("iwnexus",JSON.stringify(myData));showWifi(myData)}}catch(e){alert("Error")}}
async function login(){const m=document.getElementById("lmobile").value.trim();if(!m){alert("Mobile likho");return}try{const r=await fetch("/api/login-mobile/"+m);const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("iwnexus",JSON.stringify(myData));showWifi(myData)}else alert("Not found - Signup karo")}catch{}}
async function earn(){if(!myData)return;try{const r=await fetch("/api/earn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:myData.id,amount:0.004})});const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("iwnexus",JSON.stringify(myData));upd(myData);coin()}}catch{}}
function toggleWifi(){
 const btn=document.getElementById("wifiBtn"),icon=document.getElementById("wifiIcon"),txt=document.getElementById("wifiText"),st=document.getElementById("stat"),dot=document.getElementById("dot"),hint=document.getElementById("hint");
 if(!wifiOn){wifiOn=true;btn.classList.add("on");icon.innerText="⚡";txt.innerHTML="WIFI<br>ON";st.innerText="ON";st.style.color="#22c55e";dot.classList.add("on");hint.innerText="🟢 Earning... +$ every 8 sec";document.querySelectorAll(".ring").forEach(r=>{r.style.animationDuration="1.1s";r.style.borderColor="rgba(34,197,94,0.5)"});beeInt=setInterval(()=>{earn();coin()},8000);earn();coin();if(navigator.vibrate)navigator.vibrate([50,30,50]);}
 else{wifiOn=false;btn.classList.remove("on");icon.innerText="📡";txt.innerHTML="TAP TO<br>WIFI";st.innerText="OFF";st.style.color="";dot.classList.remove("on");hint.innerText="Paused • Tap to resume";document.querySelectorAll(".ring").forEach(r=>{r.style.animationDuration="2.2s";r.style.borderColor="rgba(250,204,21,0.25)"});clearInterval(beeInt);if(navigator.vibrate)navigator.vibrate(20);}
}
function earnBonus(){earn();alert("🎁 Bonus added!")}
function withdraw(){if(!myData)return;if(myData.balance>=10)alert("Withdraw $"+myData.balance.toFixed(2)+" - JazzCash 24h");else alert("Min $10 - Balance $"+myData.balance.toFixed(2)+"\nTap to WiFi dabao!")}
function logout(){if(confirm("Logout?")){localStorage.removeItem("iwnexus");location.reload()}}
</script></body></html>`);
});
app.post('/api/signup', (req,res)=>{const {name,mobile}=req.body;if(!name||!mobile)return res.json({success:false});const id='PK-'+String(users.length+1).padStart(3,'0');const user={id,name,mobile,gb:0,balance:0,joined:new Date()};users.push(user);res.json({success:true,user});});
app.post('/api/earn', (req,res)=>{const {id,amount}=req.body;const u=users.find(x=>x.id===id);if(!u)return res.json({success:false});const gb=amount||0.004;u.gb+=gb;u.balance+=gb*0.15;totalTraffic+=gb;res.json({success:true,user:u});});
app.get('/api/login-mobile/:mobile', (req,res)=>{const u=users.find(x=>x.mobile===req.params.mobile);if(!u)return res.json({success:false});res.json({success:true,user:u});});
app.get('/api/admin', (req,res)=>{res.json({totalNodes:users.length,users});});
const PORT=process.env.PORT||5000;app.listen(PORT,()=>console.log('LIVE '+PORT));module.exports=app;
