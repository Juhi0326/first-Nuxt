/* eslint-disable no-console */
export default function (context) {
  context.$axios
    .$post('https://reqres.in/api/login',
      {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    ).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err)
    })
}
