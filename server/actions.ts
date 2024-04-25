"use server";

import { createMeal } from "@/lib/meals";
import { redirect } from "next/navigation";

export async function shareForm(prevState: any, formData: FormData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("mail"),
    image: formData.get("image"),
  };

  // validate form data
  if (
    !meal.title ||
    !meal.summary ||
    !meal.instructions ||
    !meal.creator ||
    !meal.creator_email ||
    !meal.image
  ) {
    return {
      status: 400,
      message: "Please fill all fields",
    };
  }

  await createMeal(meal);
  redirect("/meals");
  return {
    status: 200,
    message: "Recipe shared successfully",
  };
}
