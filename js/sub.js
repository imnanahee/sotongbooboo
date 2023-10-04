document.addEventListener('DOMContentLoaded', () => {
    const qnaBoxElement = document.querySelectorAll('.qna-wrap .box');
    const hoverElement = document.querySelectorAll('.hover-cont li');
    const resultElement = document.querySelectorAll('.hover-result p');

    // 자주 묻는 질문
    qnaBoxElement.forEach(qna => {
        qna.addEventListener('click', () => {
            qnaBoxElement.forEach(box => {
                box.querySelector('h4')?.classList.remove('on');
                box.querySelector('p')?.classList.remove('on');
            })
            qna.querySelector('h4')?.classList.add('on');
            qna.querySelector('p')?.classList.add('on');
        })
    });

    // 아토피 - 연령별
    hoverElement.forEach((hover, index) => {
        hover.addEventListener('click', () => {
            hoverElement.forEach(item => {
                item.classList.remove('on');
            })
            resultElement.forEach(item => {
                item.classList.remove('on');
            })

            hover.classList.add('on');
            resultElement[index].classList.add('on');
        })
    });
})