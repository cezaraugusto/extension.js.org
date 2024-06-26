// @ts-check

/**
 * @typedef {import('./app-config.schema').AppConfig} AppConfig
 * @typedef {import('./app-config.schema').NotesQuery} NotesQuery
 * @typedef {import("./lib/modules/dynamic-content/query-runner").QueryDef} QueryDef
 */

module.exports = {
  /**
   * @param {AppConfig} config
   * @returns {AppConfig}
   */
  defineConfig(config) {
    return applyDefaults(config);
  },

  /**
   * Creates a query definition for notes.
   * @param {NotesQuery} query
   * @returns {QueryDef}
   */
  createNotesQuery(query = {}) {
    return {
      sort: ["data.sort", "title"],
      tree: query.tree ? query.tree : false,
      filter: [
        ["filePathStem", "isNotEqual", "/index"],
        ...(query.pattern ? [["filePathStem", "matches", query.pattern]] : []),
        ...(query.tags ? [["tags", "includesAllOf", query.tags]] : []),
      ],
    };
  },
};

/**
 * Merges the custom config with the default config.
 * @param {AppConfig} custom
 * @returns {AppConfig}
 */
function applyDefaults(custom) {
  return {
    title: "🧩 Extension",
    description: "Create cross-browser extensions with no build configuration.",
    lang: "en",
    ...custom,
    theme: {
      color: "green",
      ...custom.theme,
    },

    customProperties: {
      properties: [],
      ...custom.customProperties,
    },
    sidebar: {
      links: [],
      sections: [
        {
          label: "Notes",
          groups: [
            {
              query: {
                sort: ["data.sort", "title"],
                filter: [["filePathStem", "isNotEqual", "/index"]],
              },
            },
          ],
        },
      ],
      ...custom.sidebar,
    },
    panel: {
      tableOfContents: true,
      customProperties: true,
      tags: false,
      incomingLinks: true,
      outgoingLinks: true,
      externalLinks: true,
      ...custom.panel,
    },
    wikilinks: {
      autoLabel: "ref",
      anchorLabel: "none",
      ...custom.wikilinks,
    },
    tags: {
      map: {},
      ...custom.tags,
    },
    notes: {
      pathPrefix: "/n",
      ...custom.notes,
    },
  };
}
