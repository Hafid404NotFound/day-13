// Object conditional
const foodCategories = {
  sehat: ["Nasi uduk", "Bubur kacang ijo", "Ubi madu"],
  tidakSehat: ["softdrink", "mie gacoan"],
};

// arrow function
const checkFood = () => {
  const userInput = document.getElementById("foodInput").value.trim();
  const userFood = userInput.toLowerCase();

  // Manipulasi string menggunakan metode array map dan includes
  const isSehat = foodCategories.sehat
    .map((food) => food.toLowerCase())
    .includes(userFood);
  const isTidakSehat = foodCategories.tidakSehat
    .map((food) => food.toLowerCase())
    .includes(userFood);

  // Tampilkan hasil menggunakan alert
  if (isSehat) {
    alert(`${userInput} adalah makanan/minuman sehat!`);
  } else if (isTidakSehat) {
    alert(`${userInput} adalah makanan/minuman tidak sehat!`);
  } else {
    alert(`${userInput} tidak ada di daftar makanan/minuman.`);
  }
};

document.getElementById("foodForm").addEventListener("submit", (event) => {
  event.preventDefault();
  checkFood();
});
