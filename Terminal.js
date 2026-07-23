/* ============================================================
   Terminal.js
   المحرك الأساسي لـ Sword Terminal System
   - يدير فتح/غلق نافذة التيرمينال
   - يستقبل الأوامر ويحللها (Parser)
   - يدير نظام التأكيد "Sure [y/n]" وطلب إدخال بيانات من المستخدم
   - يوفر Terminal.registerCommand() لإضافة أوامر جديدة من أي ملف آخر

   ملاحظة مهمة:
   هذا الملف يعتمد على وجود الـ const التالية معرّفة مسبقًا
   في ملف elements.js (يجب تحميل elements.js قبل هذا الملف):
     - trmnilElement  -> document.getElementById('trmnil')
     - terminalInput  -> document.getElementById('terminalInput')
   ============================================================ */

(function () {
  const state = {
    isOpen: false,
    commands: {},
    pending: null // { callback } - في انتظار رد المستخدم (confirm أو input)
  };

  let outputEl = null;

  // ---------- بناء عنصر الإخراج (اللوج) داخل #trmnil ----------
  function buildOutput() {
    if (outputEl || !trmnilElement) return;
    outputEl = document.createElement('div');
    outputEl.id = 'trmnilOutput';
    trmnilElement.insertBefore(outputEl, terminalInput);
  }

  function log(message, type = 'info') {
    buildOutput();
    if (!outputEl) return;
    const line = document.createElement('div');
    line.className = 'trmnil-line trmnil-' + type;
    line.textContent = message;
    outputEl.appendChild(line);
    outputEl.scrollTop = outputEl.scrollHeight;
  }

  // ---------- فتح / غلق / تبديل التيرمينال ----------
  // ملاحظة: التصميم والأنيميشن نفسه (ظهور/اختفاء) يُبنى في ملف الأنيميشن
  // الخاص بك عبر كلاس "trmnil-active" الذي يضاف/يُحذف هنا.
  function openTerminal() {
    if (!trmnilElement) return;
    buildOutput();
    trmnilElement.classList.add('trmnil-active');
    state.isOpen = true;
    terminalInput.focus();
  }

  function closeTerminal() {
    if (!trmnilElement) return;
    trmnilElement.classList.remove('trmnil-active');
    state.isOpen = false;
  }

  function toggleTerminal() {
    state.isOpen ? closeTerminal() : openTerminal();
  }

  // ---------- تسجيل الأوامر (Command Registry) ----------
  function registerCommand(name, handler) {
    state.commands[name.toLowerCase()] = handler;
  }

  // ---------- الـ Parser ----------
  // الصيغة العامة: Command---Value  أو  Command---Value---Time
  function parseCommand(raw) {
    const parts = raw.split('---').map((p) => p.trim());
    return { name: parts[0], args: parts.slice(1) };
  }

  // ---------- نظام الأسئلة (Confirm / Input) ----------
  function ask(message, callback) {
    log(message, 'prompt');
    state.pending = { callback };
  }

  // يعرض "... Sure [y/n]" وينتظر y أو n
  function askConfirm(message, onYes, onNo) {
    ask(message + ' Sure [y/n]', (answer) => {
      const a = answer.toLowerCase();
      if (a === 'y') {
        onYes && onYes();
      } else if (a === 'n') {
        log('Cancelled.', 'info');
        onNo && onNo();
      } else {
        log('Please answer y or n.', 'error');
        askConfirm(message, onYes, onNo);
      }
    });
  }

  // يعرض رسالة مثل "Enter file name--" وينتظر أي نص من المستخدم
  function askInput(message, callback) {
    ask(message, callback);
  }

  // ---------- استقبال الإدخال من المستخدم ----------
  function handleInput(raw) {
    if (raw.trim() === '') return;

    // لو في سؤال معلّق (confirm/input) الرد الحالي يخصه
    if (state.pending) {
      const pending = state.pending;
      state.pending = null;
      log('> ' + raw, 'echo');
      pending.callback(raw.trim());
      return;
    }

    log('> ' + raw, 'echo');
    const { name, args } = parseCommand(raw);
    const handler = state.commands[name.toLowerCase()];

    if (!handler) {
      log('Unknown command: ' + name, 'error');
      return;
    }

    handler(args);
  }

  // ---------- التهيئة ----------
  function init() {
    if (typeof terminalInput === 'undefined' || typeof trmnilElement === 'undefined') {
      console.error(
        'Terminal.js: تأكد من تعريف trmnilElement و terminalInput في elements.js، وتحميله قبل Terminal.js'
      );
      return;
    }

    // تنفيذ الأمر بزر Enter فقط (بدون أي زر ماوس)
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const value = terminalInput.value;
        terminalInput.value = '';
        handleInput(value);
      }
    });

    // اختصار فتح/غلق التيرمينال بزر ` (يمكن تغييره بسهولة هنا)
    document.addEventListener('keydown', (e) => {
      if (e.key === '`') {
        e.preventDefault();
        toggleTerminal();
      }
    });
  }

  // ---------- الواجهة العامة (Public API) ----------
  // كل ملفات الأوامر (Commands/*.js) تستخدم هذا الأوبجكت العالمي
  window.Terminal = {
    registerCommand,
    log,
    askConfirm,
    askInput,
    open: openTerminal,
    close: closeTerminal,
    toggle: toggleTerminal
  };

  document.addEventListener('DOMContentLoaded', init);
})();
