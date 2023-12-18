const fetchData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchData();
  console.log("Data fro server", data);
  return (
    <div>
      <h1 className="text-7xl">Drinks Page</h1>
    </div>
  );
};

export default DrinksPage;
