age = Number(age);

if (isNaN(age)) {
  alert("請輸入阿拉伯數字");
} else {
  if (age < 0) {
    alert("請輸入正確年齡(必須大於0歲");
  } else if (age <= 12) {
    alert("一張門票100元");
  } else if (age < 12 && age <= 65) {
    alert("一張門票100元");
  } else {
    alert("請輸入正確年齡(必須小於等於50歲）");
  }
}

// number => string number.toString()
// string => number Number(string)
