
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


const STORAGE_KEY = 'gig'

const labels = [
    { title: 'On wheels', color: '#dc2626' },
    { title: 'Board', color: '#f59e0b' },
    { title: 'Art', color: '#047857' },
    { title: 'Baby', color: '#2563eb' },
    { title: 'Puzzle', color: '#4338ca' },
    { title: 'Outdoor', color: '#be185d' },
    { title: 'Battery Powered', color: '#71717a' },
    { title: 'Doll', color: '#6d28d9' },
    { title: 'Anime', color: '#fbbf24' },
    { title: 'Lego', color: '#6366f1' },
    { title: 'Superhero', color: '#ef4444' },
    { title: 'Strategy', color: '#34d399' },
  ]

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
    console.log('filterBy in gig service query',filterBy)
    return httpService.get(STORAGE_KEY, filterBy)

    // var gigs = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     gigs = gigs.filter(gig => regex.test(gig.vendor) || regex.test(gig.description))
    // }
    // if (filterBy.price) {
    //     gigs = gigs.filter(gig => gig.price <= filterBy.price)
    // }
    // return gigs

}
function getById(gigId) {
    // return storageService.get(STORAGE_KEY, gigId)
    return httpService.get(`gig/${gigId}`)
}

async function remove(gigId) {
    // await storageService.remove(STORAGE_KEY, gigId)
    return httpService.delete(`gig/${gigId}`)
}
async function save(gig) {
    var savedGig
    if (gig._id) {
        // savedGig = await storageService.put(STORAGE_KEY, gig)
        savedGig = await httpService.put(`gig/${gig._id}`, gig)

    } else {
        // Later, owner is set by the backend
        // gig.owner = userService.getLoggedinUser()
        // savedGig = await storageService.post(STORAGE_KEY, gig)
        savedGig = await httpService.post('gig', gig)
    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    const savedMsg = await httpService.post(`gig/${gigId}/msg`, {txt})
    return savedMsg
}
function getEmptyReview() {
    return {
        id: utilService.makeId(),
        txt: '',
        at: Date.now(),
        rate: null,
        level: 0,
        by: {
            fullname: '',
        }
    }            
}
function getEmptyGig(){
    return {

        image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/103152154/original/b89645456b7f6906afa872771737e980b6f57cfb.jpg",
        images: [
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670777341/gigs%20images/giggg/6232379ad1f4e38d095a17a42c27a410fde6baa7_rpsd6j.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670777341/gigs%20images/giggg/430cf61d2bcbed8edfa7d1cadfccd408249a1dc8_b9vvbg.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670777341/gigs%20images/giggg/3b88b7b39e02a8d9b145a60c5cd60a64adfdf785_xkqfbd.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670777341/gigs%20images/giggg/Asset_2_l0ilxj_vmo8sv.jpg",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670777341/gigs%20images/giggg/Asset_1_spxdst_avmwf8.jpg",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670777342/gigs%20images/giggg/design-professional-3d-logo-for-your-business_idhd9v.jpg",
        ],
        title: "",
        category: "Graphics & Design",
        subCategory: "Logo Design",
        description: "Hi there ! Thanks for stopping by !!\nA Team of Talented Graphic Designer with 8+ years of experience in Graphic Industry, expertise as Logo Maker, You'll get creative & AWESOME logo design for your business.\nMy portfolio : https://www.fiverr.com/users/design_desk/portfolio/NjFiYjE4NmMwZTgwMDUwMDAxZTMzMjJh\n★ Why Us? ★\nTalented Logo Maker Team\nFully custom made, creative, original, UNIQUE and AWESOME designs\nProfessional customer support 24/7\nHigh Quality work\n100% money back policy if not satisfied\n★ WHAT DO YOU GET? ★\n✔ Highly Professional, UNIQUE & High Quality designs\n✔ UNLIMITED revisions until u r 100% satisfied\n✔ Fast turn around time 24 to 48 hours only.\n✔ 100% original & unique vector design from Adobe Illustrator\n✔ Vector Source Files (scalable without any quality loss) (AI, EPS, PDF) for the final design ✔ PROFESSIONAL Communication & Outstanding Customer Support ✔ Guaranteed High Quality work\nIf you have any question,\nFeel free to★ Contact Me! ★I'll be happy to help !\nLet's get started!\n-Your Logo Maker",
        price: '',
        daysToMake: 9,
        labels: ["graphics & design","Logo"],
        owner: {
            _id: "",
            fullname: "",
            rate: 4.9,
            level: 3,
            isOnline: false,
            clients: 
            ["https://res.cloudinary.com/djyj6l7de/image/upload/v1670488697/logos/61af70a627e74f049f1361d3_jxpiag.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670100586/logos/61a87e99f3085f4291c4b980_cn1wzl.webp",
            ],
            imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/044fb5914a845a4eb59fc2b69f7f7b32-1634120039750/4dbc2acb-7322-4cd0-9afb-e5190e8e8a0d.jpg",
            loc: "India",
            memberSince: "Jun 2014",
            avgResponceTime: "2 hours",
            about: "Hello! My name is VD. I am a connoisseur of art and music. I love being around nature and my pets. I have a team of professional graphic designers with an experience of 8+ years. We specialize in logo designing. We're available exclusively on fiverr to rock your world with our designing skills. Come and experience it for yourself!",
        },

        lastDelivery: "about 3 hours",
        reviewers: [
            {
                name: "airbornesnow",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "The seller's communication was EXCELLENT and the service was exactly as described. When I wanted revisions, they did not hesitate to provide me with alterations of the design. Although they were nice and kind when I asked for the revisions, all the revisions were half a**ed and sloppy. Even when I provided a concept drawing for them to TRACE, the results were still not what I expected. Buyers BEWARE: The seller's communication is excellent, friendly, and VERY kind. However, if you ask for any revisions, the revisions you will receive will be sloppy and half-a**ed.",
                reviewedAt: "Published 4 days ago",
                img:"https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/c379aa91-8e48-453f-adbf-cf2ab5a2ba8d_f85qjo.webp"
            },
            {
                name: "jacobmnb",
                country: "United Kingdom",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
                review: "I thought this service was amazing, I bought the basic option just hoping for a basic logo, but the seller went above my expectations and provided me with a bunch of concepts that were better than I could have imagined, for £7.90 I think this service is a must-buy for anyone needing a professional-looking logo and not wanting to spend a huge amount",
                reviewedAt: "Published 2 months ago",
                img:"https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/1d8fa5f7-b34a-4f19-a55e-941a853fe2b2_qqpqnv.webp"

            },
            {
                name: "ashtonpeckham",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "The seller was very responsive. We had revisions after the initial designs were delivered and the seller made them very quickly. The logo we selected is perfect for our current needs. Recommend including your vision in the initial request so you don't end up with ideas that you don't like. There were only 2 real contenders because the Fiverr site wouldn't allow me to attach my hand drawn idea. The paperclip icon was essentially rendered inactive, even after several attempts. This is no fault of the designers; i should have been even more descriptive with my request when I was unable to attach files.",
                reviewedAt: "Published 1 week ago",
                img:"https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/stepanadrian_ag4px7.webp"
            },
            {
                name: "borowski10",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "Ultimately, I am very happy with the final logo I received. However, the seller's communication could have been better. There were a few times I asked for specific revisions and I was sent the same thing or something else that I didn't ask for. It took about 2 weeks for me to finally get what I was looking for. In the end, I got what I paid for and I am grateful for the service!",
                reviewedAt: "Published 2 days ago",
                img:"https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/JPEG_20210716_045808_7161494499008619166_zh6tkc.webp"

            },
            {
                name: "fowlplay_uk",
                country: "United Kingdom",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
                review: "VD was great. I had a very specific design in mind already that I needed recreating professionally and they did not disappoint. Even when I started to get picky with the design, nothing I requested was ever too much trouble. We went through many revisions to get it to exactly how I wanted it and every interaction we had was effortless. This is the first project I'd commissioned so wasn't really sure on the correct etiquette, yet VD made things so easy for me. Can't recommend these guys enough for that",
                reviewedAt: "Published 2 months ago",
                img:"https://res.cloudinary.com/djyj6l7de/image/upload/v1670678323/review%20pic/c6667c18-c48c-415f-8d6e-28fda9b62486_depjj6.webp"
            }
        ],
        tags: [
            {
                name: "minimalist"
            },
            {
                name: "flat"
            },
            {
                name: "logo design"
            },
            {
                name: "modern"
            },
            {
                name: "unique"
            },
            {
                name: "logo maker"
            }
        ]
    }
}
// function getEmptyGig(){
//     return {

//         image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3171448/original/a41a38f3733bb97279a49d1449f7337dece50693.jpg",
//         images: [
//             "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054167/gigs%20images/gig%201/final_logo_dnmfrp.webp",
//             "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054167/gigs%20images/gig%201/design-a-professional-business-flyer-or-poster_frbudj.jpg",
//             "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054167/gigs%20images/gig%201/f672898aa2f4756e249b9c2edb27d3339860de8d_bgjfwr.webp",
//             "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054167/gigs%20images/gig%201/design-a-professional-business-flyer-or-poster_1_vq55mr.jpg",
//             "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054167/gigs%20images/gig%201/final_logo1_emcful.webp",
//         ],
//         title: "",
//         category: "Graphics & Design",
//         subCategory: "Logo Design",
//         description: "Hi there ! Thanks for stopping by !!\nA Team of Talented Graphic Designer with 8+ years of experience in Graphic Industry, expertise as Logo Maker, You'll get creative & AWESOME logo design for your business.\nMy portfolio : https://www.fiverr.com/users/design_desk/portfolio/NjFiYjE4NmMwZTgwMDUwMDAxZTMzMjJh\n★ Why Us? ★\nTalented Logo Maker Team\nFully custom made, creative, original, UNIQUE and AWESOME designs\nProfessional customer support 24/7\nHigh Quality work\n100% money back policy if not satisfied\n★ WHAT DO YOU GET? ★\n✔ Highly Professional, UNIQUE & High Quality designs\n✔ UNLIMITED revisions until u r 100% satisfied\n✔ Fast turn around time 24 to 48 hours only.\n✔ 100% original & unique vector design from Adobe Illustrator\n✔ Vector Source Files (scalable without any quality loss) (AI, EPS, PDF) for the final design ✔ PROFESSIONAL Communication & Outstanding Customer Support ✔ Guaranteed High Quality work\nIf you have any question,\nFeel free to★ Contact Me! ★I'll be happy to help !\nLet's get started!\n-Your Logo Maker",
//         price: '',
//         daysToMake: 9,
//         labels: ["graphics & design","Logo"],
//         owner: {
//             _id: "",
//             fullname: "",
//             rate: 3,
//             level: 3,
//             isOnline: false,
//             clients: 
//             ["https://res.cloudinary.com/djyj6l7de/image/upload/v1670100587/logos/logo3_tuit0t.png",
//             "https://res.cloudinary.com/djyj6l7de/image/upload/v1670100586/logos/61a87e99f3085f4291c4b980_cn1wzl.webp",
//             ],
//             imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/044fb5914a845a4eb59fc2b69f7f7b32-1634120039750/4dbc2acb-7322-4cd0-9afb-e5190e8e8a0d.jpg",
//             loc: "India",
//             memberSince: "Jun 2014",
//             avgResponceTime: "2 hours",
//             about: "Hello! My name is VD. I am a connoisseur of art and music. I love being around nature and my pets. I have a team of professional graphic designers with an experience of 8+ years. We specialize in logo designing. We're available exclusively on fiverr to rock your world with our designing skills. Come and experience it for yourself!",
//         },

//         lastDelivery: "about 3 hours",
//         reviewers: [
//             {
//                 name: "airbornesnow",
//                 country: "United States",
//                 flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 review: "The seller's communication was EXCELLENT and the service was exactly as described. When I wanted revisions, they did not hesitate to provide me with alterations of the design. Although they were nice and kind when I asked for the revisions, all the revisions were half a**ed and sloppy. Even when I provided a concept drawing for them to TRACE, the results were still not what I expected. Buyers BEWARE: The seller's communication is excellent, friendly, and VERY kind. However, if you ask for any revisions, the revisions you will receive will be sloppy and half-a**ed.",
//                 reviewedAt: "Published 4 days ago"
//             },
//             {
//                 name: "jacobmnb",
//                 country: "United Kingdom",
//                 flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
//                 review: "I thought this service was amazing, I bought the basic option just hoping for a basic logo, but the seller went above my expectations and provided me with a bunch of concepts that were better than I could have imagined, for £7.90 I think this service is a must-buy for anyone needing a professional-looking logo and not wanting to spend a huge amount",
//                 reviewedAt: "Published 2 months ago"
//             },
//             {
//                 name: "ashtonpeckham",
//                 country: "United States",
//                 flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 review: "The seller was very responsive. We had revisions after the initial designs were delivered and the seller made them very quickly. The logo we selected is perfect for our current needs. Recommend including your vision in the initial request so you don't end up with ideas that you don't like. There were only 2 real contenders because the Fiverr site wouldn't allow me to attach my hand drawn idea. The paperclip icon was essentially rendered inactive, even after several attempts. This is no fault of the designers; i should have been even more descriptive with my request when I was unable to attach files.",
//                 reviewedAt: "Published 1 week ago"
//             },
//             {
//                 name: "borowski10",
//                 country: "United States",
//                 flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
//                 review: "Ultimately, I am very happy with the final logo I received. However, the seller's communication could have been better. There were a few times I asked for specific revisions and I was sent the same thing or something else that I didn't ask for. It took about 2 weeks for me to finally get what I was looking for. In the end, I got what I paid for and I am grateful for the service!",
//                 reviewedAt: "Published 2 days ago"
//             },
//             {
//                 name: "fowlplay_uk",
//                 country: "United Kingdom",
//                 flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
//                 review: "VD was great. I had a very specific design in mind already that I needed recreating professionally and they did not disappoint. Even when I started to get picky with the design, nothing I requested was ever too much trouble. We went through many revisions to get it to exactly how I wanted it and every interaction we had was effortless. This is the first project I'd commissioned so wasn't really sure on the correct etiquette, yet VD made things so easy for me. Can't recommend these guys enough for that",
//                 reviewedAt: "Published 2 months ago"
//             }
//         ],
//         tags: [
//             {
//                 name: "minimalist"
//             },
//             {
//                 name: "flat"
//             },
//             {
//                 name: "logo design"
//             },
//             {
//                 name: "modern"
//             },
//             {
//                 name: "unique"
//             },
//             {
//                 name: "logo maker"
//             }
//         ]
//     }
// }





// gigs = 
//     [
//       {
//         _id: 'i101',
//         category: 'Logo',
//         title: 'I will design 3 modern minimalist logo design',
//         price: 10,
//         owner: {
//           _id: 'u101',
//           fullname: 'logoflow',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/72867198f897ad13715dc583607abd25-1646719437960/396247a2-16d7-4e0e-9496-fbb43f978f97.jpg',
//           level: 'Level 2 Seller',
//           rate: 4.9,
//           review: '32k',
//           loc: 'India',
//           memberSince: 'Dec 2015',
//           avgResponceTime: '2 hours',
//           lastDelivery: 'about 7 hours',
//           about: `
//           Hi,
//           Mayur here.
//           I am a professional graphic designer with an experience of 10+ years. Let my field
//           of expertise collaborate with your level of imagination, so together we can create
//           an exceptional brand image. Something which creates an impact. Impact which 
//           screams for its acknowledgment without you needing to do so. Let us make wonders
//           together in this field of designing.
//           Keep exploring.
//           `,
//         },
//         daysToMake: 3,
//         imgs: [
//           "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/22527722/original/d9de303ea2f07efe1e75e1a67f657e33e6aa9b4f/do-professional-and-unique-logo-design.jpg",
//           "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/22527722/original/a752a1defa71007d53fb312b2e6235234253e642/do-professional-and-unique-logo-design.jpg",
//           "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20220614/modern%20minimalist%20logo%20design%202_mto2tc.jpg",
//           "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/0387ac33f43c1a4ecd87e4b66e33f7b9-1658399601/80126_MattDash%20Gaming_FLat_HP_06%20(1)/do-professional-and-unique-logo-design.jpg",
//           "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/7b8e491028240edd8e6759fae7407f0b-1657963284/79944_COBRA%20FENCING%20LLC_Flat_H_02/do-professional-and-unique-logo-design.jpg"
//         ],
//         description: `
//         This Gig assures you for the logo designs with minimalism and smoothness

//         This Gig is of one of many design kinds we offer. Flat design concepts are one of our 
//         fortes. For the logo to be timeless it doesn\'t need to be with complex structures or 
//         patterns. It just needs to be simple, memorable and which gives a distinctive essence 
//         to your business

//         A flat design is the one which defines your identity or your business but doesn\'t get
//         in way of your destination for your target audience

//         Our minimalistic logo designs will help in representing your company in a unique way. 
//         We believe that minimalism is not simple but has unlimited boundaries of its own

//         Why me?

//         Consistent | Creative | Patient | Adaptive communication | Expert | Learner | Listener

//         OUR ARTISTRY INSPIRATION

//         We want to give your business a spotlight which will give you a path through which you
//         can shine through. Clarity lies within the simplicity of the creations. We will provide
//         you with the essentials which will represent the hard work which you have put through
//         your brand

//         Get a free consultation with us, with just a click of finger. I can\'t wait to get
//         connected`,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more: 'SILKY FLOW 3 LOGOS in JPG & PNG (transparent) + NO Mascots & Complex design',
//         orderFeats: [
//           '3 concepts included',
//           'Logo transparency',
//           'Printable file',
//           'Vector file',
//           'Source file',
//         ],
//       },
//       {
//         _id: 'i102',
//         category: 'Logo',
//         title: 'I will do modern business logo design with copyrights',
//         price: 15,
//         owner: {
//           _id: 'u101',
//           fullname: 'ei8htz',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a2dd1a0482bbfe54e61c6c2d6e64696e-1640431251801/943f73b5-dc43-4fe4-9728-9a58f0aafdbc.jpg',
//           level: 'Top Rated Seller',
//           rate: 4,
//           review: '53k',
//           loc: 'Indonesia',
//           memberSince: 'Oct 2012',
//           avgResponceTime: '5 hours',
//           lastDelivery: 'about 1 hours',
//           about: `
//           Experienced, passionate graphic design team specializing in logos, icons, stationery, 
//           prints, and branding. Completing thousands ofprojects on Fiverr for a wide variety of 
//           clients, we ensure nothing but the utmost professionalism and quality graphics you 
//           can find. Satisfaction is guaranteed!

//           We look forward to working with you 🙂`,
//         },
//         daysToMake: 2,
//         imgs: [
//           'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/1094285/original/30f75e896954dc0ea9e28a87209a28053bcccc18/design-2-outstanding-logo.png',
//           'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/1094285/original/0149d53275d914f681e8685b9e6c263dcc4309ab/design-2-outstanding-logo.png',
//           'https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20211214/logo-04_nxxckf.jpg',
//           'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/819a431f0c9f551ac9173310d0b8788c-1657824243/preview%20203/design-2-outstanding-logo.jpg',
//         ],
//         description: `

//         A Team of Talented Graphic Designer with 8+ years of experience in A logo is a 
//         customer's first impression of your brand, and it should be unforgettable.
//         
//         Ei8htz is a team of professional designers experienced in creating hand-crafted 
//         outstanding logo designs. We've helped thousands of small to big companies around the 
//         world making attractive logos that stand out from the crowd. 
//         
//         We'll help you create the best logo that can take your business to the
//         next level. We guarantee outstanding service for your project.
//         
//         What makes us strong!
//         
//         ✔ Leading Fiverr logo design service
//         
//         ✔ Affordable cost
//         
//         ✔ Top-notch design and high quality work
//         
//         ✔ Custom design - made from scratch
//         
//         ✔ Commit to finish project until satisfaction
//         
//         ✔ 24/7 support
//         
//         
//         Our expertises: Versatile | Freestyle | Modern | Minimalist | Geometric | 3d | 
//                         Hand-drawn | Signature | Vintage | Lettering | Watercolor
//         
//         Note:
//         
//         Mascot or illustration is not included in the basic package
//         
//         Contact us for a special offer:
//         
//         • $280 BRANDING PACKAGE: logo design + favicon + stationery design + social media kit 
//                                  + style guides.
//         
//         • $150 LOGO ANIMATION.
//         
//         ORDER NOW!
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more: 'Lite 2 logo options in JPG + PNG transparent + FREE vector source file in Ai',
//         orderFeats: [
//           '2 concept included',
//           'Logo transparency',
//           'Printable file',
//           'Vector file',
//           'Social media kit',
//         ],
//       },
//       {
//         _id: 'i103',
//         category: 'Logo',
//         title: 'I will design unique modern versatile minimalist business logo',
//         price: 20,
//         owner: {
//           _id: 'u101',
//           fullname: 'muska_logo12',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/cd7df7ccbadfa2c438aec6863735113e-1620164071845/afde52c3-876d-463e-bf6e-4ee9f20578da.jpg',
//           level: 'Level 2 Seller',
//           rate: 4.9,
//           loc: 'Pakistan',
//           memberSince: 'May 2021',
//           avgResponceTime: '1 hours',
//           lastDelivery: 'about 27 minutes',
//           about: `
//           As a full time Graphic Designer, I'm offering my creative logo design services on 
//           Fiverr. With over many years experience I can produce your logo in any style. I will 
//           always ensure you're 100% happy at every stage of the project to come up with an 
//           end product which will perfectly identify and represent your company.`,
//         },
//         daysToMake: 1,
//         imgs: [
//           'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/205043129/original/3e1b7b521d2ac2bdd0e839888e1095fe3c3f4d66/do-creative-unique-modern-versatile-minimalist-and-business-logo-design.jpg',
//           'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/4f9605173bed9a21001954d0113d914a-1658647699/logo1/do-creative-unique-modern-versatile-minimalist-and-business-logo-design.jpg',
//           'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/36df9fbe656de3e335698cee5606c360-1658401602/logo1/do-creative-unique-modern-versatile-minimalist-and-business-logo-design.jpg',
//           'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c6523fd4ae08dc7df9d4f340885816b2-1658405876/logo1/do-creative-unique-modern-versatile-minimalist-and-business-logo-design.jpg',
//         ],
//         description: `
//         Do you want a helping hand for your new business or brand to stay creative? Or are you 
//         not satisfied with your existing logo? Look no further, as you are at the correct place.

//         As it is the era of Flat modern minimalist logo. I am in the business of giving your 
//         brand a hyper boost, not just a logo.

//         Why me?

//         More than 5 years of experience in Branding Designing
//         Friendly and quick communication
//         High resolution printable files
//         Expert in modern minimalist logo
//         Money back guarantee
//         Flexible Source Formats

//         Modern Minimalist Logo | Minimal | Professional | Text | Vintage | Badge | Hand drawn | 
//         Feminine | Signature | Custom Logo Design

//         If you want to know anything more please contact me. I am always here for you.
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more: '1 Basic Logo Design Concept (NO MASCOTS) + Jpeg Image + Png Image + Unlimited Revisions',
//         orderFeats: [
//           '2 concept included',
//           'Logo transparency',
//           '3D mockup',
//           'Social media kit',
//         ],
//       },
//       {
//         _id: 'i104',
//         category: 'Wordpress',
//         title: 'I will fix complex wordpress issues, fix wordpress errors, fix bug',
//         price: 10,
//         owner: {
//           _id: 'u101',
//           fullname: 'webexpert_0',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/07d2f39e1708eaafeea368f0c7938a6b-1644941669596/29d2e723-3f60-47ef-b75a-a9537634e8b1.png',
//           level: 'Level 2 Seller',
//           rate: 5,
//           loc: 'Pakistan',
//           memberSince: 'Sept 2021',
//           avgResponceTime: '1 hours',
//           lastDelivery: 'about 3 hours',
//           about: `
//           Hi! It's Adil Farid. I am a professional and Senior Website Developer with 4 years
//           of working experience in IT agency as a Full Stack Developer. My expertise in 
//           Html5, Css3, Sass (Sass + Scss), Less (pre-processor), Bootstrap5, Bulma, 
//           JavaScript, jQuery, WordPress, PHP, CodeIgniter, Laravel, My SQL, MongoDB...etc. 
//           I have vast experience in WordPress, Theme Customization, Custom Functionalities,
//           Theme Responsiveness, Plugin Integration, Web Development and much more... etc.
//            `,
//         },
//         daysToMake: 1,
//         imgs: [
//           'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/143801307/original/182ae507354f6fe0fa021e403461e9b6e40f3a03/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
//           'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/143801307/original/8164c9f9c0fff64be3842996cabe58ceee7cb9e1/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
//           'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/143801307/original/3ff3a9d66bd1f9ff6f5a5c4bf770b8b7957cca58/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
//           'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/e9f0e0b70347b7de2934b68bada4a8e3-1658276904/Mortgage%20by%20Matranga%2002/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
//           'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c4cd6e4322e21031559f7ab5c899a8c1-1658280635/01/design-a-flat-modern-luxury-elegant-minimalist-logo.jpg',
//         ],
//         description: `
//         IMPORTANT : PLEASE CONTACT ME BEFORE PLACING THE ORDER

//         Welcome to my Fiverr's gig "I will fix complex WordPress issues, fix WordPress errors, 
//         fix bug". If you are having problems with your WordPress website and want to fix 
//         WordPress errors, issues and bug or customize some features, than you are at the right 
//         place. You don't look any further!
//         
//         I'll help you with fix WordPress issues, fix WordPress errors and fix WordPress bug 
//         within just 24 hours.
//         
//         ⭐ What I can do?
//         
//         ✔️ Error Establishing Database Connection
//         ✔️ Fixing WooCommerce errors
//         ✔️ Critical Error
//         ✔️ Not Sending Emails
//         ✔️ Internal Server Error
//         ✔️ White/Empty Screen
//         ✔️ 404 Not Found Error
//         ✔️ Too Many Redirects
//         ✔️ WP Customization
//         ✔️ Layout issues
//         ✔️ Fix Contact form, widgets, sliders
//         ✔️ Fix headers and footers
//         ✔️ Maximum Execution Time Exceeded
//         ✔️ Styling using Custom CSS and JS
//         ✔️ 403 Forbidden Error
//         ✔️ Improve website security
//         ✔️ And Much More...etc

//         ⭐ Why me ?
//         
//         ✔️ Quick & Quality Service
//         ✔️ Unlimited Revisions until your Satisfaction
//         ✔️ 24/7 Availability
//         ✔️ After Order Support
//         ✔️ On time Delivery
//                 
//         Looking forward to hearing from you. Thank you so much :)`,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more: "One small CSS task. (Don't Order me directly without discussing task. Otherwise Order will Cancel).",
//         orderFeats: ['2 concepts included', 'Printable file', '3D mockup'],
//       },
//       {
//         _id: 'i105',
//         category: 'Wordpress',
//         title: 'I will do wordpress malware removal within 1hour',
//         price: 50,
//         owner: {
//           _id: 'u102',
//           fullname: 'malware_hunter5',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/image/upload/t_profile_small,q_auto,f_auto/v1/attachments/profile/photo/97b7f1ac3c14ffff73598f01d54fc9ed-1601992611040/5a6b5e7c-b510-4497-acc5-b3439de752fc.jpg',
//           level: 'Level 2 Seller',
//           rate: 5,
//           loc: 'Pakistan',
//           memberSince: 'Oct 2020',
//           avgResponceTime: '1 hour',
//           lastDelivery: 'about 13 hours',
//           about: `
//           Hi! It's Adil Farid. I am a professional and Senior Website Developer with 4 years
//           of working experience in IT agency as a Full Stack Developer. My expertise in 
//           Html5, Css3, Sass (Sass + Scss), Less (pre-processor), Bootstrap5, Bulma, 
//           JavaScript, jQuery, WordPress, PHP, CodeIgniter, Laravel, My SQL, MongoDB...etc. 
//           I have vast experience in WordPress, Theme Customization, Custom Functionalities,
//           Theme Responsiveness, Plugin Integration, Web Development and much more... etc.`
//         },
//         daysToMake: 3,
//         imgs: [
//           'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/177849864/original/1b52406ee038703a5b3f3fb1ae6a4cccbddfb75a/remove-malware-and-viruses.png',
//           'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/177849864/original/c13b7c3ff4b5bb62e1baffa9f4d6f20fe2e13094/remove-malware-and-viruses.png',
//           'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/177849864/original/ae0018bb76e4e4e42d9973c93861fbc29e246990/remove-malware-and-viruses.png',
//           'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/4f38f7e55c01be0df8ab7df3eb182972-1657921024/12/remove-malware-and-viruses.PNG',
//         ],
//         description: `
//         Hi there ! Thanks for stopping by !!

//         A Team of Talented Graphic Designer with 8+ years of experience in Graphic Industry, 
//         expertise as Logo Maker,You'll get creative & AWESOME logo design for your business.

//         ★ Why Us? ★

//         - Talented Logo Maker Team
//         - Fully custom made, creative, original, UNIQUE and AWESOME designs
//         - Professional customer support 24/7
//         - High Quality work
//         - 100% money back policy if not satisfied

//         ★ WHAT DO YOU GET? ★

//         ✔ Highly Professional, UNIQUE & High Quality designs
//         ✔ UNLIMITED revisions until u r 100% satisfied
//         ✔ Fast turn around time 24 to 48 hours only.
//         ✔ 100% original & unique vector design from Adobe Illustrator
//         ✔ Vector Source Files (scalable without any quality loss)(AI, EPS, PDF) for the final 
//           design 
//         ✔ PROFESSIONAL Communication & Outstanding Customer Support 
//         ✔ Guaranteed High Quality work

//         If you have any question, 

//         Feel free to★ Contact Me! ★I'll be happy to help !

//         Let's get started!
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more: 'Basic WordPress installation + Theme installation + Setup theme demo + plugins installation.',
//         orderFeats: [
//           'Functional website',
//           '1 page',
//           'Design customization',
//           '2 plugins/extension',
//           'Responsive design',
//         ],
//       },
//       {
//         _id: 'i106',
//         category: 'Wordpress',
//         title: 'I will create, fix, customize, your wordpress website',
//         price: 50,
//         owner: {
//           _id: 'u102',
//           fullname: 'waleedview',
//           imgUrl:'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/e102af6a7f144497e3a674711c61c8ae-1632175524550/304ace91-0c40-48ae-ab1a-80e65b4c53a4.jpg',
//           level: 'Top Rated Seller',
//           rate: 5,
//           loc: 'Pakistan',
//           memberSince: 'Oct 2015',
//           avgResponceTime: '4 hour',
//           lastDelivery: 'about 3 hours',
//           about: `
//           Developing is my passion.I'm an energetic and passionate website developer.

//           I've been developing websites using CMS and PHP for 4 years now and have
//           worked on several projects. Anything you need, I should be able to provide. 
//           Send me a message and let me know if i can help.`,
//         },
//         daysToMake: 3,
//         imgs: [
//           "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/18513109/original/f0d744d79af6fb281ffb4a10d417a300ecb5a37f/create-fix-customize-your-wordpress-website.png",
//           "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/18513109/original/0193afd6928f9a6f0fec3ff19f235252049e0937/create-fix-customize-your-wordpress-website.jpg",
//           "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/b7f8ae533a2d4d50f7387359c8c4d8ae-1655063814/Screenshot%202022-06-13%20at%2012.55.40%20AM/create-fix-customize-your-wordpress-website.png",
//           "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/f6e8341cb2281b4ee518dad3ff68b0c5-1654650318/Screenshot%202022-06-08%20at%206.04.06%20AM/create-fix-customize-your-wordpress-website.png",
//           "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/ee3cbf05e749490a6b934ccab9ec4281-1654467102/Screenshot%202022-06-06%20at%203.11.14%20AM/create-fix-customize-your-wordpress-website.png"
//         ],
//         description: `
//         Are you stuck with Wordpress problems you can't figure out how to fix?
//         Looking for custom WP development?
//         Need to migrate your WP site?
//         Need to customize your theme ?

//         I'm a freelance Web developer and i have  5 years of experience in PHP and WP! CMS.

//         i will help you to do what you want with your WP website:



//                           ★★ Fast Delivery ★★

//                     ★★★ 24 hours or less than it ★★★

//         ►Theme customization
//         ►CSS 
//         ►Theme installation
//         ►Site Design and Layout
//         ►Any WordPress Plugin setup/configuration
//         ►Any PHP error
//         ►Woocommerce customization
//         ►Widget Area
//         ►Custom style for anything 
//         ►Background, Header, Footer
//         ►Remove unnecessary meta-data
//         ►Change the Permalink Structure
//         ►Disable HTML in WP comments
//         ►Turn off Post Revisions in WordPress
//         ►Hide Errors on the WP Login screen
//         ►Favicon & Logo customization
//         ►Improve the Security of your WordPress website
//         ►wordpress SEO
//         ►wordpress website speed and Performance Optimization
//         ►Any type of common WordPress Errors
//         ►Much More ...

//         NOTE: 
//         **Please send me a message before you make an order. Its very important ! We should
//          discuss first about what you need. I always do a quick reply.
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more: 'In this basic gig i will fix one small issue of your website.',
//         orderFeats: [
//           '10 pages',
//           'Design customization',
//           'Design customization',
//           '2 plugins/extension',
//           'Responsive design',
//           'Content upload',
//           'E-commerce functionality',
//           '10 products'
//         ],
//       },
//       {
//         _id: 'i107',
//         category: 'Programming',
//         title: 'I will do c, python, java, web programming assignments, and tutor',
//         price: 25,
//         owner: {
//           _id: 'u107',
//           fullname: 'kashifbutt479',
//           imgUrl:"https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/79ae4758fddbabb86c7e188332f8e156-1653562956915/c5d84a00-eb2c-4fb9-808d-4c5d4059abf9.png",
//           level: 'Top Rated Seller',
//           rate: 5,
//           loc: 'Romania',
//           memberSince: 'Mar 2016',
//           avgResponceTime: '5 hours',
//           lastDelivery: '1 day',
//           about: `
//           Welcome to my Profile and you' ll find very professional services here. I' ve been
//           a YouTuber for 10 Years. Contact me for setting up and promoting your youtube 
//           channels.`,
//         },
//         daysToMake: 3,
//         imgs: ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/261617738/original/a503705250e3085c24e54bae5e879336b9112734/do-c-python-java-web-programming-assignments.png",
//         "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/160699189/original/ff977a2d2ea2e5a179d1e265f69f06033c1035f2/do-programming-on-java-c-python.png",
//         "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/258866947/original/93bac81fbc824b4d7903a6db07600005e16f20a2/do-c-cpp-c-sharp-python-java-gui-programming-for-you.jpeg",
//         "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/263493183/original/67127841c404937de1c4bb5de71e7116b5a5ad8a/do-c-cpp-java-and-python-programming-projects-and-games.png",
//         ],
//         description: `
//         Welcome to my Premium gig!

//         If you are looking for yt promotions and want to complete youtube partner program
//         requirements you are at the right place.

//         How it works:

//         We have our own audience on our huge social media platforms and we provide quality
//         traffic following ypp terms and conditions.
//         We need at least 4 videos in your channel to work.
//         Plz don't delete any video during this promotion and keep subscribers public to monitor
//         the progress.
//         We don't guarantee monetization which is youtube's privilege. However rest assured, if
//         your channel doesn't violate any of You Tube policy and your content is unique and not
//         taken from other channels, it must get monetized.

//         Benefits of this Gig!

//         Real traffic from Social Media and Groups, no bots.
//         No worries about Blocks / Bans, our service is 100% legit.
//         Results START Appearing in 24 hours or less.
//         Subscribers and Watch hours.


//         Also check my other gigs for viral video marketing and guest posts. Feel free to ask
//         any questions. Thanks
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more:'I will complete youtube partner program requirements for monetization.',
//         orderFeats: [
//           'Include source code',
//           'Include source code',
//           'Detailed code comments',
//           'Database integration',
//         ],
//       },
//       {
//         _id: 'i108',
//         category: 'Programming',
//         title: 'It includes desktop/web applications in Python with a thorough report.',
//         price: 500,
//         owner: {
//           _id: 'u107',
//           fullname: 'deeplearner_',
//           imgUrl:"https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/dc6c6eaf5e6e8fbda6ddd8a8e92a04c7-1584659990166/b31d7292-8653-4ace-b19f-67f207790584.png",
//           level: 'Top Rated Seller',
//           rate: 5,
//           loc: 'France',
//           memberSince: 'Nov 2019',
//           avgResponceTime: '1 hours',
//           lastDelivery: '2 days',
//           about: `
//           Hi, I am a Pakistani Software Developer. I have completed my bachelor's and 
//           masters in computer science.. Currently, I am a research assistant in the 
//           machine learning lab. My areas of expertise are ➥ Machine (Deep) learning, ➥
//           computer vision, and ➥ natural language processing. I have worked on multiple 
//           interesting projects. I have 6 years of experience in multiple technologies 
//           and programming languages including ➥ Python, JAVA, C#, C++, and I am looking
//           forward to help people in the field of data science. I am available 24/ 7 for
//           any project`,
//         },
//         daysToMake: 7,
//         imgs: ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/149329567/original/c3565f08f5fcc68aca80b4ac414203bfba2907dd/do-any-python-programming-task-and-design-your-algorithms.jpg",
//         "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/149329567/original/0fb9fe175f9d55c219bb64c8ace818a51133cde9/do-any-python-programming-task-and-design-your-algorithms.jpg",
//         "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/149329567/original/352e8fd9a84a035052b08ad48e36bfadb09de41c/do-any-python-programming-task-and-design-your-algorithms.png"
//         ],
//         description: `
//         Welcome to my GIG for Python solutions!

//         Hi, if you are looking for someone who can provide you with any Python programming
//         task, then you are at the right place.
//         
//         What I am offering:
//         - Simple programming tasks
//         - Python scripting
//         - Object-Oriented Programming
//         - GUI (Desktop Applications)
//         - Flask applications
//         
//         Why choose me:
//         - On-time delivery of the work (before due date).
//         - Client satisfaction is my priority.
//         - Good quality work assurance.
//         - Detailed comments with code and a brief report.
//         - No plagiarism
//         - 8 years of experience in this field.
//         - Free counseling
//         
//         Contact me:
//         - If you want to discuss the project, feel free to contact me. I am available 24/7
//         - DO NOT place the order without discussing project with me, please message me to 
//           discuss details and availability :)
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more:'It includes complete desktop/web applications in Python with a thorough repor',
//         orderFeats: [
//           'Include source code',
//           'Setup file',
//           'Detailed code comments',
//           'Database integration',
//         ],
//       },
//       {
//         _id: 'i109',
//         category: 'Programming',
//         title: 'I will do r programming, data analysis and visualization',
//         price: 80,
//         owner: {
//           _id: 'u107',
//           fullname: 'peter_pauker',
//           imgUrl:"https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/57bd89d7c1cbbbab11ac98264b30ab4e-1644036769718/9184aba1-a4b8-4bbd-b82b-600ce6a1bb1d.jpg",
//           level: 'Level 2 Seller',
//           rate: 5,
//           loc: 'New Zealand',
//           memberSince: 'Aug 2021',
//           avgResponceTime: '3 hours',
//           lastDelivery: '1 days',
//           about: `
//           Hello,

//           my name is Peter, I have an MSc in Environmental Science (graduated with
//           distinction) from one of Austria's best universities.

//           I have extensive experience when it comes to working with R Studio for statistical
//           analysis as well as data analysis and visualization.

//           My goal is to transform your data into meaningful metrics and underline it with
//           appealing visuals.

//           To learn more about me look me up on LinkedIn: Peter Pauker

//           Looking forward to working with you!`,
//         },
//         daysToMake: 5,
//         imgs: ["https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/220481465/original/8c8603e647a5821a79cd156691fe62d8949fdcc1/analyse-your-data-in-r.png",
//         "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/220481465/original/e09b19d9c6b5e6a176fca640c4613c2117c5c653/analyse-your-data-in-r.jpg",
//         "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/220481465/original/caa8fb43fcfe4ce3778dad2f3a271391bcf7a024/analyse-your-data-in-r.png"
//         ],
//         description: `
//         Hello there,

//         My name is Peter. I am an MSc graduate in Environmental Science with five years of work
//         experience in (project) management, I have worked on various projects in academia and
//         different industries using R Studio to analyse:

//         - Environmental, meteorological and geo-spatial data
//         - Economic metrics, business and KPI analysis
//         - Data & statistical analysis for research papers from diverse backgrounds (medicine, 
//           economics, psychology, energy markets etc.)

//         I can assist you with all your academic or business-related coding and analysis tasks.
//         Let me know your requirements and we will figure out how to solve them.

//         Possible tasks include, but are not limited to:

//         - Data cleaning, e.g. data wrangling and data engineering (tidyverse, dplyr, data.table
//           etc.)
//         - Data visualisation, e.g., graphs, charts and dashboards (ggplot2, igraph)
//         - Statistical analysis and modelling e.g linear regression, logistic regression, ANOVA,
//           correlation analysis etc (Hmisc, corrplot etc.)
//         - Hypothesis testing
//         - Text Analysis and Visualisation (Word Clouds, Sentiment Analysis)
//         - R Studio Tutoring

//         The final price of the gig will depend on the complexity and scope of the project (my 
//         hourly rate is 40$).

//         Kind regards
//         Peter
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more:'Full project, including analysis, graphs, report etc. (exact price depends on the workload)',
//         orderFeats: [
//           'Insights summary',
//           'Visualize results',
//           'Free text analysis',
//           'Question writing',
//         ],
//       },
//       {
//         _id: 'i110',
//         category: 'Illustration',
//         title: 'I will draw, modern, flat illustrations, for your business',
//         price: 34,
//         owner: {
//           _id: 'u102',
//           fullname: 'yonki_moon',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/image/upload/t_profile_small,q_auto,f_auto/v1/attachments/profile/photo/97b7f1ac3c14ffff73598f01d54fc9ed-1601992611040/5a6b5e7c-b510-4497-acc5-b3439de752fc.jpg',
//           level: 'Level 2 Seller',
//           rate: 5,
//           loc: 'Pakistan',
//           memberSince: 'Oct 2020',
//           avgResponceTime: '1 hour',
//           lastDelivery: 'about 13 hours',
//           about: `
//             Hello! My name is VD. 

//             I am a connoisseur of art and music. 

//             I love being around nature and my pets. 

//             I have a team of professional graphic designers with an experience of 8+ years. 

//             We specialize in logo designing. 
//             
//             We're available exclusivelyon fiverr to rock your world with our designing skills.

//             Come and experience it for yourself!`,
//         },
//         daysToMake: 3,
//         imgs: [
//           'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/210774935/original/0c53947928aedeab18802ea9586985d6a43e3de4/create-digital-illustration-for-web.jpg',
//           'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/210774935/original/783966fb7560b58c2ed8e9cc2cfab3ad35a95246/create-digital-illustration-for-web.jpg',
//           'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/210774935/original/759c920bcde8222581109e71b22c8b571cf5c0c5/create-digital-illustration-for-web.jpg',
//           'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a2df864ea81f6613751a560dc4ee196a-1652254601/house%20cover/create-digital-illustration-for-web.jpg',
//         ],
//         description: `
//         Welcome To My Professional Gig:

//         Do you want to Create YouTube Channel or Already Have A Channel created and Want to
//         Grow and Make your Channel professional,so you are at the right place. In this gig, I 
//         will create, setup your channel. I will also give you tips n tricks because you must 
//         know all about channel growth. It will help you in the future and also give you the 
//         lifetime support.

//         What I Will Do:

//         - Create YouTube Channel
//         - Professional Channel
//         - SEO (Improve Rankings)
//         - Design Channel
//         - Setup Channel
//         - Organic Promotion
//         - Logo, Banner
//         - Unlimited Revision
//         - Money-Back Guaranteed
//         - Short Videos
//         And Much More.

//         Why Me:

//         - 100% Satisfaction
//         - 24/7 Support
//         - Guide You for Future Channel Growth

//         If you have any Questions, Feel Free to ask.
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more:'B&W ILLUSTRATION black and white illustration that include JPG + PNG only',
//         orderFeats: [
//           '2 concepts included',
//           'Logo transparency',
//           '3D mockup',
//           'Vector file',
//         ],
//       },
//       {
//         _id: 'i111',
//         category: 'Illustration',
//         title: 'I will create illustration in distressedunrest style using photoshop',
//         price: 100,
//         owner: {
//           _id: 'u102',
//           fullname: 'artchtho',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/aed13720884fc63f7d2dfc4bb65e3a9d-1596144825022/013bfdd4-4d09-4005-83a5-0ce305fa8a5c.png',
//           level: 'Level 2 Seller',
//           rate: 5,
//           loc: 'Indonesia',
//           memberSince: 'Jul 2020',
//           avgResponceTime: '1 hour',
//           lastDelivery: 'about 31 minutes',
//           about: `
//           I am a freelance design always intersecting to make designs for shirts (clothing
//           merchandise etc.) and album covers`,
//         },
//         daysToMake: 4,
//         imgs: ['https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/166653988/original/a0c877a8aa136e92ae209ed51d483ab38b4677ea/create-creative-tshirt-designs-using-adobe-photoshop.jpeg',
//         'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/166653988/original/db946f8383f06254d23282c6705477eb31c4a548/create-creative-tshirt-designs-using-adobe-photoshop.jpeg',
//         'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/166653988/original/42fb3f9aa830f64208d93bc16b234822642cbe9b/create-creative-tshirt-designs-using-adobe-photoshop.jpeg',
//         'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/e3b5689582874affff114948e60513c9-1656988348/Logo%201/create-creative-tshirt-designs-using-adobe-photoshop.png',
//         
//         ],
//         description: `
//         hello anyone, welcome to me event!

//         I am a freelance design always intersecting to make designs for shirts (clothing 
//         merchandise etc.) and album covers. i've been working as freelance designer since 2015,
//         and i also was working with many brand form all around the world.

//         Don't worry about my work, my original work from my hands.

//         I offer exclusive t-shirt designs for bands and online stores here.

//         Please contact me before placing an order !!!
//         Select the gold Package if you are looking for results of the same quality as shown in
//         my portfolio.

//         NOTE:
//         For best results please give me a clear reference picture and all the details you need.
//         If you have other ideas in your mind, please contact me first before placing an order

//         Regards
//         Abizar mauz
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more:'gold Get JPG or transparent PNG files, PSD file, source file and 5 revision (add color scheme)',
//         orderFeats: [
//           '1 initial concept',
//           'Source file',
//           'High resolution',
//           'Enhanced detailing',
//           'Commercial use'
//         ],
//       },
//       {
//         _id: 'i112',
//         category: 'Illustration',
//         title: 'I will create digital illustrations based on your request',
//         price: 30,
//         owner: {
//           _id: 'u102',
//           fullname: 'moimoi13',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/7d48d79c0576ec6efa2b51999dd2d935-1651757405327/691db452-bbe0-405a-b4b5-cb24551453c5.jpg',
//           level: 'Top Rated Seller',
//           rate: 5,
//           loc: 'Philippines',
//           memberSince: 'Dec 2016',
//           avgResponceTime: '6 hour',
//           lastDelivery: 'about 1 hour',
//           about: `
//           Hi! I'm Moimoi, I'm a Christian, fulltime illustrator and seller here in Fiverr. I
//           am super passionate about visual arts. I love illustrating art that has meaning to
//           it. I specialize in digital painting. I have experience in making illustrations for
//           posters, children's books and book covers. I strictly do NOT do NSFW illustrations 
//           and illustrations with sexual or malicious content. Feel free to message me if you 
//           have any inquiries! Have a great day!`,
//         },
//         daysToMake: 7,
//         imgs: ['https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/72157391/original/c5381a78cacdd5d810716d64a78096a0c0dd38da/create-digital-concept-art-to-illustrate-your-idea.jpg',
//         'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/72157391/original/19835b216140b571ee4a888a1e7b682519f5a7b3/create-digital-concept-art-to-illustrate-your-idea.jpg',
//         'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/8543973f5d53596ca8bbe1ce5935f313-1653985542/illustration2_rev2/create-digital-concept-art-to-illustrate-your-idea.jpg',
//         'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/52eae5d966765c8e123e3ddddeb2cc25-1653631398/logo/create-digital-concept-art-to-illustrate-your-idea.png',
//         'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/5318f95d6d16ed332a67a19c40d4222f-1651473772/illustration1_rev1/create-digital-concept-art-to-illustrate-your-idea.jpg'

//         ],
//         description: `
//         I will create illustration art of your request, Can be characters, backgrounds, items,
//         scenes, book cover illustrations, etc. It can also be a combination of both character 
//         with background.

//         - One restriction though is I don't create nsfw/nudity works or illustrations with 
//           malicious content.

//         - If possible, message me before you place an order so that we can discuss the project
//           first.

//         - I do give discounts for projects with multiple illustrations depending on the level 
//           of detail needed.

//         - If you have any questions, do not hesitate to message me! :)

//         Thank You! God Bless!
//         
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more:'Colored illustration in High resolution and unlimited revision. WITH background and source file',
//         orderFeats: [
//           'Background/scene',
//           'Source file',
//           'High resolution',
//           'Color',
//           'Commercial use'
//         ],
//       },
//       {
//         _id: 'i113',
//         category: 'VoiceOver',
//         title: 'I will record a youthful millennial american male voice over',
//         price: 100,
//         owner: {
//           _id: 'u102',
//           fullname: 'gregjohnsonvoic',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/2b586cd36f37708ef8d1152227c28bde-632152271601095777.552085/964B45C1-A629-4615-B995-AD934F51339D',
//           level: 'Top Rated Seller',
//           rate: 5,
//           loc: 'United States',
//           memberSince: 'May 2017',
//           avgResponceTime: '4 hour',
//           lastDelivery: 'about 2 hour',
//           about: `
//           I am a voiceover artist, composer, and professional audio engineer. I have done
//           voice work for national and regional brand campaigns for the likes of Scion, 
//           Subway, 3M, and Fender guitars.
//           `,
//         },
//         daysToMake: 3,
//         imgs: ['https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/uytgkqlsdlndnklrfnv1/record-a-youthful-american-male-voice-over.png',
//         'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/97253631/original/7851fa65081dc3eeec0858a9ee98de34d6b31e3d.jpg',
//         'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/97253631/original/7851fa65081dc3eeec0858a9ee98de34d6b31e3d.jpg',
//         'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/97253631/original/7851fa65081dc3eeec0858a9ee98de34d6b31e3d.jpg'

//         ],
//         description: `
//         Hello! I'm a professional voice-over artist and audio engineer, with national and 
//         regional TV and radio credits for brands such as Toyota, Subway, Fiverr, Panasonic, 
//         and more.

//         My main voice style can be described as friendly, informational, conversational, casual
//         and relatable male voiceover. Overall, a young male voice. My voice has a youthful 
//         quality that lends itself heavily to millennial based advertising, especially for 
//         kickstarters, explainer videos, or just videos that require a young, approachable, and 
//         above all else, unique voice to help your video or presentation stand out from the rest.

//         My other distinct voice style is that of an anthemic one. I have a distinctive young 
//         anthemic tone that can really inject some determined and heartfelt sounding delivery, 
//         great for brand anthems and especially for anthemic videos targeted towards younger 
//         demographics, generation Z (gen-z), and millennials.

//         I reserve the right to deny any order request for any reason and at any time.

//         Things that I cannot offer on Fiverr:

//         - ROBOCALL AND CALL SPAM ORDERS ARE NOT ACCEPTED
//         - Sexual or vulgar material
//         - Audio sync to video without scratch VO
//         - SFX
//       
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more:'Voiceover',
//         orderFeats: [
//           'HQ audio file (WAV format)',
//           'Number of words 100'
//         ],
//       },
//       {
//         _id: 'i114',
//         category: 'VoiceOver',
//         title: 'I will record a professional american english female voice over',
//         price: 50,
//         owner: {
//           _id: 'u102',
//           fullname: 'bethanyvo',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/71236951d99118b1f77089773071b411-1655959111688/63806bb5-43b7-416c-84b4-d55c22c253c9.png',
//           level: 'Top Rated Seller',
//           rate: 5,
//           loc: 'United States',
//           memberSince: 'Mar 2021',
//           avgResponceTime: '1 hour',
//           lastDelivery: 'about 1 hour',
//           about: `
//           Hello!:) I'm Bethany, a full time, American Female Voice Over Talent with recent 
//           clients such as PepsiCo, Duolingo, Marriott, Pandora, Mars, Shell, TikTok and more!

//           With over 15 years of stage and voice acting experience and recording hundreds of 
//           voiceovers and narrations for large and small businesses all over the world, I have 
//           the expertise needed to complete your project quickly, accurately, and in the tone 
//           and style you're looking for with exceptional quality and world class service.

//           Feel free to reach out with any questions or place your order now!:)
//           `,
//         },
//         daysToMake: 2,
//         imgs: ['https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/201748988/original/3340f5ce07c7931733a9e42e5702d444679defd1.png',
//         'https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20220716/voice%20over,%20female%20voice%20over,%20voice%20over%20female,%20american%20female%20voice%20over,%20female%20voice%20over%20american%20CRI_wz95yk.jpg',
//         'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/201748988/original/eeb09cd9136fc5b94ff3dedd55a880cbffc675f9.png',
//         'https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20220716/female%20voice%20over,%20voice%20over,%20voice%20over%20female,%20star_xkvv7l.jpg'

//         ],
//         description: `
//         Ready For the Perfect American Female Voice Over for Your Needs? Hey there!:) I'm 
//         Bethany, an experienced full-time voice talent with recent clients such as PepsiCo, 
//         Duolingo, Marriott, Pandora, Shell, Mars, Cetaphil and many more!

//         About My Voice:
//         I have a warm, conversational, engaging tone with dynamic performance capabilities 
//         ranging from natural/casual/friendly, corporate/informative, energetic/motivational, 
//         or serious and thought provoking- and I love doing character work as well!

//         About My Service:
//         Providing you with an exceptional quality voiceover and outstanding professional service
//         is what makes me happy! Whether your needs are commercial, corporate or character- I 
//         will thoroughly analyze your script and brief to give you the exact read you're looking 
//         for that will engage and connect with your audience, make a lasting impression, and will 
//         make your project shine!

//         A Basic Order Always Includes:
//         ✔️Cleanly Edited, High Quality .wave Audio File Mastered to Broadcast Quality Standards
//         ✔️48 Hour Delivery
//         ✔️1 Revision
//         ✔️Commercial Rights for Business Use (Paid Ads Require Broadcast Rights)

//         I\'d love to work together with you! Enter your word count, and let\'s get started!:)  
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more:'Voiceover',
//         orderFeats: [
//           'HQ audio file (WAV format)',
//           'Number of words 50'
//         ],
//       },
//       {
//         _id: 'i115',
//         category: 'VoiceOver',
//         title: 'I will record professional animation or character voice over',
//         price: 20,
//         owner: {
//           _id: 'u102',
//           fullname: 'emma_sage',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/1cdca50044b8d9e1f0cd0dcb96d1172c-1292304581656624444.581808/39E4AE5E-DB90-4E1B-A1BF-325D7DD551FD',
//           level: 'Top Rated Seller',
//           rate: 5,
//           loc: 'United States',
//           memberSince: 'Jun 2022',
//           avgResponceTime: '1 hour',
//           lastDelivery: '3 days',
//           about: `
//           A fresh new voice in the the "spicy romance" space, Emma is currently having an 
//           amazing time producing sexy audio for podcasts, promotions, indie literature, and
//           personal use pieces! Described as having a voice that will make "your hair stand
//           straight up," Emma leads listeners deep between the lines and leaves them staying 
//           up late to prolong the fantasy...

//           Self-publishers love Emma for her reasonable audiobook rates and her energetic 
//           collaboration with creators!
//           `,
//         },
//         daysToMake: 3,
//         imgs: ['https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/q7py1zmo0sytodimunny/record-a-sultry-female-voice-over-for-you.png',
//         'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/263097326/original/1a426754dd506c05f4b8321fc31edbf89fc62fce.jpg',
//         'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/263097326/original/29be4cc19a1446f2196a781052dc4b15dddda155.jpg',
//         'https://fiverr-res.cloudinary.com/q_auto,f_auto,dpr_2.0/general_assets/gig_gallery_package/assets/audio-delivery-bg.png'

//         ],
//         description: `
//         Need a femme fatale or a confidently sensual heroine? A fresh voice in the spicy 
//         romance and erotica story space, Emma Sage's sultry tone immerses listeners so 
//         deeply between the lines, they'll stay up late just to prolong the fantasy...

//         Cross-cutting to meditation, luxury, and e-learning material, Emma can be hired for
//         any commission that is looking for an uniquely attractive voice.

//         Expert at proofreading. Fluent in audio mixing.

//         "I'm tired of snuggling in for a sexy romance novel audio...only to find that the 
//         narrator's tone makes me dry up like the Sahara..."

//         -Emma
//        
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more:'Voiceover',
//         orderFeats: [
//           'HQ audio file (WAV format)',
//           'Number of words 500'
//         ],
//       },
//       {
//         _id: 'i116',
//         category: 'VideoExplainer',
//         title: 'I will produce a professional explainer video with voiceover',
//         price: 215,
//         owner: {
//           _id: 'u102',
//           fullname: 'levmusic',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/04806850cd4fa9b652678f95fb458698-1640174297729/4a41cbaa-b5b3-473c-9308-51c72f3797ce.jpg',
//           level: 'Top Rated Seller',
//           rate: 5,
//           loc: 'Israel',
//           memberSince: 'Oct 2015',
//           avgResponceTime: '1 hour',
//           lastDelivery: 'about 22 minutes',
//           about: `
//           My name is Eli Lev and I am doing magic with visuals.
//           I have a huge passion for music and video editing.
//           I love what I do, so you'll probably going to love what I will do with your next 
//           project :)
//           `,
//         },
//         daysToMake: 7,
//         imgs: ['https://fiverr-res.cloudinary.com/videos/so_13.510427,t_main1,q_auto,f_auto/vvpt5jlotafd8mn0jslg/create-professional-live-action-explainer-video.png',
//         'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/113419065/original/006fa4e224a3a4913bf3a55824922b2e2f7d704d/create-professional-live-action-explainer-video.jpg',
//         'https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20181027/Revision_policy_-_live_action_xwb6um.jpg',
//         'https://fiverr-res.cloudinary.com/videos/t_smartwm/t_main1,q_auto,f_auto/tivlihe6dih4x63bjvig/create-professional-live-action-explainer-video.png'

//         ],
//         description: `
//         Engage your audience with a professional explainer video!

//         A good explainer video should be engaging, and easy to watch and follow.

//         You don't have to invest a lot of money and energy to get a good video, it should be 
//         simple and affordable for every business 😇

//         🙋‍♂️I am here to streamline this process!
//         Check my portfolio in the FAQ section below.

//         ✅What do you get?
//         - Professional explainer video using relevant stock footage.
//         - Real human-being voice-over.
//         - Background music.
//         - Budget-friendly price
//         - Creativity, experience, and great communication.

//         ✅What do we need from you?
//         - To fill out our order requirements! that's all.

//         ✅Extra services:
//         - 📝Scriptwriting - 150 USD
//         - 🎬Visual storyboard - 75 USD
//         - 🎦Screen-recording - 55 USD
//         - 🎶Sound effects - 55 USD
//         - ⭐Animated captions - 45 USD
//         - ⭐Subtitles - 35 USD
//         - ⭐Animated intro - 65 USD

//         If you need anything else, feel free to contact me :)
//         Let's create your next explainer video, together!  
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more:'Up to 30 seconds Explainer video Live action explainer video with relevant HD footage, voice over and background music.',
//         orderFeats: [
//           '90 seconds running time',
//           'Video editing',
//           'Background music',
//           'Sound design & mixing'
//         ],
//       },
//       {
//         _id: 'i117',
//         category: 'VideoExplainer',
//         title: 'I will create an engaging brand explainer or commercial video ads',
//         price: 60,
//         owner: {
//           _id: 'u102',
//           fullname: 'rimuss',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/76755d9decaff4f417e619e9387ef808-1143963231650367782.950832/5CFA23AD-DF70-4016-B25E-7BF1E5A1DE3D',
//           level: 'Level 2 Seller',
//           rate: 5,
//           loc: 'Nepal',
//           memberSince: 'Sept 2021',
//           avgResponceTime: '1 hour',
//           lastDelivery: 'about 3 hour',
//           about: `
//           Hi! Rimuss here.

//           I am a professional Video Editor with experience of over three years.
//           And I've worked with the line of brands creating an explainer, sales, commercial, 
//           short ad videos, social media video, corporate video, marketing videos, 
//           promotional video for them.

//           I will bring your ideas to perfection.

//           My aim is to satisfy my clients with my work as Client's satisfaction is my TOP 
//           MOST PRIORITY.
//           And I'm here to do it for YOUR Brand and YOUR projects.

//           Check my profile contact me for more information or feel free to order.
//           `,
//         },
//         daysToMake: 3,
//         imgs: ['https://fiverr-res.cloudinary.com/videos/so_57.422045,t_main1,q_auto,f_auto/ud6xihjc5oafjxdhk0dz/create-an-explainer-or-promo-video-for-your-business.png',
//         'https://fiverr-res.cloudinary.com/videos/t_smartwm/t_main1,q_auto,f_auto/g9cs4vtqmln54sej1dpm/create-an-explainer-or-promo-video-for-your-business.png',
//         'https://fiverr-res.cloudinary.com/videos/t_smartwm/t_main1,q_auto,f_auto/wj2up8cq2egg6cxzfosl/create-an-explainer-or-promo-video-for-your-business.png',
//         'https://fiverr-res.cloudinary.com/videos/t_smartwm/t_main1,q_auto,f_auto/mk9o6xiciq8ht1vimgby/create-an-explainer-or-promo-video-for-your-business.png',
//         'https://fiverr-res.cloudinary.com/videos/t_smartwm/t_main1,q_auto,f_auto/pyofdcbf5akmpy5pnm9u/create-an-explainer-or-promo-video-for-your-business.png'

//         ],
//         description: `
//         If you need an Commercial or Explainer Video to inspire your viewers, engage or 
//         surprise them, then look no further.

//         We are a Team of Professional Video Editors, Talented Voiceover Artist & Creative 
//         Script Writers with 5+ years experience.

//         And we've worked with a line of brands creating an explainer or commercial video ad 
//         for their business and marketing. Our team can produce HQ Video for any platform such 
//         as Youtube/ Facebook/ Instagram/ Tiktok/ Amazon and many others.

//         What do you get?
//         · 1080p HD Stock Footages from sites like gettyimages, iStock, Artgrid.io, envato 
//           elements
//         · Script Writing
//         · Professional Voice Over (Male/Female)
//         · Custom fonts and colors
//         · Research-Based End product for your particular niche
//         · Budget-Friendly price
//         · Business outro

//         Here're some example of niches we cover:
//         · Business advertisement
//         · Corporate video
//         · Product Video
//         · Mobile App Promotional
//         · Real Estate Commercial
//         · Fitness/ Gym
//         · Slideshow
//         · Brand Video & many more

//         Every material we will be providing is Licensed materials and you are FREE to use anywhere.

//         Let's create some art, together.

//         Just drop me a quick message if you have any questions.

//         Kind Regards,
//         Rimuss
//        
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more:'UP TO 60 SECONDS EXPLAINER VIDEO 60 Sec Promo Explainer Video + Add Logo & Music + Script Writing +Voice Over +HD 1080p Stock Footage',
//         orderFeats: [
//           'Video editing',
//           'Script writing',
//           '60 seconds running time',
//           'Background music'
//         ],
//       },
//       {
//         _id: 'i118',
//         category: 'VideoExplainer',
//         title: 'I will create a professional 2d animated explainer video 24hours',
//         price: 150,
//         owner: {
//           _id: 'u102',
//           fullname: 'joysolomn',
//           imgUrl:
//             'https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/074b1c7ff9c17fcdfa718715fef919e5-1636632279994/0b09ea8b-0da5-4810-ac81-a3780c8aeaed.jpg',
//           level: 'Level 2 Seller',
//           rate: 5,
//           loc: 'Nigeria',
//           memberSince: 'Mar 2020',
//           avgResponceTime: '1 hour',
//           lastDelivery: 'about 8 hour',
//           about: `
//           Hello,
//           I am Joy Solomon, CEO of Jay Studios.
//           We can help you advertise your products and service through high-quality explainer
//           videos which will be visually appealing accompanied by soothing sound effects and 
//           background music.
//           I will get your message across to your target audience precisely in an enjoyable 
//           fashion which will create a lasting impact that will boost your sales over the charts.
//           `,
//         },
//         daysToMake: 3,
//         imgs: ['https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/p4ted6v7oabxb917ezmy/create-a-professional-2d-animated-explainer-video.png',
//         'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/148207065/original/35ea25c11ed9d97f674fe821416f7cce6adfbc0c/create-a-professional-2d-animated-explainer-video.png',
//         'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98530437/original/fceb97e45fe34ed78bc3599730f4d4577b183769/here-is-our-reel.png',
//         'https://fiverr-res.cloudinary.com/videos/t_smartwm/t_main1,q_auto,f_auto/k9mgueawfrtfgkm3emso/here-is-our-reel.png'

//         ],
//         description: `
//         Looking for something spectacular? then you are in the right gig.

//         I'm Joy Solomon CEO of Jay Studios,
//         We are full time Fiverr professional sellers, We have completed hundreds of projects both 
//         online and off the internet.
//         Our videos have been featured on CBS, TIME, FORBES, CHEDDAR and numerous animated 
//         youtube channels.

//         Your satisfaction is my priority- We give unlimited revisions in all of our gigs.
//         Your order is only completed when you are satisfied with the service(s) you have received.

//         The Follow Up Plan-  Not only will you get a killer animated explainer video but we 
//         provide a comprehensive guide upon completion to make sure you get the most out of your
//         video.

//         Ready to get started?

//         All Packages Include:

//         - Custom Animation
//         - Voiceover 
//         - 1080HD File (Youtube and Social Media Ready)
//         - Logo and Matching Branding
//         - Music
//         - Revisions
//         - Commercial Rights

//         Send me any questions at any time 
//         `,
//         tags: ['logo-design', 'artisitic', 'proffesional', 'accessible'],
//         likedByUsers: ['mini-user'],
//         more:'studio recorded voice over, sound effects, character animation and background music',
//         orderFeats: [
//           '60 seconds running time',
//           'Voice over recording',
//           'Storyboard',
//           'Illustrated background included',
//           'Music/sound design included'
//         ],
//       },
//     ]