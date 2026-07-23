// ============================
// Search
// ============================
if(searchMenuBtn){

    searchMenuBtn.addEventListener("click", function(){

        searchMenu.classList.toggle("show");

    });

}

if(searchBtn){

    searchBtn.addEventListener("click", function(){

        const word = searchText.value;


        if(!word) return;


        const text = editor.innerText;


        if(text.includes(word)){

            alert("تم العثور على الكلمة");

        }

        else{

            alert("الكلمة غير موجودة");

        }


    });

}



// ============================
// Replace
// ============================

if(replaceBtn){

    replaceBtn.addEventListener("click", function(){


        const oldWord = searchText.value;

        const newWord = replaceText.value;


        if(!oldWord) return;


        editor.innerHTML = editor.innerHTML.replaceAll(
            oldWord,
            newWord
        );


    });

}