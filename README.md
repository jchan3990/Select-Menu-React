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
Nested objects supported.
```js
export const countriesObj = [
  {
    'value': 'USA',
    'logo': "https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png",
    'subOptions': [
      {
        'value': 'San Jose',
        'logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Flag_of_San_Jos%C3%A9%2C_California.svg/255px-Flag_of_San_Jos%C3%A9%2C_California.svg.png',
        'subOptions': [],
      },
      {
        'value': 'San Francisco',
        'logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_San_Francisco.svg/255px-Flag_of_San_Francisco.svg.png',
        'subOptions': [],
      },
      {
        'value': 'Los Angeles',
        'logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Los_Angeles%2C_California.svg/1200px-Flag_of_Los_Angeles%2C_California.svg.png',
        'subOptions': [],
      },
      {
        'value': 'San Diego',
        'logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_San_Diego%2C_California.svg/1200px-Flag_of_San_Diego%2C_California.svg.png',
        'subOptions': [],
      },
      {
        'value': 'Tehachapi',
        'logo': 'https://media-cdn.tripadvisor.com/media/photo-s/02/66/e1/91/filename-railroad-watertower.jpg',
        'subOptions': [],
      },
    ]
  },
  {
    'value': 'Japan',
    'logo': 'https://i.pinimg.com/originals/7a/3d/90/7a3d9097761a637b3be29cd0dc6f7971.jpg',
    'subOptions': [
      {
        'value': 'Tokyo',
        'logo': 'https://www.crwflags.com/fotw/images/j/jp-13.gif',
        'subOptions': [],
      },
      {
        'value': 'Kyoto',
        'logo': 'https://www.crwflags.com/fotw/images/j/jp-26.gif',
        'subOptions': [],
      },
      {
        'value': 'Osaka',
        'logo': 'https://www.crwflags.com/fotw/images/j/jp-27.gif',
        'subOptions': [],
      },
    ]
  },
  {
    'value': 'Germany',
    'logo': 'https://www.countries-ofthe-world.com/flags-normal/flag-of-Germany.png',
    'subOptions': [
      {
        'value': 'Munich',
        'logo': 'https://www.crwflags.com/fotw/images/d/de-ba-m1.gif',
        'subOptions': [],
      },
      {
        'value': 'Berlin',
        'logo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Berlin.svg/1200px-Flag_of_Berlin.svg.png',
        'subOptions': [],
      },
      {
        'value': 'Frankfurt',
        'logo': 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Free_City_of_Frankfurt.svg',
        'subOptions': [],
      },
    ]
  },
  {
    'value': 'Wakanda',
    'logo': 'https://i.redd.it/yvzgtslorrg01.png',
    'subOptions': [],
  },
];
```
__SubOption name can be specified by user__

``` js
export const countriesArr = [
  [
    'USA',
    'https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png',
    [
      [
        'San Jose',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Flag_of_San_Jos%C3%A9%2C_California.svg/255px-Flag_of_San_Jos%C3%A9%2C_California.svg.png',
        []
      ],
      [
        'San Francisco',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_San_Francisco.svg/255px-Flag_of_San_Francisco.svg.png',
        []
      ],
      [
        'Los Angeles',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Los_Angeles%2C_California.svg/1200px-Flag_of_Los_Angeles%2C_California.svg.png',
        []
      ],
      [
        'San Diego',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_San_Diego%2C_California.svg/1200px-Flag_of_San_Diego%2C_California.svg.png',
        []
      ],
      [
        'Tehachapi',
        'https://media-cdn.tripadvisor.com/media/photo-s/02/66/e1/91/filename-railroad-watertower.jpg',
        []
      ]
    ]
  ],
  [
    'Japan',
    'https://i.pinimg.com/originals/7a/3d/90/7a3d9097761a637b3be29cd0dc6f7971.jpg',
    [
      [
        'Tokyo',
        'https://www.crwflags.com/fotw/images/j/jp-13.gif',
        []
      ],
      [
        'Kyoto',
        'https://www.crwflags.com/fotw/images/j/jp-26.gif',
        []
      ],
      [
        'Osaka',
        'https://www.crwflags.com/fotw/images/j/jp-27.gif',
        []
      ]
    ]
  ],
  [
    'Germany',
    'https://www.countries-ofthe-world.com/flags-normal/flag-of-Germany.png',
    [
      [
        'Munich',
        'https://www.crwflags.com/fotw/images/d/de-ba-m1.gif',
        []
      ],
      [
        'Berlin',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Berlin.svg/1200px-Flag_of_Berlin.svg.png',
        []
      ],
      [
        'Frankfurt',
        'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Free_City_of_Frankfurt.svg',
        []
      ],
    ]
  ],
  [
    'Wakanda',
    'https://i.redd.it/yvzgtslorrg01.png',
    []
  ]
];
```

### Demo
[![Edit single-select-react-jc](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/angry-mcclintock-d2oi5?file=/src/App.js)


## API
### Props
Name | Default | Type | Description
-----|---------|------|------------
centered | false | {bool} | Center component in parent container
disabled | false | {bool} | Show component as disabled
floated | | {enum} | Position component in parent container<br><b>Enums:</b><br>```left``` ```right```
hidden | | {bool} | Component visibility hidden
name | | {string} |  Name of input element
onChange | | {func} | Set parent variable on change
onClick | | {func} | Set parent variable on click
placeholder | | {string} | Placeholder text
size | | {enum} | Component width within parent container<br><b>Enums:</b><br>```mini``` ```small``` ```medium``` ```full```
striped | | {enum} | Alternate striping of menu options<br><b>Enums:</b><br>```lightgrey``` ```lightcyan``` ```lightgreen``` ```lightpink```
sub | | {string} | User-specified keyword for subcategory

## Accessibility
* Tab focuses to component
* Keyboard Up / Down arrow navigation
* Enter selects first matching option
* Esc closes menu

## Development
```
npm install
npm run react-dev
npm start (http://localhost:3003)
```

## License
single-select-react-jc is released under the ISC license.


