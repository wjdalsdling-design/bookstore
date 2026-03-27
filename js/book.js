async function bookData() {
    const params = new URLSearchParams({
        target: "title",
        query: "인생",
        size: 10
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;


    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 14b6e8ad0e91fdfc74ea9b367563b36b"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data);

        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll("#new .swiper-slide");
        // console.log(boxElements)


        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // 요소 생성 및 추가
            box.innerHTML = `<img src="${data.documents[i].thumbnail}">
                    <h4 class="title">${doc.title}</h4>
                    <p class="author">${doc.authors}</p>
                    <p class="price-line">
                    <span class="discount">10%</span>
                    <span class="price">${doc.price ? Number(doc.price).toLocaleString() : 0}원</span>
                    </p>
                `;
        });

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();

async function bookData2() {
    const params = new URLSearchParams({
        target: "title",
        query: "서핑",
        size: 10
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;


    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 14b6e8ad0e91fdfc74ea9b367563b36b"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll("#slider .swiper-slide");
        // console.log(boxElements)


        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // 요소 생성 및 추가
            box.innerHTML = `<img src="${data.documents[i].thumbnail}">
                    <div class="book_content">
                        <h4>${data.documents[i].title}</h4>
                        <p class="author">${doc.authors}</p>
                        <p class="price-line">
                        <span class="discount">10%</span>
                        <span class="price">${doc.price ? Number(doc.price).toLocaleString() : 0}원</span>
                        </p>
                        <p class="desc">${doc.contents}</p>
                        </div>
                        `
        });



        var swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl: "#slider .swiper-button-next",
                prevEl: "#slider .swiper-button-prev",
            },
            pagination: {
                el: "#slider .swiper-pagination",
                clickable: true,
                renderBullet: function (i, className) {
                    return `<img class="${className}" src="${data.documents[i].thumbnail}">`;
                },
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData2();


document.addEventListener("DOMContentLoaded", () => {

    async function bookData3(query, selector) {
        const params = new URLSearchParams({
            target: "title",
            query: query,
            size: 10
        });

        const url = `https://dapi.kakao.com/v3/search/book?${params}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: "KakaoAK 14b6e8ad0e91fdfc74ea9b367563b36b"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);

            const boxElements = document.querySelectorAll(selector);

            boxElements.forEach((box, i) => {
                const doc = data.documents[i];
                if (!doc) return;

                box.innerHTML = `
                    <img src="${doc.thumbnail || 'https://via.placeholder.com/150'}">
                    <span class="rank">${i + 1}</span>
                    <h4 class="title">${doc.title}</h4>
                    <p class="author">${doc.authors}</p>
                    <p class="price-line">
                    <span class="discount">10%</span>
                    <span class="price">${doc.price ? Number(doc.price).toLocaleString() : 0}원</span>
                    </p>
                `;
            });

        } catch (error) {
            console.log('에러발생', error);
        }
    }

    const tabs = document.querySelectorAll("#booktap li");
    const tap1 = document.querySelector(".tap1");
    const tap2 = document.querySelector(".tap2");

    tap1.classList.add("active");
    tabs[0].classList.add("active");

    bookData3("스포츠", ".tap1 .box");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {

            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            if (index === 0) {
                tap1.classList.add("active");
                tap2.classList.remove("active");

                bookData3("스포츠", ".tap1 .box");

            } else {
                tap2.classList.add("active");
                tap1.classList.remove("active");

                bookData3("건강", ".tap2 .box");
            }
        });
    });


});




async function bookData4() {
    const REST_API_KEY = '14b6e8ad0e91fdfc74ea9b367563b36b';
    const params = new URLSearchParams({
        target: "title",
        query: "인생의 의미"
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 14b6e8ad0e91fdfc74ea9b367563b36b"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();

        // 요소 선택
        const subBox = document.querySelector(".sub_box");
        const titleEl = document.querySelector(".title");
        const authorEl = document.querySelector(".author");
        const publisherEl = document.querySelector(".publisher");
        const priceEl = document.querySelector(".price");

        // 데이터 추출
        const book = data.documents[0];
        const { title, thumbnail, authors, price, publisher } = book;

        // ✅ 이미지
        subBox.innerHTML = `<img src="${thumbnail}" alt="${title}">`;

        // ✅ 텍스트 각각 넣기
        authorEl.textContent = authors[0];
        publisherEl.textContent = publisher;
        priceEl.textContent = price.toLocaleString() + "원";
        titleEl.textContent = title;

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData4();

//메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임
document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("./txt/sub.txt");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.getElementById("tmpBox").innerHTML = data;

    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});









const wrapper = document.querySelector("#new .swiper-wrapper");
const slides = document.querySelectorAll("#new .swiper-slide");
let currentIndex = 0;

// 좌우 버튼 이벤트
document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    updateSlider();
});
document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    updateSlider();
});

function updateSlider() {
    const width = slides[0].clientWidth;
    wrapper.style.transform = `translateX(${-width * currentIndex}px)`;
}

// 기존 bookData 함수 응용
async function bookData5() {
    const params = new URLSearchParams({
        target: "title",
        query: "인생",
        size: 10,
    });
    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: "KakaoAK 14b6e8ad0e91fdfc74ea9b367563b36b"
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();

        slides.forEach((box, i) => {
            const doc = data.documents[i];
            if (!doc) return;

            box.innerHTML = `
                <div class="book-card">
                    <div class="book-image">
                        <img src="${doc.thumbnail}" alt="${doc.title}">
                    </div>
                    <div class="book-info">
                        <h4 class="title">${doc.title}</h4>
                        <p class="author">${doc.authors.join(", ")}</p>
                        <p class="price-line">
                            <span class="discount">10%</span>
                            <span class="price">${doc.price ? Number(doc.price).toLocaleString() : 0}원</span>
                        </p>
                    </div>
                </div>
            `;
        });

        updateSlider();
    } catch (error) {
        console.error("에러발생", error);
    }
}

bookData5();

