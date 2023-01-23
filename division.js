function vacation(people, typeGroup, day) {
    let price = 0;
    let discount = 0;

    switch (day) {
        case 'Friday':
            if (typeGroup == 'Students') {
                if (people >= 30) {
                    price = people * 8.45;
                    discount = price * 0.85;
                } else {
                    discount = people * 8.45;
                }
            } else if (typeGroup == 'Business') {

                if (people >= 100) {
                    people -= 10;
                    discount = people * 10.90;
                } else {
                    discount = people * 10.90;
                }
            } else if (typeGroup == 'Regular') {

                if (people >= 10 && people <= 20) {
                    price = people * 15;
                    discount = price * 0.80;
                } else {
                    discount = people * 15;
                }
            } break;

        case 'Saturday':
            if (typeGroup == 'Students') {
                if (people >= 30) {
                    price = people * 9.80;
                    discount = price * 0.85;
                } else {
                    discount = people * 8.45;
                }
            } else if (typeGroup == 'Business') {

                if (people >= 100) {
                    people -= 10;
                    discount = people * 15.60;
                } else {
                    discount = people * 15.60;
                }
            } else if (typeGroup == 'Regular') {

                if (people >= 10 && people <= 20) {
                    price = people * 20;
                    discount = price * 0.80;
                } else {
                    discount = people * 20;
                }
            } break;

        case 'Sunday':
            if (typeGroup == 'Students') {
                if (people >= 30) {
                    price = people * 10.46;
                    discount = price * 0.85;
                } else {
                    price = people * 8.45;
                }
            } else if (typeGroup == 'Business') {

                if (people >= 100) {
                    people -= 10;
                    discount = people * 16;
                } else {
                    discount = people * 16;
                }
            } else if (typeGroup == 'Regular') {

                if (people >= 10 && people <= 20) {
                    price = people * 22.50;
                    discount = price * 0.80;
                } else {
                    discount = people * 22.50;
                }
            }
    }
    console.log (`Total price: ${discount.toFixed(2)}`)
}

vacation (40,
    "Regular",
    "Saturday"    
    )
