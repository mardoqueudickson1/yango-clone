const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
const { getDefaultConfig } = require("expo/metro-config");


module.exports = withNativeWind(config, { input: "./src/styles/global.css" });


/** @type {import('expo/metro-config').MetroConfig} */

module.exports = config;
