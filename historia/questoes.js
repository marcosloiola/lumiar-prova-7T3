/* Questões de História – 3º trimestre.
   Formato: { n:'f'|'m'|'d', q:'pergunta', o:[[alternativa, explicação], ...], c:índice_correta }
   As alternativas são embaralhadas na tela. */
window.QUIZ = {

/* ========== PARTE 1 – DO LITORAL AO INTERIOR ========== */
p1: [
{n:'f', q:'Onde se concentrou a colonização portuguesa até o fim do século XVI?', c:0, o:[
 ['Em pequenos trechos do litoral','Isso! Vilas como Olinda, Salvador, Rio de Janeiro e São Vicente ficavam perto do mar.'],
 ['No centro do território, em Goiás','O Centro-Oeste só foi ocupado no século XVIII, com as monções e o ouro.'],
 ['Na Região Amazônica, perto de Manaus','A Amazônia foi ocupada aos poucos, a partir do século XVII.'],
 ['No extremo sul, perto do Rio da Prata','O Sul foi ocupado mais tarde, com a pecuária do século XVIII.']]},

{n:'f', q:'Qual núcleo do interior deu origem à cidade de São Paulo?', c:0, o:[
 ['Piratininga','Correto! A vila surgiu em 1554 no planalto de Piratininga, a partir de um colégio jesuíta.'],
 ['Olinda','Olinda fica no litoral de Pernambuco.'],
 ['Ilhéus','Ilhéus é uma vila do litoral da Bahia.'],
 ['Cuiabá','Cuiabá surgiu no século XVIII, com o ouro do Mato Grosso.']]},

{n:'f', q:'Quem eram os tropeiros?', c:0, o:[
 ['Condutores de tropas de mulas e gado','Isso! Levavam mercadorias entre o Sul, São Paulo e Minas, abrindo caminhos e fundando vilas.'],
 ['Soldados que protegiam os fortes','Os fortes tinham guarnições militares, mas os tropeiros eram comerciantes/condutores.'],
 ['Padres que fundavam os aldeamentos','Quem fundava aldeamentos eram os jesuítas.'],
 ['Navegadores que exploravam o litoral','Os tropeiros viajavam por terra, pelo interior, com animais.']]},

{n:'f', q:'O que eram as “drogas do sertão”?', c:0, o:[
 ['Produtos da floresta como guaraná e cacau','Correto! Também urucum, castanhas, pimenta e salsa. Eram vendidos na Europa com lucro.'],
 ['Remédios trazidos da Europa pelos padres jesuítas','As drogas do sertão eram produtos nativos da Amazônia, não importados.'],
 ['Plantações de cana no interior da Bahia','A cana era cultivada no litoral nordestino e não fazia parte das drogas do sertão.'],
 ['Minerais preciosos achados em Minas','Ouro e diamantes não são drogas do sertão.']]},

{n:'f', q:'O que eram as BANDEIRAS?', c:0, o:[
 ['Expedições pagas por particulares','Isso! Organizadas pelos colonos de São Paulo, principalmente para capturar indígenas.'],
 ['Expedições pagas pela Coroa','Essas eram as entradas.'],
 ['Viagens marítimas para a África','Bandeiras eram expedições pelo interior do Brasil.'],
 ['Missões religiosas na Amazônia','Missões eram aldeamentos fundados pelos jesuítas.']]},

{n:'f', q:'Qual era o principal objetivo dos jesuítas nos aldeamentos?', c:0, o:[
 ['Converter os indígenas ao cristianismo','Correto! Por isso eram contra a escravização dos indígenas.'],
 ['Capturar indígenas para vender aos engenhos','Isso era feito pelos colonos e bandeirantes, que entravam em conflito com os jesuítas.'],
 ['Procurar ouro e prata nas florestas','A busca por metais era objetivo das entradas, não dos jesuítas.'],
 ['Construir fortes contra os franceses','Os fortes eram construídos pela Coroa por razões militares.']]},

{n:'f', q:'O que era o charque, produzido nas estâncias do Sul?', c:0, o:[
 ['Carne salgada e seca ao sol','Isso! Era muito vendido para a região das minas.'],
 ['Um tipo de couro usado em selas','O couro era outro produto, mas o charque era carne.'],
 ['Uma bebida feita de mate e açúcar','O charque não é uma bebida.'],
 ['O nome das fazendas de gado gaúchas','As fazendas se chamavam estâncias.']]},

{n:'m', q:'Por que os portugueses evitaram ocupar o interior no começo da colonização?', c:0, o:[
 ['Temiam deixar a costa desprotegida','Correto! Tinham medo de ataques de espanhóis, franceses, ingleses e holandeses ao litoral.'],
 ['O interior não tinha nenhum rio navegável','O interior tinha rios importantes, como o São Francisco e o Tietê.'],
 ['O rei proibiu qualquer viagem para o interior','Não houve essa proibição; depois a Coroa até incentivou expedições.'],
 ['Já haviam achado ouro no litoral','O ouro só foi encontrado no interior, no fim do século XVII.']]},

{n:'m', q:'O que levou a pecuária nordestina para o interior?', c:0, o:[
 ['A proibição de criar gado perto do litoral','Isso! O gado destruía os canaviais, e a Coroa proibiu a criação numa faixa de ~66 km da costa.'],
 ['A descoberta de ouro nas margens dos rios do sertão','O ouro não foi o motivo da expansão do gado no Nordeste.'],
 ['A falta de água em toda a faixa litorânea','O motivo foi o conflito com a cana-de-açúcar, não a falta de água.'],
 ['A ordem dos jesuítas para ocupar o sertão','Os jesuítas não comandaram a expansão da pecuária.']]},

{n:'m', q:'O que era o sertanismo de contrato?', c:0, o:[
 ['Paulistas contratados para caçar fugitivos e destruir quilombos','Correto! Eram pagos por autoridades, senhores de engenho e pecuaristas, sobretudo no Nordeste.'],
 ['Acordos da Coroa com os jesuítas para proteger as missões do Sul','Os bandeirantes, na verdade, atacavam as missões jesuíticas.'],
 ['Contratos para levar gado do Sul para Minas Gerais','Levar gado e mercadorias era trabalho dos tropeiros.'],
 ['Contratos de trabalho assalariado para os vaqueiros','Vaqueiros recebiam pagamento, mas isso não é o sertanismo de contrato.']]},

{n:'m', q:'O que era a “guerra justa”?', c:0, o:[
 ['Brecha da lei para escravizar indígenas','Isso! Se a guerra fosse contra povos considerados “hostis”, os indígenas podiam ser escravizados.'],
 ['Guerra entre Portugal e Espanha por terras','Os conflitos entre as Coroas eram diplomáticos e não tinham esse nome.'],
 ['Revolta dos indígenas contra os jesuítas','A guerra justa era uma justificativa dos colonos, não uma revolta indígena.'],
 ['Lei que libertava todos os escravizados','Ao contrário: era usada para escravizar indígenas.']]},

{n:'m', q:'Qual a diferença entre ENTRADAS e BANDEIRAS?', c:0, o:[
 ['Entradas eram pagas pela Coroa; bandeiras, por particulares','Correto! As entradas também buscavam metais preciosos.'],
 ['Entradas eram particulares; bandeiras eram da Coroa','Está invertido: a Coroa financiava as entradas.'],
 ['Entradas iam pelo mar; bandeiras iam pelos rios','As duas eram expedições pelo interior.'],
 ['Entradas eram organizadas pelos jesuítas; bandeiras, pelos holandeses','Nenhuma delas era organizada por jesuítas ou holandeses.']]},

{n:'m', q:'Por que os moradores de São Paulo escravizavam indígenas em vez de africanos?', c:0, o:[
 ['Eram pobres para comprar africanos','Isso! A região não produzia açúcar e não gerava riqueza suficiente para o tráfico africano.'],
 ['A Coroa proibia africanos em São Paulo','Não havia essa proibição.'],
 ['Os indígenas pediam para trabalhar lá','Os indígenas eram capturados à força pelas bandeiras.'],
 ['Não havia indígenas em outras regiões','Havia indígenas em todo o território.']]},

{n:'m', q:'O que eram as monções?', c:0, o:[
 ['Expedições fluviais de São Paulo até Cuiabá','Correto! Saíam de Araritaguaba (Porto Feliz), pelo Tietê e Paraná, levando mercadorias e escravizados.'],
 ['Ventos que traziam navios da África','Monção também é nome de vento, mas aqui eram expedições pelos rios.'],
 ['Fazendas de gado do sertão do Ceará','As fazendas de gado não tinham esse nome.'],
 ['Aldeamentos jesuítas no Rio Amazonas','Aldeamentos eram as missões dos jesuítas.']]},

{n:'d', q:'Por que os jesuítas foram expulsos do Brasil a partir de 1759?', c:0, o:[
 ['Acusados de impedir o uso da mão de obra indígena','Isso! Mantinham os indígenas nas missões, longe dos colonos. Seus bens ficaram com Portugal.'],
 ['Por terem ajudado os holandeses a invadir o Nordeste','Essa não foi a acusação contra os jesuítas.'],
 ['Por apoiarem a escravização dos povos indígenas','Os jesuítas eram contra a escravização dos indígenas.'],
 ['Por terem descoberto ouro e escondido do rei','Quem escondeu o ouro foram os bandeirantes paulistas.']]},

{n:'d', q:'Durante a União Ibérica, por que as autoridades passaram a incentivar expedições para o interior?', c:0, o:[
 ['Para fundar vilas e achar metais além de Tordesilhas','Isso! Com Portugal e Espanha sob o mesmo rei, estimularam expedições de sertanistas além da linha de Tordesilhas.'],
 ['Para devolver as terras do interior aos povos indígenas','As expedições, ao contrário, avançaram sobre as terras indígenas.'],
 ['Para entregar o sertão aos franceses e holandeses','Os franceses e holandeses eram vistos como ameaça e combatidos.'],
 ['Para criar quilombos protegidos pela própria Coroa','A Coroa combatia os quilombos.']]},

{n:'d', q:'Por que hoje se discute se os bandeirantes devem ser vistos como heróis?', c:0, o:[
 ['Expandiram o território, mas com muita violência','Correto! Escravizaram e mataram indígenas e quilombolas. Por isso há debate sobre suas estátuas.'],
 ['Porque eles nunca saíram da vila de São Paulo','Eles exploraram regiões muito distantes, até o Paraguai e o Centro-Oeste.'],
 ['Porque defenderam os indígenas contra os colonos','Na verdade, eles capturavam e escravizavam indígenas.'],
 ['Porque perderam todas as batalhas que lutaram','O debate não é sobre vitórias, e sim sobre a violência praticada.']]},

{n:'d', q:'Como a ocupação holandesa no Nordeste (1630) afetou as bandeiras?', c:0, o:[
 ['Ficou difícil comprar africanos e o indígena capturado valorizou','Isso! O tráfico ficou prejudicado e aumentou a procura por indígenas escravizados.'],
 ['Os bandeirantes passaram a trabalhar para os holandeses no Nordeste','O texto não fala disso; o efeito foi no preço da mão de obra.'],
 ['As bandeiras foram proibidas pela Coroa espanhola','As expedições continuaram e até cresceram.'],
 ['Os indígenas ficaram livres da escravização','Ao contrário: a captura de indígenas foi estimulada.']]},

{n:'d', q:'O que tinham em comum Natal e Fortaleza no período colonial?', c:0, o:[
 ['Cresceram ao redor de fortes construídos pelos portugueses','Correto! Natal surgiu do Forte dos Reis Magos, e Fortaleza, do Forte de São Sebastião.'],
 ['Foram fundadas pelos franceses no século XVII','Os franceses fundaram São Luís (1612).'],
 ['Surgiram de aldeamentos de jesuítas no sertão','Elas surgiram no litoral, em volta de fortes.'],
 ['Nasceram de pousos de tropeiros do Sul','Pousos de tropeiros deram origem a vilas no interior do Sul e Sudeste.']]},

{n:'d', q:'Qual frase descreve corretamente o trabalho nas fazendas de gado do Nordeste?', c:0, o:[
 ['Muitos eram assalariados, e o vaqueiro ganhava parte das crias','Isso! Depois de 5 anos, o vaqueiro recebia 1 bezerro a cada 4 ou 5 nascidos.'],
 ['Todos os trabalhadores eram africanos escravizados sem pagamento','Havia escravizados, mas a maioria era de trabalhadores pagos.'],
 ['Só jesuítas e indígenas aldeados cuidavam do gado','Não; trabalhavam indígenas, pardos e negros libertos, além de escravizados.'],
 ['O gado era cuidado apenas pelos donos dos engenhos','O gado ficava em fazendas afastadas, com vaqueiros.']]}
],

/* ========== PARTE 2 – QUILOMBOS ========== */
p2: [
{n:'f', q:'O que era um quilombo?', c:0, o:[
 ['Comunidade de escravizados que fugiram','Isso! Viviam juntos para garantir proteção e sobrevivência.'],
 ['Fazenda de cana com trabalho escravo','Engenhos eram os locais de onde os escravizados fugiam.'],
 ['Aldeamento de indígenas dos jesuítas','Isso eram as missões jesuíticas.'],
 ['Mercado onde africanos eram vendidos','Os africanos eram vendidos em leilões e feiras nas cidades.']]},

{n:'f', q:'Como se chamam os moradores dos quilombos?', c:0, o:[
 ['Quilombolas','Correto!'],
 ['Bandeirantes','Os bandeirantes eram os paulistas que atacavam os quilombos.'],
 ['Emboabas','Emboabas eram os forasteiros na região das minas.'],
 ['Tropeiros','Tropeiros conduziam tropas de mulas com mercadorias.']]},

{n:'f', q:'Onde ficava o Quilombo dos Palmares?', c:0, o:[
 ['Serra da Barriga, em Alagoas','Isso! Na época, a região fazia parte da capitania de Pernambuco.'],
 ['Vila Rica, em Minas Gerais','Vila Rica era o centro da mineração do ouro.'],
 ['Planalto de Piratininga, em SP','Ali surgiu a vila de São Paulo.'],
 ['Belém, na foz do Amazonas','Belém foi base dos jesuítas na Amazônia.']]},

{n:'f', q:'Quem foi a principal liderança de Palmares?', c:0, o:[
 ['Zumbi','Correto! Foi morto em 20 de novembro de 1695.'],
 ['Domingos Jorge Velho','Ele foi o bandeirante que comandou a destruição de Palmares.'],
 ['Filipe dos Santos','Ele liderou a Revolta de Vila Rica, em 1720.'],
 ['Aleijadinho','Aleijadinho foi um escultor do Barroco mineiro.']]},

{n:'f', q:'Antes de serem chamados de quilombos (até o século XVII), esses lugares eram chamados de:', c:0, o:[
 ['Mocambos','Isso! Depois o termo quilombo se tornou o mais usado.'],
 ['Estâncias','Estâncias eram fazendas de gado do Sul.'],
 ['Datas','Datas eram lotes de exploração de ouro.'],
 ['Missões','Missões eram aldeamentos dos jesuítas.']]},

{n:'f', q:'Qual era a base da economia de Palmares?', c:0, o:[
 ['Agricultura','Correto! Plantavam feijão, milho, mandioca, banana e até cana. Também caçavam e pescavam.'],
 ['Mineração','A mineração era a base de Minas Gerais, não de Palmares.'],
 ['Tráfico de escravizados','Palmares era um lugar de fuga da escravidão.'],
 ['Exportação de açúcar','O açúcar era exportado pelos engenhos do litoral.']]},

{n:'f', q:'O que o dia 20 de novembro lembra?', c:0, o:[
 ['A morte de Zumbi, em 1695','Isso! Hoje é o Dia da Consciência Negra.'],
 ['A descoberta do ouro em Minas','A descoberta do ouro foi comunicada em 1695, mas a data lembra Zumbi.'],
 ['A fundação de São Paulo','São Paulo foi fundada em 1554, num 25 de janeiro.'],
 ['O fim da Guerra dos Emboabas','A Guerra dos Emboabas terminou em 1709.']]},

{n:'m', q:'Por que a Serra da Barriga era um bom lugar para um quilombo?', c:0, o:[
 ['Difícil acesso, longe dos engenhos e com recursos naturais','Correto! Permitia caça e pesca e dificultava os ataques.'],
 ['Ficava ao lado do porto, facilitando fugas de volta para a África','Ficava longe do litoral, justamente para se proteger.'],
 ['Os portugueses tinham dado aquelas terras aos fugitivos','Os portugueses atacaram Palmares durante quase todo o século XVII.'],
 ['Tinha muito ouro para comprar a liberdade de todos','Não havia ouro em Palmares; a economia era agrícola.']]},

{n:'m', q:'Qual era uma vantagem de Palmares ser formado por uma rede de vários mocambos?', c:0, o:[
 ['Se um fosse destruído, os outros continuavam','Isso! Os ataques destruíam grupos menores, mas o grande quilombo seguia protegido.'],
 ['Cada mocambo pagava impostos à Coroa','Os quilombos não pagavam impostos à Coroa.'],
 ['Todos os mocambos eram governados por padres','Os líderes eram chefes militares e religiosos dos próprios quilombolas.'],
 ['Os mocambos ficavam todos dentro de cidades','Os mocambos ficavam em áreas afastadas e de difícil acesso.']]},

{n:'m', q:'Como era a organização social de Palmares?', c:0, o:[
 ['Havia hierarquia, com chefes militares e religiosos','Correto! Não era uma sociedade igualitária. O líder principal vivia no mocambo Macaco.'],
 ['Todos tinham exatamente o mesmo poder e as mesmas funções','O livro destaca que Palmares não era igualitário.'],
 ['Era governado por um representante do rei de Portugal','Palmares era independente do governo colonial.'],
 ['Era controlado pelos jesuítas, que escolhiam os chefes','Os jesuítas não controlavam os quilombos.']]},

{n:'m', q:'O que é sincretismo religioso?', c:0, o:[
 ['Mistura de elementos de crenças diferentes','Isso! Africanos associaram seus deuses a santos católicos para escapar da perseguição.'],
 ['Proibição de todas as religiões africanas','A proibição existia, mas o sincretismo foi uma forma de resistir a ela.'],
 ['Conversão forçada dos indígenas pelos jesuítas','Isso é catequização.'],
 ['Festa de coroação dos reis de Portugal','A congada recria a coroação de reis do Congo, não de Portugal.']]},

{n:'m', q:'Por que os senhores de engenho queriam destruir Palmares?', c:0, o:[
 ['O quilombo estimulava fugas e revoltas','Correto! Era visto como séria ameaça à produção de açúcar.'],
 ['Palmares produzia açúcar mais barato','Palmares produzia para consumo próprio e trocas locais.'],
 ['Os quilombolas eram aliados dos espanhóis','Não há relação com os espanhóis.'],
 ['O quilombo ficava dentro dos canaviais','Palmares ficava longe do litoral e dos engenhos.']]},

{n:'m', q:'Qual destas foi uma forma de resistência dos africanos escravizados?', c:0, o:[
 ['Manter vivas suas músicas, danças e religiões','Isso! A resistência cultural preservou as tradições africanas, que hoje fazem parte da cultura brasileira.'],
 ['Aceitar o catolicismo e abandonar suas crenças','Abandonar as crenças seria o oposto da resistência cultural.'],
 ['Ajudar os capitães do mato a achar fugitivos','Isso ajudaria a escravidão, e não a resistência.'],
 ['Pedir ao rei que mandasse mais navios negreiros','Isso não faz sentido como resistência.']]},

{n:'m', q:'Quem foi contratado para destruir Palmares depois de várias expedições fracassadas?', c:0, o:[
 ['Bandeirantes paulistas de Domingos Jorge Velho','Correto! É um exemplo de sertanismo de contrato.'],
 ['Soldados holandeses vindos de Recife','Os holandeses já tinham sido expulsos em 1654.'],
 ['Padres jesuítas da Companhia de Jesus','Os jesuítas não lideraram ataques militares a Palmares.'],
 ['Tropeiros vindos do Rio Grande do Sul','Tropeiros eram comerciantes, não tropas militares.']]},

{n:'d', q:'A história de Palmares mostra que a dinâmica entre os grupos sociais no Brasil Colônia era baseada:', c:0, o:[
 ['Na resistência diante da dominação','Isso! Os escravizados resistiram de muitas formas à opressão colonial.'],
 ['Em relações harmoniosas e sem conflitos','A colonização foi marcada por violência e conflitos.'],
 ['Em conflitos só entre indígenas e portugueses','Havia conflitos também com africanos escravizados e quilombolas.'],
 ['Na expulsão dos portugueses pelos africanos','Os africanos não expulsaram os portugueses da Colônia.']]},

{n:'d', q:'Por que muitas fugas individuais terminavam com o escravizado voltando à fazenda?', c:0, o:[
 ['A fuga servia para negociar melhores condições','Correto! Às vezes fugiam para pedir mais descanso ou terra para plantar, e depois voltavam para negociar.'],
 ['Os quilombos não aceitavam fugitivos sozinhos','Não há registro dessa regra.'],
 ['A lei mandava que voltassem depois de um mês','Não existia essa lei.'],
 ['O senhor pagava um salário a quem voltasse','Escravizados não recebiam salário.']]},

{n:'d', q:'Por que, depois de 1654, os portugueses intensificaram os ataques a Palmares?', c:0, o:[
 ['Queriam retomar o açúcar após expulsar os holandeses','Isso! E impedir que os escravizados continuassem fugindo para o quilombo.'],
 ['Descobriram que havia ouro na Serra da Barriga','Não havia ouro em Palmares.'],
 ['Os quilombolas tinham invadido a cidade de Salvador','Palmares não invadiu Salvador.'],
 ['O rei de Portugal se converteu a uma religião africana','Isso não aconteceu.']]},

{n:'d', q:'Por que os quilombos são considerados importantes na história do Brasil?', c:0, o:[
 ['Mostram a luta organizada pela liberdade','Correto! Eram resistência à escravidão, preservavam culturas e ainda existem comunidades remanescentes.'],
 ['Foram criados pela Coroa para abrigar escravos','Os quilombos foram criados pelos próprios fugitivos, contra a vontade da Coroa.'],
 ['Acabaram com a escravidão ainda no século XVII','A escravidão durou até o fim do século XIX.'],
 ['Eram os principais produtores de ouro do país','A mineração ocorria nas lavras de Minas, com mão de obra escravizada.']]},

{n:'d', q:'Qual afirmação sobre os quilombos do período colonial está correta?', c:0, o:[
 ['A maioria era pequena, mas alguns tinham milhares','Isso! E costumavam ficar em regiões afastadas para se proteger.'],
 ['Todos tinham milhares de moradores, como Palmares','Palmares era uma exceção; a maioria tinha dezenas ou centenas.'],
 ['Existiram só em Alagoas, no século XVII','Houve quilombos em toda a América, do século XVI ao fim da escravidão.'],
 ['Nunca tiveram contato com povos indígenas','Houve alianças (e alguns conflitos) com indígenas.']]},

{n:'d', q:'O que aconteceu com Palmares depois da morte de Zumbi?', c:0, o:[
 ['A resistência continuou por anos','Correto! O último registro de quilombo organizado na região é de 1757.'],
 ['Foi reconstruído como uma vila portuguesa','A região ficou sob controle colonial, mas não virou vila de imediato.'],
 ['Os quilombolas foram libertados pelo rei','Não houve libertação; houve repressão.'],
 ['Tornou-se a capital da capitania','A capital de Pernambuco não foi transferida para lá.']]}
],

/* ========== PARTE 3 – CICLO DO OURO ========== */
p3: [
{n:'f', q:'Em qual região foi descoberto o ouro no fim do século XVII?', c:0, o:[
 ['Minas Gerais','Isso! Os primeiros núcleos foram onde hoje ficam Mariana e Ouro Preto.'],
 ['Pernambuco','Pernambuco era centro da produção de açúcar.'],
 ['Rio Grande do Sul','O Sul se destacava pela pecuária e pelo charque.'],
 ['Pará','O Pará se destacava pelas drogas do sertão.']]},

{n:'f', q:'Quem descobriu o ouro em Minas Gerais?', c:0, o:[
 ['Bandeirantes paulistas','Correto! Encontraram os primeiros sinais nos anos 1670 e comunicaram oficialmente em 1695.'],
 ['Padres jesuítas','Os jesuítas não foram os descobridores do ouro.'],
 ['Soldados holandeses','Os holandeses ocuparam parte do Nordeste, não Minas.'],
 ['Comerciantes ingleses','Os ingleses não descobriram o ouro.']]},

{n:'f', q:'O que era o “quinto”?', c:0, o:[
 ['Imposto de 20% sobre o ouro','Isso! Um quinto de todo o ouro devia ir para Portugal.'],
 ['Lote de terra com ouro','Os lotes se chamavam datas.'],
 ['Moeda feita de ouro em pó','O ouro em pó foi proibido de circular a partir de 1719.'],
 ['Quinta parte dos escravizados','A taxa sobre escravizados era a capitação.']]},

{n:'f', q:'Quem lutou na Guerra dos Emboabas?', c:0, o:[
 ['Paulistas contra forasteiros','Correto! Os paulistas queriam a exclusividade das minas; os “emboabas” vinham de Portugal e de outras capitanias.'],
 ['Portugueses contra holandeses','Portugueses e holandeses lutaram no Nordeste, no século XVII.'],
 ['Jesuítas contra bandeirantes','Houve conflitos entre eles, mas não com esse nome.'],
 ['Quilombolas contra o rei','Isso não descreve a Guerra dos Emboabas.']]},

{n:'f', q:'Que instrumento era usado para tirar o ouro de aluvião dos rios?', c:0, o:[
 ['Bateia','Isso! Uma espécie de peneira de madeira onde o ouro se depositava.'],
 ['Moenda','A moenda era usada nos engenhos para moer a cana.'],
 ['Arado','O arado é usado para preparar a terra para plantar.'],
 ['Tear','O tear é usado para fazer tecidos.']]},

{n:'f', q:'Quem foi Aleijadinho?', c:0, o:[
 ['Escultor do Barroco mineiro','Correto! Fez Os doze profetas e os Passos da Paixão, em Congonhas.'],
 ['Líder da Revolta de Vila Rica','Esse foi Filipe dos Santos.'],
 ['Bandeirante que achou o ouro','Os descobridores foram bandeirantes paulistas, não Aleijadinho.'],
 ['Governador de Minas Gerais','O governador citado no capítulo é o Conde de Assumar.']]},

{n:'f', q:'O que eram os “santos do pau oco”?', c:0, o:[
 ['Imagens ocas usadas para esconder ouro','Isso! Uma forma de contrabandear ouro e não pagar impostos.'],
 ['Igrejas construídas com madeira','Igrejas barrocas usavam pedra-sabão e outros materiais.'],
 ['Padres que fiscalizavam as minas','A fiscalização era da Intendência das Minas.'],
 ['Pinturas no teto das igrejas','As pinturas eram de artistas como Mestre Ataíde.']]},

{n:'m', q:'Para que serviam as Casas de Fundição?', c:0, o:[
 ['Fundir o ouro em barras com o selo real','Correto! Assim a Coroa garantia o quinto e combatia o contrabando.'],
 ['Fabricar ferramentas para os escravizados','As Casas de Fundição tratavam do ouro, não de ferramentas.'],
 ['Produzir moedas para pagar os soldados','Seu objetivo era controlar e taxar o ouro.'],
 ['Fazer as esculturas das igrejas barrocas','As esculturas eram feitas por artistas como Aleijadinho.']]},

{n:'m', q:'Por que os forasteiros eram chamados de “emboabas”?', c:0, o:[
 ['Por causa das botas que usavam','Isso! Em tupi, emboaba é “ave com penas até os pés”, e os paulistas andavam descalços.'],
 ['Porque vinham todos de Emboaba, em Portugal','Não existe essa cidade de origem.'],
 ['Porque eram os donos dos engenhos','Os emboabas eram forasteiros em busca de ouro.'],
 ['Porque falavam só a língua tupi','O apelido era dado pelos paulistas a quem vinha de fora.']]},

{n:'m', q:'O que era a Intendência das Minas?', c:0, o:[
 ['Órgão que fiscalizava e cobrava impostos','Correto! Criada em 1702 para controlar a mineração.'],
 ['Igreja construída pelos mineradores ricos','A Intendência era um órgão do governo, não uma igreja.'],
 ['Grupo de bandeirantes que achou o ouro','Os bandeirantes não formavam a Intendência.'],
 ['Estrada entre Minas e o Rio de Janeiro','Essa era a Estrada Real.']]},

{n:'m', q:'Como eram distribuídas as datas (lotes) de ouro?', c:0, o:[
 ['Pelo número de escravizados de cada um','Isso! Quem tinha mais escravizados recebia lotes maiores.'],
 ['Por sorteio entre todos os moradores','Não era por sorteio; dependia da posse de escravizados.'],
 ['Igualmente entre todas as famílias','A distribuição era desigual.'],
 ['Só para quem nasceu em Portugal','O critério era o número de escravizados, não o local de nascimento.']]},

{n:'m', q:'O que motivou a Revolta de Vila Rica (1720)?', c:0, o:[
 ['A criação das Casas de Fundição e mais impostos','Correto! Liderada por Filipe dos Santos, reuniu cerca de 2 mil pessoas.'],
 ['O desejo de tornar o Brasil independente','Ela não queria a independência; era uma revolta nativista.'],
 ['A proibição de criar gado perto do litoral nordestino','Essa proibição tem a ver com a pecuária no Nordeste.'],
 ['A expulsão dos jesuítas de Minas Gerais','A expulsão dos jesuítas foi em 1759, bem depois.']]},

{n:'m', q:'Por que a capital da Colônia saiu de Salvador e foi para o Rio de Janeiro?', c:0, o:[
 ['Ficava mais perto das minas e tinha porto','Isso! Facilitava o controle do ouro, a cobrança de impostos e o envio à Europa.'],
 ['Salvador tinha sido destruída por um terremoto','Isso não aconteceu.'],
 ['O rei de Portugal foi morar no Rio','A transferência foi por causa do ouro, não da mudança do rei.'],
 ['Os holandeses tinham tomado Salvador','Os holandeses já tinham sido expulsos há muito tempo.']]},

{n:'m', q:'Qual foi um problema causado pela corrida do ouro?', c:0, o:[
 ['Falta de comida e preços muito altos','Correto! Quase ninguém plantava; a comida vinha de longe e chegou a ser paga em ouro.'],
 ['Sobra de trabalhadores nos engenhos','Foi o contrário: faltou mão de obra nos engenhos.'],
 ['Diminuição da população de Minas','A população de Minas cresceu muito rápido.'],
 ['Fim do comércio entre as capitanias','O comércio entre regiões cresceu muito.']]},

{n:'d', q:'Por que os bandeirantes esconderam a descoberta do ouro por cerca de 20 anos?', c:0, o:[
 ['Queriam controlar sozinhos a exploração','Isso! Só comunicaram em 1695, quando ficou difícil esconder e esperavam recompensa.'],
 ['Não sabiam que aquele metal era ouro','Eles sabiam o valor do ouro.'],
 ['O rei tinha proibido procurar ouro','A Coroa queria muito encontrar ouro.'],
 ['Tinham medo dos jesuítas das minas','Esse não foi o motivo do segredo.']]},

{n:'d', q:'Qual foi a principal mudança ECONÔMICA trazida pelo ouro?', c:0, o:[
 ['O centro da economia foi do Nordeste para as minas','Correto! E surgiu um mercado interno ligando várias regiões da Colônia.'],
 ['O açúcar passou a valer mais que o ouro','O ouro passou a ser o produto mais importante.'],
 ['A Colônia deixou de enviar qualquer riqueza a Portugal','A Coroa cobrava o quinto e levava muito ouro.'],
 ['Os escravizados passaram a ser assalariados','A mineração continuou baseada no trabalho escravo.']]},

{n:'d', q:'Por que a Guerra dos Emboabas e a Revolta de Vila Rica são chamadas de revoltas nativistas?', c:0, o:[
 ['Defendiam interesses de grupos, sem querer independência','Isso! Não contestavam a dominação colonial.'],
 ['Foram lideradas por indígenas contra os colonos portugueses','Foram lideradas por colonos (paulistas, forasteiros, elites mineiras).'],
 ['Queriam libertar todos os escravizados','Nenhuma delas defendia o fim da escravidão.'],
 ['Tinham como objetivo criar uma república','Não buscavam mudar o regime político.']]},

{n:'d', q:'Como a sociedade mineradora era diferente da sociedade do açúcar?', c:0, o:[
 ['Era mais urbana e tinha camadas médias','Correto! Surgiram artesãos, comerciantes, funcionários e padres nas vilas.'],
 ['Não tinha escravizados, só trabalhadores livres','A mineração usou muita mão de obra escravizada.'],
 ['Todos os moradores enriqueceram com o ouro','Havia muita desigualdade e muitos “desclassificados do ouro”.'],
 ['Era só formada por senhores de engenho','Senhores de engenho eram típicos do Nordeste açucareiro.']]},

{n:'d', q:'Qual era a técnica de extração mais difícil e cara?', c:0, o:[
 ['Veios subterrâneos, com galerias','Isso! Exigia engenharia para evitar desmoronamentos.'],
 ['Aluvião, nas margens dos rios','O aluvião era o mais fácil, com a bateia.'],
 ['Grupiara, nas encostas dos morros','A grupiara era mais trabalhosa que o aluvião, mas menos que os veios.'],
 ['Fundição, nas Casas da Coroa','Fundição não era técnica de extração, e sim de controle do ouro.']]},

{n:'d', q:'O que eram os “escravos de ganho”?', c:0, o:[
 ['Escravizados que trabalhavam nas ruas para o senhor','Correto! Entregavam o dinheiro ao senhor e, às vezes, juntavam para comprar a alforria.'],
 ['Pessoas livres que vendiam comida nas vilas mineiras','Essas eram, por exemplo, as “negras de tabuleiro”.'],
 ['Escravizados que ganharam a liberdade do rei','A liberdade era obtida pela carta de alforria, não por doação do rei.'],
 ['Bandeirantes que ganhavam terras com o ouro','Bandeirantes não eram escravos de ganho.']]}
]
};
