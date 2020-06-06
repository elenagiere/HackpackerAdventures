# HackpackerAdventures

### Environment Setup
node version: v11.11.0
#### Install node modules within base folder
`$ yarn`
#### Install node modules within client folder
`$ cd client/`

`$ yarn`
#### Locally deploy UI (within client/)
`$ yarn start`

*Should auto open http://localhost:3000/ within browser*

#### Locally run server
`$ node index.js`

### Heroku Cloud Deployment
`$ git add .`

`$ git commit -m "Added files to deploy to heroku cloud`

`$ heroku login`

*enter your heroku credentials*

`$ heroku create`

`$ git push heroku master`

*now deployed to Heroku*

##### other commands
`$ heroku --tail (watch logs)`

### Backlog
- Set up MailChimp Api key for local backend setup
- Expense uploads for exisitng trips
- About Us Text
- Other text (health & fitness) or put behind feature flag
- Subscription Functionality (MailChimp)
- Create Welcoming Email
- picture downsizing
- Searchable?
- Comments
- Google Searchable improve
- 
