const generateViewElement = (usedBookDto)=>{
    const {id, usedBookCost, image, seller, underline, penUnderline, note, penNote, bookCoverStatus, pageStatus} = usedBookDto;
    const {cost, name, publisher, author, publishedDate} = usedBookDto.book;

    return `
    <div><h2 class="bookName">${name}</h2></div>
    <div class="imgView">
    <!--이미지 갯수만큼 생성해야함-->
    <a onclick="show(1)">
    <img id="1" class="imglist" src="img/img1.png"></a>
    <a onclick="show(2)">
    <img id="2" class="imglist" src="img/img2.png"></a>
    <a onclick="show(3)">
    <img id="3" class="imglist" src="img/img3.png"></a>
    <a onclick="show(4)">
    <img id="4" class="imglist" src="img/img4.png"></a>
    <a onclick="show(5)">
    <img id="5" class="imglist" src="img/img5.png"></a>
    </div>
    <hr>
    <div class="info">
        <div class="seller">
            <img src="img/thumbnail.png">
            <div class="sellerContents">
                <p>판매자 : ${seller}</p>
                <p>거래점수 : </p>
                <p>판매가 : ${usedBookCost}</p>
            </div>
        </div>
        <div>
            <p>저자 : ${author}</p>
            <p>출판사 : ${publisher}</p>
            <p>출판일 : ${publishedDate}</p>
        </div>
        <div class="boardContents">
            <h1>책상태</h1>
            <table class="stateTable">
                <tr>
                    <td class="col1">밑줄 흔적</td>
                    ${underline ? `<td>연필 흔적 있음</td>` : `<td>연필 흔적 없음</td>`}
                    ${penUnderline ? `<td>볼펜 흔적 있음</td>` : `<td>볼펜 흔적 없음</td>`}
                </tr>			
                <tr>
                    <td class="col1">필기 흔적</td>
                    ${note ? `<td>연필 흔적 있음</td>` : `<td>연필 흔적 없음</td>`}
                    ${penNote ? `<td>볼펜 흔적 있음</td>` : `<td>볼펜 흔적 없음</td>`}
    </tr>		
                <tr>
                    <td class="col1">겉표지</td>
                    ${pageStatus ? `<td>깨끗함</td>` : `<td>깨끗하지 않음</td>`}
                    <td> </td>
                </tr>
                <tr>
                    <td class="col1">페이지훼손</td>
                    ${bookCoverStatus ? `<td>있음</td>` : `<td>없음</td>`}
                    <td> </td>
                </tr>
            </table>
            <div class="btnset">
                <input type="button" value="관심등록">
                <input type="button" value="채팅하기">
            </div>
        </div>
    </div>
    <hr>
    <p>상세내용 적는 란</p>
    `
}

const loadUsedBook = async() => {
    // 책 정보 하나 가져와서 wrapContents에 삽입
    const book = await fetch(`책 정보 url`);
    book=>document.querySelector('.wrapContents').appendChild(generateBookElement(book))
}

loadUsedBook();
