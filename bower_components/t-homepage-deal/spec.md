# t-home-page-deal

### Component Signature

```html

    <t-home-page-deal heading="EXPLORE POPULAR DESTINATION" 
                      flip-color='white'
                      
                      data=[[data]] >
    </t-home-page-deal>

```

### Component Attributes

```javascript
    //options
    data = [
        {
            category : "CITY & SHOPPING",
            deals : [
                {
                    headerText : "MIAMI",
                    subHeaderText : "UNITED STATE",

                    footerText : "$54",
                    subFooterText : "from",

                    desc : 'deal - description',
                    
                    // position between 1 to 16
                    position : 1,
                    // column wrap count
                    colSpan : 1,

                    rowSpan : 1,
                    
                    redirectUrl : 'redirect-url',
                    viewDetailsButtonText : "View Details",
                    viewDetailsButtonColor : 'Orange',

                    imageUrl : "http://example.com/ad.png"
                }
            ]
        }
    ];


```

## Important Information

- Main Heading text	 - Size and Text will be given. In case not given just hide the section and adjust space
- Categories - List of categories will be given
- Categories will be treated as tabs and also handle the case where scroll will generate.
- First category given will be considered as default
- In case no list provided hide the categories section
- Under every categories , there will be list of deals having "Image Url", "Image size","redirect url"
- With every image also need to pass-on the tile number to define the placement of image in grid. (it could be 1 or 1&2 or 1&2&5)
- Complete deal section for desktop is divided into 4*4 grid (columns * rows) - Tile number starting 1, 2, 3 ...16)
- and for tablets it is 3*4 (columns * rows). Tile starting 1 to 9
- For mobile it is 1*4 (columns* rows) and every tile will have the property to say whether to show it on mobile or not.
- In every deal box-> placeholder will be given to show "PrimaryText" , "Secondary text" , "Price" , "Price text like from or starting etc." (Primary and secondary text always come in top left corner and price in bottom of right most corner)
- On deal click -> it should flap
- Flap background color will be provided .
- Flap area will show "Primary and secondary text" with "Description of deal" & button text
- Every image will have 2 property (Cover and contain)
- In grid , tile number max. value will decide the final size on page for e.g. from the list of images provided the max tile number is 8 than grid will be of 2*4 (columns * rows)
- Price on images will never display in digits (For case $ 2345.7 - > it will be $ 2345)
- Currently in design only 4 tabs are available but system should have implementation to handle multiple tabs in header
- Misc items to be handled from CSS like:
1. Background color of outer container.
2. Mixin (to control outer width)


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
- Visual designs for Deal components - https://projects.invisionapp.com/share/6E9PJ7R4Q#/screens/212067488
- API access : Url - http://demo.travelnxt.com/dev
- Tavisca Elements - https://github.com/atomelements and https://github.com/travelnxtelements
- Vaadin elements - https://vaadin.com/docs/-/part/elements/elements-getting-started.html
- Google - https://elements.polymer-project.org/browse?package=google-web-components
- Tavisca Web component style Guide - https://drive.google.com/open?id=0B7BT_2nBFNYVR2tscE9pRnVJYmc
