
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'gig'

export const gigService = {
    query,
    getById,
    save,
    remove,
    getEmptyGig,
    addGigMsg
}
window.cs = gigService


async function query(filterBy = { txt: '', price: 0 }) {
    var gigs = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        gigs = gigs.filter(gig => regex.test(gig.title) || regex.test(gig.description))
    }
    if (filterBy.price) {
        gigs = gigs.filter(gig => gig.price <= filterBy.price)
    }
    return gigs
}

function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
    await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
    var savedGig
    if (gig._id) {
        savedGig = await storageService.put(STORAGE_KEY, gig)
    } else {
        // Later, owner is set by the backend
        gig.owner = userService.getLoggedinUser()
        savedGig = await storageService.post(STORAGE_KEY, gig)
    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    // Later, this is all done by the backend
    const gig = await getById(gigId)
    if (!gig.msgs) gig.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedinUser(),
        txt
    }
    gig.msgs.push(msg)
    await storageService.put(STORAGE_KEY, gig)

    return msg
}

function getEmptyGig() {
    return {
        name: 'gig-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
; (async () => {
    await storageService.post(STORAGE_KEY, {
        title: 'I will design your logo',
        price: 180,

        owner: {
            id: "u101",
            fullname: "Dudu",
            imgUrl: 1,
            level: "basic",
            rate: 4,
        },
        daysToMake: 3,
        description: "make unique logo..",
        imgUrl: 1,
        tags: [
            "logo-design",
            "artisitic",
            "proffesional",
            "accessible",
        ],
        "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    })
    await storageService.post(STORAGE_KEY, {
        title: 'I will sing your song',
        price: 180,

        owner: {
            id: "u102",
            fullname: "yossi",
            imgUrl: 1,
            level: "basic",
            rate: 4,
        },
        daysToMake: 3,
        description: "make unique song..",
        imgUrl: 1,
        tags: [
            "logo-design",
            "artisitic",
            "proffesional",
            "accessible",
        ],
        "likedByUsers": ['mini-user'] // for user-wishlist : use $in
    })
    // await storageService.post(STORAGE_KEY, { vendor: 'Subali Rahok 2', price: 240 })
})
// {
//     "_id": "i101",
//     "title": "I will design your logo",
//     "price": 12,
//     "owner": {
//       "_id": "u101",
//       "fullname": "Dudu Da",
//       "imgUrl": "url",
//       "level": "basic/premium",
//       "rate": 4
//     },
//     "daysToMake": 3,
//     "description": "Make unique logo...",
//     "imgUrl": "",
//     "tags": [
//       "logo-design",
//       "artisitic",
//       "proffesional",
//       "accessible"
//     ],
//     "likedByUsers": ['mini-user'] // for user-wishlist : use $in
//   }