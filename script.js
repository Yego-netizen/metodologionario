const data = {
  nodes: [
    {
      id: "ABNT",
      group: "Redação e normalização",
      desc: "Sigla de Associação Brasileira de Normas Técnicas, responsável pelas normas brasileiras para citações (NBR 10520:2023) e referências (NBR 6023:2025).",
      ex: "Consultar a NBR 10520 para citação autor-data.",
      caution:
        "A expressão genérica 'conforme ABNT' deve ser acompanhada da norma e edição específicas.",
      abnt: "ABNT NBR 10520:2023; ABNT NBR 6023:2025.",
    },
    {
      id: "Abordagem de pesquisa",
      group: "Fundamentos",
      desc: "Orientação que articula a pergunta de pesquisa, o modo de conceber o fenômeno e os procedimentos para produzir conhecimento (Qualitativa, Quantitativa ou Mista).",
      ex: "Para investigar o abandono de um app, medir acessos e entrevistar usuários.",
      caution: "Um questionário isolado não define a abordagem da pesquisa.",
      abnt: "GIL, 2023; SILVA, 1998.",
    },
    {
      id: "Abstração",
      group: "Fundamentos",
      desc: "Operação intelectual que destaca aspectos essenciais de um fenômeno para formular conceitos ou modelos, deixando de fora detalhes irrelevantes.",
      ex: "Um modelo de rede representa computadores como nós e conexões como arestas.",
      caution:
        "Uma abstração útil não equivale a uma descrição completa da realidade.",
      abnt: "MARCONI; LAKATOS, 2003.",
    },
    {
      id: "Abstract",
      group: "Redação e normalização",
      desc: "Resumo redigido em inglês, apresentando objetivo, procedimentos, resultados e conclusão do trabalho.",
      ex: "Traduzir 'pesquisa exploratória' por 'exploratory research' preservando o sentido original.",
      caution:
        "O Abstract não é um sumário nem deve introduzir promessas ausentes no texto principal.",
      abnt: "ABNT NBR 14724:2024; ABNT NBR 6028:2021.",
    },
    {
      id: "Actante",
      group: "Epistemologia",
      desc: "Na teoria ator-rede, entidade humana ou não humana cuja participação produz diferenças em uma associação.",
      ex: "Um formulário obrigatório que altera o percurso de matrícula junto aos estudantes.",
      caution:
        "Atribuir agência analítica a um objeto não significa atribuir-lhe consciência moral humana.",
      abnt: "RHEINGANTZ, 2022.",
    },
    {
      id: "Agência",
      group: "Epistemologia",
      desc: "Capacidade de produzir efeitos e modificar relações sociotécnicas em uma situação investigada.",
      ex: "O resultado de uma busca depende do usuário, do algoritmo, da base indexada e do dispositivo.",
      caution: "Agência não é sinônimo de intenção individual humana.",
      abnt: "RHEINGANTZ, 2022.",
    },
    {
      id: "Agenciamento",
      group: "Epistemologia",
      desc: "Articulação de elementos heterogêneos que, em relação dinâmica, produzem ações e transformações.",
      ex: "Descrever como pesquisador, script, dados e servidor se articulam para gerar uma visualização.",
      caution:
        "Uma simples lista de componentes técnicos não demonstra o funcionamento do agenciamento.",
      abnt: "RHEINGANTZ, 2022.",
    },
    {
      id: "Amostra",
      group: "Amostragem e mensuração",
      desc: "Parte selecionada de uma população para investigação empírica.",
      ex: "Selecionar 40 estudantes do curso de Computação para estudar dificuldades em algoritmos.",
      caution: "Uma amostra numerosa não é automaticamente representativa.",
      abnt: "GIL, 2008.",
    },
    {
      id: "Amostragem",
      group: "Amostragem e mensuração",
      desc: "Processo sistemático de selecionar unidades de uma população ou campo de estudo.",
      ex: "Definir se os participantes serão sorteados ou escolhidos por critérios específicos.",
      caution:
        "O tamanho da amostra é apenas uma das decisões do plano amostral.",
      abnt: "GIL, 2008.",
    },
    {
      id: "Amostragem aleatória simples",
      group: "Amostragem e mensuração",
      desc: "Seleção probabilística em que cada unidade tem a mesma chance conhecida de ser sorteada.",
      ex: "Sortear 40 matrículas a partir da lista completa de 200 estudantes.",
      caution:
        "Divulgar formulário em redes sociais e aceitar voluntários NÃO é amostragem aleatória.",
      abnt: "GIL, 2008.",
    },
    {
      id: "Amostragem estratificada",
      group: "Amostragem e mensuração",
      desc: "Divisão da população em estratos homogêneos com seleção probabilística dentro de cada grupo.",
      ex: "Sortear estudantes garantindo representação proporcional de todos os períodos do curso.",
      caution:
        "Estratos não são conglomerados: a seleção contempla todos os estratos definidos.",
      abnt: "GIL, 2008.",
    },
    {
      id: "Amostragem intencional",
      group: "Amostragem e mensuração",
      desc: "Seleção não probabilística de participantes baseada em critérios específicos de relevância.",
      ex: "Entrevistar apenas desenvolvedores especialistas em acessibilidade para sistemas web.",
      caution:
        "A relevância dos casos não autoriza estimativas percentuais populacionais.",
      abnt: "GIL, 2008; LEITÃO; PRATES, 2017.",
    },
    {
      id: "Amostragem por conveniência",
      group: "Amostragem e mensuração",
      desc: "Seleção de unidades facilmente acessíveis ao pesquisador.",
      ex: "Testar um questionário preliminar com colegas presentes no laboratório de informática.",
      caution:
        "Resultados descrevem apenas o grupo observado, sem generalização automática.",
      abnt: "GIL, 2008.",
    },
    {
      id: "Amostragem sistemática",
      group: "Amostragem e mensuração",
      desc: "Seleção de elementos em uma lista ordenada conforme um intervalo constante k a partir de sorteio inicial.",
      ex: "Sortear o primeiro registro entre os 10 primeiros e selecionar 1 registro a cada 10.",
      caution:
        "Periodicidade na lista coincidente com o intervalo pode distorcer a amostra.",
      abnt: "GIL, 2008.",
    },
    {
      id: "Amostragem teórica",
      group: "Amostragem e mensuração",
      desc: "Seleção guiada pelas necessidades de refinamento de categorias conceituais na Teoria Fundamentada nos Dados.",
      ex: "Buscar novos entrevistados que esclareçam como a experiência modifica uma prática observada.",
      caution:
        "Envolve articulação iterativa entre coleta e análise, não escolha inicial aleatória.",
      abnt: "GIL, 2023.",
    },
    {
      id: "Análise de conteúdo",
      group: "Análise de dados",
      desc: "Procedimento sistemático para examinar comunicações (pré-análise, exploração e interpretação por categorias).",
      ex: "Analisar relatos sobre dificuldades de programação criando categorias temáticas.",
      caution:
        "Software de análise não substitui a interpretação analítica do pesquisador.",
      abnt: "DALLA VALLE; FERREIRA, 2025.",
    },
    {
      id: "Análise de dados",
      group: "Análise de dados",
      desc: "Organização e exame do material produzido na pesquisa para responder aos objetivos delimitados.",
      ex: "Comparar tempos de execução de algoritmos e relatos de usuários.",
      caution:
        "Apresentar tabelas sem explicitar o significado das relações não conclui a análise.",
      abnt: "GIL, 2008; LEITÃO; PRATES, 2017.",
    },
    {
      id: "Análise documental",
      group: "Métodos em computação",
      desc: "Exame sistemático de documentos (atas, requisitos, registros) como evidências de processos.",
      ex: "Investigar a evolução dos requisitos de um software através do histórico de versões e atas de reunião.",
      caution:
        "O documento não é um espelho neutro; possui contexto de produção e intenção do autor.",
      abnt: "GIL, 2023.",
    },
    {
      id: "Análise temática",
      group: "Análise de dados",
      desc: "Identificação e organização de padrões de significado (temas) relevantes ao problema de pesquisa.",
      ex: "Reunir falas sobre receio de errar em um tema analítico sobre 'participação nas aulas'.",
      caution:
        "Um tema não é apenas uma palavra frequente; exige interpretação do sentido.",
      abnt: "DALLA VALLE; FERREIRA, 2025; LEITÃO; PRATES, 2017.",
    },
    {
      id: "Anexo",
      group: "Redação e normalização",
      desc: "Texto ou documento não elaborado pelo autor do trabalho, adicionado para comprovação ou ilustração.",
      ex: "Inserir uma norma institucional examinada durante o estudo no Anexo A.",
      caution:
        "Instrumento criado pela própria equipe de pesquisa é apêndice, não anexo.",
      abnt: "ABNT NBR 14724:2024.",
    },
    {
      id: "Apêndice",
      group: "Redação e normalização",
      desc: "Material complementar elaborado pelo próprio autor para detalhar a pesquisa (ex: roteiros, questionários).",
      ex: "Apresentar o roteiro de entrevista desenvolvido pela equipe no Apêndice A.",
      caution: "Diferencia-se do anexo pela autoria do material.",
      abnt: "ABNT NBR 14724:2024.",
    },
    {
      id: "Apud",
      group: "Redação e normalização",
      desc: "Expressão latina que significa 'citado por', utilizada na citação de fonte secundária (acesso indireto).",
      ex: "Citar uma ideia de Bardin encontrada na obra de Dalla Valle e Ferreira.",
      caution:
        "Deve-se priorizar a consulta direta à fonte original sempre que possível.",
      abnt: "ABNT NBR 10520:2023.",
    },
    {
      id: "Argumentação científica",
      group: "Fundamentos",
      desc: "Encadeamento lógico de afirmações, razões e evidências para sustentar uma conclusão examinável.",
      ex: "Demonstrar o ganho de desempenho de um código apontando métricas, condições e limitações.",
      caution:
        "Volume de referências ou prestígio de autores não substitui evidências empíricas.",
      abnt: "GIL, 2023; MARCONI; LAKATOS, 2003.",
    },
    {
      id: "Artefato de pesquisa",
      group: "Métodos em computação",
      desc: "Produto construído e avaliado na investigação (sistema, modelo, algoritmo ou método).",
      ex: "Desenvolver um método automático de refatoração de código e avaliar sua utilidade.",
      caution:
        "O artefato isolado, sem avaliação rigorosa, não constitui contribuição científica.",
      abnt: "HEVNER et al., 2004.",
    },
    {
      id: "Artigo científico",
      group: "Redação e normalização",
      desc: "Texto acadêmico que comunica uma investigação, revisão ou discussão teórica à comunidade científica.",
      ex: "Publicar um estudo experimental detalhando problema, método, resultados e discussão.",
      caution:
        "Estar publicado não garante isenção total de erros ou falhas metodológicas.",
      abnt: "ABNT NBR 6023:2025.",
    },
    {
      id: "Avaliação",
      group: "Fundamentos",
      desc: "Exame sistemático de características, resultados ou efeitos segundo critérios previamente explicitados.",
      ex: "Avaliar uma solução de software diante de requisitos predefinidos.",
      caution:
        "Definir critérios de avaliação apenas após conhecer os resultados introduz viés.",
      abnt: "HEVNER et al., 2004.",
    },
    {
      id: "Avaliação de artefatos computacionais",
      group: "Métodos em computação",
      desc: "Exame de programas, scripts e dados quanto à disponibilidade, documentação e reprodutibilidade.",
      ex: "Documentar dependências e comandos para execução completa dos testes.",
      caution:
        "Critérios de avaliação variam entre eventos e conferências científicas.",
      abnt: "ACM SIGSIM PADS, 2026.",
    },
    {
      id: "Avaliação heurística",
      group: "Métodos em computação",
      desc: "Método de inspeção de interfaces em que especialistas analisam a conformidade com diretrizes de usabilidade.",
      ex: "Identificar que uma mensagem de erro não orienta o usuário sobre como corrigi-la.",
      caution:
        "A inspeção por especialistas não substitui totalmente os testes com usuários reais.",
      abnt: "LEITÃO; PRATES, 2017.",
    },
    {
      id: "Categoria",
      group: "Análise de dados",
      desc: "Classe analítica que agrupa elementos ou trechos de dados com significados semelhantes.",
      ex: "Agrupar relatos de lentidão, travamento e perda de dados na categoria 'problemas de uso'.",
      caution:
        "Uma categoria não deve servir como recipiente vago sem critérios claros de inclusão.",
      abnt: "DALLA VALLE; FERREIRA, 2025; LEITÃO; PRATES, 2017.",
    },
    {
      id: "Causalidade",
      group: "Fundamentos",
      desc: "Relação explicativa na qual uma intervenção ou condição participa diretamente na produção de um efeito.",
      ex: "Avaliar se uma nova técnica de ensino melhora notas controlando conhecimentos prévios.",
      caution: "Correlação estatística isolada não demonstra causalidade.",
      abnt: "GIL, 2008.",
    },
    {
      id: "Cegamento",
      group: "Fundamentos",
      desc: "Procedimento experimental que oculta a alocação dos tratamentos aos participantes ou avaliadores.",
      ex: "Avaliadores corrigem trabalhos sem saber qual versão do ambiente foi utilizada pelos alunos.",
      caution:
        "Termos como 'duplo-cego' exigem explicação clara de quem exatamente foi cegado.",
      abnt: "GIL, 2023.",
    },
    {
      id: "Ciência",
      group: "Fundamentos",
      desc: "Atividade sistemática de produção, verificação e comunicação de conhecimento sustentada por métodos e crítica.",
      ex: "Demonstrar a correção teórica de um algoritmo e avaliar empiricamente seu desempenho.",
      caution:
        "Ciência não se reduz a uma sequência rígida de passos imune a revisões.",
      abnt: "GIL, 2008; MARCONI; LAKATOS, 2003.",
    },
    {
      id: "Ciências empíricas",
      group: "Fundamentos",
      desc: "Ramos da ciência que investigam fenômenos através da observação, experimentação e dados da realidade.",
      ex: "Medir o tempo de execução de um sistema ou observar a interação de usuários com telas.",
      caution:
        "Coletar dados não basta: é preciso fundamentar a interpretação e a validade.",
      abnt: "GIL, 2008; MARCONI; LAKATOS, 2003.",
    },
    {
      id: "Ciências formais",
      group: "Fundamentos",
      desc: "Disciplinas que estudam estruturas abstratas através da lógica e da matemática.",
      ex: "Demonstrar formalmente que um algoritmo de ordenação atinge determinada complexidade.",
      caution:
        "Testar entradas empíricas não substitui uma demonstração formal matemática.",
      abnt: "MARCONI; LAKATOS, 2003.",
    },
    {
      id: "Citação",
      group: "Redação e normalização",
      desc: "Menção no texto de informação extraída de outra fonte, podendo ser direta, indireta ou de citação.",
      ex: "Indicar autoria e ano (Gil, 2023) ao definir amostragem no texto.",
      caution:
        "Uma lista final de referências não dispensa as chamadas de citação no corpo do texto.",
      abnt: "ABNT NBR 10520:2023.",
    },
    {
      id: "Citação direta",
      group: "Redação e normalização",
      desc: "Transcrição literal do trecho de uma fonte (com recuo de 4cm e fonte menor se passar de 3 linhas).",
      ex: "Transcrever a definição exata de um autor indicando o número da página.",
      caution:
        "Não colocar paráfrases entre aspas nem inventar paginação para documentos online sem páginas.",
      abnt: "ABNT NBR 10520:2023.",
    },
    {
      id: "Citação indireta",
      group: "Redação e normalização",
      desc: "Apresentação da ideia contida no documento consultado redigida com as próprias palavras do pesquisador.",
      ex: "Explicar os princípios de amostragem fundamentados em Gil (2008) sem transcrição literal.",
      caution:
        "Apenas trocar algumas palavras por sinônimos não caracteriza paráfrase adequada.",
      abnt: "ABNT NBR 10520:2023.",
    },
    {
      id: "Clareza",
      group: "Redação e normalização",
      desc: "Qualidade do texto acadêmico que transmite conceitos, dados e procedimentos de forma unívoca.",
      ex: "Especificar 'tempo de resposta em milissegundos' em vez de afirmar que o sistema ficou 'rápido'.",
      caution:
        "Linguagem rebuscada ou frases extensas não aumentam o rigor científico.",
      abnt: "GIL, 2023.",
    },
    {
      id: "Codificação",
      group: "Análise de dados",
      desc: "Atribuição de rótulos analíticos a trechos de dados para identificar e comparar significados.",
      ex: "Rotular trechos de entrevistas sobre dificuldades de uso com um código específico.",
      caution:
        "Codificação qualitativa é um processo analítico humano, não um código executável de software.",
      abnt: "LEITÃO; PRATES, 2017.",
    },
    {
      id: "Codificação aberta",
      group: "Análise de dados",
      desc: "Fase inicial de exame dos dados na Teoria Fundamentada nos Dados para identificar conceitos preliminares.",
      ex: "Examinar relatos e atribuir rótulos provisórios às estratégias de estudo dos alunos.",
      caution:
        "Os códigos iniciais devem permanecer abertos a constantes revisões analíticas.",
      abnt: "GIL, 2023; LEITÃO; PRATES, 2017.",
    },
    {
      id: "Coerência",
      group: "Fundamentos",
      desc: "Articulação lógica e fluida entre problema, objetivos, referencial teórico e métodos de pesquisa.",
      ex: "Um objetivo de compreender experiências exige métodos qualitativos e não apenas estatística.",
      caution:
        "Coerência não é rigidez técnica; abordagens mistas podem ser usadas se justificadas.",
      abnt: "GIL, 2023; SILVA, 1998.",
    },
    {
      id: "Coleta de dados",
      group: "Fundamentos",
      desc: "Fase de execução em que informações e registros são obtidos através de instrumentos validados.",
      ex: "Aplicar questionários e registrar registros de acesso durante o uso de um software.",
      caution:
        "Os dados não surgem neutros; o instrumento e a presença do pesquisador influenciam a coleta.",
      abnt: "GIL, 2023; LEITÃO; PRATES, 2017.",
    },
    {
      id: "Comunicabilidade",
      group: "Métodos em computação",
      desc: "Qualidade em IHC que avalia quão bem a interface comunica ao usuário a intenção dos projetistas.",
      ex: "Avaliar se os ícones e avisos deixam clara a função de cada ferramenta do sistema.",
      caution:
        "Comunicabilidade avalia a mensagem do designer; usabilidade foca no desempenho da tarefa.",
      abnt: "LEITÃO; PRATES, 2017.",
    },
    {
      id: "Conceito",
      group: "Fundamentos",
      desc: "Construção intelectual que permite identificar, categorizar e relacionar características de fenômenos.",
      ex: "Definir o conceito de 'usabilidade' antes de escolher as métricas de avaliação.",
      caution:
        "O rótulo de uma variável não substitui a definição teórica do conceito.",
      abnt: "GIL, 2008.",
    },
    {
      id: "Confiabilidade",
      group: "Amostragem e mensuração",
      desc: "Consistência e estabilidade das medições obtidas sob condições equivalentes.",
      ex: "Verificar se dois avaliadores aplicando o mesmo protocolo obtêm os mesmos escores.",
      caution:
        "Uma medida confiável e repetível pode ainda assim medir a propriedade errada (falta de validade).",
      abnt: "GIL, 2008.",
    },
    {
      id: "Confidencialidade",
      group: "Ética e integridade",
      desc: "Garantia de resguardo dos dados pessoais e preservação do anonimato dos participantes da pesquisa.",
      ex: "Substituir nomes de participantes por códigos alfa-numéricos nos relatórios públicos.",
      caution:
        "Alterar o nome não basta se a descrição do cargo ou local revelar a identidade.",
      abnt: "LEITÃO; PRATES, 2017; UNESCO, 2022.",
    },
    {
      id: "Conhecimento científico",
      group: "Fundamentos",
      desc: "Saber produzido por procedimentos metódicos, verificáveis, sistemáticos e abertos à crítica.",
      ex: "Diferenciar uma opinião pessoal sobre usabilidade de um estudo empírico com dados.",
      caution:
        "A publicação em periódico não torna o conhecimento uma verdade absoluta indiscutível.",
      abnt: "GIL, 2008; MARCONI; LAKATOS, 2003.",
    },
    {
      id: "Consentimento livre e esclarecido",
      group: "Ética e integridade",
      desc: "Anuência voluntária do participante após explicação detalhada dos objetivos, riscos e benefícios da pesquisa.",
      ex: "Apresentar o Termo de Consentimento Livre e Esclarecido (TCLE) antes dos testes de interface.",
      caution:
        "Assinatura obtida sem a devida compreensão do participante invalida o consentimento ético.",
      abnt: "LEITÃO; PRATES, 2017.",
    },
    {
      id: "Constructo",
      group: "Amostragem e mensuração",
      desc: "Conceito abstrato não observável diretamente (ex: satisfação, ansiedade, engajamento) medido por indicadores.",
      ex: "Operacionalizar 'engajamento acadêmico' através de acessos ao fórum e entrega de tarefas.",
      caution:
        "Um único indicador raramente consegue mensurar toda a complexidade de um constructo.",
      abnt: "GIL, 2008; MARCONI; LAKATOS, 2003.",
    },
    {
      id: "Construtivismo",
      group: "Epistemologia",
      desc: "Perspectiva epistemológica que compreende a realidade e o conhecimento como construções sociais e subjetivas.",
      ex: "Investigar como grupos de desenvolvedores negociam o que consideram um código 'limpo'.",
      caution:
        "Reconhecer a construção social não significa que qualquer explicação seja equivalente.",
      abnt: "GIL, 2008; RHEINGANTZ, 2022.",
    },
    {
      id: "Contexto",
      group: "Fundamentos",
      desc: "Conjunto de condições sociais, materiais e institucionais em que o fenômeno investigado ocorre.",
      ex: "Descrever que os testes foram realizados em um laboratório sob condições controladas de ruído.",
      caution:
        "Resultados apresentados sem contexto dificultam a avaliação de sua transferibilidade.",
      abnt: "LEITÃO; PRATES, 2017; SILVA, 1998.",
    },
    {
      id: "Contribuição científica",
      group: "Fundamentos",
      desc: "Acréscimo original e fundamentado que o estudo proporciona ao estado da arte da disciplina.",
      ex: "Apresentar um novo algoritmo que reduz o consumo de memória em dispositivos embarcados.",
      caution:
        "Construir um software comercial sem avaliação metodológica não é contribuição científica.",
      abnt: "GIL, 2023; MARCONI; LAKATOS, 2003.",
    },
    {
      id: "Corpus",
      group: "Análise de dados",
      desc: "Conjunto delimitado de documentos, transcrições ou textos selecionados para análise.",
      ex: "Reunir todas as transcrições das 15 entrevistas realizadas para a análise de conteúdo.",
      caution:
        "Acumular grandes volumes de textos não substitui a justificativa de amostragem do corpus.",
      abnt: "DALLA VALLE; FERREIRA, 2025.",
    },
    {
      id: "Correlação",
      group: "Análise de dados",
      desc: "Medida estatística da força e direção da associação entre duas variáveis quantitativas.",
      ex: "Verificar a correlação r de Pearson entre horas de estudo e a nota obtida na avaliação.",
      caution:
        "Correlação forte não implica relação de causa e efeito (causalidade).",
      abnt: "GIL, 2008; MARCONI; LAKATOS, 2003.",
    },
    {
      id: "Cronograma",
      group: "Redação e normalização",
      desc: "Distribuição temporal das etapas e atividades planejadas no projeto de pesquisa.",
      ex: "Mapear os meses dedicados à revisão bibliográfica, coleta de dados, análise e redação.",
      caution:
        "O cronograma deve respeitar as dependências lógicas entre as etapas de pesquisa.",
      abnt: "ABNT NBR 15287:2025; GIL, 2023.",
    },
    {
      id: "Dado",
      group: "Fundamentos",
      desc: "Registro bruto, quantitativo ou qualitativo, produzido ou extraído durante a investigação.",
      ex: "Tempos de execução registrados em milissegundos ou trechos de voz gravados.",
      caution:
        "Dado isolado não é informação nem evidência; exige tratamento analítico.",
      abnt: "GIL, 2008; LEITÃO; PRATES, 2017.",
    },
    {
      id: "Dados primários",
      group: "Fundamentos",
      desc: "Dados coletados diretamente pelo próprio pesquisador para atender ao problema específico do estudo.",
      ex: "Realizar testes de usabilidade inéditos para registrar as falhas dos usuários.",
      caution:
        "Dados primários exigem documentação detalhada sobre as condições de coleta.",
      abnt: "GIL, 2008.",
    },
    {
      id: "Dados secundários",
      group: "Fundamentos",
      desc: "Dados preexistentes, coletados por terceiros ou órgãos oficiais, reaproveitados na pesquisa.",
      ex: "Analisar dados de evasão do Censo da Educação Superior ou repositórios públicos.",
      caution:
        "Verificar a procedência, atualização e limitações dos dados secundários antes do uso.",
      abnt: "GIL, 2008, 2023.",
    },
    {
      id: "Declaração de uso de inteligência artificial",
      group: "Ética e integridade",
      desc: "Explicitação transparente sobre as ferramentas de IA utilizadas no auxílio à escrita ou análise do trabalho.",
      ex: "Declarar o uso de assistente de IA para auxílio na revisão gramatical e formatação de código.",
      caution:
        "Ferramentas de IA não são autoras e não assumem responsabilidade acadêmica pelo trabalho.",
      abnt: "UNESCO, 2022.",
    },
    {
      id: "Dedução",
      group: "Fundamentos",
      desc: "Raciocínio lógico que deriva uma conclusão necessária a partir de premissas universais verdadeiras.",
      ex: "Se todo algoritmo determinístico termina e A é determinístico, logo A termina.",
      caution:
        "Se uma premissa for falsa, a conclusão dedutiva pode não ter validade empírica.",
      abnt: "GIL, 2008; MARCONI; LAKATOS, 2003.",
    },
    {
      id: "Definição operacional",
      group: "Amostragem e mensuração",
      desc: "Especificação exata das operações e procedimentos necessários para medir ou observar um conceito.",
      ex: "Definir 'desempenho' como o número de tarefas concluídas com sucesso em 10 minutos.",
      caution:
        "Uma definição operacional simplista pode descaracterizar a complexidade do conceito.",
      abnt: "GIL, 2008, 2023.",
    },
    {
      id: "Delimitação",
      group: "Fundamentos",
      desc: "Definição dos limites do problema, população, recorte temporal e escopo geográfico da pesquisa.",
      ex: "Delimitar a pesquisa aos estudantes de Ciência da Computação da UEPB do campus de Patos.",
      caution:
        "Delimitar o estudo não significa tornar o problema trivial ou irrelevante.",
      abnt: "GIL, 2008, 2023.",
    },
    {
      id: "Delineamento",
      group: "Fundamentos",
      desc: "Estrutura e plano geral de investigação que conecta o problema aos métodos de coleta e análise.",
      ex: "Escolher um delineamento experimental com grupo de controle e pré/pós-teste.",
      caution:
        "Nomear o tipo de pesquisa não substitui detalhar a execução real do plano.",
      abnt: "GIL, 2008, 2023.",
    },
    {
      id: "Demonstração",
      group: "Fundamentos",
      desc: "Prova lógica ou matemática rigorosa que estabelece a verdade indubitável de uma proposição formal.",
      ex: "Demonstrar por indução matemática a corretude de uma função recursiva.",
      caution:
        "Testar diversos casos de entrada favoráveis não constitui uma demonstração formal.",
      abnt: "MARCONI; LAKATOS, 2003.",
    },
    {
      id: "Descritor",
      group: "Redação e normalização",
      desc: "Termo padronizado pertencente a um vocabulário controlado para indexação e busca de documentos.",
      ex: "Consultar o DeCS ou o IEEE Thesaurus para selecionar termos formais de busca.",
      caution:
        "Palavra-chave é livre; descritor pertence a uma lista controlada e autorizada.",
      abnt: "ABNT NBR 6028:2021; GIL, 2023.",
    },
    {
      id: "Design science research",
      group: "Métodos em computação",
      desc: "Abordagem de pesquisa focada em projetar, construir e avaliar artefatos para resolver problemas práticos e gerar conhecimento.",
      ex: "Desenvolver uma ferramenta visual de depuração e avaliar o tempo de resolução de bugs.",
      caution:
        "Desenvolvimento técnico sem rigor de avaliação científica não é Design Science.",
      abnt: "HEVNER et al., 2004.",
    },
    {
      id: "Desvio padrão",
      group: "Análise de dados",
      desc: "Medida de dispersão estatística que indica a variação dos dados em torno da média aritmética.",
      ex: "Informar que o tempo de processamento teve média de 12s com desvio padrão de 1,5s.",
      caution:
        "Em distribuições muito assimétricas, o desvio padrão pode induzir a erros de interpretação.",
      abnt: "GIL, 2008.",
    },
    {
      id: "Diário de campo",
      group: "Fundamentos",
      desc: "Caderno de anotações onde o pesquisador registra observações, eventos e reflexões durante a coleta.",
      ex: "Anotar comportamentos e reações não verbais dos usuários durante sessões de teste.",
      caution:
        "Distinguir claramente no diário a descrição objetiva do fato da interpretação pessoal do pesquisador.",
      abnt: "GIL, 2023; LEITÃO; PRATES, 2017.",
    },
    {
      id: "Discussão",
      group: "Redação e normalização",
      desc: "Seção do trabalho acadêmico onde os resultados são interpretados e confrontados com a literatura.",
      ex: "Explicar por que o resultado obtido diverge de estudos anteriores citados no referencial.",
      caution:
        "A discussão não deve apenas repetir os dados numéricos já apresentados na seção de resultados.",
      abnt: "FERRER; DIAS, 2023; GIL, 2008.",
    },
    {
      id: "DOI",
      group: "Redação e normalização",
      desc: "Digital Object Identifier — identificador digital permanente atribuído a publicações acadêmicas.",
      ex: "Incluir o identificador DOI ao final da referência bibliográfica do artigo.",
      caution:
        "A presença do DOI facilita a localização do artigo, mas não garante sua qualidade metodológica.",
      abnt: "ABNT NBR 6023:2025.",
    },
    {
      id: "Entrevista semiestruturada",
      group: "Métodos em computação",
      desc: "Técnica de coleta verbal orientada por um roteiro flexível de perguntas abertas.",
      ex: "Entrevistar programadores sobre práticas de refatoração, aprofundando respostas inesperadas.",
      caution:
        "O entrevistador deve evitar fazer perguntas indutivas que direcionem a resposta do participante.",
      abnt: "GIL, 2008; LEITÃO; PRATES, 2017.",
    },
    {
      id: "Epistemologia",
      group: "Epistemologia",
      desc: "Ramo da filosofia que investiga a natureza, origem, métodos e limites do conhecimento científico.",
      ex: "Explicitar se a pesquisa busca mensurar relações objetivas ou compreender significados sociais.",
      caution:
        "Epistemologia não é apenas um sinônimo sofisticado de metodologia.",
      abnt: "RHEINGANTZ, 2022; SILVA, 1998.",
    },
    {
      id: "Estudo de caso",
      group: "Fundamentos",
      desc: "Investigação empírica aprofundada de um fenômeno contemporâneo em seu contexto real.",
      ex: "Investigar a adoção de metodologias ágeis em um laboratório específico da universidade.",
      caution:
        "Estudar poucas pessoas sem contexto rigoroso não caracteriza um Estudo de Caso.",
      abnt: "GIL, 2023; LEITÃO; PRATES, 2017.",
    },
    {
      id: "Experimento",
      group: "Fundamentos",
      desc: "Delineamento onde o pesquisador manipula variáveis independentes e controla fatores de confusão.",
      ex: "Comparar o tempo de resposta entre duas arquiteturas sob cargas idênticas.",
      caution:
        "Executar um programa uma vez não constitui um experimento científico formal.",
      abnt: "GIL, 2023.",
    },
    {
      id: "Hipótese",
      group: "Fundamentos",
      desc: "Explicação provisória testável para um problema de pesquisa.",
      ex: "Propor que a interface A reduz o tempo de conclusão da tarefa em comparação com a interface B.",
      caution:
        "Hipótese não é uma certeza nem uma obrigação de confirmar a expectativa do autor.",
      abnt: "GIL, 2023; MARCONI; LAKATOS, 2003.",
    },
  ],
  links: [
    {
      source: "Amostra",
      target: "Amostragem",
    },
    {
      source: "Amostragem",
      target: "Amostragem aleatória simples",
    },
    {
      source: "Amostragem",
      target: "Amostragem estratificada",
    },
    {
      source: "Amostragem",
      target: "Amostragem intencional",
    },
    {
      source: "Amostragem",
      target: "Amostragem por conveniência",
    },
    {
      source: "Amostragem",
      target: "Amostragem sistemática",
    },
    {
      source: "Amostragem",
      target: "Amostragem teórica",
    },
    {
      source: "Análise de conteúdo",
      target: "Codificação",
    },
    {
      source: "Análise de conteúdo",
      target: "Corpus",
    },
    {
      source: "Análise de conteúdo",
      target: "Categoria",
    },
    {
      source: "Análise de dados",
      target: "Análise de conteúdo",
    },
    {
      source: "Análise de dados",
      target: "Análise temática",
    },
    {
      source: "Análise de dados",
      target: "Desvio padrão",
    },
    {
      source: "Análise de dados",
      target: "Correlação",
    },
    {
      source: "Análise de dados",
      target: "Discussão",
    },
    {
      source: "Artefato de pesquisa",
      target: "Design science research",
    },
    {
      source: "Artefato de pesquisa",
      target: "Avaliação",
    },
    {
      source: "Artefato de pesquisa",
      target: "Avaliação de artefatos computacionais",
    },
    {
      source: "Avaliação heurística",
      target: "Avaliação",
    },
    {
      source: "Causalidade",
      target: "Experimento",
    },
    {
      source: "Causalidade",
      target: "Correlação",
    },
    {
      source: "Citação",
      target: "Citação direta",
    },
    {
      source: "Citação",
      target: "Citação indireta",
    },
    {
      source: "Citação",
      target: "Apud",
    },
    {
      source: "Citação",
      target: "ABNT",
    },
    {
      source: "Citação direta",
      target: "ABNT",
    },
    {
      source: "Citação indireta",
      target: "ABNT",
    },
    {
      source: "Apud",
      target: "ABNT",
    },
    {
      source: "Artigo científico",
      target: "ABNT",
    },
    {
      source: "Apêndice",
      target: "ABNT",
    },
    {
      source: "Anexo",
      target: "ABNT",
    },
    {
      source: "Abstract",
      target: "ABNT",
    },
    {
      source: "Cronograma",
      target: "ABNT",
    },
    {
      source: "Descritor",
      target: "ABNT",
    },
    {
      source: "DOI",
      target: "ABNT",
    },
    {
      source: "Abstração",
      target: "Conceito",
    },
    {
      source: "Argumentação científica",
      target: "Hipótese",
    },
    {
      source: "Argumentação científica",
      target: "Dedução",
    },
    {
      source: "Design science research",
      target: "Avaliação",
    },
    {
      source: "Epistemologia",
      target: "Abordagem de pesquisa",
    },
    {
      source: "Epistemologia",
      target: "Construtivismo",
    },
    {
      source: "Epistemologia",
      target: "Actante",
    },
    {
      source: "Epistemologia",
      target: "Agência",
    },
    {
      source: "Epistemologia",
      target: "Agenciamento",
    },
    {
      source: "Estudo de caso",
      target: "Abordagem de pesquisa",
    },
    {
      source: "Estudo de caso",
      target: "Contexto",
    },
    {
      source: "Estudo de caso",
      target: "Análise documental",
    },
    {
      source: "Experimento",
      target: "Hipótese",
    },
    {
      source: "Experimento",
      target: "Causalidade",
    },
    {
      source: "Experimento",
      target: "Cegamento",
    },
    {
      source: "Hipótese",
      target: "Argumentação científica",
    },
    {
      source: "Codificação",
      target: "Codificação aberta",
    },
    {
      source: "Codificação",
      target: "Análise de conteúdo",
    },
    {
      source: "Avaliação de artefatos computacionais",
      target: "Artefato de pesquisa",
    },
    {
      source: "Conceito",
      target: "Abstração",
    },
    {
      source: "Conceito",
      target: "Constructo",
    },
    {
      source: "Conceito",
      target: "Definição operacional",
    },
    {
      source: "Ciência",
      target: "Conhecimento científico",
    },
    {
      source: "Ciência",
      target: "Ciências empíricas",
    },
    {
      source: "Ciência",
      target: "Ciências formais",
    },
    {
      source: "Ciências formais",
      target: "Demonstração",
    },
    {
      source: "Coleta de dados",
      target: "Entrevista semiestruturada",
    },
    {
      source: "Coleta de dados",
      target: "Diário de campo",
    },
    {
      source: "Coleta de dados",
      target: "Dados primários",
    },
    {
      source: "Coleta de dados",
      target: "Dados secundários",
    },
    {
      source: "Dado",
      target: "Dados primários",
    },
    {
      source: "Dado",
      target: "Dados secundários",
    },
    {
      source: "Comunicabilidade",
      target: "Avaliação heurística",
    },
    {
      source: "Confiabilidade",
      target: "Definição operacional",
    },
    {
      source: "Confidencialidade",
      target: "Consentimento livre e esclarecido",
    },
    {
      source: "Confidencialidade",
      target: "Declaração de uso de inteligência artificial",
    },
    {
      source: "Contribuição científica",
      target: "Artefato de pesquisa",
    },
    {
      source: "Contribuição científica",
      target: "Design science research",
    },
    {
      source: "Delimitação",
      target: "Delineamento",
    },
    {
      source: "Delineamento",
      target: "Abordagem de pesquisa",
    },
  ],
};

const colorMap = {
  Fundamentos: "#38bdf8",
  "Amostragem e mensuração": "#c084fc",
  "Análise de dados": "#4ade80",
  "Métodos em computação": "#fbbf24",
  "Redação e normalização": "#f43f5e",
  Epistemologia: "#a855f7",
  "Ética e integridade": "#a855f7",
};

const container = document.getElementById("graph-container");
let width = container.clientWidth;
let height = container.clientHeight;

const svg = d3
  .select("#graph-container")
  .append("svg")
  .attr("width", "100%")
  .attr("height", "100%")
  .attr("viewBox", `0 0 ${width} ${height}`)
  .attr("preserveAspectRatio", "xMidYMid meet")
  .attr("role", "img")
  .attr("aria-label", "Grafo interativo de conceitos de metodologia científica");

const g = svg.append("g");

const zoom = d3
  .zoom()
  .scaleExtent([0.2, 4])
  .on("zoom", (event) => {
    g.attr("transform", event.transform);
  });
svg.call(zoom);

const simulation = d3
  .forceSimulation(data.nodes)
  .force(
    "link",
    d3
      .forceLink(data.links)
      .id((d) => d.id)
      .distance(100),
  )
  .force("charge", d3.forceManyBody().strength(-350))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force("collision", d3.forceCollide().radius(35));

const link = g
  .append("g")
  .selectAll("line")
  .data(data.links)
  .enter()
  .append("line")
  .attr("class", "link");

const node = g
  .append("g")
  .selectAll(".node")
  .data(data.nodes)
  .enter()
  .append("g")
  .attr("class", "node")
  .call(
    d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended),
  );

node
  .append("circle")
  .attr("r", 10)
  .attr("fill", (d) => colorMap[d.group] || "#94a3b8");

node
  .append("text")
  .attr("dx", 14)
  .attr("dy", ".35em")
  .text((d) => d.id);

node.on("click", (event, d) => {
  selectNode(d);
});

simulation.on("tick", () => {
  link
    .attr("x1", (d) => d.source.x)
    .attr("y1", (d) => d.source.y)
    .attr("x2", (d) => d.target.x)
    .attr("y2", (d) => d.target.y);

  node.attr("transform", (d) => `translate(${d.x},${d.y})`);
});

function dragstarted(event, d) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(event, d) {
  d.fx = event.x;
  d.fy = event.y;
}

function dragended(event, d) {
  if (!event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

function selectNode(d) {
  link.classed(
    "highlighted",
    (l) => l.source.id === d.id || l.target.id === d.id,
  );
  node.selectAll("circle").attr("r", (n) => (n.id === d.id ? 15 : 10));

  const relatedIds = data.links
    .filter((l) => l.source.id === d.id || l.target.id === d.id)
    .map((l) => (l.source.id === d.id ? l.target.id : l.source.id));

  const detailsDiv = document.getElementById("details");
  detailsDiv.innerHTML = `
        <span class="badge" style="background: ${colorMap[d.group]}25; color: ${colorMap[d.group]}; border-color: ${colorMap[d.group]}50;">${d.group}</span>
        <h2 class="verbete-title">${d.id}</h2>
        
        <div class="section-label">Explicação / Definição</div>
        <p class="content-text">${d.desc}</p>
        
        <div class="section-label">Exemplo Didático em Computação</div>
        <div class="example-box">${d.ex}</div>
        
        <div class="section-label">Cuidado de Interpretação</div>
        <div class="caution-box">${d.caution}</div>
        
        <div class="section-label">Remissões (Veja Também)</div>
        <div class="links-list">
          ${
            relatedIds.length > 0
              ? relatedIds
                  .map(
                    (rel) =>
                      `<span class="link-chip" onclick="focusNode('${rel}')">${rel}</span>`,
                  )
                  .join("")
              : '<span style="color: var(--text-muted); font-size: 0.85rem;">Nenhuma remissão direta no subgrafo.</span>'
          }
        </div>
        
        <div class="section-label">Referência ABNT</div>
        <p class="content-text" style="font-size: 0.82rem; color: #94a3b8; font-style: italic;">${d.abnt}</p>
      `;
}

// Recalcula o enquadramento e o centro da simulação quando a tela muda
// de orientação ou o painel é redimensionado.
const resizeObserver = new ResizeObserver(() => {
  const nextWidth = container.clientWidth;
  const nextHeight = container.clientHeight;
  if (!nextWidth || !nextHeight || (nextWidth === width && nextHeight === height)) return;

  width = nextWidth;
  height = nextHeight;
  svg.attr("viewBox", `0 0 ${width} ${height}`);
  simulation.force("center", d3.forceCenter(width / 2, height / 2));
  simulation.alpha(0.25).restart();
});
resizeObserver.observe(container);

window.focusNode = function (nodeId) {
  const targetNode = data.nodes.find((n) => n.id === nodeId);
  if (targetNode) {
    selectNode(targetNode);
    svg
      .transition()
      .duration(750)
      .call(
        zoom.transform,
        d3.zoomIdentity
          .translate(width / 2 - targetNode.x, height / 2 - targetNode.y)
          .scale(1.2),
      );
  }
};

document.getElementById("search-input").addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase().trim();
  if (!term) {
    node.style("opacity", 1);
    link.style("opacity", 0.6);
    return;
  }

  node.style("opacity", (n) =>
    n.id.toLowerCase().includes(term) || n.group.toLowerCase().includes(term)
      ? 1
      : 0.15,
  );
  link.style("opacity", 0.1);
});
