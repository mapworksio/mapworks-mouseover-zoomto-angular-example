/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
    entryPoints: ["src/app/mapworks/mapworks.types.ts", "src/app/mouseover/mouseover.types.ts"],
    plugin: "typedoc-plugin-markdown",
    out: "docs/api",
    name: "Mapworks",
    readme: "NOTES.md"
};