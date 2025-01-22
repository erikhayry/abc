export async function fetchCocktails() {
  const data = await fetch('/api/cocktails');
  return data.json();
}
