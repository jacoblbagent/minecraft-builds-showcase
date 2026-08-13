/**
 * Blockcraft build data.
 *
 * Each build is an ASCII pixel grid: 17 columns × 13 rows.
 * Row 0 is the top of the scene; the bottom rows are ground.
 * Every non-space character is a block from the legend below.
 *
 * Legend (char -> block):
 *   G grass block   D dirt          S sand          C cobblestone
 *   M mossy cobble  B bricks        R stone bricks  Q quartz
 *   N nether brick  Z obsidian      W oak planks    L spruce planks
 *   K dark oak      r slate roof    g glass         O oak log
 *   T torch         F fence         H hay bale      w wheat
 *   X snow          m mushroom cap  h mushroom stem A anvil
 *   V oak leaves    d door          p nether portal
 */

export interface BlockDef {
  name: string
  base: string
  light: string
  dark: string
  noise: number
}

export const BLOCKS: Record<string, BlockDef> = {
  G: { name: 'Grass Block', base: '#7a5c3c', light: '#8d6b47', dark: '#5f462c', noise: 2 },
  D: { name: 'Dirt', base: '#6e5336', light: '#80603f', dark: '#55402a', noise: 2 },
  S: { name: 'Sand', base: '#dccb8a', light: '#e8daa5', dark: '#b3a065', noise: 1 },
  C: { name: 'Cobblestone', base: '#7c7c7c', light: '#8f8f8f', dark: '#5f5f5f', noise: 3 },
  M: { name: 'Mossy Cobblestone', base: '#6f7a63', light: '#82917a', dark: '#55604c', noise: 4 },
  B: { name: 'Bricks', base: '#9c4f3c', light: '#b05a44', dark: '#7a3a2c', noise: 2 },
  R: { name: 'Stone Bricks', base: '#8a8a8a', light: '#9c9c9c', dark: '#6e6e6e', noise: 1 },
  Q: { name: 'Quartz', base: '#e8e6e0', light: '#f5f3ee', dark: '#c2bfb6', noise: 1 },
  N: { name: 'Nether Bricks', base: '#4a2a2a', light: '#5c3434', dark: '#382020', noise: 2 },
  Z: { name: 'Obsidian', base: '#22152e', light: '#33213a', dark: '#140b14', noise: 3 },
  W: { name: 'Oak Planks', base: '#a8875a', light: '#bc9870', dark: '#8a6b44', noise: 2 },
  L: { name: 'Spruce Planks', base: '#6b4f2f', light: '#7d5d38', dark: '#533c22', noise: 2 },
  K: { name: 'Dark Oak', base: '#3f2d1c', light: '#4e3a24', dark: '#2f2013', noise: 2 },
  r: { name: 'Slate Roof', base: '#4a4f57', light: '#5c626c', dark: '#383c42', noise: 1 },
  g: { name: 'Glass', base: 'rgba(178, 214, 236, 0.55)', light: '#e8f6ff', dark: '#8fb6cc', noise: 0 },
  O: { name: 'Oak Log', base: '#6e5636', light: '#7d643f', dark: '#57421f', noise: 0 },
  T: { name: 'Torch', base: 'transparent', light: '#ffb03a', dark: '#6b4a2a', noise: 0 },
  F: { name: 'Fence', base: 'transparent', light: '#8a6b47', dark: '#57421f', noise: 0 },
  H: { name: 'Hay Bale', base: '#d9b34a', light: '#e8c45e', dark: '#b08a2e', noise: 2 },
  w: { name: 'Wheat', base: '#4a7a2c', light: '#5c9440', dark: '#3a5f22', noise: 2 },
  X: { name: 'Snow', base: '#eef2f5', light: '#ffffff', dark: '#c3cdd4', noise: 1 },
  m: { name: 'Red Mushroom', base: '#c9403a', light: '#e0554a', dark: '#8f2820', noise: 0 },
  h: { name: 'Mushroom Stem', base: '#e8dcc8', light: '#f5ecd8', dark: '#c0b094', noise: 1 },
  A: { name: 'Anvil', base: '#6a6a6a', light: '#8a8a8a', dark: '#4a4a4a', noise: 0 },
  V: { name: 'Oak Leaves', base: '#3a7a2f', light: '#4f9a42', dark: '#2a5c22', noise: 4 },
  d: { name: 'Door', base: '#8a6b3f', light: '#9c7c4e', dark: '#6e522c', noise: 0 },
  p: { name: 'Nether Portal', base: '#2a0b3a', light: '#8a3ac9', dark: '#1e0628', noise: 3 },
}

export const CATEGORIES = ['All', 'Houses', 'Castles', 'Towers', 'Farms', 'Special'] as const
export type Category = (typeof CATEGORIES)[number]
export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export interface Build {
  id: string
  name: string
  category: Category
  difficulty: Difficulty
  description: string
  seed: number
  grid: string[]
  blocks: number
}

type RawBuild = Omit<Build, 'blocks'>

const RAW_BUILDS: RawBuild[] = [
  {
    id: 'starter-house',
    name: 'Starter House',
    category: 'Houses',
    difficulty: 'Easy',
    description:
      'The classic first-night home: a snug oak cottage with a gabled slate roof, twin windows and a working chimney. Everything you need before the sun goes down.',
    seed: 7,
    grid: [
      '        r        ',
      '      rrr  CC    ',
      '    rrrrr  CC    ',
      '     rrrrrrr     ',
      '     WWWWWWW     ',
      '     WWWWWWW     ',
      '     WgWWWgW     ',
      '     WgWdWgW     ',
      '     WWWWWWW     ',
      'GGGGGGGGGGGGGGGGG',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
    ],
  },
  {
    id: 'oak-cabin',
    name: 'Oak Cabin',
    category: 'Houses',
    difficulty: 'Easy',
    description:
      'A rugged log cabin with a sweeping spruce roof and a warm hearth. The timber frame keeps out the rain and the creepers.',
    seed: 23,
    grid: [
      '        L        ',
      '      LLLLL      ',
      '    LLLLLLLLL    ',
      '  LLLLLLLLLLLLL  ',
      '  LLLLLLLLLLLLL  ',
      '  OOOOOOOOOOOOO  ',
      '  OOgOOOOOOOgOOO ',
      '  OOOOOOOOOOOOO  ',
      '  OOOOOOOOOOOOO  ',
      '  OOgOOOdOOgOOO  ',
      'GGGGGGGGGGGGGGGGG',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
    ],
  },
  {
    id: 'brick-manor',
    name: 'Brick Manor',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'A two-storey brick manor trimmed in stone brick. Grand windows upstairs and down, and a roof that means business.',
    seed: 41,
    grid: [
      '        r        ',
      '      rrrrr      ',
      '    rrrrrrrrr    ',
      '  rrrrrrrrrrrrr  ',
      '  RBBBBBBBBBBBR  ',
      '  RBgBBBBBBBgBR  ',
      '  RBBBBBBBBBBBR  ',
      '  RBBBBBBBBBBBR  ',
      '  RBgBBBdBBBgBR  ',
      '  RBBBBBBBBBBBR  ',
      'GGGGGGGGGGGGGGGGG',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
    ],
  },
  {
    id: 'castle',
    name: 'Castle',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'A twin-tower castle with curtain wall and iron gate. The standard for any self-respecting kingdom.',
    seed: 59,
    grid: [
      ' R R         R R ',
      ' RRR         RRR ',
      ' RRR         RRR ',
      ' RgR   RRR   RgR ',
      ' RRR   RRR   RRR ',
      ' RRR  RRRRR  RRR ',
      ' RRR  RRRRR  RRR ',
      ' RRR  RRdRR  RRR ',
      ' RRR  RRRRR  RRR ',
      ' CCCCCCCCCCCCCCC ',
      'GGGGGGGGGGGGGGGGG',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
    ],
  },
  {
    id: 'castle-keep',
    name: 'Castle Keep',
    category: 'Castles',
    difficulty: 'Hard',
    description:
      'The heart of a fortress: battlements, arrow slits and a grand gate carved into solid stone brick.',
    seed: 73,
    grid: [
      '  R R R R R R R  ',
      '  RRRRRRRRRRRRR  ',
      '  RRRRRRRRRRRRR  ',
      '  RgRRRRRRRRgRR  ',
      '  RRRRRRRRRRRRR  ',
      '  RRRRRRRRRRRRR  ',
      '  RgRRRRRRRRgRR  ',
      '  RRRRRRRRRRRRR  ',
      '  RRRRdddddRRRR  ',
      '    CCCCCCCCC    ',
      'GGGGGGGGGGGGGGGGG',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
    ],
  },
  {
    id: 'watchtower',
    name: 'Watchtower',
    category: 'Towers',
    difficulty: 'Medium',
    description:
      'A tall stone lookout with crenellations for a clear sightline over the valley.',
    seed: 97,
    grid: [
      '      R   R      ',
      '      RRRRR      ',
      '      RRRRR      ',
      '      RRRRR      ',
      '      RgRRR      ',
      '      RRRRR      ',
      '      RRRRR      ',
      '      RRRRR      ',
      '      RdRRR      ',
      '    C CCCCC C    ',
      'GGGGGGGGGGGGGGGGG',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
    ],
  },
  {
    id: 'lighthouse',
    name: 'Lighthouse',
    category: 'Towers',
    difficulty: 'Medium',
    description:
      'A quartz and brick lighthouse with a beacon that guides ships — and lost players — home.',
    seed: 113,
    grid: [
      '        g        ',
      '        Q        ',
      '      QQQQQ      ',
      '      QQQQQ      ',
      '      QgQQQ      ',
      '      QQQQQ      ',
      '      BBBBB      ',
      '      BBBBB      ',
      '      QdQQQ      ',
      '     SSSSSSSSS   ',
      'SSSSSSSSSSSSSSSSS',
      'SSSSSSSSSSSSSSSSS',
      'SSSSSSSSSSSSSSSSS',
    ],
  },
  {
    id: 'wizard-tower',
    name: 'Wizard Tower',
    category: 'Towers',
    difficulty: 'Hard',
    description:
      'An obsidian-tipped spire of arcane stone. Rumoured to be bigger on the inside.',
    seed: 131,
    grid: [
      '        Z        ',
      '        Z        ',
      '        Z        ',
      '      RRRRR      ',
      '      RZZZR      ',
      '      RgRRR      ',
      '      RRRRR      ',
      '      RRRRR      ',
      '      RdRRR      ',
      '    CCCCCCCCC    ',
      'GGGGGGGGGGGGGGGGG',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
    ],
  },
  {
    id: 'windmill',
    name: 'Windmill',
    category: 'Farms',
    difficulty: 'Medium',
    description:
      'A classic mill with working blades and a stone base. The fields are never far away.',
    seed: 149,
    grid: [
      '    L       L    ',
      '     L     L     ',
      '      L   L      ',
      '       L L       ',
      '       CCC       ',
      '       CWC       ',
      '       CWC       ',
      '       CWC       ',
      '       CdC       ',
      '     CCCCCCC     ',
      'GGGGGGGGGGGGGGGGG',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
    ],
  },
  {
    id: 'farmstead',
    name: 'Farmstead',
    category: 'Farms',
    difficulty: 'Easy',
    description:
      'A working farm: barn, wheat fields, fences and hay bales. Sustainable living, block by block.',
    seed: 167,
    grid: [
      '        r        ',
      '      rrrrr      ',
      '     rrrrrrr     ',
      '     WWWWWWW     ',
      '     WHWWWHW     ',
      '     WWWWWWW     ',
      '     WWWWWWW     ',
      'wwwwFWWWWWWW H H ',
      'wwwwFWWWWdWWW H H',
      'wwwwFWWWWWWW H H ',
      'GGGGGGGGGGGGGGGGG',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
    ],
  },
  {
    id: 'treehouse',
    name: 'Treehouse',
    category: 'Special',
    difficulty: 'Medium',
    description:
      'A hideaway built into the canopy of a great oak. Windows, door, and a view over the whole forest.',
    seed: 191,
    grid: [
      '        V        ',
      '    V VVVVV V    ',
      '   VVVrrrrrVVV   ',
      '   VVWWWWWWWVV   ',
      '   VVWgWWWgWVV   ',
      '   VVVWWWWWVVV   ',
      '    VVWWdWWVV    ',
      '      VVVVV      ',
      '        O        ',
      '        O        ',
      'GGGGGGGGGGGGGGGGG',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
    ],
  },
  {
    id: 'nether-portal',
    name: 'Nether Portal',
    category: 'Special',
    difficulty: 'Medium',
    description:
      'A glowing gateway of obsidian and nether brick. Step through — if you dare.',
    seed: 211,
    grid: [
      '    ZZZZZZZZZ    ',
      '    ZpppppppZ    ',
      '    ZpppppppZ    ',
      '    ZpppppppZ    ',
      '    ZpppppppZ    ',
      '    ZZZZZZZZZ    ',
      ' NNNNNNNNNNNNNNN ',
      ' NNNNNNNNNNNNNNN ',
      'NNNNNNNNNNNNNNNNN',
      'NNNNNNNNNNNNNNNNN',
      'NNNNNNNNNNNNNNNNN',
      'NNNNNNNNNNNNNNNNN',
      'NNNNNNNNNNNNNNNNN',
    ],
  },
  {
    id: 'desert-pyramid',
    name: 'Desert Pyramid',
    category: 'Special',
    difficulty: 'Hard',
    description:
      'A colossal sandstone pyramid with a hidden entrance. Ancient, and definitely not booby-trapped.',
    seed: 233,
    grid: [
      '        S        ',
      '      SSSSS      ',
      '    SSSSSSSSS    ',
      '  SSSSSSSSSSSSS  ',
      ' SSSSSSSSSSSSSSS ',
      'SSSSSSSSSSSSSSSSS',
      'SSSSSSSSSSSSSSSSS',
      'SSSSSSSSSSSSSSSSS',
      'SSSSSSSSSSSSSSSSS',
      'SSKKTSSSSSSSSSSSS',
      'SSSSSSSSSSSSSSSSS',
      'SSSSSSSSSSSSSSSSS',
      'SSSSSSSSSSSSSSSSS',
    ],
  },
  {
    id: 'igloo',
    name: 'Igloo',
    category: 'Houses',
    difficulty: 'Easy',
    description:
      'A snug snow dome for the frozen north. Compact, warm, and invisible against a blizzard.',
    seed: 251,
    grid: [
      '       XXX       ',
      '     XXXXXXXXX   ',
      '   XXXXXXXXXXXXX ',
      '  XXXXXXXXXXXXXXX',
      ' XXXXXXXXXXXXXXX ',
      ' XXXgXXXXXXXXXXX ',
      ' XXXXXXXXXXXXXXX ',
      ' XXXXXXXXXXXXXXX ',
      ' XXKKXXXXXXXXXXX ',
      'XXXXXXXXXXXXXXXXX',
      'XXXXXXXXXXXXXXXXX',
      'XXXXXXXXXXXXXXXXX',
      'XXXXXXXXXXXXXXXXX',
    ],
  },
  {
    id: 'blacksmith',
    name: 'Blacksmith',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'A working forge with a brick chimney, open-air yard and an anvil ready for your next iron haul.',
    seed: 277,
    grid: [
      '        B        ',
      '        B        ',
      '      BBBBB      ',
      '     CCCCCCC     ',
      '     CCCCCCC     ',
      '     CgCCCgC     ',
      '     CCCCCCC     ',
      '     CCCCCCC     ',
      '     CCCdTCC     ',
      '    C   A   C    ',
      'GGGGGGGGGGGGGGGGG',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
    ],
  },
  {
    id: 'chapel',
    name: 'Chapel',
    category: 'Houses',
    difficulty: 'Medium',
    description:
      'A quiet stone chapel with a tall steeple and stained glass catching the morning light.',
    seed: 293,
    grid: [
      '        T        ',
      '        r        ',
      '       rrr       ',
      '      rrrrr      ',
      '     RRRRRRR     ',
      '    RRRRRRRRR    ',
      '    RgRRRRRRR    ',
      '    RgRRdRgRR    ',
      '    RRRRRRRRR    ',
      '  CCCCCCCCCCCCC  ',
      'GGGGGGGGGGGGGGGGG',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
    ],
  },
  {
    id: 'mushroom-house',
    name: 'Mushroom House',
    category: 'Special',
    difficulty: 'Easy',
    description:
      'A cozy home grown from a giant red mushroom. Spotty roof, sturdy stem, zero carpentry required.',
    seed: 311,
    grid: [
      '       mmm       ',
      '     mmmmmmm     ',
      '   mmmmmmmmmmm   ',
      '  mWmmmmWmmmmmW  ',
      '  mmmmmmmmmmmmm  ',
      '   hhhhhhhhhhh   ',
      '   hhhhhhhhhhh   ',
      '   hhhgddghhh    ',
      '   hhhhhhhhhhh   ',
      'GGGGGGGGGGGGGGGGG',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
      'DDDDDDDDDDDDDDDDD',
    ],
  },
]

export const BUILDS: Build[] = RAW_BUILDS.map((b) => ({
  ...b,
  blocks: b.grid.join('').replace(/\s/g, '').length,
}))
