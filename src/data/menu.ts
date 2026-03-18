export type TabKey = 'starters' | 'mains' | 'desserts' | 'wine'

export interface MenuItem {
  name: string
  price: string
  desc: string
}

export const menuData: Record<TabKey, MenuItem[]> = {
  starters: [
    {
      name: "Soupe à l'Oignon Les Halles",
      price: 'Incl. · $10',
      desc: 'French onion soup gratinée as served in Paris',
    },
    {
      name: 'Potage du Jour',
      price: 'Incl. · $10',
      desc: "Today's soup, ask your waiter",
    },
    {
      name: 'Les Betteraves',
      price: 'Incl. · $10',
      desc: 'Roasted heirloom golden and red beets, whipped goat cheese and fresh herbs',
    },
    {
      name: 'Tartare de Boeuf',
      price: 'Incl. · $10',
      desc: 'Tenderloin steak tartare (raw), traditional accoutrements, truffle chips',
    },
    {
      name: 'Terrine de Campagne',
      price: '$7 · $12',
      desc: "Country pâté with cornichons et moutarde à l'ancienne",
    },
    {
      name: 'Escargots Bourguignonne',
      price: '$9 · $14',
      desc: "Half dozen snails in Saint-Émilion's garlic and parsley butter, topped with puff pastry rounds",
    },
    {
      name: 'Tartiflette des Alpes',
      price: '$7 · $12',
      desc: 'Melted alpine cheese with caramelized onion, thin sliced potato and speck prosciutto',
    },
    {
      name: 'Gratin de Fruits de Mer',
      price: '$10 · $15',
      desc: 'Lobster, scallops and shrimp, sauce Mornay, gruyère gratin',
    },
  ],
  mains: [
    {
      name: 'Filet au Poivre, Pommes de Terre Frites',
      price: '+$11 suppl.',
      desc: 'Beef tenderloin, cognac and black peppercorn sauce, with thin french fries. No Well Done please.',
    },
    {
      name: 'Daube de Boeuf',
      price: 'Included',
      desc: 'The Provençal cousin to beef bourguignon. Blade chuck roast slowly braised in red wine with mirepoix, aromatics, olives and lardons.',
    },
    {
      name: "Côtes d'Agneau",
      price: 'Included',
      desc: 'Lamb chops, ratatouille stuffed tomato, roasted garlic purée, lamb jus',
    },
    {
      name: 'Magret de Canard Griottines',
      price: 'Included',
      desc: 'Duck breast cooked like a steak (med to med rare), confit and duck fat potatoes, brandy cherries',
    },
    {
      name: 'Saint-Jacques du Chef',
      price: 'Included',
      desc: 'Cape Cod sea scallops, preparation changes daily, ask your waiter. Also available as an appetizer $10 / $15.',
    },
  ],
  desserts: [
    {
      name: 'Mousse au Chocolat',
      price: '$10',
      desc: 'Dark chocolate mousse',
    },
    {
      name: 'Tiramisu Pascal',
      price: '$10',
      desc: "Chef Pascal's tiramisu",
    },
    {
      name: 'Seasonal Tarte',
      price: '$10',
      desc: "Ask your server for this evening's selection",
    },
    {
      name: 'Crème Brûlée',
      price: '$10',
      desc: 'Vanilla custard with caramelized sugar',
    },
    {
      name: 'Café Liégeois',
      price: '$10',
      desc: 'Coffee ice cream with espresso and chantilly',
    },
  ],
  wine: [
    { name: 'Château Margaux 2015', price: '$320', desc: 'Bordeaux, Margaux AOC · Cabernet Sauvignon blend · deep, elegant, long' },
    { name: 'Puligny-Montrachet 2019', price: '$145', desc: 'Burgundy, Côte de Beaune · Chardonnay · mineral, hazelnut, citrus' },
    { name: 'Sancerre Rouge 2021', price: '$88', desc: 'Loire Valley · Pinot Noir · bright cherry, silky, light-bodied' },
    { name: 'Champagne Billecart-Salmon', price: '$95', desc: 'Blanc de Blancs NV · fine mousse, green apple, toasted brioche' },
    { name: 'Côtes du Rhône 2022', price: '$48', desc: 'Grenache, Syrah, Mourvèdre · spiced, plum, garrigue' },
    { name: 'Muscadet Sur Lie 2022', price: '$42', desc: 'Loire Valley · crisp, saline, perfect with oysters or sole' },
  ],
}

export const tabs: { key: TabKey; label: string }[] = [
  { key: 'starters', label: 'Appetizers' },
  { key: 'mains', label: 'Main Courses' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'wine', label: 'Wine' },
]
