// ============================================================
//  ✏️ عدّلي هنا أسماء الدروس في أي وقت
//     كل array فيها 5 عناصر — واحد لكل أسبوع
// ============================================================
const lessons = {
  arabic: {
    // كل أسبوع فيه درسين للمراجعة — عدّليهم هنا
    review: [
      ["مراجعة: اسم المفعول", "مراجعة: الحياة دقائق وثواني"],
      ["مراجعة: صيغ المبالغة", "مراجعة: سفينة نوح"],
      ["مراجعة: اسما الزمان والمكان", "مراجعة: خلال كريمة"],
      ["مراجعة: وادي الكنانة", "مراجعة: رسالة إلى ابني"],
      ["مراجعة: كتابة الهمزة", "مراجعة: فالق الحب والنوى "],
    ],
    study: [
      "استعن بالله",
      "حب الوطن",
      "اسم الالة",
      "المشروعات الصغيرة",
      "اسم التفضيل",
    ],
  },
  english: {
    review: [
      "مراجعة: Unit 7",
      "مراجعة: Unit 8",
      "مراجعة: Unit 9",
      "مراجعة: Unit 10",
      "مراجعة: Grammar Review unit 9 and 10",
    ],
    study: [
      "Unit 3: Unit 11",
      "Unit 4: Unit 11",
      "Unit 5: Unit 12",
      "Unit 6: Unit 12",
      "Unit 7: Review unit 11 and 12",
    ],
  },
  science: {
    review: [
      "مراجعة: التيار الكهربي",
      "مراجعة: الاعمدةالكهربية",
      "مراجعة: النشاط الاشعاعي",
      "مراجعة: الجينات 1",
      "مراجعة: الجينات 2",
    ],
    study: [
      "درس: التفاعلات الكيميائية",
      "درس: تابع التفاعلات الكيمايئية",
      "درس: سرعة التفاعل الكيمياتي",
      "درس: تابع سرعة التفاعل الكيميائي",
      "درس: الهرمونات",
    ],
  },
  social: {
    // المراجعة مقسومة: تاريخ + جغرافيا — عدّليهم هنا
    review: [
      {
        history: "مراجعة تاريخ: ثورة 23 يوليو",
        geography: "مراجعة جغرافيا: النشاط الزراعي",
      },
      {
        history: "مراجعة تاريخ: القضية الفلسطينية",
        geography: "مراجعة جغرافيا: الرعي",
      },
      {
        history: "مراجعة تاريخ: حرب اكتوبر",
        geography: "مراجعة جغرافيا: النشاط التعديني",
      },
      {
        history: "مراجعة تاريخ: الصراع العربي الاسرائيلي",
        geography: "مراجعة جغرافيا: النشاط الصناعي",
      },
      {
        history: "مراجعة تاريخ: ثورة 25 يناير و 30 يونيو",
        geography: "مراجعة جغرافيا: جمهورية الهند",
      },
    ],
    study: [
      "درس: نيجيريا",
      "درس: الحياة النيابية",
      "درس: الولايات المتحدة",
      "درس: المنظمات الاقليمية",
      "درس: امتحانات محافظات",
    ],
  },
  algebra: {
    review: [
      "مراجعة: حل معادلتين في متغيرين",
      "مراجعة: معادلة من الدرجة التانية مجهول واحد",
      "مراجعة: معادلتين في متغيرين ",
      "مراجعة: اصفار الدالة كثيرة الحدود",
      "مراجعة: دالة الكسر الجبري",
    ],
    study: [
      "درس: تساوي كسرين جبريين",
      "درس: العمليات على الكسور الجبرية",
      "درس: تابع العمليات على الكسور",
      "درس: احتمال تقاطع واتحاد",
      "درس: احتمال : الحدث المكمل",
    ],
  },
  geometry: {
    review: [
      "مراجعة: مفاهيم الدائرة",
      "مراجعة: نقطة ومستقيم في الدائرة",
      "مراجعة: دائرة بالنسبة لاخرى",
      "مراجعة: تعيين الدائرة",
      "مراجعة: علاقة اوتار الدائرة",
    ],
    study: [
      "درس: الزاوية المركزية ",
      "درس: العقاة بين زاويتين",
      "درس: الزوايا المحيطية",
      "درس: الشكل الرباعي الدائري",
      "درس: اثبات الشكل الرباعي",
    ],
  },
};

// ============================================================
//  ✏️ ترتيب الأيام والمواد — عدّلي هنا لو احتجتي
// ============================================================
const DAYS = [
  { name: "الأحد", subject: "arabic" },
  { name: "الثلاثاء", subject: "social" },
  { name: "الأربعاء", subject: "algebra" },
  { name: "الجمعة (إنجليزي)", subject: "english" },
  { name: "الجمعة (هندسة)", subject: "geometry" },
  { name: "السبت", subject: "science" },
];

const SUBJECT_META = {
  arabic: { label: "عربي", icon: "📖", cls: "subject-arabic" },
  english: { label: "إنجليزي", icon: "🔤", cls: "subject-english" },
  science: { label: "علوم", icon: "🔬", cls: "subject-science" },
  social: { label: "دراسات", icon: "🌍", cls: "subject-social" },
  algebra: { label: "جبر", icon: "🔢", cls: "subject-algebra" },
  geometry: { label: "هندسة", icon: "📐", cls: "subject-geometry" },
};

const NUM_WEEKS = 5;

// ============================================================
//  State — محفوظ في localStorage
// ============================================================
let doneMap = {};

function saveState() {
  try {
    localStorage.setItem("studyDone", JSON.stringify(doneMap));
  } catch (e) {}
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
  document
    .querySelectorAll(".week-btn")
    .forEach((b) => b.classList.toggle("active", +b.dataset.week === week));
  document
    .querySelectorAll(".week-grid")
    .forEach((g) => g.classList.toggle("visible", +g.dataset.week === week));
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
  const subjectLessons = lessons[day.subject];

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

  const reviewData = subjectLessons.review[wIdx];

  if (day.subject === "arabic") {
    // درسين مراجعة مختلفين
    sessions.appendChild(
      buildSession(
        `w${week}-d${dayIdx}-review1`,
        "مراجعة ١",
        "review-session",
        reviewData[0],
      ),
    );
    sessions.appendChild(
      buildSession(
        `w${week}-d${dayIdx}-review2`,
        "مراجعة ٢",
        "review-session",
        reviewData[1],
      ),
    );
  } else if (day.subject === "social") {
    // مراجعة تاريخ + مراجعة جغرافيا
    sessions.appendChild(
      buildSession(
        `w${week}-d${dayIdx}-history`,
        "مراجعة تاريخ",
        "review-session",
        reviewData.history,
      ),
    );
    sessions.appendChild(
      buildSession(
        `w${week}-d${dayIdx}-geography`,
        "مراجعة جغرافيا",
        "review-session",
        reviewData.geography,
      ),
    );
  } else {
    // باقي المواد: مراجعة واحدة عادية
    sessions.appendChild(
      buildSession(
        `w${week}-d${dayIdx}-review`,
        "مراجعة",
        "review-session",
        reviewData,
      ),
    );
  }

  // درس الدراسة — نفسه في كل المواد
  sessions.appendChild(
    buildSession(
      `w${week}-d${dayIdx}-study`,
      "دراسة",
      "study-session",
      subjectLessons.study[wIdx],
    ),
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
  // عربي: ٣ sessions | دراسات: ٣ sessions | الباقي ٤ أيام: ٢ sessions = مجموع ١٤ لكل أسبوع
  const perWeek = DAYS.reduce((sum, day) => {
    if (day.subject === "arabic" || day.subject === "social") return sum + 3;
    return sum + 2;
  }, 0);
  const total = NUM_WEEKS * perWeek;
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
