import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeafSpinner from '../components/LeafSpinner'; // Make sure the path is correct

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <LeafSpinner />
        </div>
      ) : (
        <Outlet />
      )}

      <Footer />
    </div>
  );
};

export default MainLayout;
