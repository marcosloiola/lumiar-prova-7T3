/* Questões de Ciências 2 (Temperatura, calor e máquinas térmicas) – 3º trimestre.
   Formato: { n:'f'|'m'|'d', q:'pergunta', o:[[alternativa, explicação], ...], c:índice_correta }
   As alternativas são embaralhadas na tela. */
window.QUIZ = {

/* ========== PARTE 1 – TEMPERATURA E CALOR ========== */
p1: [
{n:'f', q:'O que a temperatura mede?', c:0, o:[
 ['O grau de agitação das moléculas','Isso! Quanto mais agitadas as moléculas, maior a temperatura.'],
 ['A energia que passa entre dois corpos','Energia passando de um corpo para outro é o calor.'],
 ['O que sentimos ao tocar um objeto','O que sentimos é a sensação térmica, que pode enganar.'],
 ['O tamanho das moléculas do corpo','A temperatura tem a ver com o movimento das moléculas, não com o tamanho delas.']]},

{n:'f', q:'Na Ciência, o que é calor?', c:0, o:[
 ['Energia térmica em transferência','Correto! É a energia passando de um corpo mais quente para um mais frio.'],
 ['A temperatura alta de um dia de verão','No dia a dia dizemos “está calor”, mas o correto é dizer que a temperatura está alta.'],
 ['A energia guardada dentro de um corpo','A energia guardada é a energia térmica. Só vira “calor” quando está sendo transferida.'],
 ['A sensação de suar debaixo do sol','Isso é uma sensação térmica, não a definição de calor.']]},

{n:'f', q:'Para que lado o calor flui espontaneamente?', c:0, o:[
 ['Do corpo mais quente para o mais frio','Isso! E continua até os dois chegarem à mesma temperatura.'],
 ['Do corpo mais frio para o mais quente','Ao contrário: o calor sempre sai do mais quente.'],
 ['Do corpo maior para o corpo menor','O que importa é a temperatura, não o tamanho.'],
 ['Para os dois lados ao mesmo tempo','O fluxo espontâneo é sempre do mais quente para o mais frio.']]},

{n:'f', q:'Ao nível do mar, a água ferve a quantos graus Celsius?', c:0, o:[
 ['100 °C','Correto! E derrete (fusão do gelo) a 0 °C.'],
 ['0 °C','0 °C é a temperatura de fusão do gelo.'],
 ['212 °C','212 é o valor da ebulição na escala Fahrenheit (212 °F).'],
 ['373 °C','373 é o valor da ebulição em Kelvin (373 K).']]},

{n:'f', q:'Quando dois corpos atingem o equilíbrio térmico:', c:0, o:[
 ['Ficam à mesma temperatura e param de trocar calor','Isso! Ex.: café quente + leite frio = café com leite morno.'],
 ['Ficam com temperaturas cada vez mais diferentes','No equilíbrio, as temperaturas se igualam.'],
 ['O calor passa a ir do mais frio para o mais quente','O calor nunca vai sozinho do frio para o quente.'],
 ['Um deles passa a ter muito mais calor que o outro','No equilíbrio não há mais troca de calor entre eles.']]},

{n:'f', q:'Qual é a forma confiável de saber a temperatura de um objeto?', c:0, o:[
 ['Usar um termômetro','Correto! O tato engana, porque depende da rapidez da troca de calor.'],
 ['Tocar com as mãos','O tato não é confiável: piso e tapete na mesma temperatura parecem diferentes.'],
 ['Confiar na sensação térmica','A sensação térmica depende de vento, umidade e material.'],
 ['Olhar a cor do objeto','A cor não indica a temperatura com precisão.']]},

{n:'f', q:'Quem criou a escala que marca 0 no gelo derretendo e 100 na água fervendo?', c:0, o:[
 ['Anders Celsius','Isso! O cientista sueco dividiu o intervalo em 100 partes iguais.'],
 ['Gabriel Fahrenheit','Fahrenheit criou outra escala, em que a água ferve a 212 °F.'],
 ['Lorde Kelvin','Kelvin criou a escala usada por cientistas, em que a água ferve a 373 K.'],
 ['James Watt','James Watt é conhecido pela máquina a vapor, não por escala de temperatura.']]},

{n:'m', q:'A temperatura média de Manaus no verão é 30 °C. Quanto é isso em Kelvin?', c:0, o:[
 ['303 K','Correto! TK = TC + 273 → 30 + 273 = 303 K.'],
 ['243 K','Você subtraiu. Para ir de Celsius para Kelvin, some 273.'],
 ['330 K','Confira a soma: 30 + 273 = 303, não 330.'],
 ['86 K','86 é o valor em Fahrenheit (86 °F), não em Kelvin.']]},

{n:'m', q:'Quanto é 25 °C na escala Fahrenheit?', c:0, o:[
 ['77 °F','Isso! 25 ÷ 5 = 5; 5 × 9 = 45; 45 + 32 = 77 °F.'],
 ['45 °F','Faltou somar 32 no final: 45 + 32 = 77 °F.'],
 ['57 °F','Confira: 25 ÷ 5 = 5, 5 × 9 = 45 e 45 + 32 = 77.'],
 ['298 °F','298 é o valor em Kelvin (25 + 273), não em Fahrenheit.']]},

{n:'m', q:'O piso de cerâmica e o tapete estão na mesma temperatura, mas o piso parece mais frio. Por quê?', c:0, o:[
 ['O piso tira calor do pé mais rápido','Correto! A sensação de frio vem da rapidez com que o pé perde calor.'],
 ['O piso está, de fato, mais frio que o tapete','O enunciado diz que estão na mesma temperatura.'],
 ['O tapete produz calor próprio e esquenta','O tapete não produz calor; ele só troca calor mais devagar.'],
 ['O frio do piso entra no pé e o esfria','“Frio” não é energia que entra; é o calor que sai do pé.']]},

{n:'m', q:'Com a mesma temperatura no termômetro, o que acontece com a sensação térmica quando o vento aumenta?', c:0, o:[
 ['Fica mais fria','Isso! Com mais vento, o corpo perde calor mais rápido e sentimos mais frio.'],
 ['Fica mais quente','O vento aumenta a perda de calor do corpo, então a sensação é de mais frio.'],
 ['Não muda nada','A sensação térmica depende do vento e da umidade.'],
 ['Fica igual à temperatura real','A sensação pode ser bem diferente da temperatura real.']]},

{n:'m', q:'Num comercial, o “Frio” bate à porta e a dona de casa não deixa ele entrar. Qual é o erro científico?', c:0, o:[
 ['O frio não entra; é o calor da casa que sai','Correto! O calor flui do mais quente (a casa) para o mais frio (o lado de fora).'],
 ['O frio é uma energia que entra pelas portas','Frio não é energia; é a falta de calor (temperatura mais baixa).'],
 ['O frio é a sensação de ganhar calor do ar','Sentir frio é perder calor, não ganhar.'],
 ['O calor sempre vai do corpo frio para o quente','O calor vai do mais quente para o mais frio.']]},

{n:'m', q:'Ao aquecer a água para fazer chá, o que acontece com as moléculas da água?', c:0, o:[
 ['Ficam mais agitadas','Isso! Recebendo energia, elas se movem mais rápido e a temperatura sobe.'],
 ['Ficam mais lentas e pesadas','Moléculas mais lentas significam temperatura menor.'],
 ['Ficam completamente paradas','Moléculas paradas seria o oposto de aquecer.'],
 ['Diminuem de quantidade','Aquecer não muda o número de moléculas, só a agitação.']]},

{n:'m', q:'O corpo A está em equilíbrio térmico com B, e B está em equilíbrio com C. E A com C?', c:0, o:[
 ['Sim: os três estão à mesma temperatura','Correto! Se A = B e B = C em temperatura, então A = C.'],
 ['Não, só A e B estão em equilíbrio entre si','Como B tem a mesma temperatura dos dois, A e C também têm.'],
 ['Só se A e C se tocarem antes por um tempo','Não é preciso contato: as temperaturas já são iguais.'],
 ['Não, o corpo C sempre estará mais frio que A','Nada indica isso; os três estão à mesma temperatura.']]},

{n:'d', q:'A temperatura média de Ridge A, o lugar mais frio da Terra, é −70 °C. Quanto é isso em Fahrenheit?', c:0, o:[
 ['−94 °F','Isso! −70 ÷ 5 = −14; −14 × 9 = −126; −126 + 32 = −94 °F.'],
 ['−126 °F','Faltou somar 32: −126 + 32 = −94 °F.'],
 ['−38 °F','Não basta somar 32 ao valor em Celsius: é preciso dividir por 5 e multiplicar por 9 antes.'],
 ['−203 °F','Confira a conta: −70 ÷ 5 = −14, × 9 = −126, + 32 = −94.']]},

{n:'d', q:'Um termômetro americano marca 104 °F. Quanto é isso em Celsius?', c:0, o:[
 ['40 °C','Correto! 104 − 32 = 72; 72 ÷ 9 = 8; 8 × 5 = 40 °C.'],
 ['72 °C','72 é só o resultado de 104 − 32. Ainda falta dividir por 9 e multiplicar por 5.'],
 ['8 °C','8 é um passo intermediário (72 ÷ 9). Falta multiplicar por 5.'],
 ['136 °C','Para ir de °F para °C, subtraia 32 (não some).']]},

{n:'d', q:'Uma substância está a 300 K. Qual é a temperatura em Celsius?', c:0, o:[
 ['27 °C','Isso! TC = TK − 273 → 300 − 273 = 27 °C.'],
 ['573 °C','Você somou. De Kelvin para Celsius, subtraia 273.'],
 ['−27 °C','Confira o sinal: 300 − 273 = 27 positivo.'],
 ['300 °C','A escala Kelvin é deslocada 273 em relação à Celsius.']]},

{n:'d', q:'A quantos graus Fahrenheit a água passa do estado líquido para o gasoso (ao nível do mar)?', c:0, o:[
 ['212 °F','Correto! 100 ÷ 5 = 20; 20 × 9 = 180; 180 + 32 = 212 °F.'],
 ['180 °F','Faltou somar 32: 180 + 32 = 212 °F.'],
 ['100 °F','100 é o valor em Celsius; em Fahrenheit é 212.'],
 ['373 °F','373 é o valor em Kelvin (373 K).']]},

{n:'d', q:'Afirmações: I. Aquecer um corpo aumenta a agitação das moléculas. II. No equilíbrio térmico não há transferência de calor. III. Diminuir a temperatura faz as moléculas se moverem mais rápido. Quais estão corretas?', c:0, o:[
 ['Apenas I e II','Isso! A III está errada: esfriar faz as moléculas ficarem mais lentas.'],
 ['Apenas I','A II também está correta: no equilíbrio a troca de calor para.'],
 ['Apenas II e III','A III está errada e a I está correta.'],
 ['I, II e III','A III é falsa: menor temperatura = menos agitação.']]},

{n:'d', q:'Qual frase sobre energia térmica, calor e temperatura está correta?', c:0, o:[
 ['Energia térmica só vira calor quando é transferida','Correto! Calor é a energia térmica em trânsito.'],
 ['Um corpo frio não tem nenhuma energia térmica','Todo corpo tem energia térmica; o frio só tem menos.'],
 ['Calor e temperatura são a mesma grandeza física','Temperatura mede agitação; calor é energia em transferência.'],
 ['Dois corpos à mesma temperatura continuam trocando calor','Com a mesma temperatura estão em equilíbrio e não trocam calor.']]}
],

/* ========== PARTE 2 – PROPAGAÇÃO DO CALOR ========== */
p2: [
{n:'f', q:'Qual destes materiais é um bom CONDUTOR térmico?', c:0, o:[
 ['Alumínio','Isso! Metais como alumínio, cobre, aço e prata facilitam a troca de calor.'],
 ['Madeira','A madeira é isolante; por isso é usada em cabos de panela.'],
 ['Isopor','O isopor é um excelente isolante.'],
 ['Lã','A lã é isolante; usada em cobertores e agasalhos.']]},

{n:'f', q:'Qual destes materiais é um bom ISOLANTE térmico?', c:0, o:[
 ['Isopor','Correto! Por isso copos de isopor mantêm a bebida quente ou gelada.'],
 ['Cobre','O cobre é metal, um ótimo condutor.'],
 ['Aço','O aço é metal e conduz bem o calor.'],
 ['Prata','A prata é um dos melhores condutores.']]},

{n:'f', q:'Como o calor do Sol chega até a Terra?', c:0, o:[
 ['Por irradiação','Isso! Por ondas eletromagnéticas, que atravessam o vácuo do espaço.'],
 ['Por condução','A condução precisa de contato, e não há matéria entre o Sol e a Terra.'],
 ['Por convecção','A convecção precisa de ar ou líquido em movimento; no espaço há vácuo.'],
 ['Por dilatação','Dilatação é o aumento de tamanho de um corpo, não uma forma de propagação.']]},

{n:'f', q:'Uma colher de metal dentro da sopa quente esquenta até o cabo. Que processo é esse?', c:0, o:[
 ['Condução','Correto! O calor passa de partícula em partícula pelo metal, por contato.'],
 ['Irradiação','Na irradiação não é preciso contato; aqui o calor passa pelo próprio metal.'],
 ['Convecção','Convecção é movimento de ar ou líquido, não de um sólido.'],
 ['Evaporação','Evaporação é mudança de estado, não forma de propagação do calor.']]},

{n:'f', q:'O que acontece com o ar quente num ambiente?', c:0, o:[
 ['Sobe, porque fica menos denso','Isso! E o ar frio, mais denso, desce. Assim se formam as correntes de convecção.'],
 ['Desce, porque fica mais denso','O ar quente fica menos denso e sobe.'],
 ['Fica parado no meio do cômodo','O ar quente se movimenta, formando correntes de convecção.'],
 ['Desce até encostar no chão','Quem desce é o ar frio.']]},

{n:'f', q:'Por que os cabos de panela são feitos de madeira ou plástico?', c:0, o:[
 ['São isolantes e evitam queimaduras','Correto! Eles dificultam a passagem do calor da panela para a mão.'],
 ['São condutores e esquentam rápido','Madeira e plástico são isolantes, não condutores.'],
 ['Fazem a comida cozinhar mais rápido','Quem ajuda a cozinhar é o metal da panela, que é condutor.'],
 ['São mais pesados que o metal','O motivo é o isolamento térmico, não o peso.']]},

{n:'f', q:'Qual forma de propagação do calor pode acontecer no vácuo?', c:0, o:[
 ['Irradiação','Isso! Ela usa ondas eletromagnéticas e não precisa de matéria.'],
 ['Condução','A condução precisa de matéria em contato.'],
 ['Convecção','A convecção precisa de ar ou líquido em movimento.'],
 ['Nenhuma delas','A irradiação ocorre no vácuo; é assim que o calor do Sol chega até nós.']]},

{n:'m', q:'Onde é melhor instalar o ar-condicionado e por quê?', c:0, o:[
 ['No alto da parede, porque o ar frio desce','Correto! O ar frio, mais denso, desce e resfria todo o ambiente por convecção.'],
 ['Perto do chão, porque o ar frio sobe','O ar frio desce, então perto do chão ele ficaria parado lá embaixo.'],
 ['Perto do chão, para gelar mais os pés de quem está deitado','Assim o ar frio ficaria embaixo e não resfriaria o cômodo todo.'],
 ['Atrás da porta, bem longe da janela','O que importa é a altura, por causa da convecção.']]},

{n:'m', q:'Por que aquecedores e lareiras ficam perto do chão?', c:0, o:[
 ['O ar aquecido sobe e circula pelo cômodo','Isso! O ar quente sobe, o frio desce e é aquecido, formando correntes de convecção.'],
 ['O calor do aquecedor só consegue descer','O ar quente sobe, não desce.'],
 ['O chão conduz o calor diretamente ao teto','O calor se espalha pelo ar em movimento (convecção), não pelo chão.'],
 ['O ar quente fica preso perto do chão','O ar quente sobe; é isso que espalha o calor.']]},

{n:'m', q:'Durante o dia, na praia, em que direção sopra a brisa?', c:0, o:[
 ['Do mar para a terra','Correto! A areia esquenta mais rápido, o ar sobre ela sobe e o ar do mar vem ocupar o lugar.'],
 ['Da terra para o mar','Isso acontece à noite (brisa terrestre).'],
 ['Não há vento nenhum durante o dia','Há sim: a brisa marítima, causada pela convecção.'],
 ['Sempre de cima para baixo, do céu','A brisa é horizontal, entre o mar e a terra.']]},

{n:'m', q:'Por que um casaco de lã nos mantém aquecidos?', c:0, o:[
 ['Isola e não deixa o calor do corpo escapar','Isso! A lã não produz calor; ela retarda a perda do calor do nosso corpo.'],
 ['Produz calor próprio e aquece o corpo','A lã não produz calor; o calor vem do próprio corpo.'],
 ['Conduz o calor do ambiente para dentro do corpo','A lã é isolante, não condutora.'],
 ['Puxa o calor do ar frio para dentro','Ar frio não tem “calor sobrando” para dar; a lã só isola.']]},

{n:'m', q:'O que as câmeras térmicas captam para formar a imagem?', c:0, o:[
 ['Radiação infravermelha','Correto! Todo corpo emite infravermelho; quanto mais quente, mais emite.'],
 ['Correntes de convecção do ar','A câmera não capta o movimento do ar.'],
 ['O som emitido pelos corpos','Câmera térmica não usa som.'],
 ['Luz ultravioleta do Sol','Ela capta infravermelho, inclusive no escuro.']]},

{n:'m', q:'Qual afirmação sobre a condução térmica está correta?', c:0, o:[
 ['Não há troca de matéria, só de energia','Isso! As partículas passam energia para as vizinhas, mas não se deslocam de um corpo para outro.'],
 ['Acontece só em líquidos e gases','A condução acontece principalmente em sólidos em contato.'],
 ['É facilitada pelos materiais isolantes','Os isolantes dificultam; os condutores facilitam.'],
 ['Precisa de ondas eletromagnéticas','Ondas eletromagnéticas são da irradiação.']]},

{n:'m', q:'Por que nas geladeiras tradicionais o congelador fica em cima?', c:0, o:[
 ['O ar frio desce e resfria as prateleiras','Correto! Por isso as prateleiras são vazadas, para o ar frio passar.'],
 ['O ar frio sobe até o congelador','O ar frio desce, não sobe.'],
 ['O metal da geladeira conduz o frio','“Frio” não é conduzido; o que acontece é convecção do ar frio.'],
 ['Fica mais fácil de abrir, limpar e organizar os alimentos','A posição é escolhida por causa da convecção.']]},

{n:'d', q:'Na garrafa térmica, para que servem as paredes internas espelhadas?', c:0, o:[
 ['Diminuir as perdas por irradiação','Isso! O espelho reflete o calor radiante de volta.'],
 ['Diminuir as perdas por condução','Quem reduz a condução é o vácuo entre as paredes de vidro.'],
 ['Diminuir as perdas por convecção','Quem reduz a convecção com o ambiente é a tampa bem fechada.'],
 ['Aumentar a troca de calor com o ar','A garrafa térmica serve justamente para diminuir a troca de calor.']]},

{n:'d', q:'Por que, à noite, a brisa sopra da terra para o mar?', c:0, o:[
 ['A areia esfria mais rápido que a água','Correto! O ar sobre o mar fica mais quente, sobe, e o ar da terra vai para o mar.'],
 ['A água esfria mais rápido que a areia','É o contrário: a água tem calor específico maior e demora mais para esfriar.'],
 ['O Sol aquece mais o mar durante a noite','À noite não há Sol aquecendo.'],
 ['A areia tem calor específico maior','Quem tem calor específico maior é a água.']]},

{n:'d', q:'Para servir chá, você tem uma caneca de alumínio e uma de porcelana. Qual esfria o chá mais rápido?', c:0, o:[
 ['A de alumínio, que é boa condutora','Isso! O alumínio troca calor com o ambiente mais rápido (e também queima mais a mão).'],
 ['A de porcelana, que é boa condutora','A porcelana (cerâmica) conduz pouco o calor; ela mantém o chá quente por mais tempo.'],
 ['As duas esfriam igual, sempre','O material influencia muito a troca de calor.'],
 ['Nenhuma, pois o chá não troca calor','O chá troca calor com a caneca e com o ar até o equilíbrio.']]},

{n:'d', q:'Madeira é isolante, mas a serragem é ainda melhor. Por quê?', c:0, o:[
 ['Tem ar preso entre os pedacinhos','Correto! O ar parado é ótimo isolante, como nas penas das aves.'],
 ['É mais pesada que a madeira inteira','O peso não é o motivo.'],
 ['Conduz melhor o calor que a madeira','Se conduzisse melhor, seria pior isolante.'],
 ['Produz calor quando é comprimida','A serragem não produz calor.']]},

{n:'d', q:'No forno de cozinha, qual associação está correta?', c:0, o:[
 ['A chama aquece por irradiação e o ar circula por convecção','Isso! E tocar a grade quente queima a mão por condução.'],
 ['A chama aquece por condução e o ar circula por irradiação','Está trocado: o ar quente circulando é convecção.'],
 ['A grade queima a mão por convecção, sem precisar tocar','Queimar ao tocar a grade é condução.'],
 ['A alça é de metal para conduzir e evitar queimaduras','A alça é de material isolante para evitar queimaduras.']]},

{n:'d', q:'Relacione: I. colher de metal na chama do fogão; II. ar quente subindo perto do aquecedor; III. sentir o calor do Sol.', c:0, o:[
 ['I – condução; II – convecção; III – irradiação','Correto!'],
 ['I – convecção; II – condução; III – irradiação','A colher esquenta por contato (condução) e o ar subindo é convecção.'],
 ['I – condução; II – irradiação; III – convecção','O calor do Sol chega por irradiação, e o ar subindo é convecção.'],
 ['I – irradiação; II – convecção; III – condução','A colher em contato com a chama esquenta por condução.']]}
],

/* ========== PARTE 3 – MÁQUINAS TÉRMICAS ========== */
p3: [
{n:'f', q:'Uma máquina térmica transforma:', c:0, o:[
 ['Energia térmica em energia mecânica','Isso! Transforma calor em movimento (trabalho).'],
 ['Energia elétrica em energia térmica','Isso é o que faz um chuveiro elétrico, não uma máquina térmica.'],
 ['Energia mecânica em energia térmica','É o caminho contrário.'],
 ['Energia solar em energia elétrica','Isso é o que faz um painel solar.']]},

{n:'f', q:'Qual era o combustível das primeiras máquinas a vapor industriais?', c:0, o:[
 ['Carvão mineral','Correto! Era abundante na Inglaterra, mas é não renovável e poluente.'],
 ['Gasolina','A gasolina é usada nos motores de combustão interna, bem depois.'],
 ['Energia solar','As primeiras máquinas queimavam combustível sólido.'],
 ['Etanol','O etanol é um biocombustível moderno, usado em carros.']]},

{n:'f', q:'O motor de um carro é um motor de:', c:0, o:[
 ['Combustão interna','Isso! A queima acontece dentro da câmara do motor.'],
 ['Combustão externa','Na externa, a queima é fora do motor, como nas máquinas a vapor.'],
 ['Vapor com caldeira','Carros modernos não usam caldeira nem vapor.'],
 ['Turbina hidrelétrica','Turbina hidrelétrica é movida pela água, em usinas.']]},

{n:'f', q:'Qual gás liberado na queima de combustíveis fósseis é o principal responsável por agravar o efeito estufa?', c:0, o:[
 ['Dióxido de carbono (CO₂)','Correto! Ele se acumula na atmosfera e intensifica o efeito estufa.'],
 ['Oxigênio (O₂)','O oxigênio é usado na queima, não é o gás que agrava o efeito estufa.'],
 ['Nitrogênio (N₂)','O nitrogênio não é o principal gás ligado ao aquecimento global.'],
 ['Hélio (He)','O hélio não tem relação com a queima de combustíveis.']]},

{n:'f', q:'Qual destes é um combustível RENOVÁVEL?', c:0, o:[
 ['Etanol da cana-de-açúcar','Isso! É um biocombustível de origem vegetal.'],
 ['Gasolina do petróleo','A gasolina vem do petróleo, que é fóssil e não renovável.'],
 ['Carvão mineral','O carvão mineral é fóssil e não renovável.'],
 ['Gás natural','O gás natural é um combustível fóssil.']]},

{n:'f', q:'Quem criou o condensador separado que tornou a máquina a vapor muito mais eficiente?', c:0, o:[
 ['James Watt','Correto! Em 1765. O consumo de carvão caiu para 1/3.'],
 ['Thomas Savery','Savery criou uma das primeiras máquinas para tirar água das minas (1698).'],
 ['Heron de Alexandria','Heron criou a eolípila, na Antiguidade.'],
 ['Karl Benz','Karl Benz criou o primeiro carro com motor a combustão (1886).']]},

{n:'f', q:'O que é a “maria-fumaça”?', c:0, o:[
 ['Uma locomotiva a vapor','Isso! O apelido vem da nuvem de vapor e fuligem que sai da chaminé.'],
 ['Um carro movido a gasolina','A maria-fumaça é um trem, não um carro.'],
 ['Uma usina nuclear','Usinas nucleares no Brasil são Angra 1 e 2.'],
 ['Uma turbina eólica','Turbinas eólicas usam o vento.']]},

{n:'m', q:'Na máquina a vapor, em que momento a energia térmica vira energia mecânica?', c:0, o:[
 ['Quando o vapor empurra o pistão','Correto! Dentro do cilindro, o vapor sob pressão move o pistão.'],
 ['Quando a água ferve na caldeira','Na caldeira a água só vira vapor; ainda não há movimento.'],
 ['Quando o vapor vira água no condensador','O condensador apenas recupera a água para reiniciar o ciclo.'],
 ['Quando o carvão é colocado no forno','Colocar carvão é só abastecer; a conversão é no pistão.']]},

{n:'m', q:'Qual é a função do condensador numa máquina a vapor?', c:0, o:[
 ['Transformar o vapor de volta em água','Isso! A água volta para a caldeira e o ciclo recomeça.'],
 ['Transformar a água da caldeira em vapor','Quem transforma a água em vapor é a caldeira.'],
 ['Queimar o carvão para gerar o calor','Quem queima o combustível é o forno.'],
 ['Fazer a roda girar mais rapidamente','A roda gira por causa do movimento do pistão.']]},

{n:'m', q:'Qual é a diferença entre motor de combustão interna e externa?', c:0, o:[
 ['Na interna, a queima acontece dentro do motor','Correto! Na externa, a queima é fora, numa caldeira que gera vapor.'],
 ['Na externa, a queima acontece dentro do motor','Está invertido: na externa a queima é fora do motor.'],
 ['A interna usa só carvão e madeira como combustível','Carvão e madeira são usados nos motores de combustão externa.'],
 ['A externa é a que existe no motor dos carros','Os carros usam motor de combustão interna.']]},

{n:'m', q:'Em qual dos 4 tempos do motor a vela de ignição solta a faísca?', c:0, o:[
 ['Combustão (explosão)','Isso! A faísca inflama a mistura comprimida e a explosão empurra o pistão.'],
 ['Admissão','Na admissão, o pistão desce e entra a mistura de ar e combustível.'],
 ['Compressão da mistura','Na compressão, o pistão sobe e comprime a mistura, ainda sem faísca.'],
 ['Exaustão','Na exaustão, os gases queimados saem pelo escapamento.']]},

{n:'m', q:'Qual era o problema da máquina de Thomas Savery (1698)?', c:0, o:[
 ['Risco de explosão e gasto alto de combustível','Correto! Usava vapor em alta pressão e consumia muito carvão.'],
 ['Funcionava apenas com energia solar','Ela queimava carvão para produzir vapor.'],
 ['Era pequena demais para as minas','O problema era a segurança e o consumo.'],
 ['Não usava água nem vapor para conseguir funcionar','Era justamente uma máquina a vapor.']]},

{n:'m', q:'Qual foi uma consequência social da Revolução Industrial?', c:0, o:[
 ['Jornadas longas e salários baixos','Isso! Além de cidades superlotadas, sem saneamento.'],
 ['O fim do trabalho nas fábricas','As fábricas cresceram e empregaram muita gente.'],
 ['A diminuição da população das cidades','Houve urbanização acelerada: as cidades encheram.'],
 ['Produtos mais caros e mais raros','A produção em larga escala deixou os produtos mais baratos.']]},

{n:'m', q:'Na usina termelétrica, qual é a sequência de transformações de energia?', c:0, o:[
 ['Térmica → mecânica → elétrica','Correto! O vapor gira a turbina (mecânica) e o gerador produz eletricidade.'],
 ['Elétrica → mecânica → térmica','É o caminho contrário.'],
 ['Mecânica → térmica → elétrica','A usina começa com a queima (energia térmica).'],
 ['Solar → elétrica → térmica','A termelétrica queima combustível; não usa luz solar.']]},

{n:'d', q:'Por que o condensador separado de Watt reduziu o consumo de carvão?', c:0, o:[
 ['O cilindro não esfriava a cada ciclo','Isso! Na máquina de Newcomen a água fria entrava no cilindro e o esfriava, gastando mais combustível.'],
 ['Passou a usar gasolina no lugar do carvão','A máquina de Watt continuou usando carvão.'],
 ['Tirou a caldeira de dentro da máquina','A caldeira continuou sendo essencial para gerar vapor.'],
 ['Começou a usar energia nuclear no forno','Energia nuclear só foi usada no século XX.']]},

{n:'d', q:'Qual a relação entre efeito estufa e aquecimento global?', c:0, o:[
 ['O aquecimento vem da intensificação de um efeito natural','Correto! O excesso de CO₂ e metano retém mais calor e eleva a temperatura média.'],
 ['Os dois são exatamente o mesmo fenômeno','São diferentes: um é natural e o outro é o aumento da temperatura média.'],
 ['O efeito estufa é causado apenas pelas fábricas','Ele é natural; as atividades humanas o intensificam.'],
 ['O aquecimento global faz o planeta esfriar','Aquecimento global é o aumento da temperatura média.']]},

{n:'d', q:'Sobre a energia nuclear, qual afirmação está correta?', c:0, o:[
 ['Não emite CO₂, mas já houve acidentes graves','Isso! Ex.: Chernobyl (1986) e Fukushima (2011).'],
 ['O Brasil tem a maior reserva de urânio do mundo','O Brasil tem a sexta maior reserva.'],
 ['Lança muitos gases tóxicos na atmosfera','A geração nuclear não emite gases de efeito estufa.'],
 ['Representa 20% da matriz energética do Brasil','Representa menos de 2%.']]},

{n:'d', q:'Por que o motor de combustão interna é mais eficiente que o de combustão externa?', c:0, o:[
 ['A energia vai direto para o pistão e perde menos calor','Correto! Na externa, parte do calor se perde ao aquecer a caldeira.'],
 ['Usa carvão, que libera mais energia que a gasolina','Carvão é usado em combustão externa, não interna.'],
 ['Não precisa de nenhum tipo de combustível','Todo motor a combustão precisa de combustível.'],
 ['Aquece mais água dentro de uma caldeira grande','O motor de combustão interna não usa caldeira.']]},

{n:'d', q:'Por que as termelétricas são importantes no Brasil, mesmo poluindo?', c:0, o:[
 ['Garantem energia nas secas, quando faltam chuvas','Isso! Complementam as hidrelétricas quando os reservatórios estão baixos.'],
 ['São a principal fonte de eletricidade do país','A principal fonte no Brasil é a hidráulica.'],
 ['Não poluem e não emitem gases de efeito estufa','Elas queimam combustíveis fósseis e emitem CO₂.'],
 ['Funcionam apenas com a energia do Sol','Funcionam queimando combustível para gerar vapor.']]},

{n:'d', q:'Qual a diferença entre um biocombustível e um combustível fóssil?', c:0, o:[
 ['É de origem vegetal, renovável e emite menos gases','Correto! Ex.: etanol e biodiesel. O fóssil vem de restos antigos e é não renovável.'],
 ['O biocombustível é fóssil, mas polui menos','O biocombustível não é fóssil; vem de plantas.'],
 ['O biocombustível não emite nenhum gás ao queimar','Ele emite gases, só que menos que os fósseis.'],
 ['O biocombustível vem do petróleo misturado à água','Petróleo é fóssil; biocombustível vem de cana, soja, milho etc.']]}
]
};
