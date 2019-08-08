/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/rogermcconkiejr')
  .then ((response) => {
    console.log('data: ', response)
    const myInfo = response.data;
    console.log('UserInfo: ', myInfo)
    const card = createCard(myInfo);
    cards.appendChild(card);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

const cards = document.querySelector('.cards');

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

followersArray.forEach(teacherName => {
  axios.get(`https://api.github.com/users/${teacherName}`)
  .then ((response)=>{
    const newCard = createCard(response.data);
    console.log(newCard);
    const cards = document.querySelector('.cards');
    cards.appendChild(newCard);
  })
})

// axios.get('https://api.github.com/users/rogermcconkiejr')
// .then ((response)=>{
//   const followersName = response.data.followers_url;
//   console.log(followersName);
//   axios.get(followersName)
//   .then((response)=>{
//     console.log(response);
//     response.data.login.
//       axios.get(`https://api.github.com/users/${followerName}`)
//       .then((response)=>{
//       const followerCard = createCard(response.data);
//       const cards = document.querySelector('.cards');
//       cards.appendChild(followerCard);
//     })
//     })
//   })
// })


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>



*/
function createCard(element){
  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const userLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.classList.add('card');
  name.classList.add('name');
  username.classList.add('username');
  cardInfo.classList.add('card-info');

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(userLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

img.src = element.avatar_url;
name.textContent = element.name;
username.textContent = element.login;
location.textContent = element.location;
const userURL = element.url;
userLink.innerHTML = userURL.link(element.url);
followers.textContent = `Followers: ${element.followers}`;
following.textContent = `Following: ${element.following}`;
bio.textContent = element.bio;

return card;
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
