const fs = require("fs");

function appendFilePromise(filename, content) {
  return new Promise((resolve, reject) => {
    fs.appendFile("toto.txt", "hello\n", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

(async function () {
  try {
    await appendFilePromise("toto.txt", "hello\n");
    await appendFilePromise("toto.txt", "hello\n");
    await appendFilePromise("toto.txt", "hello\n");
    await appendFilePromise("toto.txt", "hello\n");
    await appendFilePromise("toto.txt", "hello\n");
    await appendFilePromise("toto.txt", "hello\n");
  } catch (e) {
    console.log(e);
  }
})();
