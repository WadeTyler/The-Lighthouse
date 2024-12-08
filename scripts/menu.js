// Create Menus from constants. This script is used over hardcoding for easy capability to change menu items or add another menu.
// Menu Items can be modified in constants.js

import { foodItems, drinkItems } from "./constants.js";

const loadMenu = () => {
  const content = document.getElementById('content');
  content.innerHTML = "";
  if (!content) return console.log("No element with #content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  // Create food menu
  const createFoodMenu = () => {
    const foodMenu = document.createElement("div");
    foodMenu.classList.add("menu");

    const foodMenuLabel = document.createElement("h2");
    foodMenuLabel.innerText = "Food Menu";
    foodMenu.appendChild(foodMenuLabel);

    // Add a table of contents
    const tableContents = document.createElement("ul");
    tableContents.classList.add("table-contents");
    
    // Add each category label to the tableof contents
    for (const category of foodItems) {
      const link = document.createElement("a");
      link.href = (`#${category.categoryLabel}`);
      link.innerText = `${category.categoryLabel}`;
      tableContents.appendChild(link);
    }

    foodMenu.appendChild(tableContents);
  
    const items = document.createElement("ol");
    items.classList.add("items");
    
    // For each category object
    for (const foodItem of foodItems) {
      
      // Create category label
      const category = document.createElement("h5");
      category.innerText = `${foodItem.categoryLabel}`;
      category.id = `${foodItem.categoryLabel}`;
      items.appendChild(category);

      // For each item in the category
      for (const foodItemItem of foodItem.items) {

        const item = document.createElement("li");
        item.classList.add("item");

        const itemLabel = document.createElement("h5");
        itemLabel.innerText = `${foodItemItem.label} - ${foodItemItem.price}`;
        item.appendChild(itemLabel);
  
        const itemDescription = document.createElement("p");
        itemDescription.innerText = `${foodItemItem.description}`;
        item.appendChild(itemDescription);
  
        items.appendChild(item);
      }
      
    }

    foodMenu.appendChild(items);

    menuContainer.appendChild(foodMenu);
  }
  createFoodMenu();

  // Create food menu
  const createDrinksMenu = () => {
    const drinksMenu = document.createElement("div");
    drinksMenu.classList.add("menu");

    const drinksMenuLabel = document.createElement("h2");
    drinksMenuLabel.innerText = "Drinks Menu";
    drinksMenu.appendChild(drinksMenuLabel);

    // Add a table of contents
    const tableContents = document.createElement("ul");
    tableContents.classList.add("table-contents");
    
    // Add each category label to the tableof contents
    for (const category of drinkItems) {
      const link = document.createElement("a");
      link.href = (`#${category.categoryLabel}`);
      link.innerText = `${category.categoryLabel}`;
      tableContents.appendChild(link);
    }

    drinksMenu.appendChild(tableContents);
  
    const items = document.createElement("ol");
    items.classList.add("items");
    
    // For each category object
    for (const drinkItem of drinkItems) {
      
      // Create category label
      const category = document.createElement("h5");
      category.innerText = `${drinkItem.categoryLabel}`;
      category.id = `${drinkItem.categoryLabel}`;
      items.appendChild(category);

      // For each item in the category
      for (const drinkItemItem of drinkItem.items) {

        const item = document.createElement("li");
        item.classList.add("item");

        const itemLabel = document.createElement("h5");
        itemLabel.innerText = `${drinkItemItem.label} - ${drinkItemItem.price}`;
        item.appendChild(itemLabel);
  
        const itemDescription = document.createElement("p");
        itemDescription.innerText = `${drinkItemItem.description}`;
        item.appendChild(itemDescription);
  
        items.appendChild(item);
      }
      
    }

    drinksMenu.appendChild(items);


    menuContainer.appendChild(drinksMenu);
  }
  createDrinksMenu();

  content.appendChild(menuContainer);
}

loadMenu();