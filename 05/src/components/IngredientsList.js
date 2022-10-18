import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientsList({list}) {
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  );
}


/*
  <Ingredient {...ingredient} />

  스프레스 연산자를 활용하면 아래의 코드를 위와 같이 간략히 표현할 수 있다.
  <Ingredient
    amount={ingredient.amount}
    measurement={ingredient.measurement}
    name={ingredient.name}
  />
*/
