let webdriverio = require("webdriverio"); //require to open proper dependencies
let options = { desiredCapabilities: { browserName: "chrome" } };
let client = webdriverio.remote(options);

client
  .init()
  .url("http://www.webdriveruniversity.com/")
  .click("#login-portal")
  .getTitle()
  .then(function(title) {
    console.log("Title is " + title);
  })
  .end();
