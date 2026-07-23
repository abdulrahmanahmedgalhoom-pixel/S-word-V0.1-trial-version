// ============================
// حفظ واسترجاع آخر تحديد
// ============================

let savedRange = null;

function saveSelection() {

    const selection = window.getSelection();

    if (selection.rangeCount > 0) {

        const range = selection.getRangeAt(0);

        if (editor.contains(range.commonAncestorContainer)) {

            savedRange = range.cloneRange();

        }

    }

}

function restoreSelection() {

    if (savedRange) {

        const selection = window.getSelection();

        selection.removeAllRanges();

        selection.addRange(savedRange);

    }

}

document.addEventListener("selectionchange", function () {

    const selection = window.getSelection();

    if (selection.rangeCount > 0) {

        const range = selection.getRangeAt(0);

        if (editor.contains(range.commonAncestorContainer)) {

            savedRange = range.cloneRange();

        }

    }

});