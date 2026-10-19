
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
let users = []; let totalTraffic = 0;

app.get('/', (req,res)=>{res.setHeader('Content-Type','text/html'); res.send(`<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"><title>iwnexus BEE - Premium</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0} body{background:#02040a;color:#fff;font-family:'Space Grotesk',sans-serif;overflow-x:hidden;min-height:100vh;position:relative}
body::before{content:'';position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(600px at 20% 10%, rgba(250,204,21,0.15), transparent), radial-gradient(800px at 80% 90%, rgba(34,197,94,0.12), transparent), radial-gradient(500px at 50% 50%, rgba(99,102,241,0.08), transparent);pointer-events:none;z-index:0}
.stars{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0} .star{position:absolute;width:2px;height:2px;background:#fff;border-radius:50%;animation:twinkle 3s infinite}
@keyframes twinkle{0%,100%{opacity:0.2}50%{opacity:1}}
.header{position:relative;z-index:1;padding:28px 20px 40px;text-align:center;background:linear-gradient(180deg, rgba(250,204,21,0.15) 0%, transparent 100%);border-bottom:1px solid rgba(250,204,21,0.1)}
.logo-wrap{display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,#facc15,#f59e0b);padding:10px 22px;border-radius:100px;box-shadow:0 8px 32px rgba(250,204,21,0.4), inset 0 1px 1px rgba(255,255,255,0.4);animation:floatLogo 3s ease-in-out infinite}
@keyframes floatLogo{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.logo-wrap span{font-size:28px;animation:beeWiggle 0.5s ease-in-out infinite alternate} @keyframes beeWiggle{0%{transform:rotate(-5deg)}100%{transform:rotate(5deg)}}
.logo-text{font-weight:800;font-size:20px;color:#000;letter-spacing:-0.5px}
.header h2{margin-top:14px;font-size:12px;font-weight:600;letter-spacing:3px;color:#facc15;opacity:0.9;text-transform:uppercase}
.container{position:relative;z-index:1;max-width:420px;margin:-20px auto 0;padding:0 16px 30px}
.card{position:relative;background:linear-gradient(145deg, rgba(21,29,47,0.9), rgba(13,18,33,0.9));backdrop-filter:blur(20px);border:1px solid rgba(250,204,21,0.12);border-radius:24px;padding:22px;margin:14px 0;box-shadow:0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05);overflow:hidden;animation:cardIn 0.6s cubic-bezier(0.16,1,0.3,1)}
@keyframes cardIn{from{opacity:0;transform:translateY(20px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}
.card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg, transparent, rgba(250,204,21,0.3), transparent)}
.tabs{position:relative;display:flex;background:#0a0f1e;border-radius:14px;padding:4px;gap:4px;margin-bottom:18px;border:1px solid rgba(255,255,255,0.06)} .tab{flex:1;padding:12px;border-radius:10px;text-align:center;font-weight:700;font-size:13px;cursor:pointer;transition:all 0.4s cubic-bezier(0.16,1,0.3,1);color:#5a6780;position:relative;z-index:1} .tab.active{background:linear-gradient(135deg,#facc15,#f59e0b);color:#000;box-shadow:0 4px 20px rgba(250,204,21,0.3);transform:scale(1.02)}
.input-group{position:relative;margin:10px 0} .input-group span{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:16px;opacity:0.6} input{width:100%;padding:14px 14px 14px 42px;border-radius:14px;border:1px solid rgba(255,255,255,0.08);background:rgba(15,23,42,0.8);color:#fff;font-size:15px;outline:none;transition:all 0.3s;font-family:'Space Grotesk'} input:focus{border-color:#facc15;background:rgba(15,23,42,1);box-shadow:0 0 0 4px rgba(250,204,21,0.1), 0 4px 20px rgba(250,204,21,0.15);transform:translateY(-1px)}
button{width:100%;padding:15px;border:none;border-radius:14px;font-size:14px;font-weight:800;letter-spacing:0.5px;cursor:pointer;transition:all 0.3s;position:relative;overflow:hidden;font-family:'Space Grotesk';text-transform:uppercase}
button::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);transition:0.5s} button:hover::before{left:100%}
button:active{transform:scale(0.97)}
.btn-primary{background:linear-gradient(135deg,#facc15 0%,#f59e0b 100%);color:#000;box-shadow:0 8px 24px rgba(250,204,21,0.35), inset 0 1px 1px rgba(255,255,255,0.4)}
.btn-primary:hover{box-shadow:0 12px 32px rgba(250,204,21,0.5);transform:translateY(-2px)}
.btn-ghost{background:rgba(255,255,255,0.04);color:#94a3b8;border:1px solid rgba(255,255,255,0.08);font-size:11px;margin-top:10px}
.hidden{display:none !important}
/* WIFI SCREEN PREMIUM */
.wifi-hero{text-align:center;padding:10px 0}
.avatar-ring{width:80px;height:80px;margin:0 auto 12px;position:relative}
.avatar-ring::before{content:'';position:absolute;inset:-3px;border-radius:50%;background:conic-gradient(from 0deg,#facc15,#22c55e,#3b82f6,#facc15);animation:rotate 3s linear infinite}
@keyframes rotate{to{transform:rotate(360deg)}}
.avatar{position:relative;width:100%;height:100%;border-radius:50%;background:linear-gradient(135deg,#1e293b,#0f172a);display:flex;align-items:center;justify-content:center;font-size:32px;border:3px solid #02040a;z-index:1}
.greeting{font-size:22px;font-weight:700;margin:6px 0 2px} .greeting span{background:linear-gradient(135deg,#facc15,#f59e0b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.sub{font-size:12px;color:#64748b;margin-bottom:16px}
.stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:16px 0}
.stat-box{position:relative;background:linear-gradient(145deg, rgba(30,41,59,0.8), rgba(15,23,42,0.8));border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:12px 8px;text-align:center;overflow:hidden;transition:0.3s}
.stat-box:hover{transform:translateY(-2px);border-color:rgba(250,204,21,0.2)}
.stat-box b{font-family:'JetBrains Mono';font-size:16px;color:#facc15;display:block;margin-bottom:2px} .stat-box span{font-size:9px;color:#64748b;letter-spacing:1px;text-transform:uppercase;font-weight:700}
.stat-box.live::after{content:'';position:absolute;top:8px;right:8px;width:6px;height:6px;background:#22c55e;border-radius:50%;box-shadow:0 0 8px #22c55e;animation:blink 1.5s infinite} @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
.wifi-btn-wrap{position:relative;margin:26px auto;width:230px;height:230px;display:flex;align-items:center;justify-content:center}
.ring{position:absolute;border-radius:50%;border:1px solid rgba(250,204,21,0.2);animation:expand 2.5s ease-out infinite}
.ring:nth-child(1){inset:0;animation-delay:0s} .ring:nth-child(2){inset:20px;animation-delay:0.5s} .ring:nth-child(3){inset:40px;animation-delay:1s}
@keyframes expand{0%{transform:scale(0.8);opacity:1}100%{transform:scale(1.4);opacity:0}}
.big-wifi{position:relative;z-index:2;width:170px;height:170px;border-radius:50%;border:none;background:radial-gradient(circle at 35% 35%, #facc15, #eab308 40%, #a16207 100%);color:#000;box-shadow:0 0 0 8px rgba(250,204,21,0.1), 0 20px 50px rgba(250,204,21,0.5), inset 0 2px 2px rgba(255,255,255,0.6), inset 0 -4px 10px rgba(0,0,0,0.2);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;transition:all 0.4s cubic-bezier(0.16,1,0.3,1);font-weight:900}
.big-wifi:hover{transform:scale(1.05)} .big-wifi:active{transform:scale(0.95)}
.big-wifi.on{background:radial-gradient(circle at 35% 35%, #4ade80, #22c55e 40%, #15803d 100%);color:#fff;box-shadow:0 0 0 12px rgba(34,197,94,0.15), 0 20px 50px rgba(34,197,94,0.6), inset 0 2px 2px rgba(255,255,255,0.4);animation:glow 1.5s ease-in-out infinite alternate}
@keyframes glow{from{box-shadow:0 0 0 12px rgba(34,197,94,0.15), 0 20px 50px rgba(34,197,94,0.5)}to{box-shadow:0 0 0 20px rgba(34,197,94,0.08), 0 30px 70px rgba(34,197,94,0.7)}}
.wifi-icon{font-size:52px;line-height:1;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));transition:0.3s} .wifi-label{font-size:13px;line-height:1.1;margin-top:6px;letter-spacing:1px;text-shadow:0 1px 0 rgba(255,255,255,0.3)}
.status-line{margin-top:18px;padding:10px 16px;background:rgba(15,23,42,0.6);border:1px solid rgba(255,255,255,0.06);border-radius:100px;display:inline-flex;align-items:center;gap:8px;font-size:11px;color:#94a3b8}
.dot{width:8px;height:8px;border-radius:50%;background:#ef4444;box-shadow:0 0 8px #ef4444;animation:blink 1s infinite} .dot.on{background:#22c55e;box-shadow:0 0 8px #22c55e}
.coin-fly{position:fixed;pointer-events:none;font-size:18px;font-weight:800;color:#facc15;z-index:999;animation:flyUp 1.2s ease-out forwards}
@keyframes flyUp{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-100px) scale(1.5);opacity:0}}
</style></head><body>
<div class="stars" id="stars"></div>
<div class="header"><div class="logo-wrap"><span>🐝</span><div class="logo-text">iwnexus BEE</div></div><h2>Zero Start • Premium Network • Earn Real</h2></div>
<div class="container">
<!-- AUTH CARD -->
<div class="card" id="authCard">
<div style="text-align:center;margin-bottom:16px"><div style="font-size:40px;animation:floatLogo 3s ease-in-out infinite">✨</div><h3 style="font-size:18px;margin-top:6px">Join the Hive</h3><p style="font-size:12px;color:#64748b;margin-top:4px">Earn by sharing your idle internet</p></div>
<div class="tabs"><div class="tab active" id="tS" onclick="tab('s')">✦ SIGNUP</div><div class="tab" id="tL" onclick="tab('l')">◍ LOGIN</div></div>
<div id="fS"><div class="input-group"><span>👤</span><input id="name" placeholder="Full Name"></div><div class="input-group"><span>📱</span><input id="mobile" placeholder="0300 1234567"></div><button class="btn-primary" onclick="signup()">🚀 START EARNING NOW</button><p style="font-size:10px;color:#475569;text-align:center;margin-top:10px">🔒 100% Secure • No spam • $10 min withdraw</p></div>
<div id="fL" class="hidden"><div class="input-group"><span>📱</span><input id="lmobile" placeholder="Your Mobile Number"></div><button class="btn-primary" onclick="login()">⚡ LOGIN TO HIVE</button><p style="font-size:11px;color:#64748b;text-align:center;margin-top:12px">Enter mobile to continue earning</p></div>
</div>
<!-- PREMIUM WIFI SCREEN -->
<div class="card hidden" id="wifiCard">
<div class="wifi-hero">
<div class="avatar-ring"><div class="avatar">👑</div></div>
<div class="greeting">Hey <span id="uName">Bilal</span>! 👋</div>
<div class="sub">Your hive is ready to earn</div>
<div class="stats-grid">
<div class="stat-box live"><b id="gb">0.000</b><span>GB Shared</span></div>
<div class="stat-box"><b id="bal">$0.00</b><span>Balance</span></div>
<div class="stat-box"><b id="stat">OFF</b><span>Status</span></div>
</div>
<div class="wifi-btn-wrap">
<div class="ring"></div><div class="ring"></div><div class="ring"></div>
<button class="big-wifi" id="wifiBtn" onclick="toggleWifi()">
<span class="wifi-icon" id="wifiIcon">📡</span>
<span class="wifi-label" id="wifiText">TAP TO<br>CONNECT</span>
</button>
</div>
<div class="status-line"><div class="dot" id="dot"></div><span id="hint">Ready to connect • Tap to start earning</span></div>
<div style="margin-top:20px;display:grid;grid-template-columns:1fr 1fr;gap:10px">
<button class="btn-primary" style="font-size:12px" onclick="withdraw()">💸 WITHDRAW $10</button>
<button class="btn-ghost" style="border-radius:12px;padding:14px" onclick="earnBonus()">🎁 BONUS</button>
</div>
<button class="btn-ghost" onclick="logout()" style="margin-top:6px">↳ Logout & Switch Account</button>
</div>
</div>
</div>
<script>
let myData = JSON.parse(localStorage.getItem("iwnexus")||"null");
let beeInt=null,wifiOn=false;
function createStars(){const c=document.getElementById("stars");for(let i=0;i<40;i++){const s=document.createElement("div");s.className="star";s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";s.style.animationDelay=Math.random()*3+"s";s.style.animationDuration=(2+Math.random()*2)+"s";c.appendChild(s)}}
createStars();
function tab(t){document.getElementById("fS").classList.toggle("hidden",t!=='s');document.getElementById("fL").classList.toggle("hidden",t!=='l');document.getElementById("tS").classList.toggle("active",t==='s');document.getElementById("tL").classList.toggle("active",t==='l')}
function showWifi(u){document.getElementById("authCard").classList.add("hidden");document.getElementById("wifiCard").classList.remove("hidden");document.getElementById("uName").innerText=u.name.split(" ")[0];upd(u)}
function upd(u){document.getElementById("gb").innerText=(u.gb||0).toFixed(3);document.getElementById("bal").innerText="$"+(u.balance||0).toFixed(2)}
function coinAnim(){
  const c=document.createElement("div");c.className="coin-fly";
  const coins=["+$0.01 💰","+0.004 GB ⚡","+$0.0006 💵"];
  c.innerText=coins[Math.floor(Math.random()*coins.length)];
  c.style.left=(40+Math.random()*30)+"%";c.style.top="55%";
  document.body.appendChild(c);setTimeout(()=>c.remove(),1300);
  // particle burst
  for(let i=0;i<6;i++){
    const p=document.createElement("div");p.style.position="fixed";p.style.left="50%";p.style.top="50%";p.style.width="6px";p.style.height="6px";p.style.background="#facc15";p.style.borderRadius="50%";p.style.pointerEvents="none";p.style.zIndex="9999";
    p.animate([{transform:"translate(0,0) scale(1)",opacity:1},{transform:`translate(${(Math.random()-0.5)*200}px,${-Math.random()*150-20}px) scale(0)`,opacity:0}],{duration:1000,easing:"ease-out"}).onfinish=()=>p.remove();
    document.body.appendChild(p);
  }
}
if(myData){showWifi(myData)}
async function signup(){const name=document.getElementById("name").value.trim(),mobile=document.getElementById("mobile").value.trim();if(!name||mobile.length<10){alert("Name & sahi Mobile likho");return}try{const r=await fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name,mobile})});const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("iwnexus",JSON.stringify(myData));showWifi(myData);}}catch(e){alert("Network error")}}
async function login(){const m=document.getElementById("lmobile").value.trim();if(!m){alert("Mobile likho");return}try{const r=await fetch("/api/login-mobile/"+m);const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("iwnexus",JSON.stringify(myData));showWifi(myData)}else alert("Mobile nahi mila - Pehle Signup karo")}catch{}}
async function earn(){if(!myData)return;try{const r=await fetch("/api/earn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:myData.id,amount:0.004})});const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("iwnexus",JSON.stringify(myData));upd(myData);coinAnim()}}catch{}}
function toggleWifi(){
 const btn=document.getElementById("wifiBtn"),icon=document.getElementById("wifiIcon"),txt=document.getElementById("wifiText"),st=document.getElementById("stat"),dot=document.getElementById("dot"),hint=document.getElementById("hint"),gbEl=document.getElementById("gb");
 if(!wifiOn){
   wifiOn=true;
   // 1. Button morph + glow
   btn.classList.add("on");
   btn.animate([{transform:"scale(0.8)"},{transform:"scale(1.15)"},{transform:"scale(1)"}],{duration:400,easing:"ease-out"});
   // 2. Icon pop
   icon.innerText="⚡";
   icon.animate([{transform:"scale(0) rotate(-180deg)"},{transform:"scale(1.4) rotate(10deg)"},{transform:"scale(1) rotate(0)"}],{duration:500});
   txt.innerHTML="WIFI<br>ACTIVE";
   // 3. Status + dot
   st.innerText="ON";st.style.color="#22c55e";st.animate([{transform:"scale(1.5)"},{transform:"scale(1)"}],{duration:300});
   dot.classList.add("on");
   hint.innerText="🟢 Live earning • +$0.0006 / 8 sec • Keep app open";
   // 4. Rings faster
   document.querySelectorAll(".ring").forEach(r=>{r.style.animationDuration="1.2s"; r.style.borderColor="rgba(34,197,94,0.4)"});
   // 5. GB pulse
   gbEl.animate([{transform:"scale(1.2)",color:"#22c55e"},{transform:"scale(1)",color:"#facc15"}],{duration:400});
   beeInt=setInterval(()=>{earn(); coinAnim();},8000);
   earn(); coinAnim();
   if(navigator.vibrate)navigator.vibrate([60,40,60]);
 }else{
   wifiOn=false;
   btn.classList.remove("on");
   btn.animate([{transform:"scale(1.1)"},{transform:"scale(1)"}],{duration:200});
   icon.innerText="📡";
   txt.innerHTML="TAP TO<br>CONNECT";
   st.innerText="OFF";st.style.color="";
   dot.classList.remove("on");
   hint.innerText="⏸ Paused • Tap to resume earning";
   document.querySelectorAll(".ring").forEach(r=>{r.style.animationDuration="2.5s"; r.style.borderColor="rgba(250,204,21,0.2)"});
   clearInterval(beeInt);
   if(navigator.vibrate)navigator.vibrate(30);
 }
}
function earnBonus(){earn();alert("🎁 Bonus GB added!")}
function withdraw(){if(!myData)return;if(myData.balance>=10)alert("💸 Withdraw Request: $"+myData.balance.toFixed(2)+"\n✅ 24h me JazzCash / Easypaisa\nID: "+myData.id);else alert("⏳ Balance $"+myData.balance.toFixed(2)+"\n$"+(10-myData.balance).toFixed(2)+" aur chahiye\n🔥 TAP TO CONNECT dabao aur earn karo!")}
function logout(){if(confirm("Logout karna hai?")){localStorage.removeItem("iwnexus");location.reload()}}
</script></body></html>`);
});
app.post('/api/signup', (req,res)=>{const {name,mobile}=req.body;if(!name||!mobile)return res.json({success:false});const id='PK-'+String(users.length+1).padStart(3,'0');const user={id,name,mobile,gb:0,balance:0,joined:new Date()};users.push(user);res.json({success:true,user});});
app.post('/api/earn', (req,res)=>{const {id,amount}=req.body;const u=users.find(x=>x.id===id);if(!u)return res.json({success:false});const gb=amount||0.004;u.gb+=gb;u.balance+=gb*0.15;totalTraffic+=gb;res.json({success:true,user:u});});
app.get('/api/login-mobile/:mobile', (req,res)=>{const u=users.find(x=>x.mobile===req.params.mobile);if(!u)return res.json({success:false});res.json({success:true,user:u});});
app.get('/api/admin', (req,res)=>{res.json({totalNodes:users.length,users});});
const PORT=process.env.PORT||5000;app.listen(PORT,()=>console.log('LIVE '+PORT));module.exports=app;
