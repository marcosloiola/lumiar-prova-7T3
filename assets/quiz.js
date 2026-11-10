/* Motor de quiz reutilizável.
   Cada questão: { n:'f'|'m'|'d', q:'pergunta', o:[[texto, explicação], ...4], c:índice_da_correta }
   As alternativas são embaralhadas a cada tentativa; as questões seguem fácil → média → difícil. */
(function(){
  const LV = {f:'Fácil', m:'Média', d:'Difícil'};
  const ORDER = {f:0, m:1, d:2};
  const LETTERS = ['A','B','C','D'];

  function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }
  function esc(s){ return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
  function store(k,v){ try{ if(v===undefined) return JSON.parse(localStorage.getItem(k)); localStorage.setItem(k,JSON.stringify(v)); }catch(e){ return null; } }

  function Quiz(el, key, questions, title){
    this.el=el; this.key=key; this.title=title;
    this.src = questions.map((q,i)=>Object.assign({id:i},q)).sort((a,b)=>ORDER[a.n]-ORDER[b.n]);
    this.intro();
  }

  Quiz.prototype.intro = function(){
    const n=this.src.length, c={f:0,m:0,d:0}; this.src.forEach(q=>c[q.n]++);
    const last = store('quiz:'+this.key);
    this.el.innerHTML = `
      <div class="card score">
        <h2 style="margin-top:4px">Quiz – ${esc(this.title)}</h2>
        <p>${n} questões: ${c.f} fáceis, ${c.m} médias e ${c.d} difíceis.</p>
        <p class="sub" style="margin:4px 0 0">Leia a pergunta com calma e só depois clique em <b>“Já li a pergunta”</b> para ver as alternativas.</p>
        ${last ? `<p class="last">Última tentativa: ${last.ok} acertos de ${last.total} (${last.when})</p>` : ''}
        <div style="margin-top:16px"><button class="btn" data-act="start">Começar quiz</button></div>
      </div>`;
    this.el.querySelector('[data-act=start]').onclick = ()=>this.start();
  };

  Quiz.prototype.start = function(){
    this.qs = this.src.map(q=>{
      const opts = shuffle(q.o.map((o,i)=>({t:o[0], e:o[1], ok:i===q.c})));
      return {n:q.n, q:q.q, opts};
    });
    this.i=0; this.ans=[];
    this.render();
  };

  Quiz.prototype.render = function(){
    const q=this.qs[this.i], total=this.qs.length;
    this.el.innerHTML = `
      <div class="card">
        <div class="qhead"><span>Questão <b>${this.i+1}</b> de ${total}</span><span class="lvl ${q.n}">${LV[q.n]}</span></div>
        <div class="bar"><div style="width:${(this.i/total)*100}%"></div></div>
        <div class="qtext">${esc(q.q)}</div>
        <div class="reveal"><p>Leu tudo? Pense na resposta antes de ver as alternativas.</p>
          <button class="btn" data-act="reveal">Já li a pergunta</button></div>
        <div class="opts hidden" role="group" aria-label="Alternativas"></div>
        <div class="fbwrap"></div>
        <div class="qnav hidden"><button class="btn" data-act="next">${this.i+1<total?'Próxima questão →':'Ver resultado'}</button></div>
      </div>`;
    const optsEl=this.el.querySelector('.opts');
    optsEl.innerHTML = q.opts.map((o,k)=>`<button class="opt" data-k="${k}"><span class="l">${LETTERS[k]}</span><span>${esc(o.t)}</span></button>`).join('');
    this.el.querySelector('[data-act=reveal]').onclick = ()=>{
      this.el.querySelector('.reveal').classList.add('hidden');
      optsEl.classList.remove('hidden');
      optsEl.querySelector('.opt').focus({preventScroll:true});
    };
    optsEl.querySelectorAll('.opt').forEach(b=>b.onclick=()=>this.pick(+b.dataset.k));
    this.el.querySelector('[data-act=next]').onclick = ()=>{ this.i++; if(this.i<total){ this.render(); this.el.scrollIntoView({behavior:'smooth',block:'start'}); } else this.result(); };
  };

  Quiz.prototype.pick = function(k){
    const q=this.qs[this.i]; if(this.ans[this.i]) return;
    const chosen=q.opts[k], ci=q.opts.findIndex(o=>o.ok);
    this.ans[this.i]={k, ok:chosen.ok};
    this.el.querySelectorAll('.opt').forEach((b,j)=>{
      b.classList.add('locked'); b.setAttribute('aria-disabled','true');
      if(j===ci) b.classList.add('right');
      else if(j===k) b.classList.add('wrong');
      else b.classList.add('dim');
    });
    const fb = chosen.ok
      ? `<div class="fb ok" role="status"><b>✔ Resposta certa!</b>${esc(chosen.e)}</div>`
      : `<div class="fb no" role="status"><b>✘ Não é essa.</b>${esc(chosen.e)}
           <div class="also"><b style="display:inline">A correta é ${LETTERS[ci]}:</b> ${esc(q.opts[ci].e)}</div></div>`;
    this.el.querySelector('.fbwrap').innerHTML=fb;
    this.el.querySelector('.qnav').classList.remove('hidden');
  };

  Quiz.prototype.result = function(){
    const total=this.qs.length, ok=this.ans.filter(a=>a.ok).length, no=total-ok;
    const by={f:[0,0],m:[0,0],d:[0,0]};
    this.qs.forEach((q,i)=>{ by[q.n][1]++; if(this.ans[i].ok) by[q.n][0]++; });
    const pct=Math.round(ok/total*100);
    const msg = pct>=90?'Excelente! Você domina esta parte.':pct>=70?'Muito bem! Revise os erros abaixo.':pct>=50?'Bom começo. Releia a teoria e tente de novo.':'Vale reler a teoria com calma e refazer o quiz.';
    store('quiz:'+this.key,{ok,total,when:new Date().toLocaleDateString('pt-BR')});
    const wrong=this.qs.map((q,i)=>({q,a:this.ans[i],i})).filter(x=>!x.a.ok);
    this.el.innerHTML = `
      <div class="card score">
        <h2 style="margin-top:4px">Resultado</h2>
        <div class="big">${ok}/${total}</div>
        <p>${msg}</p>
        <div class="row"><span class="pill ok">✔ ${ok} acertos</span><span class="pill no">✘ ${no} erros</span></div>
        <div class="tbl"><table class="bylvl"><tr><th>Nível</th><th>Acertos</th></tr>
          ${['f','m','d'].map(n=>`<tr><td>${LV[n]}</td><td>${by[n][0]} de ${by[n][1]}</td></tr>`).join('')}</table></div>
        ${wrong.length?`<div class="review"><h3>Revise o que errou</h3>${wrong.map(x=>{
            const c=x.q.opts.find(o=>o.ok), m=x.q.opts[x.a.k];
            return `<div class="it"><div><b>${x.i+1}.</b> ${esc(x.q.q)}</div>
              <div class="mine">Sua resposta: ${esc(m.t)}</div>
              <div class="ans">Correta: ${esc(c.t)}</div><div>${esc(c.e)}</div></div>`;}).join('')}</div>`:''}
        <div style="margin-top:18px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn" data-act="again">Refazer quiz</button>
        </div>
      </div>`;
    this.el.querySelector('[data-act=again]').onclick=()=>{ this.start(); this.el.scrollIntoView({behavior:'smooth',block:'start'}); };
    this.el.scrollIntoView({behavior:'smooth',block:'start'});
  };

  window.mountQuiz = function(el, key, questions, title){ return new Quiz(el, key, questions, title); };
})();
