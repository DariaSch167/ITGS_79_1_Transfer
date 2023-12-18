function switcher() {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const text1 = input1.value;
  const text2 = input2.value;
  if (isStringEmpty(text1) || isStringEmpty(text2))
    return alert("fill a blank!");
  input1.value = text2;
  input2.value = text1;
}

function isStringEmpty(string) {
  return !string.trim().length;
}
