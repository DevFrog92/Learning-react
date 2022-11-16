import React, { useState } from 'react'

function SearchForm({ value, onSearch }) {
  const [keyword, setKeyword] = useState(value);

  return (
    <>
      <div>SearchForm</div>
      <div style={{display: "flex"}}>
        <input type='text' value={keyword} placeholder="검색어를 입력하세요." onChange={(e) => setKeyword(e.target.value)} />
        <button onClick={() => onSearch(keyword)}>찾기</button>
      </div>
    </>
  )
}

export default SearchForm