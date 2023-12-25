function switcher() {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const text1 = input1.value;
  const text2 = input2.value;

  input1.value = text2;
  input2.value = text1;
}

function switcher_2() {
  const input1_2 = document.getElementById("input1_2");
  const input2_2 = document.getElementById("input2_2");
  const text1_2 = input1_2.value;
  const text2_2 = input2_2.value;

  input1_2.value = text2_2;
  input2_2.value = text1_2;
}
