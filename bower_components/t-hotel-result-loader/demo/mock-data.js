window._mocks = {};

window._mocks.settings = {
	"collapsableHeader": true,
	"optionLevelReset": true,
	//when true it will show loading
	"showLoading": true
};

window._mocks.resources = {
	"title": "Filter hotels by",
	"resetButtonText": "Reset",
	"applyButtonText": "Apply",
	"moreLinkText": "Show more",
	"lessLinkText": "Show less",
	"optionResetText": "reset"
};

window._mocks.filterData = [
	{
		"code": "hotel",
		"title": "Hotel Name",
		"type": "Text",
		"helpText": "Search by activity/hotel name",
		"isOpen": true,
		"selected": "Hilton Delux",
		//If data is present it is used for providing autosuggest else no  
		"data": [
			"Howard Johnson",
			"Hilton Delux",
			"Holiday Inn"
		]
	},
	{
		"code": "price",
		"title": "Budget/Price",
		"type": "Option",
		"isOpen": false,
		//If there are more than default options then 'Show More' will be shown - which will show all and say 'Show Less'
		"defaultOptions": 5,
		"selected": [0, 2],
		//when multi select is allowd then checkboxes are shown 
		"allowMultiSelect": true,
		//this will show hover behaviour on desktop to apply only this option item by resetting all other filters		
		"enableSelectionOveride": true,
		"data": [
			{
				"primary": "Less than $75",
				"secondary": "150"
			},
			{
				"primary": "$75 to $124",
				"secondary": "85"
			},
			{
				"primary": "$125 to $199",
				"secondary": "250",
				//this will show as disabled where user will not be abel to click it
				"isEnabled": false
			}
		],
		"allowSearch": true
	},
	{
		"code": "nearby",
		"title": "Nearby Area",
		"type": "Option",
		"isOpen": true,
		//If there are more than default options then 'Show More' will be shown - which will show all and say 'Show Less'
		"defaultOptions": 5,
		"selected": 2,
		//when multi select is not allowed then radio buttons should be shown 
		"allowMultiSelect": false,
		"data": [
			{
				"primary": "Main strip",
				"secondary": "150"
			},
			{
				"primary": "Green park",
				"secondary": "85"
			},
			{
				"primary": "Walking street",
				"secondary": "250"
			}
		],
		"allowSearch": true
	},
	{
		"title": "Rating",
		"type": "Rating",
		"code": "rating",
		"isOpen": false,
		//If there are more than default options then 'Show More' will be shown - which will show all and say 'Show Less'
		"defaultOptions": 5,
		"selected": [3],
		//when multi select is not allowed then radio buttons should be shown 
		"allowMultiSelect": true,
		//this will show hover behaviour on desktop to apply only this option item by resetting all other filters		
		"enableSelectionOveride": true,
		"data": [
			{
				"primary": 5,
				"secondary": "150"
			},
			{
				"primary": 4,
				"secondary": "85"
			},
			{
				"primary": 3.5,
				"secondary": "250"
			},
			{
				"primary": 3,
				"secondary": "270"
			},
			{
				"primary": 0,
				"secondary": "10"
			}
		],
		"allowSearch": false
	},
	{
		"title": "Distance",
		"type": "Range",
		"code": "dist",
		"isOpen": false,
		"selected": [
			4.5,
			7.5
		],
		"minValue": 1,
		"maxValue": 245,
		"step": 0.5,
		//When true it shows two markers
		"isSingleMarker": false
	},
	{
		"code": "curr",
		"title": "Currency",
		//This shows as a dropdown
		"type": "Select",
		"isOpen": true,
		"selected": 'United States',
		"data": [
			{
				"primary": "United States",
				"secondary": "USD"
			},
			{
				"primary": "India",
				"secondary": "INR"
			},
			{
				"primary": "Canada",
				"secondary": "CAD"
			}
		]
	},
	{
		"code": "dp",
		"title": "Distance with price",
		//Any number of known filter types (Text,Option,Rating,Range,Select) can be used inside a group  
		//The whole group can be expanded or collapses not individual sections 
		"type": "Group",
		"isOpen": false,
		"options": [
			{
				"title": "Price",
				"code": "dp-price",
				"type": "Range",
				"selected": [],
				"minValue": 100,
				"maxValue": 545,
				"step": 10,
				"isOpen": true,
				//When true it shows two markers
				"isSingleMarker": false
			},
			{
				"title": "Distance from city center",
				"code": "dp-dist",
				"type": "Range",
				"selected": [],
				"minValue": 0,
				"maxValue": 10,
				"step": 0.5,
				"isOpen": true,
				//When true it shows two markers
				"isSingleMarker": true
			}
		]
	},
	{
		"code": "pc",
		"title": "Price & category",
		//Any number of known filter types (Text,Option,Rating,Range,Select) can be used inside a group  
		//The whole group can be expanded or collapses not individual sections 
		"type": "Group",
		"isOpen": true,
		"options": [
			{
				"title": "Price",
				"code": "pc-price",
				"type": "Range",
				"selected": [],
				"minValue": 100,
				"maxValue": 545,
				"isOpen": true,
				"step": 10,
				//When true it shows two markers
				"isSingleMarker": false
			},
			{
				"title": "Hotel category",
				"type": "Select",
				"code": "pc-cat",
				"selected": "Deluxe",
				"allowMultiSelect": true,
				"isOpen": true,
				"data": [
					{
						"primary": "Premium",
						"secondary": "200"
					},
					{
						"primary": "Deluxe",
						"secondary": "100"
					},
					{
						"primary": "Budget",
						"secondary": "145"
					}
				]
			}
		]
	},
];