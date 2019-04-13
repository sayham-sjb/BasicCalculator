var formResult = 0.0;
var lastEntry = 0.0;
var decVal = 0;
var sign = 1;
var lastKey = "equals";
var bscClcTsk = "equals";

function Adddigit(digit) {
    var temp;
    if (lastKey !== "digit") {
        document.bscClcJs.bscClcRslt.value = 0.0;
        if (lastKey === "equals") {
            formResult = 0.0;
            bscClcTsk = "equals";
        }
    }
    temp = parseFloat(document.bscClcJs.bscClcRslt.value);
    if (decVal === 0) {
        document.bscClcJs.bscClcRslt.value = temp * 10 + parseInt(digit) * sign;
    } else {
        document.bscClcJs.bscClcRslt.value = temp + parseInt(digit) / decVal * sign;
        decVal = decVal * 10;
    }
    lastEntry = parseFloat(document.bscClcJs.bscClcRslt.value);
    lastKey = "digit";
}

function clcInput(frmClcltr) {
    switch (bscClcTsk) {
        case "equals":
            {
                formResult = parseFloat(document.bscClcJs.bscClcRslt.value);
                break;
            }
        case "add":
            {
                formResult = formResult + lastEntry;
                document.bscClcJs.bscClcRslt.value = formResult;
                break;
            }
        case "subtract":
            {
                formResult = formResult - lastEntry;
                document.bscClcJs.bscClcRslt.value = formResult;
                break;
            }
        case "multiply":
            {
                formResult = formResult * lastEntry;
                document.bscClcJs.bscClcRslt.value = formResult;
                break;
            }
        case "divide":
            {
                formResult = formResult / lastEntry;
                document.bscClcJs.bscClcRslt.value = formResult;
                break;
            }
    }
    if (lastKey != "equals") {
        bscClcTsk = lastKey;
    }
}

function Add(frmClcltr) {
    decVal = 0;
    sign = 1;
    lastEntry = parseFloat(document.bscClcJs.bscClcRslt.value);
    if (lastKey == "digit") {
        lastKey = "add";
        clcInput(frmClcltr);
    } else {
        lastKey = "add";
        bscClcTsk = "add";
    }
}

function Subtract(frmClcltr) {
    decVal = 0;
    sign = 1;
    lastEntry = parseFloat(document.bscClcJs.bscClcRslt.value);
    if (lastKey == "digit") {
        lastKey = "subtract";
        clcInput(frmClcltr);
    } else {
        lastKey = "subtract";
        bscClcTsk = "subtract";
    }
}

function Multiply(frmClcltr) {
    decVal = 0;
    sign = 1;
    lastEntry = parseFloat(document.bscClcJs.bscClcRslt.value);
    if (lastKey == "digit") {
        lastKey = "multiply";
        clcInput(frmClcltr);
    } else {
        lastKey = "multiply";
        bscClcTsk = "multiply";
    }
}

function Divide(frmClcltr) {
    decVal = 0;
    sign = 1;
    lastEntry = parseFloat(document.bscClcJs.bscClcRslt.value);
    if (lastKey == "digit") {
        lastKey = "divide";
        clcInput(frmClcltr);
    } else {
        lastKey = "divide";
        bscClcTsk = "divide";
    }
}

function Equals(frmClcltr) {
    decVal = 0;
    sign = 1;
    if ((lastKey == "add") || (lastKey == "subtract") || (lastKey == "multiply") || (lastKey == "divide"))
        bscClcTsk = lastKey;
    lastKey = "equals";
    clcInput(frmClcltr);
}

function SetdecVal() {
    decVal = 10;
}

function Squareroot(frmClcltr) {
    decVal = 0;
    sign = 1;
    lastKey = "equals";
    temp = parseFloat(document.bscClcJs.bscClcRslt.value);
    document.bscClcJs.bscClcRslt.value = Math.sqrt(temp);
    lastEntry = parseFloat(document.bscClcJs.bscClcRslt.value);
}

function Percent(frmClcltr) {
    decVal = 0;
    sign = 1;
    lastKey = "equals";
    document.bscClcJs.bscClcRslt.value = (lastEntry / 100) * formResult;
    lastEntry = parseFloat(document.bscClcJs.bscClcRslt.value);
}

function ChngeSign(frmClcltr) {
    sign = sign * -1;
    temp = parseFloat(document.bscClcJs.bscClcRslt.value);
    document.bscClcJs.bscClcRslt.value = temp * -1;
    lastEntry = parseFloat(document.bscClcJs.bscClcRslt.value);
}

function Invert(frmClcltr) {
    decVal = 0;
    sign = 1;
    lastKey = "equals";
    temp = parseFloat(document.bscClcJs.bscClcRslt.value);
    document.bscClcJs.bscClcRslt.value = 1 / temp;
    lastEntry = parseFloat(document.bscClcJs.bscClcRslt.value);
}

function Initialize(frmClcltr) {
    formResult = 0.0;
    lastEntry = 0.0;
    decVal = 0;
    sign = 1;
    lastKey = "equals";
    bscClcTsk = "equals";
    document.bscClcJs.bscClcRslt.value = 0.0;
    document.bscClcJs.bscClcRslt.focus();
}

function ClearEntry(frmClcltr) {
    lastEntry = 0.0;
    decVal = 0;
    sign = 1;
    document.bscClcJs.bscClcRslt.value = 0.0;
    document.bscClcJs.bscClcRslt.focus();
}
