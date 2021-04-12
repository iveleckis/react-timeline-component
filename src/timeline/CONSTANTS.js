export const months = [
  { short_name_letters: "Jan.", numerical_expression: "01", days: 31 },
  { short_name_letters: "Feb.", numerical_expression: "02", days: 28 },
  { short_name_letters: "Mar.", numerical_expression: "03", days: 31 },
  { short_name_letters: "Apr.", numerical_expression: "04", days: 30 },
  { short_name_letters: "May", numerical_expression: "05", days: 31 },
  { short_name_letters: "Jun.", numerical_expression: "06", days: 30 },
  { short_name_letters: "Jul.", numerical_expression: "07", days: 31 },
  { short_name_letters: "Aug.", numerical_expression: "08", days: 31 },
  { short_name_letters: "Sep.", numerical_expression: "09", days: 30 },
  { short_name_letters: "Oct.", numerical_expression: "10", days: 31 },
  { short_name_letters: "Nov.", numerical_expression: "11", days: 30 },
  { short_name_letters: "Dec.", numerical_expression: "12", days: 31 },
];

export const track_color_pool = [
  `bg-red-100 border-red-700`,
  `bg-red-200 border-red-700`,
  `bg-red-300 border-red-700`,
  `bg-blue-100 border-blue-700`,
  `bg-blue-200 border-blue-700`,
  `bg-blue-300 border-blue-700`,
  `bg-blue-400 border-blue-700`,
  `bg-green-100 border-green-700`,
  `bg-green-200 border-green-700`,
  `bg-green-300 border-green-700`,
  `bg-green-400 border-green-700`,
  `bg-yellow-100 border-yellow-700`,
  `bg-yellow-200 border-yellow-700`,
  `bg-yellow-300 border-yellow-700`,
  `bg-yellow-400 border-yellow-700`,
  `bg-pink-100 border-pink-700`,
  `bg-pink-200 border-pink-700`,
  `bg-pink-300 border-pink-700`,
  `bg-pink-400 border-pink-700`,
  `bg-gray-100 border-gray-700`,
  `bg-gray-200 border-gray-700`,
  `bg-gray-300 border-gray-700`,
  `bg-gray-400 border-gray-700`,
  `bg-indigo-100 border-indigo-700`,
  `bg-indigo-200 border-indigo-700`,
  `bg-indigo-300 border-indigo-700`,
  `bg-indigo-400 border-indigo-700`,
  `bg-purple-100 border-purple-700`,
  `bg-purple-200 border-purple-700`,
  `bg-purple-300 border-purple-700`,
  `bg-purple-400 border-purple-700`,
];

export const data_for_testing = [
  {
    start_date: "2021.03.11",
    end_date: "2021.09.17",
    title: "a",
    group: "group a",
    details: "aaa",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2020.03.11",
    end_date: "2021.02.17",
    title: "b",
    group: "group a",
    details: "bbb",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2021.03.02",
    end_date: "2021.03.26",
    title: "e",
    group: "group a",
    details: "eee",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2021.05.18",
    end_date: "2021.06.10",
    title: "z",
    group: "group a",
    details: "zzz",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2021.06.11",
    end_date: "2022.01.17",
    title: "c",
    group: "group a",
    details: "ccc",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2021.02.11",
    end_date: "2021.03.17",
    title: "a",
    group: "group b",
    details: "aaa",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2021.03.11",
    end_date: "2021.07.17",
    title: "b",
    group: "group b",
    details: "bbb",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2021.02.11",
    end_date: "2022.03.17",
    title: "c",
    group: "group b",
    details: "ccc",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2020.02.11",
    end_date: "2020.08.17",
    title: "a",
    group: "group c",
    details: "aaa",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2020.08.11",
    end_date: "2022.01.17",
    title: "b",
    group: "group c",
    details: "bbb",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2020.10.11",
    end_date: "2021.04.17",
    title: "c",
    group: "group c",
    details: "ccc",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2020.01.11",
    end_date: "2022.12.17",
    title: "d",
    group: "group b",
    details: "ddd",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2021.01.11",
    end_date: "2021.01.19",
    title: "e",
    group: "group b",
    details: "eee",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
];
