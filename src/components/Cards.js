import React, { useState } from 'react';
import {AiOutlineArrowLeft , AiOutlineArrowRight} from 'react-icons/ai'

const Cards = () => {
  const items = [
    {
      id: 1,
      imageUrl: 'https://s3-alpha-sig.figma.com/img/47d5/04a0/5c72c6b4f096bbbec0680ab784a5dcef?Expires=1686528000&Signature=CmSJUQRvYiirwAWRxdgSfW0C9CxyvwgnHWXFydxAcp-LS8DnP5TtaE72T9hr3V5qSyfoXMY15sGWwn9bqjneSYaSsy5sIy4S6TB76hawYoAJ6PLfj5eSuTmGLtUjnIhYt9yYDdRtbkEM8~coNlXDL6dvCAOQbfDQu4W1PX-qAQM0I2FkaPABVPTk2hvjqkjcDiU0ze2ZEB4765y3t0KGmiOFfr0opjiGLRVctpzGf4ob5ZVkq6XGhVfLeRFoFix8PylwskgE8chEfbs1VeVzVujQ46PKKrWzwnRjUxeHguYfzxg3bkyksn6uWAUVgHCYJSC45NYL2nBjPxEtKIhuYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      heading: 'Grilled  Tomatoes at Home',
      details: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard...',
    },
    {
      id: 2,
      imageUrl: 'https://s3-alpha-sig.figma.com/img/c6dd/5c3b/71e2cd1709116400deb9af41ed9aa012?Expires=1686528000&Signature=KiJeBrGfbN29n6Dbr7syUB5S8s2nofQ7wDNNgaKi8h065-7b8IeIezPoVtDJDEz36OhR821RKtNIiEM8zoFBsQFgHDR5dUgilL40MKx4lhvIISIbiEAWiVlXHDy9RzMms1OWH9T43RkukDhOzh9we3Dgqu92LaxxQNDXwNtYRUQAxVHzjTGWYm6S99ekd~tPvrGL9IPxEayJ55TqGAhZMBv0jCWmr8tJu-EODnv-lDr8NZXkoT7qP~nv5NWQQShoWs8YAZK5G24o4x4FiSs51nb45uuei04mxzkeklJW3N-wQUrI0Rq0BqMvXNq-puAZ~X6MvqPbhtd1MMkjs-s0iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      heading: 'Snacks for Travel',
      details: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard...',
    },
    {
      id: 3,
      imageUrl: 'https://s3-alpha-sig.figma.com/img/01b6/596f/5a4907f80afeb54b1849b81ebf1eb5f2?Expires=1686528000&Signature=gAdUSkyaP70APeErK5dEgbvQefUebSr9sZnZL3lyDvE2iUVPP6h0poqAHE1oHDtDQARfiCrGikXQPk6ARiZfhspwnUsGJk9vL7Se45DKI0EkKaoiDBzHZAjTMMuSLRs~7hsDY765m1heE4EQ9HN~IpTQBz3uRen1wZs8ySi~SvPShdehv~wFJafTb9X~J~z9b4jkizWV2xRcHWrgue6oCP~lvC4Gh8sdqnsrh1BMY1T1PWpr1gRZB9kquoUB5o-NA2FLmiZnFaTnmqwXyjojeOsiyjh6NYtcAIiv5gpdmLb4PJibwmlvO5YgvIa-O2yuD6viPBd9ioMdWNGd9LzOxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      heading: 'Post-workout Recipes',
      details: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard...',
    },
    {
      id: 4,
      imageUrl: 'https://s3-alpha-sig.figma.com/img/b457/cb75/2678ff07019c289fb72556852cc6b74f?Expires=1686528000&Signature=oUajjoXb3X1jwFzzs89x8OhHPXJTdz3dkmHj6MK0ncgz1I4DsxPPvMc4vXQkqqgMNjxhPQilrpTWWYMuC86X2~EUqqaoA6le9y8HDfv9l8FluJg-ePcAnhbec3TPiuLvqYu9EeHMgoSzQ3daVJhgcyHQ46QhEqB6JhlKOaZz0l82Hvktz1pDIcHfUFJPsJq8scLQ67rGzXsYymvZOBp0XTJMBxQR2Jv7Fb1NfeFmFchViUGF3djmHgeiAM3c-nmr5loO4T9bxoxjDCYjfuJnCOaQu3UXxILkZLo-sEP6fLx8YY-aY2DB5o3DgF2DAZ6bnb2q69~P-mXSjfNVl2gAmg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      heading: 'How To Grill Corn',
      details: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard...',
    },

    {
        id: 5,
        imageUrl: 'https://s3-alpha-sig.figma.com/img/c6dd/5c3b/71e2cd1709116400deb9af41ed9aa012?Expires=1686528000&Signature=KiJeBrGfbN29n6Dbr7syUB5S8s2nofQ7wDNNgaKi8h065-7b8IeIezPoVtDJDEz36OhR821RKtNIiEM8zoFBsQFgHDR5dUgilL40MKx4lhvIISIbiEAWiVlXHDy9RzMms1OWH9T43RkukDhOzh9we3Dgqu92LaxxQNDXwNtYRUQAxVHzjTGWYm6S99ekd~tPvrGL9IPxEayJ55TqGAhZMBv0jCWmr8tJu-EODnv-lDr8NZXkoT7qP~nv5NWQQShoWs8YAZK5G24o4x4FiSs51nb45uuei04mxzkeklJW3N-wQUrI0Rq0BqMvXNq-puAZ~X6MvqPbhtd1MMkjs-s0iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        heading: 'Card 2',
        details: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard...',
      },
      {
        id: 6,
        imageUrl: 'https://s3-alpha-sig.figma.com/img/01b6/596f/5a4907f80afeb54b1849b81ebf1eb5f2?Expires=1686528000&Signature=gAdUSkyaP70APeErK5dEgbvQefUebSr9sZnZL3lyDvE2iUVPP6h0poqAHE1oHDtDQARfiCrGikXQPk6ARiZfhspwnUsGJk9vL7Se45DKI0EkKaoiDBzHZAjTMMuSLRs~7hsDY765m1heE4EQ9HN~IpTQBz3uRen1wZs8ySi~SvPShdehv~wFJafTb9X~J~z9b4jkizWV2xRcHWrgue6oCP~lvC4Gh8sdqnsrh1BMY1T1PWpr1gRZB9kquoUB5o-NA2FLmiZnFaTnmqwXyjojeOsiyjh6NYtcAIiv5gpdmLb4PJibwmlvO5YgvIa-O2yuD6viPBd9ioMdWNGd9LzOxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        heading: 'Card 3',
        details: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrystandard...',
      },
    // Add more items here...
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(items.length / cardsPerPage);

  const navigateToPage = (pageIndex) => {
    setCurrentCardIndex(pageIndex * cardsPerPage);
  };

  const navigateForward = () => {
    if (currentCardIndex < (totalPages - 1) * cardsPerPage) {
      setCurrentCardIndex(currentCardIndex + cardsPerPage);
    }
  };

  const navigateBackward = () => {
    if (currentCardIndex >= cardsPerPage) {
      setCurrentCardIndex(currentCardIndex - cardsPerPage);
    }
  };

  const currentCards = items.slice(currentCardIndex, currentCardIndex + cardsPerPage);

  return (
    <div className="lg:p-10 sm:[2.5rem] lg:flex sm:flex-col lg:font-bold">
  <div className="text-[56px] text-[#0E2368] ml-[108px] leading-[42px] mt-[108px] mb-[50px] font-weight-[56px]">
    <h1>Latest Articles</h1>
  </div>

  <div className="lg:flex lg:flex-wrap justify-center items-center lg:ml-[0px] sm:ml-0 sm:gap-4">
    {currentCards.map((item) => (
      <div
        key={item.id}
        className="lg:ml-0 border border-[#93A2D361] flex flex-col items-center w-[320px] sm:w-[400px] h-[auto] rounded-3xl bg-white p-5 m-5 shadow-2xl transform transition duration-300 ease-in hover:scale-105"
      >
        <img
          src={item.imageUrl}
          alt={item.heading}
          className="object-cover mb-4 w-full h-[200px] rounded-3xl p-2"
        />
        <div className="flex flex-col">
          <h3 className="text-xl text-[#0E2368] font-bold mb-2">{item.heading}</h3>
          <p className="text-[#444957] mb-4">{item.details}</p>
          <button className="border border-[#424961] w-[120px] text-[#424961] h-[50px] rounded-full hover:bg-gray-500 hover:text-white font-bold px-4 rounded">
            Read More
          </button>
        </div>
      </div>
    ))}
  </div>

  <div className="mt-4 flex justify-center">
    <button
      className={`border border-[#93A2D361] w-[38px] h-[38px] m-2 flex items-center justify-center ${
        currentCardIndex < cardsPerPage ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={navigateBackward}
      disabled={currentCardIndex < cardsPerPage}
    >
      <AiOutlineArrowLeft />
    </button>
    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index}
        className={`m-2 flex items-center justify-center ${
          currentCardIndex === index * cardsPerPage ? 'text-[#424961]' : 'text-[#424961] '
        }`}
        onClick={() => navigateToPage(index)}
      >
        {index + 1}
      </button>
    ))}
    <button
      className={`border border-[#93A2D361] w-[38px] h-[38px] m-2 flex items-center justify-center ${
        currentCardIndex >= (totalPages - 1) * cardsPerPage ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={navigateForward}
      disabled={currentCardIndex >= (totalPages - 1) * cardsPerPage}
    >
      <AiOutlineArrowRight />
    </button>
  </div>
</div>

  );
};

export default Cards;
