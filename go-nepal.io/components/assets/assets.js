import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import destination1 from './destination1.jpg'
import destination2 from './destination2.jpg'
import destination3 from './destination3.jpg'
import destination4 from './destination4.jpg'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
    destination1,
    destination2,
    destination3,
    destination4,
}

export const destinations = [
    "Pokhara",
    "Kathmandu",
    "Chitwan",
    "Lalitpur",
    "Bhaktapur",
    "Biratnagar",
    "Dharan",
    "Janakpur",
    "Nepalgunj",
    "Butwal",
    "Hetauda",
    "Dhangadhi",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Anupam Aryal", address: "Dhading, Nepal", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Prabin Tiwari", address: "Jhapa, Nepal", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Bijaya Tamang", address: "Kathmandu, Nepal", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Anupam Aryal",
    "email": "user.anupamaryal@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

// Hotel Dummy Data
export const hotelDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Grand Palace Hotel",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "New York",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Tours Dummy Data (Travel Destinations)
export const toursDummyData = [
    {
        _id: "tour_everest_base_camp",
        title: "Everest Base Camp Trek",
        destination: "Khumbu (Everest Region)",
        durationDays: 14,
        pricePerPerson: 1499,
        difficulty: "Challenging",
        bestSeason: ["Mar-May", "Sep-Nov"],
        highlights: [
            "Panoramic Himalayan vistas",
            "Sherpa culture and monasteries",
            "Iconic Everest Base Camp",
            "Scenic flight to Lukla"
        ],
        images: [destination1, destination2, destination3, destination4],
        isAvailable: true,
        description: "A legendary trek through the heart of the Himalayas to the base of the world's highest peak, blending adventure with rich Sherpa culture.",
        createdAt: "2025-04-10T06:26:04.013Z",
        updatedAt: "2025-04-10T06:26:04.013Z",
        __v: 0
    },
    {
        _id: "tour_annapurna_circuit",
        title: "Annapurna Circuit Trek",
        destination: "Annapurna Region",
        durationDays: 12,
        pricePerPerson: 1299,
        difficulty: "Moderate to Challenging",
        bestSeason: ["Mar-May", "Sep-Nov"],
        highlights: [
            "Thorong La Pass crossing",
            "Diverse landscapes and villages",
            "Hot springs at Tatopani",
            "Spectacular Annapurna massif views"
        ],
        images: [destination2, destination3, destination4, destination1],
        isAvailable: true,
        description: "A classic Himalayan loop offering dramatic mountain scenery, cultural immersion, and varied terrain from lush valleys to high passes.",
        createdAt: "2025-04-10T06:25:22.593Z",
        updatedAt: "2025-04-10T06:25:22.593Z",
        __v: 0
    },
    {
        _id: "tour_pokhara_getaway",
        title: "Pokhara Lakeside Getaway",
        destination: "Pokhara",
        durationDays: 3,
        pricePerPerson: 249,
        difficulty: "Easy",
        bestSeason: ["Year-round"],
        highlights: [
            "Phewa Lake boating",
            "Peace Pagoda sunset",
            "Paragliding (optional)",
            "Cafes and lakeside strolls"
        ],
        images: [destination3, destination4, destination1, destination2],
        isAvailable: true,
        description: "Relax by the lake with gentle adventures and serene mountain backdrops—perfect for couples and families.",
        createdAt: "2025-04-10T06:24:06.285Z",
        updatedAt: "2025-04-10T06:24:06.285Z",
        __v: 0
    },
    {
        _id: "tour_chitwan_safari",
        title: "Chitwan Jungle Safari",
        destination: "Chitwan National Park",
        durationDays: 2,
        pricePerPerson: 199,
        difficulty: "Easy",
        bestSeason: ["Oct-Mar"],
        highlights: [
            "Jeep safari",
            "Rhino and bird watching",
            "Tharu cultural program",
            "Canoe ride on Rapti River"
        ],
        images: [destination4, destination1, destination2, destination3],
        isAvailable: true,
        description: "Wildlife encounters in lush subtropical forests with guided safaris and authentic Tharu cultural experiences.",
        createdAt: "2025-04-10T06:23:20.252Z",
        updatedAt: "2025-04-10T06:23:20.252Z",
        __v: 0
    }
]



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": toursDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": toursDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": toursDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}
