// ============================
// تحديد الصورة
// ============================

let selectedImage = null;

if (editor) {

    editor.addEventListener("click", function (e) {

        document.querySelectorAll("#editor img").forEach(function (img) {

            img.classList.remove("selected-image");
            img.style.outline = "";

        });

        if (e.target.tagName === "IMG") {

            selectedImage = e.target;

            selectedImage.classList.add("selected-image");
            selectedImage.style.outline = "2px solid #2196f3";

        } else {

            selectedImage = null;

        }

    });

}

// ============================
// إدراج صورة
// ============================

if (insertImageBtn) {

    insertImageBtn.addEventListener("mousedown", function (e) {

        e.preventDefault();

    });

    insertImageBtn.addEventListener("click", function () {

        imageInput.click();

    });

}

if (imageInput) {

    imageInput.addEventListener("change", function () {

        const file = imageInput.files[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {

            alert("اختر صورة فقط");

            imageInput.value = "";

            return;

        }

        const reader = new FileReader();

        reader.onload = function () {

            editor.focus();

            restoreSelection();

            document.execCommand(
                "insertImage",
                false,
                reader.result
            );

            saveSelection();

        };

        reader.readAsDataURL(file);

        imageInput.value = "";

    });

}

// ============================
// تغيير حجم الصورة
// ⚠️ إضافة: زر resizeImageBtn كان معرّف في elements.js بس مربوطش
// بأي حدث، يعني كان زر ميت. ضفت له وظيفة بسيطة: تحديد صورة ثم
// كتابة عرض جديد بالبكسل، والارتفاع بيتظبط تلقائي (auto) عشان
// الصورة متتمططش.
// ============================

if (resizeImageBtn) {

    resizeImageBtn.addEventListener("mousedown", function (e) {

        e.preventDefault();

    });

    resizeImageBtn.addEventListener("click", function () {

        if (!selectedImage) {

            alert("حدد صورة أولاً");

            return;

        }

        const newWidth = prompt(
            "اكتب العرض الجديد بالبكسل (مثال: 300)",
            selectedImage.width || 300
        );

        if (!newWidth) return;

        const widthValue = parseInt(newWidth, 10);

        if (isNaN(widthValue) || widthValue <= 0) {

            alert("رقم غير صالح");

            return;

        }

        selectedImage.style.width = widthValue + "px";
        selectedImage.style.height = "auto";

    });

}

// ============================
// حذف الصورة
// ============================

if (deleteImageBtn) {

    deleteImageBtn.addEventListener("mousedown", function (e) {

        e.preventDefault();

    });

    deleteImageBtn.addEventListener("click", function () {

        if (!selectedImage) {

            alert("حدد صورة أولاً");

            return;

        }

        selectedImage.remove();

        selectedImage = null;

    });

}