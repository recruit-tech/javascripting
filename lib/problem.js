const path = require("path");
const fs = require("fs");
const getFile = require("./get-file");
const compare = require("./compare-solution");

module.exports = function createProblem(dirname) {
  const exports = {};

  let problemName = dirname.split(path.sep);
  let i18n;

  problemName = problemName[problemName.length - 1];

  exports.init = function (workshopper) {
    i18n = workshopper.i18n;
    const postfix =
      workshopper.i18n.lang() === "en" ? "" : "_" + workshopper.i18n.lang();
    this.problem = { file: path.join(dirname, "problem" + postfix + ".md") };
    this.solution = { file: path.join(dirname, "solution" + postfix + ".md") };

    // Check for the existence of index.[js, mjs, cjs]
    const jsSolutionPath = path.resolve(
      __dirname,
      "..",
      "solutions",
      problemName,
      "index.js",
    );
    const mjsSolutionPath = path.resolve(
      __dirname,
      "..",
      "solutions",
      problemName,
      "index.mjs",
    );
    const cjsSolutionPath = path.resolve(
      __dirname,
      "..",
      "solutions",
      problemName,
      "index.cjs",
    );
    // Set solutionPath to the first existing file
    if (fs.existsSync(jsSolutionPath)) {
      this.solutionPath = jsSolutionPath;
    } else if (fs.existsSync(mjsSolutionPath)) {
      this.solutionPath = mjsSolutionPath;
    } else if (fs.existsSync(cjsSolutionPath)) {
      this.solutionPath = cjsSolutionPath;
    } else {
      throw new Error(`No solution file found for problem: ${problemName}`);
    }

    this.troubleshootingPath = path.join(
      __dirname,
      "..",
      "i18n",
      "troubleshooting" + postfix + ".md",
    );
  };

  exports.verify = function (args, cb) {
    const attemptPath = path.resolve(process.cwd(), args[0]);
    compare(
      this.solutionPath,
      attemptPath,
      i18n,
      function (_, match, obj) {
        if (match) {
          return cb(null, true);
        }

        if (!obj) {
          // An error occured, we've already printed an error
          return;
        }

        let message = getFile(this.troubleshootingPath);

        message = message.replace(/%solution%/g, obj.solution);
        message = message.replace(/%attempt%/g, obj.attempt);
        message = message.replace(/%diff%/g, obj.diff);
        message = message.replace(/%filename%/g, args[0]);

        exports.fail = [{ text: message, type: "md" }, require("./footer.js")];

        cb(null, false);
      }.bind(this),
    );
  };

  return exports;
};
