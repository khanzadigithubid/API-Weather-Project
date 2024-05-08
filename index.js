import axios from 'axios';
import inquirer from 'inquirer';
async function fetchWeatherData(location, format, u) {
    const options = {
        method: 'GET',
        url: 'https://yahoo-weather5.p.rapidapi.com/weather',
        params: {
            location,
            format,
            u
        },
        headers: {
            'X-RapidAPI-Key': 'f02251ccebmshdfad8df46ea52f8p15aaa6jsn132f93690f1c',
            'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        console.log(response.data);
    }
    catch (error) {
        console.error(error);
    }
}
async function getUserInput() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'location',
            message: 'Enter the location:'
        },
        {
            type: 'list',
            name: 'format',
            message: 'Select the format:',
            choices: ['json', 'xml']
        },
        {
            type: 'list',
            name: 'u',
            message: 'Select the unit for temperature:',
            choices: ['f', 'c']
        }
    ]);
}
async function main() {
    try {
        const userInput = await getUserInput();
        const { location, format, u } = userInput;
        await fetchWeatherData(location, format, u);
    }
    catch (error) {
        console.error('An error occurred:', error);
    }
}
main();
