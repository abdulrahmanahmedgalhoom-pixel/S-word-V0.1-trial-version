# S-word-V0.1-trial-version
hallo/اهلا
S-word Editor

Sword Editor is a free and open-source text editor built with HTML, CSS, and Vanilla JavaScript.

The goal of this project is to provide a lightweight, fast, and modern text editor with useful editing tools and a built-in command terminal.

«Project Status: Experimental (Under Active Development)»

---

✨ Features

- 📝 Rich text editing
- 💾 Save documents
- 📂 Open existing files
- 📤 Export to multiple formats
- 🔍 Search & Replace
- 🎨 Text Color
- 🖍️ Highlight Text
- 🔤 Font Family
- 🔠 Font Size
- 📐 Text Alignment
- ↩️ Undo / Redo
- 🌙 Dark Mode
- 🖼️ Insert Images
- 📏 Resize Images
- ❌ Delete Images
- ⌨️ Built-in Terminal Commands

---

💻 Sword Terminal

Sword Editor includes a built-in terminal that allows users to execute editor commands.

Example:

DarkMode---1
DarkModeIn---1h
DarkModeFor---30m

More commands will be added in future releases.

---

🛠 Technologies

- HTML5
- CSS3
- JavaScript (Vanilla)

---

🚀 Getting Started

Clone the repository:

git clone https://github.com/YOUR_USERNAME/Sword-Editor.git

Open:

index.html

in any modern web browser.

---

🗺 Roadmap

- Improve Terminal System
- Add More Commands
- Plugin System
- Better Performance
- Keyboard Shortcuts
- More Export Formats
- Better UI/UX
- Fix Remaining Bugs

---

🤝 Contributing

Contributions are welcome.

You can:

- Open an Issue
- Submit a Pull Request
- Suggest New Features

---

📄 License

This project is licensed under the MIT License.

---

❤️ Thanks

Thank you for using Sword Editor and supporting the project.
Every suggestion and contribution helps make the editor better.
--------------------------------------------------------
S-word Editor

Sword Editor هو محرر نصوص مجاني ومفتوح المصدر تم تطويره باستخدام HTML و CSS و JavaScript.

يهدف المشروع إلى توفير محرر نصوص سريع وخفيف مع أدوات متقدمة وواجهة بسيطة وسهلة الاستخدام، بالإضافة إلى نظام أوامر مدمج (Terminal).

«حالة المشروع: تجريبي وما زال قيد التطوير.»

---

✨ المميزات

- 📝 تحرير النصوص.
- 💾 حفظ الملفات.
- 📂 فتح الملفات.
- 📤 التصدير بصيغ متعددة.
- 🔍 البحث والاستبدال.
- 🎨 تغيير لون النص.
- 🖍️ تمييز النص.
- 🔤 تغيير نوع الخط.
- 🔠 تغيير حجم الخط.
- 📐 محاذاة النص.
- ↩️ التراجع.
- ↪️ إعادة التراجع.
- 🌙 الوضع الداكن.
- 🖼️ إدراج الصور.
- 📏 تغيير حجم الصور.
- ❌ حذف الصور.
- ⌨️ نظام Terminal لتنفيذ الأوامر.

---

💻 Sword Terminal

يحتوي Sword Editor على Terminal مدمج يسمح بتنفيذ أوامر مباشرة داخل المحرر.

أمثلة:

DarkMode---1
DarkModeIn---1h
DarkModeFor---30m

وسيتم إضافة المزيد من الأوامر في الإصدارات القادمة.

---

🛠 التقنيات المستخدمة

- HTML5
- CSS3
- JavaScript

---

🚀 تشغيل المشروع

قم بتنزيل المشروع أو استنساخه:

git clone https://github.com/YOUR_USERNAME/Sword-Editor.git

بعد ذلك افتح ملف:

index.html

في أي متصفح حديث.

---

📌 خطة التطوير

- تطوير نظام Terminal.
- إضافة أوامر جديدة.
- دعم الإضافات (Plugins).
- تحسين الأداء.
- دعم اختصارات لوحة المفاتيح.
- إضافة صيغ تصدير جديدة.
- تحسين واجهة المستخدم.
- إصلاح جميع الأخطاء الحالية.

---

🤝 المساهمة

نرحب بجميع المساهمات.

يمكنك:

- فتح Issue للإبلاغ عن مشكلة.
- إرسال Pull Request.
- اقتراح ميزات جديدة.

---

📄 الترخيص

هذا المشروع مفتوح المصدر تحت ترخيص MIT License.

---

❤️ شكرًا

شكرًا لكل من يستخدم Sword Editor أو يساهم في تطويره.

كل فكرة أو مساهمة تساعد في جعل المشروع أفضل للجميع.
Command System Documentation

Overview

This project includes an internal command system that allows users to control different features using simple text commands.

The command system provides quick access to help topics, Dark Mode controls, automatic saving, and automatic file exporting.

---

Available Commands

Help Commands

"HALP"

Displays all available help topics and supported commands.

"HALP---darkmode"

Shows detailed information about all Dark Mode commands and how to use them.

---

Dark Mode Commands

"DarkMode---1"

Activates Dark Mode after user confirmation.

Usage:

DarkMode---1

The system will display:

Sure [y/n]

Enter:

y

and press Enter to enable Dark Mode instantly.

---

"DarkModeFor---10s"

Enables Dark Mode immediately.

After 10 seconds, the interface automatically returns to normal mode.

---

"DarkModeIn---5s"

Schedules Dark Mode activation.

The system waits for 5 seconds, then automatically enables Dark Mode.

---

Auto Save Commands

"SaveAuto---1"

Enables automatic saving.

Features:

- Displays a confirmation message immediately.
- Saves the current work automatically every minute.

---

"SaveAuto---status"

Disables automatic saving.

After using this command, automatic saving will stop.

---

Auto Export Commands

"SaveAutoExport---txt---1"

Automatically exports a TXT copy every minute.

Steps:

1. Run the command:

SaveAutoExport---txt---1

2. The system asks:

Enter file name--

3. Enter a file name, for example:

test

4. Press Enter.

5. The system asks:

Sure [y/n]

6. Enter:

y

7. Automatic TXT exporting starts every minute.

---

Notes

- Commands are case-sensitive.
- Always follow the confirmation messages before enabling features.
- This command system is designed to provide a fast and simple way to control application features.
- More commands may be added in future versions.
