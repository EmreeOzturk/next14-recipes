"use server";

import { createMeal } from "@/lib/meals";

export async function shareForm(formData: FormData) {
  console.log(formData);
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("mail"),
    image: formData.get("image"),
  };

  createMeal(meal);
  return {
    status: 200,
    message: "Recipe shared successfully",
  };
}