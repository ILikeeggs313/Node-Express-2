//turn a string of 24h time into words.

//two digit hour 00-23, and a two-digit minute 00-59
//Hours 0-11 are am, 12-23 are pm

const timeWord = function (time){
    // "split time into hour and minute array to easily work with arrays"
    const timeArr = time.split(":");
    //do we need to switch string to integers ?
    //place holder functions to switch them into int using parseInt
    const hour = parseInt(timeArr[0]);
    const minute = parseInt(timeArr[1]);
    //array of res
    const res = [];
    //if 00:00, return midnight
    if(hour === 0 & min === 0){
        return 'midnight';
    } else if( hour === 12 & min === 0){
        return 'noon'
    } else if (hour === 0){
        res.push('twelve')
    } else if (hour > 12 && hour < 25){
        //since we use the am and pm hours, we cna convert hours here
        let convertHr = hour - 12;
        res.push(hoursInDay.single[convertHr]);

    } else{
        return `Please enter a valid time`;
    }
    if (min < 10 && min > 0){
        res.push(" o " + hoursInDay.single[min]);
    } else if (min >= 10 && min <= 19){
        res.push(hoursInDay.single[min]);

    }   else if(min > 19){
        let set = min.toString().split("");
        if(set[1] !== '0'){
            //to get minutes that are bigger than 19
            set = hoursInDay.multiple[set[0]] + " - " + hoursInDay.single[set[1]];
            res.push(set);

        }   else{ //otherwise with minutes smaller or equal to 19
            set = hoursInDay.multiple[set[0]];
            res.push(set);
        }
        //stand alone function to convert time into am and pm
        if(hour >= 12){
            res.push("pm")
        } else{
            res.push("am")
        }

}
    return res.join("");
}

//stand alone num pairs
const hoursInDay = {
    single: {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: 'eightteen',
        19: "nineteen"
      },
    multiple: {
    2: "twenty",
    3: "thirty",
    4: 'fourty',
    5: "fifty"
    }
};

module.exports = timeWord;
