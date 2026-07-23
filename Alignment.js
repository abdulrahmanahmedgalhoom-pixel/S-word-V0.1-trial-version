alignmentBtn.addEventListener("mousedown", function(e){
    e.preventDefault();
});

alignmentBtn.addEventListener("click", function(){
    alignmentMenu.classList.toggle("show");
});

document.querySelectorAll(".align-option").forEach(function(btn){

    btn.addEventListener("mousedown", function(e){
        e.preventDefault();
    });

    btn.addEventListener("click", function(){

        if(!savedRange){
            alert("حدد النص أولاً");
            return;
        }

        editor.focus();
        restoreSelection();

        document.execCommand(
            btn.dataset.align,
            false,
            null
        );

        saveSelection();

    });

});

alignment.addEventListener("click", function(){

    if(!savedRange){
        alert("حدد النص أولاً");
        return;
    }

    editor.focus();
    restoreSelection();

    document.execCommand(
        "justifyCenter",
        false,
        null
    );

    saveSelection();

});

alignmentAll.addEventListener("click", function(){

    editor.style.textAlign = "center";

});