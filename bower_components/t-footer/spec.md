# Footer component

### Component Use

```javascript
<t-footer sections=[[sections]] links=[[links]] resources=[[resources]]>
</t-footer>

```
# Sections
```javascript
{
    "selectedIndex": 0,
    //section level default behaviour
    "openInNewTab": true,
    "sections": [
        {
            "title": "Domestic Destinations",
            "code": "DD",
            "options": [
                {
                    "title": "Delhi abcd",
                    "url": "/delhi.html",
                    "openInNewTab": false
                },
                {
                    "title": "Bangalore hotels",
                    "code": "bkh"
                }
            ]
        },
        {
            "title": "International Destinations",
            "code": "Int",
            "options": [
                {
                    "title": "Singapore abcd",
                    "url": "/singapore.html"
                },
                {
                    "title": "Krabi hotels",
                    "url": "/kh.html"
                }
            ]
        }
    ]
}
```

# Links
```javascript
{
    //default link behaviour
    "openInNewTab": true,
    "primaryLinks": {
        "title": "Contact Us",
        "options": [
            {
                "title": "Ph.:",
                "options": [
                    {
                        "title": "+215 (801) 4567",
                        "url": "tel:+2158014567"
                    },
                    {
                        "title": "+215 (802) 6789",
                        "url": "tel:+2158026789"
                    }
                ]
            },
            {
                "title": "Fax:",
                "options": [
                    {
                        "title": "215-123-7890",
                        "url": "tel:+2151237890"
                    }
                ]
            },
            {
                "title": "Email:",
                "options": [
                    {
                        "title": "enquiry@travelnxt.com",
                        "url": "mailto:enquiry@travelnxt.com"
                    }
                ]
            }
        ]
    },
    "secondaryLinks": {
        "title": "Follow Us",
        "options": [
            {
                "iconName": "facebook",
                "url": "http://fb.com/abcd"
            },
            {
                "iconName": "twitter",
                "url": "http://twitter.com/abcd"
            }
        ]
    },
    "bottomStartLinks": [
        {
            "title": "About Us",
            "url": "/About",
            "openInNewTab": false,
        },
        {
            "title": "Terms of Use",
            "url": "http://example.com/terms.html"
        },
    ],
    "bottomEndLinks": [
        {
            //since no url is gives so it should show up as text not an anchor
            "title": "@ 2017 Mystique All rights reserved"
        }
    ]
}
```

# Resources
```javascript
{
    "öptionSeperator": ",",
    "icons": {
        "facebook": "fb-icon",
        "twitter": "tw-icon"
    }
}
```

# Methods
```javascript
getState() - returns current footer state object
```

# Events
```javascript

Raise
/*
t-footer-section-tap - {"code": "DD","data":{"index":2}}
t-footer-item-tap - {"code": "bkh"}
t-footer-bkh-tap e.g t-footer-{"code"}-tap  - {"code": "bkh"}
*/

Listen
/*
t-footer-section-select - {"code":"DD", "data":{"name":"abcd}} or {"code":"", "data":{"index":2}}
*/

```


# Styles
```javascript
Need variable for defining text colour - default & selected
Need variable for defining topbar background colour
Need variable for defining primary links background colour
Need variable for defining hover or selection background colour
Need mixins for defining section\primary\secondary link titles

```

## Important Information

- First row tabs will be managed by providing a list (List of strings)
- After 6/7 tabs, generate scroll as done by material
- First item will always we be considered as default selected.
- In case only 1 tab is provided -> it will be treated as Label / heading
- In case no tabs, section to hide

Content under Tabs
- List of items will be given to every tab
- Every tab will have 6 columns
- Placement of items in column will be horizontley
- Every item will have "Text" and "URL"
- No limit on max count for items

Section 3
- Divided in 2 sections : CONTACT US (properties - Label, Content for above label) and FOLLOW US (properties List of icons and URL , Wrap the icons in two lines if required)

Capability to add an extra placeholder just above the 3rd section
- So that user can add anything like e.g. We are secured by ABC...and if someone wants to showcase some awards and all.



## Test Cases
- Component should work across all major browsers - Chrome / Mozilla / Safari / Opera / IE etc.
- Verify all exposed public properties are working independently and with complex combination.
- Verify all exposed methods and events are working.

## Steps to Start
- Set Github repository at your end for this project, we will merge them later
- You can use Google/Vaadin's elements (like calender element and textboxes etc.)
- You can use some Tavisca's elements like auto-suggest if required from https://github.com/atomelements/t-autosuggest but all the features and properties mentioned in scope should be added. (Fork the existing element and create V2)

## Performance standard
- Any component if opened via [web page tester](https://www.webpagetest.org/), it should load under 500ms (milli seconds).

## Documents
- Visual designs for Footer components - https://projects.invisionapp.com/share/6E9PJ7R4Q#/screens/212360381
- API access : Url - http://demo.travelnxt.com/dev
- Tavisca Elements - https://github.com/atomelements and https://github.com/travelnxtelements
- Vaadin elements - https://vaadin.com/docs/-/part/elements/elements-getting-started.html
- Google - https://elements.polymer-project.org/browse?package=google-web-components
- Tavisca Web component style Guide - https://drive.google.com/open?id=0B7BT_2nBFNYVR2tscE9pRnVJYmc

# Ballpark estimates
```javascript
1 Week/ 7 man days
```
