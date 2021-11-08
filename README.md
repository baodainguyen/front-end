1. Install *@babel/preset-react*
    ```
    npm install --save-dev @babel/preset-react
    ```
2. Add *@babel/preset-react* to *.babelrc* file
3. Use *public* folder in *webpack.config.js* to publish app on Firebase_
    ```
    path: path.join(__dirname, '/public'),
    ```
4. Deploy app doc ref from [react app deployment](https://create-react-app.dev/docs/deployment/#firebase)
5. **Signup Firebase_account**
6. Install Firebase_cli
    ```
    npm install -g firebase-tools
    ```
7. Settings Firebase_ [Terminal's Log](https://github.com/baodainguyen/front-end/blob/main/log.txt)
    1. ``` firebase login ```
        - Allow Firebase to collect CLI usage and error reporting information? Yes
    2. ``` firebase init ```
    3. Which Firebase features do you want to set up for this directory?
        - [x] Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
    4. Select a default Firebase project for this directory: front-end-xxx (front-end)
        - [x] Enter
    5. Using project front-end-xxx (front-end)
        - [x] Enter
    6. What do you want to use as your public directory? (public)
        - [x] public/Enter
    7. Configure as a single-page app (rewrite all urls to /index.html)?
        - [x] Y
    8. Set up automatic builds and deploys with GitHub?
        - [x] Y
    9. Yes for all next instructions -> Firebase initialization complete!
8. Type ``` npm run build ```
9. Finally ``` firebase deploy ```