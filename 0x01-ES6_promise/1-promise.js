export default function getFullResponseFromApi(success) {
  return new Promise((fulfil, fail) => {
    if (success === true) {
      fulfil({ status: 200, body: 'Success' });
    } else {
      fail(new Error('The fake API is not working currently'));
    }
  });
}
