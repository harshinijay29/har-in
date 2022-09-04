const tesseract = require("tesseract.js");

tesseract
  .recognize("./hindi.jpg","hin",{logger: (m) => console.log(m)})
  .then(({data:{text}}) => {
    console.log(text);
  })
  .catch((err) => {
    console.log(err.message);
  });


