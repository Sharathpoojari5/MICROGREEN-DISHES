const fs = require('fs');
const path = require('path');

function parseJSDataFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/^const\s+/gm, 'var ');
  content = content.replace(/^let\s+/gm, 'var ');
  content = content.replace(/^window\./gm, 'var ');
  const fn = new Function(content + '\n return typeof RECIPES !== "undefined" ? RECIPES : (typeof VARIETIES !== "undefined" ? VARIETIES : []);');
  return fn();
}

const recipesPath = path.join(__dirname, 'src', 'data', 'recipes.js');
const varietiesPath = path.join(__dirname, 'src', 'data', 'varieties.js');

let VARIETIES = parseJSDataFile(varietiesPath);
let RECIPES = parseJSDataFile(recipesPath);

// ============================================================
// PER-RECIPE: dish-matched image + simple specific explanation
// Key: recipe ID => { image, simpleUse }
// ============================================================
const RECIPE_OVERRIDES = {

  // ===== BROCCOLI MICROGREENS =====
  'broc-1': {
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter a small handful of fresh Broccoli Microgreens raw over the thick smoothie base right before eating. They add a mild earthy crunch and keep all their live enzymes intact since no heat is involved.'
  },
  'broc-2': {
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Crown the hot risotto with a cluster of raw Broccoli Microgreens just before bringing it to the table. The cool, crisp shoots cut through the heavy parmesan butter and give each spoonful a fresh green bite.'
  },
  'broc-3': {
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Pile Broccoli Microgreens generously on top of the smashed avocado layer. They replace lettuce, stay crisp longer, and the healthy fats in avocado help your body absorb the microgreens nutrients better.'
  },
  'broc-4': {
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Float a ring of Broccoli Microgreens on top of the warm cream soup just before serving. They bring back the fresh brassica aroma that gets lost during cooking, without wilting into the soup.'
  },
  'broc-5': {
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Fold Broccoli Microgreens inside the hot chilla right before folding and serving. The steam from the cooked pancake gently warms them without destroying their crunch or nutrients.'
  },
  'broc-6': {
    image: 'https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Place a cluster of Broccoli Microgreens in the olive oil well in the center of the hummus. They add a peppery green lift to the smooth, tahini-heavy dip and look stunning on the plate.'
  },
  'broc-7': {
    image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Arrange Broccoli Microgreens as one of the colorful sections in the bibimbap bowl before mixing. Their mild flavor balances the spicy gochujang and they stay crisp even after the hot stone bowl warms them slightly.'
  },
  'broc-8': {
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Layer Broccoli Microgreens between the melted cheese and the top bun. They replace plain lettuce with a punchier, more nutritious green that does not wilt under the burger patty heat.'
  },
  'broc-9': {
    image: 'https://images.unsplash.com/photo-1594998893017-36147cbcae05?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Sprinkle Broccoli Microgreens over the ice-cold gazpacho right before serving. The raw green shoots complement the chilled tomato acidity and add a floating textural contrast to the smooth blended soup.'
  },
  'broc-10': {
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Wrap Broccoli Microgreens raw inside the rice paper along with the shrimp and herbs. They show beautifully through the translucent wrapper and add a fresh green flavour without any cooking needed.'
  },
  'broc-11': {
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Gently fold Broccoli Microgreens into the cold quinoa salad just before plating. They add tender green volume to the fluffy grain and their mild brassica note works perfectly with the sweet mango and lime dressing.'
  },
  'broc-12': {
    image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Broccoli Microgreens over the runny egg yolks right off the flame. The ambient heat barely warms them while they add a pop of freshness on top of the rich spiced tomato and eggplant sauce.'
  },
  'broc-13': {
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Pile Broccoli Microgreens high on top of the hot curry noodle bowl just before serving. Their crisp shoots hold up briefly against the steaming coconut broth and cut through the rich, fatty curry flavour.'
  },
  'broc-14': {
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Garnish the warm tagine bowl with Broccoli Microgreens right before eating. Their clean green sharpness refreshes the sweet, warm cinnamon and apricot spices and contrasts nicely with the soft couscous.'
  },
  'broc-15': {
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Stir Broccoli Microgreens directly into the chimichurri sauce before spooning it over the rested steak. They blend into the herb oil and add a subtle brassica depth that enhances the parsley and garlic base.'
  },
  'broc-16': {
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Pile Broccoli Microgreens tall on top of the boiled potato slices on the open rye bread. They add height, colour, and a peppery freshness that cuts through the heavy cultured butter and dill cream.'
  },
  'broc-17': {
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Tuck Broccoli Microgreens inside the pita wrap alongside the falafel balls. Their crisp lightness balances the heavy, fried texture of falafel and refreshes the pungent garlic toum sauce.'
  },
  'broc-18': {
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Mound Broccoli Microgreens on top of the chilled soba noodles before serving. The cold noodles keep them crisp and their earthy bite pairs naturally with the buckwheat flavour and soy dipping sauce.'
  },
  'broc-19': {
    image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Toss Broccoli Microgreens over the hot open mussels right before the lid is removed at the table. They sit inside the shells and pick up the steam from the white wine butter broth without overcooking.'
  },
  'broc-20': {
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Mix Broccoli Microgreens directly into the raw tuna poke dressing before assembling the bowl. They coat in the sesame soy marinade and add a mild green crunch between the tender tuna cubes.'
  },

  // ===== SANGO RADISH MICROGREENS =====
  'sango-1': {
    image: 'https://images.unsplash.com/photo-1565365867820-4f09ea8b4337?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Sango Radish Microgreens generously over the hot buttered paratha right off the tawa. Their natural peppery punch eliminates the need for extra chili and the vivid purple colour looks stunning against the golden bread.'
  },
  'sango-2': {
    image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Crown the plated salmon ceviche with Sango Radish Microgreens right before serving. Their bold purple colour contrasts beautifully against the pink fish and their spicy radish warmth replaces the sharpness of raw red onion.'
  },
  'sango-3': {
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Sprinkle Sango Radish Microgreens over the hot pork and pineapple inside the corn tortilla. They add a peppery radish kick that balances the sweetness of charred pineapple and stay crisp unlike soft cilantro.'
  },
  'sango-4': {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Fold Sango Radish Microgreens into the warm beef salad right before plating. Their purple colour pops against the grilled beef and their peppery bite intensifies the lime, fish sauce, and chili dressing perfectly.'
  },
  'sango-5': {
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Sango Radish Microgreens across the thin beef carpaccio slices right before serving. The deep magenta against the red raw beef is visually dramatic, and their natural mustard-radish bite lifts the delicate olive oil and caper dressing.'
  },
  'sango-6': {
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Fold Sango Radish Microgreens into the chilled tabbouleh just before serving. Their purple specks add colour contrast to the bright green herb salad and their peppery undertone balances the flat-leaf parsley and lemon juice.'
  },
  'sango-7': {
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Crown the hot sliced kimchi pancake with Sango Radish Microgreens right out of the skillet. Their spicy radish sharpness cuts through the oily, crispy pancake and complements the sour fermented kimchi flavour.'
  },
  'sango-8': {
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Arrange Sango Radish Microgreens beside the tuna slices on the sashimi plate, replacing the traditional shredded daikon. Their refined purple radish heat pairs naturally with wasabi and the clean taste of raw bluefin tuna.'
  },
  'sango-9': {
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Sango Radish Microgreens over the steamed dumplings right before pouring the chili oil. They add a crisp purple garnish on the soft dim sum skins and their spicy note infuses into the Sichuan dipping sauce.'
  },
  'sango-10': {
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Layer Sango Radish Microgreens directly over the pulled pork inside the slider bun. They replace soggy cabbage slaw with a light, peppery purple crunch that stands up to the sweet hickory BBQ sauce.'
  },
  'sango-11': {
    image: 'https://images.unsplash.com/photo-1484723091791-c0e7e53c713b?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Place Sango Radish Microgreens on top of the finished dish right before serving. Their vibrant purple colour and peppery radish flavour add a bold, fresh contrast to the warm ingredients.'
  },
  'sango-12': {
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Toss Sango Radish Microgreens through the finished pasta right before plating. Their peppery bite adds a spicy note that works like freshly cracked black pepper, while the purple shoots look elegant against the golden pasta.'
  },
  'sango-13': {
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Sango Radish Microgreens over the finished BBQ right before serving. Their peppery sharpness cuts through the smoky fat and the purple colour adds a vibrant garnish to the rich brown barbecue.'
  },
  'sango-14': {
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Garnish the finished pasta with Sango Radish Microgreens just before serving. They replace basic basil with a spicier green note and the purple colour pops against the red tomato-based sauce.'
  },
  'sango-15': {
    image: 'https://images.unsplash.com/photo-1565557615-9c98bbd0bfda?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Top the ramen bowl with Sango Radish Microgreens right before eating. Their peppery radish kick adds a raw heat note to the rich pork broth and the purple shoots create a dramatic contrast against the golden soup.'
  },
  'sango-16': {
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Stir Sango Radish Microgreens into the fried rice right at the end before serving. They wilt slightly in the residual heat, releasing a warm radish aroma that elevates the soy and sesame base of the dish.'
  },
  'sango-17': {
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Toss Sango Radish Microgreens through the Mediterranean salad right before plating. Their peppery warmth adds a punchy note alongside olives and feta and the purple colour makes the salad visually stunning.'
  },
  'sango-18': {
    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Float Sango Radish Microgreens on top of the warm lentil soup right before serving. They add a spicy radish note to the earthy legume broth and their purple colour creates a beautiful contrast against the brown soup.'
  },
  'sango-19': {
    image: 'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Top the bruschetta with Sango Radish Microgreens after adding the tomato topping. They add a peppery crunch and vibrant purple colour that elevates the simple toasted bread into a refined appetizer.'
  },
  'sango-20': {
    image: 'https://images.unsplash.com/photo-1490645935980-d14c9777f988?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Toss Sango Radish Microgreens through the roasted vegetable salad right before plating. Their peppery kick brings a raw, fresh contrast to the soft, caramelised roasted vegetables and the purple adds great colour.'
  },

  // ===== SUNFLOWER MICROGREENS =====
  'sun-1': {
    image: 'https://images.unsplash.com/photo-1511690655020-419b019313a7?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Sunflower Microgreens over the acai bowl right before eating. Their nutty, mild flavour pairs perfectly with the berry sweetness and their thick, succulent leaves add a satisfying chew to the smoothie base.'
  },
  'sun-2': {
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Place Sunflower Microgreens over the poached egg and hollandaise right before serving. Their nutty protein-rich leaves complement the richness of the egg yolk and buttery sauce without overpowering the delicate flavours.'
  },
  'sun-3': {
    image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Sunflower Microgreens over the carved roast chicken right before serving. Their nutty, hearty texture holds up next to the meaty chicken and their complete plant protein complements the animal protein of the dish.'
  },
  'sun-4': {
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Serve Sunflower Microgreens alongside the meat skewers as a fresh side garnish. Their nutty bite and succulent texture pair well with the smoky char of the grilled meat and they refresh the palate between skewers.'
  },
  'sun-5': {
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Fill the stuffed peppers with a layer of Sunflower Microgreens on top of the cooked filling before the final bake. They wilt slightly and release a nutty aroma that enriches the pepper and grain filling inside.'
  },
  'sun-6': {
    image: 'https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Sunflower Microgreens over the sliced tomatoes and mozzarella of the caprese right before serving. Their thick, nutty leaves add a satisfying chew alongside the soft cheese and juicy tomatoes.'
  },
  'sun-7': {
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Place Sunflower Microgreens alongside the grilled salmon fillet right before plating. Their nutty flavour is one of the few greens that genuinely complements oily fish without clashing, and they boost the Vitamin E content of the meal.'
  },
  'sun-8': {
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Add Sunflower Microgreens as a topping on the naan pizza after it comes out of the oven. The residual oven heat very slightly wilts them, releasing a nutty aroma that pairs beautifully with the cheese and herbs on top.'
  },
  'sun-9': {
    image: 'https://images.unsplash.com/photo-1599785209796-786b97a94e6b?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Stir Sunflower Microgreens into the dal right before serving. Their succulent, nutty shoots dissolve slightly into the warm lentils, adding a fresh green note and plant protein that boosts the already protein-rich dal.'
  },
  'sun-10': {
    image: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Float Sunflower Microgreens on the French onion soup right before serving, alongside the melted Gruyere toast. Their mild, nutty flavour complements the caramelised onion sweetness without competing with the rich cheese.'
  },
  'sun-11': {
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Place Sunflower Microgreens on top of the pan-seared fish fillet right before plating. Their thick, succulent leaves hold their shape on warm fish without wilting instantly, adding a nutty contrast to the delicate white fish.'
  },
  'sun-12': {
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Toss Sunflower Microgreens through the Caesar salad in place of, or alongside, croutons. Their hearty, nutty chew replaces the crunch of croutons while adding complete plant protein and Vitamin E to the creamy dressing.'
  },
  'sun-13': {
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Float Sunflower Microgreens on top of the mushroom soup right before serving. Their earthy, nutty flavour pairs naturally with the deep umami of the mushroom broth and they add a pleasant fresh texture to the smooth soup.'
  },
  'sun-14': {
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4850?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Garnish the lamb stew bowl with Sunflower Microgreens right before serving. Their robust, nutty leaves are one of the few microgreens hearty enough to hold their own alongside strongly flavoured braised lamb.'
  },
  'sun-15': {
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Layer Sunflower Microgreens between the granola and yoghurt layers of the parfait. Their nutty crunch blends naturally with the granola texture and adds a savoury green note that balances the sweet fruit and honey layers.'
  },
  'sun-16': {
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Pile Sunflower Microgreens on top of the fried egg on toast right before eating. Their thick, nutty leaves sit firmly on the egg without sliding off, adding a fresh green crunch that pairs beautifully with the runny yolk.'
  },
  'sun-17': {
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Sunflower Microgreens over the moussaka right after it comes out of the oven. The warm baked surface slightly warms the shoots without cooking them, adding a nutty, fresh contrast to the rich meat and bechamel layers.'
  },
  'sun-18': {
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Add Sunflower Microgreens to the Thai basil stir-fry right at the very end, off the heat. They wilt just enough to integrate with the garlic and fish sauce base while retaining a nutty bite that complements the Thai basil.'
  },
  'sun-19': {
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Sunflower Microgreens over the nachos right before serving alongside the dips. Their nutty, succulent texture holds up between the crunchy chips and fresh salsa without going limp.'
  },
  'sun-20': {
    image: 'https://images.unsplash.com/photo-1494390248081-4e58b7538a06?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Top the waffles with Sunflower Microgreens alongside the fruit and syrup. Their nutty, hearty texture provides a savoury-sweet balance that makes the waffles feel more nourishing and less one-dimensionally sweet.'
  },

  // ===== SWEET PEA SHOOTS =====
  'pea-1': {
    image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Toss Sweet Pea Shoots into the stir-fry right at the very last moment before removing from heat. Their tender, sweet tendrils wilt beautifully in 30 seconds of heat and deliver a burst of fresh pea flavour through every bite.'
  },
  'pea-2': {
    image: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Add Sweet Pea Shoots to the Pad Thai right after plating, on top of the noodles. Their sweet, tender shoots pair naturally with the tamarind-peanut sauce and curl elegantly around the noodles for a beautiful presentation.'
  },
  'pea-3': {
    image: 'https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Drop Sweet Pea Shoots into the hot udon soup right before serving. Their delicate tendrils curl naturally in the warm broth and release a fresh, sweet pea flavour that lifts the rich soy and mirin soup base.'
  },
  'pea-4': {
    image: 'https://images.unsplash.com/photo-1634487359989-3e90c9432133?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Arrange Sweet Pea Shoots on the dim sum plate alongside the dipping sauce. Their sweet, tender tendrils complement the savoury pork or prawn fillings inside and offer a refreshing palate cleanser between dumplings.'
  },
  'pea-5': {
    image: 'https://images.unsplash.com/photo-1416453072034-c8dbfa2856b9?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Place Sweet Pea Shoots beside and over the freshly shucked oysters on the platter. Their clean, sweet flavour complements the briny sea taste of oysters and their delicate curling tendrils make the platter look exquisite.'
  },
  'pea-6': {
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Layer Sweet Pea Shoots inside the sandwich alongside the fillings. Their tender leaves replace regular lettuce with a sweeter, more flavourful green that stays crisp between the bread slices without going soggy.'
  },
  'pea-7': {
    image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Stir Sweet Pea Shoots into the warm congee right before serving. They wilt gently into the silky rice porridge, releasing a sweet, fresh pea flavour that perfectly complements the mild, comforting base.'
  },
  'pea-8': {
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Sweet Pea Shoots over the steamed dumplings right before serving. Their sweet, delicate tendrils curl attractively over the rounded shapes and their fresh flavour contrasts beautifully with the savoury dumpling filling.'
  },
  'pea-9': {
    image: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Toss Sweet Pea Shoots through the spring salad right before plating. Their sweet, tender shoots feel at home among light greens and their natural pea sweetness pairs perfectly with a simple lemon vinaigrette.'
  },
  'pea-10': {
    image: 'https://images.unsplash.com/photo-1561755257-b48df9e2c3b4?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Arrange Sweet Pea Shoot tendrils elegantly across the cheese board. Their delicate, curling green stems make the board look beautiful and their fresh, sweet flavour pairs wonderfully with aged cheeses and honey.'
  },
  'pea-11': {
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Toss Sweet Pea Shoots through the tagliatelle right before plating. Their tender tendrils wrap around the ribbon pasta naturally and release a sweet, fresh pea flavour that lightens the creamy or buttery pasta sauce.'
  },
  'pea-12': {
    image: 'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Place Sweet Pea Shoots alongside the poached eggs on the plate. Their sweet, fresh flavour pairs with the runny yolk and the elegant curling tendrils make even a simple poached egg plate look like a restaurant dish.'
  },
  'pea-13': {
    image: 'https://images.unsplash.com/photo-1504544750208-dc0358ad5b72?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Stir Sweet Pea Shoots into the West African stew right before serving. Their sweet, tender tendrils balance the bold, spiced tomato base and add a fresh garden element to the hearty, rich stew.'
  },
  'pea-14': {
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Arrange Sweet Pea Shoots on top of the fresh spring bowl right before eating. Their sweet, curling tendrils are the natural centrepiece of any fresh bowl and their flavour ties together the raw vegetables and light dressing.'
  },
  'pea-15': {
    image: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Serve Sweet Pea Shoots alongside the pita and dips platter. Their tender tendrils can be scooped up with pita alongside the hummus and dips, and their fresh sweet flavour bridges the rich, sesame-heavy dips.'
  },
  'pea-16': {
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Sweet Pea Shoots over the pizza right after it comes out of the oven. The residual heat very briefly wilts the tender tendrils and they release a sweet pea aroma that lifts the savoury cheese and tomato topping.'
  },
  'pea-17': {
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Layer Sweet Pea Shoots between the pancake stack layers and on top as a garnish. Their sweet, fresh flavour provides a savoury counterpoint to the buttery, maple-sweet pancakes and makes the stack look elegant and fresh.'
  },
  'pea-18': {
    image: 'https://images.unsplash.com/photo-1596560548464-f010b48e9e1a?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Toss Sweet Pea Shoots through the tropical fruit salad right before plating. Their sweet, tender flavour blends naturally with the fresh tropical fruits and their curling green tendrils add beautiful visual contrast to the bright fruit colours.'
  },
  'pea-19': {
    image: 'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Toss Sweet Pea Shoots through the zucchini noodles right before plating. Their tender, sweet tendrils are at home alongside the raw spiralized zucchini and their fresh pea flavour lightens the creamy or raw sauce of the dish.'
  },
  'pea-20': {
    image: 'https://images.unsplash.com/photo-1542528180-1c2803fa048c?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Arrange Sweet Pea Shoots on the sushi platter as a garnish alongside the rolls. Their sweet, elegant tendrils complement the delicate rice and fish flavours beautifully and make the platter look premium and restaurant-quality.'
  },

  // ===== RED AMARANTH MICROGREENS =====
  'amar-1': {
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Place Red Amaranth Microgreens on the sushi rolls right before serving. Their striking ruby-red colour creates a dramatic contrast against the white rice and their mild, earthy flavour does not compete with the delicate fish.'
  },
  'amar-2': {
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Red Amaranth Microgreens over the pizza right after it comes out of the oven. Their ruby-red colour stands out beautifully against the golden cheese and their mild, earthy spinach-like taste adds a fresh green note to the rich toppings.'
  },
  'amar-3': {
    image: 'https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Red Amaranth Microgreens over the grilled lamb chops right before plating. Their iron-rich, earthy flavour is strong enough to complement the bold, gamey taste of lamb and their red colour makes the plate look luxurious.'
  },
  'amar-4': {
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Stir Red Amaranth Microgreens into the butternut squash soup right before serving. Their mild, earthy flavour complements the sweet squash and their striking red colour creates a beautiful contrast against the orange soup.'
  },
  'amar-5': {
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Toss Red Amaranth Microgreens through the Mediterranean vegetable salad right before plating. Their ruby-red leaves create a stunning colour contrast against the vegetables and their earthy spinach-like flavour enhances the olive oil dressing.'
  },
  'amar-6': {
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Place Red Amaranth Microgreens on the lemon tart right before serving as a decorative and flavourful garnish. Their earthy, slightly bitter note provides a sophisticated contrast to the sharp lemon curd sweetness.'
  },
  'amar-7': {
    image: 'https://images.unsplash.com/photo-1585325701956-60dd9c8e77ef?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Red Amaranth Microgreens over the Moroccan platter right before serving. Their earthy, mild flavour complements the warm cinnamon and cumin spices and the deep ruby-red colour makes the colourful Moroccan spread look even more vibrant.'
  },
  'amar-8': {
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Red Amaranth Microgreens over the lemon chicken right before serving. Their mild, earthy flavour pairs naturally with the herb and citrus roasting notes and the red shoots look stunning against the golden roasted chicken skin.'
  },
  'amar-9': {
    image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Top the toast spread with Red Amaranth Microgreens right before eating. Their mild, earthy flavour complements any spread from ricotta to nut butter and their vivid red colour makes even a simple toast look restaurant-worthy.'
  },
  'amar-10': {
    image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Red Amaranth Microgreens over the berry bowl right before eating. Their earthy, slightly tangy flavour creates a sophisticated contrast to the sweet berries and their ruby-red colour blends beautifully with the deep berry colours.'
  },
  'amar-11': {
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Add Red Amaranth Microgreens to the colourful grain bowl right before serving. Their ruby-red leaves are the natural crown of any multi-coloured bowl and their earthy, mild flavour blends harmoniously with any grain and dressing.'
  },
  'amar-12': {
    image: 'https://images.unsplash.com/photo-1555243896-c709bfa0b564?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Layer Red Amaranth Microgreens inside the sandwich alongside the fillings. Their firm, earthy leaves hold their structure between slices better than soft lettuce and their mild flavour pairs with any protein filling.'
  },
  'amar-13': {
    image: 'https://images.unsplash.com/photo-1504718855392-c0f33b372e72?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Stir Red Amaranth Microgreens into the vegetarian curry right before serving. Their mild, earthy spinach-like flavour blends naturally into the curry base and their red colour adds a beautiful visual contrast to the golden spiced sauce.'
  },
  'amar-14': {
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Red Amaranth Microgreens over the pasta bake right after it comes out of the oven. The residual heat softens them slightly into the cheesy top layer and their earthy flavour adds a fresh green note to the rich baked pasta.'
  },
  'amar-15': {
    image: 'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Crown the mushroom risotto with Red Amaranth Microgreens right before bringing it to the table. Their earthy, umami-adjacent flavour pairs perfectly with the deep mushroom base and their red colour is a stunning contrast to the creamy pale risotto.'
  },
  'amar-16': {
    image: 'https://images.unsplash.com/photo-1560684352-8497838a2229?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Red Amaranth Microgreens over the jerk chicken right before plating. Their mild, earthy flavour stands up to the bold jerk spices and the deep red colour contrasts dramatically against the charred dark jerk crust.'
  },
  'amar-17': {
    image: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Top the healthy grain bowl with Red Amaranth Microgreens as the central garnish. Their striking ruby-red colour is the finishing touch that makes a health bowl look premium and their mild earthy flavour complements any combination of grains and roasted vegetables.'
  },
  'amar-18': {
    image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Scatter Red Amaranth Microgreens over the pizza right after slicing. Their earthy, mild flavour adds a fresh note to the rich cheese and the vivid red colour creates a stunning visual contrast against the golden melted mozzarella.'
  },
  'amar-19': {
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Place Red Amaranth Microgreens alongside the steak on the dinner plate. Their iron-rich, earthy flavour is uniquely suited to red meat dishes and their ruby-red shoots make the steak plate look like a Michelin-star presentation.'
  },
  'amar-20': {
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=800&q=80',
    simpleUse: 'Top the mushroom toast with Red Amaranth Microgreens right before serving. Their earthy, umami flavour resonates perfectly with the deep savouriness of sauteed mushrooms and their ruby-red colour makes this simple toast look like a bistro-quality starter.'
  },
};

// Apply overrides
RECIPES = RECIPES.map(r => {
  const override = RECIPE_OVERRIDES[r.id];
  if (override) {
    r.image = override.image;
    // Replace the last instruction step with a clean, simple use-case
    const lastStep = r.instructions[r.instructions.length - 1];
    if (lastStep && (lastStep.toLowerCase().includes('microgreen') || lastStep.toLowerCase().startsWith('exact'))) {
      r.instructions.pop();
    }
    r.instructions.push('HOW TO USE: ' + override.simpleUse);
  }
  return r;
});

// Verify
const allImages = RECIPES.map(r => r.image);
const uniqueImages = new Set(allImages);
console.log("Total recipes:", RECIPES.length, "| Unique images:", uniqueImages.size);
if (uniqueImages.size === RECIPES.length) {
  console.log("✅ All", RECIPES.length, "recipes have unique, dish-matched images and simple explanations!");
} else {
  console.warn("⚠️ Still", RECIPES.length - uniqueImages.size, "duplicates. Missing overrides for:", 
    RECIPES.filter(r => !RECIPE_OVERRIDES[r.id]).map(r => r.id).join(', '));
}

const newRecipes = 'window.RECIPES = ' + JSON.stringify(RECIPES, null, 2) + ';';
const newVarieties = 'window.VARIETIES = ' + JSON.stringify(VARIETIES, null, 2) + ';';
fs.writeFileSync(recipesPath, newRecipes);
fs.writeFileSync(varietiesPath, newVarieties);
console.log("✅ Files written successfully!");
