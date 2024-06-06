let mentors = [];

// Fungsi untuk merender ulang daftar mentor
function renderMentors() {
    const mentorList = document.getElementById('mentor-list');
    mentorList.innerHTML = '';

    mentors.forEach((mentor, index) => {
        const mentorItem = document.createElement('div');
        mentorItem.classList.add('mentor-item', 'bg-white', 'border', 'border-gray-200', 'rounded', 'p-4', 'mb-4', 'flex', 'justify-between', 'items-center');
        mentorItem.style.opacity = '0'; 

        const mentorInfo = document.createElement('div');
        mentorInfo.classList.add('flex', 'flex-col');

        const mentorName = document.createElement('h3');
        mentorName.textContent = `Nama: ${mentor.name}`;

        const mentorSpecialization = document.createElement('p');
        mentorSpecialization.textContent = `Spesialisasi: ${mentor.specialization}`;

        const mentorContact = document.createElement('p');
        mentorContact.textContent = `Kontak: ${mentor.contact}`;

        mentorInfo.appendChild(mentorName);
        mentorInfo.appendChild(mentorSpecialization);
        mentorInfo.appendChild(mentorContact);

        mentorItem.appendChild(mentorInfo);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.classList.add('bg-red-500', 'hover:bg-red-600', 'text-white', 'font-semibold', 'rounded', 'px-2', 'py-1');
        deleteButton.addEventListener('click', () => {
            mentorItem.classList.add('deleting');
            setTimeout(() => {
                mentors.splice(index, 1);
                renderMentors();
            }, 300); 
        });

        mentorItem.appendChild(mentorInfo);
        mentorItem.appendChild(deleteButton);
        
        mentorList.appendChild(mentorItem);

        setTimeout(() => {
            mentorItem.style.opacity = '1';
        }, index * 100); 
    });
}

// Fungsi untuk menambahkan mentor baru
function addMentor() {
    const mentorNameInput = document.getElementById('mentor-name');
    const mentorSpecializationInput = document.getElementById('mentor-specialization');
    const mentorContactInput = document.getElementById('mentor-contact');

    const newMentor = {
        name: mentorNameInput.value.trim(),
        specialization: mentorSpecializationInput.value.trim(),
        contact: mentorContactInput.value.trim()
    };

    if (newMentor.name === '' || newMentor.specialization === '' || newMentor.contact === '') {
        displayError('Mohon lengkapi semua kolom');
        return;
    }

    mentors.push(newMentor);
    mentorNameInput.value = '';
    mentorSpecializationInput.value = '';
    mentorContactInput.value = '';
    renderMentors();
}
document.getElementById('add-mentor-btn').addEventListener('click', addMentor);

// Fungsi untuk menampilkan pesan kesalahan
function displayError(message) {
    const errorElement = document.createElement('p');
    errorElement.textContent = message;
    errorElement.classList.add('text-red-500', 'text-sm', 'mt-1');
    
    const container = document.querySelector('.container');
    container.insertBefore(errorElement, document.getElementById('mentor-list'));
    setTimeout(() => {
        errorElement.remove();
    }, 3000); 
}

