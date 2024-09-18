export interface DataProps {
    id?: number;
    subject: string;
    question: string;
    answer: string;
}

export const sampleData: DataProps[] = [
    // { id: 1, subject: "Alterações da afetividade", question: "Atenção voluntária", answer: "Concentração ativa e intencional da consciência sobre um objeto específico." },
    // { id: 2, subject: "Alterações da afetividade", question: "Atenção espontânea", answer: "Atenção suscitada pelo interesse momentâneo e incidental, com pouca interferência voluntária." },
    // { id: 3, subject: "Alterações da afetividade", question: "Hipoprosexia", answer: "Diminuição global da atenção, prejudicando concentração, percepção e raciocínio." },
    // { id: 4, subject: "Alterações da afetividade", question: "Aprosexia", answer: "Abolição total da atenção, mesmo com estímulos ambientais fortes." },
    // { id: 5, subject: "Alterações da afetividade", question: "Hiperprossexia", answer: "Atenção exagerada e prolongada em certos objetos, com grande infatigabilidade." },
    // { id: 6, subject: "Alterações da afetividade", question: "Distração", answer: "Atenção focada excessivamente em determinados conteúdos, com inibição de outros estímulos." },
    // { id: 7, subject: "Alterações da afetividade", question: "Distrabilidade", answer: "Incapacidade de manter a atenção em qualquer coisa que exija esforço, sendo facilmente desviada." },
    // { id: 8, subject: "Alterações da afetividade", question: "Atenção externa", answer: "Focada no mundo externo, utilizando-se dos órgãos dos sentidos." },
    // { id: 9, subject: "Alterações da afetividade", question: "Atenção interna", answer: "Voltada para os processos mentais, introspectiva e reflexiva." },
    // { id: 10, subject: "Alterações da afetividade", question: "Atenção focal", answer: "Atenção concentrada em um campo restrito da consciência." },
    // { id: 11, subject: "Alterações da afetividade", question: "Atenção dispersa", answer: "Incapacidade de manter a atenção em um campo delimitado, espalhando-se por áreas indefinidas." },
    // { id: 12, subject: "Alterações da afetividade", question: "Atenção seletiva", answer: "Capacidade de escolher estímulos específicos entre muitos disponíveis no ambiente." },
    // { id: 13, subject: "Alterações da afetividade", question: "Atenção flutuante", answer: "Estado de atenção 'livre', que não privilegia nenhum estímulo específico (Freud)." },
    { id: 14, subject: "Alterações da afetividade", question: "Desorientação torposa", answer: "Desorientação devido à turvação da consciência, afetando percepção e integração de estímulos." },
    { id: 15, subject: "Alterações da afetividade", question: "Desorientação amnéstica", answer: "Falta de fixação de informações, levando à desorientação em tempo e espaço." },
    { id: 16, subject: "Alterações da afetividade", question: "Desorientação apática", answer: "Desinteresse profundo que leva à desorientação, por falta de energia e investimento no mundo externo." },
    { id: 17, subject: "Alterações da afetividade", question: "Desorientação delirante", answer: "Desorientação causada por crenças delirantes intensas, como acreditar estar em outro planeta." },
    { id: 18, subject: "Alterações da afetividade", question: "Desorientação oligofrênica", answer: "Desorientação devido a déficits intelectuais graves, incapacidade de compreender o ambiente." },
    { id: 19, subject: "Alterações da afetividade", question: "Ilusão", answer: "Percepção deformada de um objeto real presente. Exemplo: ver monstros em um móvel. Não patológico por si só, mas pode ser indicativo de problemas." },
    { id: 20, subject: "Alterações da afetividade", question: "Alucinação", answer: "Percepção clara de um objeto ou estímulo sem que este esteja presente. Exemplo: ouvir vozes sem som real. Patológico." },
    { id: 21, subject: "Alterações da afetividade", question: "Alucinação auditiva", answer: "O paciente escuta vozes sem estímulo externo, geralmente com conteúdo depreciativo ou persecutório." },
    { id: 22, subject: "Alterações da afetividade", question: "Alucinação visual", answer: "Ver imagens nítidas sem que haja estímulo visual real, como pessoas ou cenas completas." },
    { id: 23, subject: "Alterações da afetividade", question: "Alucinação tátil", answer: "Sensação de choques, picadas ou pequenos animais sobre a pele, sem estímulo real." },
    { id: 24, subject: "Alterações da afetividade", question: "Alucinação olfativa", answer: "Sentir cheiros, como de cadáver ou fezes, sem que haja estímulo olfativo presente." },
    { id: 25, subject: "Alterações da afetividade", question: "Hiperestesia", answer: "Aumento anormal da percepção sensorial, como sons amplificados e cores mais intensas." },
    { id: 26, subject: "Alterações da afetividade", question: "Hipoestesia", answer: "Diminuição anormal da percepção sensorial, comum em estados depressivos." },
    { id: 27, subject: "Alterações da afetividade", question: "Distimia", answer: "Alteração básica do humor, podendo se manifestar como inibição ou exaltação." },
    { id: 28, subject: "Alterações da afetividade", question: "Disforia", answer: "Estado de humor desagradável e mal-humorado, associado à distimia." },
    { id: 29, subject: "Alterações da afetividade", question: "Euforia", answer: "Estado de alegria exagerado, desproporcional às circunstâncias." },
    { id: 30, subject: "Alterações da afetividade", question: "Ansiedade", answer: "Estado de humor desconfortável, com apreensão e inquietação quanto ao futuro." },
    { id: 31, subject: "Alterações da afetividade", question: "Apatia", answer: "Diminuição da capacidade de sentir emoções normais, com queixas de indiferença." },
    { id: 32, subject: "Alterações da afetividade", question: "Anedonia", answer: "Incapacidade de sentir prazer com atividades que normalmente proporcionam satisfação." },
    { id: 33, subject: "Alterações da afetividade", question: "Pensamento concreto", answer: "Dificuldade de entender abstrações, com pensamento fixado no literal e imediato." },
    { id: 34, subject: "Alterações da afetividade", question: "Pensamento obsessivo", answer: "Ideias repetitivas e intrusivas que se impõem à consciência do sujeito, mesmo que ele as reconheça como absurdas." },
    { id: 35, subject: "Alterações da afetividade", question: "Êxtase", answer: "Perda das fronteiras entre o eu e o mundo externo, o sujeito se sente fundido ao ambiente." },
    { id: 36, subject: "Alterações da afetividade", question: "Percepção maníaca do espaço", answer: "O espaço é percebido como dilatado e amplo, o sujeito sente que não há fronteiras espaciais e o mundo é seu." },
    { id: 37, subject: "Alterações da afetividade", question: "Percepção depressiva do espaço", answer: "O espaço é vivenciado como encolhido, contraído, escuro e de difícil penetração pelo sujeito e pelos outros." },
    { id: 38, subject: "Alterações da afetividade", question: "Percepção paranoide do espaço", answer: "O indivíduo percebe ameaças ao seu espaço interno, sentindo-se invadido ou controlado por outros." },
    { id: 39, subject: "Alterações da afetividade", question: "Agorafobia", answer: "O espaço externo é percebido como sufocante, pesado, perigoso e potencialmente aniquilador." },

    {
        subject: "Alterações patológicas da afetividade",
        question: "Distimia",
        answer: "Designa a alteração básica de humor, tanto no sentido da inibição quanto da exaltação."
    },
    {
        subject: "Alterações patológicas da afetividade",
        question: "Ideação suicida",
        answer: "Relacionada com o humor depressivo, pensamentos recorrentes de morte, tentativas de suicídio, planejamento de suicídio. SEMPRE DEVE SER INVESTIGADA CUIDADOSAMENTE EM PACIENTES COM HUMOR TRISTE."
    },
    {
        subject: "Alterações patológicas da afetividade",
        question: "Disforia",
        answer: "Uma distimia que acompanha uma tonalidade afetiva desagradável, mal-humorada."
    },
    {
        subject: "Alterações patológicas da afetividade",
        question: "Euforia",
        answer: "Humor morbidamente exagerado, no qual predomina um estado de alegria intensa e desproporcional às circunstâncias."
    },
    {
        subject: "Alterações patológicas da afetividade",
        question: "Elação",
        answer: "Alegria patológica e expansão do eu, sensação subjetiva de grandeza e de poder."
    },
    {
        subject: "Alterações patológicas da afetividade",
        question: "Puerilidade",
        answer: "Humor caracterizado por ser infantil e simplório, regredido. O indivíduo ri ou chora por motivos banais, vida afetiva superficial, ausente de afetos profundos, consistentes e duradouros."
    },
    {
        subject: "Alterações patológicas da afetividade",
        question: "Moria",
        answer: "Forma de alegria muito pueril, ingênua, boba, que ocorre principalmente em pacientes com lesões extensas dos lobos frontais, deficiência ou demência."
    },
    {
        subject: "Alterações patológicas da afetividade",
        question: "Estado de êxtase",
        answer: "Experiência de beatitude, de dissolução do eu no todo, de compartilhamento íntimo do estado afetivo interior com o mundo exterior, muitas vezes com colorido hipertímico e expansivo."
    },
    {
        subject: "Alterações patológicas da afetividade",
        question: "Irritabilidade patológica",
        answer: "Hiperreatividade desagradável, hostil, e eventualmente, agressiva a estímulos do meio exterior."
    },
    {
        subject: "Ansiedade, Angústia e Medo",
        question: "Ansiedade",
        answer: "Estado de humor desconfortável, apreensão negativa em relação ao futuro, inquietação interna desagradável, inclui sintomas somáticos e fisiológicos."
    },
    {
        subject: "Ansiedade, Angústia e Medo",
        question: "Angústia",
        answer: "Sensação de aperto no peito e na garganta, de compressão, de sufocamento. Conotação mais corporal e relacionada ao passado."
    },
    {
        subject: "Ansiedade, Angústia e Medo",
        question: "Medo",
        answer: "Objeto mais preciso, medo de algo específico."
    }
];