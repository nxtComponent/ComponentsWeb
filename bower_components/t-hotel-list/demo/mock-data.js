window._mocks = {};

window._mocks.settings = {
    "pageSize": 3,
    "showPage": 3,
    "enableScrollTop": true,
    "views": [
        {
            "title": "List",
            "code": "lst",
            "iconName": "list",
            "selected": true
        },
        {
            "title": "Map",
            "iconName": "map",
            "code": "map"
        }
    ],
    "sorting": [
        {
            "title": "Hotel Name",
            "property": "name",
            "sortBy": "asc"
        },
        {
            "title": "Star rating", 
            "property": "rating",
            "options": [
                {
                    "title": "Rating (1-5)",
                    "sortBy": "asc"
                },
                {
                    "title": "Rating (5-1)",
                    "sortBy": "dsc",
                    "selected": true
                }
            ]
        },
        {
            "title": "Recommended",
            "property": "relevance",
            "sortBy": "dsc",
            "selected": true,
            //in this case the sort will not allow multiple clicks for toggle
            "singleState": true
        },
        {
            "title": "Review",
            "property": "user.rating",
            "sortBy": "dsc"
        }, {
            "title": "Hotel Name",
            "property": "name",
            "sortBy": "asc"
        },
        {
            "title": "Star rating", 
            "property": "rating",
            "options": [
                {
                    "title": "Rating (1-5)",
                    "sortBy": "asc"
                },
                {
                    "title": "Rating (5-1)",
                    "sortBy": "dsc",
                    "selected": true
                }
            ]
        },
        {
            "title": "Recommended",
            "property": "relevance",
            "sortBy": "dsc",
            "selected": true,
            //in this case the sort will not allow multiple clicks for toggle
            "singleState": true
        },
        {
            "title": "Review",
            "property": "user.rating",
            "sortBy": "dsc"
        }
    ],
    "currentSortIndex": 2,
    "filter": [
        {
            "title": "Price",
            "code": "price"
        },
        {
            "title": "Rating",
            "code": "rating"
        },
        {
            "title": "Distance",
            "code": "dist"
        }
    ]
};

window._mocks.resources = {
    "title": "We found {{total}} hotels for your search",
    "filteredTitle": "We found {{current}}/{{total}} hotels for your search",
    "loadMoreResultsText": "SHOW MORE RESULTS",
    "loadingMoreResultsText": "LOADING ...",
    "noResultsFound": "Oops! no results found for your search. Pelase try again",
    "noFilteredResults": "Sorry no results found for your applied filters.",
    "listUpdateText": "Updating results",
    "icons": {
        "list": "list-icon",
        "map": "map"
    },
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
    "buttonText": "SEE AVAILABLE ROOMS"
};

window._mocks.items = [{
        "id": "55610",
        "name": "THE WESTIN LAKE LAS VEGAS RESORT & SPA & THE WESTIN LAKE LAS VEGAS RESORT & SPA & THE WESTIN LAKE LAS VEGAS RESORT & SPA",
        "rating": 3.3,
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 13.86,
            "unit": "Miles"
        },
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/25/4b/78/park-hotel-clarke-quay.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            "inclusions": [
                "Breakfast included",
                "Pets allowed"
            ],
            "availability": "In demand - only 3 rooms left",
            "benefits": [
                "RESERVE NOW, PAY LATER",
                "FREE CANCELLATION"
            ]
        },
        "fare": {
            "amount": 402.86,
            "currency": "USD"
        },
        "discount": {
            "amount": 57.0,
            "percent": '20%',
            "currency": "USD",
            "text": "Today 20% off"
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
            "rating": "3.3",
            "count": 500,
            "type": "Excellent"
        }
    },
    {
        "id": "55611",
        "name": "Express Inn",
        "rating": 2,
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 10.86,
            "unit": "Miles"
        },
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/25/4b/78/park-hotel-clarke-quay.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            "inclusions": [
                "Breakfast included",
                "Pets allowed"
            ],
            "availability": "In demand - only 3 rooms left",
            "benefits": [
                "RESERVE NOW, PAY LATER",
                "FREE CANCELLATION"
            ]
        },
        "fare": {
            "amount": 907.86,
            "currency": "USD"
        },
        "discount": {
            "amount": 57.0,
            "currency": "USD"
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
            "rating": "3.2",
            "count": 500,
            "type": "Excellent"
        }
    },
    {
        "id": "55612",
        "name": "Prisma Inn",
        "rating": 4,
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 12.14,
            "unit": "Miles"
        },
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/25/4b/78/park-hotel-clarke-quay.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            "inclusions": [
                "Breakfast included",
                "Pets allowed"
            ],
            "availability": "In demand - only 3 rooms left",
            "benefits": [
                "RESERVE NOW, PAY LATER",
                "FREE CANCELLATION"
            ]
        },
        "fare": {
            "amount": 212.86,
            "currency": "USD"
        },
        "discount": {
            "amount": 57.0,
            "currency": "USD"
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
            "rating": "4.0",
            "count": 500,
            "type": "Excellent"
        }
    },
    {
        "id": "55613",
        "name": "Welcome Express",
        "rating": 4.5,
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 3.45,
            "unit": "Miles"
        },
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/25/4b/78/park-hotel-clarke-quay.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            "inclusions": [
                "Breakfast included",
                "Pets allowed"
            ],
            "availability": "In demand - only 3 rooms left",
            "benefits": [
                "RESERVE NOW, PAY LATER",
                "FREE CANCELLATION"
            ]
        },
        "fare": {
            "amount": 1234.12,
            "currency": "USD"
        },
        "discount": {
            "amount": 57.0,
            "currency": "USD"
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
            "rating": "4.2",
            "count": 500,
            "type": "Excellent"
        }
    },
    {
        "id": "55614",
        "name": "Rahee",
        "rating": 2.5,
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 23.86,
            "unit": "Miles"
        },
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/25/4b/78/park-hotel-clarke-quay.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            "inclusions": [
                "Breakfast included",
                "Pets allowed"
            ],
            "availability": "In demand - only 3 rooms left",
            "benefits": [
                "RESERVE NOW, PAY LATER",
                "FREE CANCELLATION"
            ]
        },
        "fare": {
            "amount": 112.86,
            "currency": "USD"
        },
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
            "rating": "3.2",
            "count": 500,
            "type": "Excellent"
        }
    },
    {
        "id": "55615",
        "name": "Novotel",
        "rating": 5,
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 2.86,
            "unit": "Miles"
        },
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/25/4b/78/park-hotel-clarke-quay.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            "inclusions": [
                "Breakfast included",
                "Pets allowed"
            ],
            "availability": "In demand - only 3 rooms left",
            "benefits": [
                "RESERVE NOW, PAY LATER",
                "FREE CANCELLATION"
            ]
        },
        "fare": {
            "amount": 316,
            "currency": "USD"
        },
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
            "rating": "3.5",
            "count": 500,
            "type": "Excellent"
        }
    },
    {
        "id": "55616",
        "name": "FabHotel Rajwada",
        "rating": 3,
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 4,
            "unit": "Miles"
        },
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/25/4b/78/park-hotel-clarke-quay.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            "inclusions": [
                "Breakfast included",
                "Pets allowed"
            ],
            "availability": "In demand - only 3 rooms left",
            "benefits": [
                "RESERVE NOW, PAY LATER",
                "FREE CANCELLATION"
            ]
        },
        "fare": {
            "amount": 100,
            "currency": "USD"
        },
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
            "rating": "4.8",
            "count": 500,
            "type": "Excellent"
        }
    },
    {
        "id": "55617",
        "name": "Novotel Inn",
        "rating": 5,
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 2.86,
            "unit": "Miles"
        },
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/25/4b/78/park-hotel-clarke-quay.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            "inclusions": [
                "Breakfast included",
                "Pets allowed"
            ],
            "availability": "In demand - only 3 rooms left",
            "benefits": [
                "RESERVE NOW, PAY LATER",
                "FREE CANCELLATION"
            ]
        },
        "fare": {
            "amount": 316,
            "currency": "USD"
        },
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
            "rating": "3.5",
            "count": 500,
            "type": "Excellent"
        }
    },
    {
        "id": "55618",
        "name": "Sheraton Hotel",
        "rating": 4,
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 6,
            "unit": "Miles"
        },
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/25/4b/78/park-hotel-clarke-quay.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            "inclusions": [
                "Breakfast included",
                "Pets allowed"
            ],
            "availability": "In demand - only 3 rooms left",
            "benefits": [
                "RESERVE NOW, PAY LATER",
                "FREE CANCELLATION"
            ]
        },
        "fare": {
            "amount": 288,
            "currency": "USD"
        },
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
            "rating": "3.9",
            "count": 500,
            "type": "Excellent"
        }
    },
    {
        "id": "55619",
        "name": "Treebo Sahara",
        "rating": 2,
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 9,
            "unit": "Miles"
        },
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/25/4b/78/park-hotel-clarke-quay.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            "inclusions": [
                "Breakfast included",
                "Pets allowed"
            ],
            "availability": "In demand - only 3 rooms left",
            "benefits": [
                "RESERVE NOW, PAY LATER",
                "FREE CANCELLATION"
            ]
        },
        "fare": {
            "amount": 114,
            "currency": "USD"
        },
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
            "rating": "2",
            "count": 500,
            "type": "Excellent"
        }
    },
    {
        "id": "55620",
        "name": "Sheraton Grand",
        "rating": 3,
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 1,
            "unit": "Miles"
        },
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/25/4b/78/park-hotel-clarke-quay.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            "inclusions": [
                "Breakfast included",
                "Pets allowed"
            ],
            "availability": "In demand - only 3 rooms left",
            "benefits": [
                "RESERVE NOW, PAY LATER",
                "FREE CANCELLATION"
            ]
        },
        "fare": {
            "amount": 423,
            "currency": "USD"
        },
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
            "rating": "2.1",
            "count": 500,
            "type": "Excellent"
        }
    },
    {
        "id": "55621",
        "name": "Treebo Brooks Elan",
        "rating": 3,
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 11,
            "unit": "Miles"
        },
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/25/4b/78/park-hotel-clarke-quay.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            "inclusions": [
                "Breakfast included",
                "Pets allowed"
            ],
            "availability": "In demand - only 3 rooms left",
            "benefits": [
                "RESERVE NOW, PAY LATER",
                "FREE CANCELLATION"
            ]
        },
        "fare": {
            "amount": 211,
            "currency": "USD"
        },
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
    },
    {
        "id": "55622",
        "name": "Holiday Inn",
        "rating": 4,
        "location": "Metropolitan area",
        "phoneNumber": "702 567 1234",
        "distance": {
            "value": 1,
            "unit": "Miles"
        },
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/09/25/4b/78/park-hotel-clarke-quay.jpg",
        "amenities": [
            {name: "Restaurant"},
            {name: "Wifi"},
            {name: "Parking"}
        ],
        "room": {
            "name": "Delux room-Twin bed",
            "occupancy": "Max. 4 guests",
            "inclusions": [
                "Breakfast included",
                "Pets allowed"
            ],
            "availability": "In demand - only 3 rooms left",
            "benefits": [
                "RESERVE NOW, PAY LATER",
                "FREE CANCELLATION"
            ]
        },
        "fare": {
            "amount": 257,
            "currency": "USD"
        },
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
            "rating": "5",
            "count": 500,
            "type": "Excellent"
        }
    }];