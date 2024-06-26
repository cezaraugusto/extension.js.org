---
sort: 2
---

One of the coolest features of Extension is the ability to execute remote extensions. By running a valid GitHub URL as the command argument, `Extension` downloads and execute the extension files against the target browser, as if you would using any local extension.

This is useful during prototype steps where you want to create something based on a working extension sample, such as [Chrome Samples](#) or [MDN samples](#). 

<!--
## Remote `create` command
-->

## Remote `dev` command

The `dev` command runs the extension in development mode with support for reloading upon file changes. By passing a valid GitHub URL (as long as there is a valid manifest file), Extension will download the files to your current directory and run your extension against the current browser.

In the example below, we are using the remote Chrome Sample [page_redder](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/sample.page-redder) from [Google Chrome Extension Samples](https://github.com/GoogleChrome/chrome-extensions-samples).


<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/0784ab76979543cf9e52b1bbcd4d0870?sid=12eece27-ee48-4fd2-a624-83b7d377dc0a" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Remote `start` command

The `start` command runs the extension in production mode **without** support for reloading upon file changes. This is how your extension will look like for users, the equivalent of running a browser against the `build` of your extension. Aside from the reloading capability, runs the same way as the `dev` command does.

In the example below, see [page_redder](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/sample.page-redder) from [Google Chrome Extension Samples](https://github.com/GoogleChrome/chrome-extensions-samples) running via `start`. The key difference between `dev` and `start` is the mode `development` and `production` respectively. 

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/0bb506fdbf0b4d2b9e1b0ae19500e6ce?sid=5e65e1cb-72ba-4941-8393-017405503bde" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Remote `build` command

Builds your extension with production defaults. The build command does not run any browser, but uses it to validate files.

In the example below, using the same [page_redder](https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/sample.page-redder) sample from Chrome.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/2550d6bd1e264f189b0d40112bac02cb?sid=98f0a696-fac6-4f36-b03d-73106e76ce9a" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Next Steps

- Learn how to use different browsers as a target for your extension in [[Browser Runners]].
- Learn how to polyfill your extension so it runs across all major browsers in [[Browser API Support]].

---

**🧩 Extension** • create cross-browser extensions with no build configuration.
