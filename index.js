function calcularAreaTriangulo() {
  const base = prompt("Informa a base do triangulo:");
  const altura = prompt("Informa a altura do triangulo:");
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  const base = prompt("Informa a base do retangulo:");
  const altura = prompt("Informa a altura do retangulo:");
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = prompt("Informa o lado do quadrado:");
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
  const altura = parseFloat(prompt("Informe a altura do trapézio:"));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  const raio = prompt("Informe o raio do circulo:");
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Escolha uma opção:\n1.Área do triângulo\n2.Área do retângulo\n3.Área do quadrado\n4.Área do trapézio\n5.Área do circulo\n6.Sair"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;
    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("Finalizando...");
        break;
      default:
        alert("Opção inválida!");
        break;
    }

    if (resultado) {
      alert("Resultado:" + resultado);
    }
  } while (opcao !== "6");
}

executar();
