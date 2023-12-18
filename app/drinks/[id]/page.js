import Link from "next/link";
import Image from "next/image";
import drinksImg from "./drinks.jpg";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleData = async (id) => {
  const response = await fetch(`${url}${id}`);
  if (!response.ok) throw new Error("Failed to fetch single data");
  const data = await response.json();
  return data;
};

const SingleDrinksPage = async ({ params }) => {
  const data = await getSingleData(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      {/* <Image
        src={drinksImg}
        alt={title}
        title={title}
        className="w-48 h-48 rounded-lg"
      /> */}
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded shadow-lg mb-4"
        priority
        alt={title}
        title={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default SingleDrinksPage;
