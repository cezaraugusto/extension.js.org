---
sort: 0

---


Welcome to the fast track of browser extension development with `Extension`! Whether you're looking to prototype quickly or delve into full-scale development, you've made the right choice. Let's get your development environment set up and running in no time.

## Kickstart Any Sample from Chrome Extension Samples

Dive right into development by starting with a sample from the Chrome Extension Samples repository. It's a great way to get acquainted with best practices and save time:

1. Open your terminal.
2. Navigate to the directory where you want your project.
3. Run the command:
   ```bash
   npx extension dev <sample-name>
   ```
   Replace `<sample-name>` with the name of the sample you wish to use from [Chrome Extension Samples](https://github.com/GoogleChrome/chrome-extensions-samples).

See the example below where we request the sample [page-redder](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/sample.page-redder) from [Google Chrome Extension Samples](https://github.com/GoogleChrome/chrome-extensions-samples).

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/34fc48f3f7954bfa990e767c6a7172f0?sid=346f6a11-58d6-48a4-8935-aac8119d765d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Use `Microsoft Edge` to Kickstart Any Sample

`Extension` supports a variety of browsers, including Microsoft Edge. To start an Edge-compatible extension, simply:

1. Open your terminal.
2. Navigate to your desired project directory.
3. Execute:
   ```bash
   npx extension dev  <sample-name> --browser=edge
   ```
   Tailor your command by replacing `<sample-name>` with the specific sample you're interested in.

> See the example below where we request the sample [magic8ball](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/api-samples/topSites/magic8ball) from  from [Google Chrome Extension Samples](https://github.com/GoogleChrome/chrome-extensions-samples) using Edge as the runtime browser.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/284d706379a84adabfdde6bd341b8d24?sid=24a4a6d5-5b30-4920-8a47-004540183aed" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Run Mozilla Add-Ons Using Edge

Bridge the gap between Firefox and Edge by running Mozilla Add-Ons using Edge:

1. Navigate to your project directory.
2. Use the command:
   ```bash
   npx extension dev <addon-name> --browser=edge --polyfill=true 
   ```
   This will fetch a Mozilla Add-On and adapt it for Edge.

> See the example below where we request the sample [Apply CSS](https://github.com/mdn/webextensions-examples/tree/main/apply-css) from [MDN WebExtensions Examples](https://github.com/mdn/webextensions-examples) using Edge as the runtime browser.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/6eb724aad822413fb4fe9f52afec5576?sid=e2aa47a4-71d4-4ff1-887a-dcf8031ea917" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Some Tips To Help You Get Started

* To use TypeScript, add a `tsconfig.json` file to the root of your extension.
* To use React, just ensure you have it as a dependency in your `package.json`.
* Any `tsconfig.json` with React support makes your project React/TypeScript ready.
* If you need to handle assets not declared in the manifest, learn more about [[Special Folders]]</a>.

## Next Steps

Start exploring the world of browser extension development with `Extension` by [[Create Your First Extension]].

---

**🧩 Extension** • create cross-browser extensions with no build configuration.