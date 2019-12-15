/* Global Variables */

// US is default country. Parameters are zip code and country code
const baseurl =
const apiKey = 

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();






// POST Data
const postData = async (url = '', data = {}) =>{
    console.log(data);
        const response = await fetch(url, {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json',
          },
          // Body data type must match "Content-Type" header
          body: JSON.stringify(data)
        });

        try {
            const newData = await response.json();
            console.log(newData);
            return newData;
        } catch (error) {
            console.log("error", error);
        }
};

// Fetch call
const getTemperature = async(baseurl, zip, key) => {
    const res = await fetch(baseurl + zip + key + "&units=metric");
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
};