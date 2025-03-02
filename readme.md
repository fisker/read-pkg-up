# read-pkg-up

> Read the closest package.json file

## Why

- [Finds the closest package.json](https://github.com/sindresorhus/find-up)
- [Throws more helpful JSON errors](https://github.com/sindresorhus/parse-json)
- [Normalizes the data](https://github.com/npm/normalize-package-data#what-normalization-currently-entails)

## Install

```sh
npm install read-pkg-up
```

## Usage

```js
import {readPackageUp} from 'read-pkg-up';

console.log(await readPackageUp());
/*
{
	packageJson: {
		name: 'awesome-package',
		version: '1.0.0',
		…
	},
	path: '/Users/sindresorhus/dev/awesome-package/package.json'
}
*/
```

## API

### readPackageUp(options?)

Returns a `Promise<object>` or `Promise<undefined>` if no `package.json` was found.

### readPackageUpSync(options?)

Returns the result object or `undefined` if no `package.json` was found.

#### options

Type: `object`

##### cwd

Type: `string`\
Default: `process.cwd()`

The directory to start looking for a package.json file.

##### normalize

Type: `boolean`\
Default: `true`

[Normalize](https://github.com/npm/normalize-package-data#what-normalization-currently-entails) the package data.

## read-pkg-up for enterprise

Available as part of the Tidelift Subscription.

The maintainers of read-pkg-up and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-read-pkg-up?utm_source=npm-read-pkg-up&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

## Related

- [read-pkg](https://github.com/sindresorhus/read-pkg) - Read a package.json file
- [pkg-up](https://github.com/sindresorhus/pkg-up) - Find the closest package.json file
- [find-up](https://github.com/sindresorhus/find-up) - Find a file by walking up parent directories
- [pkg-conf](https://github.com/sindresorhus/pkg-conf) - Get namespaced config from the closest package.json
