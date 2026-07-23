// ============================
// حجم الخط
// ============================

function applyFontSizeToSelection(size){

    document.execCommand("fontSize", false, "7");

    const fontElements = editor.querySelectorAll('font[size="7"]');

    fontElements.forEach(function(fontEl){

        const span = document.createElement("span");

        span.style.fontSize = size;

        while(fontEl.firstChild){

            span.appendChild(fontEl.firstChild);

        }

        fontEl.parentNode.replaceChild(span, fontEl);

    });

}

// تغيير حجم النص المحدد

if(refreshSize){

    refreshSize.addEventListener("mousedown", function(e){

        e.preventDefault();

    });

    refreshSize.addEventListener("click", function(){

        if(!savedRange || savedRange.collapsed){

            alert("حدد كلمة أولاً");

            return;

        }

        const size = fontSize.value + "px";

        editor.focus();

        restoreSelection();

        applyFontSizeToSelection(size);

        saveSelection();

    });

}

// تغيير حجم كل النص

if(refreshSizeAll){

    refreshSizeAll.addEventListener("mousedown", function(e){

        e.preventDefault();

    });

    refreshSizeAll.addEventListener("click", function(){

        const size = fontSize.value + "px";

        editor.querySelectorAll("*").forEach(function(element){

            element.style.fontSize = size;

        });

        editor.style.fontSize = size;

    });

}