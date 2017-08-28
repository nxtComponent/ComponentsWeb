// options
window._mocks = {};
window._mocks.options = {
    filterMessage: "We found {{count}} hotels for your search",

    pageSize: 10,

    sortAllowed: [
        {name: "Price", default: "true"},
        {name: "HotelName"},
        {name: "Star Rating"}
    ],

    enableListView: true,
    enableMapView: true,

    showReview: false,

    buttonText: "See Available Rooms",

    primaryAmenities: [
        {name: "Bar", icon: "bar"},
        {name: "Restaurant", icon: "restaurant"},
        {name: "Wifi", icon: "wifi"},
        {name: "Parking", icon: "parking"}
    ]

};

// filter State
window._mocks.filterState = [
    {
        name: "Price"
    },
    {
        name: "Rating"
    }
];

window._mocks.hotelList = [
    {
        "id": "55610",
        "name": "THE WESTIN LAKE LAS VEGAS RESORT & SPA & THE WESTIN LAKE LAS VEGAS RESORT & SPA & THE WESTIN LAKE LAS VEGAS RESORT & SPA",
        "rating": 3,
        "address" : "1322 Fremont Street, , Las Vegas 89101",
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 13.86,
            "unit": "Miles"
        },
        "heroImageUrl": "http://d3mj096p5q0e20.cloudfront.net/ti/HBD/55610/043509a_hb_a_001.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        // "room": {
        //     "name": "Delux room-Twin bed",
        //     "occupancy": "Max. 4 guests",
        //     "inclusions": [
        //         "Breakfast included",
        //         "Pets allowed"
        //     ],
        //     "availability": "In demand - only 3 rooms left",
        //     "benefits": [
        //         "RESERVE NOW, PAY LATER",
        //         "FREE CANCELLATION"
        //     ]
        // },

        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            availableRoomCount : 3,
            roomRate : {
                rateType:"Negotiated",
                refundability:"Refundable",
                isPrepaid: true,
                inclusions: [
                    "Free Valet Parking",
                    "Free Parking"
                ],
                "offer" : {
                    "desc" : "Save 25% (on select nights)",
                    "discountOffer" : 59
                }
            }
            
        },
        "fare": {
            "currency" : "USD",

            "totalFare": 402,        
            "discount": [{
                "amount": 57.0,
                "type" : "Supplier",
                "text": "Today 20% off"
            }]
        },
        "deal": "Limited Time: 1 night free on 3 nights booking",
        "attractions": [
            {
                "name": "Transport",
                "message": "Close to public transport"
            },
            {
                "name": "Family",
                "message": "Excellent choice for family Excellent choice for family"
            }
        ],
        "userReview": {
            "rating": "3.4",
            "count": 500,
            "type": "Excellent"
        }
    }
];

window._mocks.resources = {
    "primaryAmenities": [
        {
            "name": "Restaurant",
            "icon": "food"
        },
        {
            "name": "Pool",
            "ïcon": "pool"
        },
        {
            "name": "Wifi",
            "icon": "wifi"
        },
        {
            "name": "Parking",
            "icon": "parking"
        },
        {
            "name": "Gym",
            "icon": "health"
        }
    ],
    "currencySymbols": [
        {
            "code": "USD",
            "symbol": "$"
        },
        {
            "code": "INR",
            "symbol": "₹"
        }
    ],
    "attractions": [
        {
            "name": "Transport",
            "icon": "transport"
        },
        {
            "name": "Family",
            "icon": "family"
        }
    ],
    "defaultImage": "",
    "buttonText": "SEE AVAILABLE ROOMS",
    "reviewText": "reviews"
};