import { createWorker } from "tesseract.js";
const worker = createWorker({
    logger:m => console.log(m)
});

(async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    await worker.setParameters({
        tessedit_create_box: '1',
        tessedit_create_unlv: '1',
        tessjs_create_osd: '1',
    });
    const { data: { text, hocr, tsv, box, unlv} } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    console.log(text);
    console.log(hocr);
    console.log(tsv);
    console.log(box);
    console.log(unlv);
})();
