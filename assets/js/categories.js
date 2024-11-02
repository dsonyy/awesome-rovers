// Get the 'categories' parameter from the URL
let categories = new URLSearchParams(window.location.search).get("categories");

if (categories) {
  // Split categories
  categories = categories.split(",");

  // Ugly way to add header with current filters
  const mainContent = document.getElementsByClassName("main-content")[0];
  mainContent.innerHTML =
    "<h1>#" + categories.join(", #") + "</h1>" + mainContent.innerHTML;

  // Get all elements with the 'categories' attribute
  document.querySelectorAll("[post-categories]").forEach((element) => {
    // Disable element
    element.style.display = "none";

    // Split the 'categories' attribute value by commas
    let elementCategories = element.getAttribute("post-categories").split(",");
    console.log(elementCategories);

    // check if any elementCategories is in categories
    elementCategories.forEach((elementCategory) => {
      if (categories.includes(elementCategory)) {
        element.style.display = "block";
      }
    });
  });
}
