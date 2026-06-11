const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('logs-theme');

if (storedTheme === 'dark') {
  body.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('logs-theme', body.classList.contains('dark') ? 'dark' : 'light');
});

const searchInput = document.getElementById('searchInput');
const chips = document.querySelectorAll('.chip');
const items = document.querySelectorAll('.filter-item');
let activeFilter = 'all';

function normalize(text) {
  return String(text || '').toLowerCase().trim();
}

function applyFilters() {
  const query = normalize(searchInput.value);

  items.forEach((item) => {
    const text = normalize(item.innerText);
    const tags = normalize(item.dataset.tags);
    const matchesSearch = !query || text.includes(query) || tags.includes(query);
    const matchesFilter = activeFilter === 'all' || tags.includes(activeFilter);
    item.classList.toggle('is-hidden', !(matchesSearch && matchesFilter));
  });
}

searchInput.addEventListener('input', applyFilters);

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((btn) => btn.classList.remove('active'));
    chip.classList.add('active');
    activeFilter = chip.dataset.filter;
    applyFilters();
  });
});

const toast = document.getElementById('toast');
let toastTimer;

function showToast(text = 'Պատճենվեց') {
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1500);
}

document.querySelectorAll('.copy-btn').forEach((button) => {
  button.addEventListener('click', async () => {
    const text = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      showToast('Բանաձևը պատճենվեց');
    } catch (error) {
      showToast(text);
    }
  });
});

const xInput = document.getElementById('xInput');
const baseInput = document.getElementById('baseInput');
const customResult = document.getElementById('customResult');
const lgResult = document.getElementById('lgResult');
const lnResult = document.getElementById('lnResult');
const calcMessage = document.getElementById('calcMessage');
const calcBtn = document.getElementById('calcBtn');

function formatNumber(value) {
  if (!Number.isFinite(value)) return '—';
  const rounded = Math.abs(value) < 1e-10 ? 0 : value;
  return Number(rounded.toPrecision(10)).toString();
}

function calculateLogs() {
  const x = Number(xInput.value);
  const base = Number(baseInput.value);
  calcMessage.classList.remove('error');

  if (!(x > 0)) {
    customResult.textContent = '—';
    lgResult.textContent = '—';
    lnResult.textContent = '—';
    calcMessage.textContent = 'Սխալ․ x-ը պետք է լինի դրական՝ x > 0։';
    calcMessage.classList.add('error');
    return;
  }

  lgResult.textContent = formatNumber(Math.log10(x));
  lnResult.textContent = formatNumber(Math.log(x));

  if (!(base > 0) || base === 1) {
    customResult.textContent = '—';
    calcMessage.textContent = 'Սխալ․ հիմքը պետք է լինի a > 0 և a ≠ 1։';
    calcMessage.classList.add('error');
    return;
  }

  customResult.textContent = formatNumber(Math.log(x) / Math.log(base));
  calcMessage.textContent = `Ճիշտ պայմաններ․ log հիմքով ${base} թվի ${x} արժեքը հաշվված է։`;
}

calcBtn.addEventListener('click', calculateLogs);
xInput.addEventListener('input', calculateLogs);
baseInput.addEventListener('input', calculateLogs);
calculateLogs();

const navLinks = document.querySelectorAll('.topnav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});
