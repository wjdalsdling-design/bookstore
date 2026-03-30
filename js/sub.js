
function toggle(btn) {
  const text = btn.previousElementSibling;

  text.classList.toggle("open");

  if (text.classList.contains("open")) {
    btn.innerText = "접기 ▲";
  } else {
    btn.innerText = "펼치기 ▼";
  }
}

const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.dataset.tab;

    // 1️⃣ 탭 활성화 변경
    // document.querySelectorAll('.tab-content > div').forEach(div => div.classList.remove('active'));
    // const tabContent = document.getElementById(targetTab);
    // tabContent.classList.add('active');

    // 2️⃣ tmpBox로 스크롤 이동
    const tmpBox = document.getElementById('tmpBox');
    // document.querySelectorAll('.tab-content > div').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});