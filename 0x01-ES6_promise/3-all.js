import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    await Promise.all([uploadPhoto(), createUser()])
      .then((data) => {
        console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
      });
  } catch (e) {
    console.log('Signup system offline');
  }
}
