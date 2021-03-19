# Custom Drop Down Select React Component

## Description
A drop down select React component that accepts data as a list of arrays or as objects.
Eg. List of Arrays:
```javascript
const carsArray = [
  ['BMW','./images/bmw.jpeg'],
  ['Honda','./images/honda.png'],
  ['Toyota','./images/toyota.jpeg'],
  ['Nissan','./images/nissan.jpeg'],
  ['Chevrolet','./images/chevy.png'],
  ['Ford','./images/ford.png'],
  ['Ferrari','./images/ferrari.jpeg'],
  ['Lamborghini','./images/lambo.jpeg']
];
```
Eg. List of Objects:
```javascript
const hotelsObject = [
  {'value': 'Motel 6', 'logo': './images/m6.png'},
  {'value': 'Best Western', 'logo': './images/bw.png'},
  {'value': 'Hyatt', 'logo': './images/hyatt.png'},
  {'value': 'Marriot', 'logo': './images/marriot.png'},
  {'value': 'Sheraton', 'logo': './images/sheraton.png'},
  {'value': 'Hilton', 'logo': './images/hilton.png'},
]
```

## Usage
* Pass data as props (see above formats) to component
```javascript
<SelectMenu data={data}/>
```
* Pressing tab once focus on component: `tabIndex=0`
* Using the drop down
  * Click to see all options
  * Type to narrow down matching options
    * 0 Matches returns 'No Options' message

## Install Dependencies
npm install

## Development
### Run
* npm run react-dev to start webpack watchdog for React changes
* npm start to start server
  * Open http://localhost:3000/ to view in browser


