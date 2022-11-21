# @iggalaxy/cap-tracking

Capacitor plugin for accessing iOS tracking state

## Install

```bash
npm install @iggalaxy/cap-tracking
npx cap sync
```

## API

<docgen-index>

* [`getStatus()`](#getstatus)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getStatus()

```typescript
getStatus() => Promise<{ status: AuthorizationStatus; }>
```

**Returns:** <code>Promise&lt;{ status: <a href="#authorizationstatus">AuthorizationStatus</a>; }&gt;</code>

--------------------


### Enums


#### AuthorizationStatus

| Members              |
| -------------------- |
| **`NOT_DETERMINED`** |
| **`RESTRICTED`**     |
| **`DENIED`**         |
| **`AUTHORIZED`**     |

</docgen-api>
