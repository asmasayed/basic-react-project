import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Heading from './Heading';
import FindPath from './FindPath';
import CardSection from './CardSection';
import Form from './Form';
import Results from './Results';
import Slogans from './Slogans';
import Footer from './Footer'; // Import Footer
import CareerCards from './CareerCards';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Heading />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={
            <>
              <FindPath />
              {/* <CardSection /> */}
                <CareerCards />
                 <Slogans /> 
            </>
          } />
          <Route path="/form" element={<Form />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
}
