const menu = [
  {
    id: 1,
    title: "lasagna",
    category: "lunch",
    price: 15.99,
    img: "./images/lasagna.jpg",
    desc: `A rich and creamy whole-wheat pasta dish filled layer by layer with refreshingly fresh onions and garlic, lathered in a succulent sauce and topped with imported, premium quality mozzarella. `,
  },
  {
    id: 2,
    title: "bbq shashlyk",
    category: "dinner",
    price: 23.99,
    img: "./images/bbq_shahslyk.jpg",
    desc: `A mouthwatering assortment of grilled goodness! Sink your teeth into tender, smoky ribs, succulent chicken, and juicy sausages, all basted with our signature BBQ sauce. Served with coleslaw and cornbread. `,
  },
  {
    id: 3,
    title: "burrito",
    category: "lunch",
    price: 11.99,
    img: "./images/burrito.jpg",
    desc: `A hearty flour tortilla wrapped around seasoned ground beef, rice, black beans, sautéed peppers, onions, and smothered in a savory enchilada sauce. Topped with melted cheddar cheese, sour cream, and fresh salsa.`,
  },
  {
    id: 4,
    title: "eggs with toast",
    category: "breakfast",
    price: 10.99,
    img: "./images/eggs_with_toast.jpg",
    desc: `Two farm-fresh eggs, cooked your way (scrambled, sunny-side up, or over-easy), served with a side of perfectly toasted white or whole-grain bread. Accompanied by your choice of crispy bacon or savory sausage links. `,
  },
  {
    id: 5,
    title: "french toast",
    category: "breakfast",
    price: 9.99,
    img: "./images/french_toast.jpg",
    desc: `Thick slices of fresh, soft bread dipped in a creamy, cinnamon-infused egg batter, cooked to golden perfection. Served with a dusting of powdered sugar, a pat of butter, and a generous drizzle of maple syrup. `,
  },
  {
    id: 6,
    title: "greek yogurt with berries",
    category: "breakfast",
    price: 11.99,
    img: "./images/greek_yougurt_with_berries.jpg",
    desc: `
    Indulge in the perfect combination of creamy Greek yogurt and a medley of vibrant, ripe berries with our Greek Yogurt Delight. This wholesome and refreshing dish is a delicious way to start your day or enjoy as a guilt-free dessert.`,
  },
  {
    id: 7,
    title: "hamburger",
    category: "lunch",
    price: 14.99,
    img: "./images/hamburger.jpg",
    desc: `Our timeless favorite! A juicy, 100% Angus beef patty grilled to perfection, topped with lettuce, tomato, onion, and a slice of American cheese. Served on a toasted brioche bun with a side of crispy fries. `,
  },
  {
    id: 8,
    title: "lasagna",
    category: "dinner",
    price: 16.99,
    img: "./images/lasagna.jpg",
    desc: `Layers of rich, slow-cooked beef Bolognese sauce, creamy béchamel, and tender lasagna noodles, baked to perfection. Topped with a generous portion of melted mozzarella and Parmesan cheese. Served with garlic bread and a side salad.  `,
  },
  {
    id: 9,
    title: "pancakes",
    category: "breakfast",
    price: 8.99,
    img: "./images/pancakes.jpg",
    desc: `Fluffy, golden pancakes made from a buttermilk batter that's light and airy. Served with a pat of creamy butter and a drizzle of warm maple syrup.`,
  },
  {
    id: 10,
    title: "panini",
    category: "breakfast",
    price: 10.99,
    img: "./images/panini.jpg",
    desc: `A timeless favorite! Slices of premium ham, salami, and mozzarella cheese, layered with fresh basil leaves and sun-dried tomatoes, all pressed between two perfectly toasted ciabatta slices.`,
  },
  {
    id: 11,
    title: "pizza",
    category: "lunch",
    price: 14.99,
    img: "./images/pizza.jpg",
    desc: `A timeless classic! Our Margherita pizza features a thin, hand-stretched crust topped with rich tomato sauce, fresh mozzarella, garden-fresh basil, and a drizzle of extra virgin olive oil. `,
  },
  {
    id: 12,
    title: "salmon with avocado",
    category: "dinner",
    price: 20.99,
    img: "./images/salmon_with_avocado.jpg",
    desc: `Indulge in a culinary masterpiece that combines the ocean's finest catch with the creamy richness of avocado. Our Grilled Salmon with Avocado Salsa offers a perfect balance of flavors and textures, making it a must-try dish for seafood enthusiasts.  `,
  },
  {
    id: 13,
    title: "sandwich",
    category: "breakfast",
    price: 10.99,
    img: "./images/sandwich.jpg",
    desc: `A timeless favorite! Triple-decker layers of roasted turkey, crispy bacon, lettuce, tomato, and mayonnaise on toasted white or whole-grain bread. Served with a side of golden fries.`,
  },
  {
    id: 14,
    title: "steak with fries",
    category: "dinner",
    price: 30.99,
    img: "./images/steak_with_fries.jpg",
    desc: `Indulge in a culinary masterpiece with our Succulent Steak with Crispy Fries. This dish offers a perfect balance of tenderness, flavor, and crunch, making it a must-try for steak lovers.`,
  },
  {
    id: 15,
    title: "steak",
    category: "dinner",
    price: 28.99,
    img: "./images/steak.jpg",
    desc: `A classic choice! A juicy, well-marbled New York strip steak, seasoned and grilled to perfection. Accompanied by a generous serving of garlic butter sautéed mushrooms and crispy onion rings.`,
  },
  {
    id: 16,
    title: "tacos",
    category: "lunch",
    price: 14.99,
    img: "./images/tacos.jpg",
    desc: `A timeless favorite! Seasoned ground beef nestled in soft corn tortillas, topped with crisp lettuce, diced tomatoes, shredded cheddar cheese, and a dollop of sour cream. `,
  },
  {
    id: 17,
    title: "toast with avocado",
    category: "breakfast",
    price: 11.99,
    img: "./images/toast_with_avocado.jpg",
    desc: `A timeless favorite! Sliced ripe avocado on toasted whole-grain bread, drizzled with extra virgin olive oil, sprinkled with flaky sea salt, and finished with a dash of freshly ground black pepper.  `,
  },
  {
    id: 18,
    title: "toast with berries",
    category: "breakfast",
    price: 10.99,
    img: "./images/toast_with_berries.jpg",
    desc: `Start your day on a vibrant and nutritious note with our Berry-licious Breakfast Toast. This delightful creation combines the natural sweetness of fresh, plump berries with the satisfying crunch of toasted bread, offering a perfect balance of flavors and textures.`,
  },
];

// const sectionCenter = document.querySelector(".section-center");

//
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
