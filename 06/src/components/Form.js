import React from "react";

export default function Form({ titleProps, colorProps, submit = f => f }) {
  // 구조 분해를 적용하면 코드를 간략히 작성할 수 있다.
  return (
    <form onSubmit={submit}>
      {/* <input value={titleProps.value} onChange={titleProps.onChange} type="text" placeholder="color title..." required /> */}
      <input {...titleProps} type="text" placeholder="color title..." required />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}
