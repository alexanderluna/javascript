# Building React Apps with Babel and Webpack

Since react apps are usually written in JSX syntax it is a good practice to setup an automated build process to transpile ES6 and JSX syntax to plain Javascript syntax ready for the browser to understand it.

1. [Setup](#setup)
2. [Using Babel](#using-babel)
3. [Webpack with Babel](#webpack-with-babel)
4. [JSON](#json)
5. [CSS and SASS](#css-and-sass)

## Setup

To run our project quick and easy we installed globally `httpster` and inside our `package.json` file we specifed this as our `npm start` command:

```
"scripts": {
  "start": "httpster -d ./dist -p 5000"
}
```

## Using Babel

Using babel (globally) as a stand alone npm module, we create a `.babelrc` file to configure babel with this basic setup:

```
{
  "presets": ["latest", "react", "stage0"]
}
```

All that is left is to install the required babel modules:

```
npm i --save-dev babel-preset-latest babel-preset-react babel-preset-stage-0
```

Using this setup, we can now transpile our JSX syntax to Javascript. In our case our starting file is `index.js` inside our `src` folder and we want the output to be in `dist/bundle.js`. For that we can run the command:

```
babel ./src/index.js --out-file ./dist/bundle.js
```


## Webpack with Babel
To use webpack we have to install it first:

```
npm i --save-dev webpack@1.13.3
npm i --save-dev webpack-dev-server@1.16.2
```

Using webpack we have to create a config file as well named `webpack.config.js`:

```
var webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 5000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ["babel-loader"],
        query: {
          presets: ["latest", "react", "stage-0"]
        }
      }
    ]
  }
}
```

unlike with babel we specify the source and destination in here rather than when running the command using `entry` and `output`. Similary we specify which files to transpile, exclude and which modules to use using the `test`, `exclude` and `query` attributes inside the `loaders` array.

On top of this, we can also start our server at the same time using webpack and tell webpack to watch for any changes.
Finally all we need is to change our `npm start` command inside our `package.json` file:

```
"scripts": {
  "start": "./node_modules/.bin/webpack-dev-server"
}
```

Running `npm start` webpack will watch for any changes and transpile everything for us.


## JSON

If we want to process our JSON files using webpack can add a simple loader that takes care of that. First install the `json-loader`:

```
npm i --save-dev json-loader
```

now add the loader to our `webpack.config.js` file:

```
{
  test: /\.json$/,
  exclude: /(node_modules)/,
  loader: "json-loader"
}
```


## CSS and SASS

We can also use webpack to inline our `css` and even convert `sass` to normal inline css. All we have to do is add the loaders and install the modules:

```
npm i style-loader css-loader autoprefixer-loader sass-loader node-sass --save-dev
```

Now we can add them to our loaders:

```
loaders: [
  {
    test: /\.js$/,
    exclude: /(node_modules)/,
    loader: ["babel-loader"],
    query: {
      presets: ["latest", "react", "stage-0"]
    }
  },
  {
    test: /\.json$/,
    exclude: /(node_modules)/,
    loader: "json-loader"
  },
  {
    test: /\.css$/,
    exclude: /(node_modules)/,
    loader: "style-loader!css-loader!autoprefixer-loader"
  },
  {
    test: /\.scss$/,
    exclude: /(node_modules)/,
    loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
  }
]
```

running `npm start` will now automatically all the `css` and `sass` processing for us.
