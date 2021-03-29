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
    title: "Paleo",
    group: "diet",
    details:
      "The paleo diet is designed to resemble what human hunter-gatherer ancestors ate thousands of years ago.",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2020.03.12",
    end_date: "2021.03.10",
    title: "Vegan",
    group: "diet",
    details:
      "Veganism is defined as a way of living that attempts to exclude all forms of animal exploitation and cruelty, whether for food, clothing or any other purpose.",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2021.09.18",
    end_date: "2022.01.10",
    title: "Normal",
    group: "diet",
    details: "Normal eating without any restrictions.",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2020.10.26",
    end_date: "2020.10.30",
    title: "Holidays",
    group: "school holidays",
    details: "Autumn holiday",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2020.12.14",
    end_date: "2021.01.03",
    title: "Xmas",
    group: "school holidays",
    details: "Winter (Xmas) holiday",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2021.02.15",
    end_date: "2021.02.19",
    title: "Winter",
    group: "school holidays",
    details: "Winter holiday",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2021.04.06",
    end_date: "2021.04.09",
    title: "Spring",
    group: "school holidays",
    details: "Spring holiday",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
  {
    start_date: "2021.06.05",
    end_date: "2021.08.31",
    title: "Summer",
    group: "school holidays",
    details: "Summer holiday",
    styling:
      track_color_pool[Math.floor(Math.random() * track_color_pool.length)],
  },
];
