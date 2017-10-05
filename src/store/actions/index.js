export const addPerson = personInformation => {
  return {
    type: 'ADD_PERSON',
    name: personInformation.name,
    phoneNumber: personInformation.phoneNumber,
    email: personInformation.email
  }
}
