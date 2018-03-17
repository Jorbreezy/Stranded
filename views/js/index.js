/* global $*/
var weights = {
    1: 3221,
    2: 187000,
    3: 60000
};

var energyUnits = {
    gasoline: 'liters',
    cookingOil: 'liters',
    jetFuel: 'liters',
    coal: 'kilograms',
    uranium: 'kilograms',
    liBattery: 'AA batteries'
};

var energyAmounts = {
    1: 34.2 * 1000000,
    2: 34 * 1000000,
    3: 37.4 * 1000000,
    4: 30 * 1000000,
    5: 80620000 * 1000000,
    6: 11050
};

// output in Joules
function energyCalc(amount, energyType) {
    console.log('ENERGYCALC', amount, energyType, energyAmounts[energyType] * amount)
    return (energyAmounts[energyType] * amount);
}

function distanceCalc(energy, vType) {
    console.log('DISTANCECALC', energy, vType, energy / weights[vType])
    return (energy / weights[vType]);
}

function findDistance(amount, energyType, vType) {
    return (distanceCalc(energyCalc(amount, energyType), vType));
}

var arr = ["Select One", "Gasoline", "Cooking Oil", "Jet Fuel", "Coal", "Uranium", "Lithium Battery"];

var clicked;

$(document).ready(function() {
    
    $(".e").hide();
    //$(".btn").hide();


    $(".car").click(function() {
        energy();
        clicked = 1;

        //$(".car").css("border-color","red");
    });

    $(".ship").click(function() {
        energy();
        clicked = 2;
    });

    $(".plane").click(function() {
        energy();
        clicked = 3;
    });

    $(".energy").change(function() {
        var value = this.value;

        print(".data", row("<label>Amount of energy</label><hr /><center>" + dc(input(eC(value)))) + "<br /><button class='btn btn-primary'>Submit</button></center><hr />");

    });

    function input(content) {
        return "<center><input type='number' min='0' style='width:300px' class='en form-control' placeholder='How many " + content + " do you have?'/></center>";
    }

    function energy() {
        var str = "";

        arr.forEach(function(items, idx) {
            str += "<option value='" + idx + "' name='" + items + "'>" + items + "</option>";
        });

        $(".e").show();
        $(".energy").html(str);
    }
})

function row(content) {
    return "<div class='row'>" + content + "</div>";
}

function dc(content) {
    return "<div class='col-sm-12 col-md-12 col-lg-12'>" + content + "</div>";
}

function eC(value) {
    var html = "";

    var unit;
    var weight;
    var eAmount;

    if (value == 1) {
        unit = energyUnits.gasoline;
        //html += "Unit: " + energyAmounts.gasoline + " " + unit;
    }
    else if (value == 2) {
        unit = energyUnits.cookingOil;
        //html += "Unit: " + energyAmounts.cookingOil + " " + unit;
    }
    else if (value == 3) {
        unit = energyUnits.jetFuel;
        //html += "Unit: " + energyAmounts.jetFuel + " " + unit;
    }
    else if (value == 4) {
        unit = energyUnits.coal;
        //html += "Unit: " + energyAmounts.coal + " " + unit;
    }
    else if (value == 5) {
        unit = energyUnits.uranium;
        //html += "Unit: " + energyAmounts.uranium + " " + unit;
    }
    else if (value == 6) {
        unit = energyUnits.liBattery;
        //html += "Unit: " + energyAmounts.liBattery + " " + unit;
    }

    return unit;

    console.log(value, unit);
}

function print(name, content) {
    $(name).html(content);
}


$(document).on("click", ".btn", function(e) {
    e.preventDefault();
    var energyAmount = $(".en").val();
    var energyType = $("select").val();
    var vehicleType = clicked;

    console.log(energyAmount, energyType, vehicleType);

    var c = findDistance(energyAmount, energyType, vehicleType);
    drawCircle(c / 1000);
});
