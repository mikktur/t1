import { restaurantModal, restaurantRow } from "./components.js";
import { baseUrl, table, dialog, select } from "./variables.js";
import { fetchData } from "./utils.js";

select.addEventListener("change", () => {
  const selectedValue = select.value;
  listRestaurants(selectedValue);
});

window.addEventListener("load", () => {
  listRestaurants(select.value);
});

const listRestaurants = async (selectedValue) => {
  const restaurants = await fetchData(`${baseUrl}api/v1/restaurants`);
  restaurants.sort((a, b) => a.name.localeCompare(b.name));
  const filtered = restaurants.filter((r) => r.company === selectedValue);

  table.innerHTML = "";

  filtered.forEach((r) => {
    const tr = restaurantRow(r);
    tr.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dialog.innerHTML = "";
      const menu = fetchData(`${baseUrl}api/v1/restaurants/daily/${r._id}/fi`);
      menu.then((menu) => {
        dialog.innerHTML = restaurantModal(r, menu);
      });

      dialog.show();
      dialog.blur();
      document.querySelectorAll(".highlight").forEach((ele) => {
        ele.classList.remove("highlight");
      });
      tr.classList.add("highlight");
    });
    table.appendChild(tr);
  });
};
