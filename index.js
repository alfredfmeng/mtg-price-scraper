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

  const $ = cheerio.load(response.data);

  $('.elementor-element-7942181b')
    .find('.e-con')
    .each((index, element) => {
      // extracting the data of interest
      const pageUrl = $(element).attr('href');
      const image = $(element)
        .find('.elementor-image-box-img img')
        .attr('data-lazy-src');
      const name = $(element)
        .find('.elementor-image-box-content .elementor-image-box-title')
        .text();
      console.log(name, image, pageUrl);
    });
};

performScraping();
