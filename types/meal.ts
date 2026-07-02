export type LoadStatus = 'idle' | 'loading' | 'success' | 'error';

export type MealSummary = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string,
  strCountry: string
};

export type State = {
  status: LoadStatus;
  items: MealSummary[];
  message: string;
};

export type DetailMeal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube?: string;
  strTags?: string;
  strSource?: string;
  [key: string]: any;
};
