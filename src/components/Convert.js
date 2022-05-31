// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
      'https://translations.googleapis.com/language/translate/v2',
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM',
          withCredentials: false,
        },
      }
    );
  }, [language, text]);

  return <div>Conver</div>;
};

export default Convert;
