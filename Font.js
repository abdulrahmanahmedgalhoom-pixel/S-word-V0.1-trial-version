// ============================
// قائمة الخطوط (Font Menu)
// ============================

// نفس فكرة FontWord.js، بس بأزرار بكلاس مختلف (font-basic-option)
// عشان ميتعارضش مع .font-option بتاعة FontWord.js
const FONT_LIST = [
    { name: "Arial", value: "Arial, sans-serif" },
    { name: "Times New Roman", value: "'Times New Roman', serif" },
    { name: "Courier New", value: "'Courier New', monospace" },
    { name: "Georgia", value: "Georgia, serif" },
    { name: "Verdana", value: "Verdana, sans-serif" },
    { name: "Tahoma", value: "Tahoma, sans-serif" },
    { name: "Comic Sans MS", value: "'Comic Sans MS', cursive" }
];

if(fontBtn){

    fontBtn.addEventListener("mousedown", function(e){

        e.preventDefault();

    });

    fontBtn.addEventListener("click", function(){

        fontMenu.classList.toggle("show");

    });

}

// ⚠️ إضافة: توليد أزرار الخطوط تلقائيًا جوه fontMenu، لأنها
// مكنتش موجودة، فكان الزر بيفتح قائمة فاضية.

if(fontMenu){

    FONT_LIST.forEach(function(font){

        const btn = document.createElement("button");

        btn.className = "font-basic-option";
        btn.dataset.font = font.value;
        btn.innerText = font.name;
        btn.style.fontFamily = font.value;

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

            saveSelection();

        });

        fontMenu.appendChild(btn);

    });

}