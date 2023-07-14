import axios from "axios";
const BASE_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/";

async function getDeck(){
    let response = await axios({
        url: BASE_URL,
        method:"GET",
        data:{count:1}
    });
    console.log(response);
};
