
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  const response = await fetch(url);
  
  if (response.status == 200) {
    const data = await response.json();
    return data;
  }

  throw new HttpError(response);
}

async function demoGithubUser() {
  let user;
  
  while(true) {
    let name = prompt("Enter a name?", "name");

    try {
      user = loadJson(`https://api.github.com/users/${name}`);
      break; // no error, exit loop
    } catch(error) {
      if (error instanceof HttpError && error.response.status == 404) {
        // loop continues after the alert
        alert("No such user, please reenter.");
      } else {
        // unknown error, rethrow
        throw error;
      }
    }
  }

  alert(`Full name: ${user.name}.`);
  return user;
}

demoGithubUser();