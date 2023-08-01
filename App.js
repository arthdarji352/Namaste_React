import React from "react";
import ReactDOM from "react-dom/client";

// • HMR – Hot Module replacement
// • Implements a File Watcher using File Watcher Algo (written in C++)
// • Bundling all the necessary files
// • Minifying the code . For ex : All the code in the libraries i.e. react and react-dom, that we imported in App.js will be
// placed in a single js file, that you can find in the dist folder (there can be multiple js files for a single original js file
// too, don’t worry).
// • Cleaning our code. For ex :- It removes all the console.logs from our project in the production build
// • Image optimization. If there’s an image in our project, parcel will optimize it so that the image does not take too
// much time to load in the user’s website. This is very helpful, since images are the most heavy things in our website.
// • Caching while development
// • Compression. It compresses the files by renaming the variable names to smaller names and other techniques.
// • Compatible with older versions of browsers
// • It can automatically handle the port number in which our server runs.
// • Uses Consistent Hashing Algorithm.
// • It’s a Xero Config Module Bundler.
const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1  for parcel"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
//async defer
root.render(container);
