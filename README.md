# create-sprite-tool

This template creates a project for managing Mapbox spritesheets

    $ npm create sprite-tool sprites

This will create a `sprites` folder in the current working directory, with a set of tools for working with Mapbox spritesheets.

    $ cd sprites

Once you're in the sprites directory, you can do the following:

* Import existing spritesheets
* Add SVG images
* Create a spritesheet with the contents from all imported spritesheeds and added SVG images

## Import existing spritesheets

This is done by using the

    npm run import -- <sprite url>

syntax. Example:

    $ npm run import -- https://kataster.bev.gv.at/styles/sprite

This will load  https://kataster.bev.gv.at/styles/sprite.json,  https://kataster.bev.gv.at/styles/sprite.png,  https://kataster.bev.gv.at/styles/sprite@2x.json and  https://kataster.bev.gv.at/styles/sprite@2x.png, and extract all png files from that spritesheet to the `icons/` and `icons2x/` folders.

## Add SVG images

To add SVG images, put the SVG files in the `svg/` folder, and run

    $ npm run svg

This will create png images from all SVGs in the `svg/` folder and put them in the the `icons/` and `icons@2x/` folders, with the appropriate sizes.

## Create a spritesheet

To create a spritesheet from everything in the `icons/` and `icons@2x/` folders, run

    $ npm run sprite

This will put the final spritesheet files (`sprite.json`, `sprite.png`, `sprite@2x.json`, `sprite@2x.png`) in the `sprite` folder.