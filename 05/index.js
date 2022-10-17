const Recipe = (props) => (
  <div></div>
);

const Menu = (props) => (
  <article>
    <header>
      <h1>{props.title}</h1>
    </header>
    <div className='items'>
      {
        props.items.map((item, i) => (
          <Recipe
            key={i}
            name={item.name}
            ingredients={items.ingredients}
            steps={items.steps}
          />
          // <Recipe
          //   key={i}
          //   {
          //     ...item // 스트레드 연산자로 코드를 더 개선할 수 있다. 하지만 모든 프로퍼티를 넘겨준다는 점을 주의해야한다.
          //   }
          // />
        ))
      }
    </div>
  </article>
);
