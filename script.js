function getCount(counterId) {
  return localStorage.getItem(counterId) ? parseInt(localStorage.getItem(counterId)) : 0;
}

function updateCounter(counterId, count) {
  document.getElementById(counterId).innerText = count;
  localStorage.setItem(counterId, count);
}

function increment(counterId) {
  let count = getCount(counterId);
  count++;
  updateCounter(counterId, count);
}

function decrement(counterId) {
  let count = getCount(counterId);
  count--;
  updateCounter(counterId, count);
}

// Initialize counters
document.getElementById('counter1').innerText = getCount('counter1');
document.getElementById('counter2').innerText = getCount('counter2');