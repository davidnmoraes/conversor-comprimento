function converter() {
    const de = document.getElementById('refer').value;
    const para = document.getElementById('result').value;
    const num1 = parseFloat(document.getElementById('num1').value);
    const validnum1 = document.getElementById('num1')
    const validnum2 = document.getElementById('num2')

    if (validnum1.value <= 0 && validnum2.value <= 0) {
        window.alert('Digite um valor positivo para a conversão.')
        parseFloat(document.getElementById('num2')) = ' '
    }
    
    let resultado;
    
    switch(de) {
        case 'mm':
            switch(para) {
                case 'mm2':
                    resultado = num1;
                    break;
                case 'cm2':
                    resultado = num1/10;
                    break;
                case 'm2':
                    resultado = num1/1000;
                    break;
                case 'km2':
                    resultado = num1/1000000;
                    break;
                case 'in2':
                    resultado = num1*0.039370;
                    break;
                case 'ft2':
                    resultado = num1*0.0032808;
                    break;
                case 'yd2':
                    resultado = num1*0.0010936133;
                    break;
                case 'mi2':
                    resultado = num1*0.00000062;
                    break;
                case 'NM2':
                    resultado = num1*0.00000054;
                    break;
                case 'mil2':
                    resultado = num1*39370078.74;
                    break;
            }break
        case 'cm':
            switch(para) {
                case 'mm2':
                    resultado = num1*10;
                    break
                case 'cm2':
                    resultado = num1;
                    break
                case 'm2':
                    resultado = num1/100;
                    break
                case 'km2':
                    resultado = num1/100000
                    break
                case 'in2':
                    resultado = num1*0.3937007874
                    break
                case 'ft2':
                    resultado = num1*0.032808399
                    break
                case 'yd2':
                    resultado = num1*0.010936133
                    break
                case 'mi2':
                    resultado = num1*0.0000062137
                    break
                case 'NM2':
                    resultado = num1*0.0000053996
                    break
                case 'mil2':
                    resultado = num1*393.7007874016
                    break
            }break
        case 'm':
            switch(para) {
                case 'mm2':
                    resultado = num1*1000
                    break
                case 'cm2':
                    resultado = num1*100
                    break
                case 'm2':
                    resultado = num1
                    break
                case 'km2':
                    resultado = num1/1000
                    break
                case 'in2':
                    resultado = num1*39.3700787402
                    break
                case 'ft2':
                    resultado = num1*3.280839895
                    break
                case 'yd2':
                    resultado = num1*1.0936132983
                    break
                case 'mi1':
                    resultado = num1*0.0006213712
                    break
                case 'NM2':
                    resultado = num1*0.0005399568
                    break
                case 'mil2':
                    resultado = num1*39370.078740157
                    break
            }break
        case 'km':
            switch(para) {
                case 'mm2':
                    resultado = num1*1000000
                    break
                case 'cm2':
                    resultado = num1*100000
                    break
                case 'm2':
                    resultado = num1*1000
                    break
                case 'km2':
                    resultado = num1
                    break
                case 'in2':
                    resultado = num1*39370.078740157
                    break
                case 'ft2':
                    resultado = num1*3280.8398950131
                    break
                case 'yd2':
                    resultado = num1*1093.6132983377
                    break
                case 'mi2':
                    resultado = num1*0.6213711922
                    break
                case 'NM2':
                    resultado = num1*0.5399568035
                    break
                case 'mil2':
                    resultado = num1*39370078.740157
                    break
            }break
        case 'in':
            switch(para) {
                case 'mm2':
                    resultado = num1*25.4
                    break
                case 'cm2':
                    resultado = num1*2.54
                    break
                case 'm2':
                    resultado = num1*0.0254
                    break
                case 'km2':
                    resultado = num1*0.0000254
                    break
                case 'in2':
                    resultado = num1
                    break
                case 'ft2':
                    resultado = num1*0.0833333333
                    break
                case 'yd2':
                    resultado = num1*0.0277777778
                    break
                case 'mi2':
                    resultado = num1*0.0000157828
                    break
                case 'NM2':
                    resultado = num1*0.0000137149
                    break
                case 'mil2':
                    resultado = num1*1000
                    break
            }break
        case 'ft':
            switch(para) {
                case 'mm2':
                    resultado = num1*304.8
                    break
                case 'cm2':
                    resultado = num1*30.48
                    break
                case 'm2':
                    resultado = num1*0.3048
                    break
                case 'km2':
                    resultado = num1*0.0003048
                    break
                case 'in2':
                    resultado = num1*12
                    break
                case 'ft2':
                    resultado = num1
                    break
                case 'yd2':
                    resultado = num1*0.333333333
                    break
                case 'mi2':
                    resultado = num1*0.0001893939
                    break
                case 'NM2':
                    resultado = num1*0.0001645788
                    break
                case 'mil2':
                    resultado = num1*12000
                    break
            }break
        case 'yd':
            switch(para) {
                case 'mm2':
                    resultado = num1*914.4
                    break
                case 'cm2':
                    resultado = num1*91.44
                    break
                case 'm2':
                    resultado = num1*0.9144
                    break
                case 'km2':
                    resultado = num1*0.0009144
                    break
                case 'in2':
                    resultado = num1*36
                    break
                case 'ft2':
                    resultado = num1*3
                    break
                case 'yd2':
                    resultado = num1
                    break
                case 'mi2':
                    resultado = num1*0.0005681818
                    break
                case 'NM2':
                    resultado = num1*0.0004937365
                    break
                case 'mil2':
                    resultado = num1*36000
                    break
            }break
        case 'mi':
            switch(para) {
                case 'mm2':
                    resultado = num1*1609344
                    break
                case 'cm2':
                    resultado = num1*160934.4
                    break
                case 'm2':
                    resultado = num1*1609.344
                    break
                case 'km2':
                    resultado = num1*1.609344
                    break
                case 'in2':
                    resultado = num1*63360
                    break
                case 'ft2':
                    resultado = num1*5280
                    break
                case 'yd2':
                    resultado = num1*1760
                    break
                case 'mi2':
                    resultado = num1
                    break
                case 'NM2':
                    resultado = num1*0.8689762419
                    break
                case 'mil2':
                    resultado = num1*63360000
                    break
            }break
        case 'NM':
            switch(para) {
                case 'mm2':
                    resultado = num1*1852000
                    break
                case 'cm2':
                    resultado = num1*185200
                    break
                case 'm2':
                    resultado = num1*1852
                    break
                case 'km2':
                    resultado = num1*1.825
                    break
                case 'in2':
                    resultado = num1*72913.385826772
                    break
                case 'ft2':
                    resultado = num1*6076.1154855643
                    break
                case 'yd2':
                    resultado = num1*2025.3718285214
                    break
                case 'mi2':
                    resultado = num1*1.150779448
                    break
                case 'NM2':
                    resultado = num1
                    break
                case 'mil2':
                    resultado = num1*72913385.826772
                    break
            }break
        case 'mil':
            switch(para) {
                case 'mm2':
                    resultado = num1*0.0254
                    break
                case 'cm2':
                    resultado = num1*0.00254
                    break
                case 'm2':
                    resultado = num1*0.0000254
                    break
                case 'km2':
                    resultado = num1*0.0000000254
                    break
                case 'in2':
                    resultado = num1*0.001
                    break
                case 'ft2':
                    resultado = num1*0.0000833333
                    break
                case 'yd2':
                    resultado = num1*0.0000277778
                    break
                case 'mi2':
                    resultado = num1*0.0000000157828
                    break
                case 'NM2':
                    resultado = num1*0.0000000137149
                    break
                case 'mil2':
                    resultado = num1
                    break
            }break
    }

    document.getElementById('num2').value = resultado;
}