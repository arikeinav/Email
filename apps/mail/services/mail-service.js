import { StorageService } from '../../../services/storage-service.js'

export const MailService = {
    query,
    add,
    remove,
    getById,
    createMail,
    saveMailsToStorage

}
const KEY = 'mails'
let mails = []
var myMails = [{ id: makeId(), sender: 'Me', subject: 'New joke', body: 'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family', isRead: false, sentAt: getDate(), isFav: false },
    { id: makeId(), sender: 'Tzion', subject: 'Where are you?', body: 'A woman gets on a bus with her baby. The bus driver says, Thats the ugliest baby that Ive ever seen. Ugh!" The woman goes to the rear of the bus and sits down, fuming. She says to a man next to her, "The driver just insulted me!" The man says, "You go right up there and tell him off – go ahead, Ill hold your monkey for you.', isRead: false, sentAt: getDate(), isFav: false },
    { id: makeId(), sender: 'Moshe', subject: 'heyyy', body: 'Q: Why did the witches team lose the baseball gameA: Their bats flew away.', isRead: false, sentAt: getDate(), isFav: false },
    { id: makeId(), sender: 'Ilan', subject: '??????', body: 'A mom texts, "Hi! Son, what does IDK, LY, & TTYL mean?" He texts back, "I Dont Know, Love You, & Talk To You Later." The mom texts him, "Its ok, dont worry about it. Ill ask your sister, love you too.', isRead: false, sentAt: getDate(), isFav: false },
    { id: makeId(), sender: 'Liat', subject: 'whats up', body: 'One day Jimmy got home early from school and his mom asked, "Why are you home so early?" He answered, "Because I was the only one that answered a question in my class." She said, "Wow, my son is a genius. What was the question?" Jimmy replied, "The question was Who threw the trash can at the principals head?', isRead: false, sentAt: getDate(), isFav: false },
    { id: makeId(), sender: 'Salom', subject: 'ok?', body: 'give me a call', isRead: false, sentAt: getDate(), isFav: false },
    { id: makeId(), sender: 'Rahamim', subject: 'let me know', body: 'Pick up!', isRead: false, sentAt: getDate(), isFav: false },
    { id: makeId(), sender: 'Me', subject: 'another one', body: 'An elderly couple are in church. The wife leans over and whispers to her husband, "I just let out a long, silent fart. What should I do?" The husband replies, "First off, replace the batteries in your hearing aid!', isRead: false, sentAt: getDate(), isFav: false },
    { id: makeId(), sender: 'Salom', subject: 'ok?', body: 'hou are you?', isRead: false, sentAt: getDate(), isFav: false },

]

function getDate() {
    return new Date().toLocaleDateString()
}

function query() {
    mails = StorageService.loadFromStorage(KEY)
    if (!mails) mails = myMails
    return Promise.resolve(mails)

}

function createMail(mail) {
    var mail = {
        id: makeId(),
        sender: 'Me',
        subject: mail.subject || 'No subject',
        body: mail.body || '',
        isRead: false,
        sentAt: getDate(),
        isFav: false,
        isSent: true
    }
    add(mail)
}

function add(mail) {
    mails.unshift(mail)
    window.theMails = mails

    saveMailsToStorage()
}

function remove(mailId) {
    mails = mails.filter(mail => mail.id !== mailId)
    saveMailsToStorage()
}

function getById(mailId) {
    const mail = mails.find(mail => mail.id === mailId)
    return Promise.resolve(mail)
}


function saveMailsToStorage() {
    StorageService.saveToStorage(KEY, mails)

}


function makeId(length = 6) {
    var txt = '';
    var possible = '0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}