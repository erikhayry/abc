export type Ingredient = {
  amount?: string;
  names: string[];
};

export type Cocktail = {
  name: string;
  id: number;
  ingredients?: Ingredient[];
  instruction?: string;
  note?: string;
};
