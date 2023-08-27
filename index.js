const axios = require('axios');
const cheerio = require('cheerio');

const performScraping = async () => {
  const response = await axios.request({
    method: 'GET',
    url: 'https://brightdata.com',
    header: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
    },
  });

  console.log(response.data);
};

performScraping();
