/* Questões de Geografia – 3º trimestre.
   Formato: { n:'f'|'m'|'d', q:'pergunta', o:[[alternativa, explicação], ...], c:índice_correta }
   As alternativas são embaralhadas na tela. */
window.QUIZ = {

/* ========== PARTE 1 – AGROPECUÁRIA ========== */
p1: [
{n:'f', q:'A palavra “agropecuária” junta quais atividades?', c:0, o:[
 ['Agricultura e pecuária','Isso! Agricultura (cultivo da terra) + pecuária (criação de animais).'],
 ['Agricultura e indústria','A indústria pertence ao setor secundário. A agropecuária junta agricultura e pecuária.'],
 ['Pecuária e mineração','Mineração é extrativismo (indústria extrativa), não faz parte da palavra agropecuária.'],
 ['Comércio e transporte','Comércio e transporte são do setor terciário, não formam a agropecuária.']]},

{n:'f', q:'O que é a pecuária?', c:0, o:[
 ['A criação de animais para obter produtos','Correto! Pecuária é criar animais para obter carne, couro, leite, ovos etc.'],
 ['O cultivo da terra para produzir alimentos','Isso é a agricultura, a outra metade da agropecuária.'],
 ['A retirada de madeira das florestas','Retirar madeira é extrativismo vegetal.'],
 ['A transformação de alimentos em fábricas','Transformar alimentos é tarefa da indústria (setor secundário).']]},

{n:'f', q:'Qual destes produtos está entre os principais exportados pelo Brasil?', c:0, o:[
 ['Soja','Isso! O Brasil é o maior exportador mundial de soja, além de milho, café, açúcar, laranja e carnes.'],
 ['Trigo','O trigo não está entre os destaques de exportação do Brasil citados no capítulo.'],
 ['Azeite','O azeite não é um produto de exportação importante do Brasil.'],
 ['Batata','A batata é consumida aqui, mas não está entre as principais exportações.']]},

{n:'f', q:'Qual é o papel da agricultura familiar na alimentação dos brasileiros?', c:0, o:[
 ['Produz cerca de 70% dos alimentos consumidos','Correto! Arroz, feijão, frutas e hortaliças vêm, em boa parte, da agricultura familiar.'],
 ['Produz quase toda a soja que é exportada','A soja de exportação vem principalmente das grandes monoculturas do agronegócio.'],
 ['Produz apenas flores para outros países','A agricultura familiar produz principalmente alimentos para o mercado interno.'],
 ['Produz só para a própria família, sem vender nada','Ela também vende para cidades próximas, abastecendo o mercado interno.']]},

{n:'f', q:'O que é êxodo rural?', c:0, o:[
 ['A saída de muita gente do campo para a cidade','Isso! Foi causado pela industrialização e pela mecanização do campo.'],
 ['A saída de muita gente da cidade para o campo','É o contrário: no êxodo rural as pessoas deixam o campo.'],
 ['A mudança de agricultores para outros países','O êxodo rural é do campo para a cidade, dentro do próprio país.'],
 ['O abandono das terras por causa de enchentes','A causa principal foi a falta de trabalho no campo e a atração das cidades.']]},

{n:'f', q:'Qual destas práticas é típica da pecuária INTENSIVA?', c:0, o:[
 ['Vacinas, inseminação artificial e seleção de raças','Correto! A intensiva usa muitas técnicas e tem maior produção e produtividade.'],
 ['Gado solto no pasto com pouquíssimas técnicas','Isso descreve a pecuária extensiva.'],
 ['Somente pastos naturais e mão de obra da família','Pouca técnica e pasto natural são características da pecuária extensiva.'],
 ['Apenas bois e cavalos usados para puxar arados','Isso não descreve a pecuária intensiva, que é ligada a técnicas modernas.']]},

{n:'f', q:'O nome “Matopiba” vem de quais estados?', c:0, o:[
 ['Maranhão, Tocantins, Piauí e Bahia','Isso! MA + TO + PI + BA: uma região de expansão da fronteira agrícola (soja, milho, algodão).'],
 ['Mato Grosso, Tocantins, Piauí e Bahia','O “Ma” é de Maranhão, não de Mato Grosso.'],
 ['Minas Gerais, Tocantins, Paraíba e Bahia','O “Ma” é de Maranhão e o “Pi” é de Piauí.'],
 ['Maranhão, Tocantins, Pará e Bahia','O “Pi” é de Piauí, não de Pará.']]},

{n:'m', q:'Qual é a diferença entre agropecuária e agronegócio?', c:0, o:[
 ['O agronegócio inclui a cadeia antes e depois da fazenda','Correto! Ele envolve indústria de máquinas e insumos, a produção rural, o processamento, o transporte e a venda.'],
 ['O agronegócio é só a criação de gado de corte','Agronegócio é muito mais amplo: toda a cadeia produtiva ligada ao campo.'],
 ['A agropecuária inclui as fábricas, o transporte e a venda','É o contrário: a agropecuária é só o que acontece dentro da propriedade rural.'],
 ['São sinônimos e significam exatamente a mesma coisa','Algumas atividades fazem parte dos dois, mas o agronegócio é um conjunto maior.']]},

{n:'m', q:'O que foi a Revolução Verde?', c:0, o:[
 ['A industrialização da agricultura com máquinas e químicos','Isso! Fertilizantes, agrotóxicos, máquinas, correção do solo e sementes selecionadas/transgênicas.'],
 ['Um movimento para plantar árvores dentro das grandes cidades','O “verde” do nome se refere às plantações, não a árvores nas cidades.'],
 ['A volta das técnicas tradicionais, sem nenhuma máquina','Foi o contrário: a Revolução Verde trouxe mecanização e insumos químicos.'],
 ['A proibição dos agrotóxicos em todas as lavouras do país','Ela aumentou o uso de agrotóxicos, não os proibiu.']]},

{n:'m', q:'O que significa PRODUTIVIDADE na agropecuária?', c:0, o:[
 ['Quanto se produz em relação à área usada','Correto! Produzir mais em menos espaço significa maior produtividade.'],
 ['A quantidade total produzida em um ano','Essa é a produção (valor absoluto), que não considera a área.'],
 ['O número de trabalhadores de uma fazenda','Número de trabalhadores não é a definição de produtividade.'],
 ['O preço que o produto alcança no mercado','Preço é questão de mercado; produtividade é produção por área.']]},

{n:'m', q:'O que é monocultura?', c:0, o:[
 ['Plantio de um só produto em grandes áreas','Isso! Normalmente em grandes propriedades, mecanizadas, ligadas à agricultura intensiva.'],
 ['Plantio de vários produtos em pequenas áreas','Isso é a policultura, comum na agricultura familiar.'],
 ['Criação de um só tipo de animal no pasto','Monocultura é um termo da agricultura (plantio), não da pecuária.'],
 ['Plantio feito por uma única família na terra','Ser feito por uma família não define monocultura; o que define é ter um só produto.']]},

{n:'m', q:'O que é um latifúndio?', c:0, o:[
 ['Propriedade enorme ou que não cumpre função social','Correto! Mais de 600 vezes o módulo fiscal médio do município ou que não produz nem gera empregos.'],
 ['Propriedade menor que a fração mínima','Essa é a definição de minifúndio.'],
 ['Propriedade entre 4 e 15 módulos fiscais','Essa é a média propriedade.'],
 ['Terra pública reservada aos povos indígenas do país','Isso é terra indígena, não latifúndio.']]},

{n:'m', q:'O que é a reforma agrária?', c:0, o:[
 ['Redistribuir terras que não cumprem a função social','Isso! As terras são desapropriadas (com indenização) e divididas entre famílias assentadas, pelo Incra.'],
 ['Dar ainda mais terras aos grandes produtores do agronegócio','A reforma agrária busca o contrário: diminuir a concentração de terras.'],
 ['Proibir a venda de terras para estrangeiros','Esse não é o objetivo da reforma agrária.'],
 ['Trocar a pecuária pela agricultura orgânica','A reforma agrária trata da divisão das terras, não do tipo de cultivo.']]},

{n:'m', q:'O que é grilagem?', c:0, o:[
 ['Tomar terras usando documentos falsos','Correto! Os falsificadores guardavam papéis com grilos para deixá-los amarelados e parecerem antigos.'],
 ['Usar insetos para controlar as pragas','Controle biológico de pragas não tem relação com grilagem.'],
 ['Criar grilos para alimentar os animais','O nome vem dos grilos, mas a prática é falsificar documentos de terras.'],
 ['Plantar árvores em áreas já degradadas','Isso seria reflorestamento, uma prática positiva.']]},

{n:'d', q:'O que significa dizer que a terra no Brasil é CONCENTRADA?', c:0, o:[
 ['Poucas propriedades grandes ocupam a maior área','Isso! Os estabelecimentos de 1.000 ha ou mais são poucos, mas ocupam a maior parte da área.'],
 ['Muitas propriedades grandes ocupam pouca área','É o contrário: as grandes são poucas e ocupam muita área.'],
 ['Todas as propriedades têm mais ou menos o mesmo tamanho','Se fosse assim, a terra seria bem distribuída, não concentrada.'],
 ['Os pequenos produtores ocupam a maior área','A agricultura familiar tem mais estabelecimentos, mas ocupa a menor parte da área.']]},

{n:'d', q:'Por que a modernização do campo NÃO resolveu o problema da fome?', c:0, o:[
 ['Não baixou os preços nem distribuiu a renda','Correto! A produção cresceu, mas a renda e a terra ficaram ainda mais concentradas.'],
 ['Porque fez diminuir a produção total de grãos','A produção aumentou muito com a modernização.'],
 ['Porque só produziu alimentos para o mercado interno','Grande parte da produção modernizada vai para a exportação.'],
 ['Porque proibiu as exportações de alimentos','O Brasil continuou (e cresceu) como grande exportador.']]},

{n:'d', q:'Como a rotação de culturas reduz a degradação do solo?', c:0, o:[
 ['Alterna os cultivos e deixa uma parte em descanso','Isso! A parte em pousio recupera a fertilidade, e há menos perda de nutrientes e menos químicos.'],
 ['Usa mais agrotóxicos e adubos químicos para proteger o solo','A rotação diminui a necessidade de produtos químicos.'],
 ['Planta sempre o mesmo produto na mesma área','Isso é monocultura contínua, que desgasta o solo.'],
 ['Retira toda a vegetação para o solo respirar','Deixar o solo exposto aumenta a degradação. No pousio ele fica coberto.']]},

{n:'d', q:'O que é a desertificação?', c:0, o:[
 ['Empobrecimento extremo do solo por seca e mau uso','Correto! Secas longas, retirada da vegetação, compactação e salinização. Ex.: semiárido nordestino.'],
 ['Formação natural de dunas no litoral do país','Dunas no litoral são naturais e não são o processo de desertificação.'],
 ['Avanço da areia do mar sobre as plantações','A desertificação não é causada pelo mar, e sim pelo empobrecimento do solo.'],
 ['Aumento das chuvas que lavam o solo fértil','A desertificação está ligada a secas prolongadas, não a excesso de chuva.']]},

{n:'d', q:'Por que os alimentos orgânicos costumam ser mais caros?', c:0, o:[
 ['Usam muita mão de obra e têm baixa produtividade','Isso! Sem agrotóxicos, o cuidado é manual e se produz menos por área.'],
 ['Usam agrotóxicos importados, que custam muito caro','Orgânicos não usam agrotóxicos.'],
 ['São produzidos só em grandes monoculturas','A agricultura orgânica não é típica de monoculturas mecanizadas.'],
 ['São proibidos de vender em supermercados','Não existe essa proibição.']]},

{n:'d', q:'A agropecuária é a menor parte do PIB do Brasil. Por que, mesmo assim, o país é chamado de agroexportador?', c:0, o:[
 ['O agro responde por quase metade das exportações','Correto! Cerca de 49% do valor exportado vem do agronegócio (soja, carne, café, açúcar…).'],
 ['A agropecuária é a maior parte do PIB do Brasil','O enunciado já diz: o setor primário é a menor parte do PIB.'],
 ['O Brasil não importa nenhum produto agrícola','O Brasil também importa produtos e insumos agrícolas, como fertilizantes.'],
 ['Quase toda a população ainda mora no campo','Hoje cerca de 87% da população vive em cidades.']]}
],

/* ========== PARTE 2 – INDUSTRIALIZAÇÃO ========== */
p2: [
{n:'f', q:'O que caracteriza a MAQUINOFATURA?', c:0, o:[
 ['Produção em fábricas com o uso de máquinas','Isso! Surgiu com a Revolução Industrial e permite produzir em grande quantidade.'],
 ['O artesão faz o produto inteiro sozinho','Isso descreve o artesanato.'],
 ['Trabalho manual dividido em etapas em oficinas','Isso descreve a manufatura, que ainda usa ferramentas manuais.'],
 ['Produção agrícola em pequenas propriedades','Isso é agricultura, não uma forma de produção industrial.']]},

{n:'f', q:'Como funciona o ARTESANATO?', c:0, o:[
 ['O artesão faz todas as etapas do produto','Correto! Com ferramentas simples, do começo ao fim, e é dono dos seus instrumentos.'],
 ['Operários controlam máquinas a vapor','Isso é a maquinofatura (indústria).'],
 ['Cada trabalhador faz uma só etapa do produto','A divisão em etapas é característica da manufatura.'],
 ['Robôs montam os produtos em grande série','Robótica é da 3ª e 4ª Revolução Industrial.']]},

{n:'f', q:'Onde e quando começou a Revolução Industrial?', c:0, o:[
 ['Inglaterra, século XVIII','Isso! O marco é a máquina a vapor de James Watt usada na produção de tecidos.'],
 ['Brasil, século XX','O Brasil se industrializou só no século XX, bem depois (industrialização tardia).'],
 ['Estados Unidos, século XVI','Os EUA se industrializaram depois da Inglaterra, no século XIX.'],
 ['Japão, século XIX','O Japão se industrializou mais tarde que a Inglaterra.']]},

{n:'f', q:'Qual é um exemplo de bens de consumo NÃO duráveis?', c:0, o:[
 ['Alimentos e bebidas','Correto! São consumidos em pouco tempo, assim como remédios.'],
 ['Geladeiras e fogões','São bens de consumo duráveis: usados por muito tempo.'],
 ['Aço e petróleo refinado','São produtos da indústria de base, usados por outras indústrias.'],
 ['Máquinas e peças industriais','São produzidos pela indústria de bens intermediários (bens de capital).']]},

{n:'f', q:'Qual atividade é um exemplo de indústria EXTRATIVA?', c:0, o:[
 ['Mineração','Isso! A indústria extrativa retira recursos da natureza com máquinas.'],
 ['Construção de pontes','Pontes fazem parte da indústria de construção (construção pesada).'],
 ['Fabricação de carros','É indústria de transformação (bens de consumo duráveis).'],
 ['Venda de roupas','Venda é comércio, setor terciário.']]},

{n:'f', q:'O que são fatores locacionais da indústria?', c:0, o:[
 ['Elementos que atraem indústrias para um lugar','Correto! Transporte, mão de obra, energia, mercado, capital, matéria-prima, incentivos fiscais…'],
 ['Impostos cobrados das indústrias poluentes','Impostos podem influenciar, mas fatores locacionais são todos os atrativos de um lugar.'],
 ['Mapas que mostram onde ficam as fábricas','Mapas mostram a localização, mas não são os fatores que a explicam.'],
 ['Leis que proíbem indústrias nas cidades','Fatores locacionais atraem indústrias, não as proíbem.']]},

{n:'f', q:'Qual é o estado mais industrializado do Brasil?', c:0, o:[
 ['São Paulo','Isso! Mesmo com a desconcentração, SP tem cerca de 1/4 do PIB industrial do país.'],
 ['Amazonas','O Amazonas tem a Zona Franca de Manaus, mas não é o mais industrializado.'],
 ['Bahia','A Bahia ganhou indústrias (ex.: Camaçari), mas fica bem atrás de SP.'],
 ['Rio Grande do Sul','O RS é industrializado, mas SP continua na liderança.']]},

{n:'m', q:'O que faz a indústria de BASE?', c:0, o:[
 ['Transforma matéria-prima para outras indústrias','Correto! Ex.: siderúrgicas (aço) e petroquímicas (refinam petróleo). Também chamada de bens de produção.'],
 ['Produz bens para o consumidor final','Isso é a indústria de bens de consumo (indústria leve).'],
 ['Fabrica máquinas, equipamentos e peças industriais','Isso é a indústria de bens intermediários (bens de capital).'],
 ['Constrói casas, prédios e pontes','Isso é a indústria de construção.']]},

{n:'m', q:'O que a MANUFATURA tem de diferente do artesanato?', c:0, o:[
 ['A divisão do trabalho em etapas','Isso! Cada trabalhador faz uma parte, mas ainda com ferramentas manuais.'],
 ['O uso de máquinas a vapor nas fábricas','Máquinas a vapor surgem na maquinofatura, depois da manufatura.'],
 ['Um só trabalhador faz o produto inteiro','Isso é o artesanato.'],
 ['Produz apenas para a família do artesão','A manufatura produz para vender, com trabalhadores assalariados.']]},

{n:'m', q:'O que é a “guerra fiscal”?', c:0, o:[
 ['Disputa por indústrias com incentivos fiscais','Correto! Estados e cidades oferecem descontos de impostos para atrair fábricas.'],
 ['Conflito armado entre estados vizinhos','Não é uma guerra de verdade; é uma disputa econômica.'],
 ['Aumento de impostos para expulsar fábricas','É o contrário: diminuem impostos para atrair fábricas.'],
 ['Disputa entre empresas por mais clientes','Concorrência entre empresas é outra coisa; a guerra fiscal é entre governos.']]},

{n:'m', q:'O que foi a industrialização por substituição de importações?', c:0, o:[
 ['Produzir aqui o que antes era importado','Isso! Após a crise de 1929, o Brasil passou a fabricar produtos que antes comprava de fora.'],
 ['Exportar todos os produtos industriais','O objetivo era abastecer o mercado interno, não exportar tudo.'],
 ['Trocar o café por máquinas estrangeiras','A ideia era justamente parar de depender de produtos importados.'],
 ['Proibir a entrada de empresas estrangeiras','Não houve essa proibição; JK até atraiu empresas estrangeiras depois.']]},

{n:'m', q:'Por que São Paulo concentrou as primeiras indústrias do Brasil?', c:0, o:[
 ['Tinha o capital do café e ferrovias até Santos','Correto! Os cafeicultores tinham dinheiro para investir e as ferrovias levavam produtos ao porto.'],
 ['Era a capital do Brasil naquela época','A capital era o Rio de Janeiro (depois Brasília), não São Paulo.'],
 ['Tinha as maiores reservas de petróleo','O petróleo do pré-sal só foi descoberto nos anos 2000.'],
 ['Era a região com menos moradores do país','SP já era muito povoado, o que era um mercado e uma mão de obra importantes.']]},

{n:'m', q:'O que é produzido principalmente na Zona Franca de Manaus?', c:0, o:[
 ['Eletroeletrônicos e motocicletas','Isso! Principalmente bens de consumo duráveis, muitos montados com peças importadas.'],
 ['Aço e produtos petroquímicos','Esses são produtos de indústrias de base, como siderúrgicas e refinarias.'],
 ['Tecidos e alimentos industrializados','A Zona Franca não se destaca por indústrias têxteis e alimentícias.'],
 ['Navios e aviões comerciais','Aviões são destaque em São José dos Campos (SP), não em Manaus.']]},

{n:'m', q:'Quais empresas foram criadas nos governos de Getúlio Vargas?', c:0, o:[
 ['CSN, Petrobras e Vale do Rio Doce','Correto! Indústrias de base que impulsionaram o Sudeste (aço, petróleo e mineração).'],
 ['Volkswagen, Ford e General Motors','São montadoras estrangeiras que chegaram com mais força no governo JK.'],
 ['Embrapa, Incra e Porto Digital','Embrapa (1973) e Porto Digital (2000) são bem posteriores a Vargas.'],
 ['Unicamp, ITA e Zona Franca','A Zona Franca foi criada por JK (1957); não são empresas de Vargas.']]},

{n:'d', q:'Por que o Brasil é considerado um país de industrialização TARDIA?', c:0, o:[
 ['Começou de fato só no século XX, nos anos 1930','Isso! Países da Europa, os EUA e o Japão se industrializaram nos séculos XVIII e XIX.'],
 ['Ainda não tem nenhuma indústria de base','O Brasil tem indústrias de base, como a CSN e a Petrobras.'],
 ['Começou antes da Inglaterra, mas depois parou de crescer','A Revolução Industrial começou na Inglaterra, muito antes do Brasil.'],
 ['Só se industrializou depois do ano 2000','Nos anos 1970 o Brasil já era considerado um país industrializado.']]},

{n:'d', q:'Quais motivos levaram indústrias a saírem de São Paulo para outros estados?', c:0, o:[
 ['Custos altos em SP e incentivos em outros estados','Correto! Terrenos caros, impostos, congestionamento e violência, somados à guerra fiscal.'],
 ['Falta de mercado consumidor em São Paulo','SP continua sendo o maior mercado consumidor do país.'],
 ['Uma lei federal que proibiu novas fábricas no Sudeste','Não existe essa lei; a saída foi por custos e incentivos.'],
 ['O fim das rodovias que ligavam SP ao país','As rodovias continuam existindo e até se ampliaram.']]},

{n:'d', q:'Minério de ferro → aço → peças de motor → carro. Que sequência de indústrias de transformação aparece aqui?', c:0, o:[
 ['Base, bens intermediários e bens de consumo','Isso! Siderúrgica (aço) → metalúrgica (peças) → montadora (carro para o consumidor).'],
 ['Bens de consumo, base e bens intermediários','A sequência começa na indústria de base, não na de bens de consumo.'],
 ['Bens intermediários, bens de consumo e base','A indústria de base vem primeiro, transformando a matéria-prima.'],
 ['Construção, base e bens de consumo','A indústria de construção não participa desse caminho do carro.']]},

{n:'d', q:'Com qual objetivo principal a Zona Franca de Manaus foi criada?', c:0, o:[
 ['Desenvolver e povoar a Região Norte','Correto! Os incentivos atraíram empresas para a Amazônia, longe dos centros consumidores.'],
 ['Produzir aço para as outras indústrias','A Zona Franca produz principalmente bens de consumo duráveis, não aço.'],
 ['Abrigar a nova capital do país','A nova capital foi Brasília, no Centro-Oeste.'],
 ['Proteger a floresta da industrialização','Ela foi criada justamente para levar indústrias para a região.']]},

{n:'d', q:'No governo JK (anos 1950), qual meio de transporte foi priorizado e por quê?', c:0, o:[
 ['Rodovias, para estimular a indústria de carros','Isso! Além de ligar as regiões, incentivava as montadoras que se instalavam no país.'],
 ['Ferrovias, para escoar o café até os portos','As ferrovias foram importantes antes, no tempo do café; JK priorizou as rodovias.'],
 ['Hidrovias, para levar produtos à Amazônia','As hidrovias não foram a prioridade de JK.'],
 ['Aeroportos, para exportar produtos de luxo','O foco foi o transporte rodoviário e a indústria automobilística.']]},

{n:'d', q:'Qual é uma característica dos tecnopolos?', c:0, o:[
 ['Pesquisa avançada e mão de obra muito qualificada','Correto! Reúnem empresas de tecnologia, universidades e centros de pesquisa (ex.: Campinas, Porto Digital).'],
 ['Mão de obra barata e com pouca qualificação','É o contrário: tecnopolos dependem de trabalhadores altamente qualificados.'],
 ['Produção feita totalmente por robôs, sem pessoas','Tecnopolos precisam de muitos pesquisadores e profissionais especializados.'],
 ['Dependência de matéria-prima tirada no próprio local','O principal “recurso” dos tecnopolos é o conhecimento, não a matéria-prima.']]}
],

/* ========== PARTE 3 – URBANIZAÇÃO ========== */
p3: [
{n:'f', q:'O que é urbanização?', c:0, o:[
 ['Crescimento da população urbana e das cidades','Isso! A população urbana cresce em relação à rural.'],
 ['Crescimento da população rural e do campo','É o contrário: na urbanização cresce a população das cidades.'],
 ['Construção de rodovias entre os estados','Rodovias ligam cidades, mas não definem urbanização.'],
 ['Saída das indústrias das cidades grandes','Isso é desconcentração industrial, outro processo.']]},

{n:'f', q:'Segundo o Censo 2022, qual parte dos brasileiros vive em cidades?', c:0, o:[
 ['Cerca de 87%','Correto! 87,41% da população brasileira é urbana.'],
 ['Cerca de 50%','Isso era mais ou menos a situação nos anos 1960/1970, quando a população urbana passou a rural.'],
 ['Cerca de 30%','Esse número é muito baixo; o Brasil hoje é bem urbanizado.'],
 ['Cerca de 99%','Ainda existe uma parte da população vivendo no campo (cerca de 13%).']]},

{n:'f', q:'Qual cidade é a “grande metrópole nacional” do Brasil?', c:0, o:[
 ['São Paulo','Isso! É a cidade de maior influência do país e também uma metrópole global.'],
 ['Brasília','Brasília é metrópole nacional, junto com o Rio de Janeiro, mas não a “grande metrópole nacional”.'],
 ['Salvador','Salvador é uma metrópole, com influência regional.'],
 ['Belo Horizonte','Belo Horizonte é uma metrópole, mas não a grande metrópole nacional.']]},

{n:'f', q:'O que é conurbação?', c:0, o:[
 ['Cidades que crescem até unir suas áreas urbanas','Correto! Ex.: Petrolina (PE) e Juazeiro (BA), ligadas por ponte.'],
 ['Cidade que perde moradores para o campo','Isso seria o contrário da urbanização, não conurbação.'],
 ['Mudança da capital de um estado','Mudar a capital não tem a ver com conurbação.'],
 ['Bairro planejado construído no centro de uma cidade','Bairro planejado não é a união de duas cidades.']]},

{n:'f', q:'O que é migração pendular?', c:0, o:[
 ['Ir e voltar todo dia entre cidades','Isso! Ex.: morar numa cidade e trabalhar ou estudar em outra.'],
 ['Mudar de vez do campo para a cidade','Mudança definitiva do campo para a cidade é êxodo rural.'],
 ['Mudar para outro país para sempre','Isso é emigração, não migração pendular.'],
 ['Viajar nas férias para a praia','Viagem de férias é turismo, não migração pendular.']]},

{n:'f', q:'Qual megalópole está em formação no Brasil?', c:0, o:[
 ['Rio de Janeiro–São Paulo','Correto! O eixo Rio–SP é uma megalópole em formação; o Brasil ainda não tem uma completa.'],
 ['Manaus–Belém','Manaus e Belém são distantes e não estão se unindo.'],
 ['Recife–Salvador','Recife e Salvador são metrópoles, mas não formam uma megalópole.'],
 ['Porto Alegre–Florianópolis–Curitiba','Essas cidades não estão unidas numa área urbana contínua.']]},

{n:'f', q:'Qual é a diferença entre município e cidade?', c:0, o:[
 ['A cidade é a área urbana do município','Isso! O município tem área urbana (cidade) e, em geral, área rural.'],
 ['O município é só a área urbana','O município inclui também a zona rural (quando existe).'],
 ['Cidade e município são exatamente a mesma coisa','No dia a dia usamos como sinônimos, mas na Geografia são diferentes.'],
 ['O município é maior que um estado','Os estados são formados por vários municípios.']]},

{n:'m', q:'O que é rede urbana?', c:0, o:[
 ['Relação de atração e influência entre cidades','Correto! Cidades maiores influenciam as menores na economia, na política e na cultura.'],
 ['Conjunto de ruas e avenidas de uma cidade','Isso é o sistema viário, não a rede urbana.'],
 ['Rede de esgoto e água tratada da cidade','Isso é saneamento básico.'],
 ['Lista das cidades mais populosas do país','Um ranking de população não mostra a relação entre as cidades.']]},

{n:'m', q:'O que é uma região metropolitana?', c:0, o:[
 ['Municípios ligados a uma cidade central','Isso! Vizinhos, integrados, com serviços e infraestrutura compartilhados e um conselho comum.'],
 ['Duas metrópoles unidas numa só área','Isso é megalópole.'],
 ['Uma cidade isolada com muitos habitantes','A região metropolitana envolve vários municípios integrados.'],
 ['A área rural em volta de uma capital','Ela é formada por municípios urbanizados e interligados, não pela área rural.']]},

{n:'m', q:'Qual sequência da hierarquia urbana está na ordem da MAIOR para a MENOR influência?', c:0, o:[
 ['Metrópole, capital regional, centro sub-regional','Correto! Depois vêm o centro de zona e o centro local.'],
 ['Capital regional, metrópole, centro local','A metrópole tem mais influência que a capital regional.'],
 ['Centro local, centro de zona, metrópole','Essa ordem está da menor para a maior.'],
 ['Centro de zona, metrópole nacional, centro sub-regional','A ordem está misturada.']]},

{n:'m', q:'Qual é a área de influência de um CENTRO LOCAL?', c:0, o:[
 ['Apenas o próprio município','Isso! Ele atende só os moradores locais.'],
 ['Todo o país e até o mundo','Isso é a influência das metrópoles (globais).'],
 ['A região e o estado','Essa é a influência das capitais regionais.'],
 ['Os municípios vizinhos ao redor','Isso é típico dos centros sub-regionais.']]},

{n:'m', q:'Quais processos causaram o êxodo rural no Brasil?', c:0, o:[
 ['Industrialização e mecanização do campo','Correto! Havia empregos nas cidades e menos trabalho no campo com as máquinas.'],
 ['Falta total de terras férteis no Brasil','O Brasil tem terras férteis e a tecnologia corrige muitos solos.'],
 ['Proibição da agricultura familiar por lei','A agricultura familiar nunca foi proibida.'],
 ['Excesso de empregos sobrando no campo','Foi o contrário: as máquinas diminuíram os empregos no campo.']]},

{n:'m', q:'Quem são os boias-frias?', c:0, o:[
 ['Moram na cidade e trabalham no campo','Isso! Vão temporariamente trabalhar nas lavouras – um tipo de migração pendular.'],
 ['Moram no campo e estudam na cidade','Esse não é o significado de boia-fria.'],
 ['Trabalham à noite nas fábricas da cidade','Boias-frias trabalham nas lavouras, não nas fábricas.'],
 ['Vendem comida fria nas ruas das cidades','O nome vem da marmita (“boia”) fria, mas eles são trabalhadores rurais temporários.']]},

{n:'m', q:'Petrolina (PE) e Juazeiro (BA) são separadas por um rio e ligadas por uma ponte. Que fenômeno é esse?', c:0, o:[
 ['Conurbação entre as duas cidades','Correto! As áreas urbanas se uniram, com trocas diárias de pessoas e serviços.'],
 ['Megalópole entre dois estados','Megalópole é a união de metrópoles; essas cidades não são metrópoles.'],
 ['Cidades planejadas como Brasília','A ligação delas não tem a ver com planejamento como o de Brasília.'],
 ['Metrópoles globais do Nordeste','As metrópoles globais do Brasil são São Paulo e Rio de Janeiro.']]},

{n:'d', q:'Qual é a diferença entre conurbação e região metropolitana?', c:0, o:[
 ['Conurbação é física; a região é oficial e administrada','Isso! A conurbação é a união das manchas urbanas; a região metropolitana é reconhecida por lei e tem conselho.'],
 ['Conurbação é oficial; a região é só uma união física das cidades','Está invertido: quem é criada oficialmente é a região metropolitana.'],
 ['As duas só existem fora do Brasil','O Brasil tem conurbações e 74 regiões metropolitanas (2017).'],
 ['A região metropolitana exige duas metrópoles','Juntar duas metrópoles forma uma megalópole.']]},

{n:'d', q:'Por que o Brasil ainda NÃO tem uma megalópole?', c:0, o:[
 ['Suas metrópoles ainda não estão totalmente unidas','Correto! O eixo Rio–SP está em formação, mas ainda não forma uma área urbana contínua.'],
 ['Porque o Brasil não tem nenhuma metrópole','O Brasil tem várias metrópoles, como SP, Rio, BH e Recife.'],
 ['Porque megalópoles são proibidas por lei','Não existe lei proibindo megalópoles.'],
 ['Porque as cidades brasileiras pararam de crescer','As manchas urbanas continuam crescendo.']]},

{n:'d', q:'O que aconteceu com Brasília depois de construída?', c:0, o:[
 ['Cresceu além do previsto e afastou os pobres','Isso! Feita para ~500 mil pessoas, tinha ~2,8 milhões em 2022, com a periferia segregada.'],
 ['Continua com cerca de 500 mil moradores','Esse era o número planejado; hoje são cerca de 2,8 milhões.'],
 ['Foi construída de forma totalmente espontânea','Brasília é o exemplo clássico de cidade planejada (Plano Piloto).'],
 ['Tornou-se a única megalópole do país inteiro','O Brasil ainda não tem megalópoles.']]},

{n:'d', q:'O que é uma RIDE?', c:0, o:[
 ['Região metropolitana que abrange mais de um estado','Correto! Região Integrada de Desenvolvimento: envolve duas ou mais unidades da Federação.'],
 ['Região formada apenas por municípios rurais','A RIDE é um tipo de região metropolitana, urbana e integrada.'],
 ['Município que não possui nenhuma área urbana','Isso não tem relação com RIDE.'],
 ['Conjunto formado pelas metrópoles globais do Brasil','Metrópoles globais são SP e Rio; isso não é RIDE.']]},

{n:'d', q:'Qual é a relação entre industrialização e urbanização no Brasil?', c:0, o:[
 ['Indústrias atraem moradores e buscam as cidades','Isso! Fábricas procuram a infraestrutura urbana e, ao mesmo tempo, atraem trabalhadores, fazendo as cidades crescerem.'],
 ['Indústrias só se instalam bem longe das cidades grandes','As indústrias buscam a infraestrutura, a mão de obra e o mercado das cidades.'],
 ['A urbanização acabou com as indústrias','Elas cresceram juntas; não houve fim das indústrias.'],
 ['Não existe relação entre os dois processos','São processos diferentes, mas muito ligados.']]},

{n:'d', q:'Na regionalização “os quatro Brasis” (Milton Santos e Maria Laura Silveira), o que forma a Região Concentrada?', c:0, o:[
 ['Sudeste e Sul','Correto! É a área com maior industrialização, urbanização, modernização e serviços.'],
 ['Norte e Nordeste','O Norte faz parte da Amazônia e o Nordeste é uma região própria nessa divisão.'],
 ['Centro-Oeste e Norte','Centro-Oeste e Amazônia são regiões separadas nessa divisão.'],
 ['Nordeste e Sudeste','O Nordeste é uma região própria; a Concentrada junta Sudeste e Sul.']]}
]
};
