# single-select-react-jc
> Tiny (19kB) react single-select drop down component.

## Install
```
$ npm install --save single-select-react-jc
```

## Usage
### Basic
```js
import SelectMenu from 'single-select-react-jc'

<SelectMenu data={data} />
```
_If no data provided, component will be visible but disabled_

### Data Format
Can be either a list of arrays or list of objects.
```js
export const carsArray = [
  ['BMW','./images/bmw.jpeg'],
  ['Honda','./images/honda.png'],
  ['Toyota','./images/toyota.jpeg'],
  ['Nissan','./images/nissan.jpeg'],
  ['Chevrolet','./images/chevy.png'],
  ['Ford','./images/ford.png'],
  ['Ferrari','./images/ferrari.jpeg'],
  ['Lamborghini','./images/lambo.jpeg']
];

export const animeObject = [
  {'value': 'Jujutsu Kaisen', 'logo': './images/jjk.jpeg'},
  {'value': 'One Piece', 'logo': './images/onepiece.jpeg'},
  {'value': 'Naruto', 'logo': './images/naruto.jpeg'},
  {'value': 'Attack on Titan', 'logo': './images/AoT.jpeg'},
  {'value': 'Food Wars', 'logo': './images/fw.jpeg'},
  {'value': 'Pokemon', 'logo': './images/pikachu.jpeg'},
  {'value': 'My Hero Acadamia', 'logo': './images/mha.jpeg'}
];
```

## API
### Props
Name | Default | Type | Description
-----|---------|------|------------
centered | false | {bool} | Center component in parent container
disabled | false | {bool} | Show component as disabled
floated | | {enum} | Position component in parent container<br><b>Enums:</b><br>left right
hidden | | {bool} | Component visibility hidden
name | | {string} |  Name of input element
onChange | | {func} | Called on change
placeholder | | {string} | Placeholder text
size | | {enum} | Component width within parent container<br><b>Enums:</b><br>mini small medium full
striped | | {enum} | Alternate striping of menu options<br><b>Enums:</b><br>lightgrey lightcyan lightgreen lightpink

## Development
```
npm install
npm run react-dev
npm start (http://localhost:3003)
```

## License
single-select-react-jc is released under the ISC license.


