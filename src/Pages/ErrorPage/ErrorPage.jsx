import React from 'react';
import errImg from '../../assets/error-404.png'
const ErrorPage = () => {
    return (
       <div className="flex flex-col justify-center items-center mx-auto min-h-screen">
  <img src={errImg} alt="" className="mx-auto" />
  <h1 className="text-3xl font-bold text-center mt-4">Oops, Page not Found!</h1>
  <p className="text-center text-gray-600 mt-2">
    The page you are looking for is not available.
  </p>
</div>

    );
};

export default ErrorPage;