import { serverUrl } from "./constants.js";

export const getMajorColleges = async (college) => {
    const colleges = await fetch(`${serverUrl}/majorcollege/find`, {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({ colleges: window.colleges ? [] : [] }),
    })
        .then(console.log)
        .then((res) => res.json());
    document.querySelector(".majorcollegelist").innerHTML = "";
    colleges.forEach((college) => {
        let li = document.createElement("li");
        li.innerHTML = generateCollegeElement(college);
        document.querySelector(".majorcollegelist").appendChild(li);
    });

    window.majorcolleges = colleges;
};

const initializeMajorCollege = (id) => () => {
    console.log(1);
    getMajorColleges(window.colleges.find((s) => s.id === id));
};
export const generateCollegeElement = (college) => {
    return `<input type="checkbox" id="college${college.id}" value="${college.id}"
    ><label class="colleges" for="college${college.id}">${college.name}</label>`;
};
export const getColleges = async () => {
    const { data: colleges } = await fetch(`${serverUrl}/college/find`, {
        method: "GET",
    }).then((res) => res.json());
    console.log(colleges);
    document.querySelector(".collegelist").innerHTML = "";
    colleges.forEach((college) => {
        let li = document.createElement("li");
        li.innerHTML = generateCollegeElement(college);
        li.children[1].addEventListener(
            "click",
            initializeMajorCollege(college.id)
        );
        document.querySelector(".collegelist").appendChild(li);
    });

    window.colleges = colleges;
};

export const generateMajorCollegeElement = (college) => {
    return `<input type="checkbox" id="${college.id}" onclick="
    ()=> {
        if(window.smajorcollege) 
        return window.smajorcollege.push(window.majorcolleges.find(s=>s.id === ${college.id})) : 
        window.smajorcollege = [window.majorcolleges.find(s=>s.id === ${college.id})]
    }" value="#"><label for="checkboxOne">${college.name}</label>`;
};

export const header = `
<html>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
<script src="https://kit.fontawesome.com/5363d2ff29.js" crossorigin="anonymous"></script>
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
<link rel="stylesheet" href="./style/header.css">


<body>
    <nav id="top-bar" class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand ml-2 mt-1" href="index.html"><img src="./img/recle.png" width="90px" height="75px"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div>
    
        <div class="filter mt-3">
            <p class= "on" id ="spreadBtn" onclick="
            ">카테고리</p>
        </div>
    
        </div>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="input-group md-form form-sm form-2 pl-0 ml-3" style="max-width :800px;">
                <input class="form-control my-0 py-1 red-border searchbar" type="text" placeholder="Search" aria-label="Search">
                <button class ="glass ml-1" type ="submit" id="#"><img src="./img/magnifying-glass-solid.svg" width="20px" height="20px"></button>
            </div>
        <div class="navbar-nav">
            <a class="nav-item nav-link ml-5" href="">다운로드</a>
            <a class="nav-item nav-link ml-3" href="./login.html">${
                localStorage.getItem("reclebooksToken") ? "로그아웃" : "로그인"
            }</a>
            <a class="nav-item nav-link ml-3" href="myPage.html">마이페이지</a>
            <a class="nav-item nav-link ml-3" href="#">채팅</a>
          </div>
        </div>
    </nav>
    <div id="hiddenList"  style="display:none; margin-left:130px;margin-top:8em;">
    <p>대학</p>    
    <ul class="ks-cboxtags collegelist">
           

        </ul>
        <p>단과대</p>
        <ul class="ks-cboxtags majorcollegelist">
            

        </ul>
    </div>    
</body>
</html>
`;


$(document).ready(function () {
    const content = document.querySelector('link[rel="import"]').import;
document.querySelector("#header").innerHTML = header;
    $("#spreadBtn").click(function () {
        if ($("#hiddenList").is(":visible")) {
            $("#spreadBtn").toggleClass("on off");
            $("#hiddenList").slideUp();
        } else {
            $("#spreadBtn").toggleClass("off on");
            $("#hiddenList").slideDown();
            getColleges();
        }
    });
});

const generateBookElement = (usedBookDto) => {
    const { id, usedBookCost, files } = usedBookDto;
    const { cost, name, college, majorCollege, major, lecture} = usedBookDto.book;
    return `<div class="bookElement">
    <a href="${serverUrl}/used/${id}">
    <section>
        <article
            class="book-kind card"
            style="
                background-image: url('${files ? files[0] : ""}');
            "
        >
            <section class="book-kind blur">
                <section class="description-box">
                    <article class="lecture">${lecture}</article>
                    <article class="book-name">
                        ${name}
                    </article>
                    <article class="origin-cost">${cost}원</article>
                    <article class="used-cost">${usedBookCost}원</article>
                </section>
            </section>
    
            <section class="category">
                <ul class="college-category">
                    <li class="college">${college}</li>
                    <li class="major-college">${majorCollege}</li>
                    <li class="major-category">${major}</li>
                </ul>
            </section>
        </article>
    </section>
    </a>
    </div>`;
};

const search = async () => {
    const books = await fetch(`${serverUrl}/used/find`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            majorColleges: window.smajorColleges ? window.smajorColleges : [],
            name: document.querySelector(".searchbar").value,
        }),
    })
        .then((res) => res.json())
        .catch((e) => console.log(e));
    return books;
};

export const loadUsedBooks = async () => {
    console.log(3)
    const { data: books } = await search();
    if (books)
        books.forEach((book) =>
            document
                .querySelector(".bookGrid")
                .appendChild(generateBookElement(book))
        );
};
