
# snowflakejs

Lightweight **Snowflake-style ID generator** based on timestamp.  
Generates unique, time-sortable IDs similar to Discord/Twitter snowflakes.  
Written in plain JavaScript but includes TypeScript definitions for intellisense.

## ✨ Features

- 🚀 Simple, zero-dependency library
- 🕒 Unique IDs based on timestamp
- 🖥️ Optional `workerId` to differentiate servers
- 🔑 Automatic sequence to avoid collisions in the same millisecond
- 📝 Built-in helpers to decode IDs back into timestamp, workerId, and sequence
- 💙 Works in JavaScript and TypeScript without any build step

## 📦 Installation

```bash
npm install snowflakejs
````

or

```bash
yarn add snowflakejs
```

## 🔧 Usage (JavaScript)

```js
import { generateSnowflake, getTimestamp, decodeSnowflake } from 'snowflakejs';

// Generate a BigInt ID
const id = generateSnowflake();
console.log(id.toString());

// Generate a string ID with a custom workerId
const idStr = generateSnowflake({ workerId: 42, asString: true });
console.log(idStr);

// Get timestamp from an ID
const date = getTimestamp(id);
console.log(date);


```

## 🔧 Usage (TypeScript)

```ts
import { generateSnowflake, getTimestamp, decodeSnowflake } from 'snowflakejs';

const id = generateSnowflake({ workerId: 5, asString: true });
const date = getTimestamp(id);
const parts = decodeSnowflake(id);
```

## 📝 API

### `generateSnowflake(workerId?: number): bigint`

Generate a new snowflake ID.
Returns a `bigint`.

### `generateSnowflake(options: { workerId?: number; asString?: boolean }): bigint | string`

Generate a new snowflake ID with options.
Returns a `bigint` or `string` depending on `asString`.

### `getTimestamp(snowflake: bigint | string): Date`

Extracts the original timestamp from a snowflake.



## 📄 License

MIT © \cruz-gaming

