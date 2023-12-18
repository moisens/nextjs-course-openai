import Image from "next/image";
import Link from "next/link";

const DrinksList = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks.map((drink) => {
        const { idDrink, strDrink, strDrinkThumb } = drink;
        return (
          <li key={idDrink}>
            <Link href={`/drinks/${idDrink}`}>{strDrink}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinksList;
