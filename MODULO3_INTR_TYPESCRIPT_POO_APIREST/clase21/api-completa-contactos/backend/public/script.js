const API_URL = '/api/contacts'; // url base para las solicitudes

const form = document.getElementById('contact-form'); // formulario para agregar contactos
const contactTable = document.getElementById('contacts-table'); // tabla donde se muestran los contactos

// función para obtener los contactos desde el backend
async function fetchContacts() {
  const res = await fetch(API_URL); // realizo una solicitud GET al backend //fetch(API_URL): hace una solicitud a /api/contacts para obtener todos los contactos.
  const contacts = await res.json(); // convierte la respuesta en un array de contactos
  renderContacts(contacts); // muestra los contactos en la tabla HTML.
}

// renderizamos los contactos de la tabla
function renderContacts(contacts) {
  contactTable.innerHTML = contacts.map(contact => `
    <tr>
      <td>${contact.name}</td>
      <td>${contact.email}</td>
      <td>${contact.phone}</td>
      <td>
        <button class="delete-btn" onclick="deleteContact('${contact.id}')">Eliminar</button>
      </td>
    </tr>
  `).join('');
}

// manejo del evento de enviar el formulario para agregar el contacto
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // evitar que la página se recargue

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // enviar una solicitud POST al backend con el nuevo contacto
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: Date.now().toString(), name, email, phone })
  });

  form.reset(); // limpiar el formulario
  fetchContacts(); // actualizar la tabla de contactos
});

// eliminar un contacto
async function deleteContact(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' }); // realiza una solicitud DELETE al backend
  fetchContacts(); // actualizar la tabla de contactos
}

fetchContacts();