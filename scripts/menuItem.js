/* <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-2 d-none d-md-block"></div>
                <div class="col-1 d-sm-block d-md-block d-md-none"></div>
                <div class="col-8">
                  <p  class="item">
                    <b> A14) Fried Calamari  </b><br />
                    Deep fried squid served with sweet n' sour sauce.
                  </p>
                </div>
                <div class="col-1">
                  <p><b> $9.95 </b></p>
                </div>
              </div>
            </div>
          </div> */

function MakeMenuItem(title, description, cost){

    let outerRow = MakeDiv();
    let col12 = MakeDiv();
    let innerRow = MakeDiv();
    //----put some comments here
    let col2 = MakeDiv();
    col2.className ="col-2 d-none d-md-block";
    // --- put some comments here
    let col1 = MakeDiv();
    col1.className = "col-1 d-sm-block d-md-block d-md-none";
    let col8 = MakeDiv();
    let item = document.createElement('p');
    item.className = 'item';
    let boldTitle = document.createElement('b');
    boldTitle.textContent = title;




}

function MakeDiv(){
    return document.createElement('div');
}


let menuItems = [
    {
        title:'A1',
        description:"Fried chicken wings served with BBQ sauce or Sriracha sauce.",
        cost:'8.95',
        category:'appetizer'
    },
    {
        title:'A2',
        description:"Fried fish fillet mixed in red curry paste served with cucumbers in sweet n' sour sauce, topped with peanuts.",
        cost:'9.95',
        category:'appetizer'
    },
    {
      title:'A3',
      description:"Satay, butterfly shrimp, spring roll, calamari, and crab rangoon served with a peanut sauce and sweet n' sour sauce.",
      cost:'12.95',
      category:'appetizer'
    },
    {
      title:'A4',
      description:"Five (5) deep fried spring rolls served with sweet n' sour sauce.",
      cost:'7.95',
      category:'appetizer'
    },
    {
      title:'A5',
      description:"Deep fried tofu served with cucumber salad and sweet n' sour sauce.",
      cost:'7.95',
      category:'appetizer'
    },
    {
      title:'A6',
      description:"Fried prawns covered in bread crumbs served with sweet n' sour sauce.",
      cost:'9.95',
      category:'appetizer'
    },
    {
      title:'A7',
      description:"Lightly flaked crab meat, cream cheese, and celery wrapped in wonton wrappers and deep fried served with Thai Spices dipping sauce.",
      cost:'7.95',
      category:'appetizer'
    },
    {
      title:'A8',
      description:"Golden fried wonton stuffed with potato onion and curry. Served with sweet n' sour sauce.",
      cost:'8.95',
      category:'appetizer'
    },
    {
      title:'A9',
      description:"Fried potato wedges served with special homemade sauce with cilantro topped with peanuts.",
      cost:'7.95',
      category:'appetizer'
  },
  {
      title:'A10',
      description:"Grilled mushroom with spinach, romaine lettuce, onion, cilantro and tomato.",
      cost:'8.95',
      category:'appetizer'
  },
  {
    title:'A11',
    description:"Crispy battered asparagus served with cucumber in sweet n' sour, topped with peanuts.",
    cost:'9.95',
    category:'appetizer'
  },
  {
    title:'A12',
    description:"Chicken marinated in Thai herbs and spices served with peanut Sauce and cucumber salad.",
    cost:'7.95',
    category:'appetizer'
  },
  {
    title:'A13',
    description:"Steamed green shell Mussels served with cilantro lime sauce.",
    cost:'7.95',
    category:'appetizer'
  },
  {
    title:'A14',
    description:"Deep fried squid served with sweet n' sour sauce.",
    cost:'9.95',
    category:'appetizer'
  },
  {
    title:'A15',
    description:"Spinach, tofu, cucumber, rice noodles and shredded carrots wrapped in fresh rice wrapper. Served with Thai Spices special dipping sauce. (Add shrimp or chicken for $2.00).",
    cost:'7.95',
    category:'appetizer'
  },
  {
    title:'A16',
    description:"Pork sauteéd with bell peppers, onions and basil rolled in a spinach wrap.",
    cost:'8.95',
    category:'appetizer'
  },
  {
    title:'A17',
    description:"Steamed or fried dumplings served with a sweet black sauce.",
    cost:'7.95',
    category:'appetizer'
  },
  //main course
  {
    title:'E1',
    description:"4 Sea Bass tacos served with mango salsa, onion, cilantro, tomato, cabbage and avocado.",
    cost:'12.95',
    category:'entree'
},
{
    title:'E2',
    description:"Tempura chicken in orange sauce served over cauliflower, carrots and broccoli.",
    cost:'11.50',
    category:'entree'
},
{
  title:'E3',
  description:"Sea Bass fillet, pan fried golden brown and served in a sautéed basil sauce.",
  cost:'13.95',
  category:'entree'
},
{
  title:'E4',
  description:"Ground pork sautéed in garlic sauce with onion, bell pepper, green beans and basil.",
  cost:'11.00',
  category:'entree'
},
{
  title:'E5',
  description:"Stir fried chicken with teriyaki sauce. Served with broccoli, carrots and cauliflower.",
  cost:'11.95',
  category:'entree'
},
{
  title:'E6',
  description:"Sautéed in light gravy oyster sauce with onion, bell pepper, roasted chili and cashew nut. Choice of Chicken, Beef, pork or tofu.",
  cost:'10.95',
  category:'entree'
},
{
  title:'E7',
  description:"Sautéed with fresh mushrooms, bell pepper, fresh ginger and onion in garlic sauce. Choice of Chicken, Beef, Pork or tofu.",
  cost:'9.95',
  category:'entree'
},
{
  title:'E8',
  description:"Mixed vegetables sautéed in sweet garlic sauce. Choice of Chicken, Beef, pork or tofu.",
  cost:'9.95',
  category:'entree'
},
{
  title:'E9',
  description:"Scallops, Prawns, Calamari and sea bass sautéed in red curry with bell peppers, green beans and pumpkin.",
  cost:'15.95',
  category:'entree'
},
{
  title:'E10',
  description:"Baby corn, onions, snow peas, carrots and mushrooms sautéed in a light garlic sauce. Choice of Chicken, Beef, pork or tofu.",
  cost:'10.95',
  category:'entree'
},
{
title:'E11',
description:"Duck breast on a bed of crispy noodle and kale topped with plum sauce.",
cost:'14.95',
category:'entree'
},
{
title:'E12',
description:"Stir-fried Tiger Prawn with asparagus, onion, bell pepper in home made chili sauce and fresh basil.",
cost:'14.95',
category:'entree'
},
{
title:'E13',
description:"Grilled Tri Tip Steak topped with sautéed basil, mushroom, onion and bell pepper in garlic sauce.",
cost:'14.95',
category:'entree'
},
{
title:'E14',
description:"Sautéed lobster tail with onion, bell pepper, asparagus and basil in sweet chili paste.",
cost:'30.95',
category:'entree'
},
{
title:'E15',
description:"Stir fried chicken, onion, bell pepper, water chestnut, celery and peanuts in Kung Lao sauce.",
cost:'11.95',
category:'entree'
},
{
title:'A16',
description:"Tempura red snapper with bell pepper, onion, asparagus and basil. Topped with red curry sauce.",
cost:'13.95',
category:'entree'
},
{
title:'E17',
description:"Choice of meat, steamed or fried egg noodle with cabbage, onion, cilantro and carrot in a blend of massaman and yellow curry sauce.",
cost:'11.95',
category:'entree'
},
{
title:'E17',
description:"Choice of meat, steamed or fried egg noodle with cabbage, onion, cilantro and carrot in a blend of massaman and yellow curry sauce.",
cost:'11.95',
category:'entree'
},
{
title:'E14',
description:"Sautéed lobster tail with onion, bell pepper, asparagus and basil in sweet chili paste.",
cost:'30.95',
category:'entree'
},
{
title:'E15',
description:"Stir fried chicken, onion, bell pepper, water chestnut, celery and peanuts in Kung Lao sauce.",
cost:'11.95',
category:'entree'
},
{
title:'A16',
description:"Tempura red snapper with bell pepper, onion, asparagus and basil. Topped with red curry sauce.",
cost:'13.95',
category:'entree'
},
{
title:'E17',
description:"Choice of meat, steamed or fried egg noodle with cabbage, onion, cilantro and carrot in a blend of massaman and yellow curry sauce.",
cost:'11.95',
category:'entree'
},
{
title:'E18',
description:"Stir fried Shrimp with pepper and garlic in a spicy garlic sauce served in hot iron skillet.",
cost:'14.95',
category:'entree'
},
{
title:'E19',
description:"Mushroom, onion, bell pepper and sweet basil sautéed in chili garlic sauce. Choice of Chicken, Beef, pork or tofu.",
cost:'9.95',
category:'entree'
},
{
title:'E20',
description:"Sautéed eggplant and bell pepper in red curry sauce with sweet basil. Choice of Choice of Chicken, Beef, pork or tofu.",
cost:'11.95',
category:'entree'
},
{
title:'A21',
description:"Stir fried with red curry, green beans, bell pepper, carrots. Choice of Chicken, Beef, pork or tofu.",
cost:'9.95',
category:'entree'
},
{
title:'E22',
description:"Sweet and sour stir-fry with pineapple, tomato, snow peas, carrots, onions, bell pepper and zucchini. Choice of Chicken, Beef, pork or tofu",
cost:'11.50',
category:'entree'
},
{
title:'E23',
description:"Chicken breast prepared in exotic spices and Flambéed at your table bringing an eruption of flavor and excitement to your plate.",
cost:'13.95',
category:'entree'
},
{
title:'E24',
description:"Sea bass Fillet pan fried golden brown and served in a sautéed basil sauce.",
cost:'13.00',
category:'entree'
},
{
title:'E25',
description:"Fresh Asparagus w/chicken and prawns, onions and carrots sautéed in black bean sauce (Seasonal).",
cost:'14.95',
category:'entree'
},
//GRILL----------------------------------------------------------------------------------
{
title:'G1',
description:"Choice of lamb, fillet or try-tip with tiger prawns. Served with mixed veggies.",
cost:'21.50',
category:'grill'
},
{
title:'G2',
description:"Barbequed chicken marinated in curry, garlic and lemon grass served with green sauce.",
cost:'12.95',
category:'grill'
},
{
title:'G3',
description:"Atlantic Salmon served with Thai Spices special house sauce and vegetables.",
cost:'14.50',
category:'grill'
},
{
title:'G4',
description:"Pork Tenderloin marinated in a cilantro garlic plum sauce. Served with Cilantro Lime Sauce.",
cost:'12.95',
category:'grill'
},
{
title:'G5',
description:"Tender Grilled Pork Ribs with homemade barbeque sauce served with steam vegetables.",
cost:'13.95',
category:'grill'
},
{
title:'G6',
description:"Grilled Filet Mignon marinated in Thai herbs served with home made sauce and steamed vegetables.",
cost:'22.00',
category:'grill'
},
{
title:'G7',
description:"Five barbequed jumbo shrimp served with Thai Spices special home made sauce and steamed vegetables.",
cost:'14.50',
category:'grill'
},
{
title:'G8',
description:"Half chicken marinated in Thai herbs and lemon grass served with sweet n' sour sauce.",
cost:'12.95',
category:'grill'
},
{
title:'G9',
description:"Lamb rack marinated in a cilantro garlic plum sauce.",
cost:'18.95',
category:'grill'
},

//noodles and rice------------------------------------------------------------------------------------------------------
{
title:'N1',
description:"Fried rice with mango, chicken, onion, egg, peas, carrots in garlic sauce.",
cost:'12.95',
category:'Noodles and Rice'
},
{
title:'N2',
description:"Pan fried fresh wide rice noodles topped with broccoli and gravy sauce. Choice of Chicken, Beef, pork or tofu.",
cost:'10.95',
category:'Noodles and Rice'
},
{
title:'N3',
description:"Pan fried fresh wide fried noodles in a spicy garlic sauce, sweet basil and tomatoes served over bean sprouts and lettuce. Choice of Chicken, Beef, pork or tofu.",
cost:'10.95',
category:'Noodles and Rice'
},
{
title:'N4',
description:"Traditional Thai fried rice with onions and egg. Choice of Chicken, beef, pork or tofu and vegetable.",
cost:'10.50',
category:'Noodles and Rice'
},
{
title:'N5',
description:"Lobster 10oz. and fried rice in garlic sauce, onions, peas and carrots and yellow curry.",
cost:'30.95',
category:'Noodles and Rice'
},
{
title:'N6',
description:"Chow main in garlic sauce with chicken, bell pepper, bean sprouts, cabbage, onion, mushroom, carrots and celery.",
cost:'12.95',
category:'Noodles and Rice'
},
{
title:'N7',
description:"Traditional Thai style fried noodles with egg, tofu, bean sprouts and ground peanuts, Choice of Chicken, Beef, pork or tofu and vegetable.",
cost:'10.95',
category:'Noodles and Rice'
},
{
title:'N8',
description:"Pan fried wide rice noodles with egg and broccoli in a sweet and spicy soy sauce. Choice of Chicken Beef, pork or tofu.",
cost:'10.95',
category:'Noodles and Rice'
},
{
title:'N9',
description:"Stir fried shrimp and chicken with fresh pineapple, onion, peas and carrots topped with cashews.",
cost:'13.95',
category:'Noodles and Rice'
},
{
title:'N10',
description:"Spicy fried rice in garlic, chili sauce, onions and sweet basil. Choice of Chicken, Beef, pork or tofu and vegetable.",
cost:'10.50',
category:'Noodles and Rice'
},
{
title:'N11',
description:"Crystal noodle with chicken, shrimp, celery, bell pepper, onion, carrot, baby corn, Egg and snow pea stir-fried in garlic sauce.",
cost:'13.95',
category:'Noodles and Rice'
},
//curry dish----------------------------------------------------
{
  title:'C1',
  description:"Chicken and shrimp simmered in yellow curry with onions, snow peas, carrots, cauliflower and basil.",
  cost:'13.95',
  category:'curry'
  },
  {
  title:'C2',
  description:"Duck meat simmered in red curry sauce with pineapple, grape, tomatoes, onion, bell pepper and basil.",
  cost:'13.95',
  category:'curry'
  },
  {
  title:'C3',
  description:"Sea Bass simmered in red curry with onion, bell pepper, spinach, fresh pineapple and basil.",
  cost:'14.95',
  category:'curry'
  },
  {
  title:'C4',
  description:"Choice of chicken, beef, pork or tofu simmered in green curry and coconut milk with snow peas, bell peppers, green beans and basil leaf.",
  cost:'10.95',
  category:'curry'
  },
  {
  title:'C5',
  description:"Simmered in red curry and coconut milk with carrots, peas onion bell pepper and kaffir lime leaves. Choice of Chicken, Beef, pork or tofu.",
  cost:'10.00',
  category:'curry'
  },
  {
  title:'C6',
  description:"Chow main in garlic sauce with chicken, bell pepper, bean sprouts, cabbage, onion, mushroom, carrots and celery.",
  cost:'12.95',
  category:'curry'
  },
  {
  title:'C7',
  description:"Lobster tail simmered in green curry sauce with bell pepper, onion, asparagus and basil.",
  cost:'30.95',
  category:'curry'
  },
  {
  title:'C8',
  description:"Lamb, potatoes, onions, bell peppers and peanuts in mussamun curry sauce.",
  cost:'15.95',
  category:'curry'
  },
  {
  title:'C9',
  description:"Choice of chicken, beef, pork or tofu with potatoes, onions, carrotsnin yellow curry and coconut milk.",
  cost:'10.00',
  category:'curry'
  },
  {
  title:'C10',
  description:"Choice of chicken, beef, pork or tofu with bamboo shoots, bell pepper and basil leaf simmered in red curry and coconut milk.",
  cost:'10.95',
  category:'curry'
  },
  {
  title:'C11',
  description:"Choice of chicken, beef, pork or tofu with potatoes, onions, bell pepper whole peanuts in Masman curry and coconut milk.",
  cost:'10.00',
  category:'curry'
  },
  //DESSERT----------------------------------------------------------------
  {
  title:'D1',
  description:"",
  cost:'5.95',
  category:'dessert'
  },
  {
  title:'D2',
  description:"Vanilla Ice Cream in iced coffee and whipped cream",
  cost:'3.95',
  category:'dessert'
  },
  {
  title:'D3',
  description:"Topped with toasted coconut",
  cost:'3.95',
  category:'dessert'
  },
  {
  title:'D4',
  description:"Topped with toasted coconut",
  cost:'5.95',
  category:'dessert'
  },
  {
  title:'D5',
  description:"Coconut, Chocolate, Vanilla, Mango, Strawberry or Green Tea",
  cost:'3.95',
  category:'dessert'
  },
  {
  title:'D6',
  description:"Ice Cream served with fresh bananas and toppings",
  cost:'5.95',
  category:'dessert'
  },
  {
  title:'D7',
  description:"Sticky rice simmered in sweet coconut milk",
  cost:'5.50',
  category:'dessert'
  },
  //side----------------------------------------------------------------------------------------------------
  //rice stuff
  //soup-------------------------------------------------------------------------------------------
  {
  title:'Soup1',
  description:"Chicken with fresh mushrooms in a coconut milk broth seasoned with galanga, lemon grass, cilantro and kaffir lime leaf.",
  cost:'9.95',
  category:'soup'
  },
  {
  title:'Soup2',
  description:"Chicken with fresh mushrooms in hot and sour broth seasoned ith cilantro and lemon grass.",
  cost:'8.95',
  category:'soup'
  },
  {
  title:'Soup3',
  description:"Combination of seafood with fresh mushrooms in hot and sour broths seasoned with cilantro, lemon grass, galangal, kaffir lime leaf.",
  cost:'14.95',
  category:'soup'
  },
  {
  title:'Soup4',
  description:"Prawns with fresh mushrooms in a coconut milk broth seasoned with galanga, lemon grass, cilantro and kaffir lime leaf.",
  cost:'9.95',
  category:'soup'
  },
  {
  title:'Soup5',
  description:"Prawns with fresh mushrooms in hot and sour broth seasoned with cilantro and lemon grass",
  cost:'8.95',
  category:'soup'
  },
  {
  title:'Soup6',
  description:"(Choice of Beef, Chicken, Pork) Rice noodle with bok choi, bean sprouts topped with dried garlic and cilantro",
  cost:'9.95',
  category:'soup'
  },
  //salads---------------------------------------------------------------------------------------------------------
  {
    title:'Sa1',
    description:"Traditional Thai style shredded green papaya with carrots and fresh shrimp - Tossed with tomatoes, chili, garlic in lime juice and roasted peanuts.",
    cost:'8.95',
    category:'salad'
    },
    {
    title:'Sa2',
    description:"Steamed shrimp tossed with red onion, chili, lime juice, cilantro and mint leaves over mixed greens.",
    cost:'10.95',
    category:'salad'
    },
    {
    title:'Sa3',
    description:"Sliced Chicken breast tossed with red onion, chili, lime juice and mint leaves over mixed greens.",
    cost:'9.95',
    category:'salad'
    },
    {
    title:'Sa4',
    description:"Thin sliced beef sautéed in garlic sauce, tomatoes, onion and cilantro over a bed of romaine hearts and rice noodles.",
    cost:'10.00',
    category:'salad'
    },
    {
    title:'Sa5',
    description:"Sliced duck meat in homemade lime sauces tossed with red onions and mint leaves served over romaine.",
    cost:'12.95',
    category:'salad'
    },
    {
    title:'Sa6',
    description:"Grilled salmon or tiger prawn over romaine, spinach, avocado and tomatoes with cilantro sauce.",
    cost:'15.95',
    category:'salad'
    },
    {
    title:'Sa7',
    description:"Sliced beef tossed with red onion, chili, lime juice and mint leaves over mixed greens.",
    cost:'11.95',
    category:'salad'
    },
    {
    title:'Sa8',
    description:"Steamed broccoli served with chicken breast and spinach. Topped with Thai peanut dressing.",
    cost:'9.95',
    category:'salad'
    },
    {
    title:'Sa9',
    description:"Sliced beef tossed with red onion, chili, lime juice and mint leaves over mixed greens.",
    cost:'9.95',
    category:'salad'
    },
    {
    title:'Sa10',
    description:"Mixed green salad and chicken topped with avocado, walnuts and honey ginger dressing.",
    cost:'11.00',
    category:'salad'
    },
  //beverages--------------------------------------------------------------------------------------------------
  {
    title:'Domestic Beer',
    description:"Sierra Nevada, Bud Light",
    cost:'4.95',
    category:'beverage'
    },
    {
    title:'Imported Beer',
    description:"Heineken, Sapporo, Corona, Modelo",
    cost:'4.95',
    category:'beverage'
    },
    {
    title:'Thai Beer',
    description:"Singha, Chang, Leo",
    cost:'4.95 / 7.00',
    category:'beverage'
    },
    {
    title:'Sake',
    description:"Topped with toasted coconut",
    cost:'6.95',
    category:'beverage'
    },
    {
    title:'Thai Iced Tea',
    description:"",
    cost:'3.00',
    category:'beverage'
    },
    {
    title:'Thai Iced Coffee',
    description:"",
    cost:'3.00',
    category:'beverage'
    },
    {
    title:'Hot Coffee',
    description:"",
    cost:'2.95',
    category:'beverage'
    },
    {
    title:'Hot Tea',
    description:"",
    cost:'1.95',
    category:'beverage'
    },
    {
    title:'Soft Drinks',
    description:"Pepsi, Diet Pepsi, Coke, Diet Coke, Sprite, Dr.Pepper",
    cost:'1.75',
    category:'beverage'
    },
    {
    title:'Fresh Coconut Juice',
    description:"",
    cost:'3.95',
    category:'beverage'
    },
    {
      title:'Pellegrino Sparkling Water',
      description:"",
      cost:'3.95',
      category:'beverage'
      },
];

export default MakeMenuItem