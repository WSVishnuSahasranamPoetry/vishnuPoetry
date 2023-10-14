import { InferModel } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  username: text("username").notNull()
});

export type Profile = InferModel<typeof profiles>;

export const sahasranam = pgTable("sahasranam", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  text: text("text").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

export type Sahasranam = InferModel<typeof sahasranam>;

export const poetry = pgTable("poetry", {
    id: uuid("id").primaryKey().defaultRandom(),
    text: text("text").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
  });
  
  export type Poetry = InferModel<typeof poetry>;
  