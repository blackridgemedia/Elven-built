const toggle=document.querySelector('.menu-toggle');
const menu=document.getElementById('mobile-nav');
function closeMenu(){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){closeMenu();toggle.focus();}});
window.matchMedia('(min-width:761px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
document.getElementById('year').textContent=new Date().getFullYear();


const reels=[...document.querySelectorAll('.reel-media video')];
reels.forEach(reel=>{
  const button=reel.parentElement.querySelector('.reel-play');
  if(!button)return;
  reel.controls=false;
  button.hidden=false;
  button.addEventListener('click',async()=>{
    try{await reel.play();}catch{reel.controls=true;button.hidden=true;}
  });
  reel.addEventListener('play',()=>{
    reels.forEach(other=>{if(other!==reel)other.pause();});
    button.hidden=true;
    reel.controls=true;
  });
  reel.addEventListener('pause',()=>{button.hidden=false;});
  reel.addEventListener('ended',()=>{button.hidden=false;});
});
