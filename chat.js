
function startChatting(id){
    // 대화상대 변경
    var str = '#person' + id;
    var name = $(str).text();
    $('#participants').text(name);

    searchChats();
}

const generateChatList = (ChatRoom)=>{
    const {id,title} = ChatRoom;
    return `
    <div class="room${id}" onclick="startChatting(${id});>
    <div class="discussion message-active">
      <div class="photo" style="background-image: url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80);">
        <div class="online"></div>
      </div>
      <div class="desc-contact">
        <p class="name" id="person${id}">${title}</p> 
        <p class="message">최근메시지</p>
      </div>
      <div class="timer">12 sec</div>
    </div>
  </div>
    `
}

const generateChatRoom = (Chat)=>{
    const {content} = Chat.content;
    const {id} = Chat.writer;
    var text;

    if(id == 유저아이디){
        text = ` <div class="response">
        <p class="text"> ${content}</p>
        </div>`;
    }
    else{
        text = `<p class="text"> ${content}</p>`;
    }

    return `
    <div class="message">
        ${text}
    </div>
    `
}

// 채팅방 목록 로드
const searchChatList = async ()=>{
    const chatList = await fetch(`유저가 속한 채팅방 목록 URL`);
    return chatList;
}

const loadChatList = async() => {
    const chatList = await searchChatList();
    chatList.forEach(chat=>document.querySelector('.roomList').appendChild(generateChatList(ChatRoom)))}

// 채팅 로드 => 채팅방 클릭시
const searchChats = async ()=>{
    const chats = await fetch(`해당 채팅방의 채팅 URL`);
    return chats;
}

const loadChats = async() => {
    const chats = await searchChats();
    chats.forEach(chat=>document.querySelector('.messages-chat').appendChild(generateChatRoom(Chat)))}

loadChatList(); //시작시 실행됨