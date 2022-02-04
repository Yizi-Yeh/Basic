// 回傳所有element(符合某條件)
// 回傳所有符合的
// 如果條件皆無符合回傳 空Array []

let languages = [
    {
      name: "python",
      rating: 9.5,
      popularity: 9.7,
      trending: "super hot",
    },
    {
      name: "Java",
      rating: 8.2,
      popularity: 9,
      trending: "same",
    },
    {
      name: "C++",
      rating: 6.6,
      popularity: 8.6,
      trending: "same",
    },
    {
      name: "PHP",
      rating: 2.5,
      popularity: 4.7,
      trending: "decreasing",
    },
  ];
  
  let result = languages.filter((lang) => {
    return lang.rating > 4;
  });
  
  console.log(result)
//   {
//     name: "python",
//     rating: 9.5,
//     popularity: 9.7,
//     trending: "super hot",
//   },
//   {
//     name: "Java",
//     rating: 8.2,
//     popularity: 9,
//     trending: "same",
//   },
//   {
//     name: "C++",
//     rating: 6.6,
//     popularity: 8.6,
//     trending: "same",
//   },