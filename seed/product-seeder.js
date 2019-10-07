var Product = require("../models/product");

var mongoose = require("mongoose");
var keys = require("../config/keys");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
});

var products = [
  [
    new Product({
      imagePath: "images/home-page-thumbnails/watch-dogs-2.jpg",
      title: "Watch Dogs 2",
      price: 60,
      genre: "Action, Adventure",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action adventure",
      platformTag: "xbox windows playstation",
      releaseDate: "2016-11-15",
      developer: "Ubisoft"
    }),

    new Product({
      imagePath: "images/home-page-thumbnails/god-of-war.jpg",
      title: "God of War",
      price: 50,
      genre: "Action, Adventure",
      platform: ["playstation"],
      genreTag: "action adventure",
      platformTag: "playstation",
      releaseDate: "2018-04-20",
      developer: "Santa Monica Studio"
    }),
    new Product({
      imagePath: "images/home-page-thumbnails/cybrpnk.jpg",
      title: "Cyberpunk 2077 Pre-purchase",
      price: 60,
      genre: "RPG",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "rpg",
      platformTag: "xbox windows playstation",
      releaseDate: "2020-04-16",
      developer: "CD Projekt"
    }),
    new Product({
      imagePath: "images/home-page-thumbnails/forza-horizon-4.jpg",
      title: "Forza Horizon 4",
      price: 60,
      genre: "Racing, Simulation",
      platform: ["xbox", "windows"],
      genreTag: "racing simulation",
      platformTag: "xbox windows",
      releaseDate: "2018-10-02",
      developer: "Turn 10 Studios"
    })
  ],
  [
    new Product({
      imagePath: "images/special-offers/rage-2.jpg",
      discount: 17,
      title: "Rage 2",
      oldPrice: 60,
      price: 50,
      genre: "Action, FPS",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action fps",
      platformTag: "xbox windows playstation",
      releaseDate: "2019-05-14",
      developer: "id Software"
    }),
    new Product({
      imagePath: "images/special-offers/motogp-19.jpg",
      discount: 30,
      title: "Moto GP 19",
      oldPrice: 50,
      price: 30,
      genre: "Racing, Simulation",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "racing simulation sports",
      platformTag: "xbox windows playstation",
      releaseDate: "2019-06-06",
      developer: "Milestone"
    }),
    new Product({
      imagePath: "images/special-offers/mk11.jpg",
      discount: 35,
      title: "Mortal Kombat 11",
      oldPrice: 40,
      price: 26,
      genre: "Fighting",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action fighting",
      platformTag: "xbox windows playstation",
      releaseDate: "2019-04-23",
      developer: "NetherRealm Studios"
    }),
    new Product({
      imagePath: "images/special-offers/trials-rising.jpg",
      discount: 17,
      title: "Trials Rising",
      oldPrice: 30,
      price: 25,
      genre: "Racing, Platform",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "racing platform sports",
      platformTag: "xbox windows playstation",
      releaseDate: "2019-02-26",
      developer: "Ubisoft"
    }),
    new Product({
      imagePath: "images/special-offers/resident-evil-2.jpg",
      discount: 35,
      title: "Resident Evil 2",
      oldPrice: 40,
      price: 26,
      genre: "Survival Horror",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action survival horror",
      platformTag: "xbox windows playstation",
      releaseDate: "2019-01-25",
      developer: "Capcom"
    }),
    new Product({
      imagePath: "images/special-offers/sekiro.jpg",
      discount: 17,
      title: "Sekiro Shadows Die Twice",
      oldPrice: 60,
      price: 50,
      genre: "Survival Horror",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action survival horror",
      platformTag: "xbox windows playstation",
      releaseDate: "2019-03-22",
      developer: "FromSoftware"
    }),
    new Product({
      imagePath: "images/special-offers/the-sinking-city.jpg",
      discount: 17,
      title: "The Sinking City",
      oldPrice: 60,
      price: 50,
      genre: "Survival Horror",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action survival horror",
      platformTag: "xbox windows playstation",
      releaseDate: "2019-06-27",
      developer: "Frogwares"
    }),
    new Product({
      imagePath: "images/special-offers/division-2.jpg",
      discount: 20,
      title: "Tom Clancy's The Division 2",
      oldPrice: 70,
      price: 56,
      genre: "Action, RPG",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action rpg",
      platformTag: "xbox windows playstation",
      releaseDate: "2019-03-15",
      developer: "Massive Entertainment"
    }),
    new Product({
      imagePath: "images/special-offers/life-is-strange-2.jpg",
      discount: 50,
      title: "Life Is Strange 2",
      oldPrice: 40,
      price: 20,
      genre: "Graphic adventure",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "adventure",
      platformTag: "xbox windows playstation",
      releaseDate: "2018-09-27",
      developer: "Dontnod Entertainment"
    })
  ],
  [
    new Product({
      imagePath:
        "images/game-tabs/new-and-trending/wolfenstein-young-blood.jpg",
      title: "Wolfenstein Youngblood",
      price: 30,
      genre: "Action, FPS",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action fps",
      platformTag: "xbox windows playstation",
      releaseDate: "2019-07-25",
      developer: "Arkane Studios"
    }),
    new Product({
      imagePath: "images/game-tabs/new-and-trending/oxygen-not-included.jpg",
      title: "Oxygen Not Included",
      price: 13,
      genre: "Survival, Adventure",
      platform: ["windows"],
      genreTag: "survival adventure",
      platformTag: "windows",
      releaseDate: "2019-07-01",
      developer: "Klei Entertainment"
    }),
    new Product({
      imagePath: "images/game-tabs/new-and-trending/blackout-club.jpg",
      title: "Blackout Club",
      price: 19,
      genre: "Action, Horror",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action horror",
      platformTag: "xbox windows playstation",
      releaseDate: "2019-07-30",
      developer: "Question Games"
    }),
    new Product({
      imagePath: "images/game-tabs/new-and-trending/total-war-3k.jpg",
      title: "Total War Three Kingdoms",
      price: 39,
      genre: "Action, Strategy",
      platform: ["windows"],
      genreTag: "action strategy",
      platformTag: "windows",
      releaseDate: "2019-05-23",
      developer: "The Creative Assembly"
    }),
    new Product({
      imagePath: "images/game-tabs/new-and-trending/ace-combat.jpg",
      title: "Ace Combat 7 Skies Unknown",
      price: 40,
      genre: "Action, Simulation",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action simulation",
      platformTag: "xbox windows playstation",
      releaseDate: "2019-01-18",
      developer: "Bandai Namco Games"
    }),
    new Product({
      imagePath: "images/game-tabs/new-and-trending/f1-2019.jpg",
      title: "F1 2019 Anniversary Edition",
      price: 42,
      genre: "Racing, Simulation",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "racing simulation",
      platformTag: "xbox windows playstation",
      releaseDate: "2019-06-28",
      developer: "Codemasters"
    }),
    new Product({
      imagePath: "images/game-tabs/new-and-trending/farming-19.jpg",
      title: "Farming Simulator 19",
      price: 35,
      genre: "Simulation",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "simulation",
      platformTag: "xbox windows playstation",
      releaseDate: "2018-11-19",
      developer: "GIANTS Software"
    }),
    new Product({
      imagePath: "images/game-tabs/new-and-trending/northgard.jpg",
      title: "Northgard",
      price: 20,
      genre: "Simulation, Strategy",
      platform: ["windows"],
      genreTag: "simulation strategy",
      platformTag: "windows",
      releaseDate: "2018-03-07",
      developer: "Shiro Games"
    }),
    new Product({
      imagePath: "images/game-tabs/new-and-trending/star-control-origins.jpg",
      title: "Star Control Origins",
      price: 11,
      genre: "Action, Adventure, RPG",
      platform: ["windows"],
      genreTag: "action adventure rpg",
      platformTag: "windows",
      releaseDate: "2018-09-20",
      developer: "Stardock"
    }),
    new Product({
      imagePath: "images/game-tabs/new-and-trending/warhammer-40k.jpg",
      title: "Warhammer 40,000 Inquisitor Martyr",
      price: 25,
      genre: "Action, Adventure, RPG",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action adventure rpg",
      platformTag: "xbox windows playstation",
      releaseDate: "2018-06-05",
      developer: "Neocore Games"
    })
  ],
  [
    new Product({
      imagePath: "images/game-tabs/top-sellers/gta-5.jpg",
      title: "Grand Theft Auto V",
      discount: 50,
      oldPrice: 30,
      price: 15,
      genre: "Action, Adventure",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action adventure",
      platformTag: "xbox windows playstation",
      releaseDate: "2013-08-13",
      developer: "Rockstar Games"
    }),
    new Product({
      imagePath: "images/game-tabs/top-sellers/r6-siege.jpg",
      title: "Tom Clancy's Rainbow Six Siege",
      price: 30,
      genre: "FPS",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "FPS",
      platformTag: "xbox windows playstation",
      releaseDate: "2015-12-01",
      developer: "Ubisoft"
    }),
    new Product({
      imagePath: "images/game-tabs/top-sellers/civ-5.jpg",
      title: "Civilization V",
      discount: 50,
      oldPrice: 20,
      price: 10,
      genre: "Strategy",
      platform: ["windows"],
      genreTag: "strategy",
      platformTag: "windows",
      releaseDate: "2010-09-21",
      developer: "Firaxis Games"
    }),
    new Product({
      imagePath: "images/game-tabs/top-sellers/dying-light.jpg",
      title: "Dying Light",
      discount: 20,
      oldPrice: 50,
      price: 40,
      genre: "Action, RPG",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action rpg",
      platformTag: "xbox windows playstation",
      releaseDate: "2015-01-27",
      developer: "Techland"
    }),
    new Product({
      imagePath: "images/game-tabs/top-sellers/eso-elsweyr.jpg",
      title: "The Elder Scrolls Online Elsweyr",
      discount: 35,
      oldPrice: 40,
      price: 26,
      genre: "MMO, RPG",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "mmo rpg",
      platformTag: "xbox windows playstation",
      releaseDate: "2019-05-20",
      developer: "ZeniMax Online Studios"
    }),
    new Product({
      imagePath: "images/game-tabs/top-sellers/ets-2.jpg",
      title: "Euro Truck Simulator 2",
      discount: 33,
      oldPrice: 30,
      price: 20,
      genre: "Indie, Simulation",
      platform: ["windows"],
      genreTag: "indie simulation",
      platformTag: "windows",
      releaseDate: "2012-10-19",
      developer: "SCS Software"
    }),
    new Product({
      imagePath: "images/game-tabs/top-sellers/fm-2019.jpg",
      title: "Football Manager 2019",
      price: 20,
      genre: "Simulation, Sports",
      platform: ["windows"],
      genreTag: "simulation sports",
      platformTag: "windows",
      releaseDate: "2018-11-02",
      developer: "Sports Interactive"
    }),
    new Product({
      imagePath: "images/game-tabs/top-sellers/pubg.jpg",
      title: "PLAYERUNKNOWN'S BATTLEGROUNDS",
      discount: 17,
      oldPrice: 36,
      price: 30,
      genre: "Action, Adventure, MMO",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action adventure mmo",
      platformTag: "xbox windows playstation",
      releaseDate: "2017-03-23",
      developer: "Bluehole Studio"
    }),
    new Product({
      imagePath: "images/game-tabs/top-sellers/rocket-league.jpg",
      title: "Rocket League",
      discount: 23,
      oldPrice: 26,
      price: 20,
      genre: "Action, Racing, Sports",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "action racing sports",
      platformTag: "xbox windows playstation",
      releaseDate: "2015-07-07",
      developer: "Psyonix"
    }),
    new Product({
      imagePath: "images/game-tabs/top-sellers/stardew-valley.jpg",
      title: "Stardew Valley",
      price: 15,
      genre: "Indie, RPG, Simulation",
      platform: ["xbox", "windows", "playstation"],
      genreTag: "indie rpg simulation",
      platformTag: "xbox windows playstation",
      releaseDate: "2016-02-26",
      developer: "Eric Barone"
    })
  ],

  [
    new Product({
      imagePath: "images/shop/halo-5-guardians.jpg",
      title: "Halo 5 Guardians",
      price: 20,
      genre: "Action, FPS",
      platform: ["xbox", "windows"],
      genreTag: "action fps",
      platformTag: "xbox windows",
      releaseDate: "2015-10-27",
      developer: "343 Industries"
    }),
    new Product({
      imagePath: "images/shop/gears-of-war-4.jpg",
      title: "Gears of War 4",
      price: 30,
      genre: "Action, TPS",
      platform: ["xbox", "windows"],
      genreTag: "action tps",
      platformTag: "xbox windows",
      releaseDate: "2016-10-11",
      developer: "The Coalition"
    }),
    new Product({
      imagePath: "images/shop/forza-motorsport-7.jpg",
      title: "Forza Motorsport 7",
      price: 40,
      genre: "Sports, Racing",
      platform: ["xbox", "windows"],
      genreTag: "sports racing",
      platformTag: "xbox windows",
      releaseDate: "2017-10-03",
      developer: "Turn 10 Studios"
    }),
    new Product({
      imagePath: "images/shop/sea-of-thieves.jpg",
      title: "Sea of Thieves",
      price: 37,
      genre: "Action, Adventure",
      platform: ["xbox", "windows"],
      genreTag: "action adventure",
      platformTag: "xbox windows",
      releaseDate: "2018-03-20",
      developer: "Rare Ltd"
    }),
    new Product({
      imagePath: "images/shop/ashen.jpg",
      title: "Ashen",
      price: 25,
      genre: "Action, RPG",
      platform: ["xbox", "windows"],
      genreTag: "action rpg",
      platformTag: "xbox windows",
      releaseDate: "2018-12-07",
      developer: "A44 Games"
    }),
    new Product({
      imagePath: "images/shop/ori-and-the-blind-forest.jpg",
      title: "Ori and The Blind Forest",
      price: 18,
      genre: "Platform, Adventure",
      platform: ["xbox", "windows"],
      genreTag: "platform adventure",
      platformTag: "xbox windows",
      releaseDate: "2015-03-11",
      developer: "Moon Studios"
    }),
    new Product({
      imagePath: "images/shop/sunset-overdrive.jpg",
      title: "Sunset Overdrive",
      price: 20,
      genre: "Action, Adventure",
      platform: ["xbox", "windows"],
      genreTag: "action adventure",
      platformTag: "xbox windows",
      releaseDate: "2014-10-28",
      developer: "Insomniac Games"
    }),
    new Product({
      imagePath: "images/shop/cuphead.jpg",
      title: "Cuphead",
      price: 16,
      genre: "Action, Indie",
      platform: ["xbox", "windows"],
      genreTag: "action indie",
      platformTag: "xbox windows",
      releaseDate: "2019-04-17",
      developer: "Studio MDHR"
    }),
    new Product({
      imagePath: "images/shop/horizon-zero-dawn.jpg",
      title: "Horizon Zero Dawn",
      price: 20,
      genre: "Action, RPG, Adventure",
      platform: ["playstation"],
      genreTag: "action rpg adventure",
      platformTag: "playstation",
      releaseDate: "2017-02-28",
      developer: "Guerrilla Games"
    }),

    new Product({
      imagePath: "images/shop/the-last-of-us.jpg",
      title: "The Last of Us",
      price: 20,
      genre: "Action, Adventure, Survival Horror",
      platform: ["playstation"],
      genreTag: "action adventure survival horror",
      platformTag: "playstation",
      releaseDate: "2013-06-14",
      developer: "Naughty Dog"
    }),
    new Product({
      imagePath: "images/shop/days-gone.jpg",
      title: "Days Gone",
      price: 38,
      genre: "Action, Adventure, Survival Horror",
      platform: ["playstation"],
      genreTag: "action adventure survival horror",
      platformTag: "playstation",
      releaseDate: "2019-04-20",
      developer: "Bend Studio"
    }),
    new Product({
      imagePath: "images/shop/detroit-become-human.jpg",
      title: "Detroit Become Human",
      price: 19,
      genre: "Action, Adventure",
      platform: ["playstation"],
      genreTag: "action adventure",
      platformTag: "playstation",
      releaseDate: "2018-05-25",
      developer: "Quantic Dream"
    }),
    new Product({
      imagePath: "images/shop/spiderman.jpg",
      title: "Marvel's Spiderman",
      price: 33,
      genre: "Action, Adventure",
      platform: ["playstation"],
      genreTag: "action adventure",
      platformTag: "playstation",
      releaseDate: "2018-09-07",
      developer: "Insomniac Games"
    }),
    new Product({
      imagePath: "images/shop/uncharted.jpg",
      title: "Uncharted 4 A Thief's End",
      price: 17,
      genre: "Action, Adventure",
      platform: ["playstation"],
      genreTag: "action adventure",
      platformTag: "playstation",
      releaseDate: "2016-05-10",
      developer: "Naughty Dog"
    }),
    new Product({
      imagePath: "images/shop/gran-turismo.jpg",
      title: "Gran Turismo Sport",
      price: 18,
      genre: "Sports, Racing",
      platform: ["playstation"],
      genreTag: "sports racing",
      platformTag: "playstation",
      releaseDate: "2017-10-17",
      developer: "Polyphony Digital"
    }),
    new Product({
      imagePath: "images/shop/gravity-rush-2.jpg",
      title: "Gravity Rush 2",
      price: 25,
      genre: "Action, Adventure",
      platform: ["playstation"],
      genreTag: "action adventure",
      platformTag: "playstation",
      releaseDate: "2017-01-18",
      developer: "Japan Studio"
    }),
    new Product({
      imagePath: "images/shop/until-dawn.jpg",
      title: "Until Dawn",
      price: 15,
      genre: "Adventure, Survival Horror",
      platform: ["playstation"],
      genreTag: "adventure survival horror",
      platformTag: "playstation",
      releaseDate: "2015-08-25",
      developer: "Supermassive Games"
    })
  ],
  [
    new Product({
      imagePath: "images/game-tabs/coming-soon/doom-eternal.jpg",
      title: "Doom Eternal",
      genre: "Action, FPS",
      platform: ["xbox", "windows", "playstation"]
    }),
    new Product({
      imagePath: "images/game-tabs/coming-soon/dying-light-2.jpg",
      title: "Dying Light 2",
      genre: "Action, RPG",
      platform: ["xbox", "windows", "playstation"]
    }),
    new Product({
      imagePath: "images/game-tabs/coming-soon/r6-quarantine.jpg",
      title: "Tom Clancy's Rainbow Six Quarantine",
      genre: "Action, FPS",
      platform: ["xbox", "windows", "playstation"]
    }),
    new Product({
      imagePath: "images/game-tabs/coming-soon/watch-dogs-legion.jpg",
      title: "Watch Dogs Legion",
      genre: "Action, Adventure",
      platform: ["xbox", "windows", "playstation"]
    }),
    new Product({
      imagePath: "images/game-tabs/coming-soon/bloodlines-2.jpg",
      title: "Vampire: The Masquerade - Bloodlines 2",
      genre: "Action, RPG",
      platform: ["xbox", "windows", "playstation"]
    }),
    new Product({
      imagePath: "images/game-tabs/coming-soon/ori.jpg",
      title: "Ori and the Will of the Wisps",
      genre: "Adventure, Platform",
      platform: ["xbox", "windows"]
    }),
    new Product({
      imagePath: "images/game-tabs/coming-soon/minecraft-dungeons.jpg",
      title: "Minecraft Dungeons",
      genre: "Action, RPG, Adventure",
      platform: ["xbox", "windows", "playstation"]
    }),
    new Product({
      imagePath: "images/game-tabs/coming-soon/last-of-us-2.jpg",
      title: "The Last of Us Part II",
      genre: "Action, Adventure, Survival, Horror",
      platform: ["playstation"]
    }),
    new Product({
      imagePath: "images/game-tabs/coming-soon/outriders.jpg",
      title: "Outriders",
      genre: "Action, Shooter",
      platform: ["xbox", "windows", "playstation"]
    }),
    new Product({
      imagePath: "images/game-tabs/coming-soon/wasteland-3.jpg",
      title: "Wasteland 3",
      genre: "Tactical, RPG",
      platform: ["xbox", "windows", "playstation"]
    })
  ]
];

var done = 0;

for (var i = 0; i < products.length; i++) {
  for (var j = 0; j < products[i].length; j++) {
    products[i][j].save(function(err, result) {
      done++;
      if (done === products.length) {
        exit();
      }
    });
  }
}

function exit() {
  mongoose.disconnect();
}
