/* Questões de Português (Gramática) – 3º trimestre.
   Formato: { n:'f'|'m'|'d', q:'pergunta', o:[[alternativa, explicação], ...], c:índice_correta }
   As alternativas são embaralhadas na tela. */
window.QUIZ = {

/* ========== PARTE 1 – COESÃO REFERENCIAL ========== */
p1: [
{n:'f', q:'Para que serve a coesão referencial?', c:0, o:[
 ['Retomar termos e evitar repetições','Isso! Ela liga as partes do texto retomando referentes sem repetir palavras.'],
 ['Rimar as palavras no fim dos versos','Rima é recurso sonoro de poemas, não coesão referencial.'],
 ['Separar o texto em vários parágrafos','Dividir em parágrafos é organização visual, não retomada de termos.'],
 ['Corrigir os erros de ortografia','Ortografia é a escrita correta das palavras, outro assunto.']]},

{n:'f', q:'“A filha saiu em busca do irmão. Ela estava apavorada.” A palavra “Ela” retoma:', c:0, o:[
 ['A filha','Correto! É um pronome pessoal do caso reto retomando “a filha”.'],
 ['O irmão','“Ela” é feminino; “o irmão” seria retomado por “ele”.'],
 ['O jardim','O jardim não aparece na frase.'],
 ['Os pais','“Ela” é singular e feminino; não pode retomar “os pais”.']]},

{n:'f', q:'Qual destas palavras é um pronome POSSESSIVO?', c:0, o:[
 ['Seus','Isso! Indica posse: “seus pais” = os pais dela.'],
 ['Ela','“Ela” é pronome pessoal do caso reto.'],
 ['Isso','“Isso” é pronome demonstrativo.'],
 ['Que','“Que” costuma ser pronome relativo.']]},

{n:'f', q:'“Os pais, que tinham avisado a filha, ficariam furiosos.” Que tipo de pronome é o “que”?', c:0, o:[
 ['Relativo','Correto! Ele se refere a “os pais” e liga as duas partes da frase.'],
 ['Possessivo','Possessivos indicam posse (meu, seu…).'],
 ['Demonstrativo','Demonstrativos são este, esse, aquele, isso…'],
 ['Pessoal do caso reto','Os pessoais do caso reto são eu, tu, ele, nós, vós, eles.']]},

{n:'f', q:'O que é a elipse?', c:0, o:[
 ['Omitir um termo que se entende pelo contexto','Isso! Ex.: “Cinderela dançou e, à meia-noite, [ela] fugiu.”'],
 ['Repetir a mesma palavra várias vezes no texto','Repetir é justamente o que a elipse evita.'],
 ['Trocar uma palavra pelo seu oposto','Isso lembra a antítese, uma figura de linguagem.'],
 ['Usar um exagero para dar ênfase','Exagero é hipérbole.']]},

{n:'f', q:'Qual palavra é um HIPERÔNIMO de “rosa”?', c:0, o:[
 ['Flor','Correto! “Flor” tem sentido mais amplo e inclui rosa, violeta, lírio…'],
 ['Violeta','Violeta é outro hipônimo de flor, no mesmo nível que rosa.'],
 ['Pétala','Pétala é uma parte da rosa, não uma palavra mais geral.'],
 ['Espinho','Espinho é uma parte da planta, não um termo mais geral.']]},

{n:'f', q:'“Cinderela perdeu seu sapatinho. A jovem deixou para trás o ___ de cristal.” Qual sinônimo completa a retomada de “sapatinho”?', c:0, o:[
 ['calçado','Isso! “Calçado” retoma “sapatinho” sem repetir a palavra.'],
 ['castelo','Castelo não tem o mesmo sentido de sapatinho.'],
 ['vestido','Vestido é outra peça de roupa, não retoma o sapatinho.'],
 ['baile','Baile é o evento, não o objeto perdido.']]},

{n:'m', q:'“O irmão havia sumido. Ela precisava encontrá-lo.” O que é o “lo”?', c:0, o:[
 ['Pronome oblíquo que retoma “o irmão”','Correto! “Lo” é o pronome oblíquo “o” ligado ao verbo.'],
 ['Pronome reto que retoma “ela”','“Ela” é quem procura; o “lo” é quem é procurado.'],
 ['Pronome possessivo ligado a “irmão”','Possessivos indicam posse, como “seu irmão”.'],
 ['Artigo definido do verbo encontrar','Verbos não recebem artigo; “lo” é pronome.']]},

{n:'m', q:'“O conto tem vários elementos mágicos. Isso deixa a história interessante.” O “isso” retoma:', c:0, o:[
 ['A ideia de o conto ter elementos mágicos','Isso! O demonstrativo retoma o fato inteiro da frase anterior.'],
 ['Apenas a palavra “conto”','O que deixa a história interessante é ter elementos mágicos, não só o conto.'],
 ['Apenas a palavra “história”','“História” vem depois; o “isso” aponta para o que já foi dito.'],
 ['Um elemento que ainda vai aparecer mais adiante','O “isso” retoma algo já dito, não antecipa.']]},

{n:'m', q:'“A dona do precioso calçado era Cinderela.” Que traço de Cinderela essa expressão nominal destaca?', c:0, o:[
 ['Ela era a dona do sapatinho perdido','Correto! A expressão nominal retoma Cinderela realçando a relação com o sapatinho.'],
 ['Ela dançou a noite toda no baile','A expressão fala do calçado, não da dança.'],
 ['Ela era uma princesa muito rica','Nada na expressão fala de riqueza.'],
 ['Ela fugiu do castelo à meia-noite','A fuga não aparece nessa expressão.']]},

{n:'m', q:'Complete: “Leia com atenção ___ frase que vou escrever agora.”', c:0, o:[
 ['esta','Isso! “Este/esta” antecipa algo que ainda vai ser dito.'],
 ['essa','“Essa” retoma algo que acabou de ser dito, não algo que virá.'],
 ['aquela','“Aquela” indica algo distante, já mencionado antes.'],
 ['isso','“Isso” não acompanha substantivo e retoma algo já dito.']]},

{n:'m', q:'Qual palavra é um HIPÔNIMO de “doença”?', c:0, o:[
 ['Dengue','Correto! A dengue é um tipo de doença, um termo mais específico.'],
 ['Saúde','Saúde é o oposto de doença, não um tipo dela.'],
 ['Hospital','Hospital é um lugar, não um tipo de doença.'],
 ['Remédio','Remédio trata doenças, não é um tipo de doença.']]},

{n:'m', q:'“Li um conto maravilhoso.” Qual expressão nominal INDEFINIDA retoma “conto”?', c:0, o:[
 ['Uma história russa','Isso! Começa com o artigo indefinido “uma”.'],
 ['Essa história russa','Começa com pronome demonstrativo, então é definida.'],
 ['A história russa','Começa com artigo definido “a”, então é definida.'],
 ['Aquela história russa','“Aquela” é demonstrativo; a expressão é definida.']]},

{n:'m', q:'“Ela jogava a bola para o alto e corria para pegá-la.” Onde há elipse?', c:0, o:[
 ['O sujeito “ela” antes de “corria”','Correto! Fica subentendido: “e [ela] corria”.'],
 ['A palavra “bola” depois de “alto”','Não falta “bola” ali; a frase já está completa.'],
 ['O verbo “jogava” depois do “e”','Depois do “e” o verbo é “corria”, que está escrito.'],
 ['O pronome “la” em “pegá-la”','O “la” está escrito; é retomada por pronome, não elipse.']]},

{n:'d', q:'“Os conceitos explicados também estavam em outros textos.” O pronome “outros” é:', c:0, o:[
 ['Pronome adjetivo, pois acompanha “textos”','Isso! Ele modifica o substantivo “textos”, sem substituí-lo.'],
 ['Pronome substantivo, pois substitui “textos”','A palavra “textos” aparece; o pronome está junto dela.'],
 ['Pronome relativo, pois liga duas orações','Relativos são que, o qual, cujo, onde…'],
 ['Pronome pessoal, pois indica uma pessoa','“Outros” é indefinido e acompanha um substantivo.']]},

{n:'d', q:'Qual frase usa o demonstrativo para ANTECIPAR uma informação?', c:0, o:[
 ['Minha dúvida é esta: como usar a elipse?','Correto! “Esta” anuncia a dúvida que vem depois dos dois-pontos.'],
 ['Como usar a elipse? Essa é a minha dúvida.','Aqui “essa” retoma a pergunta já feita, não antecipa.'],
 ['Minha dúvida é essa: como usar a elipse?','Para anunciar o que vem depois, o indicado é “esta”.'],
 ['Como usar a elipse? Aquela foi a dúvida.','“Aquela” retoma algo mais distante, não antecipa.']]},

{n:'d', q:'“A princesinha achava que um bicho tão feio e bobo não cobraria a promessa.” A expressão que retoma o sapo é:', c:0, o:[
 ['Indefinida, porque começa com “um”','Isso! “Um bicho tão feio e bobo” usa artigo indefinido.'],
 ['Definida, porque começa com “um”','“Um” é artigo indefinido; definida começaria com “o” ou com demonstrativo.'],
 ['Definida, por causa da palavra “tão”','“Tão” intensifica, mas não define o tipo da expressão.'],
 ['Uma elipse, pois o sapo não aparece','O sapo é retomado por uma expressão escrita, então não é elipse.']]},

{n:'d', q:'Em qual frase há elipse do sujeito?', c:0, o:[
 ['Cinderela dançou e, depois, fugiu do castelo.','Correto! O sujeito de “fugiu” (Cinderela) fica subentendido.'],
 ['Cinderela dançou e ela fugiu do castelo.','Aqui o sujeito é retomado pelo pronome “ela”.'],
 ['Cinderela dançou. A jovem fugiu do castelo.','Aqui há expressão nominal (“a jovem”), não elipse.'],
 ['Cinderela dançou. Cinderela fugiu do castelo.','Aqui o nome é repetido, sem elipse.']]},

{n:'d', q:'“Campinas mantém o alerta para a dengue e mapeia os riscos da doença.” A palavra “doença” retoma “dengue” como:', c:0, o:[
 ['Hiperônimo','Isso! “Doença” é mais geral e inclui a dengue.'],
 ['Hipônimo','Hipônimo seria o termo mais específico (a própria dengue).'],
 ['Elipse','Na elipse o termo some; aqui ele é retomado por outra palavra.'],
 ['Pronome relativo','“Doença” é um substantivo, não um pronome.']]},

{n:'d', q:'Qual versão tem a melhor coesão referencial (sem repetição e sem ambiguidade)?', c:0, o:[
 ['O sapo achou a bola. Ele a devolveu à princesa.','Correto! “Ele” retoma o sapo e “a” retoma a bola, de forma clara.'],
 ['O sapo achou a bola. O sapo devolveu a bola à princesa.','Repete “o sapo” e “a bola” sem necessidade.'],
 ['O sapo achou a bola. Ela a devolveu a ele.','Fica confuso: “ela” parece ser a bola ou a princesa.'],
 ['Achou. Devolveu. Ficou feliz com isso.','Sem os referentes, não dá para saber quem fez o quê.']]}
],

/* ========== PARTE 2 – OPERADORES ARGUMENTATIVOS ========== */
p2: [
{n:'f', q:'Qual é a função dos operadores argumentativos?', c:0, o:[
 ['Ligar e organizar as ideias do texto','Isso! Eles mostram a relação entre as ideias e garantem a coesão sequencial.'],
 ['Enfeitar o texto com palavras difíceis','A função é dar lógica, não enfeitar.'],
 ['Substituir os nomes dos personagens','Substituir nomes é papel dos pronomes (coesão referencial).'],
 ['Indicar onde termina cada frase','Quem marca o fim da frase é a pontuação.']]},

{n:'f', q:'“Fiz o pedido, mas não fui atendido.” O “mas” indica:', c:0, o:[
 ['Oposição','Correto! Mostra um contraste entre o esperado e o que aconteceu.'],
 ['Adição','Adição seria “e”, “além disso”.'],
 ['Conclusão','Conclusão seria “portanto”, “logo”.'],
 ['Finalidade','Finalidade seria “para que”, “a fim de”.']]},

{n:'f', q:'“Reclamei porque o produto veio com defeito.” O “porque” indica:', c:0, o:[
 ['Explicação (causa)','Isso! Dá o motivo da reclamação.'],
 ['Oposição','Oposição seria “mas”, “porém”.'],
 ['Condição','Condição seria “se”, “caso”.'],
 ['Comparação entre ideias','Comparação seria “assim como”, “tão… quanto”.']]},

{n:'f', q:'Qual conectivo indica CONCLUSÃO?', c:0, o:[
 ['Portanto','Correto! Também: logo, assim, desse modo, em suma.'],
 ['Porém','“Porém” indica oposição.'],
 ['Caso','“Caso” indica condição.'],
 ['Enquanto','“Enquanto” indica tempo.']]},

{n:'f', q:'Complete: “___ não resolvam o problema, cancelarei o serviço.”', c:0, o:[
 ['Caso','Isso! “Caso” indica condição (uma hipótese).'],
 ['Porém','“Porém” indica oposição e não faz sentido no início dessa frase.'],
 ['Portanto','“Portanto” indica conclusão, não hipótese.'],
 ['Além disso','“Além disso” soma informações.']]},

{n:'f', q:'Complete: “Escrevo esta carta ___ o meu problema seja resolvido.”', c:0, o:[
 ['para que','Correto! Indica finalidade (o objetivo da carta).'],
 ['todavia','“Todavia” indica oposição.'],
 ['já que','“Já que” indica causa.'],
 ['ou seja','“Ou seja” indica esclarecimento.']]},

{n:'f', q:'Qual conectivo indica ADIÇÃO?', c:0, o:[
 ['Além disso','Isso! Também: e, também.'],
 ['Entretanto','“Entretanto” indica oposição.'],
 ['Logo','“Logo” costuma indicar conclusão (ou tempo).'],
 ['Se','“Se” indica condição.']]},

{n:'m', q:'Qual frase traz um argumento de AUTORIDADE?', c:0, o:[
 ['Segundo o Código do Consumidor, o prazo é obrigatório.','Correto! Cita uma lei para dar força ao argumento.'],
 ['O produto atrasou, mas a loja nem respondeu aos e-mails.','Esse é um argumento por oposição/contraste.'],
 ['Há problemas, como atrasos e falta de respostas.','Esse é um argumento por exemplificação.'],
 ['Foi eficiente, assim como outras lojas famosas.','Esse é um argumento por comparação.']]},

{n:'m', q:'Qual conectivo é típico do argumento por EXEMPLIFICAÇÃO?', c:0, o:[
 ['Por exemplo','Isso! Também: como, isto é.'],
 ['Todavia','“Todavia” é de oposição.'],
 ['Caso','“Caso” é de condição.'],
 ['A fim de','“A fim de” é de finalidade.']]},

{n:'m', q:'“Conforme divulgado, a doação garantiria o desconto.” O “conforme” indica:', c:0, o:[
 ['Conformidade','Correto! Mostra que a ideia está de acordo com uma fonte (a propaganda).'],
 ['Comparação','Comparação aproxima duas coisas parecidas.'],
 ['Condição','Condição é uma hipótese (se, caso).'],
 ['Oposição','Oposição mostra contraste (mas, porém).']]},

{n:'m', q:'Qual é a diferença entre coesão e coerência?', c:0, o:[
 ['Coesão liga a estrutura; coerência é o sentido','Isso! Coesão = ligações (conectivos, retomadas); coerência = ideias que fazem sentido.'],
 ['Coesão é o sentido; coerência liga a estrutura','Está invertido.'],
 ['São a mesma coisa, com nomes diferentes','São conceitos diferentes, embora andem juntos.'],
 ['Coerência só existe em textos poéticos','Todo texto precisa de coerência.']]},

{n:'m', q:'“Estudei muito, mas fui mal na prova.” Qual conectivo pode substituir “mas” sem mudar o sentido?', c:0, o:[
 ['porém','Correto! “Porém” também indica oposição.'],
 ['portanto','“Portanto” indicaria conclusão e mudaria o sentido.'],
 ['porque','“Porque” indicaria causa e mudaria o sentido.'],
 ['além disso','“Além disso” indicaria adição e mudaria o sentido.']]},

{n:'m', q:'“Não obtive retorno do atendimento; portanto, vou abrir uma reclamação.” Que tipo de argumento é esse?', c:0, o:[
 ['Causa e consequência','Isso! A falta de retorno (causa) leva à reclamação (consequência).'],
 ['Comparação','Não há comparação entre duas coisas.'],
 ['Autoridade','Não se cita especialista, lei ou instituição.'],
 ['Exemplificação com casos','Não há exemplos sendo dados.']]},

{n:'m', q:'“O produto está com defeito, ou seja, não funciona.” O “ou seja” indica:', c:0, o:[
 ['Esclarecimento','Correto! Explica melhor o que foi dito.'],
 ['Oposição','Não há contraste entre as ideias.'],
 ['Alternância entre opções','Alternância é “ou… ou”, com opções diferentes.'],
 ['Tempo','Não indica quando algo aconteceu.']]},

{n:'d', q:'“Ele não estudou, logo tirou nota baixa.” Aqui, “logo” tem sentido de:', c:0, o:[
 ['Conclusão, como “portanto”','Isso! A nota baixa é consequência de não ter estudado.'],
 ['Tempo, como “em seguida”','“Logo” pode indicar tempo, mas aqui indica conclusão.'],
 ['Oposição, como “porém”','Não há contraste entre não estudar e tirar nota baixa.'],
 ['Condição, como “se”','Não há hipótese na frase.']]},

{n:'d', q:'Complete: “A empresa garante entrega rápida; ___, o pedido demorou duas semanas.”', c:0, o:[
 ['entretanto','Correto! Há contraste entre a promessa e o que aconteceu.'],
 ['portanto','Demorar não é conclusão de garantir entrega rápida.'],
 ['por exemplo','A demora não é exemplo da entrega rápida.'],
 ['assim como','Não há comparação de semelhança entre as ideias.']]},

{n:'d', q:'Em qual frase o conectivo foi usado de forma INCOERENTE?', c:0, o:[
 ['Choveu muito, portanto o chão ficou seco.','Isso! Chão seco não é consequência lógica de muita chuva.'],
 ['Choveu muito, portanto o chão ficou molhado.','Aqui a conclusão faz sentido.'],
 ['Choveu muito, mas o jogo continuou.','A oposição faz sentido: apesar da chuva, o jogo seguiu.'],
 ['Como choveu muito, o jogo foi interrompido.','O “como” indica causa, de forma coerente.']]},

{n:'d', q:'Para que serve o argumento por oposição ou contraste?', c:0, o:[
 ['Mostrar uma contradição e reforçar a crítica','Correto! Ex.: “Prometem rapidez, mas demoram semanas.”'],
 ['Citar um especialista para dar credibilidade','Isso é argumento de autoridade.'],
 ['Dar exemplos para deixar a ideia mais clara','Isso é argumento por exemplificação.'],
 ['Aproximar o assunto de algo conhecido','Isso é argumento por comparação.']]},

{n:'d', q:'“Mereço uma mesada maior porque arrumo a cama e lavo a louça.” Qual o papel de “porque” e “e”?', c:0, o:[
 ['“Porque” explica o motivo e “e” soma argumentos','Isso! Um justifica o pedido e o outro acrescenta mais uma razão.'],
 ['“Porque” opõe ideias e “e” conclui o texto','“Porque” não indica oposição, e “e” não conclui.'],
 ['“Porque” conclui e “e” faz uma comparação','“Porque” indica causa, e “e” indica adição.'],
 ['“Porque” indica tempo e “e” indica condição na frase','Nenhum dos dois tem esses sentidos aqui.']]},

{n:'d', q:'Complete: “___ você troca o produto, ___ devolve o meu dinheiro.”', c:0, o:[
 ['Ou… ou','Correto! Indica alternância: uma opção ou outra.'],
 ['Tão… quanto','“Tão… quanto” indica comparação.'],
 ['Não só… mas também','Indica adição: as duas coisas, não uma ou outra.'],
 ['Assim… como','Indica comparação ou adição, não alternativa.']]}
],

/* ========== PARTE 3 – LINGUAGEM FIGURADA ========== */
p3: [
{n:'f', q:'Em qual frase a palavra está no sentido LITERAL (denotativo)?', c:0, o:[
 ['Antônio comeu bolo de laranja no café.','Isso! “Bolo” aqui é o alimento, como no dicionário.'],
 ['Antônio deu um bolo no amigo Leandro ontem.','Aqui “bolo” é figurado: faltar a um encontro.'],
 ['Aquele garoto é um furacão.','“Furacão” é uma metáfora para “muito agitado”.'],
 ['Morri de rir com a série.','“Morri” é um exagero (hipérbole).']]},

{n:'f', q:'“O menino corria feito um raio.” Qual é a figura?', c:0, o:[
 ['Comparação','Correto! O conectivo “feito” liga o menino ao raio.'],
 ['Metáfora','Na metáfora não há conectivo como “feito” ou “como”.'],
 ['Eufemismo','Eufemismo suaviza algo ruim.'],
 ['Antítese','Antítese junta ideias opostas.']]},

{n:'f', q:'“O vento sussurrava nas folhas das árvores.” Qual é a figura?', c:0, o:[
 ['Personificação','Isso! Sussurrar é ação humana atribuída ao vento.'],
 ['Hipérbole','Não há exagero na frase.'],
 ['Metonímia','Não há troca por relação de parte/todo ou similar.'],
 ['Ironia','Não se diz o contrário do que se pensa.']]},

{n:'f', q:'“Chorei litros quando soube da história.” Qual é a figura?', c:0, o:[
 ['Hipérbole','Correto! É um exagero para mostrar a intensidade do choro.'],
 ['Eufemismo','Eufemismo suaviza; aqui a ideia é aumentada.'],
 ['Comparação','Não há conectivo comparando duas coisas.'],
 ['Sinestesia','Sinestesia mistura sentidos, o que não ocorre aqui.']]},

{n:'f', q:'“A avó de Adalberto foi para o céu.” Qual é a figura?', c:0, o:[
 ['Eufemismo','Isso! Suaviza a notícia da morte.'],
 ['Hipérbole','Não há exagero; ao contrário, a frase suaviza.'],
 ['Personificação','Não se dá ação humana a algo que não é humano.'],
 ['Gradação','Não há sequência crescente ou decrescente.']]},

{n:'f', q:'Alguém perde a chave de casa e diz: “Que sorte a minha!”. Qual é a figura?', c:0, o:[
 ['Ironia','Correto! Diz o contrário do que realmente pensa.'],
 ['Metáfora','Não há associação por semelhança.'],
 ['Comparação','Não há conectivo comparando coisas.'],
 ['Sinestesia','Não há mistura de sentidos.']]},

{n:'f', q:'“Aquele garoto é um furacão.” Qual é a figura?', c:0, o:[
 ['Metáfora','Isso! O garoto é associado a um furacão (muito agitado), sem conectivo.'],
 ['Comparação','Seria comparação se dissesse “como um furacão”.'],
 ['Metonímia','Não há relação concreta como parte/todo.'],
 ['Eufemismo','Não suaviza nada; reforça a agitação.']]},

{n:'m', q:'“O estádio inteiro aplaudiu o jogador.” Qual é a figura e por quê?', c:0, o:[
 ['Metonímia: o lugar no lugar das pessoas','Correto! “Estádio” representa as pessoas que estão nele.'],
 ['Personificação: o estádio age como gente','Quem aplaude são as pessoas; há troca do lugar pelas pessoas (metonímia).'],
 ['Hipérbole: exagero sobre o tamanho do estádio','Não há exagero de quantidade aqui.'],
 ['Metáfora: o estádio parece com uma pessoa','Não há semelhança imaginada, e sim relação concreta.']]},

{n:'m', q:'“Ela falou com uma voz fria.” Qual é a figura?', c:0, o:[
 ['Sinestesia','Isso! Mistura audição (voz) com tato (frio).'],
 ['Antítese','Não há ideias opostas lado a lado.'],
 ['Ironia','Não se diz o contrário do que se quer dizer.'],
 ['Gradação','Não há sequência crescente ou decrescente.']]},

{n:'m', q:'“A propaganda promete tudo e não entrega nada.” Qual é a figura?', c:0, o:[
 ['Antítese','Correto! “Tudo” e “nada” são ideias opostas lado a lado.'],
 ['Gradação','Não há sequência que cresce ou diminui.'],
 ['Eufemismo','A frase não suaviza; ela critica.'],
 ['Comparação','Não há conectivo como “como” ou “feito”.']]},

{n:'m', q:'“Ele caminhava, corria, voava atrás dos seus sonhos.” Qual é a figura?', c:0, o:[
 ['Gradação ascendente','Isso! A intensidade aumenta: caminhar → correr → voar.'],
 ['Gradação descendente','A sequência aumenta, não diminui.'],
 ['Antítese','Não são ideias opostas.'],
 ['Metonímia','Não há troca de palavra por relação concreta.']]},

{n:'m', q:'Qual é a diferença entre comparação e metáfora?', c:0, o:[
 ['Comparação tem conectivo (como, feito); metáfora não','Correto! “É como um furacão” (comparação) × “é um furacão” (metáfora).'],
 ['A metáfora usa “como”; a comparação não','Está invertido.'],
 ['A comparação sempre exagera e a metáfora sempre suaviza','Exagerar é hipérbole e suavizar é eufemismo.'],
 ['Não existe diferença entre as duas','A presença do conectivo é a diferença.']]},

{n:'m', q:'“Gosto de ler Manoel de Barros.” Qual é a figura?', c:0, o:[
 ['Metonímia: o autor no lugar da obra','Isso! Lemos os poemas dele, não a pessoa.'],
 ['Personificação: o autor ganha vida','O autor é uma pessoa; não há personificação.'],
 ['Metáfora: o autor vira um livro','Não há semelhança imaginada; há relação concreta autor–obra.'],
 ['Eufemismo: suaviza o nome do autor','Nada está sendo suavizado.']]},

{n:'m', q:'“A Lua parecia um espelho no céu escuro.” Qual é a figura?', c:0, o:[
 ['Comparação, por causa do “parecia”','Correto! “Parecia” funciona como conectivo de comparação.'],
 ['Metáfora, porque não há conectivo','Há sim: “parecia” liga a Lua ao espelho.'],
 ['Personificação, porque a Lua age','A Lua não faz nenhuma ação humana na frase.'],
 ['Hipérbole, porque exagera o brilho','Não há exagero, e sim uma aproximação.']]},

{n:'d', q:'“O rio cantava alegremente enquanto corria entre as pedras.” O que é correto afirmar?', c:0, o:[
 ['Há personificação: o rio ganha ações humanas','Isso! Cantar e estar alegre são características humanas.'],
 ['Há hipérbole: exagera o tamanho do rio','Nada é exagerado na frase.'],
 ['Há metáfora: o rio é chamado de outra coisa','O rio continua sendo rio; ele só ganha ações humanas.'],
 ['Há eufemismo: suaviza a descrição do rio','Não há nada desagradável sendo suavizado.']]},

{n:'d', q:'Verdadeiro ou falso: (1) A gradação pode ser crescente ou decrescente. (2) O eufemismo suaviza uma ideia. (3) “Morrendo de saudade” é gradação. (4) “Descansou em paz” é metonímia.', c:0, o:[
 ['V – V – F – F','Correto! (3) é hipérbole e (4) é eufemismo.'],
 ['V – F – F – F','A (2) é verdadeira: o eufemismo suaviza.'],
 ['V – F – V – V','(2) é verdadeira, (3) é hipérbole e (4) é eufemismo.'],
 ['V – V – F – V','“Descansou em paz” é eufemismo, não metonímia.']]},

{n:'d', q:'“A festa começou animada, ficou tranquila e acabou silenciosa.” Qual é a figura?', c:0, o:[
 ['Gradação descendente','Isso! A intensidade vai diminuindo.'],
 ['Gradação ascendente','A sequência diminui, não aumenta.'],
 ['Antítese','Há uma sequência de etapas, não só duas ideias opostas.'],
 ['Hipérbole','Não há exagero.']]},

{n:'d', q:'“É proibido proibir.” Essa frase é um exemplo de:', c:0, o:[
 ['Paradoxo, pois a ideia se contradiz','Correto! Proibir que se proíba já é uma proibição: há contradição interna.'],
 ['Antítese, pois são só ideias opostas','Na antítese os opostos não se contradizem; aqui há contradição.'],
 ['Eufemismo, pois suaviza uma ordem','A frase não suaviza nada.'],
 ['Hipérbole, pois exagera a proibição','Não há exagero de intensidade.']]},

{n:'d', q:'Um meme mostra um gato sentado tranquilo numa sala pegando fogo, dizendo: “Está tudo bem”. Quais figuras aparecem?', c:0, o:[
 ['Ironia e personificação','Isso! Diz que está tudo bem quando não está (ironia), e o gato fala (personificação).'],
 ['Eufemismo e gradação','Não há sequência crescente, e a frase não é só suavização.'],
 ['Hipérbole e comparação','Não há conectivo comparativo nem exagero.'],
 ['Metonímia e antítese','Não há troca por relação concreta nem ideias opostas lado a lado.']]},

{n:'d', q:'Qual é a diferença entre metáfora e metonímia?', c:0, o:[
 ['Metáfora usa semelhança; metonímia, relação concreta','Correto! Garoto = furacão (semelhança) × prato = comida (relação real).'],
 ['Metonímia usa semelhança; metáfora, relação concreta','Está invertido.'],
 ['As duas sempre usam a palavra “como”','Quem usa “como” é a comparação.'],
 ['Metonímia é um tipo de exagero','Exagero é hipérbole.']]}
]
};
