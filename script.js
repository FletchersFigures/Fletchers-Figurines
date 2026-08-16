const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const sizeSelect = document.getElementById("size");
const weaponSelect = document.getElementById("weapons");
const total = document.getElementById("total");

function updateTotal() {
  const [size, price] = sizeSelect.value.split("|");
  const weaponPrice = Number(weaponSelect.value);
  total.textContent = `$${Number(price) + weaponPrice} NZD`;
}

sizeSelect.addEventListener("change", updateTotal);
weaponSelect.addEventListener("change", updateTotal);
updateTotal();

document.getElementById("orderForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const [size, price] = sizeSelect.value.split("|");
  const weapons = Number(weaponSelect.value);
  const finalTotal = Number(price) + weapons;

  const subject = encodeURIComponent(`Custom Figure Order - ${name}`);
  const body = encodeURIComponent(
`Hi Fletcher's Figures,

I would like to request a custom figure.

Name: ${name}

Figure description:
${description}

Size: ${size}
Base price: $${price} NZD
Weapons: ${weapons}
Estimated total: $${finalTotal} NZD

Please let me know if you need any more information.

Thanks,
${name}`
  );

  window.location.href = `mailto:lathamfletcher12@gmail.com?subject=${subject}&body=${body}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
