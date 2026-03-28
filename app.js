// ============================================================
//  ✏️ عدّلي هنا أسماء الدروس في أي وقت
//     كل array فيها 5 عناصر — واحد لكل أسبوع
// ============================================================
const lessons = {
  arabic: {
    review: [
      "مراجعة: الفعل المضارع وعلاماته",
      "مراجعة: المبتدأ والخبر",
      "مراجعة: أنواع الجملة العربية",
      "مراجعة: الإعراب والبناء",
      "مراجعة: الأفعال الخمسة",
    ],
    study: [
      "نص: قصيدة الوطن",
      "نص: المسرحية الشعرية",
      "قواعد: الاسم الموصول",
      "قواعد: الجملة الفعلية",
      "قواعد: المفعول به",
    ],
  },
  english: {
    review: [
      "مراجعة: Present Simple",
      "مراجعة: Past Simple",
      "مراجعة: Vocabulary Unit 1-2",
      "مراجعة: Adjectives & Adverbs",
      "مراجعة: Reading Comprehension",
    ],
    study: [
      "Unit 3: Future Tense",
      "Unit 4: Modal Verbs",
      "Unit 5: Passive Voice",
      "Unit 6: Conditionals",
      "Unit 7: Reported Speech",
    ],
  },
  science: {
    review: [
      "مراجعة: المادة وخواصها",
      "مراجعة: المخلوطات والمحاليل",
      "مراجعة: الحرارة وانتقالها",
      "مراجعة: الخلية الحية",
      "مراجعة: الطاقة وأشكالها",
    ],
    study: [
      "درس: التفاعلات الكيميائية",
      "درس: الضوء والبصريات",
      "درس: الجهاز العصبي",
      "درس: الكهرباء الساكنة",
      "درس: التكاثر عند النباتات",
    ],
  },
  social: {
    review: [
      "مراجعة: الحضارة المصرية القديمة",
      "مراجعة: الموارد الطبيعية",
      "مراجعة: مصر الجغرافية",
      "مراجعة: الثورة العرابية",
      "مراجعة: الديمقراطية والمواطنة",
    ],
    study: [
      "درس: الدولة الإسلامية",
      "درس: المناخ في مصر",
      "درس: الاقتصاد المصري",
      "درس: الوحدة العربية",
      "درس: حقوق الإنسان",
    ],
  },
  algebra: {
    review: [
      "مراجعة: العمليات على الكسور",
      "مراجعة: المعادلات من الدرجة الأولى",
      "مراجعة: الأسس والجذور",
      "مراجعة: النسبة والتناسب",
      "مراجعة: الاحتمالات",
    ],
    study: [
      "درس: المعادلات من الدرجة الثانية",
      "درس: المتتاليات الحسابية",
      "درس: الدوال وتمثيلها",
      "درس: الإحصاء والتمثيل البياني",
      "درس: المتباينات",
    ],
  },
  geometry: {
    review: [
      "مراجعة: الزوايا والمتوازيات",
      "مراجعة: مساحة المثلث",
      "مراجعة: الدائرة وعناصرها",
      "مراجعة: التحويلات الهندسية",
      "مراجعة: المضلعات المنتظمة",
    ],
    study: [
      "درس: متوازي الأضلاع وخواصه",
      "درس: مساحة الأشكال المركبة",
      "درس: نظرية فيثاغورس",
      "درس: الإسقاط والتشابه",
      "درس: الحجوم والأسطح الجانبية",
    ],
  },
};

// ============================================================
//  ✏️ ترتيب الأيام والمواد — عدّلي هنا لو احتجتي
// ============================================================
const DAYS = [
  { name: "الأحد",              subject: "arabic"   },
  { name: "الثلاثاء",           subject: "arabic"   },
  { name: "الأربعاء",           subject: "social"   },
  { name: "الخميس",             subject: "algebra"  },
  { name: "الجمعة (هندسة)",     subject: "geometry" },
  { name: "الجمعة (إنجليزي)",   subject: "english"  },
  { name: "السبت",              subject: "science"  },
];

const SUBJECT_META = {
  arabic:   { label: "عربي",    icon: "📖", cls: "subject-arabic"   },
  english:  { label: "إنجليزي", icon: "🔤", cls: "subject-english"  },
  science:  { label: "علوم",    icon: "🔬", cls: "subject-science"  },
  social:   { label: "دراسات",  icon: "🌍", cls: "subject-social"   },
  algebra:  { label: "جبر",     icon: "🔢", cls: "subject-algebra"  },
  geometry: { label: "هندسة",   icon: "📐", cls: "subject-geometry" },
};

const NUM_WEEKS = 5;

// ============================================================
//  State — محفوظ في localStorage
// ============================================================
let doneMap = {};

function saveState() {
  try { localStorage.setItem("studyDone", JSON.stringify(doneMap)); } catch (e) {}
}

function loadState() {
  try {
    const s = localStorage.getItem("studyDone");
    if (s) doneMap = JSON.parse(s);
  } catch (e) {}
}

// ============================================================
//  Build UI
// ============================================================
function buildNav() {
  const nav = document.getElementById("weeksNav");
  for (let w = 1; w <= NUM_WEEKS; w++) {
    const btn = document.createElement("button");
    btn.className = "week-btn" + (w === 1 ? " active" : "");
    btn.textContent = `الأسبوع ${w}`;
    btn.dataset.week = w;
    btn.onclick = () => showWeek(w);
    nav.appendChild(btn);
  }
}

function showWeek(week) {
  document.querySelectorAll(".week-btn").forEach((b) =>
    b.classList.toggle("active", +b.dataset.week === week)
  );
  document.querySelectorAll(".week-grid").forEach((g) =>
    g.classList.toggle("visible", +g.dataset.week === week)
  );
}

function buildSchedule() {
  const container = document.getElementById("scheduleContainer");
  for (let w = 1; w <= NUM_WEEKS; w++) {
    const grid = document.createElement("div");
    grid.className = "week-grid" + (w === 1 ? " visible" : "");
    grid.dataset.week = w;
    DAYS.forEach((day, di) => grid.appendChild(buildDayCard(w, di, day)));
    container.appendChild(grid);
  }
}

function buildDayCard(week, dayIdx, day) {
  const meta = SUBJECT_META[day.subject];
  const wIdx = week - 1;

  const card = document.createElement("div");
  card.className = "day-card " + meta.cls;

  const header = document.createElement("div");
  header.className = "day-header";
  header.innerHTML = `
    <span class="day-name">${day.name}</span>
    <span class="subject-badge">${meta.icon} ${meta.label}</span>
  `;
  card.appendChild(header);

  const sessions = document.createElement("div");
  sessions.className = "sessions";

  const revKey = `w${week}-d${dayIdx}-review`;
  sessions.appendChild(
    buildSession(revKey, "مراجعة", "review-session", lessons[day.subject].review[wIdx])
  );

  const stuKey = `w${week}-d${dayIdx}-study`;
  sessions.appendChild(
    buildSession(stuKey, "دراسة", "study-session", lessons[day.subject].study[wIdx])
  );

  card.appendChild(sessions);
  return card;
}

function buildSession(key, typeLabel, cls, title) {
  const div = document.createElement("div");
  div.className = "session " + cls + (doneMap[key] ? " done-session" : "");
  div.innerHTML = `
    <div class="session-type-label">${typeLabel}</div>
    <div class="session-title">${title}</div>
    <button class="check-btn ${doneMap[key] ? "done" : ""}" data-key="${key}" title="علّم كخلصت">✓</button>
  `;
  div.querySelector(".check-btn").onclick = function () {
    doneMap[key] = !doneMap[key];
    this.classList.toggle("done", doneMap[key]);
    div.classList.toggle("done-session", doneMap[key]);
    saveState();
    updateProgress();
  };
  return div;
}

function updateProgress() {
  const total = NUM_WEEKS * DAYS.length * 2; // 7 × 2 × 5 = 70
  const done = Object.values(doneMap).filter(Boolean).length;
  const pct = Math.round((done / total) * 100);
  document.getElementById("mainProgress").style.width = pct + "%";
  document.getElementById("progressLabel").textContent =
    `${done} من ${total} درس (${pct}%)`;
}

// ============================================================
//  Init
// ============================================================
loadState();
buildNav();
buildSchedule();
updateProgress();
