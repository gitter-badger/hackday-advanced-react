# Optimisations

The goal of this exercise is to optimize the shittiest web app ever.

The first thing you should do is take a look around the app. If you open the "Pure Components" tabs you can notice how laggy that part of the app is .. I mean try and play with the input field, it's not responding to inputs, the timer on the page is really slow,...

## Optimising the Pure Components Page

Open the chrome dev tools and navigate to the performance tab, start recording for a couple of seconds then open the "User Timing" dropdown, you can see when and which components rerender, as you can see the Pure Components updates quite frequently but then every 10ms the RandomEmojis redenders aswell which makes the page very slow!

Using a PureComponent (imported from React), change the RandomEmoji component so that it only updates when its props changes or its state changes.

It should already be much better by now.

Start the performance recorder again and play with the Text reverser input field, you should see that our Text Components are being re-rendered every time the counter changes, let's extract the reverse text functionality into its own PureComponent

This part of the App should now be blazing fast! Great!

## Optimising the build size with code splitting

Run yarn build && yarn serve, this should open the production version of the app on the port 4324

Something that is not so great is our build size/loading time ... Open the Audit tab in your chrome dev tools and run a performance audit, you should get a pretty mediocre result ..

What you want to do at this point to already reduce by a good chunk our build size is to use route-based code splitting, meaning that each route of the app is going to have its own bundle.

Why is this interesting? Each page imports big libraries that the user will probably not need during their visit ! For example, the Stats page uses Victory-graph,

In order to do that we're going to use [React-loadable](https://github.com/jamiebuilds/react-loadable).

## Further optimising our bundles using source-map-explorer

Source-map-explorer is a tool that will help us find what's making our bundles so large.

Start by inspecting your main bundle with this command

```bash
yarn source-map-explorer build/static/js/main.*
```

```JavaScript
// ProTip, you can name your chunk easily by adding a comment in your dynamic import
import(/* webpackChunkName: "Stats" */ './Stats').then(({Stats}) => Stats)
```

You can see that it is using luxon and redux-form even thought they're not being used on the landing page, we'll tackle redux-form later but we can take care of luxon now.

You can see that in the App component we're importing `capitalizeTitle` from utils.js, and now if you look at utils.js you can see that utils imports Luxon, what you have to do now is split the utils file into two different files so that you can import `capitalizeTitle` without importing Luxon.

After doing that rebuild the app (yarn build) and make sure that luxon is not in your main bundle anymore.

If you run a performance audit again you should get a much better score

## Lazy Loading images

Off screen images should be lazy loaded, on the landing page there's a 2.5Mb picture at the bottom of the page blocking the user from loading the page even though he might not event see it!

Use [react-lazyload](https://github.com/jasonslyvia/react-lazyload) to speed up the loading of your landing page

## Inlining Critical CSS

If you look at the report of the performance audit you can see that the css is blocking the rendering for ~1s. Using [critical CSS](https://www.npmjs.com/package/critical), inline the CSS as part of your build process.

## Bonus: Code splitting Redux to get rid of redux form on the main bundle

Lazy load the redux-form reducer: [http://nicolasgallagher.com/redux-modules-and-code-splitting/](http://nicolasgallagher.com/redux-modules-and-code-splitting/)

You should now get a pretty small bundle size!
