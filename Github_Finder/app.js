
const github = new GitHub;

const ui = new UI;

const searchUser = document.getElementById('searchUser');
const searchbtn = document.getElementById('SearchBtn');

//event listner for User search
searchbtn.addEventListener('click', (e) => {
  //get input text
  const userText = searchUser.value;

  //clearing if there was any previous search alert
  ui.clearAlert();

  if (userText !== '') {
    console.log(userText);

    github.getUser(userText)
      .then(data => {
      
        if (data.profile.message === 'Not Found') {
          //show alert
          ui.showAlert('User not found!!!');
          //clearing result shown before search result
          ui.clearResult();
        }
        
        else {
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  }
  else {
    //clear profile
    ui.clearResult();
  }
});