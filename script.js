
// Affiche un spinner
export default function displaySpinner() {

    setTimeout(function () {
        document.getElementById("spin").hidden = false;
    });

    setTimeout(function () {
        document.getElementById("spin").hidden = true;
    }, 5000);

}
