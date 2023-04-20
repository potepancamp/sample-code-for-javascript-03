function search(e) {
  // 検索文字を取得する
  const searchWords = e.target.value;

  // キーワードを設定しているHTML要素（pタグ）を取得する
  const keywordElements = document.getElementsByClassName("js-keyword");

  Array.prototype.forEach.call(keywordElements, function (keywordElement) {
    // キーワードを取得する
    const keyword = keywordElement.textContent

    // キーワード要素の親要素（カード）を取得する
    const cardElement = keywordElement.closest(".js-card");

    // 検索文字とキーワードの一致を判定する
    cardElement.style.visibility = keyword.indexOf(searchWords) >= 0 ? "visible" : "hidden";
  })
}