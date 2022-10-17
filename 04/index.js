const secreteItems = [
  "Javascript",
  "Javascript2",
  "Javascript3",
  "Javascript4",
  "Javascript5",
  "Javascript6",
]

// 함수 컨포넌트 - react 팀에서 공식적으로 사용 권장하는 컴포넌트 생성 방법
function Ingredients({items}) {
  return React.createElement(
  'ul',
  { className: "list-item", id:"test" }, // attribute
  items.map((item, index) => React.createElement("li", {key: index}, item)),
  )
}

// createClass -> 현재는 사용이 금지되었다.
const IngredientList = React.createClass({
  displayName: "IngredientsList",
  render () {
    return React.createElement(
        'ul',
        { className: "list-item", id: "test" }, // attribute
        this.props.items.map((item, index) => React.createElement("li", { key: index }, item)),
      )
    }
})

// 클래스형 컴포넌트
class IngredientListClass extends React.Component {
  render(){
    return React.createElement(
      'ul',
      { className: "list-item", id: "test" }, // attribute
      this.props.items.map((item, index) => React.createElement("li", { key: index }, item)),
    )
  }
}

ReactDOM.render(React.createElement(Ingredients, {items: secreteItems}, null),
  document.querySelector("#root")
);
