# Awesome Rovers

### [🌎 VISIT HERE 🌕](https://dsonyy.github.io/awesome-rovers)

## Build and Serve

Follow these steps to build and serve the site locally:

1. **Install Ruby, Bundler, and Jekyll**  
   Make sure Ruby is installed on your system. Then, install Bundler and Jekyll:

   ```bash
   sudo gem install bundler jekyll
   ```

2. **Install Dependencies**  
   Ensure you have Ruby, Bundler, and Jekyll installed. Then, install the required gems:

   ```bash
   bundle install
   ```

3. **Build the Site**  
   Generate the static files in the `_site` directory:

   ```bash
   bundle exec jekyll build
   ```

4. **Serve the Site**  
   Serve the site locally at `http://localhost:4000`:
   ```bash
   bundle exec jekyll serve
   ```

## Contributing

### Adding a rover

To add a new rover article to the website:

1. Go to the `_rovers` directory in the repository.
2. Copy the `_template.md` file. This template file provides the structure needed for each new article.
3. Rename the file to the unique name of your rover.
4. Fill in the content as instructed in the template, including any relevant metadata (like title, description, etc.).
5. Add any images related to your article in the `/assets/img/name-of-your-rover/...` directory. Make sure to use descriptive names to keep the images organized.
6. Afterward, please submit a pull request for review.

## Other Changes

If you have any other ideas, improvements, or fixes, feel free to make those changes and submit them in a pull request. Contributions of all kinds are welcome and highly appreciated!

## Development

- Based on modified [LightSpeed](https://github.com/tajacks/lightspeed) Jekyll theme under GPLv3.
