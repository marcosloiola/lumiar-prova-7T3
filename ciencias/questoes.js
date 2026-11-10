/* Questões de Ciências – 3º trimestre.
   Formato: { n:'f'|'m'|'d', q:'pergunta', o:[[alternativa, explicação], ...], c:índice_correta }
   As alternativas são embaralhadas na tela, então a posição aqui não importa. */
window.QUIZ = {

/* ========== PARTE 1 – INDICADORES DE SAÚDE ========== */
p1: [
{n:'f', q:'Segundo a Organização Mundial da Saúde (OMS), em 1948, o que é saúde?', c:0, o:[
 ['Bem-estar físico, mental e social completo','Isso! Para a OMS, saúde é o completo bem-estar físico, mental e social, e não apenas a ausência de doença.'],
 ['Apenas não ter nenhuma doença no momento','Esse é exatamente o conceito que a OMS quis superar: saúde não é só a ausência de doença.'],
 ['Ter médicos e hospitais perto de casa','Ter acesso a serviços ajuda, mas não é a definição. A OMS fala em bem-estar físico, mental e social.'],
 ['Ter um corpo forte e praticar esportes sempre','Isso é só uma parte do bem-estar físico. A definição também inclui o bem-estar mental e o social.']]},

{n:'f', q:'O que são indicadores?', c:0, o:[
 ['Medidas que transformam a realidade em informação','Certo! Indicadores traduzem as condições de um lugar em números e informações para entender e acompanhar a comunidade.'],
 ['Leis que obrigam toda a população a cuidar da saúde','Indicadores não são leis. Eles são medidas usadas para entender e monitorar a realidade.'],
 ['Remédios usados para controlar as epidemias','Remédio não é indicador. Indicadores são medidas (números) que ajudam a planejar ações.'],
 ['Agentes de saúde que visitam as casas','Agentes de saúde podem coletar dados, mas o indicador é a medida calculada com esses dados.']]},

{n:'f', q:'O que o PIB (Produto Interno Bruto) representa?', c:0, o:[
 ['A soma dos produtos finais e serviços de um país','Correto! O PIB soma todos os produtos finais e serviços consumidos em um país em um período, geralmente um ano.'],
 ['A média de anos que as pessoas ficam na escola','Anos de estudo fazem parte da dimensão educação do IDH, não do PIB.'],
 ['O número total de pessoas que vivem no país','Isso é a população. O PIB mede a riqueza produzida (produtos e serviços).'],
 ['O dinheiro que o governo guarda em reserva no banco','O PIB não é uma poupança do governo. Ele mede a produção de bens e serviços do país.']]},

{n:'f', q:'Quais são as três dimensões usadas para calcular o IDH?', c:0, o:[
 ['Saúde, educação e renda','Isso! Saúde (expectativa de vida), educação (anos de estudo) e renda (RNB per capita).'],
 ['Saúde, segurança e transporte','Segurança e transporte são importantes, mas não entram no cálculo do IDH.'],
 ['Renda, população e território','Tamanho da população e do território não fazem parte do IDH.'],
 ['Educação, clima e indústria','Clima e indústria não fazem parte. O IDH usa saúde, educação e renda.']]},

{n:'f', q:'O IDH varia de 0 a 1. Qual destes valores indica o lugar MAIS desenvolvido?', c:0, o:[
 ['0,954','Certo! Quanto mais perto de 1, mais desenvolvido. 0,954 era o IDH da Noruega, primeira do ranking de 2019.'],
 ['0,377','Esse é um valor muito baixo, indica pouco desenvolvimento. Quanto mais perto de 1, melhor.'],
 ['0,600','É um valor médio. Existe uma alternativa mais próxima de 1.'],
 ['0,750','É um valor alto, mas existe outra alternativa ainda mais próxima de 1.']]},

{n:'f', q:'A taxa de mortalidade infantil mede:', c:0, o:[
 ['Mortes antes de 1 ano a cada mil nascidos vivos','Isso! É o número de crianças que morrem antes de completar 1 ano para cada mil nascidas vivas, em um ano.'],
 ['Mortes antes dos 5 anos a cada cem crianças da cidade','A idade e a base estão erradas: a mortalidade infantil considera menores de 1 ano, por mil nascidos vivos.'],
 ['Mortes de mães durante a gravidez ou parto','Isso é a mortalidade materna, outro indicador de mortalidade.'],
 ['Quantos filhos cada mulher tem, em média','Isso é a taxa de fecundidade, não de mortalidade.']]},

{n:'f', q:'Qual destas ações faz parte do saneamento básico?', c:0, o:[
 ['Coleta e tratamento de esgoto','Correto! Saneamento inclui água tratada, esgoto, limpeza urbana, drenagem e manejo do lixo e da água da chuva.'],
 ['Construção de quadras esportivas','Quadras são lazer, não saneamento. Saneamento cuida de água, esgoto, lixo e drenagem.'],
 ['Venda de remédios nas farmácias','Remédios tratam doenças, mas não modificam o ambiente como o saneamento faz.'],
 ['Campanhas de vacinação nas escolas','Vacinação é uma ação de saúde importante, mas não faz parte do saneamento básico.']]},

{n:'m', q:'O que a Epidemiologia estuda?', c:0, o:[
 ['A saúde coletiva de uma população','Isso! Em vez de olhar um paciente, a Epidemiologia estuda a incidência e a prevalência de doenças na população.'],
 ['O tratamento de cada paciente individual','Cuidar de um paciente é papel do médico. A Epidemiologia olha a população como um todo.'],
 ['O funcionamento das células do corpo','Isso é mais ligado à Biologia celular. A Epidemiologia estuda a saúde coletiva.'],
 ['A fabricação de vacinas em laboratório','Produzir vacinas é outra área. A Epidemiologia usa dados de saúde da população.']]},

{n:'m', q:'A taxa de INCIDÊNCIA de uma doença considera:', c:0, o:[
 ['Os casos novos na população em risco','Certo! A incidência conta os casos novos dividido pela população exposta, e mostra o risco de pegar a doença.'],
 ['Todos os casos que existem na população','Contar todos os casos existentes é a taxa de prevalência.'],
 ['Somente as mortes causadas pela doença','Contar mortes é um indicador de mortalidade, não de incidência.'],
 ['Somente as pessoas já curadas da doença','A incidência não conta pessoas curadas; conta casos novos em um período.']]},

{n:'m', q:'A “taxa de prevalência de adultos fumantes” é um indicador de qual tipo?', c:0, o:[
 ['Fatores de risco comportamentais','Isso! Fumar é um hábito de risco que leva a doenças não infecciosas.'],
 ['Serviços e estrutura de saúde','Indicadores de serviços medem a estrutura (leitos, profissionais). Fumar é um hábito.'],
 ['Mortalidade','Mortalidade conta mortes. Aqui estamos contando quantas pessoas fumam.'],
 ['Morbidade (ocorrência de doenças)','Morbidade mede a ocorrência de doenças. Fumar é um comportamento de risco, não uma doença.']]},

{n:'m', q:'A “razão de leitos hospitalares por habitante” é um indicador de qual tipo?', c:0, o:[
 ['Serviços de saúde','Correto! Leitos, profissionais por habitante e proporção de cesáreas medem a estrutura de saúde.'],
 ['Morbidade','Morbidade mede doenças na população (ex.: incidência de dengue), não a estrutura.'],
 ['Fatores de risco comportamentais','Esse tipo mede hábitos (fumar, sedentarismo), não hospitais.'],
 ['Socioeconômico, como o IDH','IDH e PIB medem riqueza e desenvolvimento, não a quantidade de leitos.']]},

{n:'m', q:'Por que o PIB per capita NÃO retrata bem a realidade de um país?', c:0, o:[
 ['Porque não mostra a desigualdade de renda','Isso! É uma média: algumas pessoas ganham muito mais que outras, e o número esconde essa diferença.'],
 ['Porque só conta os produtos importados','O PIB conta a produção interna do país, não os importados.'],
 ['Porque é calculado só a cada dez anos','O PIB costuma ser calculado por ano. O problema é a desigualdade escondida na média.'],
 ['Porque soma as peças e o produto pronto','É o contrário: o PIB conta só o produto final, justamente para não contar duas vezes.']]},

{n:'m', q:'Numa turma, 12 de 24 alunos ficaram gripados em 2019 e 16 de 32 em 2020. O que podemos concluir?', c:0, o:[
 ['A proporção de gripados ficou igual, 50%','Certo! 12 ÷ 24 = 0,5 e 16 ÷ 32 = 0,5. O número absoluto subiu, mas a proporção não mudou.'],
 ['A proporção de gripados subiu para 60%','Confira a conta: 16 ÷ 32 = 0,5, ou seja, 50%, igual a 2019.'],
 ['A proporção caiu, pois a turma cresceu','A turma cresceu, mas os gripados também. 12/24 e 16/32 dão os mesmos 50%.'],
 ['Não dá para calcular sem saber as mortes','Para a proporção só precisamos dos gripados e do total da turma.']]},

{n:'m', q:'Em 2024, a dengue teve incidência de 3.060,7 casos por 100 mil habitantes. Isso significa:', c:0, o:[
 ['Cerca de 3 mil casos a cada 100 mil pessoas','Isso! A taxa é normalizada: para cada 100 mil habitantes, houve pouco mais de 3 mil casos prováveis.'],
 ['Cerca de 3 mil mortes a cada 100 mil pessoas','A incidência conta casos (doentes), não mortes.'],
 ['Só 3.060 pessoas tiveram dengue no Brasil','Não é o total do país (foram mais de 6 milhões de casos). É a taxa por 100 mil habitantes.'],
 ['Que 30% da população teve dengue no ano','3.060 em 100.000 é cerca de 3%, não 30%.']]},

{n:'d', q:'Uma cidade tem 200.000 habitantes e registrou 1.000 óbitos em um ano. Qual é a taxa de mortalidade?', c:0, o:[
 ['5 óbitos por mil habitantes','Correto! (1.000 ÷ 200.000) × 1.000 = 5 óbitos a cada mil habitantes.'],
 ['0,5 óbito por mil habitantes','Faltou multiplicar certo: 1.000 ÷ 200.000 = 0,005; vezes 1.000 dá 5.'],
 ['50 óbitos por mil habitantes','Verifique a divisão: 1.000 ÷ 200.000 = 0,005, e 0,005 × 1.000 = 5.'],
 ['200 óbitos por mil habitantes','200 é a população em milhares, não a taxa. A conta dá 5 por mil.']]},

{n:'d', q:'Por que a taxa de mortalidade infantil também indica, de forma indireta, a qualidade do saneamento básico?', c:0, o:[
 ['Diarreias por água não tratada matam bebês','Isso! Sem saneamento, bactérias, protozoários e vermes na água causam diarreias que matam crianças pequenas.'],
 ['Bebês só morrem por falta de vacinas','Vacinas importam, mas não são a única causa. E isso não explica a ligação com saneamento.'],
 ['O saneamento aumenta o número de bebês nascidos','A taxa é por mil nascidos vivos; o número de nascimentos não é o que liga ao saneamento.'],
 ['A taxa é calculada pelo consumo de água','A taxa é calculada com mortes de bebês e nascidos vivos, não com consumo de água.']]},

{n:'d', q:'Um município tem PIB e IDH altos. O que podemos afirmar?', c:0, o:[
 ['Ainda pode haver pobreza e desigualdade','Certo! PIB e IDH são médias e não mostram as desigualdades (ex.: Paraisópolis ao lado de condomínios de luxo).'],
 ['Não há pobreza, pois a renda média é alta','Média alta não garante que todos estejam bem; a desigualdade fica escondida.'],
 ['Toda a população tem água e esgoto tratados','IDH e PIB não medem saneamento. Pode haver bairros sem esgoto.'],
 ['Ninguém morre antes de completar 1 ano','IDH alto ajuda, mas não zera a mortalidade infantil, que é outro indicador.']]},

{n:'d', q:'Em uma população, a prevalência de diabetes é de 10%. Isso quer dizer que:', c:0, o:[
 ['Uma pessoa sorteada tem 10% de chance de ter diabetes','Isso! A prevalência mostra a probabilidade de encontrar alguém que já tem a doença.'],
 ['Cada pessoa tem 10% de risco de desenvolver diabetes','Cuidado: risco de desenvolver é o que a INCIDÊNCIA mostra. A prevalência não mostra risco.'],
 ['10% das pessoas morreram de diabetes no ano','Isso seria um indicador de mortalidade, não de prevalência.'],
 ['Surgiram 10 casos novos a cada 100 pessoas no ano','Casos novos são contados pela incidência. A prevalência conta todos os casos existentes.']]},

{n:'d', q:'Em Alto Alegre (RR), a mortalidade infantil foi de 29,85 (2020) para 48,18 (2021) e 55,48 (2022) por mil nascidos vivos. Isso indica:', c:0, o:[
 ['Piora na saúde e no saneamento do município','Correto! A taxa subiu muito e está acima da média nacional, sinal de piores condições de saúde e atendimento.'],
 ['Melhora no atendimento às gestantes da cidade','Se o atendimento tivesse melhorado, a mortalidade infantil tenderia a cair, não subir.'],
 ['Aumento no número de nascimentos','A taxa é por mil nascidos vivos, então mais nascimentos não fazem ela subir sozinha.'],
 ['Redução da população total do município','A taxa considera nascidos vivos, não o total de moradores.']]},

{n:'d', q:'No cálculo do PIB, por que o preço do trigo e da farinha NÃO é somado ao preço do pão?', c:0, o:[
 ['Seus valores já estão no preço final do pão','Isso! O PIB conta só produtos finais. Somar trigo, farinha e pão contaria duas vezes o mesmo valor.'],
 ['Trigo e farinha são serviços, não produtos','Trigo e farinha são produtos (bens materiais). Serviços são bens imateriais, como internet.'],
 ['Produtos agrícolas não fazem parte do PIB','Produtos agrícolas fazem parte. O trigo não é somado aqui porque já está no pão.'],
 ['Só contam produtos vendidos a outros países','O PIB considera a produção e o consumo dentro do país, não só exportações.']]}
],

/* ========== PARTE 2 – DOENÇAS E A ÁGUA ========== */
p2: [
{n:'f', q:'Qual é o organismo causador da cólera?', c:0, o:[
 ['A bactéria Vibrio cholerae','Certo! A cólera é uma bacteriose causada pelo vibrião colérico, Vibrio cholerae.'],
 ['O protozoário Giardia lamblia','A Giardia causa giardíase, uma protozoose.'],
 ['O vírus transmitido pelo Aedes','O Aedes aegypti transmite dengue, zika, chikungunya e febre amarela urbana, não cólera.'],
 ['O verme Ascaris lumbricoides','O Ascaris é a lombriga, causadora da ascaridíase.']]},

{n:'f', q:'Qual destes organismos transmite a dengue?', c:0, o:[
 ['Aedes aegypti','Isso! A fêmea do Aedes aegypti (e do Aedes albopictus) transmite o vírus da dengue.'],
 ['Anopheles darlingi','O Anopheles (mosquito-prego) transmite a malária.'],
 ['Haemagogus leucocelaenus','O Haemagogus transmite a febre amarela silvestre.'],
 ['Biomphalaria glabrata','É o caramujo que participa do ciclo da esquistossomose.']]},

{n:'f', q:'Qual é a principal forma de combater as doenças transmitidas pelo Aedes aegypti?', c:0, o:[
 ['Eliminar a água parada em recipientes','Correto! A fêmea põe ovos em água parada; sem criadouros, o mosquito não se reproduz.'],
 ['Ferver toda a água da casa antes de beber','Ferver a água previne cólera e verminoses, mas não impede o mosquito de se reproduzir.'],
 ['Evitar nadar em lagoas e rios','Essa medida previne a esquistossomose, não as doenças do Aedes.'],
 ['Lavar bem as frutas e verduras','Isso previne amebíase e ascaridíase, que entram pela boca.']]},

{n:'f', q:'Qual doença é conhecida popularmente como “barriga-d’água”?', c:0, o:[
 ['Esquistossomose','Isso! O verme causa aumento do fígado, do baço e da barriga, daí o nome barriga-d’água.'],
 ['Ascaridíase','A ascaridíase é a infecção pela lombriga.'],
 ['Malária','A malária é chamada de maleita, sezão, paludismo ou febre terçã/quartã.'],
 ['Amebíase','A amebíase causa a disenteria amebiana, não a barriga-d’água.']]},

{n:'f', q:'O Ascaris lumbricoides é conhecido popularmente como:', c:0, o:[
 ['Lombriga','Certo! O Ascaris lumbricoides é a lombriga, causadora da ascaridíase.'],
 ['Barriga-d’água','Barriga-d’água é o nome popular da esquistossomose.'],
 ['Mosquito-prego','Mosquito-prego é o Anopheles, transmissor da malária.'],
 ['Ameba','Ameba é a Entamoeba histolytica, um protozoário.']]},

{n:'f', q:'Onde não há água tratada, qual medida ajuda a prevenir a cólera?', c:0, o:[
 ['Beber água fervida ou com cloro','Isso! Ferver ou clorar a água mata o vibrião colérico.'],
 ['Usar repelente durante a noite','Repelente protege de mosquitos, mas a cólera é transmitida por água e alimentos contaminados.'],
 ['Tomar remédio que contenha AAS','AAS não previne cólera. Ele é até perigoso em casos de dengue, zika e chikungunya.'],
 ['Evitar contato com os macacos','Macacos não transmitem cólera (nem febre amarela).']]},

{n:'f', q:'A malária é causada por qual tipo de organismo?', c:0, o:[
 ['Protozoário (Plasmodium)','Correto! O plasmódio é um protozoário, transmitido pela fêmea do mosquito Anopheles.'],
 ['Bactéria (Vibrio)','Vibrio é a bactéria da cólera.'],
 ['Vírus (flavivírus)','Flavivírus causa a febre amarela. A malária é causada por um protozoário.'],
 ['Verme (Schistosoma mansoni)','Schistosoma é o verme da esquistossomose.']]},

{n:'m', q:'Como uma pessoa se contamina com a esquistossomose?', c:0, o:[
 ['Larvas na água penetram pela pele','Isso! A cercária, liberada pelo caramujo, entra pela pele de quem tem contato com a água contaminada.'],
 ['Engolindo ovos em verduras mal lavadas','Engolir ovos é a forma de pegar ascaridíase (lombriga).'],
 ['Pela picada da fêmea do Anopheles','A picada do Anopheles transmite a malária.'],
 ['Bebendo água com cistos de ameba','Cistos na água transmitem amebíase e giardíase.']]},

{n:'m', q:'Qual é o hospedeiro intermediário da esquistossomose?', c:0, o:[
 ['Caramujo do gênero Biomphalaria','Certo! O miracídio entra no caramujo, que depois libera as cercárias na água.'],
 ['Mosquito do gênero Aedes','O Aedes transmite vírus (dengue, zika etc.), não participa da esquistossomose.'],
 ['Macaco que vive nas matas brasileiras','Macacos aparecem na febre amarela silvestre, como vítimas, não na esquistossomose.'],
 ['Moscas e baratas domésticas','Moscas e baratas podem espalhar ovos de lombriga e cistos, mas não são hospedeiras do Schistosoma.']]},

{n:'m', q:'Qual a diferença entre a febre amarela urbana e a silvestre?', c:0, o:[
 ['Urbana: Aedes aegypti. Silvestre: Haemagogus','Isso! O vírus e os sintomas são os mesmos; o que muda é o mosquito transmissor.'],
 ['Urbana: Haemagogus. Silvestre: Aedes aegypti','Está invertido: o Aedes vive nas cidades e o Haemagogus nas matas.'],
 ['Urbana: Anopheles. Silvestre: o macaco','O Anopheles transmite malária, e o macaco não transmite febre amarela.'],
 ['As duas são transmitidas pela água','A febre amarela é transmitida pela picada de mosquitos, não pela água.']]},

{n:'m', q:'Por que apenas a fêmea do mosquito pica as pessoas?', c:0, o:[
 ['Precisa de sangue para produzir os ovos','Correto! A produção de ovos gasta muita energia, que a fêmea obtém do sangue.'],
 ['Só ela já nasce carregando o vírus no corpo','O mosquito não nasce com o vírus; ele se infecta ao picar uma pessoa doente.'],
 ['Os machos vivem apenas dentro da água','Só as larvas vivem na água. Os machos adultos voam e se alimentam de líquidos de plantas.'],
 ['Os machos picam só animais silvestres','Os machos não picam: alimentam-se de líquidos de certos vegetais.']]},

{n:'m', q:'Por que a cólera exige procurar atendimento médico rapidamente?', c:0, o:[
 ['A diarreia causa desidratação em horas','Isso! A diarreia forte e líquida desidrata em poucas horas e pode levar à morte.'],
 ['Causa hemorragias logo no início','Hemorragia é característica da dengue grave, não da cólera.'],
 ['A bactéria vai direto para o cérebro','Quem pode chegar ao cérebro é a Entamoeba, na amebíase. A cólera age no intestino.'],
 ['Ela passa pelo ar para as pessoas em volta','A cólera é transmitida por água e alimentos contaminados, não pelo ar.']]},

{n:'m', q:'Qual é a descrição correta da Giardia lamblia?', c:0, o:[
 ['Protozoário com oito flagelos e dois núcleos','Correto! Os dois núcleos parecem “olhos”. Ela gruda na parede do intestino delgado.'],
 ['Verme achatado dos vasos do fígado','Esse é o Schistosoma mansoni, da esquistossomose.'],
 ['Vírus com quatro sorotipos diferentes','Quatro sorotipos (DEN-1 a DEN-4) é o vírus da dengue.'],
 ['Bactéria que causa diarreia líquida e esbranquiçada','Diarreia líquida e esbranquiçada é a da cólera, causada pelo Vibrio cholerae.']]},

{n:'m', q:'Qual doença transmitida pelo Aedes aegypti foi associada a casos de microcefalia em bebês?', c:0, o:[
 ['Zika','Isso! Em 2015 o Ministério da Saúde confirmou a relação entre o zika vírus e a microcefalia.'],
 ['Chikungunya','A chikungunya é marcada por dores fortes nas articulações, não por microcefalia.'],
 ['Dengue','A dengue pode ficar grave (hemorrágica), mas a microcefalia foi ligada ao zika.'],
 ['Febre amarela','A febre amarela pode afetar fígado e rins, mas a microcefalia foi ligada ao zika.']]},

{n:'d', q:'Por que não se deve tomar AAS (ácido acetilsalicílico) com suspeita de dengue, zika ou chikungunya?', c:0, o:[
 ['Pode causar hemorragias e piorar o quadro','Correto! O AAS atrapalha a coagulação e pode provocar sangramentos. O recomendado é tomar bastante líquido.'],
 ['Destrói o vírus rápido demais e provoca febre','O AAS não destrói o vírus. Nem existe antiviral contra a dengue.'],
 ['Impede o corpo de produzir anticorpos','Esse não é o motivo. O perigo do AAS é o risco de hemorragia.'],
 ['Causa diarreia intensa e desidratação','O risco do AAS nessas doenças é sangramento, não diarreia.']]},

{n:'d', q:'Em que situação a dengue pode evoluir para a forma hemorrágica?', c:0, o:[
 ['Ao pegar um sorotipo diferente do que já teve','Isso! Quem já teve dengue e se infecta com outro tipo de vírus pode ter a forma hemorrágica, mais grave.'],
 ['Ao ser picado duas vezes pelo mesmo mosquito','O que importa é o tipo (sorotipo) do vírus, não o número de picadas.'],
 ['Ao tomar a vacina da febre amarela e da gripe','Vacinas não causam dengue hemorrágica.'],
 ['Ao beber água contaminada pelo vírus da dengue','A dengue não é transmitida pela água, e sim pela picada do mosquito.']]},

{n:'d', q:'Qual é o caminho da larva da lombriga dentro do corpo humano?', c:0, o:[
 ['Intestino, sangue, pulmões, faringe e intestino','Correto! A larva sai do intestino, passa por fígado, coração e pulmões, sobe até a faringe, é engolida e vira adulta no intestino delgado.'],
 ['Boca, estômago e intestino, sem sair dele','A larva sai do intestino e passa pelos pulmões; por isso pode dar sintomas parecidos com pneumonia.'],
 ['Pele, vasos do fígado, depois fezes e água do rio','Entrar pela pele e viver nos vasos do fígado é o caminho do Schistosoma.'],
 ['Picada, sangue, fígado e glóbulos vermelhos','Esse caminho lembra o do plasmódio da malária, que entra pela picada do mosquito.']]},

{n:'d', q:'Por que a amebíase pode levar à morte?', c:0, o:[
 ['A ameba pode ir ao fígado, pulmões ou cérebro','Isso! Depois de lesionar o intestino, ela atinge os vasos sanguíneos e pode causar lesões graves em outros órgãos.'],
 ['Os cistos causam paralisia nas pernas','Paralisia não é sintoma da amebíase. O risco são lesões no fígado, pulmões ou cérebro.'],
 ['É transmitida por mosquitos à noite','A amebíase é transmitida pela água e alimentos contaminados (oral-fecal), não por mosquitos.'],
 ['A ameba destrói todos os glóbulos brancos do sangue','O problema descrito são as lesões em órgãos como fígado, pulmões e cérebro.']]},

{n:'d', q:'Algumas pessoas mataram macacos achando que eles transmitiam febre amarela. Por que isso está errado?', c:0, o:[
 ['Eles não transmitem e ajudam a vigiar o vírus','Correto! Os macacos também são vítimas e mostram onde o vírus está circulando (#aculpanãoédomacaco).'],
 ['Eles são imunes e podem doar anticorpos às pessoas','Os macacos não são imunes: eles também adoecem com a febre amarela.'],
 ['O vírus passaria a ser transmitido por cães','Não há relação com cães. A transmissão é feita por mosquitos.'],
 ['Eles comem os mosquitos transmissores','Esse não é o motivo. O ponto é que eles não transmitem e servem de alerta.']]},

{n:'d', q:'Em uma região sem esgoto, as pessoas tomam banho em um rio com caramujos. Qual medida interrompe melhor o ciclo da esquistossomose?', c:0, o:[
 ['Coletar e tratar o esgoto da região','Isso! Sem esgoto chegando ao rio, os ovos não alcançam a água e o ciclo é interrompido.'],
 ['Colocar telas nas janelas das casas','Telas protegem de mosquitos; a esquistossomose não é transmitida por mosquitos.'],
 ['Lavar bem as verduras com cloro','Ajuda contra verminoses que entram pela boca, mas a cercária entra pela pele.'],
 ['Vacinar todos contra febre amarela','A vacina da febre amarela não protege contra a esquistossomose.']]}
],

/* ========== PARTE 3 – IMUNOBIOLOGIA ========== */
p3: [
{n:'f', q:'Quais são as principais células do sistema imunitário?', c:0, o:[
 ['Glóbulos brancos (leucócitos)','Correto! Os leucócitos incluem fagócitos, linfócitos B, linfócitos T e células NK.'],
 ['Glóbulos vermelhos (hemácias)','As hemácias transportam oxigênio; não são as células de defesa.'],
 ['Plaquetas do sangue','As plaquetas atuam na coagulação, não são as principais células de defesa.'],
 ['Células da pele','A pele é uma barreira física, mas as células de defesa são os glóbulos brancos.']]},

{n:'f', q:'Qual é a primeira barreira física contra invasores do nosso corpo?', c:0, o:[
 ['A pele sem cortes','Isso! Fungos, bactérias e vírus raramente atravessam a pele íntegra.'],
 ['Os anticorpos do sangue','Anticorpos fazem parte da defesa adaptativa, que age depois que o invasor entrou.'],
 ['As vacinas','Vacinas preparam a defesa adaptativa, mas não são uma barreira física do corpo.'],
 ['O timo','O timo é um órgão onde amadurecem os linfócitos T, não uma barreira física.']]},

{n:'f', q:'Quais células produzem os anticorpos?', c:0, o:[
 ['Linfócitos B','Correto! Os linfócitos B produzem anticorpos que se ligam a alvos específicos.'],
 ['Linfócitos T','Os linfócitos T destroem células infectadas e regulam outras células de defesa.'],
 ['Macrófagos','Macrófagos fazem fagocitose: englobam e destroem as partículas.'],
 ['Células NK','As células NK atacam células infectadas e anormais, sem produzir anticorpos.']]},

{n:'f', q:'A vacina é um exemplo de:', c:0, o:[
 ['Imunização ativa artificial','Isso! O corpo recebe o antígeno e ele próprio produz anticorpos e células de memória.'],
 ['Imunização passiva artificial','Passiva artificial é o soro, que já traz anticorpos prontos.'],
 ['Imunização passiva natural','Passiva natural é a da amamentação e da placenta.'],
 ['Imunidade inata','Imunidade inata já nasce conosco; a vacina estimula a imunidade adaptativa.']]},

{n:'f', q:'Quais são os sinais típicos de uma inflamação?', c:0, o:[
 ['Vermelhidão, inchaço, calor e dor','Correto! Esses quatro sinais aparecem, por exemplo, numa espinha (acne).'],
 ['Febre, tosse, espirro e coriza','Esses são sintomas de gripe/resfriado, não os sinais locais da inflamação.'],
 ['Palidez, frio, coceira e sono','Esses não são os sinais da inflamação. Ela deixa o local vermelho e quente.'],
 ['Diarreia, vômito, muita sede e cansaço','Esses são sintomas de infecções intestinais, como a cólera.']]},

{n:'f', q:'Quem desenvolveu a primeira vacina, em 1796?', c:0, o:[
 ['Edward Jenner','Isso! O médico inglês usou material da varíola bovina para proteger contra a varíola humana.'],
 ['Oswaldo Cruz','Oswaldo Cruz promoveu a vacinação obrigatória no Brasil em 1904, mas não criou a primeira vacina.'],
 ['Louis Pasteur','Pasteur foi um cientista importante, mas o material destaca Jenner como criador da primeira vacina.'],
 ['James Phipps','James Phipps foi o menino que recebeu a vacina de Jenner, não quem a criou.']]},

{n:'f', q:'O que o bebê recebe da mãe pela amamentação que ajuda na sua defesa?', c:0, o:[
 ['Anticorpos prontos','Correto! É a imunização passiva natural: anticorpos passam da mãe para o bebê.'],
 ['Células de memória','Células de memória se formam quando o próprio corpo produz a resposta, o que não é o caso aqui.'],
 ['Antígenos enfraquecidos','Antígenos enfraquecidos estão nas vacinas, não no leite materno.'],
 ['Vacinas contra tudo','O leite não contém vacinas; ele transfere anticorpos da mãe.']]},

{n:'m', q:'O que acontece na fagocitose?', c:0, o:[
 ['A célula engloba a partícula e a destrói','Isso! O macrófago emite pseudópodes, engloba a partícula e a destrói com enzimas.'],
 ['A célula produz anticorpos contra o invasor','Produzir anticorpos é função dos linfócitos B, não é fagocitose.'],
 ['A célula se divide para formar hemácias','Formar células do sangue é papel da medula óssea.'],
 ['A célula libera histamina e causa inchaço','A histamina participa da inflamação, mas isso não é fagocitose.']]},

{n:'m', q:'Qual é a função do timo?', c:0, o:[
 ['Amadurecer os linfócitos T','Correto! O timo fica perto do coração, é desenvolvido na infância e vira gordura no adulto.'],
 ['Filtrar a linfa nas axilas e no pescoço','Filtrar a linfa é função dos linfonodos (gânglios).'],
 ['Remover as células velhas do sangue','Remover células sanguíneas sem utilidade é função do baço.'],
 ['Produzir a lisozima presente na saliva','A lisozima está na saliva, lágrimas e muco; não é produzida pelo timo.']]},

{n:'m', q:'Quais são os órgãos linfoides PRIMÁRIOS?', c:0, o:[
 ['Medula óssea e timo','Isso! Nos primários as células de defesa são produzidas (medula) e amadurecidas (timo).'],
 ['Baço e tonsilas','Baço e tonsilas são órgãos linfoides secundários.'],
 ['Linfonodos e vasos linfáticos','Linfonodos e vasos linfáticos também são secundários.'],
 ['Coração e pulmões','Coração e pulmões não são órgãos linfoides.']]},

{n:'m', q:'O que é a lisozima?', c:0, o:[
 ['Enzima que ataca a parede das bactérias','Correto! Está na saliva, nas lágrimas e no muco, e faz parte da defesa inata química.'],
 ['Anticorpo produzido depois da vacina','Anticorpos são produzidos pelos linfócitos B; a lisozima é uma enzima.'],
 ['Substância que deixa o local vermelho e quente','Quem aumenta o fluxo de sangue e causa vermelhidão é a histamina.'],
 ['Ácido produzido dentro do estômago','O estômago produz ácido clorídrico, que é outra defesa química.']]},

{n:'m', q:'Do que é formado o pus que aparece em uma inflamação?', c:0, o:[
 ['Células mortas e fluidos da inflamação','Isso! Células de defesa e do tecido mortas, mais os fluidos liberados no processo inflamatório.'],
 ['Anticorpos que saíram do sangue','O pus não é formado por anticorpos, e sim por células mortas e fluidos.'],
 ['Bactérias benéficas da pele','A microbiota não forma pus. O pus vem das células mortas na inflamação.'],
 ['Plasma limpo que ajuda a cicatrizar a ferida','O plasma que escapa causa inchaço; o pus contém células mortas.']]},

{n:'m', q:'O soro antiofídico, usado em picadas de cobra, é exemplo de:', c:0, o:[
 ['Imunização passiva artificial','Correto! O soro traz anticorpos prontos, produzidos em outro animal (como o cavalo).'],
 ['Imunização ativa artificial','Ativa artificial é a vacina, em que o próprio corpo produz os anticorpos.'],
 ['Imunização passiva natural','Passiva natural acontece pela placenta e pela amamentação.'],
 ['Imunização ativa natural','Ativa natural acontece quando a pessoa pega a doença e produz anticorpos.']]},

{n:'m', q:'O que é imunidade de rebanho?', c:0, o:[
 ['Muitos vacinados protegem quem não pode se vacinar','Isso! Com muita gente imunizada, o patógeno circula menos e protege bebês e quem não pode tomar vacina.'],
 ['Vacinar bois e vacas protege também as pessoas','Não tem a ver com animais. “Rebanho” aqui é a população humana.'],
 ['Quem já teve a doença passa imunidade aos outros','Imunidade não passa de uma pessoa para outra assim. O que protege é a menor circulação do patógeno.'],
 ['Basta vacinar os idosos para proteger toda a cidade','É preciso que grande parte da população esteja vacinada, não só um grupo.']]},

{n:'d', q:'Por que, numa picada de cobra, usa-se soro e não vacina?', c:0, o:[
 ['É preciso ter anticorpos prontos, de ação imediata','Correto! O soro já traz anticorpos e age na hora. A vacina demoraria, pois o corpo precisa produzi-los.'],
 ['A vacina protege por menos tempo que o soro','É o contrário: a vacina gera memória e protege por mais tempo; o soro é temporário.'],
 ['O soro cria memória e protege a vida toda','O soro não forma células de memória, por isso não dá imunidade permanente.'],
 ['O veneno de cobra não é considerado um antígeno pelo corpo','O veneno é sim um antígeno; é ele que é usado para produzir o soro no cavalo.']]},

{n:'d', q:'O que acontece quando o corpo entra em contato pela SEGUNDA vez com o mesmo antígeno?', c:0, o:[
 ['Produz anticorpos mais rápido e em maior quantidade','Isso! As células de memória geram a resposta secundária, mais rápida e mais forte.'],
 ['Não produz mais nenhum anticorpo, pois já está imunizado','Estar imune significa justamente produzir anticorpos rapidamente, e não deixar de produzi-los.'],
 ['Produz anticorpos mais devagar que da 1ª vez','É o contrário: a resposta secundária é mais rápida.'],
 ['Não reage, porque o antígeno já é conhecido','Conhecer o antígeno faz o corpo reagir melhor, não deixar de reagir.']]},

{n:'d', q:'Pediatras dizem que brincar ao ar livre, descalço, pode fortalecer a imunidade das crianças. Por quê?', c:0, o:[
 ['O contato com antígenos estimula a memória imune','Correto! Ao ter contato com microrganismos, o corpo treina as defesas e forma células de memória.'],
 ['Andar descalço aumenta a lisozima nos pés','A lisozima está na saliva, lágrimas e muco; não é isso que explica.'],
 ['Ao ar livre não existem microrganismos causadores de doença','Existem muitos microrganismos ao ar livre, e é justamente o contato que treina a defesa.'],
 ['O sol faz a pele produzir anticorpos','Anticorpos são produzidos pelos linfócitos B, não pela pele com o sol.']]},

{n:'d', q:'Qual é a diferença entre imunidade inata e adaptativa?', c:0, o:[
 ['A adaptativa é específica e tem memória; a inata não','Isso! A inata age igual contra qualquer invasor; a adaptativa reconhece cada antígeno e guarda memória.'],
 ['A inata é específica e tem memória; a adaptativa não','Está invertido: especificidade e memória são características da adaptativa.'],
 ['As duas só aparecem depois de tomar vacinas','A inata já nasce conosco; a adaptativa surge com o contato com antígenos (doença ou vacina).'],
 ['A inata só existe em adultos; a adaptativa em bebês','Inato significa que nasce conosco; ela existe desde o nascimento.']]},

{n:'d', q:'Na inflamação, por que o local fica inchado?', c:0, o:[
 ['A histamina faz o plasma escapar para os tecidos','Correto! A histamina aumenta o fluxo de sangue e faz o plasma sair dos vasos, causando inchaço.'],
 ['As bactérias produzem água dentro da ferida','O inchaço vem do plasma que escapa dos vasos, não de água produzida por bactérias.'],
 ['Os linfócitos B produzem pus em grande volume no local','O pus é formado por células mortas e fluidos, e não é a causa do inchaço.'],
 ['A lisozima endurece a pele ao redor da lesão','A lisozima ataca bactérias; ela não endurece nem incha a pele.']]},

{n:'d', q:'As taxas de vacinação infantil estão caindo no Brasil. Por que isso é perigoso?', c:0, o:[
 ['Doenças controladas podem voltar a circular','Isso! Com menos vacinados, a imunidade de rebanho cai e doenças como sarampo e pólio podem voltar.'],
 ['As vacinas antigas deixam de funcionar','A eficácia da vacina não muda; o problema é ter menos pessoas protegidas.'],
 ['O Programa Nacional de Imunização acaba sozinho','O Programa Nacional de Imunização continua existindo; o risco é a volta das doenças.'],
 ['Os vírus ficam resistentes a antibióticos','Antibióticos agem contra bactérias, não contra vírus, e isso não tem a ver com vacinação.']]}
]
};
