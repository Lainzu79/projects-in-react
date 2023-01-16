import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import './Home.scss';

const Home = () => {
    return (
      <>
        <Navbar />
        <main className="app-container">
          <Search />
        </main>
      </>
    );
}

export default Home;
