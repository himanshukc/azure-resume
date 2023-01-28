
window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const fuctionApi = '';

const getVisitCount = () => {

    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;

    }).catch(fuction(error){
        console.log(error);
    });
    return count;
}