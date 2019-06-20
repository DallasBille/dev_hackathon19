const ACCOUNT_URL = 'http://localhost:4000/details'

const postAccount = (obj) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(obj)
  }
}
const patchAccount = (newCompany, newUrl, newUsername, newPassword) => {
  return {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      company: newCompany,
      website_url: newUrl,
      username: newUsername,
      password: newPassword
    })
  }
}


const adapter = {
  getAccounts: () => fetch(ACCOUNT_URL).then(res => res.json()),
  patchAccount: (newCompany, newUrl, newUsername, newPassword) => fetch(ACCOUNT_URL, patchAccount(newCompany, newUrl, newUsername, newPassword)),
  postAccount: (obj) => fetch(ACCOUNT_URL, postAccount(obj)).then(res => res.json()),
}

export default adapter;
