const restaurantRow = (restaurant) => {
  const { name, company } = restaurant;
  const row1 = document.createElement("tr");
  row1.innerHTML = `
  <td>${name}</td>
  <td>${company}</td>
  `;
  return row1;
};

const restaurantModal = (restaurant, menu) => {
  const { name, address, postalCode, city, phone, company } = restaurant;
  const { courses } = menu;
  let modalHTML = `
        <div class="wrapper">
            <div class="contact">
                <p>Name: ${name}</p>
                <p>Address: ${address}</p>
                <p>Postal Code: ${postalCode}</p>
                <p>City: ${city}</p>
                <p>Phone: ${phone}</p>
                <p>Company: ${company}</p>
            </div>
            <table class="menu">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Diet</th>
                </tr>
    `;

  if (courses.length === 0) {
    modalHTML += `<tr><td colspan="3">NO MENU AVAILABLE</td></tr>`;
  } else {
    courses.forEach(({ name, price, diets }) => {
      modalHTML += `
                <tr>
                    <td>${name}</td>
                    <td>${price ? price : "No price available"}</td>
                    <td>${diets}</td>
                </tr>
            `;
    });
  }

  modalHTML += `
            </table>
        </div>
    `;

  return modalHTML;
};

export { restaurantModal, restaurantRow };
