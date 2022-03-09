const menu = [{
        id: 1,
        title: "chilly potato",
        category: "Veg",
        price: 100,
        img: "images/chilly-potato.jpg",
        dec: `Chilli potato is a Indo chinese starter made with fried potatoes tossed in spicy, slightly sweet & sour chilli sauce. This chilli potato recipe will give you restaurant style crispy potatoes in chilli sauce. Chilli potato is quite popular in the Indian restaurants & is mostly eaten as a appetizer.`,
    },
    {
        id: 2,
        title: "chilly panner",
        category: "Veg",
        price: 200,
        img: "images/chilly-panner.jpg",
        dec: `It is of Indian origin. In eastern parts of India, it is generally called Chhena. It is an unaged, acid-set, non-melting farmer cheese or curd cheese made by curdling heated milk with lemon juice or other food acid`,
    },
    {
        id: 3,
        title: "chilly chicken",
        category: "Non-Veg",
        price: 250,
        img: "images/chilly-chicken.jpg",
        dec: `Chilli chicken is a popular Indo-Chinese dish of chicken of Hakka Chinese heritage. In India, this may include a variety of dry chicken preparations. Though mainly boneless chicken is used in this dish, some people also use bone-in chicken too.`,
    },
    {
        id: 4,
        title: "crispy chicken",
        category: "Non-Veg",
        price: 300,
        img: "images/crispy-chicken.jpg",
        dec: `Crispy fried chicken is a standard dish in the Cantonese cuisine of southern China and Hong Kong. The chicken is fried in such a way that the skin is extremely crunchy, but the white meat is relatively soft`,
    },
    {
        id: 5,
        title: "steam chicken momo",
        category: "Non-Veg",
        price: 80,
        img: "images/chicken-momo.jpg",
        dec: `Chicken Momos are also a traditional dish of Nepali cuisine and resemble Chinese Bao. However, it differs a lot from the Indian chicken momos. To prepare these savoury dumplings, all you need are all-purpose flour, boiled chicken, onion, ginger, green chilli, soy sauce and a little salt`,
    },
    {
        id: 6,
        title: "steam veg momo",
        category: "Veg",
        price: 60,
        img: "images/veg-momo.jpg",
        dec: `basically, it is plain flour based dumplings steamed with cabbage, carrot and spring onion stuffing. it has become a popular street food in india and is typically served with a red coloured spicy and watery momos chutney`,
    },
    {
        id: 7,
        title: "chilly manchurian",
        category: "Veg",
        price: 80,
        img: "images/chilly-manchurian.jpg",
        dec: `Manchurian is a class of Indo-chinese dishes made by roughly chopping and deep-frying ingredient such as chicken, cauliflower, prawns, fish, mutton, and paneer, and then sautéeing it in a sauce flavored with soy sauce.`,
    },
    {
        id: 8,
        title: "spring roll",
        category: "Veg",
        price: 80,
        img: "images/spring-roll.jpg",
        dec: `Spring rolls are a large variety of filled, rolled appetizers or dim sum found in East Asian, Southeast Asian cuisine. The kind of wrapper, fillings, and cooking technique used, as well as the name, vary considerably within this large area, depending on the region's culture`,
    },
]

const menuCenter = document.querySelector(".menu-center")



window.addEventListener("DOMContentLoaded", function() {

    displayMenuItems(menu)

})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        // console.log(item)
        return `<article class="menu-item">
                    <img src=${item.img} alt=${item.title} class="photo">
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">${item.price}</h4>
                        </header>
                        <p>${item.dec}</p>
                    </div>
                </article>`
    })
    displayMenu = displayMenu.join("")
        // console.log(displayMenu);
    menuCenter.innerHTML = displayMenu

}

const filterBtn = document.querySelectorAll(`.filter-btn`)

filterBtn.forEach(function(btn) {
    btn.addEventListener(`click`, function(e) {
        const category = e.currentTarget.dataset.id
        const menucategory = menu.filter(function(menuItem) {
                if (menuItem.category === category) {
                    return menuItem
                }


            })
            //console.log(menucategory)
        if (category === `all`) {
            displayMenuItems(menu)
        } else {
            displayMenuItems(menucategory)
        }
    })
})