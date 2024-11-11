## `<Suspense>`:

React has built a built-in `<suspense>` component which is used only as a fallback (an alternative plan in case of your original plan is loading/unavailable) untill its childern have finished loading or finished fetching data:

Previously we used to apply `if-else` condition to show some message untill `API is fetching data` but react has introduced a `<suspense>` element to perform the same function.

#### Process of using suspense:

You can simple apply fallback plan by placing your main component inside the `<suspense>` element as follows:

```tsx
import {suspense} from "rect"

    <suspense fallback={Loading} />
        <SomeComponent />
    </suspense>
```

The above code means, If `<SomeComponent />` is busy in fetching data then in a mean time `<suspense>` will show a loading message as a fallback which is definded in `{loading}`.

#### Revealing content together at once:

By default, the whole tree inside Suspense is treated as a single unit.
For example, Users will not be able to view data unless all the components are ready to view the content.

```tsx
<Suspense fallback={<Loading />}>
  <Biography />
  <Panel>
    <Albums />
  </Panel>
</Suspense>
```

Even If `Biography` has fetched the data but `Albums` component is still fetching then Biography will be able to show its content.

But If you don't want above app's behaviour in your application then you can also set your app to show `increamental data`, i.e. if one component is ready to view data then show its data without waiting for another compnent to end fetching.

For Example:-

import { Suspense } from 'react';

```tsx
<Suspense fallback={<BigSpinnerLoading />}>
  <Biography />
  <Suspense fallback={<AlbumsGlimmerLoading />}>
    <Panel>
      <Albums />
    </Panel>
  </Suspense>
</Suspense>
```

In the above Example we have created nested `<suspense>` which means that `<Biography />` would load the content without waiting for the `<Albums />` to finish the data fetching.
