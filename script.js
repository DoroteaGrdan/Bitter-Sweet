function myFunction(button) {
    const moreText = button.previousElementSibling;
    const btnText = button.firstChild;
    if (moreText.style.display === "inline") {
        btnText.innerHTML = "Show more";
        moreText.style.display = "none";
    } else {
        btnText.innerHTML = "Show less";
        moreText.style.display = "inline";
    }
  }
