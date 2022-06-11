import { serverUrl } from "./constants.js";

const initialize = async () => {
    const user = await fetch(`${serverUrl}/auth/me`, {
        method: "GET",
        headers: {
            "x-access-token": localStorage.getItem('reclebooksToken')
       } 
    }).then(data => data.json()).then(body=> body.data);
    console.log(user);
    document.querySelector('#nickname').textContent = user.nickname;
    document.querySelector('.user-description').textContent = user.description;
    document.querySelector('.mp_score_value').textContent = user.reputationScore;
}


const generateBookElement = (usedBookDto)=>{
    const {id, usedBookCost, image} = usedBookDto;
    const {cost, name, colleges, lectures} = usedBookDto.book;
    return `<div class="bookElement">
    <a href="${serverUrl}/used/${id}">
    <section>
        <article
            class="book-kind card"
            style="
                background-image: url('${image[0]}');
            "
        >
            <section class="book-kind blur">
                <section class="description-box">
                    <article class="lecture">${lectures[0]}</article>
                    <article class="book-name">
                        ${name}
                    </article>
                    <article class="origin-cost">${cost}원</article>
                    <article class="used-cost">${usedBookCost}원</article>
                </section>
            </section>
    
            <section class="category">
                <ul class="college-category">
                    <li class="college">${colleges[0]}</li>
                    <li class="major-college">${colleges[1]}</li>
                    <li class="major-category">${colleges[2]}</li>
                </ul>
            </section>
        </article>
    </section>
    </a>
    </div>`

}

const cleanElements = () => {
    //자식노드 전부 삭제
    const parent = document.querySelector(
        ".bookGrid"
    );
    while (parent.hasChildNodes()) {	// 부모노드가 자식이 있는지 여부를 알아낸다
        parent.removeChild(
            parent.firstChild
        );
    }
}

const loadBuyList = async() => {
    const books = await fetch('구매내역 url');
    cleanElements();
    books.forEach(book=>document.querySelector('.bookGrid').appendChild(generateBookElement(book)))}

const loadSellList = async() => {
    const books = await fetch('판매내역 url');
    cleanElements();
    books.forEach(book=>document.querySelector('.bookGrid').appendChild(generateBookElement(book)))}

const loadLikeList = async() => {
    const books = await fetch('관심목록 url');
    cleanElements();
    books.forEach(book => document.querySelector('.bookGrid').appendChild(generateBookElement(book)))
}

$(document).ready(function () {
    initialize();

});