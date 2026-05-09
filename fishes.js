export const fishRarities = [
  { name: 'Common', color: '#c3d8c4', chance: 0.60, baseCurrency: 10, monValue: 1, xp: 1 },
  { name: 'Rare', color: '#63b3ed', chance: 0.20, baseCurrency: 50, monValue: 2, xp: 3 },
  { name: 'Unique', color: '#c084fc', chance: 0.08, baseCurrency: 100, monValue: 4, xp: 5 },
  { name: 'Epic', color: '#f6ad55', chance: 0.06, baseCurrency: 250, monValue: 10, xp: 10 },
  { name: 'Legendary', color: '#ffd700', chance: 0.04, baseCurrency: 1000, monValue: 25, xp: 15 },
  { name: 'Mythical', color: '#ff7eb3', chance: 0.015, baseCurrency: 5000, monValue: 75, xp: 20 },
  { name: 'Secret', color: '#00e5ff', chance: 0.005, baseCurrency: 10000, monValue: 200, xp: 30 },
  { name: 'Triforce', color: '#ffcc00', chance:0.001, baseCurrency: 0, monValue: 0, xp: 0 }
];

export const TIER_POOLS = {
  0: { Common: 0.75, Rare: 0.25 },
  1: { Common: 0.52, Rare: 0.24, Unique: 0.14, Epic: 0.10 },
  2: { Common: 0.38, Rare: 0.20, Unique: 0.14, Epic: 0.13, Legendary: 0.10, Mythical: 0.05 },
  3: { Common: 0.28, Rare: 0.17, Unique: 0.13, Epic: 0.12, Legendary: 0.13, Mythical: 0.09, Secret: 0.06, Triforce: 0.02 }
};

export const fishList = {
  Common:    ['Hyrule Bass', 'Hearty Bass', 'Armored Carp', 'Armored Porgy', 'Sanke Carp'],
  Rare:      ['Greengill', 'Hearty Salmon', 'Chillfin Trout', 'Sizzlefin Trout'],
  Unique:    ['Voltfin Trout', 'Staminoka Bass', 'Stealthfin Trout'],
  Epic:      ['Mighty Carp', 'Mighty Porgy', 'Hylian Pike', 'Ordon Catfish'],
  Legendary: ['Reekfish', 'Loovar'],
  Mythical:  ['Ancient Arowana'],
  Secret:    ['Hylian Loach'],
  Triforce: [
    { id: 1, name: 'Triforce Shard 1', type: 'reelSpeed', value: 0.04, lore: 'Courage — Speed of the wild' },
    { id: 2, name: 'Triforce Shard 2', type: 'luck', value: 0.06, lore: 'Wisdom — Sight of the deep' },
    { id: 3, name: 'Triforce Shard 3', type: 'reelSpeed', value: 0.07, lore: 'Power — Strength of the current' },
    { id: 4, name: 'Triforce Shard 4', type: 'luck', value: 0.05, lore: 'Courage — Fortune of the brave' },
    { id: 5, name: 'Triforce Shard 5', type: 'reelSpeed', value: 0.10, lore: 'Wisdom — Patience of the sage' },
    { id: 6, name: 'Triforce Shard 6', type: 'luck', value: 0.08, lore: 'Power — Will of the goddess' },
    { id: 7, name: 'Triforce Shard 7', type: 'reelSpeed', value: 0.06, lore: 'Courage — Reflex of a hero' },
    { id: 8, name: 'Triforce Shard 8', type: 'luck', value: 0.12, lore: 'Wisdom — The rarest grace of all' }
  ]
};
