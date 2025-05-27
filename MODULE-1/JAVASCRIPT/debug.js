const form = document.getElementById('registrationForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;

  console.log('Form submitted:', { name, email });

  try {
    console.log('Starting fetch to mock API...');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    console.log('Fetch response received, status:', response.status);

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response data:', data);
    alert('Registration successful!');

  } catch (error) {
    console.error('Error during registration:', error);
    alert('Registration failed. Check console for details.');
  }
});
