function notatejs() {
  const elements = document.getElementsByClassName("notatejs");
  for (let i = 0; i < elements.length; i++) {
    const target = elements[i];
    const origWidth = target.naturalWidth;
    const origHeight = target.naturalHeight;
    // 横長画像の場合
    if (origWidth > origHeight) {
      target.classList.add("notatejs-horizontal");
    } else {
      target.classList.add("notatejs-vertical");
    }
  }
}
