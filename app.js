// const addDays = require("date-fns/addDays");
// const express = require("express");
// const app = express();
// const result = addDays(new Date(), 100);
// app.get("/", (request, response) => {
//   response.send(
//     `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
//   );
// });
// app.listen(3000);
// module.exports = app;
// module.exports = result;

const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const dateTime = new Date();
  const result = addDays(
    new Date(dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()),
    100
  );
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
