function sideMenu() {
  document.querySelector("#navigation-menu").classList.add("menu-active");
  const tutorialMenuBtn = document.getElementById('fa-list-ul');
  const tutorialMenuWrapper = document.getElementById('content-btns-menu-wrapper');
  tutorialMenuWrapper.style.display = 'none';
}
function sideMenuClose() {
  document.querySelector("#navigation-menu").classList.remove("menu-active");
}
// Tutorial page
const contentBtn = document.querySelectorAll('#content-btn');
contentBtn.forEach(contentItemBtn =>{
  contentItemBtn.addEventListener('click', () => {
    var articleId = contentItemBtn.dataset.btn;
    var article = document.getElementById(articleId);
    var allArticle = document.getElementsByClassName('article');
    for(var i = 0; i < allArticle.length; i++){
      allArticle[i].style.display = 'none';
    }
    const tutorialMenuBtn = document.getElementById('fa-list-ul');
  const tutorialMenuWrapper = document.getElementById('content-btns-menu-wrapper');
  tutorialMenuWrapper.style.display = 'none';
    article.style.display = 'block';
  });
});
function tutorialMenuopen(){
  const tutorialMenuBtn = document.getElementById('fa-list-ul');
  const tutorialMenuWrapper = document.getElementById('content-btns-menu-wrapper');
  tutorialMenuWrapper.style.display = 'block';
}
function tutorialMenuclose(){
  const tutorialMenuBtn = document.getElementById('fa-list-ul');
  const tutorialMenuWrapper = document.getElementById('content-btns-menu-wrapper');
  tutorialMenuWrapper.style.display = 'none';
}
