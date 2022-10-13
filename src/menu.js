const content = document.getElementById('content');

function menuContent() {
  const home = document.createElement('div');
  const title = document.createElement('h1');
  const image = document.createElement('img');


  home.classList.add('home');
  title.classList.add('title');
  image.classList.add('image');

  title.textContent = "MENU";
  image.src = 'https://www.galapagospet.com/wp-content/uploads/2020/10/ABOUT-US_Crested-Gecko@2x.png';

  content.appendChild(home);
  home.appendChild(title);
  home.appendChild(image);
}

export default menuContent