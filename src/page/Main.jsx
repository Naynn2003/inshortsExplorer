import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import News from '../components/News';
import { fetchNews } from '../components/utils';
import Footer from '../components/Footer';

function Main() {
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNews(selectedCategory);
      setNews(data);
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  
  return (
    <div>
      <Navbar onCategoryClick={handleCategoryClick} />
      <News news={news.data} selectedCategory={selectedCategory} />
      <Footer/>
    </div>
  );
}

export default Main;
