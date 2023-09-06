# AI Article Summarizer

## Overview

AI Article Summarizer is a web application built with ReactJS that allows users to input the URL of an article. The application will then retrieve and display a concise summary of the article.

## Features

- **URL Input**: Users can input a URL to get an article summary.
- **Article History**: Saves summarized articles locally so you can review them later.
- **Copy to Clipboard**: Users can copy the summarized text or URL for their convenience.
- **Fast and Efficient**: Utilizes lazy fetching and state management for optimized performance.

## Credits

This project is based on a tutorial by JavaScript Mastery. You can check out their GitHub repository [here](https://github.com/adrianhajdin).

## Technologies Used

- ReactJS
- Redux Toolkit
- Local Storage for storing article summaries
- RapidAPI for article summary API calls

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/goodpudding/Ai_Summarizer.git
    ```

2. Navigate into the project directory:

    ```bash
    cd Ai_Summarizer
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

## How To Use

1. Open the application in your web browser.
2. Input the URL of the article you wish to summarize.
3. Click the submit button or press Enter.
4. The summary will be displayed below the input field.
5. If you want, you can copy the URL or the summary text to the clipboard.

## Troubleshooting

If you encounter a `403 error`, it means you might not have access to the API endpoint for summarizing the article. Please ensure you have set up the API credentials correctly.

## Contributing

Feel free to open issues or provide pull requests.

## License

MIT License
