const header = `
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
            <p class= "on" id ="spreadBtn">카테고리</p>
        </div>
    
        </div>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="input-group md-form form-sm form-2 pl-0 ml-3" style="max-width :800px;">
                <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search">
                <button class ="glass ml-1" type ="submit" id="#"><img src="./img/magnifying-glass-solid.svg" width="20px" height="20px"></button>
            </div>
        <div class="navbar-nav">
            <a class="nav-item nav-link ml-5" href="">다운로드</a>
            <a class="nav-item nav-link ml-3" href="login.html">로그인</a>
            <a class="nav-item nav-link ml-3" href="myPage.html">마이페이지</a>
            <a class="nav-item nav-link ml-3" href="#">채팅</a>
          </div>
        </div>
    </nav>
    <div id="hiddenList"  style="display:none; margin-left:130px;margin-top:8em;">
        <ul class="ks-cboxtags">
            <p>대학</p>
            <li><input type="checkbox" id="checkboxOne" value="#"><label for="checkboxOne">서울대</label></li>
            <li><input type="checkbox" id="checkboxTwo" value="#" checked><label for="checkboxTwo">연세대</label></li>
            <li><input type="checkbox" id="checkboxThree" value="#" checked><label for="checkboxThree">고려대</label></li>
            <li><input type="checkbox" id="checkboxFour" value="#"><label for="checkboxFour">충북대</label></li>
            <li><input type="checkbox" id="checkboxFive" value="#"><label for="checkboxFive">충남대</label></li>
            <li><input type="checkbox" id="checkboxSix" value="#"><label for="checkboxSix">부산대</label></li>
            <li><input type="checkbox" id="checkboxSeven" value="#"><label for="checkboxSeven">경북대</label></li>
            <li><input type="checkbox" id="checkboxEight" value="#"><label for="checkboxEight">강원대</label></li>
            <li><input type="checkbox" id="checkboxNine" value="#"><label for="checkboxNine">전남대</label></li>
            <li><input type="checkbox" id="checkboxTen" value="#"><label for="checkboxTen">강원대</label></li>
        </ul>
        <ul class="ks-cboxtags">
            <p>단과대</p>
            <li><input type="checkbox" id="checkboxEleven" value="#"><label for="checkboxEleven">경영대</label></li>
            <li><input type="checkbox" id="checkboxTwelve" value="#" checked><label for="checkboxTwelve">자연대</label></li>
            <li><input type="checkbox" id="checkboxThirteen" value="#" checked><label for="checkboxThirteen">전정대</label></li>
            <li><input type="checkbox" id="checkboxFourteen" value="#"><label for="checkboxFourteen">인문대</label></li>
            <li><input type="checkbox" id="checkboxFifteen" value="#"><label for="checkboxFifteen">사회과학대</label></li>
            <li><input type="checkbox" id="checkboxSixteen" value="#"><label for="checkboxSixteen">의대</label></li>
            <li><input type="checkbox" id="checkboxSeventeen" value="#"><label for="checkboxSeventeen">수의대</label></li>
            <li><input type="checkbox" id="checkboxEightteen" value="#"><label for="checkboxEightteen">약대</label></li>
        </ul>
    </div>    
</body>
</html>
`