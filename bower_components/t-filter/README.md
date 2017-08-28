# \<t-filter\>

A filter component

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.


Notes:
- isOpen inside type "group" should be true and present.


Selected Data Type for Filters:
Text - String
Option (allowMultiSelect) - Array of Index
Option (!allowMultiSelect) - Number (Index of selected item)
Rating (allowMultiSelect) - Array of Index
Rating (!allowMultiSelect) - Number (Index of selected item)
Range (!isSingleMarker) - Array
Range (isSingleMarker) - Array
Select - Number (Index of selected item)

Example
```
window._mocks = window._mocks || {};

window._mocks.fiterSettings = {
	"collapsableHeader": true,
	"optionLevelReset": true,
	//when true it will show loading
	"showLoading": true
};

window._mocks.filterResources = {
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
		"selected": "Holiday Inn",
		"filterBy": "item.name.indexOf(this.selected) > -1",
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
				"primary": "Less than $400",
				"secondary": "150",
				"filterBy": "item.fare.amount < 400"
			},
			{
				"primary": "$75 to $124",
				"secondary": "85",
				"filterBy": "(item.fare.amount > 75) && (item.fare.amout < 124)"
			},
			{
				"primary": "$125 to $199",
				"secondary": "250",
				//this will show as disabled where user will not be abel to click it
				"isEnabled": false,
				"filterBy": "(item.fare.amount > 125) && (item.fare.amout < 199)"
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
		"selected": -1,
		//when multi select is not allowed then radio buttons should be shown 
		"allowMultiSelect": false,
		"data": [
			{
				"primary": "Main strip",
				"secondary": "150",
				"filterBy": "item.distance.value < 150"
			},
			{
				"primary": "Green park",
				"secondary": "85",
				"filterBy": "item.distance.value < 85"
			},
			{
				"primary": "Walking street",
				"secondary": "250",
				"filterBy": "item.distance.value < 250"
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
		"selected": [],
		//when multi select is not allowed then radio buttons should be shown 
		"allowMultiSelect": true,
		//this will show hover behaviour on desktop to apply only this option item by resetting all other filters		
		"enableSelectionOveride": true,
		"data": [
			{
				"primary": 5,
				"secondary": "150",
				"filterBy": "item.rating === 5"
			},
			{
				"primary": 4,
				"secondary": "85",
				"filterBy": "item.rating === 4"
			},
			{
				"primary": 3.5,
				"secondary": "250",
				"filterBy": "item.rating === 3.5"
			},
			{
				"primary": 3,
				"secondary": "270",
				"filterBy": "item.rating === 3"
			},
			{
				"primary": 0,
				"secondary": "10",
				"filterBy": "item.rating === 0"
			}
		],
		"allowSearch": false
	},
	{
		"title": "Distance",
		"type": "Range",
		"code": "dist",
		"isOpen": false,
		"selected": [],
		"minValue": 1,
		"maxValue": 245,
		"step": 0.5,
		"filterBy": "(item.distance.value >= this.selected[0]) && (item.distance.value <= this.selected[1])",
		//When true it shows two markers
		"isSingleMarker": false
	},
	{
		"code": "curr",
		"title": "Currency",
		//This shows as a dropdown
		"type": "Select",
		"isOpen": true,
		"selected": 2,
		"data": [
			{
				"primary": "United States",
				"secondary": "USD",
				"filterBy": "item.fare.currency === 'USD'"
			},
			{
				"primary": "India",
				"secondary": "INR",
				"filterBy": "item.fare.currency === 'INR'"
			},
			{
				"primary": "Canada",
				"secondary": "CAD",
				"filterBy": "item.fare.currency === 'CAD'"
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
				"selected": "",
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
```