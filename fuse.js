const { FuseBox } = require("fuse-box");

const fuse = FuseBox.init({
    homeDir : "src",
    output : "dist/$name.js",
    target : "server@esnext"
});

fuse.bundle("app")
    .watch()
    .completed(proc => proc.exec())
    .instructions(">index.ts")
fuse.run();