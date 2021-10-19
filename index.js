var fare = 0.21
var reductions = {
    child: 0.2,
    senior: 0.4,
}


distanceArr = [
    ['NaN', 'edin', 'glas', 'linl', 'inve', 'stan'],
    ['edin', 0,      46.8,   19.1,   156.1,  51   ],
    ['glas', 46.8,   0,      33.7,   168.2,  73.2 ],
    ['linl', 19.1,   33.7,   0,      160.6,  59   ],
    ['inve', 156.1,  168.2,  160.6,  0,      149.2],
    ['stan', 51,     73.2,   59,    149.2,   0    ],
];

function price() {

    var str = '';

    /*CONVERT DOB TO AGE*/
    var Bdate = document.getElementById('bday').value;
    var Bday = +new Date(Bdate);
    var age = Math.floor((Date.now() - Bday) / (31557600000));

    /*FIND START AND END VALUES FROM SELECTS*/
    var start = document.getElementById('start').value;
    console.log('Start: ' + start);
    var end = document.getElementById('end').value;
    console.log('End: ' + end);

    /*CHECK START AND END ARE FILLED BEFORE CONTINUING*/
    if (start !== 'default' && end !== 'default') {

        /*SEARCH DISTANCE ARRAY FOR DISTANCE*/
        const startIndex = distanceArr[0].findIndex(element => element == start);
        console.log('distanceArr column: ' + startIndex);

        for (let i = 1; i < distanceArr.length; i++) {
            if (distanceArr[i][0] == end) {
                console.log('distanceArr row: ' + i)
                var distance = distanceArr[i][startIndex];
            } 
        }

        str += '<p>Distance: ' + distance + 'km</p>'

        /*CALCULATE FARE BEFORE REDUCTIONS*/
        var price = (distance * fare).toFixed(2);
        str += '<p>Fare price: £' + price + '</p>'

        /*TEST FOR VALID REDUCTIONS*/
        if (age < 18) {
            var discount = (price * reductions.child).toFixed(2);
            str += '<p>Child discount (20%): £' + discount

        } else if (age >= 65) {
            var discount = (price * reductions.senior).toFixed(2);
            str += '<p>Senior discount (40%): £' + discount

        } else {
            var discount = 0;

        }

        /*APPLY DISCOUNT AND PRINT*/
        price = (price - discount).toFixed(2);
        str += '<p>Total price: £' + price
        document.getElementById('reciept').innerHTML = str;
        
    } else {
        alert('Please fill the required fields.');
    }


    
}




