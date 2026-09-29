const toggle=document.querySelector('.menu-toggle');
const menu=document.getElementById('mobile-nav');
function closeMenu(){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){closeMenu();toggle.focus();}});
window.matchMedia('(min-width:651px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
document.getElementById('year').textContent=new Date().getFullYear();


const reel=document.getElementById('project-reel');
const reelPlay=document.querySelector('.reel-play');
reel.controls=false;
reelPlay.hidden=false;
reelPlay.addEventListener('click',async()=>{try{await reel.play();reel.controls=true;reelPlay.hidden=true;}catch{reel.controls=true;reelPlay.hidden=false;}});
reel.addEventListener('play',()=>{reelPlay.hidden=true;reel.controls=true;});
reel.addEventListener('pause',()=>{reelPlay.hidden=false;});
reel.addEventListener('ended',()=>{reelPlay.hidden=false;});
