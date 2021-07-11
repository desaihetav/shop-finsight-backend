const sampleAuthorWithAllFields = {
  slug: 'morgan-housel',
  name: 'Morgan Housel',
  photo_url: 'https://firebasestorage.googleapis.com/v0/b/club-finsight.appspot.com/o/Authors%2Fmorgan-housel.png?alt=media&token=758ca2bf-c799-4d72-ad44-b2ac4824295f',
  description: 'Morgan Housel is a partner at The Collaborative Fund and a former columnist at The Motley Fool and The Wall Street Journal. He is a two-time winner of the Best in Business Award from the Society of American Business Editors and Writers, winner of the New York Times Sidney Award, and a two-time finalist for the Gerald Loeb Award for Distinguished Business and Financial Journalism.',
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
}

const allAuthors = [{
  slug: 'morgan-housel',
  name: 'Morgan Housel',
  photo_url: 'https://firebasestorage.googleapis.com/v0/b/club-finsight.appspot.com/o/Authors%2Fmorgan-housel.png?alt=media&token=758ca2bf-c799-4d72-ad44-b2ac4824295f',
  description: 'Morgan Housel is a partner at The Collaborative Fund and a former columnist at The Motley Fool and The Wall Street Journal. He is a two-time winner of the Best in Business Award from the Society of American Business Editors and Writers, winner of the New York Times Sidney Award, and a two-time finalist for the Gerald Loeb Award for Distinguished Business and Financial Journalism.',
},
{
  "slug": "robert-t-kiyosaki",
  "name": "Robert T. Kiyosaki",
  "photo_url": "",
  "description": "Best known as the author of Rich Dad Poor Dad―the #1 personal finance book of all time―Robert Kiyosaki has challenged and changed the way tens of millions of people around the world think about money. He is an entrepreneur, educator, and investor who believes that each of us has the power to makes changes in our lives, take control of our financial future, and live the rich life we deserve. With perspectives on money and investing that often contradict conventional wisdom, Robert has earned an international reputation for straight talk, irreverence, and courage and has become a passionate and outspoken advocate for financial education. Robert's most recent books―Why the Rich Are Getting Richer and More Important Than Money―were published in the spring of 2017 to mark the 20th Anniversary of the 1997 release of Rich Dad Poor Dad. That book and its messages, viewed around the world as a classic in the personal finance arena, have stood the test of time. Why the Rich Are Getting Richer, released two decades after the international blockbuster bestseller Rich Dad Poor Dad, is positioned as Rich Dad Graduate School."
},
{
  "slug": "benjamin-graham",
  "name": "Benjamin Graham",
  "photo_url": "",
  "description": "A professional investor and economist, known all over the world, Benjamin Graham is believed to be the father of value investing. He first taught this new investment approach at Columbia Business School. A British-born, he is credited with having pioneered numerous cutting edge concepts that, many believe, pushed several of his followers in the world of investments, to the top."
},
{
  "slug": "monika-halan",
  "name": "Monika Halan",
  "photo_url": "",
  "description": "Monika Halan is consulting editor and part of the leadership team at Mint. A certified financial planner, she has served as editor of Outlook Money and worked in some of India's top media organizations, including the Indian Express, the Economic Times and Business Today. She has run four successful TV series around personal finance advice, on NDTV, Zee and Bloomberg India, and is a regular speaker on financial literacy, regulation and consumer issues in retail finance. As part of her public policy service, she is a member of SEBI's Mutual Fund Advisory Committee. She lives in New Delhi and tweets at @monikahalan."
}]