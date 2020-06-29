class WebpackClearConsole {
  apply(compiler) {
    const plugin = (compilation, callback) => {
      compilation.chunks.forEach((chunk) => {
        chunk.files.forEach((filename) => {
          let source = compilation.assets[filename].source();
          var consoleName = ["console", "window.console"];
          var consoleType = ["log", "info"];
          let rConsole = new RegExp("(" + consoleName.join("|") + ")" + ".(?:" + consoleType.join("|") + ")\\s{0,}\\([^;]*\\)(?!\\s*[;,]?\\s*\\/\\*\\s*NotClearConsole\\s*\\*\\/)\\s{0,};?", "gi");
          source = source.replace(rConsole, function () {
            return source.replaceWith || "";
          });
          compilation.assets[filename] = {
            source: function () {
              return source;
            },
            size: function () {
              return source.length;
            }
          }
        });
      });
      callback();
    }

    if (compiler.hooks) {
      compiler.hooks.emit.tapAsync('WebpackClearConsole', plugin)
    } else {
      compiler.plugin('emit', plugin)
    }
  }
}

module.exports = WebpackClearConsole;