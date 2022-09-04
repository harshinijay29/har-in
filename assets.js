const tesseract = require("tesseract.js");
const fs = require("fs")
const getImageText = async(filename, lang, logger) =>{
  let recognizeResult = null
  try {
    if(fs.existsSync(filename)){
      if(logger){
        const myLogger = {
          logger: m => console.log(m)
        }
        recognizeResult = await tesseract.recognize(filename, lang, myLogger);
      } else{
        recognizeResult = await tesseract.recognize(filename,lang);
      }
      if(recognizeResult){
        return recognizeResult.data.text
      }
    }

  }catch (error) {
    return error.message
  }

}

getImageText("./japanese.jpg","jpn").then(content => {
  console.log(content)
})
.catch((errMsg) => {
  console.log(errMsg);
})