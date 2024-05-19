import { connect, connection } from "mongoose";

const conn = {
  isConnection: false,
};

export async function dbConnect() {
  if (conn.isConnection) {
    return;
  }

  const db = await connect(process.env.MONGODB_URI);

  conn.isConnection = db.connection[0].readyState;
}

connection.on("Conncted", () => console.log("Connect with database"));
connection.on("error", (error) =>
  console.error(error, "Faild to connect Database")
);
