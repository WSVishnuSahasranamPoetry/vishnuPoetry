import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

let connectSQLString = "";
if (process.env.NEXT_PUBLIC_POSTGR_STRING) {
  connectSQLString = process.env.NEXT_PUBLIC_POSTGR_STRING;
}

const sql = postgres(connectSQLString, {
  max: 1,
});

export const db = drizzle(sql, {
  schema,
});
