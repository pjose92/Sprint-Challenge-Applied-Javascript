// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
  
  const theContainer = document.querySelector('.cards-container');
  
  axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
      const topics = Object.keys(response.data.articles);
      topics.forEach(top => {
        response.data.articles[top].forEach(a => {
          theContainer.append(Card(a));
        })
      })
    })
    .catch(error =>{
        console.log(`There was a ${error}`);
      })

    function Card(obj){
        const card = document.createElement('div'),
              headline = document.createElement('div'),
              author = document.createElement('div'),
              imgContainer = document.createElement('div'),
              img = document.createElement('img'),
              name = document.createElement('span');
      
        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgContainer.classList.add('img-container');
      
        headline.textContent = obj.headline;
        name.textContent = `By ${obj.authorName}`;
      
        img.src = obj.authorPhoto;
      
        card.append(headline, author);
        author.append(imgContainer, name);
        imgContainer.append(img);
      
        return card;
      }