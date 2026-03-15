let transation = [
  {
    id: 1,
    date: '1-10-26',
    amount: -110,
    status: 'Success',
    type: 'expense',
  },
  {
    id: 1,
    date: '1-13-26',
    amount: -110,
    status: 'Success',
    type: 'expense',
  },
  {
    id: 1,
    date: '1-16-26',
    amount: -110,
    status: 'Success',
    type: 'expense',
  },
];

let monthlyIncome = 549;
let monthlyExpenses = 890;

const today = new Date().toISOString().split('T')[0];
document.getElementById('incomeDate').value = today;
document.getElementById('expenseDate').value = today;

function openIncomeModal() {
  document.getElementById('incomeModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function openExpenseModal() {
  document.getElementById('expenseModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
  document.body.overflow = 'auto';

  if (modalId === 'incomeModal') {
    document.getElementById('incomForm').requestFullscreen();
  }
}
