const textEl = document.getElementById('text');
const btn = document.getElementById('delBtn');

function deleteLastChar() {
  let s = textEl.textContent;
  if (s.length === 0) {
    btn.disabled = true;
    return;
  }
  textEl.textContent = s.slice(0, -1);
  if (textEl.textContent.length === 0) btn.disabled = true;
}

btn.addEventListener('click', deleteLastChar);

if (!textEl.textContent || textEl.textContent.length === 0) btn.disabled = true;

