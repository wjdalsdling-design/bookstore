function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 메인 함수 - API 호출 및 렌더링
async function bookData() {
    const REST_API_KEY = '7b2300fc6315bb65035d1a3c7b49b161';
    const query = getQueryParam('query') || '미움받을 용기'; // 기본값도 지정 가능

    const params = new URLSearchParams({
        target: "title",
        query: query
    });

    const url = `https://dapi.kakao.com/v3/search/book?${params}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `KakaoAK ${REST_API_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();

        if (!data.documents || data.documents.length === 0) {
            alert('검색 결과가 없습니다.');
            return;
        }

        const book = data.documents[0];
        const { title, thumbnail, authors, publisher, isbn, price, contents } = book;

        // DOM에 데이터 넣기
        document.getElementById('bookThumbnail').src = thumbnail || '';
        document.getElementById('bookThumbnail').alt = title || '책 표지 이미지';
        document.getElementById('bookTitle').textContent = title || '제목 없음';
        document.getElementById('bookAuthors').textContent = authors ? authors.join(', ') : '정보 없음';
        document.getElementById('bookPublisher').textContent = publisher || '정보 없음';
        document.getElementById('bookISBN').textContent = isbn || '정보 없음';
        document.getElementById('bookPrice').textContent = price ? `${price.toLocaleString()}원` : '가격 정보 없음';
        document.getElementById('bookContents').textContent = contents || '교재 소개가 없습니다.';

    } catch (error) {
        console.error('에러 발생:', error);
        alert('책 정보를 불러오는 중 오류가 발생했습니다.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    bookData();
});