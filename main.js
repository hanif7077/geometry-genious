let btnCalcTriangle = document.getElementById("btnCalcTriangle");
let btnCalcRectangle = document.getElementById("btnCalcRectangle");
let btnCalcParallelogram = document.getElementById("btnCalcParallelogram");
let btnCalcRhombus = document.getElementById("btnCalcRhombus");
let btnCalcPentagon = document.getElementById("btnCalcPentagon");
let btnCalcEllipse = document.getElementById("btnCalcEllipse");

// add click event to calculate triangle button
btnCalcTriangle.addEventListener('click', function() {
    let triangleBase = document.getElementById("triangleBase");
    let triangleHeight = document.getElementById("triangleHeight");

    console.log(+triangleBase.value)

    if(!triangleBase.value) {
        return alert('The triangle base is required');
    }

    if(!triangleHeight.value) {
        return alert('The triangle height is required');
    }

    if(isNaN(+triangleBase.value)) {
        return alert('The triangle base must be a number');
    }

    if(isNaN(+triangleHeight.value)) {
        return alert('The triangle height must be a number');
    }

    generateHtml('Triangle', calcTriangleArea(+triangleBase.value, +triangleHeight.value));
});

// add click event to calculate rectangle button
btnCalcRectangle.addEventListener('click', function() {
    let rectangleWidth = document.getElementById("rectangleWidth");
    let rectangleLength = document.getElementById("rectangleLength");

    if(!rectangleWidth.value) {
        return alert('The rectangle base is required');
    }

    if(!rectangleLength.value) {
        return alert('The rectangle height is required');
    }

    if(isNaN(+rectangleWidth.value)) {
        return alert('The rectangle base must be a number');
    }

    if(isNaN(+rectangleLength.value)) {
        return alert('The rectangle height must be a number');
    }

    generateHtml('Rectangle', calcRectangleArea(+rectangleWidth.value, +rectangleLength.value));
});

// add click event to calculate parallelogram button
btnCalcParallelogram.addEventListener('click', function() {
    generateHtml('Parallelogram', calcParallelogramArea(10, 12));
});

// add click event to calculate rhombus button
btnCalcRhombus.addEventListener('click', function() {
    generateHtml('Rhombus', calcRhombusArea(16, 8));
});

// add click event to calculate pentagon button
btnCalcPentagon.addEventListener('click', function() {
    generateHtml('Pentagon', calcPentagonArea(6, 10));
});

// add click event to calculate ellipse button
btnCalcEllipse.addEventListener('click', function() {
    generateHtml('Pentagon', calcEllipseArea(6, 10));
});

// calculate triangle area
function calcTriangleArea(base, height) {
    return .5 * base * height;
}

// calculate rectangle area
function calcRectangleArea(width, length) {
    return width * length;
}

// calculate parallelogram area
function calcParallelogramArea(base, height) {
    return base * height;
}

// calculate rhombus area
function calcRhombusArea(diagonal1, diagonal2) {
    return .5 * diagonal1 * diagonal2;
}

// calculate pentagon area
function calcPentagonArea(p, b) {
    return .5 * p * b;
}

// calculate ellipse area
function calcEllipseArea(a, b) {
    return Math.PI * a * b;
}

// render html output
function generateHtml(shape, value) {
    let output = document.getElementById("output");

    output.innerHTML += `
        <li>
            <div class="flex items-center gap-5 text-base font-normal">
                <div>
                    ${shape}
                </div>
                <div>
                    ${value.toFixed(2)}cm<sup>2</sup>
                </div>
                <div>
                    <button
                        class="px-10 py-3 bg-[#1090D8] text-white rounded-lg font-medium text-sm"
                    >
                        Covert to m<sup>2</sup>
                    </button>
                </div>
            </div>
        </li>
    `;
}