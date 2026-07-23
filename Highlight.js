// ============================
// الهايلايت (Highlight)
// ============================

let highlightEnabled = true;

if(highlightBtn){

    highlightBtn.addEventListener("mousedown", function(e){

        e.preventDefault();

    });

    highlightBtn.addEventListener("click", function(){

        if(!highlightEnabled){

            return;

        }

        editor.focus();

        restoreSelection();

        if(!savedRange){

            alert("حدد كلمة أولاً");

            return;

        }

        document.execCommand("styleWithCSS", false, true);

        document.execCommand(
            "hiliteColor",
            false,
            highlightColor.value
        );

        saveSelection();

    });

}

// ============================
// لون النص (Text Color)
// ⚠️ إضافة: زر colorBtn كان معرّف في elements.js بس مربوطش بأي حدث،
// يعني كان زر ميت. ضفت له الوظيفة هنا بنفس منطق الهايلايت.
// ============================

if(colorBtn){

    colorBtn.addEventListener("mousedown", function(e){

        e.preventDefault();

    });

    colorBtn.addEventListener("click", function(){

        editor.focus();

        restoreSelection();

        if(!savedRange){

            alert("حدد كلمة أولاً");

            return;

        }

        document.execCommand("styleWithCSS", false, true);

        document.execCommand(
            "foreColor",
            false,
            textColor.value
        );

        saveSelection();

    });

}