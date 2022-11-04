const secretIngredients = [
  '물 500ml',
  '진라면',
  '대파',
  '계란 2알',
  '슬라이스 치즈 반개',
];

function IngredientsList({items}) {
  return React.createElement(
    'ul',
    { className: "ingredients" },
    items.map((it, idx) => React.createElement('li', { key: idx }, it))
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(React.createElement(IngredientsList, { items: secretIngredients }, null));
