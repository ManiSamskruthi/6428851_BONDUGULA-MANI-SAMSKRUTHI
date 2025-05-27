document.querySelectorAll(".register-btn").forEach(btn => {
  btn.onclick = function() {
    alert("Registered!");
  };
});

document.querySelector("#category-filter").onchange = function() {
  const selected = this.value;
  console.log(`Filter by category: ${selected}`);
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Search triggered");
  }
});
