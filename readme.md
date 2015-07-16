# hexa-color-regex

A simple regex to match hexa style colors. hexa is an emerging CSS standard of using hex values to determine color and opacity. Example `#fff0` and `#ffffff00` would be a white color with zero opacity while `#000f` and `#000000ff` would be a black color with full opacity.

## Install

 ```bash
 npm i hexa-color-regex --save
 npm test
 ```

## Usage

- `[opts]` **{Object}** pass `strict: true` for strict mode
- `return` **{RegExp}**

## Example

```javascript
  regexCreator().test('#abcd'); // true
  regexCreator().test('color: #f0d6'); // true
  regexCreator().test('#f06d06ff'); // true

  regexCreator({strict: true}).test('#abcd'); // true
  regexCreator({strict: true}).test('color: #abcd'); // false
```

## Contributing

Take care that test cases pass and jscs comes back with no errors. Please try to emulate code style as it exists.

## Special Thanks

This code is largely based on [@tunnckoCore](https://github.com/tunnckoCore)'s [hex-color-regex](https://github.com/regexps/hex-color-regex) code and adapted for hexa.

## License

MIT

## Author

- [btholt](http://twitter.com/holtbt)