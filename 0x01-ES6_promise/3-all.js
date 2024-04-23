import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  try {
    Promise.all([uploadPhoto(), createUser()])
      .then((data) => {
        console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
      });
  } catch (e) {
    console.log('Signup system offline');
  }
}
