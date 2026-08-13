/**
 * Blockcraft build data — real Minecraft builds with screenshots,
 * sourced from Rock Paper Shotgun's build idea guides:
 *   - "Things to build in Minecraft" https://www.rockpapershotgun.com/minecraft-build-ideas
 *   - "Minecraft house ideas" https://www.rockpapershotgun.com/minecraft-house-ideas
 *
 * Screenshots are community screenshots of each build, credited to the
 * original builders.
 */

export const CATEGORIES = ['All', 'Houses', 'Castles', 'Towers', 'Farms', 'Special'] as const
export type Category = (typeof CATEGORIES)[number]
export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export interface Build {
  id: string
  name: string
  category: Category
  difficulty: Difficulty
  description: string
  creator?: string
  sourceUrl: string
  image: string
}

const SOURCE_RPS = 'https://www.rockpapershotgun.com/minecraft-build-ideas'
const SOURCE_RPS_HOUSES = 'https://www.rockpapershotgun.com/minecraft-house-ideas'
const SOURCE_RPS_CASTLES = 'https://www.rockpapershotgun.com/minecraft-castle-ideas'

export const BUILDS: Build[] = [
  {
    id: 'starter-house',
    name: 'Wooden Starter House',
    category: 'Houses',
    difficulty: 'Easy',
    description:
      'The classic first-night home: a snug oak cottage with a gabled roof, twin windows and a working chimney. Simple, reliable, and ready before the sun goes down.',
    creator: 'WiederDude',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/starter-house.jpg',
  },
  {
    id: 'wooden-cabin',
    name: 'Wooden Cabin',
    category: 'Houses',
    difficulty: 'Easy',
    description:
      'A rugged log cabin with a sweeping spruce roof and a warm hearth. Designed by builder Greg Builds — perfect for a forest retreat.',
    creator: 'Greg Builds',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/wooden-cabin.jpg',
  },
  {
    id: 'fairytale-cottage',
    name: 'Fairytale Cottage',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'A whimsical cottage straight from a storybook. BigTonyMC\'s design uses warm stone brick, wood trim, and a cosy thatched silhouette.',
    creator: 'BigTonyMC',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/fairytale-cottage.jpg',
  },
  {
    id: 'fantasy-mansion',
    name: 'Fantasy Mansion',
    category: 'Houses',
    difficulty: 'Hard',
    description:
      'A grand multi-wing mansion by BigTonyMC — turrets, balconies and a sweeping roofline. Fit for a king, or at least a very successful adventurer.',
    creator: 'BigTonyMC',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/fantasy-mansion.jpg',
  },
  {
    id: 'hobbit-hole',
    name: 'Hobbit Hole',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'A round-doored home built into a grassy hillside, inspired by the Lord of the Rings. Cozy underground living with a garden on the roof.',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/hobbit-hole.jpg',
  },
  {
    id: 'gothic-castle',
    name: 'Gothic Castle',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'A magnificent gothic castle by YouTuber Geet Builds. Twin towers, stone battlements, and an iron gate — embrace your inner medievalist.',
    creator: 'Geet Builds',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/gothic-castle.jpg',
  },
  {
    id: 'fantasy-town',
    name: 'Fantasy Town',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'A full-size fantasy town with walls, towers and winding streets. One of the most satisfying colossal projects a Creative Mode builder can take on.',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/fantasy-town.jpg',
  },
  {
    id: 'elven-village',
    name: 'Elven Village',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'An ethereal elven village inspired by Rivendell and Lothlórien. Elegant arches, pale stone and greenery woven through every structure.',
    creator: 'JINTUBE',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/elven-village.jpg',
  },
  {
    id: 'lighthouse',
    name: 'Lighthouse',
    category: 'Towers',
    difficulty: 'Medium',
    description:
      'A quartz-trimmed lighthouse rising above a rocky shore. Its beacon guides ships — and lost players — home. A classic nautical landmark.',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/lighthouse.jpg',
  },
  {
    id: 'clock-tower',
    name: 'Clock Tower',
    category: 'Towers',
    difficulty: 'Medium',
    description:
      'A striking clock tower by YouTuber IrieGenie. Tall, elegant, and impossible to miss — perfect for any village square.',
    creator: 'IrieGenie',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/clock-tower.jpg',
  },
  {
    id: 'wizard-house',
    name: 'Wizard House',
    category: 'Towers',
    difficulty: 'Hard',
    description:
      'A mystic tower of arcane stone by Zaypixel. Obsidian-capped with a hidden study at the top — perfect for enchanting and brewing.',
    creator: 'Zaypixel',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/wizard-house.jpg',
  },
  {
    id: 'windmill',
    name: 'Windmill',
    category: 'Farms',
    difficulty: 'Medium',
    description:
      'A classic windmill with working blades and a cobblestone base by Zaypixel. Rows of wheat fields stretch out in every direction.',
    creator: 'Zaypixel',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/windmill.jpg',
  },
  {
    id: 'farm',
    name: 'Farm',
    category: 'Farms',
    difficulty: 'Easy',
    description:
      'A working farm with hay bales, wheat fields and fenced paddocks. Everything you need to feed a village — or yourself.',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/farm.jpg',
  },
  {
    id: 'farmhouse',
    name: 'Farmhouse',
    category: 'Farms',
    difficulty: 'Easy',
    description:
      'A charming farmhouse with its own plot of crops by Zaypixel. The perfect centerpiece for a rural homestead.',
    creator: 'Zaypixel',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/farmhouse.jpg',
  },
  {
    id: 'treehouse',
    name: 'Treehouse',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'A hideaway nestled in the canopy of a great oak, its leafy roof blending into the forest. Windows, a door, and a bird\'s-eye view.',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/treehouse.jpg',
  },
  {
    id: 'witch-house',
    name: 'Witch House',
    category: 'Special',
    difficulty: 'Medium',
    description:
      'A crooked brew-shed by PlatinumThief. Nether brick chimney, bubbling cauldron inside, and a roof that definitely leans on purpose.',
    creator: 'PlatinumThief',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/witch-house.jpg',
  },
  {
    id: 'haunted-house',
    name: 'Haunted House',
    category: 'Special',
    difficulty: 'Medium',
    description:
      'An eerie mansion by ThaMango. Creaking dark oak, flickering torches, and a silhouette that looks wrong. Dare you knock?',
    creator: 'ThaMango',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/haunted-house.jpg',
  },
  {
    id: 'pyramid',
    name: 'Pyramid',
    category: 'Special',
    difficulty: 'Hard',
    description:
      'A colossal desert pyramid with a hidden entrance. Layer upon layer of sandstone, ancient traps, and treasures buried deep inside.',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/pyramid.jpg',
  },
  {
    id: 'volcano',
    name: 'Volcano',
    category: 'Special',
    difficulty: 'Hard',
    description:
      'A scene-stealing volcano by Shannooty. Magma drips from the cone, smoke billows, and an unassuming island becomes a landmark.',
    creator: 'Shannooty',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/volcano.jpg',
  },
  {
    id: 'ship',
    name: 'Ship',
    category: 'Special',
    difficulty: 'Hard',
    description:
      'A magnificent galleon by IrieGenie, complete with mast, sails, and deck. Pirates of the Caribbean vibes on the high blocky seas.',
    creator: 'IrieGenie',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/ship.jpg',
  },
  {
    id: 'underwater-house',
    name: 'Underwater House',
    category: 'Special',
    difficulty: 'Hard',
    description:
      'A glass-domed home on the ocean floor by JUNS MAB. Full 360° views of squid, coral, and the deep — with a roof that won\'t leak.',
    creator: 'JUNS MAB Architecture Tutorial',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/underwater-house.jpg',
  },
  {
    id: 'modern-house',
    name: 'Modern House',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'A sleek modern villa by IrieGenie with clean quartz lines, a swimming pool, and floor-to-ceiling glass. Minimalist living at its blockiest.',
    creator: 'IrieGenie',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/modern-house.jpg',
  },
  {
    id: 'mangrove-starter-house',
    name: 'Mangrove Starter House',
    category: 'Houses',
    difficulty: 'Easy',
    description:
      'A cosy, rustic starter house by Folli built entirely from Mangrove Swamp materials. The perfect small base to set up far from your main home.',
    creator: 'Folli',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/mangrove-starter-house.jpg',
  },
  {
    id: 'simple-survival-house',
    name: 'Simple Wooden Survival House',
    category: 'Houses',
    difficulty: 'Easy',
    description:
      'A starter home by SheepGG made from classic oak and birch, with fences, logs, slabs and trapdoors adding texture. A more appealing first house than most.',
    creator: 'SheepGG',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/simple-survival-house.jpg',
  },
  {
    id: 'survival-starter-house',
    name: 'Survival Starter House',
    category: 'Houses',
    difficulty: 'Easy',
    description:
      'Zaypixel\u2019s idyllic little house, made from spruce, oak, glass and a touch of deepslate. Easy to build and perfect for the middle of a lush flower forest.',
    creator: 'Zaypixel',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/survival-starter-house.jpg',
  },
  {
    id: 'multi-story-survival-house',
    name: 'Multi-Story Survival House',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'A towering base of operations by JUNS MAB Architecture Tutorial, with multiple floors and carefully bordered windows. A striking image on any horizon.',
    creator: 'JUNS MAB Architecture Tutorial',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/multi-story-survival-house.jpg',
  },
  {
    id: 'large-survival-house',
    name: 'Large Survival House',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'Folli\u2019s giant survival house built from easy-to-gather oak — an opulent landmark that draws everyone\u2019s attention on any multiplayer server.',
    creator: 'Folli',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/large-survival-house.jpg',
  },
  {
    id: 'fantasy-house',
    name: 'Fantasy House',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'A grand fantasy house by Minecraft Fantasy Builds with superb roofing and an archway balcony over a top garden — the perfect place to gaze out at the landscape.',
    creator: 'Minecraft Fantasy Builds',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/fantasy-house.jpg',
  },
  {
    id: 'suburban-house',
    name: 'Suburban House',
    category: 'Houses',
    difficulty: 'Easy',
    description:
      'Rizzial\u2019s picturesque suburban house with an attached garage — quirky, understated, and subtly attractive. Reminiscent of a certain cartoon family\u2019s home.',
    creator: 'Rizzial',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/suburban-house.jpg',
  },
  {
    id: 'japanese-house',
    name: 'Japanese House',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'A spacious Japanese-style home by BlueBits using acacia slabs, dark oak signs and plenty of detail, set in an idyllic bamboo garden. True zen qualities.',
    creator: 'BlueBits',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/japanese-house.jpg',
  },
  {
    id: 'japanese-village-house',
    name: 'Japanese Village House',
    category: 'Houses',
    difficulty: 'Easy',
    description:
      'Cortezerino\u2019s understated Japanese village house — small in stature, but nether brick roofs, stripped logs and dark fences make it eye-catching.',
    creator: 'Cortezerino',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/japanese-village-house.jpg',
  },
  {
    id: 'japanese-pagoda',
    name: 'Japanese Pagoda-Style House',
    category: 'Houses',
    difficulty: 'Hard',
    description:
      'An elegant pagoda by SheepGG with layered wooden slabs, soft lantern and redstone lamp lighting, and cherry blossom trees made from pink and white wool.',
    creator: 'SheepGG',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/japanese-pagoda.jpg',
  },
  {
    id: 'wood-stone-house',
    name: 'Wood and Stone Brick House',
    category: 'Houses',
    difficulty: 'Easy',
    description:
      'A small but charming home by One Team, made from wood and stone bricks. Nothing fancy — just a well-designed little house brimming with charm.',
    creator: 'One Team',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/wood-stone-house.jpg',
  },
  {
    id: 'stylish-wooden-house',
    name: 'Stylish Wooden House',
    category: 'Houses',
    difficulty: 'Easy',
    description:
      'A wide wooden build by Folli with a staircase running up and over the middle, separating the taller half from the shorter and doubling as a balcony.',
    creator: 'Folli',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/stylish-wooden-house.jpg',
  },
  {
    id: 'mountain-house',
    name: 'Mountain-Side House',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'A home by JUNS MAB Architecture Tutorial that blends faultlessly into the landscape, with two glass circles letting natural sunlight flood the interior.',
    creator: 'JUNS MAB Architecture Tutorial',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/mountain-house.jpg',
  },
  {
    id: 'oak-treehouse',
    name: 'Oak Treehouse',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'A chunky treehouse by Shock Frost — house and tree built from scratch, resulting in a nicely structured home surrounded by bark and leaves.',
    creator: 'Shock Frost',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/oak-treehouse.jpg',
  },
  {
    id: 'jungle-treehouse',
    name: 'Jungle Treehouse',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'DiddiHD\u2019s large jungle treehouse with sporadically placed living areas — an organic look, as though the house grew along with the tree.',
    creator: 'DiddiHD',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/jungle-treehouse.jpg',
  },
  {
    id: 'modern-treehouse',
    name: 'Modern Treehouse',
    category: 'Houses',
    difficulty: 'Hard',
    description:
      'A towering design by 6tenstudio with a modern twist — white floors and glass panes in place of fences, standing out against its natural foundation.',
    creator: '6tenstudio',
    sourceUrl: SOURCE_RPS_HOUSES,
    image: '/minecraft-builds-showcase/images/modern-treehouse.jpg',
  },
  {
    id: 'bridge',
    name: 'Bridge',
    category: 'Special',
    difficulty: 'Medium',
    description:
      'Delightfully practical, but also a chance to create something truly beautiful. Span a river gorge with stone arches, or go as ostentatious as you like.',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/bridge.jpg',
  },
  {
    id: 'cathedral',
    name: 'Cathedral',
    category: 'Special',
    difficulty: 'Hard',
    description:
      'Grander than a castle, more opulent than a keep — a cathedral is architectural splendour with soaring arches, stained glass and endless detail.',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/cathedral.jpg',
  },
  // ── Castles ──
  {
    id: 'museum',
    name: 'Museum',
    category: 'Castles',
    difficulty: 'Medium',
    description:
      'A grand museum by MegRae — the perfect place to show off everything you\u2019ve collected. A tourist attraction that will draw attention on any server.',
    creator: 'MegRae',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/museum.jpg',
  },
  {
    id: 'famous-landmark',
    name: 'Famous Landmark',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'Vexel Design\u2019s recreation of the Taj Mahal — real-world architectural splendour inside Minecraft. Inspired by landmarks known all over the world.',
    creator: 'Vexel Design',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/famous-landmark.jpg',
  },
  {
    id: 'mountain-base',
    name: 'Mountain Base',
    category: 'Castles',
    difficulty: 'Medium',
    description:
      'A mountain-side outpost by Tentango, embedded into the cliff for sweeping views. Scout for miles from this elevated fortress.',
    creator: 'Tentango',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/mountain-base.jpg',
  },
  {
    id: 'disney-castle',
    name: 'Disney Castle',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'The classic Disney castle from the intro cinematic — fairytale towers, flags and all. Build the iconic silhouette every movie starts with.',
    sourceUrl: SOURCE_RPS_CASTLES,
    image: '/minecraft-builds-showcase/images/disney-castle.jpg',
  },
  {
    id: 'arendelle-castle',
    name: 'Arendelle Castle',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'The home of Anna and Elsa, recreated in blocks. An icy-blue royal castle from Frozen that\u2019s sure to be a timeless classic.',
    sourceUrl: SOURCE_RPS_CASTLES,
    image: '/minecraft-builds-showcase/images/arendelle-castle.jpg',
  },
  {
    id: 'medieval-castle',
    name: 'Medieval Castle',
    category: 'Castles',
    difficulty: 'Medium',
    description:
      'BlueNerd Minecraft\u2019s perfect fantasy-world castle, with towers around every edge. Fend off mobs from any direction — even the Wither.',
    creator: 'BlueNerd Minecraft',
    sourceUrl: SOURCE_RPS_CASTLES,
    image: '/minecraft-builds-showcase/images/medieval-castle.jpg',
  },
  {
    id: 'dracula-castle',
    name: 'Dracula Castle',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'A terrifying castle by Trixyblox — moody, gothic, and perfect as a lair for your nefarious deeds. Strikes fear into everyone on your server.',
    creator: 'Trixyblox',
    sourceUrl: SOURCE_RPS_CASTLES,
    image: '/minecraft-builds-showcase/images/dracula-castle.jpg',
  },
  {
    id: 'dark-cathedral',
    name: 'Dark Cathedral',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'Lex The Builder\u2019s gothic cathedral with red spires touching the heavens and a huge hall. An ideal vampire-hunting base.',
    creator: 'Lex The Builder',
    sourceUrl: SOURCE_RPS_CASTLES,
    image: '/minecraft-builds-showcase/images/dark-cathedral.jpg',
  },
  {
    id: 'hogwarts',
    name: 'Hogwarts',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'Planet Dragonod\u2019s iconic wizarding school — 30 videos of blocks, with the Clock Tower, Transfiguration Courtyard and Dumbledore\u2019s Office recreated inside.',
    creator: 'Planet Dragonod',
    sourceUrl: SOURCE_RPS_CASTLES,
    image: '/minecraft-builds-showcase/images/hogwarts.jpg',
  },
  {
    id: 'floating-castle',
    name: 'Floating Castle',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'A full castle suspended on a floating island — the ultimate answer to choosing where to settle. Grandeur with a view of everything below.',
    sourceUrl: SOURCE_RPS_CASTLES,
    image: '/minecraft-builds-showcase/images/floating-castle.jpg',
  },
  {
    id: 'floating-castle-2',
    name: 'Ultimate Floating Castle Base',
    category: 'Castles',
    difficulty: 'Medium',
    description:
      'Bradmall\u2019s alternative floating castle base — a more approachable take on sky living than the colossal castle above.',
    creator: 'Bradmall',
    sourceUrl: SOURCE_RPS_CASTLES,
    image: '/minecraft-builds-showcase/images/floating-castle-2.jpg',
  },
  {
    id: 'island-fortress',
    name: 'Island Fortress',
    category: 'Castles',
    difficulty: 'Medium',
    description:
      'BigTonyMC\u2019s island fortress — excluded from the rest of the world but grounded on solid land. A defensive stronghold with natural moats.',
    creator: 'BigTonyMC',
    sourceUrl: SOURCE_RPS_CASTLES,
    image: '/minecraft-builds-showcase/images/island-fortress.jpg',
  },
  {
    id: 'dover-castle',
    name: 'Dover Castle',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'English Heritage and Yogscast\u2019s spectacular recreation of the real Dover Castle — sprawling walls and winding pathways web through the courtyards.',
    sourceUrl: SOURCE_RPS_CASTLES,
    image: '/minecraft-builds-showcase/images/dover-castle.jpg',
  },
  {
    id: 'cherry-castle',
    name: 'Cherry Castle',
    category: 'Castles',
    difficulty: 'Medium',
    description:
      'Stevler\u2019s elegant castle surrounded by pink cherry blossom trees. Peace, tranquility, and a breeze waiting to rustle the branches.',
    creator: 'Stevler',
    sourceUrl: SOURCE_RPS_CASTLES,
    image: '/minecraft-builds-showcase/images/cherry-castle.jpg',
  },
  {
    id: 'waterfall-castle',
    name: 'Waterfall Castle',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'A majestic castle by Geet Builds perched atop a rushing waterfall — a statement that goes a million steps beyond a simple moat.',
    creator: 'Geet Builds',
    sourceUrl: SOURCE_RPS_CASTLES,
    image: '/minecraft-builds-showcase/images/waterfall-castle.jpg',
  },
  {
    id: 'mountain-castle',
    name: 'Mountain Castle',
    category: 'Castles',
    difficulty: 'Medium',
    description:
      'Wombaat\u2019s snowcapped mountain castle, looming out over the landscape. Expect plenty of snow-clearing to get it looking right.',
    creator: 'Wombaat',
    sourceUrl: SOURCE_RPS_CASTLES,
    image: '/minecraft-builds-showcase/images/mountain-castle.jpg',
  },
  // ── Towers ──
  {
    id: 'modern-skyscraper',
    name: 'Modern Skyscraper',
    category: 'Towers',
    difficulty: 'Hard',
    description:
      'Alpine\u2019s realistic modern skyscraper — a sleek tower of glass and concrete that towers over everything around it.',
    creator: 'Alpine',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/modern-skyscraper.jpg',
  },
  {
    id: 'futuristic-skyscraper',
    name: 'Futuristic Skyscraper',
    category: 'Towers',
    difficulty: 'Hard',
    description:
      'Episkninjaturtle\u2019s cyberpunk skyscraper — blue and silver metal rising high above the city. A sci-fi landmark fit for the future.',
    creator: 'Episkninjaturtle',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/futuristic-skyscraper.jpg',
  },
  {
    id: 'floating-base',
    name: 'Floating Base',
    category: 'Towers',
    difficulty: 'Medium',
    description:
      'A floating island with a cottage by Rake — classic and versatile, suspended high above the landscape. Build it in Survival or scale up in Creative.',
    creator: 'Rake',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/floating-base.jpg',
  },
  // ── Farms ──
  {
    id: 'nature-reserve',
    name: 'Nature Reserve',
    category: 'Farms',
    difficulty: 'Medium',
    description:
      'A landscape-oriented nature reserve by Keralis. Fill it with foxes, horses, and animals of your choice for a truly beautiful area of land.',
    creator: 'Keralis',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/nature-reserve.jpg',
  },
  {
    id: 'hot-spring',
    name: 'Hot Spring',
    category: 'Farms',
    difficulty: 'Medium',
    description:
      'A Japanese onsen — tranquil and idyllic with a clever rising steam effect. The perfect place to rest after a long time in Survival mode.',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/hot-spring.jpg',
  },
  {
    id: 'cherry-blossom-garden',
    name: 'Cherry Blossom Garden',
    category: 'Farms',
    difficulty: 'Medium',
    description:
      'A cosy Cherry Blossom gazebo by SweetMarble. Blossoms blowing in the breeze, pink trees overhead — wonderfully elegant atmosphere.',
    creator: 'SweetMarble',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/cherry-blossom-garden.jpg',
  },
  // ── Special ──
  {
    id: 'statue',
    name: 'Statue',
    category: 'Special',
    difficulty: 'Medium',
    description:
      'A phenomenal dragon statue by thebigbaron. Minecraft\u2019s stone blocks make for incredible sculpture — realistic or abstract, the choice is yours.',
    creator: 'thebigbaron',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/statue.jpg',
  },
  {
    id: 'aquarium',
    name: 'Aquarium',
    category: 'Special',
    difficulty: 'Medium',
    description:
      'Blorg The Saint\u2019s magnificent glass aquarium — kelp, fish, and colourful sea life housed behind walls of glass. A living underwater gallery.',
    creator: 'Blorg The Saint',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/aquarium.jpg',
  },
  {
    id: 'nether-hub',
    name: 'Nether Hub',
    category: 'Special',
    difficulty: 'Hard',
    description:
      'A grand Nether Hub by Kemit — safe fast travel through the Nether that looks fantastic. Grand architecture meets practical infrastructure.',
    creator: 'Kemit',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/nether-hub.jpg',
  },
  {
    id: 'storage-room',
    name: 'Storage Room',
    category: 'Special',
    difficulty: 'Easy',
    description:
      'TheMythicalSausage\u2019s beautifully organised storage room — signs, item frames, and a lovely aesthetic make this the most practical build you can make.',
    creator: 'TheMythicalSausage',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/storage-room.jpg',
  },
  {
    id: 'trading-hall',
    name: 'Trading Hall',
    category: 'Special',
    difficulty: 'Medium',
    description:
      'Nuvola MC\u2019s classical guild hall with a bustling market interior. Villagers in special stalls, zombie conversion tricks — the enterprising trader\u2019s dream.',
    creator: 'Nuvola MC',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/trading-hall.jpg',
  },
  {
    id: 'theme-park',
    name: 'Theme Park',
    category: 'Special',
    difficulty: 'Hard',
    description:
      'Branzy\u2019s killer amusement park — a Ferris wheel, rollercoaster and carousel, each also a deadly trap. Build yours as nefarious or peaceful as you like.',
    creator: 'Branzy',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/theme-park.jpg',
  },
  {
    id: 'camper-van',
    name: 'Camper Van',
    category: 'Special',
    difficulty: 'Easy',
    description:
      'IrieGenie\u2019s modern RV house — a tiny home on wheels with a cosy outdoor dining area. Build a whole campsite for a unique outdoor retreat.',
    creator: 'IrieGenie',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/camper-van.jpg',
  },
  {
    id: 'zoo',
    name: 'Zoo',
    category: 'Special',
    difficulty: 'Medium',
    description:
      'BlueNerd\u2019s zoo island with enclosures for every animal — over 30 species at the time of creation. A project of impressive scope.',
    creator: 'BlueNerd',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/zoo.jpg',
  },
  {
    id: 'graveyard',
    name: 'Graveyard',
    category: 'Special',
    difficulty: 'Medium',
    description:
      'ThaMango\u2019s eerie mausoleum set in a Pale Garden grove. Gothic flair, white foliage and eldritch mobs — too atmospheric to pass up.',
    creator: 'ThaMango',
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/graveyard.jpg',
  },
  {
    id: 't-rex-fossil',
    name: 'T-Rex Fossil',
    category: 'Special',
    difficulty: 'Hard',
    description:
      'BURE\u2019s entire Tyrannosaurus Rex fossil specimen — museum-quality and built block by block. Just the tip of the prehistoric iceberg.',
    creator: "BURE's Minecraft",
    sourceUrl: SOURCE_RPS,
    image: '/minecraft-builds-showcase/images/t-rex-fossil.jpg',
  },
]