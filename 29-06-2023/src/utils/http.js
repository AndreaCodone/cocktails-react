export function filterItems(data, query) {
  query = query.toLowerCase();
  return data.filter((data) =>
    data.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}

const BASE_URL = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = res.json();

  return data;
};
