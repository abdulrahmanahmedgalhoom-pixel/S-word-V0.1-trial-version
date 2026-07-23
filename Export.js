if(saveBtn){

    saveBtn.addEventListener("click", function(){

        const fileName = prompt("Name the file");

        if(!fileName){
            return;
        }


        let content = "";
        let extension = "";
        let type = "";


        if(exportType.value === "txt"){

            content = editor.innerText;

            extension = ".txt";

            type = "text/plain";

        }


        else if(exportType.value === "html"){

            content = editor.innerHTML;

            extension = ".html";

            type = "text/html";

        }


        else if(exportType.value === "swd"){

            const swdData = {

                type:"SWD",

                version:"1.0",

                content:editor.innerHTML

            };


            content = JSON.stringify(swdData);

            extension = ".swd";

            type = "application/json";

        }


        else{

            alert("اختر نوع الملف");

            return;

        }



        const blob = new Blob(
            [content],
            {
                type:type
            }
        );


        const url = URL.createObjectURL(blob);


        const link = document.createElement("a");

        link.href = url;

        link.download = fileName + extension;


        document.body.appendChild(link);

        link.click();


        document.body.removeChild(link);


        URL.revokeObjectURL(url);


    });

}
/* ============================================================
   Commands/Export.js
   SaveAutoExport---txt|html|swd---1
   يطلب اسم الملف (Enter file name--) ثم تأكيد (Sure [y/n])
   وبعدها يبدأ تصدير نسخة كل دقيقة بالصيغة المطلوبة

   ملاحظة: يعتمد على وجود const باسم "editor" معرّف في elements.js
   ============================================================ */

(function () {
  const SUPPORTED_FORMATS = ['txt', 'html', 'swd'];
  let intervalId = null;

  function buildFileContent(format) {
    if (typeof editor === 'undefined') return '';
    if (format === 'html') return editor.innerHTML;
    if (format === 'txt') return editor.innerText;
    if (format === 'swd') return editor.innerHTML; // نفس منطق ملفات swd الحالية في مشروعك
    return '';
  }

  function downloadFile(name, format, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}.${format}`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function startAutoExport(fileName, format) {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(() => {
      const content = buildFileContent(format);
      downloadFile(fileName, format, content);
      Terminal.log(`Exported ${fileName}.${format}`, 'success');
    }, 60 * 1000);
    Terminal.log(`Auto export enabled: every 1 minute as .${format}`, 'success');
  }

  Terminal.registerCommand('SaveAutoExport', (args) => {
    const format = (args[0] || '').toLowerCase();
    const enabled = args[1];

    if (!SUPPORTED_FORMATS.includes(format)) {
      Terminal.log('Usage: SaveAutoExport---txt|html|swd---1', 'error');
      return;
    }

    if (enabled !== '1') {
      Terminal.log('Usage: SaveAutoExport---' + format + '---1', 'error');
      return;
    }

    Terminal.askInput('Enter file name--', (fileName) => {
      if (!fileName) {
        Terminal.log('File name cannot be empty.', 'error');
        return;
      }
      Terminal.askConfirm(
        'Export as ' + fileName + '.' + format + '.',
        () => startAutoExport(fileName, format),
        () => Terminal.log('Export cancelled.', 'info')
      );
    });
  });
})();