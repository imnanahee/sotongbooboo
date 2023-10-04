const headerTemplate = `
    <div class="inner">
        <h1 class="logo"><a href="index.html"><img src="images/logo.png"></a></h1>
        <nav>
            <i class="fa-solid fa-xmark fa-xl close-btn"></i>
            <ul class="depth-1">
                <li>
                    <a href="introduce.html" class="main-menu">소통부부한의원</a>
                    <ul class="depth-2">
                        <li><a href="introduce.html">소통부부 안심치료</a></li>
                        <li><a href="column.html">컬럼</a></li>
                    </ul>
                </li>
                <li>
                    <a href="rhinitis.html" class="main-menu">면역치료</a>
                    <ul class="depth-2">
                        <li>
                            <a href="rhinitis.html">코 - 비염</a>
                        </li>
                        <li>
                            <a href="asthma.html">폐 - 천식</a>
                        </li>
                        <li>
                            <a href="atopy.html">피부 - 아토피</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="infertility.html" class="main-menu">여성클리닉</a>
                    <ul class="depth-2">
                        <li><a href="infertility.html">난임</a></li>
                        <li><a href="miscarriage.html">유산</a></li>
                    </ul>
                </li>
                <li>
                    <a href="chiropractic.html" class="main-menu">통증추나의학</a>
                    <ul class="depth-2">
                        <li><a href="chiropractic.html">추나</a></li>
                        <li><a href="chin.html">턱관절</a></li>
                        <li><a href="sports.html">스포츠손상클리닉</a></li>
                    </ul>
                </li>
                <li>
                    <a href="javascript:void(0)" class="main-menu">소아클리닉</a>
                </li>
                <li>
                    <a href="javascript:void(0)" class="main-menu">소통 신경치료</a>
                </li>
            </ul>
        </nav>
        <button type="button" class="gnb-btn"><i class="fa-solid fa-bars fa-xl"></i></button>
    </div>
`;

const asideTemplate = `
    <aside id="quick">
        <div class="lnb_btn">
            <div class="menu">
                <a href="javascript:void" class="kakao"><span>카톡상담</span></a>
                <ul class="brunch_btn kakao">
                    <li><a href="javascript:void(0)">청라점</a></li>
                    <li><a href="javascript:void(0)">성동점</a></li>
                    <li><a href="javascript:void(0)">경기<br>광주점</a></li>
                </ul>
            </div>
            <div class="menu">
                <a href="javascript:void" class="naver"><span>네이버상담</span></a>
                <ul class="brunch_btn naver">
                    <li><a href="javascript:void(0)">청라점</a></li>
                    <li><a href="javascript:void(0)">성동점</a></li>
                    <li><a href="javascript:void(0)">경기<br>광주점</a></li>
                </ul>
            </div>
            <div class="menu">
                <a href="javascript:void" class="directions"><span>오시는 길</span></a>
            </div>
            <div class="menu">
                <a href="javascript:void" class="number"><span>전화상담</span></a>
                <ul class="brunch_btn call">
                    <li><a href="javascript:void(0)">청라점</a></li>
                    <li><a href="javascript:void(0)">성동점</a></li>
                    <li><a href="javascript:void(0)">경기<br>광주점</a></li>
                </ul>
            </div>
            <div class="menu">
                <a href="javascript:void" class="room"><span>입원실안내</span></a>
            </div>
        </div>
        <div class="clinic_hours">
            <div class="swiper_bullet"></div>
            <div class="swiper-wrapper">
                <div class="branch swiper-slide">
                    <h3 class="area">청라점</h3>
                    <ul>
                        <li><p>월-금</p>09:30 ~ 21:00</li>
                        <li><p>토,일,공휴일</p>09:30 ~ 14:00</li>
                        <li><p>점심시간</p>13:00 ~ 14:00</li>
                        <li><p>토,일,공휴일</p>점심시간 없음</li>
                    </ul>
                </div>
                <div class="branch swiper-slide">
                    <h3 class="area">성동점</h3>
                    <ul>
                        <li><p>월-토, 공휴일</p>09:00 ~ 19:00</li>
                        <li><p>월-토, 공휴일</p>09:30 ~ 15:00</li>
                        <li><p>점심시간</p>13:00 ~ 14:00</li>
                        <li><p>일요일</p>점심시간 없음</li>
                    </ul>
                </div>
                <div class="branch swiper-slide">
                    <h3 class="area">경기광주점</h3>
                    <ul>
                        <li><p>월-금</p>09:00 ~ 20:00</li>
                        <li><p>토,일,공휴일</p>09:30 ~ 14:00</li>
                        <li><p>점심시간</p>13:00 ~ 14:00</li>
                        <li><p>토,일,공휴일</p>점심시간 없음</li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
`;

const rightMenuTemplate = `
    <div class="aside-menu">
        <ul>
            <li>
                <a href="javascript:void(0)" class="btn">
                    <img src="images/quick_01_off.jpg" alt="카톡상담">
                </a>
                <div class="brunch-btn">
                    <a href="javascript:void(0)">청라점</a>
                    <a href="javascript:void(0)">성동점</a>
                    <a href="javascript:void(0)">경기광주점</a>
                </div>
            </li>
            <li>
                <a href="javascript:void(0)" class="btn">
                    <img src="images/quick_02_off.jpg" alt="네이버상담">
                </a>
                <div class="brunch-btn">
                    <a href="javascript:void(0)">청라점</a>
                    <a href="javascript:void(0)">성동점</a>
                    <a href="javascript:void(0)">경기광주점</a>
                </div>
            </li>
            <li>
                <a href="javascript:void(0)" class="btn">
                    <img src="images/quick_03_off.jpg" alt="전화상담">
                </a>
                <div class="brunch-btn">
                    <a href="javascript:void(0)">청라점</a>
                    <a href="javascript:void(0)">성동점</a>
                    <a href="javascript:void(0)">경기광주점</a>
                </div>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <img src="images/quick_04_off.jpg" alt="오시는길">
                </a>
            </li>
            <li>
                <a href="javascript:void(0)">
                    <img src="images/quick_05_off.jpg" alt="입원실안내">
                </a>
            </li>
        </ul>
        <a class="scroll-top">TOP</a>
    </div>
`;

const footerTemplate = `
    <div class="inner">
        <div class="footer_l"><a href="/index.html"><img src="images/logo.png" alt="내 몸과 소통해주는 소통부부한의원"></a></div>
        <div class="footer_r">
            <ul>
                <li><a href="javascript:void(0)">병원소개</a></li>
                <li><a href="javascript:void(0)">개인정보취급방침</a></li>
            </ul>
            <address>
                <p>인천광역시 서구 청라라임로 65(연희동 799-9) 라임타워 4층</p>
                <p>대표자 : 곽승은</p>
                <p>사업자등록번호 : 137-91-93769</p>
                <p>전화 : 032-568-3375</p>
            </address>
            <p class="copyright">Copyrignt © 소통부부한의원, All rights reserved.</p>
        </div>
    </div>
`;


// tablet-labtop 사이즈 이하일 시 nav에 클래스 추가
const handleResize = () => {
    const windowWidth = window.innerWidth;
    const nav = document.querySelector('nav');

    if (windowWidth <= 988) {
        nav.classList.add('menu-wrap');
    } else {
        nav.classList.remove('menu-wrap');
    }
}


// nav 닫기 이벤트
const menuWrapClose = () => {
    setTimeout(() => {
        document.querySelector('.menu-wrap').classList.remove('show');
        document.body.classList.remove('menu-open');
        document.querySelector('.nav-bg').style.display = 'none';
    }, 100);
}

// depth2 메뉴에 마우스 진입 및 이탈 이벤트 처리
const handleMouseEnter = (e) => {
    const depth2 = e.currentTarget.querySelector('.depth-2');
    if (depth2) {
        depth2.classList.remove('on');
        depth2.classList.add('on');
    }
}

const handleMouseLeave = (e) => {
    const depth2 = e.currentTarget.querySelector('.depth-2');
    if (depth2) depth2.classList.remove('on');
}

// gnb 메뉴에 이벤트 추가
const windowGnbAddEvent = () => {
    const depth1 = document.querySelectorAll('nav .depth-1 li');

    depth1.forEach((li) => {
        li.removeEventListener('mouseenter', handleMouseEnter);
        li.removeEventListener('mouseleave', handleMouseLeave);
    });

    depth1.forEach((li) => {
        li.addEventListener('mouseenter', handleMouseEnter);
        li.addEventListener('mouseleave', handleMouseLeave);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#header').innerHTML = headerTemplate;
    document.querySelector('#aside').innerHTML = rightMenuTemplate;
    document.querySelector('#footer').innerHTML = footerTemplate;

    const asideMenuBtn = document.querySelectorAll('.aside-menu .btn');
    
    // tablet-laptop 사이즈 이하일 시 depth2 비노출
    windowGnbAddEvent();

    // window 사이즈 변경 시 처리
    window.addEventListener('resize', handleResize);
    handleResize();

    // 메뉴 버튼 클릭 시 nav 열기
    const gnbBtn = document.querySelector('.gnb-btn');
    const menuWrap = document.querySelector('.menu-wrap');
    const navBg = document.querySelector('.nav-bg');
    gnbBtn.addEventListener('click', () => {
        menuWrap.classList.add('show');
        document.body.classList.add('menu-open');
        navBg.style.display = 'block';
    });
    
    // 닫기 버튼 클릭 시 nav 닫기
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', menuWrapClose);

    // nav 오픈 상태에서 body 클릭 시 닫기
    navBg.addEventListener('click', menuWrapClose);

    // aside 메뉴 클릭 시 내용 토글
    asideMenuBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            asideMenuBtn.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    const siblingDiv = otherBtn.nextElementSibling
                    siblingDiv.classList.remove('on');
                }
            })

            btn.nextElementSibling.classList.toggle('on');
        })
    })

    // 상단으로 스크롤 이동
    document.querySelector('.scroll-top').addEventListener('click', (e) => {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })

})