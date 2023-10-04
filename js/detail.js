const script = document.createElement('script');
script.src = 'js/data.js';

script.onload = () => {
    const columnView = document.querySelector('.column-view');

    // 컬럼 디테일 페이지
    const fetchDataDetails=(dataId) => {
        const dataItem = datas.find((item) => item.id === dataId);
        return dataItem;
    }

    // URL에서 data id 추출
    const urlParams = new URLSearchParams(window.location.search);
    const dataId = parseInt(urlParams.get('data-id'));

    const data = fetchDataDetails(dataId);

    const columnDataDetail = (data) => {
        return `
            <div class="column-head-bg" style="background-image:url(${data.image})">
                <div class=text-wrap>
                    <span class=tag>${data.tag}</span><em>·</em>
                    <span class=date>${data.date}</span><em>·</em>
                    <span class=writer>${data.writer}</span>
                    <h2>${data.title}</h2>
                </div>
            </div>
            <div class=view-conts>
                <div class=inner>
                    <p class=img><img src=${data.image}></p>
                    <div class=conts>
                        <p>${data.content}</p>
                    </div>
                </div>
            </div>
        `
    }

    if (data) {
        const dataElement = document.createElement('div');
        dataElement.classList.add('view-wrap');
        dataElement.innerHTML = columnDataDetail(data);

        columnView.appendChild(dataElement);
    }

}

document.head.appendChild(script);