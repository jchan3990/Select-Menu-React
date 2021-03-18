# Custom Drop Down Select React Component

## Description
A drop down select React component that accepts data as a list of arrays or as objects.
Eg. List of Arrays:
```javascript
const arrayData = [
  ['Jiu Jitsu Kaisen', './images/jjk.jpeg'],
  ['One Piece', './images/onepiece.jpeg'],
  ['Naruto', './images/naruto.jpeg'],
  ['Attack on Titan', './images/AoT.jpeg'],
  ['Food Wars', './images/fw.jpeg'], ['Pokemon', './images/pikachu.jpeg'],
  ['My Hero Acadamia', './images/mha.jpeg']
]
```
Eg. List of Objects:
```javascript
const objectData = [
  {'value': 'Jiu Jitsu Kaisen', 'logo': './images/jjk.jpeg'},
  {'value': 'One Piece', 'logo': './images/onepiece.jpeg'},
  {'value': 'Naruto', 'logo': './images/naruto.jpeg'},
  {'value': 'Attack on Titan', 'logo': './images/AoT.jpeg'},
  {'value': 'Food Wars', 'logo': './images/fw.jpeg'},
  {'value': 'Pokemon', 'logo': './images/pikachu.jpeg'},
  {'value': 'My Hero Acadamia', 'logo': './images/mha.jpeg'}
]
```

## Usage
* Pass data as props (see above formats) to component
```javascript
<SelectMenu data={arrayData}/>
```
* Pressing tab once focus on component: `tabIndex=0`
* Using the drop down
  * Click to see all options
  * Type to narrow down matching options
    * 0 Matches returns 'No Matches' message

## Install Dependencies
npm install

## Development
### Run
npm run react-dev to start webpack watchdog for React changes
Open (http://localhost:3000/) to view in browser


