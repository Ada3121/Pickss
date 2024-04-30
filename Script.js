// Dummy data representing codes for each day
const codes = {
    "2024-04-30": "ABC123",
    "2024-05-01": "DEF456",
    // Add more codes for future dates
};

function payNow() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Month is zero-based
    var year = currentDate.getFullYear();
    var fullDate = year + "-" + padNumber(month) + "-" + padNumber(day);
    
    var code = codes[fullDate];
    if (code) {
        document.getElementById('displayCode').innerText = "Today's Code: " + code;
    } else {
        document.getElementById('displayCode').innerText = "No code available for today.";
    }
}

function padNumber(num) {
    return num.toString().padStart(2, '0');
}
