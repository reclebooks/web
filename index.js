
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

const search = async ()=>{
    const books = await fetch(`${serverUrl}/used${location.search}`);
    return books;
}

const loadUsedBooks = async() => {
    const books = await search();
    books.forEach(book=>document.querySelector('.bookGrid').appendChild(generateBookElement(book)))}


loadUsedBooks();