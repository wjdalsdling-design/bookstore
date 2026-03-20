async function bookData() {
            const params = new URLSearchParams({
                target: "title",
                query: "여행",
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
                    <h3>${data.documents[i].title}</h3>
                    <h6>${data.documents[i].authors}</h6>
                    <p>${data.documents[i].price}<p>
                    <button>click</button>
                    `
                });

            } catch (error) {
                console.log('에러발생', error);
            }
        }

        bookData();

async function bookData2() {
            const params = new URLSearchParams({
                target: "title",
                query: "요리",
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
                    <h3>${data.documents[i].title}</h3>
                    <h6>${data.documents[i].authors}</h6>
                    <p>${data.documents[i].price}<p>
                    <button>click</button>
                    `
                });

            } catch (error) {
                console.log('에러발생', error);
            }
        }

        bookData2();


async function bookData3() {
            const params = new URLSearchParams({
                target: "title",
                query: "영어",
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
                const boxElements = document.querySelectorAll("#best .box");
                // console.log(boxElements)


                // documents 데이터를 각 box에 대응하여 렌더링
                boxElements.forEach((box, i) => {
                    const doc = data.documents[i];

                    if (!doc) return; // 데이터가 부족할 경우 생략

                    // 요소 생성 및 추가
                    box.innerHTML = `<img src="${data.documents[i].thumbnail}">
                    <h3>${data.documents[i].title}</h3>
                    <h6>${data.documents[i].authors}</h6>
                    <p>${data.documents[i].price}<p>
                    <button>click</button>
                    `
                });

            } catch (error) {
                console.log('에러발생', error);
            }
        }

        bookData3();