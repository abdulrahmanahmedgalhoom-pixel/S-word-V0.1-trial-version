// ============================
// أوامر التنسيق
// ============================

function bindCommand(button, command, value = null) {

    if (!button) return;

    button.addEventListener("mousedown", function(e){

        e.preventDefault();

    });

    button.addEventListener("click", function(){

        editor.focus();

        restoreSelection();

        document.execCommand(command, false, value);

        saveSelection();

    });

}

// تنسيقات النص

bindCommand(boldBtn, "bold");
bindCommand(italicBtn, "italic");
bindCommand(underlineBtn, "underline");

bindCommand(undoBtn, "undo");
bindCommand(redoBtn, "redo");

// زر Normal

if(normalBtn){

    normalBtn.addEventListener("mousedown", function(e){

        e.preventDefault();

    });

    normalBtn.addEventListener("click", function(){

        editor.focus();

        restoreSelection();

        document.execCommand("removeFormat");

        document.execCommand("fontName", false, "inherit");

        saveSelection();

    });

}