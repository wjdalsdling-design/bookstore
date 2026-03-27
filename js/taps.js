const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content > div');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // 모든 버튼과 내용 초기화
    buttons.forEach(b => b.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // 클릭한 버튼 활성화
    button.classList.add('active');
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});


