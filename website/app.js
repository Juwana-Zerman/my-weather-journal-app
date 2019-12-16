/* Global Variables */
// US is default country. Parameter is zip code,country code
const url = "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";
const apiKey = "&APPID=d6bbb6da24f0e6d2203675681ff4867c";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getTheData = async (url = '') => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

// POST Data
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
          // Body data type must match "Content-Type" header
        body: JSON.stringify(data)
        });
};

const updateData = async () => {
    const projectData = await getTheData('/data');
    document.getElementById('date').innerHTML = `${projectData.date}`;
    document.getElementById('temp').innerHTML = `${projectData.temperature} &#8457`;
    document.getElementById('content').innerHTML = projectData.feelings;
};

const generateData = async () => {
    const feelings = document.getElementById('feelings').value;
    const zip = document.getElementById('zip').value;
    const response = await fetch(`${url}${zip}${apiKey}`);
    try {
        const data = await response.json();
        data.feelings = feelings;
        data.date = newDate;
        await postData('/', data);
        updateData();
    } catch (error) {
        console.error("error", error);
    }
};

document.getElementById('generate').addEventListener('click', generateData);