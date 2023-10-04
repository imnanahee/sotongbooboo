document.addEventListener('DOMContentLoaded', () => {
    const clinicTabMenu = document.querySelectorAll('.clinic-wrap .tab-menu li');
    const courseTabMenu = document.querySelectorAll('.course-map .tab-menu li');

    // 메인 - 클리닉 탭메뉴
    clinicTabMenu.forEach((item, index) => {
        item.addEventListener('click', () => {
            clinicTabMenu.forEach(li => {
                li.classList.remove('on');
            })

            // 현재 클릭한 요소에 on 추가
            item.classList.add('on');

            const selectedIndex = Array.from(clinicTabMenu).indexOf(item);

            // 모든 content div의 active 제거
            const contentDivs = document.querySelectorAll('.content > div');
            contentDivs.forEach(div => {
                div.classList.remove('active');
            })

            // 클릭한 요소에 해당하는 active 추가
            contentDivs[selectedIndex].classList.add('active');
        })
    })

    // 메인 - 지도 탭메뉴
    courseTabMenu.forEach((item, index) => {
        item.addEventListener('click', () => {
            courseTabMenu.forEach(li => {
                li.classList.remove('on');
            })

            // 현재 클릭한 요소에 on 추가
            item.classList.add('on');

            const selectedIndex = Array.from(courseTabMenu).indexOf(item);

            // 모든 map_wrap의 div 숨김
            const mapDivs = document.querySelectorAll('.map-wrap');
            mapDivs.forEach(div => {
                div.style.display = 'none';
            })

            // 클릭한 li 요소에 해당하는 map_wrap의 div 표시
            mapDivs[selectedIndex].style.display = 'block';
        })
    })


})