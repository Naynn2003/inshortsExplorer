// utils.js
export const fetchNews = async (category) => {
  try {
    const response = await fetch(`https://inshortsapi.vercel.app/news?category=${category}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
