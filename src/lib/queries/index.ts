"use server";

import { desc, eq } from "drizzle-orm";
import { db } from "../db";
import { poetry, sahasranam } from "../db/schema";

export const handleSahasraSubmit = async ({sahasraName, sahasraText}:{sahasraName: string, sahasraText: string}) => {
  
    if(sahasraName === "") return;

    if(sahasraText === "") return;
  
    await db.insert(sahasranam)
    .values({
      text: sahasraText,
      name: sahasraName
    });
};

export const handleSimpleSubmit = async ({simpleText}:{simpleText: string}) => {

    if(simpleText === "") return;
  
    await db.insert(poetry)
    .values({
      text: simpleText
    });
};

export const getSahasranam = async () => {
  
  try {
      let query = db
      .select()
      .from(sahasranam)
      .orderBy(desc(sahasranam.createdAt));
      

      const rows = await query;

      return rows;

    } catch (error) {
      console.log(error);
    }
  };

  export const getSimpleQuotes = async () => {
  
    try {
        let query = db
        .select()
        .from(poetry)
  
        const rows = await query;
  
        return rows;
  
      } catch (error) {
        console.log(error);
      }
    };

export const editSahasra = async ({sahasraId, sahasraName, sahasraText}:{sahasraId:string, sahasraName:string, sahasraText:string}) => {

  try {
    let query = await db.update(sahasranam)
    .set({ name: sahasraName, text: sahasraText })
    .where(eq(sahasranam.id, sahasraId))
  } catch (error) {
    console.error(error);
  }
};

export const editQuotes = async ({sahasraId, sahasraText}:{sahasraId:string, sahasraText:string}) => {

  try {
    let query = await db.update(poetry)
    .set({ text: sahasraText })
    .where(eq(poetry.id, sahasraId))
  } catch (error) {
    console.error(error);
  }
};

