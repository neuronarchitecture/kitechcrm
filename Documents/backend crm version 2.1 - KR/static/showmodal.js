const addBtn = document.getElementById("add-list");

const modalWrapper = document.querySelector('.modal-wrapper');
// modal add
const addModal = document.querySelector('.modal');
const addModalForm = document.querySelector('.add-modal .form');

addBtn.addEventListener('click', () => {
  addModal.classList.remove('modal');
  addModal.classList.add('modal-show');

});

// User click anyware outside the modal
window.addEventListener('click', e => {
  if(e.target === addModal) {
    addModal.classList.remove('modal-show');
  }
 
});
