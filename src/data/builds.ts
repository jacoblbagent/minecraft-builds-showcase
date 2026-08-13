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
]