/* ============================================================
   Commands/SaveAuto.js
   SaveAuto---1        -> تفعيل الحفظ التلقائي كل دقيقة داخل LocalStorage
   SaveAuto---status   -> إيقاف الحفظ التلقائي

   ملاحظة: يعتمد على وجود const باسم "editor" معرّف في elements.js
   ============================================================ */

(function () {
  let intervalId = null;

  function startAutoSave() {
    if (intervalId) {
      Terminal.log('Auto save is already running.', 'info');
      return;
    }
    intervalId = setInterval(() => {
      const content = typeof editor !== 'undefined' ? editor.innerHTML : '';
      localStorage.setItem('sword_autosave', content);
      Terminal.log('Auto-saved to LocalStorage.', 'success');
    }, 60 * 1000);
    Terminal.log('Auto save enabled (every 1 minute).', 'success');
  }

  function stopAutoSave() {
    if (!intervalId) {
      Terminal.log('Auto save is not running.', 'info');
      return;
    }
    clearInterval(intervalId);
    intervalId = null;
    Terminal.log('Auto save stopped.', 'info');
  }

  Terminal.registerCommand('SaveAuto', (args) => {
    const value = args[0];
    if (value === '1') {
      startAutoSave();
    } else if (value === 'status') {
      stopAutoSave();
    } else {
      Terminal.log('Usage: SaveAuto---1 | SaveAuto---status', 'error');
    }
  });
})();
