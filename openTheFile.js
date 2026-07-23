if(fileInput){

    fileInput.addEventListener("change", function(){

        const file = fileInput.files[0];

        if(!file) return;

        const reader = new FileReader();

        reader.onload = function(){

            const fileName = file.name.toLowerCase();

            // فتح ملفات TXT
            if(fileName.endsWith(".txt")){

                editor.innerText = reader.result;

            }

            // فتح ملفات HTML
            else if(fileName.endsWith(".html")){

                editor.innerHTML = reader.result;

            }

            // فتح ملفات SWD
            else if(fileName.endsWith(".swd")){

                openSWD(reader.result);

            }

            // نوع غير مدعوم
            else{

                alert("نوع الملف غير مدعوم");

            }

        };

        reader.readAsText(file);

    });

}