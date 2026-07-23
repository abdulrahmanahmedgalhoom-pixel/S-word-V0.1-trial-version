// ============================
// Dark Mode
// ============================

if(darkModeBtn){

    darkModeBtn.addEventListener("click", function(){

        document.body.classList.toggle("dark");

        editor.classList.toggle("dark-editor");

    });

}
/* ============================================================
   Commands/DarkMode.js
   DarkMode---1              -> تفعيل الوضع الداكن (بعد تأكيد Sure [y/n])
   DarkModeIn---1h/30m/10s   -> تفعيل الوضع الداكن بعد مدة معينة
   DarkModeFor---30m/1h      -> تفعيل الوضع الداكن لمدة معينة ثم الرجوع تلقائيًا

   يدعم الصيغ: s (ثواني), m (دقائق), h (ساعات)، بما فيها الأرقام العشرية مثل 1.5h

   ⚠️ تصليح: الأوامر بقت تستخدم نفس الكلاسات اللي زر Dark Mode العادي
   بيستخدمها ("dark" على body و "dark-editor" على editor)، بدل كلاس
   "dark-mode" اللي مكنش ليه أي تنسيق في sword.css، فكانت الأوامر
   بتتنفذ من غير ما يظهر أي تغيير فعلي في الشكل.
   ============================================================ */

(function () {
  let revertTimeoutId = null;

  function enableDarkMode() {
    document.body.classList.add('dark');
    editor.classList.add('dark-editor');
    Terminal.log('Dark mode enabled.', 'success');
  }

  function disableDarkMode() {
    document.body.classList.remove('dark');
    editor.classList.remove('dark-editor');
    Terminal.log('Dark mode disabled.', 'info');
  }

  // يحول قيمة مثل "1h" أو "30m" أو "10s" أو "1.5h" إلى ميلي ثانية
  function parseDuration(value) {
    const match = /^(\d+(\.\d+)?)(h|m|s)$/i.exec((value || '').trim());
    if (!match) return null;
    const amount = parseFloat(match[1]);
    const unit = match[3].toLowerCase();
    const multipliers = { h: 3600000, m: 60000, s: 1000 };
    return amount * multipliers[unit];
  }

  Terminal.registerCommand('DarkMode', (args) => {
    if (args[0] !== '1') {
      Terminal.log('Usage: DarkMode---1', 'error');
      return;
    }
    Terminal.askConfirm('Enable dark mode?', enableDarkMode);
  });

  Terminal.registerCommand('DarkModeIn', (args) => {
    const ms = parseDuration(args[0]);
    if (ms === null) {
      Terminal.log('Usage: DarkModeIn---10s | 30m | 1h | 1.5h', 'error');
      return;
    }
    Terminal.log(`Dark mode will turn on in ${args[0]}.`, 'info');
    setTimeout(enableDarkMode, ms);
  });

  Terminal.registerCommand('DarkModeFor', (args) => {
    const ms = parseDuration(args[0]);
    if (ms === null) {
      Terminal.log('Usage: DarkModeFor---30m | 1h', 'error');
      return;
    }
    enableDarkMode();
    if (revertTimeoutId) clearTimeout(revertTimeoutId);
    revertTimeoutId = setTimeout(() => {
      disableDarkMode();
      revertTimeoutId = null;
    }, ms);
  });
})();