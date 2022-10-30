import { categoriesForCategoriesBar } from "./constants";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

export default function get100RandomCategories() {
  let counter = 0;
  let randomCategories = [];

  while (counter <= 100) {
    let idx = getRandomIntInclusive(0, 303);
    if (
      !randomCategories.some(
        (cat) => cat.name === categoriesForCategoriesBar[idx].name
      )
    ) {
      randomCategories.push(categoriesForCategoriesBar[idx]);
      counter++;
    }
  }

  return randomCategories;
}
