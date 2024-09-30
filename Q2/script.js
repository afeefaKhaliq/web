const formFields = {
  firstName: document.getElementById('firstName'),
  lastName: document.getElementById('lastName'),
  phone: document.getElementById('phone'),
  email: document.getElementById('email'),
  street: document.getElementById('street'),
  city: document.getElementById('city'),
  state: document.getElementById('state'),
  zip: document.getElementById('zip'),
  education: document.getElementById('education'),
  school: document.getElementById('school'),
  major: document.getElementById('major'),
  year: document.getElementById('year'),
  resume: document.getElementById('resume'),
  coverLetter: document.getElementById('coverLetter'),
  company: document.getElementById('company'),
  empolyeDate: document.getElementById('empolyeDate'),
  responsibilty: document.getElementById('responsibilty'),
  skills: document.getElementById('skills'),
  certifications: document.getElementById('certifications'),
  startDate: document.getElementById('startDate'),
  relocate: document.getElementById('relocate'),
  schedule: document.getElementById('schedule'),
  refName: document.getElementById('refName'),
  refContact: document.getElementById('refContact'),
  refRelation: document.getElementById('refRelation'),
  whyCompany: document.getElementById('whyCompany'),
  agreeTerms: document.getElementById('agreeTerms'),
  privacyPolicy: document.getElementById('privacyPolicy')
};

const errorMessage = document.getElementById('error-message');

document.getElementById('submitBtn').addEventListener('click', (event) => {
  event.preventDefault();
  let isValid = true;

  Object.keys(formFields).forEach((key) => {
    if (!formFields[key].value) {
      isValid = false;
    }
  });

  if (!isValid) {
    errorMessage.textContent = 'Please fill in all required fields.';
  } else {
    errorMessage.textContent = '';
    console.log('All required fields are filled out.');
  }
});

document.getElementById('viewTableBtn').addEventListener('click', () => {
  const tableContainer = document.getElementById('applicationTable');
  const table = `
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Resume</th>
          <th>Cover Letter</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${formFields.firstName.value}</td>
          <td>${formFields.lastName.value}</td>
          <td>${formFields.phone.value}</td>
          <td>${formFields.email.value}</td>
          <td>${formFields.resume.files[0]?.name || 'N/A'}</td>
          <td>${formFields.coverLetter.value}</td>
        </tr>
      </tbody>
    </table>
  `;

  tableContainer.innerHTML = table;
});