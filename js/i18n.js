/* ════════════════════════════════════════
   VOCAL ACADEMY — i18n (Translation System)
   Supports: English (en), Dari (dari), Pashto (pashto)
   RTL auto-applied for Dari and Pashto
════════════════════════════════════════ */

const RTL_LANGS = ['dari', 'pashto'];
const translations = {};

/* Load a language JSON file (cached after first load) */
async function loadLanguage(lang) {
  if (translations[lang]) return;
  try {
    const res = await fetch(`locales/${lang}.json`);
    if (!res.ok) throw new Error(`Failed to load ${lang}.json`);
    translations[lang] = await res.json();
  } catch (e) {
    console.warn(`[i18n] Could not load language: ${lang}`, e);
    translations[lang] = {};
  }
}

/* Helper: get a translation key for the current language */
function t(key) {
  const lang = localStorage.getItem('va_lang') || 'en';
  return (translations[lang] && translations[lang][key]) || (translations['en'] && translations['en'][key]) || key;
}

/* Apply translations to the whole page */
function applyTranslations(lang) {
  const tr = translations[lang] || {};
  const fallback = translations['en'] || {};

  /* Text content */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = tr[key] || fallback[key];
    if (value) el.textContent = value;
  });

  /* Placeholder attributes */
  document.querySelectorAll('[data-i18n-attr="placeholder"][data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = tr[key] || fallback[key];
    if (value) el.setAttribute('placeholder', value);
  });

  /* RTL / LTR direction */
  const isRtl = RTL_LANGS.includes(lang);
  document.documentElement.lang = lang === 'dari' ? 'fa' : lang === 'pashto' ? 'ps' : 'en';
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', isRtl);

  /* Update active lang button */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* Main function: switch language */
async function setLanguage(lang) {
  await loadLanguage('en');    // always load English as fallback
  await loadLanguage(lang);
  localStorage.setItem('va_lang', lang);
  applyTranslations(lang);
}

/* Initialise on page load */
document.addEventListener('DOMContentLoaded', async () => {
  const savedLang = localStorage.getItem('va_lang') || 'en';
  await setLanguage(savedLang);

  /* Wire up language switcher buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});
