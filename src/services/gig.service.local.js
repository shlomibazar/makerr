
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
    addGigMsg,
    // getLabels,
}
window.cs = gigService


async function query(filterBy = { txt: '', price, label }, sortBy) {


    var gigs = await storageService.query(STORAGE_KEY)

    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        gigs = gigs.filter(gig => regex.test(gig.title) || regex.test(gig.description))
    }
    if (filterBy.budget) {
        gigs = gigs.filter(gig =>
            (gig.price >= filterBy.budget.minPrice) &&
            (gig.price <= filterBy.budget.maxPrice)
        )
    }
    if (filterBy.label) {
        gigs = gigs.filter(gig =>
            gig.labels.includes(filterBy.label))
    }
    if (filterBy.delTime) {
        gigs = gigs.filter(gig =>
            gig.daysToMake <= filterBy.delTime)

    }
    if (!sortBy) return gigs
    else
        if (sortBy.price) {
            var sortedBy = Object.keys(sortBy)[0]
            gigs.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
        }
    if (sortBy.rate) {
        var sortedBy = Object.keys(sortBy)[0]
        // gigs.sort((a, b) => (a.owner.rate > b.owner.rate) ? 1 : ((b.owner.rate > a.owner.rate) ? -1 : 0))
        gigs.sort((a, b) => (b.owner.rate > a.owner.rate) ? 1 : ((a.owner.rate > b.owner.rate) ? -1 : 0))
    }
    if (sortBy.createdAt) {
        var sortedBy = Object.keys(sortBy)[0]
        console.log('sorteeed', gigs[0].daysToMake.charAt(1))
        gigs.sort((a, b) => (a.daysToMake.charAt(0) > b.daysToMake.charAt(0)) ? 1 : ((b.daysToMake.charAt(0) > a.daysToMake.charAt(0)) ? -1 : 0))
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


(async () => {
    await storageService.post(STORAGE_KEY, {
        image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/3171448/original/a41a38f3733bb97279a49d1449f7337dece50693.jpg",
        images: [
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054167/gigs%20images/gig%201/f672898aa2f4756e249b9c2edb27d3339860de8d_bgjfwr.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054167/gigs%20images/gig%201/design-a-professional-business-flyer-or-poster_frbudj.jpg",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054167/gigs%20images/gig%201/final_logo_dnmfrp.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054167/gigs%20images/gig%201/design-a-professional-business-flyer-or-poster_1_vq55mr.jpg",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054167/gigs%20images/gig%201/final_logo1_emcful.webp",
        ],
        title: "I will design 3 modern minimalist flat logo designs",
        category: "Graphics & Design",
        subCategory: "Logo Design",
        description: "Hi there ! Thanks for stopping by !!\nA Team of Talented Graphic Designer with 8+ years of experience in Graphic Industry, expertise as Logo Maker, You'll get creative & AWESOME logo design for your business.\nMy portfolio : https://www.fiverr.com/users/design_desk/portfolio/NjFiYjE4NmMwZTgwMDUwMDAxZTMzMjJh\n★ Why Us? ★\nTalented Logo Maker Team\nFully custom made, creative, original, UNIQUE and AWESOME designs\nProfessional customer support 24/7\nHigh Quality work\n100% money back policy if not satisfied\n★ WHAT DO YOU GET? ★\n✔ Highly Professional, UNIQUE & High Quality designs\n✔ UNLIMITED revisions until u r 100% satisfied\n✔ Fast turn around time 24 to 48 hours only.\n✔ 100% original & unique vector design from Adobe Illustrator\n✔ Vector Source Files (scalable without any quality loss) (AI, EPS, PDF) for the final design ✔ PROFESSIONAL Communication & Outstanding Customer Support ✔ Guaranteed High Quality work\nIf you have any question,\nFeel free to★ Contact Me! ★I'll be happy to help !\nLet's get started!\n-Your Logo Maker",
        price: 33,
        daysToMake: 9,
        labels: ["graphics & design"],
        owner: {
            id: "u101",
            fullname: "design_desk",
            rate: 3,
            level: 3,
            isOnline: false,
            clients: 
            ["https://res.cloudinary.com/djyj6l7de/image/upload/v1670100587/logos/logo3_tuit0t.png",
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
                reviewedAt: "Published 4 days ago"
            },
            {
                name: "jacobmnb",
                country: "United Kingdom",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
                review: "I thought this service was amazing, I bought the basic option just hoping for a basic logo, but the seller went above my expectations and provided me with a bunch of concepts that were better than I could have imagined, for £7.90 I think this service is a must-buy for anyone needing a professional-looking logo and not wanting to spend a huge amount",
                reviewedAt: "Published 2 months ago"
            },
            {
                name: "ashtonpeckham",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "The seller was very responsive. We had revisions after the initial designs were delivered and the seller made them very quickly. The logo we selected is perfect for our current needs. Recommend including your vision in the initial request so you don't end up with ideas that you don't like. There were only 2 real contenders because the Fiverr site wouldn't allow me to attach my hand drawn idea. The paperclip icon was essentially rendered inactive, even after several attempts. This is no fault of the designers; i should have been even more descriptive with my request when I was unable to attach files.",
                reviewedAt: "Published 1 week ago"
            },
            {
                name: "borowski10",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "Ultimately, I am very happy with the final logo I received. However, the seller's communication could have been better. There were a few times I asked for specific revisions and I was sent the same thing or something else that I didn't ask for. It took about 2 weeks for me to finally get what I was looking for. In the end, I got what I paid for and I am grateful for the service!",
                reviewedAt: "Published 2 days ago"
            },
            {
                name: "fowlplay_uk",
                country: "United Kingdom",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
                review: "VD was great. I had a very specific design in mind already that I needed recreating professionally and they did not disappoint. Even when I started to get picky with the design, nothing I requested was ever too much trouble. We went through many revisions to get it to exactly how I wanted it and every interaction we had was effortless. This is the first project I'd commissioned so wasn't really sure on the correct etiquette, yet VD made things so easy for me. Can't recommend these guys enough for that",
                reviewedAt: "Published 2 months ago"
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

    })
    await storageService.post(STORAGE_KEY, {
        image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/103152154/original/b89645456b7f6906afa872771737e980b6f57cfb.jpg",
        images: [
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054419/gigs%20images/gig%202/a4ff245eb7e96dc919d551211a923904ca6dfb1c_zskpqe.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054419/gigs%20images/gig%202/2c07ba9a9f60bd2f92913e40bc5119c318b80ea7_thdeup.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054419/gigs%20images/gig%202/Sample-01_bppf8s.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054419/gigs%20images/gig%202/6f92226a5d483a44920142d6fd1186748c0ebf36_idsf4r.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054419/gigs%20images/gig%202/Rev8-01_h8dw8d.webp",
        ],
        title: "I will create modern unique and creative logo design",
        description: "Hi esteemed buyer!\nLooking for modern unique and creative 2d or 3d logo design? Yes, you're at the right place.\nHaving a vast experience with hundreds of satisfied customers across the globe, I extend my services to design modern unique and creative logo design to represent your brand idea in a befitting manner.\nWhat proves my individuality over others?\nQuick delivery, quality work and transforming your brain idea into a 3d creative unique and modern logo design are my attributes.\nMY GIG OFFERINGS ARE:\nBest customer care\nRevisions within 24 Hours\n100% satisfaction guaranteed\nModern unique and creative designing ideas\nLogically and aesthetically hypnotizing logos\n1 free revision after completion of order\nEditable and re-sizeable vector files\nFont download link included\nHigh resolution final files in zip\nNote: For Complex Illustrations and Mascots, please discuss in inbox before placing order! It is also not included in our packages.\nHave queries? Contact us in inbox anytime!\n★Hearing from you would be an absolute pleasure, Go ahead and ORDER NOW!★",
        price: 84,
        daysToMake: 6,
        labels: ["digital marketing"],

        owner: {
            id: "u102",
            fullname: "soduzai_gfx1",
            rate: 5,
            level: 2,
            isOnline: true,
            clients: 
            ["https://res.cloudinary.com/djyj6l7de/image/upload/v1670100586/logos/61b89893fa68023dce57574e_b1sxxt.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670100586/logos/logo1_vhdcgz.png",
            ],
            imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a2dd1a0482bbfe54e61c6c2d6e64696e-1640431251801/943f73b5-dc43-4fe4-9728-9a58f0aafdbc.jpg",
            loc: "Pakistan",
            memberSince: "Oct 2017",
            avgResponceTime: "1 hour",
            lastDelivery: "about 25 minutes",
            about: "I am a professional graphics designer from PakIsTaN... Designing is not only my job, it's my Passion. All I need from you is a rough sketch of your idea. Then you can just relax and see the magic happening. Not only you'll get stunning and professional designs, but also you'll have top class custome",
        },

        lastDelivery: "about 25 minutes",
        reviewers: [
            {
                name: "devsreads",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "Thank you SO MUCH to the seller. He was so patient and willing to work and correct as many times as we needed as some things got miscommunicated and he easily fixed them. Thank you!!!",
                reviewedAt: "Published 3 days ago"
                img:" "
            },
            {
                name: "raymondyslas",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "This designer is awesome. I have got my idea materialised in an efficient manner and the way I wanted. Seeing this logo, I would say this is the best designer to do any kind of graphics work.",
                reviewedAt: "Published 1 month ago"
            },
            {
                name: "gbsol579",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "This designer is so quick and efficient in his work. My order was delivered in few hours. The design is hypnotizing and truly reflects my business idea. Highly recommended!",
                reviewedAt: "Published 1 month ago"
            },
            {
                name: "antoniodixon65",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "This is a really good design. The designer owes the skills needed to actually understand and then materailize a buyer's idea. Commendable and highly recommended.",
                reviewedAt: "Published 1 month ago"
            },
            {
                name: "allendrozdowski",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "This designer has done a fantastic job. I like the design sense and colour combination of the designer. This is what I was looking for. I highly recommend him for graphics related work.",
                reviewedAt: "Published 1 month ago"
            }
        ],
        tags: [
            {
                name: "modern logo"
            },
            {
                name: "creative logo"
            },
            {
                name: "logo design"
            },
            {
                name: "unique logo"
            },
            {
                name: "logo maker"
            }
        ]
    })
    await storageService.post(STORAGE_KEY, {
        image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125798593/original/fea4f6af37e201fa9cb71a85583fedc171da2a26.jpg",
        images: [
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054750/gigs%20images/gig%204/resume-cover-letter-and-linkedin_psvgfc_zwmpvy.jpg",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054749/gigs%20images/gig%204/write-professional-resume-cover-letter-and-linkedin_ov8lwv_oeztsi.jpg",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054749/gigs%20images/gig%204/c72a07b6be3e3cb3c01fe336c4cf558a83ff7526_rdmauy.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054749/gigs%20images/gig%204/c557a20a42380ad26cc5055d33206eadc4c72542_r8mgkh.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054749/gigs%20images/gig%204/9345effa1d9e0d5f3a2fc0cdeb46440786e48f45_lzvm2s.webp",
        ],
        title: "I will write professional resume cover letter and linkedin",
        description: "ModernMarvel heartily welcomes you to Minimalist Modern Logo Design gig.\nWe are Brand Creators and professional business consultants. Each business has his own story to tell and having high recall value is prime purpose behind getting a LOGO. Thus, We believe in creating simple yet effective masterpiece which blown away your customers mind.\nYour idea of getting Modern memorable and attractive logo design is just one step away. So, Lets discuss and choose a best design for your business.\nOur recommendation BRANDING PACK @ $65 ONLY:\n5 BRANDED logos with minimal designs + vector source files\nAttractive Social media covers (FB + Twitter)\nProfessional stationery design (B card + letterhead)\nUnlimited revision rounds\nExclusive customer support\nRefund & Package selection guidelines:\nIf the designs are as per your initial shared brief, refund wont be a possible option. You can ask for revision if i missed out anything.\nMy samples are from my premium / standard package.\nWe are closed on Sunday.\nMy key skills:\nMinimalist Modern Logo Design | Minimal | Modern | Typography | Line art | Custom logo | Vintage |\nKeen to Get Started!",
        price: 50,
        daysToMake: 2,
        labels: ["writing & translation"],
        owner: {
            id: "u103",
            fullname: "modernmarvel",
            rate: 1,
            level: 2,
            isOnline: false,
            clients: 
            ["https://res.cloudinary.com/djyj6l7de/image/upload/v1670100586/logos/61ec3e91fd9ab46648b2878c_xbdc2k.webp",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670100586/logos/61a87d8f84d88e25cd784b0d_k7elnj.webp",
            ],
            imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d366617946e54cbc9aa114f27259e3ef-1552848300306/3c155f72-15c9-47d0-8f68-b75a519a7999.jpg",
            loc: "India",
            memberSince: "Mar 2019",
            about: "I am a professional artist having rich experience in hand sketched and digital artwork. I have served tons of businesses with smarter business solutions. I am here to get the global exposure and would like to contribute more towards our creative community. Thanks.",

            lastDelivery: "about 25 minutes",
        },


        lastDelivery: "about 22 minutes",
        reviewers: [
            {
                name: "bartstrijbos",
                country: "Netherlands",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
                review: "Use your revisions and communication, and you will have something that works for you! I recommend modernmarvel for the price they ask! I did not know what to expect from my first buy on FIverr. The previews where what I was going for, so I thought why not give it a try. The initial delivery had two good concepts and three concepts I did not like. The two good concepts however, where not really what I wanted though. I submitted a revision proposal and hoped for the best. This is where this seller shines! From the initial designs, he worked quickly with every suggestion I made for revisions and was good in communication. I slowly saw my project evolving to something I love. Recommended!",
                reviewedAt: "Published 2 months ago"
            },
            {
                name: "v_winko33",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "Working with this seller was a great experience in that he was quick to respond (considering the 11+ hr time zone difference), friendly, reliable, and professional. He created some concepts with literally no reference the first time around, and the second time around I gave him more of an idea of what I was looking for and found the ideal logo. You get what you pay for, and the price I think is a very good deal that's hard to find. Communication +asking questions is key to get all that you want and need from this great offer. Although I am satisfied with the logo, I probably would've liked something more like the work he shows in his second picture on his profile/gigs. I do recommend him!",
                reviewedAt: "Published 3 weeks ago"
            },
            {
                name: "brendanpaull",
                country: "Japan",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ef-1f1f5.png",
                review: "Seller was extremely communicative and always responded very quickly even on his/her day off (Sunday). While I got something that will get my started and I suppose I got what I paid for (the price was definitely quite low), I would be hard pressed to call the designs I got as \"modern\" or \"minimalist\" like the logo presented in the profile. They felt like clip-art from 10 to 15 years ago attached to my website name.",
                reviewedAt: "Published 1 month ago"
            },
            {
                name: "tracyblehm",
                country: "Canada",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
                review: "I was a little nervous as I had never hired anyone before and have had bad experiences on other platforms. However this was absolutely marvelous. I loved the design. It was shocking how fast it was done and how amazing it turned out. I will definitely be hiring them again for my other projects that are coming up. Thank-you!!",
                reviewedAt: "Published 2 months ago"
            },
            {
                name: "jai_s22",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "Using this service was a pretty decent experience. It took a bit longer than I wanted to finally get the final design. I had to go back and forth for a week trying to find the correct revision of the design. At first, I thought the experience of the designer was not the best due to finding some logos with minimal effort. Once I messaged the designer that I felt that the designs that they were producing were not satisfying me, they then were able to put a lot of effort into my ideas. I personally had to come up with the design of my logo instead of them using their experience and trusting them to come up with one themselves. Eventually, they did deliver so I am happy with the way it finished.",
                reviewedAt: "Published 2 weeks ago"
            }
        ],
        tags: [
            {
                name: "modern logo"
            },
            {
                name: "custom logo"
            },
            {
                name: "logo design"
            },
            {
                name: "minimalist logo"
            },
            {
                name: "website logo"
            },
            {
                name: "logo maker"
            }
        ]
    })
    await storageService.post(STORAGE_KEY, {
        image: "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/142024147/original/25c0cb214ccc1e1458cb975cddec0e3e348f75ee.jpg",
        images: [
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054588/gigs%20images/gig%203/vector-logo-design_fvyxms.jpg",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054588/gigs%20images/gig%203/vector-logo-design_2_ihbwus.jpg",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054588/gigs%20images/gig%203/vector-logo-design_1_ga6mmu.jpg",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054588/gigs%20images/gig%203/1_ul6ubj_mjjndl.jpg",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670054588/gigs%20images/gig%203/Juiceys_logo_vwmero.webp",
        ],
        title: "I will do professional modern business logo design with copyrights",
        category: "Digital Marketing",
        subCategory: "Logo Design",
        level: 3,
        description: "Greetings!! Welcome to Budding Solutions.\n\"Your one-stop-shop for all your graphic needs\"\nIf you are looking for a Modern and Professional Business logo design, then you are at the right place. We focus on creating simple yet effective designs that elevate your business outlook and leave an everlasting impression.\nWe stand out from our competition due to our best-in-class Customer Support and Quality Designs.\nWhy Us?\n✔ Combination of experience and creativity\n✔ Unique and original designs\n✔ Superior customer care and satisfaction\n✔ Transparent and High-resolution image types\n✔ Different types of source files (AI, EPS, PDF and SVG)\n✔ Complete Branding Guide\n✔ Unlimited revisions until you are 100% satisfied\n✔ Full Copyrights\nMASCOT DESIGNS ARE NOT INCLUDED IN BASIC OR STANDARD GIGS.\nTHE DESIGNS SHOWN ON THE PORTFOLIO ARE FROM STANDARD OR PREMIUM PACKS.\nLogo Design | Professional Logo | Modern Logo | Badge | Hand drawn | Feminine | Signature | Business Logo\nWe look forward to working with you. Please don't hesitate to reach out at any time with any questions.\nPlease review the FAQ section for further clarification.",
        price: 151,
        daysToMake: 1,
        labels: ["graphics & design", "digital marketing", "Logo",],
        owner: {
            id: "u104",
            fullname: "pukitheman",
            rate: 3,
            level: 2,
            isOnline: false,
            clients: 
            ["https://res.cloudinary.com/djyj6l7de/image/upload/v1670100587/logos/logo3_tuit0t.png",
            "https://res.cloudinary.com/djyj6l7de/image/upload/v1670100586/logos/62d3346d90cb481b83c531e4_dg5nqq.webp",
            ],
            imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d366617946e54cbc9aa114f27259e3ef-1552848300306/3c155f72-15c9-47d0-8f68-b75a519a7999.jpg",
            loc: "India",
            memberSince: "Mar 2019",
            about: "I am a professional artist having rich experience in hand sketched and digital artwork. I have served tons of businesses with smarter business solutions. I am here to get the global exposure and would like to contribute more towards our creative community. Thanks.",

            lastDelivery: "about 25 minutes",
        },


        lastDelivery: "about 22 minutes",
        reviewers: [
            {
                name: "bartstrijbos",
                country: "Netherlands",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
                review: "Use your revisions and communication, and you will have something that works for you! I recommend modernmarvel for the price they ask! I did not know what to expect from my first buy on FIverr. The previews where what I was going for, so I thought why not give it a try. The initial delivery had two good concepts and three concepts I did not like. The two good concepts however, where not really what I wanted though. I submitted a revision proposal and hoped for the best. This is where this seller shines! From the initial designs, he worked quickly with every suggestion I made for revisions and was good in communication. I slowly saw my project evolving to something I love. Recommended!",
                reviewedAt: "Published 2 months ago"
            },
            {
                name: "v_winko33",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "Working with this seller was a great experience in that he was quick to respond (considering the 11+ hr time zone difference), friendly, reliable, and professional. He created some concepts with literally no reference the first time around, and the second time around I gave him more of an idea of what I was looking for and found the ideal logo. You get what you pay for, and the price I think is a very good deal that's hard to find. Communication +asking questions is key to get all that you want and need from this great offer. Although I am satisfied with the logo, I probably would've liked something more like the work he shows in his second picture on his profile/gigs. I do recommend him!",
                reviewedAt: "Published 3 weeks ago"
            },
            {
                name: "brendanpaull",
                country: "Japan",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ef-1f1f5.png",
                review: "Seller was extremely communicative and always responded very quickly even on his/her day off (Sunday). While I got something that will get my started and I suppose I got what I paid for (the price was definitely quite low), I would be hard pressed to call the designs I got as \"modern\" or \"minimalist\" like the logo presented in the profile. They felt like clip-art from 10 to 15 years ago attached to my website name.",
                reviewedAt: "Published 1 month ago"
            },
            {
                name: "tracyblehm",
                country: "Canada",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
                review: "I was a little nervous as I had never hired anyone before and have had bad experiences on other platforms. However this was absolutely marvelous. I loved the design. It was shocking how fast it was done and how amazing it turned out. I will definitely be hiring them again for my other projects that are coming up. Thank-you!!",
                reviewedAt: "Published 2 months ago"
            },
            {
                name: "jai_s22",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "Using this service was a pretty decent experience. It took a bit longer than I wanted to finally get the final design. I had to go back and forth for a week trying to find the correct revision of the design. At first, I thought the experience of the designer was not the best due to finding some logos with minimal effort. Once I messaged the designer that I felt that the designs that they were producing were not satisfying me, they then were able to put a lot of effort into my ideas. I personally had to come up with the design of my logo instead of them using their experience and trusting them to come up with one themselves. Eventually, they did deliver so I am happy with the way it finished.",
                reviewedAt: "Published 2 weeks ago"
            }
        ],
        tags: [
            {
                name: "modern logo"
            },
            {
                name: "custom logo"
            },
            {
                name: "logo design"
            },
            {
                name: "minimalist logo"
            },
            {
                name: "website logo"
            },
            {
                name: "logo maker"
            }
        ]
    })
})
    ()
