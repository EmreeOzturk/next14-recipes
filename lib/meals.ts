import slugify from "slugify";
import xss from "xss";
import sql from "better-sqlite3";
import fs from "fs";
const db = sql("meals.db");
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function createMeal(meal: any) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const title = meal.title;
  const extention = meal.image.name.split(".").pop();
  const newFileName = `${slugify(title, { lower: true })}.${extention}`;

  const stream = fs.createWriteStream(`public/images/${newFileName}`);
  const bufferedStream = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedStream), (error) => {
    if (error) {
      throw new Error("Saving image fail");
    }
  });
  // const stmt = db.prepare('INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)');
  // return stmt.run(meal);
}
