window.onload = () => {
    const button = document.getElementsByClassName('btn')[0];
    const modal = document.getElementsByClassName('modal')[0];

    const actividades = document.getElementsByClassName('btnAct');
    for (let i = 0; i < Object.keys(actividades).length; i++) {
        actividades[i].addEventListener('click', (event) => {
            let actividad = parseInt(event.target.value.split(" ")[1]);
            switch (actividad) {
                case 1:
                    alert("hola mundo :3")
                    break;
                case 2:
                    document.getElementById('act2').innerHTML = 'Esto es javascript'
                    break;
                case 3:
                    let w3 = - 5 + 8 * 6;
                    let x3 = (55 + 9) % 9;
                    let y3 = 20 + (-3 * 5 / 8);
                    let z3 = 5 + 15 / 3 * 2 - 8 % 3;
                    alert(w3 + "\n" + x3 + "\n" + y3 + "\n" + z3)
                    break;
                case 4:
                    let formula = 4.0 * (1 - (1.0 / 3) + (1.0 / 5) - (1.0 / 7) + (1.0 / 9) - (1.0 / 11))
                    alert(formula)
                    break;
                case 5:
                    let int1 = 1;
                    let int2 = 10;
                    let int3 = -5;
                    alert((int1 == int2) + "\n" + (int3 == int1) + "\n" + (int1 == int1) + "\n" + (int1 > int3) + "\n" + (int2 < int3))
                    break;
                case 6:

                    let a6 = 33;
                    let b6 = 10;
                    let c6 = "test";
                    alert("a + b = "); result = a6 + b6;
                    alert(result);
                    alert("a - b = "); result = a6 - b6;
                    alert(result);
                    alert("a / b ="); result = a6 / b6;
                    alert(result);
                    alert("a  % b = "); result = a6 % b6;
                    alert(result);
                    alert("a + b + c = "); result = a6 + b6 + c6;
                    alert(result);
                    a6 = ++a6;
                    alert("++a ="); result = ++a6;
                    alert(result);
                    b6 = --b6;
                    alert("--b ="); result = --b6;
                    alert(result);
                    break;
                case 7:
                    let a7 = 10;
                    let b7 = 20;

                    alert("(a == b) => "); result = (a7 == b7);
                    alert(result);
                    alert("(a < b) => "); result = (a7 < b7);
                    alert(result);
                    alert("(a > b) => "); result = (a7 > b7);
                    alert(result);
                    alert("(a != b) => "); result = (a7 != b7);
                    alert(result);
                    alert("(a >= b) => "); result = (a7 >= b7);
                    alert(result);
                    alert("(a <= b) => "); result = (a7 <= b7);
                    alert(result);
                    break
                case 8:
                    let a8 = true;
                    let b8 = false;
                    alert("(a && b) => "); result = (a8 && b8);
                    alert(result);
                    alert("(a || b) => "); result = (a8 || b8);
                    alert(result);
                    alert("!(a && b) => "); result = (!(a8 && b8));
                    alert(result);
                    break;
                case 9:
                    let a9 = 33;
                    let b9 = 10;

                    alert("value of a => (a = b) =>"); result = (a9 = b9);
                    alert(result);
                    alert("value of a => (a += b) =>"); result = (a9 += b9);
                    alert(result);
                    alert("value of a => (a -= b) =>"); result = (a9 -= b9);
                    alert(result);
                    alert("value of a => (a *= b) =>"); result = (a9 *= b9);
                    alert(result);
                    alert("value of a => (a /= b) =>"); result = (a9 /= b9);
                    alert(result);
                    alert("value of a => (a %= b) =>"); result = (a9 %= b9);
                    alert(result);
                    break
                case 10:
                    let a10 = 10;
                    let b10 = 20;

                    alert("((a > b) ? 100: 200) => ");
                    result = (a10 > b10) ? 100 : 200;
                    alert(result);

                    alert("((a < b) ? 100: 200) => ");
                    result = (a10 < b10) ? 100 : 200;
                    alert(result);
                    break;
                case 11:
                    let width11 = 5.6;
                    let heigth11 = 8.5;
                    let area11 = width11 * heigth11;
                    let perimeter11 = 2 * (width11 + heigth11);
                    alert("el valor del area es: " + area11 + "\n" +
                        "el valor del perimetro es: " + perimeter11);
                    break;
                case 12:
                    const radius12 = 7.5;
                    let area12 = Math.PI * radius12 * radius12;
                    let perimetro12 = 2 * Math.PI * radius12;
                    alert("El area del Circulo es: " + area12 + "\n" +
                        "El perimetro del Circulo es: " + perimetro12);
                    break;
                case 13:
                    let Var1 = parseFloat("123.456");
                    let Var2 = parseFloat("123ABC45EF");
                    let Var3 = parseFloat("ABCD");
                    let Var4 = parseFloat("ABCD", 16);
                    let Var5 = (14).toString(16);
                    let Var6 = (18).toString(2);
                    let Var7 = Math.log(-32);
                    let Var8 = 3 / 0;

                    alert(Var1 + "\n" + Var2 + "\n" + Var3 + "\n" + Var4 +
                        "\n" + Var5 + "\n" + Var6 + "\n" + Var7 + "\n" + Var8);
                    break;
                case 14:
                    let num1 = prompt("ingrese el primer numero: "); //se ingresa el numero: 10
                    let num2 = prompt("ingrese el segundo numero: "); //se  ingresa el numero: 20
                    let sum, dif, mul, div, res;

                    sum = num1 + num2;
                    dif = num1 - num2;
                    mul = num1 * num2;
                    div = num1 / num2;
                    res = num1 % num2;

                    alert(sum + "\n" + dif + "\n" + mul + "\n" + div + "\n" + res);
                    break;
                case 15:
                    let a15 = prompt("ingrese el numero base: ");// se ingresa el numero: 10
                    let b15 = prompt("ingrese la potencia: ");// se ingresa el numero: 20
                    let p15 = Math.pow(a15, b15);

                    alert("potencia: " + p15);
                    break;
                // case 16:

                //     break;
                // case 17:

                //     break;
                // case 18:

                //     break;
                // case 19:

                //     break;
                // case 20:

                //     break;
                case 21:
                    let n1, n2, m21 = 0

                    n1 = prompt("ingrese el primer numero:");
                    n2 = prompt("ingrese el segundo numero:");

                    if (n1 > n2)
                        m21 = n1;
                    if (n2 > n1)
                        m21 = n2;

                    alert("el numero mayor es: " + m21);
                    break;
                case 22:
                    let n22 = 0;
                    let r22 = "";

                    n22 = prompt("ingrese un numero: ");

                    if (n22 > 0) {
                        r22 = "positivo"
                    }
                    if (n22 < 0) {
                        r22 = "negativo"
                    }
                    if (n22 == 0) {
                        r22 = "neutro"
                    }

                    alert("El resultadi es: " + r22);
                    break;
                case 23:
                    let c23 = "";
                    let r23 = "NO ES VOCAL"
                    c23 = prompt("ingrese un caracter: ");
                    if (c23 == 'a' || c23 == 'A') {
                        r23 = "ES VOCAL";
                    }
                    if (c23 == 'e' || c23 == 'E') {
                        r23 = "ES VOCAL";
                    }
                    if (c23 == 'i' || c23 == 'I') {
                        r23 = "ES VOCAL";
                    }
                    if (c23 == 'o' || c23 == 'O') {
                        r23 = "ES VOCAL";
                    }
                    if (c23 == 'u' || c23 == 'U') {
                        r23 = "ES VOCAL"
                    }
                    alert("resultado: " + r23);
                    break;
                case 24:
                    let n24 = 0;
                    let r24 = "";

                    n24 = prompt("ingrese un numero: ");
                    n24 = parseInt(n24);
                    if (n24 % 3 == 0 && n24 % 5 == 0) {
                        r24 = "SI ES MULTIPLO DE 3 Y 5";
                    } else {
                        r24 = "NO ES MULTIPLO DE 3 Y 5";
                    }
                    alert("El resultado es : " + r24);
                    break;
                case 25:
                    let n25 = 0;
                    let r25 = "";

                    n25 = prompt("ingrese un numero: ");
                    n25 = parseInt(n25);
                    if (n25 % 2 == 0) {
                        r25 = "PAR";
                    } else {
                        r25 = "IMPAR";
                    }

                    alert("El resultado es: " + r25);
                    break;
                case 26:
                    let n126 = 0, n226 = 0, n326 = 0, m26 = 0;
                    n126 = prompt("ingrese el numero 1: ");
                    n226 = prompt("ingrese el numero 2: ");
                    n326 = prompt("ingrese el numero 3: ");
                    n126 = parseInt(n126);
                    n226 = parseInt(n226);
                    n326 = parseInt(n326);
                    if (n126 > n226) {
                        if (n126 > n326) {
                            m26 = n126;
                        } else {
                            m26 = n326;
                        }
                    } else {
                        if (n226 > n326) {
                            m26 = n226;
                        } else {
                            m26 = n326;
                        }
                    }
                    alert("El numero mayor es: " + m26);
                    break;
                case 27:
                    let n27, r27;
                    n27 = prompt("ingrese un numero: ");
                    n27 = parseInt(n27);
                    if (!(n27 % 2 == 0)) {
                        r27 = n27 * 3;
                    } else {
                        r27 = n27 * 2;
                    }
                    alert("El resutlado es: " + r27);
                    break;
                case 28:
                    let n128, n228, n328, mayor28, inter28, menor28;
                    n128 = prompt("ingrese el numero 1: ");
                    n228 = prompt("ingrese el numero 2: ");
                    n328 = prompt("ingrese el numero 3: ");
                    n128 = parseInt(n128);
                    n228 = parseInt(n228);
                    n328 = parseInt(n328);
                    if (n128 > n228 && n128 > n328) {
                        mayor28 = n128;
                    } else {
                        if (n228 > n128 && n228 > n328) {
                            mayor28 = n228;
                        } else {
                            mayor28 = n328;
                        }
                    }
                    if (n128 < n228 && n128 < n328) {
                        menor28 = n128;
                    } else {
                        if (n228 < n128 && n228 < n328) {
                            menor28 = n228;
                        } else {
                            menor28 = n328;
                        }
                    }
                    inter28 = (n128 + n228 + n3) - (mayor28 + menor28);
                    alert("el numero mayor es: " + mayor28 +
                        "\nel numero intermedio es: " + inter28 +
                        "\nel numero menor es: " + menor28);
                    break;
                case 29:
                    let D129 = 0.1; D129.toFixed(2);
                    let D229 = 0.02; D229.toFixed(2);
                    let IGV29 = 0.19; IGV29.toFixed(2);
                    let num29, m_d29, m_igv29, p29;
                    num29 = prompt("ingrese el valor del consumo: ");
                    num29 = parseFloat(num29); let c = num29.toFixed();
                    if (c <= 100) {
                        m_d29 = c * D129;
                    } else {
                        m_d29 = c * D229;
                    }
                    m_igv29 = (c - m_d29) * IGV29;
                    p29 = c - m_d29 + m_igv29;
                    alert("Monto descuento: " + m_d29 +
                        "\nImpuesto IGV: " + m_igv29 +
                        "\nImporte a pagar: " + p29);
                    break;
                case 30:
                    let D130 = 0.1; D130.toFixed(2);
                    let D230 = 0.2; D230.toFixed(2);
                    let D330 = 0.3; D330.toFixed(2);
                    let IGV30 = 0.19; IGV30.toFixed(2);
                    let num30, m_d30, m_igv30, p30;
                    num30 = prompt("ingrese el valor del consumo: ");
                    num30 = parseFloat(num30); c = num30.toFixed();
                    if (c > 200) {
                        m_d30 = c * D330;
                    } else {
                        if (c > 100) {
                            m_d30 = c * D230;
                        } else {
                            m_d30 = c * D130;
                        }
                    }
                    m_igv30 = (c - m_d30) * IGV30;
                    p30 = c - m_d30 + m_igv30;
                    alert("monto decuento: " + m_d30 +
                        "\nImpuesto IGV: " + m_igv30 +
                        "\nImporte a pagar: " + p30);
                    break;
                case 31:
                    let t31 = prompt("ingrese la temperatura actual: ");
                    let c31 = "";
                    t31 = parseInt(t31);
                    if (t31 < 10) {
                        c31 = "FRIO";
                    } else {
                        if (t31 >= 10 && t31 <= 20) {
                            c31 = "NUBLADO";
                        } else {
                            if (t31 >= 21 && t31 <= 30) {
                                c31 = "CALOR";
                            } else {
                                c31 = "TROPICAL";
                            }
                        }
                    }
                    alert("Clima: " + c31);
                    break;
                case 32:
                    let DESC_G32 = 0.15; DESC_G32.toFixed(2);
                    let DESC_A32 = 0.2; DESC_A32.toFixed(2);
                    let REC_G32 = 0.1; REC_G32.toFixed(2);
                    let REC_A32 = 0.05; REC_A32.toFixed(2);
                    let mc32; m32 = 0, tp32 = 0;
                    mc32 = prompt("ingrese el Monto de compra: ");
                    mc32 = parseFloat(mc32);
                    m32 = parseFloat(m32);
                    tp32 = parseFloat(m32);
                    let tc32, fp32, r32;
                    tc32 = prompt("Tipo de CLiente G general o A afiliado: ");
                    fp32 = prompt("Forma de pago C credito E efectivo: ");
                    if (tc32 == 'G' || tc32 == 'g') {
                        if (fp32 == 'C' || fp32 == 'c') {
                            m32 = mc32 * DESC_G32;
                            tp32 = mc32 - m32;
                            r32 = "descuento 15%";
                        } else {
                            m32 = mc32 * REC_G32;
                            tp32 = mc32 + m32;
                            r32 = "RECARGO 10 %";
                        }
                    } else {
                        if (fp32 == 'C' || fp32 == 'c') {
                            m32 = mc32 * DESC_A32;
                            tp32 = mc32 - m32;
                            r32 = "DESCUENTO 20%";
                        } else {
                            m32 = mc32 * REC_A32;
                            tp32 = mc32 + m32;
                            r32 = "RECARGO 5%";
                        }
                    }
                    alert(r32 + ": " + m32 +
                        "\nTotal a pagar: " + tp32);
                    break;
                case 33:
                    let a33, b33, x33;
                    a33 = prompt("Valor del a33: ");
                    a33 = parseFloat(a33);
                    b33 = prompt("Valor de b: ");
                    b33 = parseFloat(b33);
                    x33 = parseFloat(x33);

                    if (a33 != 0) {
                        x33 = -b33 / a33;
                    } else {
                        x33 = 0;
                    }
                    alert("x: " + x33);
                    break;
                case 34:
                    let a34, b34, c34;
                    let discri34;
                    let x134, x234;
                    a34 = prompt('Escribir el coeficiente de la x ^2', '');
                    a34 = parseFloat(a34);
                    b34 = prompt('Escribe el coeficiente de la x', '');
                    b34 = parseFloat(b34);
                    c34 = prompt('escribe el termino independiente', '');
                    c34 = parseFloat(c34);
                    discri34 = Math.pow(b34, 2.0) - 4.0 * a34 * c;
                    if (discri34 < 0)
                        alert('Soluciones imaginarias');
                    if (discri34 == 0) {
                        x134 = -b34 / (2 * a34);
                        alert('solucion doble que es ' + x134);
                    }
                    if (discri34 > 0) {
                        x134 = (-b34 + Math.sqrt(discri34)) / (2 * a34);
                        x234 = (-b34 - Math.sqrt(discri34)) / (2 * a34);
                        alert('las soluciones son = ' + x134 + ' y ' + x234);
                    }
                    break;
                case 35:
                    let h35, m35, s35;
                    h35 = prompt('Hora: ');
                    h35 = parseInt(h35);
                    m35 = prompt('minuto: ');
                    m35 = parseInt(m35);
                    s35 = prompt('segundo: ');
                    s35 = parseInt(s35);
                    s35 += 1;
                    if (s35 == 60) {
                        s35 = 0;
                        m35 += 1;
                        if (m35 == 60) {
                            m35 = 0;
                            h35 += 1;
                            if (h35 == 24) {
                                h35 = 0;
                            }
                        }
                    }
                    alert('Hora: ' + h35 +
                        '\nMinuto: ' + m35 +
                        "\nSegundo: " + s35);
                    break;
                case 36:
                    let edad36 = prompt("Ingresa Tu Edad: ");
                    edad36 = parseInt(edad36);

                    if (edad36 >= 18) {
                        alert("puedes consumir una cerveza");
                    } else {
                        alert("No Puedes consumir licor");
                    }
                    break;
                case 37:
                    let edad37 = prompt("Ingresa Tu Edad: ");
                    edad37 = parseInt(edad37);
                    noPuedeBeber = (edad37 < 18) || (edad37 > 60);
                    if (noPuedeBeber) {
                        alert("No puedes consumir licor");
                    } else {
                        alert("Puedes consumir una cerveza");
                    }
                    break;
                case 38:
                    let valor_servicio38 = prompt("ingrese el valor del servicio: ");
                    valor_servicio38 = parseFloat(valor_servicio38);
                    let total38 = parseFloat(total38);
                    let n38 = parseInt(n38);
                    if (valor_servicio38 < 5000) {
                        alert("USTED NO TIENE DESCUENTO, EL VALOR A PAGAR ES: " + valor_servicio38);
                    } else if (valor_servicio38 > 5000 && valor_servicio38 < 10000) {
                        alert("USTED POSEE UN DESCUENTO DEL 15%, EL VALOR A PAGAR ES: " + (valor_servicio38 - (valor_servicio38 * 0.15)));
                    } else if (valor_servicio38 >= 10000) {
                        alert("USTED POSEE UN DESCUENTO DEL 25%, EL VALOR A PAGAR ES: " + (valor_servicio38 - (valor_servicio38 * 0.25)));
                    }
                    break;
                case 39:
                    let opcion39 = prompt("Menu de opciones" +
                        "\n-------------------------------" +
                        "\n1. Calcular el area de un Cuadrado " +
                        "\n2. Calcular el area de un Triangulo" +
                        "\n3. Calcular el area de un Circulo  " +
                        "\n4. Finalizar" +
                        "\nElija una opcion: ");
                    opcion39 = parseInt(opcion39);
                    if (opcion39 == 1) {
                        alert("Ha seleccionado calcular el area de un cuadrado...");
                    } else if (opcion39 == 2) {
                        alert("Ha seleccionado calcular el area de un triangulo...");
                    } else if (opcion39 == 3) {
                        alert("ha seleccionado calcular el area de un circulo...");
                    } else {
                        alert("Ha selecionado terminar");
                    }
                    break;
                case 40:
                    let nota40 = prompt("Introduzca una nota40 entre 0 y 10: ");
                    nota40 = parseInt(nota40);
                    if (nota40 < 0 || nota40 > 10)
                        alert("Nota no valida");
                    else if (nota40 == 10)
                        alert("Matricula de Honor");
                    else if (nota40 >= 9)
                        alert("sobresaliente");
                    else if (nota40 >= 7)
                        alert("Notable");
                    else if (nota40 >= 6)
                        alert("Bien");
                    else if (nota40 >= 5)
                        alert("suficiente");
                    else
                        alert("suspenso");
                    break;
                case 41:

                    break;
                case 42:

                    break;
                case 43:

                    break;
                case 44:

                    break;
                case 45:

                    break;
                case 46:

                    break;
                case 47:

                    break;
                case 48:

                    break;
                case 49:

                    break;
                case 50:

                    break;
                case 51:

                    break;

            }
        })
    }
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = "none"
    }
    button.addEventListener('click',
        () => {
            modal.style.display = "block"
            // alert('<h3>aaaaa</h3>')
        })
}