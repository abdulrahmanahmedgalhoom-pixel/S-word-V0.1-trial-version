// ============================
// FontWord
// ============================

let lastSelectedFont = null;

// ⚠️ إضافة: قائمة الخطوط دي كانت المفروض تتكتب كأزرار يدوي في
// الـ HTML جوه fontWordMenu، لكنها مكنتش موجودة، فكانت القائمة
// بتفتح فاضية. دلوقتي بتتولّد تلقائي بالكود.
const FONT_WORD_LIST = [
    { name: "Arial", value: "Arial, sans-serif" },
    { name: "Times New Roman", value: "'Times New Roman', serif" },
    { name: "Courier New", value: "'Courier New', monospace" },
    { name: "Georgia", value: "Georgia, serif" },
    { name: "Verdana", value: "Verdana, sans-serif" },
    { name: "Tahoma", value: "Tahoma, sans-serif" },
    { name: "Comic Sans MS", value: "'Comic Sans MS', cursive" },
    { name: "Impact", value: "Impact, sans-serif" }
];


// تطبيق الخط على زر
function applyFontButton(btn){

    btn.addEventListener("mousedown", function(e){

        e.preventDefault();

    });


    btn.addEventListener("click", function(){


        if(!savedRange){

            alert("حدد كلمة أولاً");

            return;

        }


        editor.focus();

        restoreSelection();


        document.execCommand(
            "fontName",
            false,
            btn.dataset.font
        );


        lastSelectedFont = btn.dataset.font;


        saveSelection();


    });

}



// ============================
// فتح قائمة الخطوط
// ============================

if(fontWordBtn && fontWordMenu){

    fontWordBtn.addEventListener("mousedown", function(e){

        e.preventDefault();

    });


    fontWordBtn.addEventListener("click", function(){

        fontWordMenu.classList.toggle("show");

    });

}



// ============================
// توليد أزرار الخطوط تلقائيًا
// ============================

if(fontWordMenu){

    FONT_WORD_LIST.forEach(function(font){

        const btn = document.createElement("button");

        btn.className = "font-option";
        btn.dataset.font = font.value;
        btn.innerText = font.name;
        btn.style.fontFamily = font.value;

        fontWordMenu.appendChild(btn);

        applyFontButton(btn);

    });

}



// ============================
// Font All
// ============================

if(fontAll){

    fontAll.addEventListener("mousedown", function(e){

        e.preventDefault();

    });


    fontAll.addEventListener("click", function(){


        if(!lastSelectedFont){

            alert("اختر الخط أولاً");

            return;

        }


        editor.style.fontFamily = lastSelectedFont;


        editor.querySelectorAll("*").forEach(function(element){

            element.style.fontFamily = lastSelectedFont;

        });


    });

}



// ============================
// Normal Font
// ============================

if(normalFont){

    normalFont.addEventListener("mousedown", function(e){

        e.preventDefault();

    });


    normalFont.addEventListener("click", function(){


        if(!savedRange){

            alert("حدد كلمة أولاً");

            return;

        }


        editor.focus();


        restoreSelection();


        document.execCommand(
            "removeFormat"
        );


        saveSelection();


    });

}



// ============================
// Normal Font All
// ============================

if(normalFontAll){

    normalFontAll.addEventListener("mousedown", function(e){

        e.preventDefault();

    });


    normalFontAll.addEventListener("click", function(){


        editor.style.fontFamily = "";


        editor.querySelectorAll("*").forEach(function(element){

            element.style.fontFamily = "";

        });


    });

}