class FormReader {

    static readForm(form) {
        //readFile(form.fileInput);
        start = form.startInput.value;
        finish = form.finishInput.value;
    }

    static readFile(input) {
        let file = input.files[0];

        let reader = new FileReader();

        if (file) {
            reader.readAsText(file);
        } else return -1;

        reader.onload = function () {
            fileText = reader.result;
        };
    }

}