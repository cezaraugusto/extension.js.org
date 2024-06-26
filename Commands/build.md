---
sort: 4
---

![The build command line interface](./assets/build.png)

```sh
npx extension build [extension-path | extension-url] [options]
```

**Responsible for building the extension in production mode.** Builds the extension for production, based on the browser choice. The `build/` folder will include as many subfolders as the user browser choices. Each subfolder includes the code for that specific browser, with proper code transforms for each platform.

Users can also opt for a different port to run their extensions. Defaults to `:8889`.

## Arguments And Flags

| Flag          | Argument                                | What it does                                  | Defaults to |
| ------------- | --------------------------------------- | --------------------------------------------- | ----------- |
| [path or url] | The extension path or the remote extension URL      | If a path is defined, builds the local extension. If a URL is provided, pulls the extension from remote source and builds it as a local extension         | `process.cwd()`        |
| -b, --browser | The browser that will run the extension | Changes the browser (`chrome`, `edge`, `all`) | "chrome"    |

---

**🧩 Extension** • create cross-browser extensions with no build configuration.
