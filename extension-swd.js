// ============================
// SWD Extension Reader
// ============================


// فتح ملف SWD
function openSWD(content){

    try{

        const swdFile = JSON.parse(content);


        // التأكد أن الملف SWD
        if(swdFile.type !== "SWD"){

            alert("ملف SWD غير صالح");

            return;

        }


        // عرض المحتوى داخل المحرر
        editor.innerHTML = swdFile.content;


    }

    catch(error){

        alert("حدث خطأ في قراءة ملف SWD");

        console.log(error);

    }

}