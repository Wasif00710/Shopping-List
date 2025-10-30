const addBtn = document.getElementById ('addBtn');
const itemInput = document.getElementById ('itemInput');
const list = document.getElementById ('list');

function updateNumbers () {
  const items = list.querySelectorAll ('li');
  items.forEach ((li, index) => {
    const text = li.querySelector ('span');
    text.textContent = `${index + 1}. ${text.dataset.itemText}`;
  });
}

addBtn.addEventListener ('click', function () {
  const itemText = itemInput.value.trim ();
  if (itemText === '') {
    alert ('Please enter an item.');
    return;
  }

  const li = document.createElement ('li');
  li.innerHTML = `
        <span data-item-text="${itemText}"></span>
        <button class="removeBtn">Remove</button>
    `;
  list.appendChild (li);

  li.querySelector ('.removeBtn').addEventListener ('click', function () {
    li.remove= ();
    updateNumbers ();
  });

  updateNumbers ();
  itemInput.value = '';
  itemInput.focus ();
});

itemInput.addEventListener ('keypress', function (e) {
  if (e.key === 'Enter') {
    addBtn.click ();
  }
});
