/* ============================================================
   VOCAL ACADEMY — SHARED JAVASCRIPT  v3.0
   صدا — Trilingual Logic: EN / دری / پښتو
   Full Supabase Integration
   ============================================================ */

/* ─── SUPABASE CONFIG ────────────────────────────────────────── */
const SUPABASE_URL = 'https://ukoegeqgkqqnbafkbkqg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrb2VnZXFna3FxbmJhZmtia3FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5Njg2NDQsImV4cCI6MjA5MjU0NDY0NH0.QWvzVZ2gmGvFbTGL-O-QPxcLeHZrWFpa0DubLAZLBf8';

/* ─── SUPABASE CLIENT ─────────────────────────────────────────── */
let _supabaseClient = null;
function getSupabase() {
  if (_supabaseClient) return _supabaseClient;
  if (typeof window !== 'undefined' && window.supabase) {
    _supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _supabaseClient;
}

/* ─── I18N STRINGS ──────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    nav_home: "Home", nav_about: "About", nav_levels: "Levels",
    nav_login: "Log In", nav_signup: "Join Free", nav_dashboard: "Dashboard",
    nav_lessons: "Lessons", nav_tutor: "AI Tutor", nav_profile: "Profile",
    nav_messages: "Messages", nav_admin: "Admin", nav_logout: "Log Out",
    hero_tag: "Afghan Women's English Academy",
    hero_title: "Every Word Learned is a Door Opened",
    hero_sub: "A structured, culturally respectful English learning journey from Beginner to TOEFL — guided by expert curriculum and AI-powered support.",
    hero_cta1: "Start Your Journey", hero_cta2: "Browse Levels",
    hero_students: "Students Enrolled", hero_levels: "Learning Levels", hero_certs: "Certificates Awarded",
    about_tag: "Our Mission", about_title: "Education Without Borders",
    about_sub: "صدا (Sada — Voice) was created to give every Afghan woman access to quality English education, regardless of location or circumstance.",
    levels_tag: "Curriculum", levels_title: "Your Path to Fluency",
    levels_sub: "Seven structured levels take you from absolute beginner to international exam readiness.",
    level_begin: "Beginner", level_inter: "Intermediate", level_adv: "Advanced",
    level_toefl: "TOEFL Prep", level_pronoun: "Pronunciation", level_essay: "Essay Writing",
    level_desc_1: "Alphabet, greetings, basic vocabulary and phrases.",
    level_desc_2: "Sentences, tenses, everyday conversations.",
    level_desc_3: "Complex grammar, reading comprehension.",
    level_desc_4: "Academic writing, formal English, discussions.",
    level_desc_pronoun: "Phonetics, accent training, speech clarity.",
    level_desc_essay: "Structured writing, argumentation, editing.",
    level_desc_toefl: "Full exam preparation with timed practice.",
    level_weeks: "weeks",
    how_tag: "How It Works", how_title: "Your Journey in 4 Steps",
    step1_title: "Register & Quiz", step1_desc: "Sign up and take our 30-question placement quiz to find your level.",
    step2_title: "Await Approval", step2_desc: "Our team reviews your application within 2–5 days and sends your Student Card.",
    step3_title: "Start Learning", step3_desc: "Access your assigned level, lessons, and AI Tutor from your dashboard.",
    step4_title: "Get Certified", step4_desc: "Complete all levels to earn your verified Vocal Academy certificate.",
    test_tag: "Testimonials", test_title: "Student Voices",
    footer_tagline: "Empowering Afghan women through structured English education.",
    footer_platform: "Platform", footer_resources: "Resources", footer_contact: "Contact",
    footer_copy: "© 2025 Vocal Academy — صدا. All rights reserved.",
    footer_motto: "Every word learned is a door opened.",
    login_title: "Welcome Back", login_sub: "Log in to continue your learning journey.",
    signup_title: "Join Vocal Academy", signup_sub: "Create your account and start your English journey.",
    field_name: "Full Name", field_email: "Email Address", field_whatsapp: "WhatsApp Number",
    field_tazkira: "Tazkira Number", field_password: "Password",
    field_age: "Age (optional)", field_province: "Province / City",
    field_level: "Self-assessed English Level",
    btn_login: "Log In", btn_signup: "Create Account", btn_quiz: "Take Placement Quiz",
    switch_to_signup: "Don't have an account? Sign up",
    switch_to_login: "Already have an account? Log in",
    awaiting_title: "Application Submitted!",
    awaiting_msg: "Thank you for joining Vocal Academy. Our team will review your application within 2–5 days. You will receive your Student Card and login confirmation via email and WhatsApp.",
    dash_welcome: "Welcome back", dash_level: "Current Level", dash_xp: "XP Points",
    dash_streak: "Day Streak", dash_tasks: "Pending Tasks", dash_progress: "My Progress",
    dash_upcoming: "Upcoming Lessons", dash_messages: "Messages", dash_roadmap: "Level Roadmap",
    admin_title: "Admin Panel", admin_students: "Students", admin_lessons: "Upload Lessons",
    admin_messages: "Broadcast Message", admin_approve: "Approve", admin_reject: "Reject",
    admin_pending: "Pending Review", admin_approved: "Approved", admin_all: "All Students",
    admin_search: "Search students...", admin_upload_title: "Upload Lesson Content",
    admin_broadcast: "Send to all students", admin_send: "Send Message",
    tutor_title: "AI English Tutor",
    tutor_placeholder: "Ask me anything in English, Dari, or Pashto...",
    tutor_send: "Send",
    tutor_greeting: "Hello! I'm your Vocal Academy AI Tutor. I can help you with English grammar, vocabulary, pronunciation tips, and translation between English, Dari, and Pashto. How can I help you today?",
    no_content: "No content yet.", loading: "Loading...", save: "Save", cancel: "Cancel",
    edit: "Edit", delete: "Delete", view: "View", close: "Close",
  },

  dari: {
    nav_home: "صفحه اصلی", nav_about: "درباره ما", nav_levels: "سطح‌ها",
    nav_login: "ورود", nav_signup: "ثبت‌نام رایگان", nav_dashboard: "داشبورد",
    nav_lessons: "درس‌ها", nav_tutor: "معلم هوش مصنوعی", nav_profile: "پروفایل",
    nav_messages: "پیام‌ها", nav_admin: "ادمین", nav_logout: "خروج",
    hero_tag: "اکادمی انگلیسی زنان افغان",
    hero_title: "هر کلمه‌ای که یاد بگیری دری را باز می‌کند",
    hero_sub: "یک مسیر یادگیری ساختارمند و محترمانه از مبتدی تا TOEFL — با راهنمایی برنامه درسی متخصص و پشتیبانی هوش مصنوعی.",
    hero_cta1: "شروع کنید", hero_cta2: "مشاهده سطح‌ها",
    hero_students: "دانش‌آموز ثبت‌نام شده", hero_levels: "سطح‌های یادگیری", hero_certs: "گواهینامه اعطا شده",
    about_tag: "مأموریت ما", about_title: "آموزش بدون مرز",
    about_sub: "صدا برای دادن دسترسی هر زن افغان به آموزش باکیفیت انگلیسی، بدون توجه به مکان یا شرایط، ایجاد شده است.",
    levels_tag: "برنامه درسی", levels_title: "مسیر شما به سوی روانی",
    levels_sub: "هفت سطح ساختارمند شما را از مبتدی مطلق به آمادگی آزمون بین‌المللی می‌رساند.",
    level_begin: "مبتدی", level_inter: "متوسط", level_adv: "پیشرفته",
    level_toefl: "آمادگی TOEFL", level_pronoun: "تلفظ", level_essay: "نوشتن مقاله",
    level_desc_1: "الفبا، احوالپرسی، واژگان و عبارات اولیه.",
    level_desc_2: "جملات، زمان‌ها، مکالمات روزمره.",
    level_desc_3: "دستور زبان پیچیده، درک مطلب.",
    level_desc_4: "نوشتن آکادمیک، انگلیسی رسمی.",
    level_desc_pronoun: "فونتیک، آموزش لهجه، وضوح گفتار.",
    level_desc_essay: "نوشتار ساختارمند، استدلال، ویرایش.",
    level_desc_toefl: "آمادگی کامل آزمون با تمرین زمان‌بندی شده.",
    level_weeks: "هفته",
    how_tag: "چگونه کار می‌کند", how_title: "سفر شما در ۴ مرحله",
    step1_title: "ثبت‌نام و آزمون", step1_desc: "ثبت‌نام کنید و آزمون تعیین سطح ۳۰ سوالی ما را بدهید.",
    step2_title: "انتظار برای تأیید", step2_desc: "تیم ما ظرف ۲ تا ۵ روز درخواست شما را بررسی کرده و کارت دانش‌آموزی را می‌فرستد.",
    step3_title: "شروع یادگیری", step3_desc: "به سطح تعیین شده، درس‌ها و معلم هوش مصنوعی از داشبورد دسترسی داشته باشید.",
    step4_title: "دریافت گواهینامه", step4_desc: "تمام سطح‌ها را کامل کنید تا گواهینامه تأیید شده اکادمی صدا را دریافت کنید.",
    test_tag: "نظرات", test_title: "صدای دانش‌آموزان",
    footer_tagline: "توانمندسازی زنان افغان از طریق آموزش انگلیسی ساختارمند.",
    footer_platform: "پلتفرم", footer_resources: "منابع", footer_contact: "تماس",
    footer_copy: "© ۱۴۰۴ اکادمی صدا. تمام حقوق محفوظ است.",
    footer_motto: "هر کلمه‌ای که یاد بگیری دری را باز می‌کند.",
    login_title: "خوش آمدید", login_sub: "وارد شوید تا سفر یادگیری خود را ادامه دهید.",
    signup_title: "به اکادمی صدا بپیوندید", signup_sub: "حساب کاربری خود را بسازید و سفر انگلیسی خود را شروع کنید.",
    field_name: "نام کامل", field_email: "آدرس ایمیل", field_whatsapp: "شماره واتساپ",
    field_tazkira: "شماره تذکره", field_password: "رمز عبور",
    field_age: "سن (اختیاری)", field_province: "ولایت / شهر",
    field_level: "سطح انگلیسی خود ارزیابی‌شده",
    btn_login: "ورود", btn_signup: "ساخت حساب", btn_quiz: "آزمون تعیین سطح",
    switch_to_signup: "حساب ندارید؟ ثبت‌نام کنید",
    switch_to_login: "حساب دارید؟ وارد شوید",
    awaiting_title: "درخواست ارسال شد!",
    awaiting_msg: "از پیوستن به اکادمی صدا متشکریم. تیم ما ظرف ۲ تا ۵ روز درخواست شما را بررسی خواهد کرد.",
    dash_welcome: "خوش آمدید", dash_level: "سطح فعلی", dash_xp: "امتیاز XP",
    dash_streak: "روز پشت سر هم", dash_tasks: "وظایف در انتظار", dash_progress: "پیشرفت من",
    dash_upcoming: "درس‌های آینده", dash_messages: "پیام‌ها", dash_roadmap: "نقشه راه سطح",
    admin_title: "پنل ادمین", admin_students: "دانش‌آموزان", admin_lessons: "آپلود درس‌ها",
    admin_messages: "پیام گروهی", admin_approve: "تأیید", admin_reject: "رد",
    admin_pending: "در انتظار بررسی", admin_approved: "تأیید شده",
    admin_all: "همه دانش‌آموزان", admin_search: "جستجوی دانش‌آموزان...",
    admin_upload_title: "آپلود محتوای درسی", admin_broadcast: "ارسال به همه دانش‌آموزان", admin_send: "ارسال پیام",
    tutor_title: "معلم هوش مصنوعی انگلیسی",
    tutor_placeholder: "هر چیزی را به انگلیسی، دری یا پشتو بپرسید...",
    tutor_send: "ارسال",
    tutor_greeting: "سلام! من معلم هوش مصنوعی اکادمی صدا هستم.",
    no_content: "محتوایی وجود ندارد.", loading: "در حال بارگذاری...",
    save: "ذخیره", cancel: "لغو", edit: "ویرایش", delete: "حذف", view: "مشاهده", close: "بستن",
  },

  pashto: {
    nav_home: "کور پاڼه", nav_about: "زموږ په اړه", nav_levels: "کچې",
    nav_login: "ننوتل", nav_signup: "وړیا لاسلیک", nav_dashboard: "ډشبورډ",
    nav_lessons: "لوستنې", nav_tutor: "AI ښوونکی", nav_profile: "پروفایل",
    nav_messages: "پیغامونه", nav_admin: "ادمین", nav_logout: "وتل",
    hero_tag: "د افغان ښځو د انګلیسي اکاډمي",
    hero_title: "هره زده کړل شوې کلمه یوه دروازه خلاصوي",
    hero_sub: "د مبتدي نه تر TOEFL پورې یوه جوړه او درنه یادګیري سفر — د متخصص نصاب او AI ملاتړ سره.",
    hero_cta1: "خپل سفر پیل کړئ", hero_cta2: "کچې وګورئ",
    hero_students: "نوم لیکل شوي زده کوونکي", hero_levels: "د زده کړې کچې", hero_certs: "اعطا شوي سندونه",
    about_tag: "زموږ ماموریت", about_title: "د پولو پرته تعلیم",
    about_sub: "صدا د هر افغان ښځې لپاره د انګلیسي باکیفیته زده کړې ته لاسرسي ورکولو لپاره جوړ شوی.",
    levels_tag: "نصاب", levels_title: "ستاسو د روانتیا لاره",
    levels_sub: "اوه جوړ کچې تاسو د مطلق مبتدي نه نړیوالې ازموینې چمتوالي ته رسوي.",
    level_begin: "پیل کونکی", level_inter: "منځنی", level_adv: "پرمختللی",
    level_toefl: "د TOEFL چمتوالی", level_pronoun: "تلفظ", level_essay: "د مقالې لیکل",
    level_desc_1: "الفبا، سلامونه، اساسي کلمات او جملې.",
    level_desc_2: "جملې، زمانونه، ورځني مکالمې.",
    level_desc_3: "پیچلی ګرامر، د متن پوهاوی.",
    level_desc_4: "اکاډمیک لیکل، رسمي انګلیسي.",
    level_desc_pronoun: "فونیتیک، د لهجې روزنه، د خبرو وضاحت.",
    level_desc_essay: "جوړ لیکل، استدلال، سمون.",
    level_desc_toefl: "د وخت ازموینې سره بشپړ د ازموینې چمتوالی.",
    level_weeks: "اونۍ",
    how_tag: "دا څنګه کار کوي", how_title: "ستاسو سفر ۴ ګامونو کې",
    step1_title: "لاسلیک او ازموینه", step1_desc: "لاسلیک وکړئ او زموږ د ۳۰ پوښتنو د ځای ټاکلو ازموینه وکړئ.",
    step2_title: "د تایید انتظار", step2_desc: "زموږ ټیم ستاسو غوښتنلیک ۲-۵ ورځو کې بیاکتنه کوي.",
    step3_title: "زده کول پیل کړئ", step3_desc: "ستاسو د ټاکل شوي کچې، لوستنو او AI ښوونکي ته ډشبورډ نه لاسرسی.",
    step4_title: "سند ترلاسه کړئ", step4_desc: "ټولې کچې بشپړ کړئ ترڅو د صدا اکاډمي تایید شوی سند ترلاسه کړئ.",
    test_tag: "نظرونه", test_title: "د زده کوونکو غږونه",
    footer_tagline: "د جوړ انګلیسي تعلیم له لارې د افغان ښځو ځواکمن کول.",
    footer_platform: "پلیټفارم", footer_resources: "سرچینې", footer_contact: "اړیکه",
    footer_copy: "© ۱۴۰۴ صدا اکاډمي. ټول حقوق خوندي دي.",
    footer_motto: "هره زده کړل شوې کلمه یوه دروازه خلاصوي.",
    login_title: "ښه راغلاست", login_sub: "د خپل د زده کړې سفر ادامې لپاره ننوځئ.",
    signup_title: "د صدا اکاډمي سره یوځای شئ", signup_sub: "خپل حساب جوړ کړئ او خپل د انګلیسي سفر پیل کړئ.",
    field_name: "بشپړ نوم", field_email: "د برېښنالیک پته", field_whatsapp: "د واټسپ شمیره",
    field_tazkira: "د تذکرې شمیره", field_password: "پټ نوم",
    field_age: "عمر (اختیاري)", field_province: "ولایت / ښار",
    field_level: "د انګلیسي کچه ځان ارزول",
    btn_login: "ننوتل", btn_signup: "حساب جوړول", btn_quiz: "د ځای ټاکلو ازموینه",
    switch_to_signup: "حساب نه لرئ؟ لاسلیک وکړئ",
    switch_to_login: "حساب لرئ؟ ننوځئ",
    awaiting_title: "غوښتنلیک استول شو!",
    awaiting_msg: "د صدا اکاډمي سره یوځای کیدو مننه. زموږ ټیم به ۲-۵ ورځو کې ستاسو غوښتنلیک بیاکتنه وکړي.",
    dash_welcome: "ښه راغلاست", dash_level: "اوسنۍ کچه", dash_xp: "XP ټکي",
    dash_streak: "ورځني لړۍ", dash_tasks: "پاتې دندې", dash_progress: "زما پرمختګ",
    dash_upcoming: "راتلونکي لوستنې", dash_messages: "پیغامونه", dash_roadmap: "د کچې نقشه",
    admin_title: "د ادمین پینل", admin_students: "زده کوونکي", admin_lessons: "لوستنې اپلوډ کول",
    admin_messages: "ټولیز پیغام", admin_approve: "تایید", admin_reject: "رد",
    admin_pending: "د بیاکتنې انتظار", admin_approved: "تایید شوی",
    admin_all: "ټول زده کوونکي", admin_search: "د زده کوونکو لټون...",
    admin_upload_title: "د لوستنې منځپانګه اپلوډ کړئ",
    admin_broadcast: "ټولو زده کوونکو ته ولیږئ", admin_send: "پیغام ولیږئ",
    tutor_title: "د AI انګلیسي ښوونکی",
    tutor_placeholder: "هر شی انګلیسي، دري یا پښتو کې وپوښتئ...",
    tutor_send: "ولیږئ",
    tutor_greeting: "سلام! زه د صدا اکاډمي AI ښوونکی یم.",
    no_content: "هیڅ منځپانګه نشته.", loading: "بارول کیږي...",
    save: "خوندي کړئ", cancel: "لغو", edit: "سمول", delete: "ړنګول", view: "کتل", close: "بندول",
  }
};

/* ─── LANGUAGE STATE ────────────────────────────────────────── */
let currentLang = localStorage.getItem('va_lang') || 'en';

function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
    || TRANSLATIONS['en'][key]
    || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('va_lang', lang);
  const isRTL = (lang === 'dari' || lang === 'pashto');
  document.body.classList.toggle('rtl', isRTL);
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang === 'dari' ? 'fa' : lang === 'pashto' ? 'ps' : 'en');
  document.body.style.fontFamily = isRTL ? "'Noto Naskh Arabic', serif" : '';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) el.setAttribute(attr, t(key));
    else el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ─── SUPABASE AUTH HELPERS ─────────────────────────────────── */
async function getCurrentUser() {
  const sb = getSupabase();
  if (!sb) return null;
  try {
    const { data: { user } } = await sb.auth.getUser();
    return user;
  } catch { return null; }
}

async function getStudentProfile(userId) {
  const sb = getSupabase();
  if (!sb || !userId) return null;
  try {
    const { data, error } = await sb
      .from('students')
      .select('*')
      .eq('user_id', userId)
      .single();
    if (error) throw error;
    return data;
  } catch (e) {
    console.warn('getStudentProfile:', e.message);
    return null;
  }
}

async function signOut() {
  const sb = getSupabase();
  if (sb) await sb.auth.signOut();
  localStorage.removeItem('va_logged_in');
  localStorage.removeItem('va_user');
  window.location.href = 'login.html';
}

/* ─── NAVBAR ────────────────────────────────────────────────── */
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      toggle.classList.toggle('open', open);
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const navbar = document.querySelector('.navbar');
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });
  initLiquidNav();
}

function initLiquidNav() {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;
  if (!navLinks.querySelector('.nav-indicator')) {
    const indicator = document.createElement('span');
    indicator.className = 'nav-indicator';
    navLinks.prepend(indicator);
  }
  const indicator = navLinks.querySelector('.nav-indicator');
  const links = Array.from(navLinks.querySelectorAll('a'));
  const update = (link) => {
    if (!link) return;
    const rect = link.getBoundingClientRect();
    const navRect = navLinks.getBoundingClientRect();
    indicator.style.width = `${rect.width}px`;
    indicator.style.left = `${rect.left - navRect.left}px`;
    indicator.style.opacity = '1';
  };
  const activeLink = links.find(a => a.classList.contains('active')) || links[0];
  update(activeLink);
  links.forEach(link => {
    link.addEventListener('mouseenter', () => update(link));
    link.addEventListener('focus', () => update(link));
  });
  navLinks.addEventListener('mouseleave', () => update(activeLink));
  window.addEventListener('resize', () => update(activeLink));
}

function initLiquidCards() {
  if (!window.matchMedia('(hover: hover)').matches) return;
  const selectors = ['.card', '.level-card', '.test-card', '.stat-card', '.score-card', '.about-lang-card',
    '.hero-main-card', '.section-intro-card', '.sidebar-link', '.quiz-option'];
  const cards = document.querySelectorAll(selectors.join(','));
  cards.forEach(el => {
    el.classList.add('liquid-card');
    el.addEventListener('pointermove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
      el.style.setProperty('--card-x', `${x}%`);
      el.style.setProperty('--card-y', `${y}%`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.removeProperty('--card-x');
      el.style.removeProperty('--card-y');
    });
  });
}

function initButtonMagnet() {
  const canHover = window.matchMedia('(hover: hover)').matches;
  document.querySelectorAll('.btn').forEach(btn => {
    btn.classList.add('liquid-button');
    if (!canHover) return;
    btn.addEventListener('pointermove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.setProperty('--btn-offset-x', `${Math.max(-4, Math.min(4, x * 0.08))}px`);
      btn.style.setProperty('--btn-offset-y', `${Math.max(-4, Math.min(4, y * 0.08))}px`);
    });
    btn.addEventListener('pointerleave', () => {
      btn.style.setProperty('--btn-offset-x', '0px');
      btn.style.setProperty('--btn-offset-y', '0px');
    });
  });
}

function registerRevealTargets() {
  const selectors = ['section', '.card', '.level-card', '.test-card', '.stat-card', '.score-card',
    '.about-lang-card', '.hero-main-card', '.section-intro-card', '.tpo-card',
    '.sidebar-link', '.quiz-option', '.card-body', '.content', '.content-block'];
  document.querySelectorAll(selectors.join(',')).forEach(el => {
    if (!el.classList.contains('reveal') && !el.closest('.modal-overlay')) {
      el.classList.add('reveal');
    }
  });
}

/* ─── CIRCULAR PROGRESS ─────────────────────────────────────── */
function renderCircleProgress(el, pct, color = '#2d7d7d') {
  if (!el) return;
  const r = 30, cx = 40, cy = 40;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  el.innerHTML = `
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle class="track" cx="${cx}" cy="${cy}" r="${r}" stroke-width="7"/>
      <circle class="fill" cx="${cx}" cy="${cy}" r="${r}" stroke="${color}"
        stroke-width="7" stroke-dasharray="${dash} ${circ}"
        stroke-dashoffset="0"/>
    </svg>
    <div class="label">${pct}%</div>`;
}

/* ─── TOAST NOTIFICATIONS ────────────────────────────────────── */
let toastContainer;
function showToast(msg, type = 'info', duration = 3500) {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.style.cssText = `position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px;pointer-events:none;`;
    document.body.appendChild(toastContainer);
  }
  const icons   = { info: '💬', success: '✅', warning: '⚠️', error: '❌' };
  const borders = { info: 'var(--teal)', success: 'var(--success)', warning: 'var(--warning)', error: 'var(--error)' };
  const toast = document.createElement('div');
  toast.style.cssText = `background:white;border-radius:14px;padding:14px 20px;box-shadow:0 8px 32px rgba(26,26,46,0.18);display:flex;align-items:center;gap:10px;font-size:0.875rem;font-family:inherit;border-left:4px solid ${borders[type]};animation:toastIn 0.45s cubic-bezier(0.34,1.56,0.64,1) both;max-width:340px;pointer-events:auto;`;
  toast.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  if (!document.getElementById('toast-anim')) {
    const style = document.createElement('style');
    style.id = 'toast-anim';
    style.textContent = `@keyframes toastIn{from{opacity:0;transform:translateY(20px) scale(0.9)}to{opacity:1;transform:none}}@keyframes toastOut{from{opacity:1;transform:none}to{opacity:0;transform:translateY(-12px) scale(0.92)}}`;
    document.head.appendChild(style);
  }
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease both';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ─── MODAL HELPERS ─────────────────────────────────────────── */
function openModal(id)  { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }
function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
  });
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.modal-overlay')?.classList.remove('open'));
  });
}

function initPerformanceMode() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lowPowerDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  if (prefersReducedMotion || lowPowerDevice) document.body.classList.add('low-power');
}

/* ─── PROGRESS BARS ─────────────────────────────────────────── */
function animateProgressBars() {
  const bars = document.querySelectorAll('.progress-bar-fill');
  if (!bars.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.width = e.target.dataset.pct + '%';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  bars.forEach(b => { b.style.width = '0'; io.observe(b); });
}

/* ─── COUNTER ANIMATION ─────────────────────────────────────── */
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = +e.target.dataset.count;
        const suffix = e.target.dataset.suffix || '';
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          e.target.textContent = Math.floor(current).toLocaleString() + suffix;
          if (current >= target) clearInterval(timer);
        }, 16);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
}

/* ─── SCROLL REVEAL ─────────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const siblings = Array.from(e.target.parentElement.querySelectorAll('.reveal'));
        const idx = siblings.indexOf(e.target);
        setTimeout(() => e.target.classList.add('visible'), idx * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

/* ─── LIQUID BUTTON RIPPLE ──────────────────────────────────── */
function initButtonRipples() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement('span');
      ripple.style.cssText = `position:absolute;left:${x}px;top:${y}px;width:4px;height:4px;border-radius:50%;background:rgba(255,255,255,0.4);transform:translate(-50%,-50%) scale(0);animation:liquidRipple 0.6s ease both;pointer-events:none;z-index:10;`;
      if (!document.getElementById('liquid-ripple-style')) {
        const s = document.createElement('style');
        s.id = 'liquid-ripple-style';
        s.textContent = `@keyframes liquidRipple{to{transform:translate(-50%,-50%) scale(80);opacity:0}}`;
        document.head.appendChild(s);
      }
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/* ─── INIT ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initPerformanceMode();
  initNav();
  initModals();
  setLang(currentLang);
  animateProgressBars();
  animateCounters();
  registerRevealTargets();
  initScrollReveal();
  initLiquidCards();
  initButtonMagnet();
  initButtonRipples();
});