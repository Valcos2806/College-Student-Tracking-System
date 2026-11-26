const iconPaths = {
  layout: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4.5V3h6v1.5M9 10h6M9 14h6M9 18h4"/>',
  graduation: '<path d="m2 10 10-5 10 5-10 5L2 10Z"/><path d="M6 12v5c3 2.5 9 2.5 12 0v-5M22 10v6"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
  sparkles: '<path d="m12 3-1.3 3.7L7 8l3.7 1.3L12 13l1.3-3.7L17 8l-3.7-1.3L12 3ZM5 14l-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14ZM19 13l-.8 2.2L16 16l2.2.8L19 19l.8-2.2L22 16l-2.2-.8L19 13Z"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4M12 17h.01"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  'chevron-down': '<path d="m7 10 5 5 5-5"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M5 21h14"/>',
  upload: '<path d="M12 16V4m-5 5 5-5 5 5M5 21h14"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  archive: '<rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v12h14V8M10 12h4"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  'trending-up': '<path d="m3 17 6-6 4 4 8-8M15 7h6v6"/>',
  'trending-down': '<path d="m3 7 6 6 4-4 8 8M15 17h6v-6"/>',
  'arrow-right': '<path d="M5 12h14m-5-5 5 5-5 5"/>',
  'arrow-up-right': '<path d="M7 17 17 7M7 7h10v10"/>',
  alert: '<path d="M10.3 3.7 2.2 18a2 2 0 0 0 1.7 3h16.2a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  edit: '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z"/>',
  x: '<path d="m6 6 12 12M6 18 18 6"/>',
  filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
  user: '<circle cx="12" cy="7" r="4"/><path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2"/>',
  send: '<path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"/>',
  save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2ZM7 3v6h10V3M7 21v-8h10v8"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
};

const PROGRAMS = {
  BSIT: { name: 'BS Information Technology', short: 'Information Technology', color: '#27795c', prefix: 'IT' },
  BSCS: { name: 'BS Computer Science', short: 'Computer Science', color: '#6d86a8', prefix: 'CS' },
  BSBA: { name: 'BS Business Administration', short: 'Business Administration', color: '#d1a056', prefix: 'BA' },
};

const seedStudents = [
  { id: 'STU-2026-001', name: 'Maria Santos', email: 'maria.santos@campus.edu', phone: '+63 917 204 8811', program: 'BSIT', year: 2, section: 'IT 2-A', attendance: 96.4, gpa: 3.82, midterm: 91, final: 89, risk: 'low', issues: [], lastActive: 'Today, 8:42 AM', notes: [{ text: 'Consistent participation in class and submitted the project ahead of schedule.', author: 'Alex Rivera', date: 'Nov 24, 2026' }] },
  { id: 'STU-2026-002', name: 'Juan Dela Cruz', email: 'juan.delacruz@campus.edu', phone: '+63 918 552 1902', program: 'BSCS', year: 3, section: 'CS 3-A', attendance: 94.1, gpa: 3.67, midterm: 88, final: 91, risk: 'low', issues: [], lastActive: 'Today, 8:15 AM', notes: [{ text: 'Showing strong improvement in algorithms. Encourage participation in the coding showcase.', author: 'Alex Rivera', date: 'Nov 21, 2026' }] },
  { id: 'STU-2026-003', name: 'Andrea Garcia', email: 'andrea.garcia@campus.edu', phone: '+63 915 784 3301', program: 'BSBA', year: 2, section: 'BA 2-B', attendance: 92.8, gpa: 3.55, midterm: 90, final: 87, risk: 'low', issues: [], lastActive: 'Yesterday, 4:30 PM', notes: [] },
  { id: 'STU-2026-004', name: 'Miguel Reyes', email: 'miguel.reyes@campus.edu', phone: '+63 920 118 9024', program: 'BSIT', year: 1, section: 'IT 1-A', attendance: 89.7, gpa: 3.41, midterm: 86, final: 85, risk: 'low', issues: [], lastActive: 'Today, 7:56 AM', notes: [] },
  { id: 'STU-2026-005', name: 'Sofia Martinez', email: 'sofia.martinez@campus.edu', phone: '+63 917 642 1085', program: 'BSCS', year: 2, section: 'CS 2-A', attendance: 97.2, gpa: 3.91, midterm: 94, final: 92, risk: 'low', issues: [], lastActive: 'Today, 8:38 AM', notes: [{ text: 'Named to the Dean’s List for the previous term.', author: 'Alex Rivera', date: 'Nov 18, 2026' }] },
  { id: 'STU-2026-006', name: 'Nathaniel Flores', email: 'nathaniel.flores@campus.edu', phone: '+63 921 458 7720', program: 'BSIT', year: 2, section: 'IT 2-A', attendance: 72.5, gpa: 2.18, midterm: 68, final: 64, risk: 'high', issues: ['Attendance below 75%', 'GPA below 2.5'], lastActive: 'Nov 21, 2026', notes: [{ text: 'Missed two consecutive advising sessions. Sent a check-in message and offered a flexible meeting time.', author: 'Alex Rivera', date: 'Nov 23, 2026' }] },
  { id: 'STU-2026-007', name: 'Isabella Ramos', email: 'isabella.ramos@campus.edu', phone: '+63 919 205 6143', program: 'BSBA', year: 3, section: 'BA 3-A', attendance: 78.2, gpa: 2.46, midterm: 72, final: 68, risk: 'high', issues: ['Attendance below 80%', 'Declining midterm grades'], lastActive: 'Nov 20, 2026', notes: [{ text: 'Discussed workload concerns. Referred to the academic coaching program.', author: 'Alex Rivera', date: 'Nov 22, 2026' }] },
  { id: 'STU-2026-008', name: 'Lucas Mendoza', email: 'lucas.mendoza@campus.edu', phone: '+63 916 338 5208', program: 'BSCS', year: 1, section: 'CS 1-B', attendance: 81.3, gpa: 2.62, midterm: 76, final: 74, risk: 'medium', issues: ['Attendance needs monitoring'], lastActive: 'Nov 22, 2026', notes: [] },
  { id: 'STU-2026-009', name: 'Chloe Navarro', email: 'chloe.navarro@campus.edu', phone: '+63 918 903 4617', program: 'BSIT', year: 3, section: 'IT 3-A', attendance: 85.1, gpa: 2.71, midterm: 78, final: 80, risk: 'medium', issues: ['GPA below 3.0'], lastActive: 'Nov 23, 2026', notes: [] },
  { id: 'STU-2026-010', name: 'Gabriel Cruz', email: 'gabriel.cruz@campus.edu', phone: '+63 915 627 8004', program: 'BSBA', year: 1, section: 'BA 1-A', attendance: 83.4, gpa: 2.69, midterm: 75, final: 78, risk: 'medium', issues: ['Attendance and GPA trending down'], lastActive: 'Nov 19, 2026', notes: [] },
  { id: 'STU-2026-011', name: 'Erica Lim', email: 'erica.lim@campus.edu', phone: '+63 917 814 2309', program: 'BSIT', year: 2, section: 'IT 2-A', attendance: 98.1, gpa: 3.88, midterm: 93, final: 94, risk: 'low', issues: [], lastActive: 'Today, 8:47 AM', notes: [] },
  { id: 'STU-2026-012', name: 'David Wilson', email: 'david.wilson@campus.edu', phone: '+63 920 561 9941', program: 'BSCS', year: 4, section: 'CS 4-A', attendance: 91.6, gpa: 3.48, midterm: 85, final: 90, risk: 'low', issues: [], lastActive: 'Yesterday, 6:12 PM', notes: [] },
  { id: 'STU-2026-013', name: 'Camille Torres', email: 'camille.torres@campus.edu', phone: '+63 918 247 1530', program: 'BSBA', year: 2, section: 'BA 2-B', attendance: 93.5, gpa: 3.61, midterm: 89, final: 88, risk: 'low', issues: [], lastActive: 'Today, 8:02 AM', notes: [] },
  { id: 'STU-2026-014', name: 'Ethan Garcia', email: 'ethan.garcia@campus.edu', phone: '+63 921 704 5826', program: 'BSIT', year: 1, section: 'IT 1-A', attendance: 87.9, gpa: 3.15, midterm: 82, final: 80, risk: 'low', issues: [], lastActive: 'Nov 23, 2026', notes: [] },
  { id: 'STU-2026-015', name: 'Olivia Reyes', email: 'olivia.reyes@campus.edu', phone: '+63 916 905 3374', program: 'BSCS', year: 3, section: 'CS 3-A', attendance: 95.3, gpa: 3.74, midterm: 90, final: 91, risk: 'low', issues: [], lastActive: 'Today, 8:21 AM', notes: [] },
  { id: 'STU-2026-016', name: 'Matthew Tan', email: 'matthew.tan@campus.edu', phone: '+63 919 482 7065', program: 'BSBA', year: 4, section: 'BA 4-A', attendance: 90.2, gpa: 3.43, midterm: 84, final: 88, risk: 'low', issues: [], lastActive: 'Yesterday, 3:45 PM', notes: [] },
  { id: 'STU-2026-017', name: 'Ava Santos', email: 'ava.santos@campus.edu', phone: '+63 917 356 9210', program: 'BSIT', year: 2, section: 'IT 2-A', attendance: 96.8, gpa: 3.79, midterm: 92, final: 90, risk: 'low', issues: [], lastActive: 'Today, 8:50 AM', notes: [] },
  { id: 'STU-2026-018', name: 'Noah Fernandez', email: 'noah.fernandez@campus.edu', phone: '+63 915 208 4493', program: 'BSCS', year: 2, section: 'CS 2-A', attendance: 88.7, gpa: 3.28, midterm: 84, final: 82, risk: 'low', issues: [], lastActive: 'Nov 22, 2026', notes: [] },
  { id: 'STU-2026-019', name: 'Mia Dela Cruz', email: 'mia.delacruz@campus.edu', phone: '+63 920 774 6128', program: 'BSBA', year: 1, section: 'BA 1-A', attendance: 91.9, gpa: 3.52, midterm: 88, final: 86, risk: 'low', issues: [], lastActive: 'Today, 7:48 AM', notes: [] },
  { id: 'STU-2026-020', name: 'Liam Gonzales', email: 'liam.gonzales@campus.edu', phone: '+63 918 640 2357', program: 'BSIT', year: 3, section: 'IT 3-A', attendance: 88.7, gpa: 3.08, midterm: 80, final: 77, risk: 'low', issues: [], lastActive: 'Nov 21, 2026', notes: [] },
  { id: 'STU-2026-021', name: 'Charlotte Uy', email: 'charlotte.uy@campus.edu', phone: '+63 916 527 8042', program: 'BSCS', year: 4, section: 'CS 4-A', attendance: 93.1, gpa: 3.58, midterm: 87, final: 90, risk: 'low', issues: [], lastActive: 'Yesterday, 5:20 PM', notes: [] },
  { id: 'STU-2026-022', name: 'James Villanueva', email: 'james.villanueva@campus.edu', phone: '+63 921 183 5076', program: 'BSBA', year: 2, section: 'BA 2-B', attendance: 89.4, gpa: 3.32, midterm: 85, final: 84, risk: 'low', issues: [], lastActive: 'Nov 23, 2026', notes: [] },
  { id: 'STU-2026-023', name: 'Amelia Castro', email: 'amelia.castro@campus.edu', phone: '+63 917 092 6835', program: 'BSIT', year: 1, section: 'IT 1-A', attendance: 97.5, gpa: 3.86, midterm: 92, final: 93, risk: 'low', issues: [], lastActive: 'Today, 8:33 AM', notes: [] },
  { id: 'STU-2026-024', name: 'Benjamin Ramos', email: 'benjamin.ramos@campus.edu', phone: '+63 919 756 1402', program: 'BSCS', year: 3, section: 'CS 3-A', attendance: 89.1, gpa: 3.17, midterm: 78, final: 82, risk: 'low', issues: [], lastActive: 'Nov 20, 2026', notes: [] },
];

const STORAGE_KEY = 'campustrack-student-system-v1';
const PAGE_LABELS = { overview: 'Overview', students: 'Students', attendance: 'Attendance', grades: 'Grades & performance', support: 'Student support' };

function pageFromHash() {
  const page = window.location.hash.slice(1);
  return Object.hasOwn(PAGE_LABELS, page) ? page : 'overview';
}

const avatarPalettes = [
  ['#e2efe7', '#2b7152'], ['#e8edf7', '#57729a'], ['#f6ead8', '#a77431'], ['#eee7f5', '#7b5c98'],
  ['#f6e5e2', '#a35e54'], ['#e2eff1', '#3d7780'], ['#f1e8ef', '#8a5e7c'], ['#e9eee2', '#647c43'],
];

function defaultState() {
  return {
    students: JSON.parse(JSON.stringify(seedStudents)),
    attendance: {},
    followUps: {},
    page: pageFromHash(),
    search: '',
    programFilter: 'all',
    statusFilter: 'all',
    studentPage: 1,
    gradeProgram: 'all',
    supportTab: 'attention',
    attendanceProgram: 'BSIT',
    attendanceSection: 'all',
    attendanceDate: new Date().toISOString().slice(0, 10),
    attendanceDirty: false,
    dashboardProgram: 'all',
    chartMetric: 'attendance',
    selectedStudents: [],
    selectedStudentId: null,
    notificationsRead: false,
  };
}

function loadState() {
  const fallback = defaultState();
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!saved || !Array.isArray(saved.students)) return fallback;
    return {
      ...fallback,
      students: saved.students,
      attendance: saved.attendance || {},
      followUps: saved.followUps || {},
      notificationsRead: Boolean(saved.notificationsRead),
    };
  } catch {
    return fallback;
  }
}

let state = loadState();
let pendingRestore = null;

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      students: state.students,
      attendance: state.attendance,
      followUps: state.followUps,
      notificationsRead: state.notificationsRead,
    }));
  } catch {
    showToast('Changes are available for this session, but browser storage is full.');
  }
}

function icon(name, className = '') {
  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.layout}</svg>`;
}

function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((element) => {
    element.innerHTML = icon(element.dataset.icon);
  });
}

function escapeHTML(value = '') {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
}

function getInitials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase();
}

function avatar(student, size = '') {
  const hash = [...student.name].reduce((total, character) => total + character.charCodeAt(0), 0);
  const [background, color] = avatarPalettes[hash % avatarPalettes.length];
  return `<div class="avatar ${size}" style="background:${background};color:${color}">${escapeHTML(getInitials(student.name))}</div>`;
}

function average(students, key) {
  const values = students.map((student) => student[key]).filter((value) => typeof value === 'number');
  return values.length ? values.reduce((total, value) => total + value, 0) / values.length : 0;
}

function activeStudents() {
  return state.students.filter((student) => !student.archived);
}

function riskStudents(students = activeStudents()) {
  const rank = { high: 0, medium: 1, low: 2 };
  return students.filter((student) => !student.archived && student.risk !== 'low').sort((a, b) => rank[a.risk] - rank[b.risk] || a.attendance - b.attendance);
}

function studentStatus(student) {
  if (student.archived) return { label: 'Archived', className: 'badge-gray' };
  if (student.isNew) return { label: 'New', className: 'badge-blue' };
  if (student.risk === 'high') return { label: 'At risk', className: 'badge-red' };
  if (student.risk === 'medium') return { label: 'Monitor', className: 'badge-amber' };
  if (student.gpa >= 3.7) return { label: 'Excellent', className: 'badge-green' };
  return { label: 'On track', className: 'badge-green' };
}

function statusBadge(student) {
  const status = studentStatus(student);
  return `<span class="badge ${status.className}">${status.label}</span>`;
}

function riskBadge(student) {
  if (student.risk === 'high') return '<span class="badge badge-red">High priority</span>';
  if (student.risk === 'medium') return '<span class="badge badge-amber">Monitor</span>';
  return '<span class="badge badge-green">On track</span>';
}

function getStudent(id) {
  return state.students.find((student) => student.id === id);
}

function programOptions(selected = 'all', includeAll = true) {
  const all = includeAll ? '<option value="all">All programs</option>' : '';
  return `${all}${Object.entries(PROGRAMS).map(([code, program]) => `<option value="${code}" ${selected === code ? 'selected' : ''}>${program.name}</option>`).join('')}`;
}

function sectionOptions(studentList, selected) {
  const sections = [...new Set(studentList.map((student) => student.section))].sort();
  return `<option value="all">All sections</option>${sections.map((section) => `<option value="${escapeHTML(section)}" ${selected === section ? 'selected' : ''}>${escapeHTML(section)}</option>`).join('')}`;
}

function getFilteredStudents() {
  const query = state.search.trim().toLowerCase();
  const archivedView = state.statusFilter === 'Archived';
  return state.students.filter((student) => {
    const matchesQuery = !query || [student.name, student.id, student.email, PROGRAMS[student.program]?.name, student.section].some((value) => String(value).toLowerCase().includes(query));
    const matchesProgram = state.programFilter === 'all' || student.program === state.programFilter;
    const status = studentStatus(student).label;
    const matchesArchive = archivedView ? Boolean(student.archived) : !student.archived;
    const matchesStatus = archivedView || state.statusFilter === 'all' || status === state.statusFilter;
    return matchesQuery && matchesProgram && matchesArchive && matchesStatus;
  });
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `${icon('check-circle')}<span>${escapeHTML(message)}</span>`;
  document.getElementById('toastRegion').append(toast);
  window.setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(6px)';
    window.setTimeout(() => toast.remove(), 200);
  }, 3200);
}

function navigate(page) {
  state.page = page;
  state.selectedStudents = [];
  if (window.location.hash !== `#${page}`) window.history.pushState({}, '', `#${page}`);
  closeSidebar();
  closeNotifications();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function render() {
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.page === state.page));
  document.getElementById('breadcrumbCurrent').textContent = PAGE_LABELS[state.page];
  document.getElementById('studentNavCount').textContent = activeStudents().length;
  document.getElementById('riskNavCount').textContent = riskStudents().length;
  document.getElementById('notificationButton').querySelector('i').hidden = state.notificationsRead;
  renderPage();
  renderNotificationPanel();
}

function renderPage() {
  const content = document.getElementById('pageContent');
  const renderers = { overview: renderOverview, students: renderStudents, attendance: renderAttendance, grades: renderGrades, support: renderSupport };
  content.innerHTML = renderers[state.page]();
  hydrateIcons(content);
  if (state.page === 'attendance') updateAttendanceStats();
}

function greeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

function renderOverview() {
  const students = activeStudents().filter((student) => state.dashboardProgram === 'all' || student.program === state.dashboardProgram);
  const alerts = riskStudents(students).slice(0, 5);
  const avgAttendance = average(students, 'attendance');
  const avgGpa = average(students, 'gpa');
  const dateLabel = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  return `
    <section class="page-heading">
      <div>
        <div class="eyebrow">${icon('sparkles')} Student success overview</div>
        <h1>${greeting()}, Alex</h1>
        <p>Here’s what’s happening across your programs today.</p>
      </div>
      <div class="page-heading-actions">
        <span class="date-chip">${icon('calendar')}${dateLabel}</span>
        <button class="btn" data-action="export-report">${icon('download')}Export report</button>
        <button class="btn btn-primary" data-action="add-student">${icon('plus')}Add student</button>
      </div>
    </section>

    <div class="page-toolbar">
      <div class="toolbar-left">
        <select class="select-control" id="dashboardProgram" aria-label="Filter dashboard by program">${programOptions(state.dashboardProgram)}</select>
        <span class="result-count">${students.length} active students in this view</span>
      </div>
      <div class="toolbar-right"><span class="badge badge-green">Live academic snapshot</span></div>
    </div>

    <div class="stats-grid">
      ${statCard('Total students', students.length, 'users', 'green', '+3', 'since last month', [12, 18, 15, 23, 22, 28, 31])}
      ${statCard('Students at risk', riskStudents(students).length, 'alert', 'amber', riskStudents(students).length ? 'Action' : 'Clear', 'needs your attention', [20, 18, 19, 14, 16, 12, 10], true)}
      ${statCard('Average attendance', `${avgAttendance.toFixed(1)}%`, 'clipboard', 'blue', '+2.1%', 'vs. last term', [10, 14, 13, 17, 19, 22, 25])}
      ${statCard('Average GPA', avgGpa.toFixed(2), 'graduation', 'purple', '+0.08', 'vs. last term', [9, 12, 11, 15, 17, 18, 21])}
    </div>

    <div class="dashboard-grid">
      <section class="card performance-card">
        <div class="card-header">
          <div class="card-title"><h2>Student performance</h2><p>Progress across the current academic term</p></div>
          <div class="segmented" aria-label="Performance metric">
            <button class="${state.chartMetric === 'attendance' ? 'active' : ''}" data-action="chart-metric" data-metric="attendance">Attendance</button>
            <button class="${state.chartMetric === 'gpa' ? 'active' : ''}" data-action="chart-metric" data-metric="gpa">Average GPA</button>
          </div>
        </div>
        <div class="performance-summary"><strong>${state.chartMetric === 'attendance' ? `${avgAttendance.toFixed(1)}%` : avgGpa.toFixed(2)}</strong><span class="trend">${icon('trending-up')}${state.chartMetric === 'attendance' ? '2.1%' : '0.08'}</span><span>from last term</span></div>
        <div class="line-chart">${renderLineChart(state.chartMetric, students)}</div>
      </section>
      <section class="card distribution-card">
        <div class="card-header"><div class="card-title"><h2>Student distribution</h2><p>Enrollment by degree program</p></div><button class="row-action" data-action="program-details" aria-label="View program details">${icon('more')}</button></div>
        ${renderDonut(students)}
      </section>
    </div>

    <div class="dashboard-bottom">
      <section class="card attention-card">
        <div class="card-header"><div class="card-title"><h2>Students needing attention</h2><p>Early alerts based on attendance and academic standing</p></div><button class="card-link" data-page="support">View all ${icon('arrow-right')}</button></div>
        <div class="table-wrap">${renderAttentionTable(alerts)}</div>
      </section>
      <section class="card checkin-card">
        <div class="card-header"><div class="card-title"><h2>Upcoming check-ins</h2><p>Your student support schedule</p></div><button class="row-action" data-action="schedule-checkin" aria-label="Schedule check-in">${icon('plus')}</button></div>
        <div class="checkin-list">${renderCheckins(alerts)}</div>
      </section>
    </div>
    <div class="insight-banner" style="margin-top:18px">
      <div class="insight-banner-icon">${icon('shield')}</div>
      <div class="insight-banner-copy"><strong>Early support makes a difference</strong><p>CampusTrack flags attendance below 88% or GPA below 3.0 so you can step in before small issues become setbacks.</p></div>
      <button class="btn btn-soft" data-page="support">Review early alerts ${icon('arrow-right')}</button>
    </div>`;
}

function statCard(label, value, iconName, color, trend, caption, bars, warning = false) {
  return `<section class="card stat-card">
    <div class="stat-top"><span class="stat-label">${label}</span><span class="stat-icon ${color}">${icon(iconName)}</span></div>
    <div class="stat-value">${value}</div>
    <div class="stat-bottom"><span class="trend ${warning ? 'warning' : ''}">${icon(warning ? 'clock' : 'trending-up')}${trend}</span><span>${caption}</span><span class="mini-bars">${bars.map((height) => `<i style="height:${height}px"></i>`).join('')}</span></div>
  </section>`;
}

function renderLineChart(metric, students) {
  const active = activeStudents();
  const overallAttendance = average(active, 'attendance');
  const overallGpa = average(active, 'gpa');
  const actual = metric === 'attendance' ? average(students, 'attendance') : average(students, 'gpa');
  const baseline = metric === 'attendance' ? [87.6, 88.9, 88.4, 90.2, 91.3] : [3.08, 3.14, 3.18, 3.24, 3.29];
  const offset = actual - (metric === 'attendance' ? overallAttendance : overallGpa);
  const values = [...baseline.map((value) => value + offset), actual];
  const min = metric === 'attendance' ? Math.min(...values) - 2 : Math.min(...values) - .12;
  const max = metric === 'attendance' ? Math.max(...values) + 1 : Math.max(...values) + .08;
  const labels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  const left = 45;
  const right = 574;
  const top = 16;
  const bottom = 181;
  const points = values.map((value, index) => ({ x: left + index * ((right - left) / (values.length - 1)), y: bottom - ((value - min) / (max - min)) * (bottom - top), value }));
  const line = points.map((point, index) => `${index ? 'L' : 'M'}${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(' ');
  const area = `${line} L${right},${bottom} L${left},${bottom} Z`;
  const grid = [0, 1, 2, 3].map((index) => {
    const y = top + index * ((bottom - top) / 3);
    const label = max - index * ((max - min) / 3);
    return `<line class="chart-grid-line" x1="${left}" y1="${y}" x2="${right}" y2="${y}"/><text class="chart-axis-label" x="2" y="${y + 3}">${metric === 'attendance' ? `${label.toFixed(0)}%` : label.toFixed(2)}</text>`;
  }).join('');
  return `<svg viewBox="0 0 600 220" role="img" aria-label="${metric === 'attendance' ? 'Attendance' : 'GPA'} trend from June to November">
    <defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#27795c" stop-opacity=".17"/><stop offset="100%" stop-color="#27795c" stop-opacity="0"/></linearGradient></defs>
    ${grid}<path d="${area}" fill="url(#chartFill)"/><path class="chart-line" d="${line}"/>
    ${points.map((point, index) => `<circle class="chart-point" cx="${point.x}" cy="${point.y}" r="3.5"><title>${labels[index]}: ${metric === 'attendance' ? `${point.value.toFixed(1)}%` : point.value.toFixed(2)}</title></circle>`).join('')}
    ${labels.map((label, index) => `<text class="chart-axis-label" x="${left + index * ((right - left) / 5)}" y="207" text-anchor="middle">${label}</text>`).join('')}
  </svg>`;
}

function renderDonut(students) {
  const counts = Object.keys(PROGRAMS).map((code) => ({ code, count: students.filter((student) => student.program === code).length })).filter((item) => item.count);
  let cursor = 0;
  const segments = counts.map((item) => {
    const start = cursor;
    cursor += (item.count / Math.max(students.length, 1)) * 100;
    return `${PROGRAMS[item.code].color} ${start}% ${cursor}%`;
  }).join(',');
  return `<div class="donut-wrap"><div class="donut" style="background:conic-gradient(${segments || '#e9eee9 0 100%'})"></div><div class="donut-center"><strong>${students.length}</strong><span>Total students</span></div></div>
    <div class="distribution-legend">${counts.map((item) => `<button class="legend-row" style="padding:0;border:0;background:transparent;text-align:left" data-action="filter-program" data-program="${item.code}"><i class="legend-dot" style="background:${PROGRAMS[item.code].color}"></i><span>${PROGRAMS[item.code].short}</span><strong>${item.count}</strong><small>${Math.round(item.count / Math.max(students.length, 1) * 100)}%</small></button>`).join('')}</div>`;
}

function renderAttentionTable(students) {
  if (!students.length) return `<div class="empty-state"><div class="empty-state-icon">${icon('check-circle')}</div><h3>No students need attention</h3><p>Everyone in this view is currently on track.</p></div>`;
  return `<table class="data-table"><thead><tr><th>Student</th><th>Program</th><th>Alert</th><th>Attendance</th><th></th></tr></thead><tbody>${students.map((student) => `<tr>
    <td><div class="student-cell">${avatar(student, 'avatar-sm')}<div><strong>${escapeHTML(student.name)}</strong><small>${student.id}</small></div></div></td>
    <td>${student.program} • Year ${student.year}</td>
    <td><span class="issue-text">${escapeHTML(student.issues[0] || 'Academic standing review')}</span></td>
    <td><div class="attendance-value"><span>${student.attendance.toFixed(1)}%</span><span class="progress-track ${student.attendance < 80 ? 'danger' : 'warning'}"><i style="width:${student.attendance}%"></i></span></div></td>
    <td><button class="row-action" data-action="open-student" data-id="${student.id}" aria-label="View ${escapeHTML(student.name)}">${icon('arrow-up-right')}</button></td>
  </tr>`).join('')}</tbody></table>`;
}

function renderCheckins(students) {
  const times = ['10:30 AM', '1:00 PM', '3:30 PM', '9:30 AM', '2:00 PM'];
  return students.slice(0, 4).map((student, index) => `<div class="checkin-item"><div class="checkin-time"><strong>${index === 0 ? 'Today' : index === 1 ? 'Today' : 'Tomorrow'}</strong>${times[index]}</div><div class="checkin-info"><strong>${escapeHTML(student.name)}</strong><p>${escapeHTML(student.issues[0] || 'Academic progress review')}</p><button class="btn-text" data-action="open-student" data-id="${student.id}">View student ${icon('arrow-right')}</button></div></div>`).join('') || '<div class="empty-state"><p>No check-ins scheduled.</p></div>';
}

function renderStudents() {
  const filtered = getFilteredStudents();
  const pageSize = 8;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  state.studentPage = Math.min(state.studentPage, totalPages);
  const start = (state.studentPage - 1) * pageSize;
  const students = filtered.slice(start, start + pageSize);
  const allVisibleSelected = students.length > 0 && students.every((student) => state.selectedStudents.includes(student.id));
  return `
    <section class="page-heading">
      <div><div class="eyebrow">${icon('users')} Student directory</div><h1>Students</h1><p>Keep every learner’s academic journey organized and within reach.</p></div>
      <div class="page-heading-actions"><button class="btn" data-action="export-students">${icon('download')}Export CSV</button><button class="btn btn-primary" data-action="add-student">${icon('plus')}Add student</button></div>
    </section>
    <div class="page-toolbar">
      <div class="toolbar-left"><label class="search-field">${icon('search')}<input id="studentSearch" type="search" value="${escapeHTML(state.search)}" placeholder="Search name, ID, or program..." aria-label="Search student records" /></label><select class="select-control" id="studentProgram" aria-label="Filter by program">${programOptions(state.programFilter)}</select><select class="select-control" id="studentStatus" aria-label="Filter by status"><option value="all">All active statuses</option>${['On track', 'Excellent', 'Monitor', 'At risk', 'New', 'Archived'].map((status) => `<option value="${status}" ${state.statusFilter === status ? 'selected' : ''}>${status}</option>`).join('')}</select></div>
      <div class="toolbar-right"><span class="result-count">${filtered.length} student${filtered.length === 1 ? '' : 's'} found</span>${state.selectedStudents.length ? `<button class="btn btn-sm btn-soft" data-action="export-selected">${icon('download')}Export ${state.selectedStudents.length} selected</button>` : ''}</div>
    </div>
    <section class="card students-table-card">
      ${students.length ? `<div class="table-wrap"><table class="data-table"><thead><tr><th><input class="checkbox" type="checkbox" id="selectAllStudents" aria-label="Select visible students" ${allVisibleSelected ? 'checked' : ''} /></th><th>Student</th><th>Program</th><th>Attendance</th><th>GPA</th><th>Status</th><th>Last active</th><th></th></tr></thead><tbody>${students.map((student) => `<tr>
        <td><input class="checkbox student-checkbox" type="checkbox" data-id="${student.id}" aria-label="Select ${escapeHTML(student.name)}" ${state.selectedStudents.includes(student.id) ? 'checked' : ''} /></td>
        <td><div class="student-cell">${avatar(student, 'avatar-sm')}<div><strong>${escapeHTML(student.name)}</strong><small>${student.id}</small></div></div></td>
        <td>${student.program} • Year ${student.year}<br><span style="color:#98a09b;font-size:8px">${escapeHTML(student.section)}</span></td>
        <td><div class="attendance-value"><span>${student.attendance.toFixed(1)}%</span><span class="progress-track ${student.attendance < 80 ? 'danger' : student.attendance < 88 ? 'warning' : ''}"><i style="width:${student.attendance}%"></i></span></div></td>
        <td class="gpa-cell">${student.gpa == null ? '—' : student.gpa.toFixed(2)}</td><td>${statusBadge(student)}</td><td>${escapeHTML(student.lastActive)}</td>
        <td><button class="row-action" data-action="open-student" data-id="${student.id}" aria-label="View details for ${escapeHTML(student.name)}">${icon('more')}</button></td>
      </tr>`).join('')}</tbody></table></div>` : emptyStudents()}
      <div class="table-footer"><span>Showing ${filtered.length ? start + 1 : 0}–${Math.min(start + pageSize, filtered.length)} of ${filtered.length} students</span><div class="pagination"><button class="page-button" data-action="student-page" data-number="${state.studentPage - 1}" ${state.studentPage === 1 ? 'disabled' : ''} aria-label="Previous page">${icon('chevron-left')}</button>${Array.from({ length: totalPages }, (_, index) => `<button class="page-button ${state.studentPage === index + 1 ? 'active' : ''}" data-action="student-page" data-number="${index + 1}">${index + 1}</button>`).join('')}<button class="page-button" data-action="student-page" data-number="${state.studentPage + 1}" ${state.studentPage === totalPages ? 'disabled' : ''} aria-label="Next page">${icon('chevron-right')}</button></div></div>
    </section>`;
}

function emptyStudents() {
  return `<div class="empty-state"><div class="empty-state-icon">${icon('search')}</div><h3>No matching students</h3><p>Try a different search or clear your filters.</p><button class="btn btn-soft" data-action="clear-filters">Clear filters</button></div>`;
}

function attendanceRoster() {
  return activeStudents().filter((student) => student.program === state.attendanceProgram && (state.attendanceSection === 'all' || student.section === state.attendanceSection));
}

function attendanceKey(studentId) {
  return `${state.attendanceDate}|${studentId}`;
}

function attendanceStatus(studentId) {
  return state.attendance[attendanceKey(studentId)] || 'present';
}

function renderAttendance() {
  const roster = attendanceRoster();
  const programStudents = activeStudents().filter((student) => student.program === state.attendanceProgram);
  const sections = sectionOptions(programStudents, state.attendanceSection);
  const program = PROGRAMS[state.attendanceProgram];
  return `
    <section class="page-heading"><div><div class="eyebrow">${icon('clipboard')} Daily class record</div><h1>Attendance</h1><p>A quick, consistent check-in keeps academic patterns visible.</p></div><div class="page-heading-actions"><button class="btn" data-action="mark-all-present">${icon('check-circle')}Mark all present</button><button class="btn btn-primary" data-action="save-attendance">${icon('save')}${state.attendanceDirty ? 'Save changes' : 'Save attendance'}</button></div></section>
    <div class="page-toolbar"><div class="toolbar-left"><input class="select-control" style="height:36px;padding-right:11px" type="date" id="attendanceDate" value="${state.attendanceDate}" aria-label="Attendance date" /><select class="select-control" id="attendanceProgram" aria-label="Attendance program">${programOptions(state.attendanceProgram, false)}</select><select class="select-control" id="attendanceSection" aria-label="Attendance section">${sections}</select></div><div class="toolbar-right"><span class="result-count">${roster.length} students in this roster</span></div></div>
    <div class="attendance-layout">
      <div>
        <div class="attendance-stats">
          <section class="card attendance-stat"><span>Present</span><strong id="countPresent">0</strong><small>On time and ready to learn</small></section>
          <section class="card attendance-stat"><span>Late</span><strong id="countLate">0</strong><small>Arrived after roll call</small></section>
          <section class="card attendance-stat"><span>Absent</span><strong id="countAbsent">0</strong><small>Not present in class</small></section>
          <section class="card attendance-stat"><span>Excused</span><strong id="countExcused">0</strong><small>Approved absence</small></section>
        </div>
        <section class="card attendance-table-card">${roster.length ? `<div class="table-wrap"><table class="data-table"><thead><tr><th>Student</th><th>Student ID</th><th>Section</th><th>Overall attendance</th><th>Today’s status</th></tr></thead><tbody>${roster.map((student) => {
          const status = attendanceStatus(student.id);
          return `<tr><td><div class="student-cell">${avatar(student, 'avatar-sm')}<strong>${escapeHTML(student.name)}</strong></div></td><td>${student.id}</td><td>${escapeHTML(student.section)}</td><td><div class="attendance-value"><span>${student.attendance.toFixed(1)}%</span><span class="progress-track ${student.attendance < 80 ? 'danger' : student.attendance < 88 ? 'warning' : ''}"><i style="width:${student.attendance}%"></i></span></div></td><td><select class="status-select ${status}" data-attendance-id="${student.id}" aria-label="Attendance for ${escapeHTML(student.name)}">${['present', 'late', 'absent', 'excused'].map((value) => `<option value="${value}" ${status === value ? 'selected' : ''}>${value[0].toUpperCase() + value.slice(1)}</option>`).join('')}</select></td></tr>`;
        }).join('')}</tbody></table></div><div class="table-footer"><span>${state.attendanceDirty ? 'You have unsaved attendance changes.' : 'Attendance changes are saved in this browser.'}</span><span>${program.name}</span></div>` : `<div class="empty-state"><div class="empty-state-icon">${icon('users')}</div><h3>No students in this section</h3><p>Choose another section to record attendance.</p></div>`}</section>
      </div>
      <aside class="attendance-side">
        <section class="card class-card"><h3>${program.name}</h3><p>${state.attendanceSection === 'all' ? 'All sections • Daily attendance' : escapeHTML(state.attendanceSection)}</p><div class="class-detail">${icon('clock')}<div><strong>8:00 AM – 9:30 AM</strong><span>Monday & Thursday</span></div></div><div class="class-detail">${icon('book')}<div><strong>Technology Building</strong><span>Room 204</span></div></div><div class="class-detail">${icon('user')}<div><strong>Alex Rivera</strong><span>Academic Advisor</span></div></div></section>
        <section class="card tip-card"><div class="tip-icon">${icon('sparkles')}</div><h3>Small habit. Big impact.</h3><p>Recording attendance daily makes it easier to notice patterns and offer support while it still matters.</p><button data-action="view-attendance-alerts">View students with attendance alerts ${icon('arrow-right')}</button></section>
      </aside>
    </div>`;
}

function updateAttendanceStats() {
  const counts = { present: 0, late: 0, absent: 0, excused: 0 };
  attendanceRoster().forEach((student) => counts[attendanceStatus(student.id)]++);
  Object.entries(counts).forEach(([status, count]) => {
    const element = document.getElementById(`count${status[0].toUpperCase()}${status.slice(1)}`);
    if (element) element.textContent = count;
  });
}

function renderGrades() {
  const students = activeStudents().filter((student) => state.gradeProgram === 'all' || student.program === state.gradeProgram);
  const graded = students.filter((student) => student.gpa != null);
  const avgGpa = average(graded, 'gpa');
  const passing = graded.length ? Math.round(graded.filter((student) => student.gpa >= 2).length / graded.length * 100) : 0;
  const honors = graded.filter((student) => student.gpa >= 3.5).length;
  const bands = [
    { label: '3.75 – 4.00', min: 3.75, max: 4.01, color: '#27795c' },
    { label: '3.50 – 3.74', min: 3.5, max: 3.75, color: '#6d9d82' },
    { label: '3.00 – 3.49', min: 3, max: 3.5, color: '#d2a45f' },
    { label: 'Below 3.00', min: 0, max: 3, color: '#cd7770' },
  ];
  return `
    <section class="page-heading"><div><div class="eyebrow">${icon('graduation')} Academic performance</div><h1>Grades & performance</h1><p>Turn grade data into timely guidance and meaningful conversations.</p></div><div class="page-heading-actions"><select class="select-control" id="gradeProgram" aria-label="Filter grades by program">${programOptions(state.gradeProgram)}</select><button class="btn" data-action="export-grades">${icon('download')}Export grades</button></div></section>
    <div class="grades-summary">
      <section class="card grade-summary-card"><span class="stat-icon green">${icon('graduation')}</span><div><strong>${avgGpa.toFixed(2)}</strong><span>Average GPA</span></div></section>
      <section class="card grade-summary-card"><span class="stat-icon blue">${icon('trending-up')}</span><div><strong>${passing}%</strong><span>Passing rate</span></div></section>
      <section class="card grade-summary-card"><span class="stat-icon purple">${icon('sparkles')}</span><div><strong>${honors}</strong><span>Honor roll students</span></div></section>
    </div>
    <div class="grades-layout">
      <section class="card"><div class="card-header"><div class="card-title"><h2>GPA distribution</h2><p>Current academic standing</p></div></div><div class="distribution-bars">${bands.map((band) => {
        const count = graded.filter((student) => student.gpa >= band.min && student.gpa < band.max).length;
        const percentage = graded.length ? Math.round(count / graded.length * 100) : 0;
        return `<div class="bar-row"><div class="bar-label"><span>${band.label}</span><strong>${count} student${count === 1 ? '' : 's'}</strong></div><div class="bar-track"><i style="width:${percentage}%;background:${band.color}"></i></div></div>`;
      }).join('')}</div></section>
      <section class="card students-table-card"><div class="card-header"><div class="card-title"><h2>Current term grades</h2><p>Midterm and final marks • 4.0 grading scale</p></div><span class="badge badge-blue">2026–2027 • 1st semester</span></div><div class="table-wrap"><table class="data-table"><thead><tr><th>Student</th><th>Program</th><th>Midterm</th><th>Final</th><th>GPA</th><th>Standing</th><th></th></tr></thead><tbody>${students.map((student) => `<tr><td><div class="student-cell">${avatar(student, 'avatar-sm')}<div><strong>${escapeHTML(student.name)}</strong><small>${student.id}</small></div></div></td><td>${student.program} • Year ${student.year}</td><td>${student.midterm == null ? '—' : `<span class="grade-number">${student.midterm}%</span>`}</td><td>${student.final == null ? '—' : `<span class="grade-number">${student.final}%</span>`}</td><td class="gpa-cell">${student.gpa == null ? '—' : student.gpa.toFixed(2)}</td><td>${statusBadge(student)}</td><td><button class="grade-edit" data-action="edit-grade" data-id="${student.id}" aria-label="Update grades for ${escapeHTML(student.name)}">${icon('edit')}</button></td></tr>`).join('')}</tbody></table></div><div class="table-footer"><span>Showing ${students.length} students</span><span>Click the edit icon to update grades</span></div></section>
    </div>`;
}

function renderSupport() {
  const alerts = riskStudents();
  const scheduled = Object.entries(state.followUps).filter(([, followUp]) => !followUp.completed).map(([id, followUp]) => ({ student: getStudent(id), followUp })).filter((item) => item.student && !item.student.archived);
  const list = state.supportTab === 'attention' ? alerts.map((student) => ({ student })) : scheduled;
  return `
    <section class="page-heading"><div><div class="eyebrow">${icon('heart')} Proactive student care</div><h1>Student support</h1><p>One calm place to prioritize outreach, record interventions, and follow through.</p></div><div class="page-heading-actions"><button class="btn btn-primary" data-action="schedule-checkin">${icon('plus')}Schedule check-in</button></div></section>
    <section class="support-summary"><div class="support-summary-copy"><div class="support-summary-icon">${icon('alert')}</div><div><h2>${alerts.length} student${alerts.length === 1 ? '' : 's'} could use a little support</h2><p>Prioritized by attendance, GPA, and the most recent advising notes.</p></div></div><span class="badge badge-amber">${alerts.filter((student) => student.risk === 'high').length} high priority</span></section>
    <div class="support-tabs"><button class="support-tab ${state.supportTab === 'attention' ? 'active' : ''}" data-action="support-tab" data-tab="attention">Needs attention <span>${alerts.length}</span></button><button class="support-tab ${state.supportTab === 'scheduled' ? 'active' : ''}" data-action="support-tab" data-tab="scheduled">Scheduled follow-ups <span>${scheduled.length}</span></button></div>
    <div class="support-list">${list.length ? list.map((item) => renderSupportCard(item.student, item.followUp)).join('') : `<section class="card empty-state"><div class="empty-state-icon">${icon(state.supportTab === 'attention' ? 'check-circle' : 'calendar')}</div><h3>${state.supportTab === 'attention' ? 'Everyone is on track' : 'No follow-ups scheduled'}</h3><p>${state.supportTab === 'attention' ? 'There are no active academic alerts right now.' : 'Schedule a check-in to keep student support moving.'}</p></section>`}</div>`;
}

function renderSupportCard(student, followUp) {
  const reason = student.issues.length ? student.issues.join(' • ') : 'Academic progress review';
  const nextDate = followUp ? `${formatShortDate(followUp.date)} • ${escapeHTML(followUp.time)}` : 'Not scheduled';
  return `<section class="card support-card"><div class="support-student">${avatar(student)}<div><strong>${escapeHTML(student.name)}</strong><small>${student.id} • ${student.program} ${student.year}</small></div></div><div class="support-reason"><strong>${escapeHTML(reason)}</strong><p>Attendance ${student.attendance.toFixed(1)}%${student.gpa == null ? '' : ` • GPA ${student.gpa.toFixed(2)}`}</p></div><div class="support-next">${followUp ? escapeHTML(followUp.type) : 'Next step'}<strong>${nextDate}</strong></div><div class="support-actions">${followUp ? `<button class="btn btn-sm" data-action="complete-followup" data-id="${student.id}">${icon('check')}Done</button>` : `<button class="btn btn-sm" data-action="schedule-student" data-id="${student.id}">${icon('calendar')}Schedule</button>`}<button class="row-action" data-action="open-student" data-id="${student.id}" aria-label="Open ${escapeHTML(student.name)}">${icon('arrow-up-right')}</button></div></section>`;
}

function formatShortDate(value) {
  if (!value) return 'Not scheduled';
  return new Date(`${value}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function openModal(type, id = null) {
  const modal = document.getElementById('modal');
  const titles = { add: 'Add a new student', edit: 'Edit student details', grade: 'Update term grades', intervention: 'Schedule student support', archive: 'Archive student record', backup: 'Backup & restore', restore: 'Restore CampusTrack data', help: 'Help & resources', profile: 'Your advisor profile', program: 'Program overview' };
  const subtitles = { add: 'Create a student record to start tracking their journey.', edit: 'Update contact and enrollment information without changing the student ID.', grade: 'Enter midterm and final marks to recalculate academic standing.', intervention: 'Set a clear next step and keep a record of your outreach.', archive: 'Keep the record and history, but remove the student from active tracking.', backup: 'Move your complete workspace safely between browsers or computers.', restore: 'Review this backup before replacing the data in this browser.', help: 'Quick tips for getting the most out of CampusTrack.', profile: 'Your workspace and locally saved data.', program: 'Enrollment across the active degree programs.' };
  modal.innerHTML = `<div class="modal-header"><div><h2 id="modalTitle">${titles[type]}</h2><p>${subtitles[type]}</p></div><button class="modal-close" data-action="close-modal" aria-label="Close dialog">${icon('x')}</button></div><div class="modal-body">${modalContent(type, id)}</div>`;
  document.getElementById('modalBackdrop').hidden = false;
  document.body.style.overflow = 'hidden';
  hydrateIcons(modal);
  window.setTimeout(() => modal.querySelector('input, select, textarea, button')?.focus(), 30);
}

function modalContent(type, id) {
  if (type === 'add') return `<form id="addStudentForm"><div class="form-error" id="formError"></div><div class="form-grid"><div class="form-field full"><label for="newName">Full name</label><input id="newName" name="name" placeholder="e.g. Nicole Mendoza" required maxlength="80" /></div><div class="form-field"><label for="newId">Student ID</label><input id="newId" name="id" placeholder="Auto-generated if blank" maxlength="30" /></div><div class="form-field"><label for="newEmail">Email address</label><input id="newEmail" name="email" type="email" placeholder="student@campus.edu" required maxlength="100" /></div><div class="form-field"><label for="newProgram">Degree program</label><select id="newProgram" name="program">${programOptions('BSIT', false)}</select></div><div class="form-field"><label for="newYear">Year level</label><select id="newYear" name="year">${[1, 2, 3, 4].map((year) => `<option value="${year}">Year ${year}</option>`).join('')}</select></div><div class="form-field full"><label for="newPhone">Contact number <span style="font-weight:400;color:#98a09b">(optional)</span></label><input id="newPhone" name="phone" placeholder="+63 917 000 0000" maxlength="30" /></div></div><div class="modal-footer"><button type="button" class="btn" data-action="close-modal">Cancel</button><button type="submit" class="btn btn-primary">${icon('plus')}Add student</button></div></form>`;
  if (type === 'edit') {
    const student = getStudent(id);
    if (!student) return '';
    return `<form id="editStudentForm" data-id="${student.id}"><div class="form-error" id="formError"></div><div class="student-preview">${avatar(student)}<div><strong>${escapeHTML(student.name)}</strong><span>${student.id} • Student ID cannot be changed</span></div></div><div class="form-grid"><div class="form-field full"><label for="editName">Full name</label><input id="editName" name="name" value="${escapeHTML(student.name)}" required maxlength="80" /></div><div class="form-field"><label for="editEmail">Email address</label><input id="editEmail" name="email" type="email" value="${escapeHTML(student.email)}" required maxlength="100" /></div><div class="form-field"><label for="editPhone">Contact number</label><input id="editPhone" name="phone" value="${escapeHTML(student.phone || '')}" maxlength="30" /></div><div class="form-field"><label for="editProgram">Degree program</label><select id="editProgram" name="program">${programOptions(student.program, false)}</select></div><div class="form-field"><label for="editYear">Year level</label><select id="editYear" name="year">${[1, 2, 3, 4].map((year) => `<option value="${year}" ${student.year === year ? 'selected' : ''}>Year ${year}</option>`).join('')}</select></div><div class="form-field full"><label for="editSection">Section</label><input id="editSection" name="section" value="${escapeHTML(student.section)}" required maxlength="30" /></div></div><div class="modal-footer"><button type="button" class="btn" data-action="close-modal">Cancel</button><button type="submit" class="btn btn-primary">${icon('save')}Save changes</button></div></form>`;
  }
  if (type === 'archive') {
    const student = getStudent(id);
    if (!student) return '';
    return `<div class="student-preview">${avatar(student)}<div><strong>${escapeHTML(student.name)}</strong><span>${student.id} • ${student.program} ${student.year}</span></div></div><div class="restore-warning"><strong>This student will be hidden from active lists.</strong><p>Grades, attendance, advisor notes, and follow-ups will be kept. You can restore the record anytime from the Archived filter.</p></div><form id="archiveStudentForm" data-id="${student.id}"><div class="modal-footer"><button type="button" class="btn" data-action="close-modal">Cancel</button><button type="submit" class="btn btn-danger">${icon('archive')}Archive student</button></div></form>`;
  }
  if (type === 'backup') {
    const activeCount = activeStudents().length;
    const archivedCount = state.students.length - activeCount;
    return `<div class="backup-summary"><div><strong>${state.students.length}</strong><span>Total records</span></div><div><strong>${activeCount}</strong><span>Active</span></div><div><strong>${archivedCount}</strong><span>Archived</span></div></div><div class="backup-options"><button class="backup-option" data-action="download-backup"><span class="backup-option-icon green">${icon('download')}</span><span><strong>Download JSON backup</strong><small>Includes students, notes, grades, attendance, follow-ups, and archived records.</small></span>${icon('arrow-right')}</button><button class="backup-option" data-action="choose-backup"><span class="backup-option-icon blue">${icon('upload')}</span><span><strong>Restore from a backup</strong><small>Import a CampusTrack JSON file. You will confirm before anything is replaced.</small></span>${icon('arrow-right')}</button></div><input id="restoreFileInput" type="file" accept=".json,application/json" hidden /><div class="backup-note">${icon('shield')}<p>Browser storage is separate for every address and browser. Download a backup before clearing browser data, moving devices, or changing the app URL.</p></div>`;
  }
  if (type === 'restore') {
    const data = pendingRestore;
    if (!data) return '';
    return `<div class="student-preview"><div class="backup-option-icon blue">${icon('upload')}</div><div><strong>${escapeHTML(data.fileName)}</strong><span>${data.students.length} student records • ${data.archivedCount} archived</span></div></div><div class="restore-warning"><strong>This will replace your current workspace.</strong><p>Your current students, grades, attendance, notes, and follow-ups in this browser will be replaced by the backup. Download a backup first if you want to keep them.</p></div><div class="modal-footer"><button class="btn" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="confirm-restore">${icon('upload')}Replace & restore</button></div>`;
  }
  if (type === 'grade') {
    const student = getStudent(id);
    return `<form id="gradeForm" data-id="${student.id}"><div class="student-preview">${avatar(student)}<div><strong>${escapeHTML(student.name)}</strong><span>${student.id} • ${student.program} ${student.year}</span></div></div><div class="form-grid"><div class="form-field"><label for="midterm">Midterm grade (%)</label><input id="midterm" name="midterm" type="number" min="0" max="100" step="0.1" value="${student.midterm ?? ''}" placeholder="e.g. 88" required /></div><div class="form-field"><label for="final">Final grade (%)</label><input id="final" name="final" type="number" min="0" max="100" step="0.1" value="${student.final ?? ''}" placeholder="e.g. 90" required /></div><div class="form-field full"><small>GPA is calculated on a 4.0 scale using 40% midterm and 60% final grades. Academic alerts update automatically.</small></div></div><div class="modal-footer"><button type="button" class="btn" data-action="close-modal">Cancel</button><button type="submit" class="btn btn-primary">${icon('save')}Save grades</button></div></form>`;
  }
  if (type === 'intervention') {
    const student = getStudent(id);
    const eligible = activeStudents();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return `<form id="interventionForm"><div class="form-error" id="formError"></div><div class="form-grid"><div class="form-field full"><label for="interventionStudent">Student</label><select id="interventionStudent" name="studentId" required>${student ? `<option value="${student.id}">${escapeHTML(student.name)} • ${student.id}</option>` : eligible.map((item) => `<option value="${item.id}">${escapeHTML(item.name)} • ${item.id}</option>`).join('')}</select></div><div class="form-field"><label for="interventionType">Support type</label><select id="interventionType" name="type"><option>Advisor check-in</option><option>Academic coaching</option><option>Parent or guardian contact</option><option>Counseling referral</option></select></div><div class="form-field"><label for="interventionDate">Date</label><input id="interventionDate" name="date" type="date" value="${tomorrow.toISOString().slice(0, 10)}" required /></div><div class="form-field"><label for="interventionTime">Time</label><input id="interventionTime" name="time" type="time" value="10:00" required /></div><div class="form-field full"><label for="interventionNotes">Agenda or notes</label><textarea id="interventionNotes" name="notes" placeholder="What would you like to discuss or follow up on?" required maxlength="600"></textarea></div></div><div class="modal-footer"><button type="button" class="btn" data-action="close-modal">Cancel</button><button type="submit" class="btn btn-primary">${icon('calendar')}Schedule check-in</button></div></form>`;
  }
  if (type === 'help') return `<div class="help-content"><p>CampusTrack is a working demo with browser-based storage. Use it to organize student progress and practice supportive advising workflows.</p><div class="help-list"><div class="help-item">${icon('search')}<div><strong>Find students quickly</strong><span>Search by name, ID, email, program, or section. Press / to jump to search.</span></div></div><div class="help-item">${icon('shield')}<div><strong>Understand early alerts</strong><span>Attendance below 80% or GPA below 2.5 is high priority. Below 88% or GPA below 3.0 is monitored.</span></div></div><div class="help-item">${icon('save')}<div><strong>Your changes stay here</strong><span>Records, notes, grades, attendance, and follow-ups are stored locally in this browser.</span></div></div><div class="help-item">${icon('database')}<div><strong>Backup and move your workspace</strong><span>Use Backup & restore in the sidebar to download or import a complete JSON file, including archived students.</span></div></div></div><div class="modal-footer"><button class="btn btn-primary" data-action="close-modal">Got it</button></div></div>`;
  if (type === 'profile') return `<div class="student-preview"><div class="avatar avatar-sage avatar-lg">AR</div><div><strong>Alex Rivera</strong><span>Academic Advisor • City University</span></div></div><div class="drawer-contact"><div class="contact-item">${icon('mail')}<div><span>Email</span><strong>alex.rivera@campus.edu</strong></div></div><div class="contact-item">${icon('calendar')}<div><span>Academic year</span><strong>2026–2027</strong></div></div></div><div class="help-content" style="margin-top:18px"><p>${activeStudents().length} active and ${state.students.length - activeStudents().length} archived student records. All changes are saved to this browser only; use Backup & restore to move them safely.</p></div><div class="modal-footer"><button class="btn btn-primary" data-action="close-modal">Done</button></div>`;
  if (type === 'program') return `<div class="support-list">${Object.entries(PROGRAMS).map(([code, program]) => {
    const active = activeStudents();
    const count = active.filter((student) => student.program === code).length;
    return `<div class="support-card" style="grid-template-columns:1fr auto"><div><strong style="font-size:11px">${program.name}</strong><p style="margin:5px 0 0;color:var(--muted);font-size:9px">${code} • ${count} active students</p></div><span class="badge badge-green">${Math.round(count / Math.max(active.length, 1) * 100)}%</span></div>`;
  }).join('')}</div><div class="modal-footer"><button class="btn" data-action="close-modal">Close</button><button class="btn btn-primary" data-action="view-all-students">View student directory</button></div>`;
  return '';
}

function closeModal() {
  document.getElementById('modalBackdrop').hidden = true;
  document.getElementById('modal').innerHTML = '';
  document.body.style.overflow = '';
  pendingRestore = null;
}

function openStudent(id) {
  state.selectedStudentId = id;
  renderDrawer();
  document.getElementById('drawerBackdrop').hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  document.getElementById('drawerBackdrop').hidden = true;
  document.getElementById('studentDrawer').innerHTML = '';
  state.selectedStudentId = null;
  document.body.style.overflow = '';
}

function renderDrawer() {
  const student = getStudent(state.selectedStudentId);
  if (!student) return closeDrawer();
  const drawer = document.getElementById('studentDrawer');
  const notes = student.notes.slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));
  drawer.innerHTML = `<div class="drawer-top"><strong>Student profile</strong><button class="modal-close" data-action="close-drawer" aria-label="Close student profile">${icon('x')}</button></div><div class="drawer-body">
    <div class="drawer-profile">${avatar(student, 'avatar-lg')}<div><h2 id="drawerTitle">${escapeHTML(student.name)}</h2><p>${student.id} • ${PROGRAMS[student.program].name}</p></div></div>
    <div class="drawer-badges">${statusBadge(student)}${riskBadge(student)}<span class="badge badge-gray">Year ${student.year} • ${escapeHTML(student.section)}</span></div>
    <div class="drawer-actions">${student.archived ? `<button class="btn btn-primary" data-action="restore-student" data-id="${student.id}">${icon('upload')}Restore student</button><button class="btn" data-action="edit-student" data-id="${student.id}">${icon('edit')}Edit details</button>` : `<button class="btn" data-action="edit-student" data-id="${student.id}">${icon('edit')}Edit details</button><button class="btn btn-danger-soft" data-action="archive-student" data-id="${student.id}">${icon('archive')}Archive</button>`}</div>
    <div class="drawer-contact"><div class="contact-item">${icon('mail')}<div><span>Email address</span><strong>${escapeHTML(student.email)}</strong></div></div><div class="contact-item">${icon('phone')}<div><span>Contact number</span><strong>${escapeHTML(student.phone || 'Not provided')}</strong></div></div><div class="contact-item">${icon('user')}<div><span>Academic advisor</span><strong>Alex Rivera</strong></div></div><div class="contact-item">${icon('clock')}<div><span>Last active</span><strong>${escapeHTML(student.lastActive)}</strong></div></div></div>
    <section class="drawer-section"><div class="drawer-section-heading"><h3>Academic snapshot</h3><button class="btn-text" data-action="edit-grade" data-id="${student.id}">${icon('edit')}Update grades</button></div><div class="drawer-metrics"><div class="drawer-metric"><span>Attendance</span><strong>${student.attendance.toFixed(1)}%</strong><small>${student.attendance < 80 ? 'Immediate follow-up recommended' : student.attendance < 88 ? 'Monitor attendance pattern' : 'Meeting attendance expectations'}</small></div><div class="drawer-metric"><span>Current GPA</span><strong>${student.gpa == null ? '—' : student.gpa.toFixed(2)}</strong><small>${student.gpa == null ? 'Grades not yet entered' : 'On a 4.0 grading scale'}</small></div></div></section>
    <section class="drawer-section"><div class="risk-panel ${student.archived ? 'archived' : student.risk === 'low' ? 'low' : ''}"><div class="risk-panel-head">${icon(student.archived ? 'archive' : student.risk === 'low' ? 'check-circle' : 'alert')}${student.archived ? 'Archived student record' : student.risk === 'low' ? 'Currently on track' : student.risk === 'high' ? 'High-priority support recommended' : 'Monitor academic progress'}</div><ul>${student.archived ? '<li>Hidden from active dashboards and rosters.</li><li>All academic history and notes are preserved.</li>' : student.risk === 'low' ? '<li>No active attendance or GPA alerts.</li><li>Continue regular advisor check-ins.</li>' : (student.issues.length ? student.issues : ['Academic progress review']).map((issue) => `<li>${escapeHTML(issue)}</li>`).join('')}</ul></div></section>
    <section class="drawer-section"><div class="drawer-section-heading"><h3>Advisor notes</h3>${student.archived ? '' : `<button class="btn-text" data-action="schedule-student" data-id="${student.id}">${icon('calendar')}Schedule check-in</button>`}</div><form class="note-composer" id="noteForm" data-id="${student.id}"><textarea name="note" placeholder="Add a note about your conversation or observation..." required maxlength="800" aria-label="New advisor note"></textarea><div class="note-composer-footer"><span>Notes are visible in this workspace only</span><button class="btn btn-sm btn-primary" type="submit">${icon('send')}Add note</button></div></form><div class="note-timeline">${notes.length ? notes.map((note) => `<div class="note-item"><strong>${escapeHTML(note.author)}</strong><span>${escapeHTML(note.date)}</span><p>${escapeHTML(note.text)}</p></div>`).join('') : '<p style="color:var(--muted);font-size:10px">No advisor notes yet.</p>'}</div></section>
  </div>`;
  hydrateIcons(drawer);
}

function deriveAcademicState(student) {
  const issues = [];
  if (student.attendance < 80) issues.push('Attendance below 80%');
  else if (student.attendance < 88) issues.push('Attendance below 88%');
  if (student.gpa != null && student.gpa < 2.5) issues.push('GPA below 2.5');
  else if (student.gpa != null && student.gpa < 3) issues.push('GPA below 3.0');
  const high = student.attendance < 80 || (student.gpa != null && student.gpa < 2.5);
  const medium = student.attendance < 88 || (student.gpa != null && student.gpa < 3);
  return { issues, risk: high ? 'high' : medium ? 'medium' : 'low' };
}

function csvCell(value) {
  let text = value == null ? '' : String(value);
  if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
}

function exportCSV(students, filename) {
  if (!students.length) return showToast('There are no student records to export.');
  const headers = ['Student ID', 'Full name', 'Email', 'Program', 'Year', 'Section', 'Attendance %', 'Midterm %', 'Final %', 'GPA', 'Status'];
  const rows = students.map((student) => [student.id, student.name, student.email, PROGRAMS[student.program]?.name || student.program, student.year, student.section, student.attendance, student.midterm, student.final, student.gpa, studentStatus(student).label]);
  const csv = '\uFEFF' + [headers, ...rows].map((row) => row.map(csvCell).join(',')).join('\r\n');
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast(`Exported ${students.length} student record${students.length === 1 ? '' : 's'}.`);
}

function downloadBackup() {
  const payload = {
    app: 'CampusTrack',
    version: 1,
    exportedAt: new Date().toISOString(),
    students: state.students,
    attendance: state.attendance,
    followUps: state.followUps,
    notificationsRead: state.notificationsRead,
  };
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `campustrack-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast(`Backup downloaded with ${state.students.length} student records.`);
}

function normalizeBackup(payload) {
  if (!payload || typeof payload !== 'object' || payload.app !== 'CampusTrack' || payload.version !== 1) {
    throw new Error('This is not a valid CampusTrack backup.');
  }
  if (!Array.isArray(payload.students)) throw new Error('The backup has no valid student list.');
  if (!payload.attendance || typeof payload.attendance !== 'object' || Array.isArray(payload.attendance)) throw new Error('The backup has invalid attendance data.');
  if (!payload.followUps || typeof payload.followUps !== 'object' || Array.isArray(payload.followUps)) throw new Error('The backup has invalid follow-up data.');
  const ids = new Set();
  const emails = new Set();
  const gradeValue = (value, max, label) => {
    if (value == null || value === '') return null;
    const number = Number(value);
    if (!Number.isFinite(number) || number < 0 || number > max) throw new Error(`The backup contains an invalid ${label}.`);
    return Math.round(number * 10) / 10;
  };
  const students = payload.students.map((raw) => {
    if (!raw || typeof raw !== 'object') throw new Error('The backup contains an invalid student record.');
    const id = String(raw.id || '').trim();
    const name = String(raw.name || '').trim();
    const email = String(raw.email || '').trim().toLowerCase();
    const program = String(raw.program || '');
    const year = Number(raw.year);
    const section = String(raw.section || '').trim();
    const attendance = Number(raw.attendance);
    if (!/^[A-Za-z0-9_-]{1,30}$/.test(id)) throw new Error('A student record has an invalid ID.');
    if (ids.has(id.toLowerCase())) throw new Error('The backup contains duplicate student IDs.');
    if (!name || name.length > 80) throw new Error('A student record has an invalid name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 100) throw new Error('A student record has an invalid email.');
    if (emails.has(email)) throw new Error('The backup contains duplicate student emails.');
    if (!Object.hasOwn(PROGRAMS, program)) throw new Error('A student record has an unsupported program.');
    if (!Number.isInteger(year) || year < 1 || year > 4) throw new Error('A student record has an invalid year level.');
    if (!section || section.length > 30) throw new Error('A student record has an invalid section.');
    if (!Number.isFinite(attendance) || attendance < 0 || attendance > 100) throw new Error('A student record has invalid attendance.');
    ids.add(id.toLowerCase());
    emails.add(email);
    const midterm = gradeValue(raw.midterm, 100, 'midterm grade');
    const final = gradeValue(raw.final, 100, 'final grade');
    let gpa = gradeValue(raw.gpa, 4, 'GPA');
    if (gpa == null && midterm != null && final != null) gpa = Number((((midterm * .4) + (final * .6)) / 100 * 4).toFixed(2));
    const notes = Array.isArray(raw.notes) ? raw.notes.filter((note) => note && typeof note === 'object').map((note) => ({
      text: String(note.text || '').slice(0, 800),
      author: String(note.author || 'Alex Rivera').slice(0, 80),
      date: String(note.date || '').slice(0, 40),
    })).filter((note) => note.text) : [];
    const student = {
      id, name, email, phone: String(raw.phone || '').trim().slice(0, 30), program, year, section,
      attendance: Math.round(attendance * 10) / 10, midterm, final, gpa,
      isNew: Boolean(raw.isNew), archived: Boolean(raw.archived),
      lastActive: String(raw.lastActive || 'Not recorded').slice(0, 80), notes,
    };
    if (student.archived && raw.archivedAt) student.archivedAt = String(raw.archivedAt).slice(0, 40);
    Object.assign(student, deriveAcademicState(student));
    return student;
  });
  const attendanceData = {};
  Object.entries(payload.attendance).forEach(([key, value]) => {
    const separator = key.lastIndexOf('|');
    const date = key.slice(0, separator);
    const studentId = key.slice(separator + 1);
    if (separator < 0 || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !ids.has(studentId.toLowerCase()) || !['present', 'late', 'absent', 'excused'].includes(value)) {
      throw new Error('The backup contains invalid attendance entries.');
    }
    attendanceData[key] = value;
  });
  const followUps = {};
  Object.entries(payload.followUps).forEach(([studentId, raw]) => {
    if (!raw || typeof raw !== 'object' || !ids.has(studentId.toLowerCase())) throw new Error('The backup contains invalid follow-ups.');
    const type = String(raw.type || '').trim().slice(0, 80);
    const date = String(raw.date || '');
    const time = String(raw.time || '');
    if (!type || !/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) throw new Error('The backup contains an incomplete follow-up.');
    followUps[studentId] = { type, date, time, completed: Boolean(raw.completed) };
  });
  return {
    students, attendance: attendanceData, followUps,
    notificationsRead: Boolean(payload.notificationsRead),
    archivedCount: students.filter((student) => student.archived).length,
  };
}

async function loadBackupFile(event) {
  const input = event.target;
  const file = input.files?.[0];
  input.value = '';
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) return showToast('That backup is too large. Choose a JSON file under 10 MB.');
  try {
    const payload = JSON.parse(await file.text());
    const data = normalizeBackup(payload);
    pendingRestore = { ...data, fileName: file.name };
    openModal('restore');
  } catch (error) {
    showToast(`Restore failed: ${error.message}`);
  }
}

function confirmRestore() {
  if (!pendingRestore) return;
  const data = pendingRestore;
  state.students = data.students;
  state.attendance = data.attendance;
  state.followUps = data.followUps;
  state.notificationsRead = data.notificationsRead;
  state.selectedStudents = [];
  state.studentPage = 1;
  saveState();
  closeModal();
  render();
  showToast(`Restored ${data.students.length} student records from the backup.`);
}

function renderNotificationPanel() {
  const panel = document.getElementById('notificationPanel');
  const alerts = riskStudents().slice(0, 3);
  panel.innerHTML = `<div class="notification-heading"><strong>Notifications</strong><span>${alerts.length} active alerts</span></div>${alerts.map((student) => `<button class="notification-item" data-action="open-student" data-id="${student.id}"><span class="notification-dot">${icon('alert')}</span><div><strong>${escapeHTML(student.name)} needs attention</strong><p>${escapeHTML(student.issues[0] || 'Academic progress review')} • ${student.attendance.toFixed(1)}% attendance</p></div></button>`).join('') || '<div class="empty-state"><p>No new alerts.</p></div>'}`;
  hydrateIcons(panel);
}

function closeNotifications() {
  document.getElementById('notificationPanel').hidden = true;
  document.getElementById('notificationButton').setAttribute('aria-expanded', 'false');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}

document.addEventListener('click', (event) => {
  const pageButton = event.target.closest('[data-page]');
  if (pageButton) {
    navigate(pageButton.dataset.page);
    return;
  }
  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) {
    if (!event.target.closest('.notification-wrap')) closeNotifications();
    return;
  }
  const { action, id } = actionButton.dataset;
  if (action === 'add-student') openModal('add');
  if (action === 'edit-student') {
    closeDrawer();
    openModal('edit', id);
  }
  if (action === 'archive-student') {
    closeDrawer();
    openModal('archive', id);
  }
  if (action === 'restore-student') {
    const student = getStudent(id);
    if (student) {
      student.archived = false;
      delete student.archivedAt;
      saveState();
      render();
      renderDrawer();
      showToast(`${student.name} was restored to active tracking.`);
    }
  }
  if (action === 'open-data-tools') openModal('backup');
  if (action === 'download-backup') downloadBackup();
  if (action === 'choose-backup') document.getElementById('restoreFileInput')?.click();
  if (action === 'confirm-restore') confirmRestore();
  if (action === 'close-modal') closeModal();
  if (action === 'close-drawer') closeDrawer();
  if (action === 'open-student') {
    closeNotifications();
    openStudent(id);
  }
  if (action === 'export-report') exportCSV(activeStudents().filter((student) => state.dashboardProgram === 'all' || student.program === state.dashboardProgram), 'campustrack-report.csv');
  if (action === 'export-students') exportCSV(getFilteredStudents(), 'campustrack-students.csv');
  if (action === 'export-grades') exportCSV(activeStudents().filter((student) => state.gradeProgram === 'all' || student.program === state.gradeProgram), 'campustrack-grades.csv');
  if (action === 'export-selected') exportCSV(activeStudents().filter((student) => state.selectedStudents.includes(student.id)), 'campustrack-selected-students.csv');
  if (action === 'clear-filters') {
    state.search = '';
    state.programFilter = 'all';
    state.statusFilter = 'all';
    document.getElementById('globalSearch').value = '';
    renderPage();
  }
  if (action === 'student-page') {
    const page = Number(actionButton.dataset.number);
    const total = Math.max(1, Math.ceil(getFilteredStudents().length / 8));
    if (page >= 1 && page <= total) state.studentPage = page;
    renderPage();
  }
  if (action === 'chart-metric') {
    state.chartMetric = actionButton.dataset.metric;
    renderPage();
  }
  if (action === 'filter-program') {
    state.programFilter = actionButton.dataset.program;
    state.search = '';
    state.studentPage = 1;
    document.getElementById('globalSearch').value = '';
    navigate('students');
  }
  if (action === 'program-details') openModal('program');
  if (action === 'view-all-students') {
    closeModal();
    navigate('students');
  }
  if (action === 'mark-all-present') {
    attendanceRoster().forEach((student) => { state.attendance[attendanceKey(student.id)] = 'present'; });
    state.attendanceDirty = true;
    renderPage();
    showToast('All students marked present. Save to confirm.');
  }
  if (action === 'save-attendance') {
    if (!attendanceRoster().length) return showToast('There are no students in this roster.');
    saveState();
    state.attendanceDirty = false;
    renderPage();
    showToast(`Attendance saved for ${attendanceRoster().length} students.`);
  }
  if (action === 'view-attendance-alerts') {
    state.page = 'support';
    state.supportTab = 'attention';
    render();
  }
  if (action === 'edit-grade') {
    closeDrawer();
    openModal('grade', id);
  }
  if (action === 'schedule-student') {
    closeDrawer();
    openModal('intervention', id);
  }
  if (action === 'schedule-checkin') openModal('intervention');
  if (action === 'support-tab') {
    state.supportTab = actionButton.dataset.tab;
    renderPage();
  }
  if (action === 'complete-followup') {
    if (state.followUps[id]) {
      state.followUps[id].completed = true;
      const student = getStudent(id);
      if (student) {
        student.notes.unshift({ text: `Completed ${state.followUps[id].type.toLowerCase()}. Follow-up recorded as complete.`, author: 'Alex Rivera', date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) });
      }
      saveState();
      renderPage();
      showToast('Follow-up marked complete.');
    }
  }
});

document.addEventListener('change', (event) => {
  const target = event.target;
  if (target.id === 'restoreFileInput') {
    loadBackupFile(event);
    return;
  }
  if (target.id === 'dashboardProgram') {
    state.dashboardProgram = target.value;
    renderPage();
  }
  if (target.id === 'studentProgram') {
    state.programFilter = target.value;
    state.studentPage = 1;
    renderPage();
  }
  if (target.id === 'studentStatus') {
    state.statusFilter = target.value;
    state.studentPage = 1;
    renderPage();
  }
  if (target.id === 'gradeProgram') {
    state.gradeProgram = target.value;
    renderPage();
  }
  if (target.id === 'attendanceProgram') {
    state.attendanceProgram = target.value;
    state.attendanceSection = 'all';
    state.attendanceDirty = false;
    renderPage();
  }
  if (target.id === 'attendanceSection') {
    state.attendanceSection = target.value;
    state.attendanceDirty = false;
    renderPage();
  }
  if (target.id === 'attendanceDate') {
    state.attendanceDate = target.value;
    state.attendanceDirty = false;
    renderPage();
  }
  if (target.dataset.attendanceId) {
    state.attendance[attendanceKey(target.dataset.attendanceId)] = target.value;
    target.className = `status-select ${target.value}`;
    state.attendanceDirty = true;
    updateAttendanceStats();
    const footer = document.querySelector('.attendance-table-card .table-footer span');
    if (footer) footer.textContent = 'You have unsaved attendance changes.';
  }
  if (target.id === 'selectAllStudents') {
    const filtered = getFilteredStudents();
    const start = (state.studentPage - 1) * 8;
    const visible = filtered.slice(start, start + 8).map((student) => student.id);
    state.selectedStudents = target.checked ? [...new Set([...state.selectedStudents, ...visible])] : state.selectedStudents.filter((studentId) => !visible.includes(studentId));
    renderPage();
  }
  if (target.classList.contains('student-checkbox')) {
    state.selectedStudents = target.checked ? [...new Set([...state.selectedStudents, target.dataset.id])] : state.selectedStudents.filter((studentId) => studentId !== target.dataset.id);
    renderPage();
  }
});

document.addEventListener('input', (event) => {
  if (event.target.id === 'globalSearch') {
    state.search = event.target.value;
    state.studentPage = 1;
    state.selectedStudents = [];
    if (state.page !== 'students') {
      state.page = 'students';
      render();
    } else {
      renderPage();
    }
  }
  if (event.target.id === 'studentSearch') {
    state.search = event.target.value;
    state.studentPage = 1;
    renderPage();
    const input = document.getElementById('studentSearch');
    input?.focus();
    input?.setSelectionRange(input.value.length, input.value.length);
  }
});

document.addEventListener('submit', (event) => {
  const form = event.target;
  const formId = form.getAttribute('id');
  if (!['addStudentForm', 'editStudentForm', 'gradeForm', 'interventionForm', 'noteForm', 'archiveStudentForm'].includes(formId)) return;
  event.preventDefault();
  const data = new FormData(form);
  if (formId === 'addStudentForm') {
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const requestedId = String(data.get('id') || '').trim();
    const program = String(data.get('program'));
    const year = Number(data.get('year'));
    const maxId = Math.max(0, ...state.students.map((student) => Number(student.id.split('-').pop()) || 0));
    const id = requestedId || `STU-2026-${String(maxId + 1).padStart(3, '0')}`;
    const error = document.getElementById('formError');
    if (!name || !email) return showFormError(error, 'Please enter the student’s name and email.');
    if (!/^[A-Za-z0-9_-]+$/.test(id)) return showFormError(error, 'Student IDs may only use letters, numbers, hyphens, and underscores.');
    if (state.students.some((student) => student.id.toLowerCase() === id.toLowerCase())) return showFormError(error, 'That student ID is already in use.');
    if (state.students.some((student) => student.email.toLowerCase() === email.toLowerCase())) return showFormError(error, 'A student with that email already exists.');
    const student = {
      id, name, email, phone: String(data.get('phone') || '').trim(), program, year,
      section: `${PROGRAMS[program].prefix} ${year}-A`, attendance: 100, gpa: null, midterm: null, final: null,
      risk: 'low', issues: [], isNew: true, lastActive: 'Not yet active',
      notes: [{ text: 'Student record created. Grades and attendance will appear as activity is recorded.', author: 'Alex Rivera', date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }],
    };
    state.students.unshift(student);
    saveState();
    closeModal();
    state.search = '';
    state.programFilter = 'all';
    state.statusFilter = 'all';
    state.studentPage = 1;
    document.getElementById('globalSearch').value = '';
    render();
    showToast(`${name} was added successfully.`);
  }
  if (formId === 'editStudentForm') {
    const student = getStudent(form.dataset.id);
    if (!student) return showToast('That student record could not be found.');
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const program = String(data.get('program'));
    const year = Number(data.get('year'));
    const section = String(data.get('section') || '').trim();
    const error = document.getElementById('formError');
    if (!name || !email || !section) return showFormError(error, 'Please complete the name, email, and section.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showFormError(error, 'Enter a valid email address.');
    if (!Object.hasOwn(PROGRAMS, program) || !Number.isInteger(year) || year < 1 || year > 4) return showFormError(error, 'Choose a valid program and year level.');
    if (state.students.some((item) => item.id !== student.id && item.email.toLowerCase() === email.toLowerCase())) return showFormError(error, 'A student with that email already exists.');
    Object.assign(student, { name, email, phone, program, year, section });
    saveState();
    closeModal();
    render();
    showToast(`Details updated for ${name}.`);
  }
  if (formId === 'archiveStudentForm') {
    const student = getStudent(form.dataset.id);
    if (!student || student.archived) return showToast('That student record is already archived.');
    student.archived = true;
    student.archivedAt = new Date().toISOString();
    state.selectedStudents = state.selectedStudents.filter((studentId) => studentId !== student.id);
    saveState();
    closeModal();
    render();
    showToast(`${student.name} was archived. Restore them from the Archived filter.`);
  }
  if (formId === 'gradeForm') {
    const student = getStudent(form.dataset.id);
    const midterm = Number(data.get('midterm'));
    const final = Number(data.get('final'));
    if (!student || !Number.isFinite(midterm) || !Number.isFinite(final) || midterm < 0 || midterm > 100 || final < 0 || final > 100) return showToast('Enter valid grades between 0 and 100.');
    student.midterm = Math.round(midterm * 10) / 10;
    student.final = Math.round(final * 10) / 10;
    student.gpa = Number((((midterm * .4) + (final * .6)) / 100 * 4).toFixed(2));
    student.isNew = false;
    Object.assign(student, deriveAcademicState(student));
    saveState();
    closeModal();
    render();
    showToast(`Grades updated for ${student.name}.`);
  }
  if (formId === 'interventionForm') {
    const student = getStudent(String(data.get('studentId')));
    const type = String(data.get('type'));
    const date = String(data.get('date'));
    const time = String(data.get('time'));
    const notes = String(data.get('notes') || '').trim();
    if (!student || !date || !time || !notes) return showFormError(document.getElementById('formError'), 'Please complete all fields.');
    state.followUps[student.id] = { type, date, time, completed: false };
    student.notes.unshift({ text: `Scheduled ${type.toLowerCase()} for ${formatShortDate(date)} at ${time}. ${notes}`, author: 'Alex Rivera', date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) });
    saveState();
    state.supportTab = 'scheduled';
    closeModal();
    navigate('support');
    showToast(`Check-in scheduled with ${student.name}.`);
  }
  if (formId === 'noteForm') {
    const student = getStudent(form.dataset.id);
    const note = String(data.get('note') || '').trim();
    if (!student || !note) return;
    student.notes.unshift({ text: note, author: 'Alex Rivera', date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) });
    saveState();
    renderDrawer();
    showToast('Advisor note added.');
  }
});

function showFormError(element, message) {
  if (!element) return;
  element.textContent = message;
  element.classList.add('visible');
}

document.getElementById('menuButton').addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('open');
});
document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);
document.getElementById('notificationButton').addEventListener('click', () => {
  const panel = document.getElementById('notificationPanel');
  panel.hidden = !panel.hidden;
  document.getElementById('notificationButton').setAttribute('aria-expanded', String(!panel.hidden));
  if (!panel.hidden) {
    state.notificationsRead = true;
    saveState();
    document.getElementById('notificationButton').querySelector('i').hidden = true;
  }
});
document.getElementById('dataToolsButton').addEventListener('click', () => openModal('backup'));
document.getElementById('helpButton').addEventListener('click', () => openModal('help'));
document.getElementById('profileButton').addEventListener('click', () => openModal('profile'));
document.getElementById('topbarProfile').addEventListener('click', () => openModal('profile'));
document.getElementById('modalBackdrop').addEventListener('click', (event) => { if (event.target.id === 'modalBackdrop') closeModal(); });
document.getElementById('drawerBackdrop').addEventListener('click', (event) => { if (event.target.id === 'drawerBackdrop') closeDrawer(); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
    closeDrawer();
    closeNotifications();
    closeSidebar();
  }
  if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    document.getElementById('globalSearch').focus();
  }
});
window.addEventListener('popstate', () => {
  state.page = pageFromHash();
  state.selectedStudents = [];
  closeModal();
  closeDrawer();
  render();
});

hydrateIcons();
render();
