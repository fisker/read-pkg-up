import {Except} from 'type-fest';
import {readPackage, readPackageSync, Options as ReadPackageOptions, NormalizeOptions as ReadPackageNormalizeOptions, PackageJson, NormalizedPackageJson} from 'read-pkg';

export type Options = {
	/**
	The directory to start looking for a package.json file.

	@default process.cwd()
	*/
	cwd?: string;
} & Except<ReadPackageOptions, 'cwd'>;

export type NormalizeOptions = {
	/**
	The directory to start looking for a package.json file.

	@default process.cwd()
	*/
	cwd?: string;
} & Except<ReadPackageNormalizeOptions, 'cwd'>;

export interface ReadResult {
	packageJson: PackageJson;
	path: string;
}

export interface NormalizedReadResult {
	packageJson: NormalizedPackageJson;
	path: string;
}

export {
	PackageJson,
	NormalizedPackageJson,
};

/**
Read the closest `package.json` file.

@example
```
import {readPackageUp} from 'read-pkg-up';

console.log(await readPackageUp());
// {
// 	packageJson: {
// 		name: 'awesome-package',
// 		version: '1.0.0',
// 		…
// 	},
// 	path: '/Users/sindresorhus/dev/awesome-package/package.json'
// }
```
*/
export function readPackageUp(options?: NormalizeOptions): Promise<NormalizedReadResult | undefined>;
export function readPackageUp(options: Options): Promise<ReadResult | undefined>;

/**
Synchronously read the closest `package.json` file.

@example
```
import {readPackageUpSync} from 'read-pkg-up';

console.log(readPackageUpSync());
// {
// 	packageJson: {
// 		name: 'awesome-package',
// 		version: '1.0.0',
// 		…
// 	},
// 	path: '/Users/sindresorhus/dev/awesome-package/package.json'
// }
```
*/
export function readPackageUpSync(options?: NormalizeOptions): NormalizedReadResult | undefined;
export function readPackageUpSync(options: Options): ReadResult | undefined;
