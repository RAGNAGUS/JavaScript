// dom queries
const chatList = document.querySelector('.chat-list');
const newCharForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const deleteChat = document.querySelector('.delete-chat');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms')

// add a new chat
newCharForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newCharForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newCharForm.reset())
        .catch(err => console.log(err));

})

// update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    // update name via chatroom
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    // reset thr form
    newNameForm.reset();
    // show then hide the update message
    updateMssg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMssg.innerText = '', 3000);
})

deleteChat.addEventListener('click', e => {
    remove();
})

// remove all document in firestore
remove = async() => {
    const database = db.collection('chats');
    const snapshot = await database.get();
    snapshot.forEach(doc => {
        db.collection('chats').doc(doc.id).delete().then(() => {
            console.log('deleted')
        })
    });
}

// update the chat room
rooms.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat))
    }
})

// check local storage for a name
const username = localStorage.username ? localStorage.username : 'Anonymus'

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

// get chats render
chatroom.getChats(data => chatUI.render(data));