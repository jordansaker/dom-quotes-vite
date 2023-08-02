function AuthModule () {
  const authOrigins = ['https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com']
  let token

  this.setToken = (value) => {
    token = value
  }
  this.fetch = (resource, options) => {
    const req = new Request(resource, options)
    const destOrigin = new URL(req.url).origin
    if (token && authOrigins.includes(destOrigin)) {
      req.headers.set('Authorization', 'Bearer ' + token)
    }
    return fetch(req)
  }
  this.admin = () => {
    if (token) {
      return 'Admin access'
    }
  }
}

const auth = new AuthModule()

async function postLogin (data) {
  try {
    const res = await fetch('https://domtorrettoquotesapi-73dfacef14e4.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const returnedData = await res.json()
    auth.setToken(returnedData.token)
    console.log('Sucess')
    return 'Authenticated'
  } catch (err) {
    console.error(err)
    throw err
  }
}

export {
  auth,
  postLogin
}