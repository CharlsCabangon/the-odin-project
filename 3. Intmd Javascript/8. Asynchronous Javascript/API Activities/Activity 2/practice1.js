
async function loadJson(url) {
  const response = await fetch(url);
  
  if (response.status == 200) {
    const data = await response.json();
    return data;
  }

  throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert);