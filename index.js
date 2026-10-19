
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
let users = [];

app.get('/', (req,res)=>{
 res.send(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"><title>iwnexus BEE - ULTRA MAZA</title><style>
*{box-sizing:border-box;margin:0;padding:0} html,body{background:#05070f;color:#fff;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial;min-height:100vh;overflow-x:hidden}
body::before{content:'';position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(800px at 20% 0%, rgba(250,204,21,0.18), transparent 60%), radial-gradient(600px at 90% 80%, rgba(34,197,94,0.15), transparent 60%), radial-gradient(500px at 50% 50%, rgba(139,92,246,0.12), transparent);pointer-events:none;z-index:0;animation:bgMove 10s ease-in-out infinite alternate}
@keyframes bgMove{0%{transform:scale(1) translate(0,0)}100%{transform:scale(1.1) translate(-20px,10px)}}
.bees{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;overflow:hidden} .bee{position:absolute;font-size:20px;animation:flyBee linear infinite}
@keyframes flyBee{0%{transform:translateX(-50px) translateY(0) rotate(0deg)}25%{transform:translateX(25vw) translateY(-20px) rotate(10deg)}50%{transform:translateX(50vw) translateY(10px) rotate(-10deg)}75%{transform:translateX(75vw) translateY(-10px) rotate(5deg)}100%{transform:translateX(110vw) translateY(0) rotate(0deg)}}
.header{position:relative;z-index:2;padding:18px;text-align:center}
.logo{position:relative;display:inline-block;background:linear-gradient(135deg,#facc15 0%,#f59e0b 50%,#fbbf24 100%);color:#000;padding:12px 26px;border-radius:100px;font-weight:900;font-size:22px;letter-spacing:-0.5px;box-shadow:0 0 0 6px rgba(250,204,21,0.15), 0 12px 40px rgba(250,204,21,0.5), inset 0 1px 1px rgba(255,255,255,0.7);animation:logoFloat 3s ease-in-out infinite, logoGlow 2s ease-in-out infinite alternate}
@keyframes logoFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}} @keyframes logoGlow{0%{box-shadow:0 0 0 6px rgba(250,204,21,0.15),0 12px 40px rgba(250,204,21,0.4)}100%{box-shadow:0 0 0 10px rgba(250,204,21,0.08),0 20px 60px rgba(250,204,21,0.7)}}
.logo span{display:inline-block;animation:beeWiggle 0.6s ease-in-out infinite alternate} @keyframes beeWiggle{from{transform:rotate(-8deg) scale(1)}to{transform:rotate(8deg) scale(1.1)}}
.sub{margin-top:8px;font-size:10px;letter-spacing:2.5px;color:#facc15;font-weight:700;opacity:0.9;text-transform:uppercase;animation:blinkTxt 2s infinite}
@keyframes blinkTxt{0%,100%{opacity:0.9}50%{opacity:0.5}}
.container{position:relative;z-index:2;max-width:400px;margin:0 auto;padding:0 14px 30px}
.card{position:relative;background:linear-gradient(145deg, rgba(21,29,47,0.95), rgba(10,15,30,0.95));backdrop-filter:blur(20px);border:1px solid rgba(250,204,21,0.18);border-radius:24px;padding:20px;margin:12px 0;box-shadow:0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08);animation:cardPop 0.7s cubic-bezier(0.16,1,0.3,1)}
@keyframes cardPop{from{opacity:0;transform:translateY(30px) scale(0.9) rotateX(10deg)}to{opacity:1;transform:translateY(0) scale(1) rotateX(0)}}
.card::after{content:'';position:absolute;top:0;left:20%;right:20%;height:1px;background:linear-gradient(90deg,transparent,rgba(250,204,21,0.5),transparent)}
.tabs{display:flex;background:rgba(10,15,30,0.8);border-radius:14px;padding:4px;gap:4px;margin-bottom:16px;border:1px solid rgba(255,255,255,0.06)} .tab{flex:1;padding:12px;border-radius:10px;text-align:center;font-weight:800;font-size:12px;cursor:pointer;color:#5a6780;transition:all 0.4s cubic-bezier(0.16,1,0.3,1)} .tab.on{background:linear-gradient(135deg,#facc15,#f59e0b);color:#000;box-shadow:0 6px 20px rgba(250,204,21,0.4);transform:scale(1.03)}
.input-wrap{position:relative;margin:10px 0} .input-wrap i{position:absolute;left:13px;top:50%;transform:translateY(-50%);font-size:16px;opacity:0.7} input{width:100%;padding:14px 14px 14px 42px;border-radius:13px;border:1px solid rgba(255,255,255,0.08);background:rgba(15,23,42,0.9);color:#fff;outline:none;font-size:15px;transition:0.3s} input:focus{border-color:#facc15;background:rgba(15,23,42,1);box-shadow:0 0 0 4px rgba(250,204,21,0.12),0 8px 24px rgba(250,204,21,0.2);transform:translateY(-2px)}
.btn{width:100%;padding:15px;border:none;border-radius:13px;font-weight:900;font-size:14px;cursor:pointer;transition:all 0.3s;position:relative;overflow:hidden;letter-spacing:0.5px;text-transform:uppercase}
.btn::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent);transition:0.6s} .btn:hover::before{left:100%} .btn:active{transform:scale(0.96)}
.btn-y{background:linear-gradient(135deg,#facc15 0%,#f59e0b 100%);color:#000;box-shadow:0 8px 28px rgba(250,204,21,0.4), inset 0 1px 0 rgba(255,255,255,0.5)} .btn-y:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(250,204,21,0.6)} .hidden{display:none !important}
/* WIFI HERO */
.wifi{text-align:center}
.avatar-wrap{position:relative;width:84px;height:84px;margin:0 auto 12px} .avatar-wrap::before{content:'';position:absolute;inset:-3px;border-radius:50%;background:conic-gradient(from 0deg,#facc15,#22c55e,#8b5cf6,#ec4899,#facc15);animation:spin 3s linear infinite} @keyframes spin{to{transform:rotate(360deg)}}
.avatar{position:relative;width:100%;height:100%;border-radius:50%;background:linear-gradient(135deg,#1e293b,#0f172a);display:flex;align-items:center;justify-content:center;font-size:32px;border:3px solid #05070f;z-index:1;animation:avatarPulse 2s ease-in-out infinite}
@keyframes avatarPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
.greet{font-size:22px;font-weight:800;margin:4px 0 2px} .greet span{background:linear-gradient(135deg,#facc15,#f59e0b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin:14px 0} .sbox{position:relative;background:linear-gradient(145deg, rgba(30,41,59,0.9), rgba(15,23,42,0.9));border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:11px 6px;text-align:center;overflow:hidden;transition:0.3s} .sbox:hover{transform:translateY(-3px) scale(1.02);border-color:rgba(250,204,21,0.3)} .sbox b{display:block;font-size:15px;color:#facc15;font-family:monospace} .sbox span{font-size:8px;color:#64748b;letter-spacing:1px;text-transform:uppercase;font-weight:700} .sbox.live::after{content:'';position:absolute;top:7px;right:7px;width:6px;height:6px;background:#22c55e;border-radius:50%;box-shadow:0 0 8px #22c55e;animation:blink 1.2s infinite} @keyframes blink{0%,100%{opacity:1}50%{opacity:0.2}}
.wifi-area{position:relative;margin:22px auto;width:240px;height:240px;display:flex;align-items:center;justify-content:center}
.ring{position:absolute;border-radius:50%;border:1.5px solid rgba(250,204,21,0.25);animation:ringExp 2s ease-out infinite} .ring.r2{inset:16px;animation-delay:0.4s;border-color:rgba(34,197,94,0.25)} .ring.r3{inset:32px;animation-delay:0.8s;border-color:rgba(139,92,246,0.25)} @keyframes ringExp{0%{transform:scale(0.75);opacity:1}100%{transform:scale(1.4);opacity:0}}
.big{position:relative;z-index:2;width:175px;height:175px;border-radius:50%;border:none;background:radial-gradient(circle at 35% 35%, #facc15 0%, #f59e0b 25%, #eab308 50%, #a16207 100%);color:#000;font-weight:900;font-size:13px;box-shadow:0 0 0 8px rgba(250,204,21,0.12), 0 20px 50px rgba(250,204,21,0.55), inset 0 2px 2px rgba(255,255,255,0.7), inset 0 -4px 12px rgba(0,0,0,0.3);display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;transition:all 0.4s cubic-bezier(0.16,1,0.3,1);animation:btnFloat 3s ease-in-out infinite}
@keyframes btnFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
.big:hover{transform:scale(1.08) translateY(-3px)} .big:active{transform:scale(0.92)}
.big.on{background:radial-gradient(circle at 35% 35%, #4ade80 0%, #22c55e 30%, #16a34a 60%, #14532d 100%);color:#fff;box-shadow:0 0 0 12px rgba(34,197,94,0.15), 0 25px 60px rgba(34,197,94,0.7), inset 0 2px 2px rgba(255,255,255,0.4);animation:btnOn 1s ease-in-out infinite alternate, btnFloat 3s ease-in-out infinite}
@keyframes btnOn{from{box-shadow:0 0 0 12px rgba(34,197,94,0.15),0 25px 60px rgba(34,197,94,0.6)}to{box-shadow:0 0 0 22px rgba(34,197,94,0.05),0 35px 80px rgba(34,197,94,0.9)}}
.ico{font-size:48px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));transition:0.4s;animation:icoWiggle 2s ease-in-out infinite} @keyframes icoWiggle{0%,100%{transform:rotate(0)}25%{transform:rotate(-5deg)}75%{transform:rotate(5deg)}}
.txt{margin-top:5px;line-height:1.1;letter-spacing:1px;text-shadow:0 1px 0 rgba(255,255,255,0.3)}
.status{margin-top:16px;padding:10px 16px;background:rgba(15,23,42,0.8);border:1px solid rgba(255,255,255,0.07);border-radius:100px;display:inline-flex;align-items:center;gap:8px;font-size:11px;color:#94a3b8} .dot{width:8px;height:8px;border-radius:50%;background:#ef4444;box-shadow:0 0 10px #ef4444;animation:blink 1s infinite} .dot.on{background:#22c55e;box-shadow:0 0 12px #22c55e}
.coin{position:fixed;pointer-events:none;font-weight:900;font-size:16px;color:#facc15;z-index:9999;animation:coinFly 1.3s ease-out forwards; text-shadow:0 2px 8px rgba(0,0,0,0.8)} @keyframes coinFly{0%{transform:translateY(0) scale(0.5) rotate(0deg);opacity:1}20%{transform:translateY(-20px) scale(1.2) rotate(10deg);opacity:1}100%{transform:translateY(-120px) scale(1.5) rotate(-10deg);opacity:0}}
.confetti{position:fixed;width:8px;height:8px;pointer-events:none;z-index:9998;animation:confFall 1.5s ease-out forwards} @keyframes confFall{0%{transform:translateY(-20px) rotate(0deg) scale(1);opacity:1}100%{transform:translateY(100vh) rotate(720deg) scale(0);opacity:0}}
</style></head><body>
<div class="bees" id="bees"></div>
<div class="header"><div class="logo"><span>🐝</span> iwnexus BEE</div><div class="sub">✦ Zero Start • Tap To Wifi • Earn Real ✦</div></div>
<div class="container">
<div class="card" id="auth">
<div style="text-align:center;margin-bottom:14px"><div style="font-size:36px;animation:logoFloat 3s ease-in-out infinite">💎</div><h3 style="margin-top:6px;font-size:19px;font-weight:800">Join the Hive</h3><p style="font-size:11px;color:#64748b;margin-top:4px">Earn by sharing idle internet • $10 withdraw</p></div>
<div class="tabs"><div class="tab on" id="tS" onclick="tab('s')">✦ SIGNUP</div><div class="tab" id="tL" onclick="tab('l')">◍ LOGIN</div></div>
<div id="fS"><div class="input-wrap"><i>👤</i><input id="name" placeholder="Full Name"></div><div class="input-wrap"><i>📱</i><input id="mobile" placeholder="0300 1234567"></div><button class="btn btn-y" onclick="signup()">🚀 START EARNING NOW</button><p style="font-size:9px;color:#475569;text-align:center;margin-top:9px">🔒 Secure • No spam • Instant start</p></div>
<div id="fL" class="hidden"><div class="input-wrap"><i>📱</i><input id="lmobile" placeholder="Your Mobile"></div><button class="btn btn-y" onclick="login()">⚡ LOGIN TO HIVE</button><p style="font-size:11px;color:#64748b;text-align:center;margin-top:10px">Mobile se direct login - No OTP!</p></div>
</div>
<div class="card hidden" id="wifi">
<div class="wifi">
<div class="avatar-wrap"><div class="avatar">👑</div></div>
<div class="greet">Hey <span id="uName">User</span>! 👋</div>
<p style="font-size:11px;color:#64748b;margin:3px 0 12px">Your hive is ready to earn</p>
<div class="stats"><div class="sbox live"><b id="gb">0.000</b><span>GB Shared</span></div><div class="sbox"><b id="bal">$0.00</b><span>Balance</span></div><div class="sbox"><b id="stat">OFF</b><span>Status</span></div></div>
<div class="wifi-area"><div class="ring"></div><div class="ring r2"></div><div class="ring r3"></div><button class="big" id="btn" onclick="toggleWifi()"><span class="ico" id="ico">📡</span><span class="txt" id="txt">TAP TO<br>WIFI</span></button></div>
<div class="status"><div class="dot" id="dot"></div><span id="hint">Ready to connect • Tap to start earning</span></div>
<div style="margin-top:18px;display:grid;grid-template-columns:1fr 1fr;gap:9px"><button class="btn btn-y" style="font-size:12px" onclick="withdraw()">💸 WITHDRAW</button><button style="background:rgba(255,255,255,0.06);color:#94a3b8;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:13px;font-size:12px;font-weight:800" onclick="bonus()">🎁 BONUS</button></div>
<button style="background:none;color:#475569;font-size:11px;padding:8px;margin-top:8px;width:100%;border:none;cursor:pointer" onclick="logout()">↳ Logout</button>
</div>
</div>
</div>
<script>
let myData=JSON.parse(localStorage.getItem("bee")||"null");let it=null;let wifi=false;
function createBees(){const b=document.getElementById("bees");for(let i=0;i<6;i++){const e=document.createElement("div");e.className="bee";e.innerText="🐝";e.style.top=(10+Math.random()*80)+"%";e.style.animationDuration=(8+Math.random()*10)+"s";e.style.animationDelay=(Math.random()*5)+"s";e.style.fontSize=(14+Math.random()*10)+"px";b.appendChild(e)}}
createBees();
function tab(t){document.getElementById("fS").classList.toggle("hidden",t!='s');document.getElementById("fL").classList.toggle("hidden",t!='l');document.getElementById("tS").classList.toggle("on",t=='s');document.getElementById("tL").classList.toggle("on",t=='l')}
function show(u){document.getElementById("auth").classList.add("hidden");document.getElementById("wifi").classList.remove("hidden");document.getElementById("uName").innerText=(u.name||"User").split(" ")[0];upd(u)}
function upd(u){document.getElementById("gb").innerText=(u.gb||0).toFixed(3);document.getElementById("bal").innerText="$"+(u.balance||0).toFixed(2)}
function coins(){const msgs=["+$0.01 💰","+0.004 GB ⚡","+$0.0006 💵","🔥 +GB"];const c=document.createElement("div");c.className="coin";c.innerText=msgs[Math.floor(Math.random()*msgs.length)];c.style.left=(35+Math.random()*30)+"%";c.style.top="52%";document.body.appendChild(c);setTimeout(()=>c.remove(),1300)}
function confettiBurst(){const colors=["#facc15","#22c55e","#8b5cf6","#ec4899","#06b6d4"];for(let i=0;i<18;i++){const d=document.createElement("div");d.className="confetti";d.style.left=(40+Math.random()*20)+"%";d.style.top="45%";d.style.background=colors[Math.floor(Math.random()*colors.length)];d.style.borderRadius=Math.random()>0.5?"50%":"2px";d.style.animationDelay=(Math.random()*0.3)+"s";d.style.animationDuration=(0.8+Math.random()*0.8)+"s";d.animate([{transform:\`translate(0,0) rotate(0deg)\`,opacity:1},{transform:\`translate(\${(Math.random()-0.5)*300}px,\${window.innerHeight}px) rotate(\${Math.random()*720}deg)\`,opacity:0}],{duration:1200+Math.random()*800,easing:"cubic-bezier(0.25,0.46,0.45,0.94)"}).onfinish=()=>d.remove();document.body.appendChild(d)}}
if(myData){show(myData)}
async function signup(){const n=document.getElementById("name").value.trim(),m=document.getElementById("mobile").value.trim();if(!n||m.length<10){alert("Name & sahi mobile");return}try{const r=await fetch("/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,mobile:m})});const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("bee",JSON.stringify(myData));show(myData);confettiBurst()}}catch(e){alert("Error")}}
async function login(){const m=document.getElementById("lmobile").value.trim();if(!m){alert("Mobile");return}try{const r=await fetch("/api/login-mobile/"+m);const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("bee",JSON.stringify(myData));show(myData)}else alert("Not found - Signup karo")}catch{}}
async function earn(){if(!myData)return;try{const r=await fetch("/api/earn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:myData.id})});const d=await r.json();if(d.success){myData=d.user;localStorage.setItem("bee",JSON.stringify(myData));upd(myData);coins()}}catch{}}
function toggleWifi(){
 const b=document.getElementById("btn"),i=document.getElementById("ico"),t=document.getElementById("txt"),s=document.getElementById("stat"),d=document.getElementById("dot"),h=document.getElementById("hint"),g=document.getElementById("gb");
 if(!wifi){
   wifi=true; b.classList.add("on"); i.innerText="⚡"; t.innerHTML="WIFI<br>ACTIVE"; s.innerText="ON"; s.style.color="#22c55e"; d.classList.add("on"); h.innerText="🟢 Live earning • +$0.0006 / 8 sec";
   b.animate([{transform:"scale(0.8)"},{transform:"scale(1.2)"},{transform:"scale(1)"}],{duration:500,easing:"ease-out"});
   i.animate([{transform:"scale(0) rotate(-180deg)"},{transform:"scale(1.5) rotate(15deg)"},{transform:"scale(1) rotate(0)"}],{duration:600});
   document.querySelectorAll(".ring").forEach(r=>{r.style.animationDuration="1s";});
   g.animate([{transform:"scale(1.3)",color:"#22c55e"},{transform:"scale(1)",color:"#facc15"}],{duration:400});
   it=setInterval(()=>{earn();coins()},8000); earn(); coins(); confettiBurst();
   if(navigator.vibrate)navigator.vibrate([60,40,80]);
 }else{
   wifi=false; b.classList.remove("on"); i.innerText="📡"; t.innerHTML="TAP TO<br>WIFI"; s.innerText="OFF"; s.style.color=""; d.classList.remove("on"); h.innerText="Paused • Tap to resume";
   document.querySelectorAll(".ring").forEach(r=>{r.style.animationDuration="2s";});
   clearInterval(it);
   if(navigator.vibrate)navigator.vibrate(20);
 }
}
function bonus(){earn();coins();confettiBurst();alert("🎁 Bonus +0.004 GB added!")}
function withdraw(){if(!myData)return;if(myData.balance>=10)alert("💸 Withdraw $"+myData.balance.toFixed(2)+" - JazzCash 24h - ID:"+myData.id);else alert("⏳ Balance $"+myData.balance.toFixed(2)+"\n$"+(10-myData.balance).toFixed(2)+" aur chahiye - TAP TO WIFI dabao!")}
function logout(){if(confirm("Logout?")){localStorage.removeItem("bee");location.reload()}}
</script></body></html>`);
});
app.post('/api/signup',(req,res)=>{const {name,mobile}=req.body;if(!name||!mobile)return res.json({success:false});const id='PK-'+(users.length+1);const u={id,name,mobile,gb:0,balance:0};users.push(u);res.json({success:true,user:u})});
app.post('/api/earn',(req,res)=>{const {id}=req.body;const u=users.find(x=>x.id===id);if(!u)return res.json({success:false});u.gb+=0.004;u.balance+=0.0006;res.json({success:true,user:u})});
app.get('/api/login-mobile/:mobile',(req,res)=>{const u=users.find(x=>x.mobile===req.params.mobile);if(!u)return res.json({success:false});res.json({success:true,user:u})});
app.get('/api/admin',(req,res)=>{res.json({users})});
const PORT=process.env.PORT||5000;app.listen(PORT,()=>console.log('MAZA LIVE'));module.exports=app;
