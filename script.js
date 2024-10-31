function toggleForm() {
    const form = document.getElementById('editForm');
    const formHeader = document.getElementById('formHeader');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    formHeader.style.display = formHeader.style.display === 'none' ? 'block' : 'none';
    
    if (form.style.display === 'block') {
      TampilkanData(); 
    }
  }
  
  // Function untuk tampilkan data
  function TampilkanData() {
    const profile = JSON.parse(localStorage.getItem('profile')) || {};
  
    document.getElementById('name').value = profile.name || '';
    document.getElementById('role').value = profile.role || '';
    document.getElementById('availability').value = profile.availability || '';
    document.getElementById('age').value = profile.age || '';
    document.getElementById('location').value = profile.location || '';
    document.getElementById('yoe').value = profile.yoe || '';
    document.getElementById('email').value = profile.email || '';
  }
  
  // Save profile data ke localStorage 
  document.getElementById('editForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Collect data 
    const profile = {
      name: document.getElementById('name').value,
      role: document.getElementById('role').value,
      availability: document.getElementById('availability').value,
      age: document.getElementById('age').value,
      location: document.getElementById('location').value,
      yoe: document.getElementById('yoe').value,
      email: document.getElementById('email').value,
    };
  
    // Save update profile ke localstorage
    localStorage.setItem('profile', JSON.stringify(profile));
  
    loadProfile(); 
  
    toggleForm(); 
  });
  
  // Load profile data 
  window.onload = loadProfile;
  
  function loadProfile() {
    const profile = JSON.parse(localStorage.getItem('profile')) || {};
  
    // Update profile display
    document.getElementById('display-name').textContent = profile.name || 'Nama Anda';
    document.getElementById('display-role').textContent = profile.role || 'Front End Designer';
    document.getElementById('display-availability').textContent = profile.availability || 'Full Time';
    document.getElementById('display-age').textContent = profile.age || '19';
    document.getElementById('display-location').textContent = profile.location || 'Jakarta';
    document.getElementById('display-yoe').textContent = profile.yoe || '2';
    document.getElementById('display-email').textContent = profile.email || 'email@gmail.com';
  }
  