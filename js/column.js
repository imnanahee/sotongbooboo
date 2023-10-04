const script = document.createElement('script');
script.src = 'js/data.js';

// 데이터를 웹 스토리지에 저장하는 함수
const saveDataToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

window.onload = () => {
    const datas = window.datas;

    // 컬럼 가져오기
    const dataBycolumn = () => {
        const notice = document.querySelector('.notice-list');
        const pick = document.querySelector('.pick-wrap');
        const recent = document.querySelector('.recent-wrap');

        // index - 컬럼
        if (notice) {    
            const sliceDatas = datas.slice(0, 5);
            saveDataToStorage('noticeData', sliceDatas); // 컬럼 데이터 저장
            sliceDatas.forEach(data => {
                const dataElemnt = mainCreateColumnList(data);
                notice.append(dataElemnt);
            });
        }

        // column - 컬럼 pick
        if (pick) {
            saveDataToStorage('pickData', datas); // 컬럼 데이터 저장
            datas.forEach(data => {
                const dataElemnt = subRecentColumnList(data);
                pick.append(dataElemnt);
            });
        }

        // column - 최신 컬럼
        if (recent) {    
            const sliceDatas = datas.slice(0, 6);
            saveDataToStorage('recentData', sliceDatas); // 컬럼 데이터 저장
            sliceDatas.forEach(data => {
                const dataElemnt = subCreateColumnList(data);
                recent.append(dataElemnt);
            });
        }

    }

    // index - 컬럼
    const mainCreateColumnList = (data) => {
        const dataElement = document.createElement('li');
        dataElement.innerHTML = `
            <a href="column_view.html?data-id=${data.id}">
                <p>${data.title}</p>
                <span>${data.date}</span>
            </a>
        `;

        return dataElement;
    }

    // column - 컬럼 pick
    const subCreateColumnList = (data) => {
        const dataElement = document.createElement('div');
        dataElement.classList.add('cell');
        dataElement.innerHTML = `
            <a href="column_view.html?data-id=${data.id}">
                <div>
                    <span class=tag>${data.tag}</span>
                    <h4 class=title>${data.title}</h4>
                    <p class=content>${data.content}</p>
                    <span class=date>${data.date}</span>
                </div>
                <img src=${data.image}>
            </a>
        `;

        return dataElement;
    }

    // column - 최신 컬럼
    const subRecentColumnList = (data) => {
        const dataElement = document.createElement('div');
        dataElement.classList.add('cell');
        dataElement.innerHTML = `
            <a href="column_view.html?data-id=${data.id}">
                <img src=${data.image}>
                <div>
                    <h4 class=title>${data.title}</h4>
                    <p class=writer>by ${data.writer}</p>
                </div>
            </a>
        `;

        return dataElement;
    }

    dataBycolumn();
}

document.head.appendChild(script);