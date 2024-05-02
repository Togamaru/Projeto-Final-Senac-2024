const app = require("../app.js");
const connection = require("../src/db/conn");

const PORT = 8080;

app.listen(PORT, async () => {
  console.log(`API está sendo executada na porta ${PORT}`);
  const [result] = await connection.execute("SELECT 1");
  if (result) {
    console.log("MySQL connection OK");
  }
});