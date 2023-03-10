#!/usr/bin/env node
// cross-plattforn wrapper to run nginx in the foreground
const { resolve } = require("path");
const { exec } = require("child_process");

const config = process.argv[2];

const options = {};
const configPath = resolve(config);

const nginx = exec(`nginx -c "${configPath}"`, options);
nginx.stdout.on("data", data => {
  process.stdout.write(data);
});
nginx.stderr.on("data", data => {
  console.log("📮 ERROR: Unable to start Nginx");
  console.log(data);
  if (data.includes("already in use") || data.includes("could not bind")) {
    console.log(
      "🧲 Port 3000 seems to be occupied by another application."
    );
  } else {
    if (process.platform === "darwin") {
      console.log(
        "🦑 Is Nginx installed?\nInstalling it via Homebrew https://brew.sh/ is a good option.\n$ brew install nginx\n"
      );
    }
    if (process.platform === "linux") {
      console.log(
        "🦑 Is Nginx installed?\nInstall it via your system's package manager.\ne.g. $ sudo apt-get install nginx\n"
      );
    }
    console.log(
      "👉 Still issues? Please describe your environment at https://github.com/naltatis/micro-frontends-in-action-code/issues."
    );
  }
  process.exit(1);
});
