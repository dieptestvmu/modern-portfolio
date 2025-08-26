// Main JS: filter, mobile menu, smooth scroll, form submit via Formspree
const FORM_ENDPOINT = 'https://formspree.io/f/yourFormID'; // TODO: replace with your Formspree endpoint

// Mobile nav
const burger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
burger?.addEventListener('click', ()=> nav.classList.toggle('show'));

// Smooth scroll for anchor links
for (const a of document.querySelectorAll('a[href^="#"]')) {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior:'smooth', block:'start' });
      nav?.classList.remove('show');
    }
  });
}

// Filter projects
const filters = document.getElementById('filters');
const grid = document.getElementById('projectsGrid');
filters?.addEventListener('click', (e)=>{
  const btn = e.target.closest('[data-filter]');
  if(!btn) return;
  const val = btn.dataset.filter;
  filters.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  grid.querySelectorAll('.project').forEach(card=>{
    const show = (val==='all') || card.dataset.cat===val;
    card.style.display = show ? '' : 'none';
  });
});

// Form submit
const form = document.getElementById('contactForm');
const sendBtn = document.getElementById('sendBtn');
const statusEl = document.getElementById('formStatus');
form?.addEventListener('submit', async (e)=>{
  e.preventDefault();
  statusEl.textContent = 'Đang gửi...';
  sendBtn.disabled = true;
  try {
    const data = new FormData(form);
    const res = await fetch(FORM_ENDPOINT, { method:'POST', body:data, headers:{ 'Accept':'application/json' } });
    if(res.ok){
      statusEl.textContent = 'Đã gửi thành công! Mình sẽ phản hồi sớm.';
      form.reset();
    } else {
      statusEl.textContent = 'Gửi thất bại. Vui lòng thử lại.';
    }
  } catch(err){
    statusEl.textContent = 'Có lỗi kết nối. Vui lòng thử lại.';
  } finally {
    sendBtn.disabled = false;
  }
});
