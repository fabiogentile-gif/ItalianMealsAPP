export type LoadStatus = 'idle' | 'loading' | 'success' | 'error';

export type MealSummary = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strCountry: string;
};

export type MealDetail = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
};

export type MealsListState = {
  status: LoadStatus;
  items: MealSummary[];
  message: string;
};

export type MealDetailState = {
  status: LoadStatus;
  meal: MealDetail | null;
  message: string;
};