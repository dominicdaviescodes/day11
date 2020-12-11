const insert = document.getElementById('insert');

// top level object in the browser
// pass in the event object, which gives us loads of properties including the ones we'll be displaying.
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class="key">
      ${e.key === ' ' ? 'Space' : e.key}
      <small>event.key</small>
    </div>
    <div class="key">
    ${e.keyCode}
      <small>event.keyCode</small>
    </div>
    <div class="key">
      ${e.code}
      <small>event.code</small>
    </div>
    `;
});
