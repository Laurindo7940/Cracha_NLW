const LinksSocialMedia = {
  github: "Laurindo7940",
  youtube: "UCIjRD0GEhPPj_eIUMJk3iFA",
  facebook: "gabriel.laurindo.3990",
  instagram: "lau_7940/",
  twitter: "Laurindo_7940",
};

function chanceSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
  }
}

chanceSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();
