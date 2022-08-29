# Project 4: Evaluate News with NLP
__Udacity Front End Developer Nanodegree Program__

Project 4 requires the building app that will accept a URL as input and process the URL content (i.e. a news article) using NLP.  For details on the project requirement, see [REQUIREMENTS](REQUIREMENTS.md) and the orignal template project repository with detailed instructions [here](https://github.com/udacity/fend/tree/refresh-2019/projects/evaluate-news-nlp).

# Example Screenshot
![Screenshot](/src/client/img/screenshot.png)

- [Project 4: Evaluate News with NLP](#project-4-evaluate-news-with-nlp)
- [Example Screenshot](#example-screenshot)
- [Installation](#installation)
- [License](#license)
  

# Installation
To install the code, use `git clone` to copy the repo locally.  Alternatively you can download the files from this repository.

From the root folder in the project, install nodejs and node packager manager.  For example:
```bash
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Consult the [npm docs](https://nodejs.org/en/download/package-manager/) for installation on other platforms.

Then  `cd` into the root project folder and run:
- `npm install`

You will need to create a `.env` file that contains an API key for [MeaningCloud's sentiment analysis API](https://www.meaningcloud.com/developer/sentiment-analysis/doc) and set the port you want the server to run in.  Example is shown below.

```
API_KEY =' <your api key goes here>
PORT = 8080
```

Once installation is complete, you can use the run scripts to build and test in different enviroments.

For development:
```bash
npm run build-dev
```

For a production enironment:
```bash
npm run build-prod
npm run start
```

To run the jest test:
```bash
npm run test
```

# License
MIT License - Copyright (c) 2022 Stuart Kozola