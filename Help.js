/* ============================================================
   Commands/Help.js
   HALP---Topic  أو  HELP---Topic
   نظام مساعدة قابل للتوسع بدون تعديل هذا الملف:
   أي ملف آخر (حتى مستقبلًا) يقدر يضيف موضوع جديد عبر:
     window.registerHelpTopic('topicName', ['line 1', 'line 2']);
   ============================================================ */

(function () {
  const helpTopics = {
    alignment: [
      'Alignment commands help you align the current selection or the whole document.',
      'Use the Alignment button in the toolbar, or select a paragraph and choose left/center/right/justify.'
    ],
    darkmode: [
      'DarkMode---1            : enable dark mode (asks for confirmation).',
      'DarkModeIn---1h/30m/10s : enable dark mode after a delay.',
      'DarkModeFor---30m/1h    : enable dark mode for a limited time, then revert automatically.'
    ],
    saveauto: [
      'SaveAuto---1      : enable auto save to LocalStorage every 1 minute.',
      'SaveAuto---status : stop auto save.'
    ],
    export: [
      'SaveAutoExport---txt|html|swd---1 : enable auto export every 1 minute.',
      'You will be asked for a file name, then asked to confirm before it starts.'
    ]
  };

  function showHelp(topic) {
    const key = (topic || '').toLowerCase();
    if (!key) {
      Terminal.log('Available topics: ' + Object.keys(helpTopics).join(', '), 'info');
      return;
    }
    const lines = helpTopics[key];
    if (!lines) {
      Terminal.log('No help found for "' + topic + '".', 'error');
      return;
    }
    lines.forEach((line) => Terminal.log(line, 'info'));
  }

  Terminal.registerCommand('HALP', (args) => showHelp(args[0]));
  Terminal.registerCommand('HELP', (args) => showHelp(args[0]));

  window.registerHelpTopic = function (name, lines) {
    helpTopics[name.toLowerCase()] = lines;
  };
})();
