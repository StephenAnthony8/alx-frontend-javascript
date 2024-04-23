import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const names = await signUpUser(firstName, lastName);
    const file = await uploadPhoto(fileName);
  } catch (e) {
    return (Error());
  }

  return [names, file];
}
