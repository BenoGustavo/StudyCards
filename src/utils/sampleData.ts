export interface DataProps {
    id?: number;
    subject: string;
    question: string;
    answer: string;
}

export const sampleData: DataProps[] = [
    { id: 1, subject: "PSICOPATOLOGIA", question: "Atenção voluntária", answer: "Concentração ativa e intencional da consciência sobre um objeto específico." },
    { id: 2, subject: "PSICOPATOLOGIA", question: "Atenção espontânea", answer: "Atenção suscitada pelo interesse momentâneo e incidental, com pouca interferência voluntária." },
    { id: 3, subject: "PSICOPATOLOGIA", question: "Hipoprosexia", answer: "Diminuição global da atenção, prejudicando concentração, percepção e raciocínio." },
    { id: 4, subject: "PSICOPATOLOGIA", question: "Aprosexia", answer: "Abolição total da atenção, mesmo com estímulos ambientais fortes." },
    { id: 5, subject: "PSICOPATOLOGIA", question: "Hiperprossexia", answer: "Atenção exagerada e prolongada em certos objetos, com grande infatigabilidade." },
    { id: 6, subject: "PSICOPATOLOGIA", question: "Distração", answer: "Atenção focada excessivamente em determinados conteúdos, com inibição de outros estímulos." },
    { id: 7, subject: "PSICOPATOLOGIA", question: "Distrabilidade", answer: "Incapacidade de manter a atenção em qualquer coisa que exija esforço, sendo facilmente desviada." },
    { id: 8, subject: "PSICOPATOLOGIA", question: "Atenção externa", answer: "Focada no mundo externo, utilizando-se dos órgãos dos sentidos." },
    { id: 9, subject: "PSICOPATOLOGIA", question: "Atenção interna", answer: "Voltada para os processos mentais, introspectiva e reflexiva." },
    { id: 10, subject: "PSICOPATOLOGIA", question: "Atenção focal", answer: "Atenção concentrada em um campo restrito da consciência." },
    { id: 11, subject: "PSICOPATOLOGIA", question: "Atenção dispersa", answer: "Incapacidade de manter a atenção em um campo delimitado, espalhando-se por áreas indefinidas." },
    { id: 12, subject: "PSICOPATOLOGIA", question: "Atenção seletiva", answer: "Capacidade de escolher estímulos específicos entre muitos disponíveis no ambiente." },
    { id: 13, subject: "PSICOPATOLOGIA", question: "Atenção flutuante", answer: "Estado de atenção 'livre', que não privilegia nenhum estímulo específico (Freud)." },
    { id: 14, subject: "PSICOPATOLOGIA", question: "Desorientação torposa", answer: "Desorientação devido à turvação da consciência, afetando percepção e integração de estímulos." },
    { id: 15, subject: "PSICOPATOLOGIA", question: "Desorientação amnéstica", answer: "Falta de fixação de informações, levando à desorientação em tempo e espaço." },
    { id: 16, subject: "PSICOPATOLOGIA", question: "Desorientação apática", answer: "Desinteresse profundo que leva à desorientação, por falta de energia e investimento no mundo externo." },
    { id: 17, subject: "PSICOPATOLOGIA", question: "Desorientação delirante", answer: "Desorientação causada por crenças delirantes intensas, como acreditar estar em outro planeta." },
    { id: 18, subject: "PSICOPATOLOGIA", question: "Desorientação oligofrênica", answer: "Desorientação devido a déficits intelectuais graves, incapacidade de compreender o ambiente." },
    { id: 19, subject: "PSICOPATOLOGIA", question: "Ilusão", answer: "Percepção deformada de um objeto real presente. Exemplo: ver monstros em um móvel. Não patológico por si só, mas pode ser indicativo de problemas." },
    { id: 20, subject: "PSICOPATOLOGIA", question: "Alucinação", answer: "Percepção clara de um objeto ou estímulo sem que este esteja presente. Exemplo: ouvir vozes sem som real. Patológico." },
    { id: 21, subject: "PSICOPATOLOGIA", question: "Alucinação auditiva", answer: "O paciente escuta vozes sem estímulo externo, geralmente com conteúdo depreciativo ou persecutório." },
    { id: 22, subject: "PSICOPATOLOGIA", question: "Alucinação visual", answer: "Ver imagens nítidas sem que haja estímulo visual real, como pessoas ou cenas completas." },
    { id: 23, subject: "PSICOPATOLOGIA", question: "Alucinação tátil", answer: "Sensação de choques, picadas ou pequenos animais sobre a pele, sem estímulo real." },
    { id: 24, subject: "PSICOPATOLOGIA", question: "Alucinação olfativa", answer: "Sentir cheiros, como de cadáver ou fezes, sem que haja estímulo olfativo presente." },
    { id: 25, subject: "PSICOPATOLOGIA", question: "Hiperestesia", answer: "Aumento anormal da percepção sensorial, como sons amplificados e cores mais intensas." },
    { id: 26, subject: "PSICOPATOLOGIA", question: "Hipoestesia", answer: "Diminuição anormal da percepção sensorial, comum em estados depressivos." },
    { id: 27, subject: "PSICOPATOLOGIA", question: "Distimia", answer: "Alteração básica do humor, podendo se manifestar como inibição ou exaltação." },
    { id: 28, subject: "PSICOPATOLOGIA", question: "Disforia", answer: "Estado de humor desagradável e mal-humorado, associado à distimia." },
    { id: 29, subject: "PSICOPATOLOGIA", question: "Euforia", answer: "Estado de alegria exagerado, desproporcional às circunstâncias." },
    { id: 30, subject: "PSICOPATOLOGIA", question: "Ansiedade", answer: "Estado de humor desconfortável, com apreensão e inquietação quanto ao futuro." },
    { id: 31, subject: "PSICOPATOLOGIA", question: "Apatia", answer: "Diminuição da capacidade de sentir emoções normais, com queixas de indiferença." },
    { id: 32, subject: "PSICOPATOLOGIA", question: "Anedonia", answer: "Incapacidade de sentir prazer com atividades que normalmente proporcionam satisfação." },
    { id: 33, subject: "PSICOPATOLOGIA", question: "Pensamento concreto", answer: "Dificuldade de entender abstrações, com pensamento fixado no literal e imediato." },
    { id: 34, subject: "PSICOPATOLOGIA", question: "Pensamento obsessivo", answer: "Ideias repetitivas e intrusivas que se impõem à consciência do sujeito, mesmo que ele as reconheça como absurdas." },
    { id: 35, subject: "PSICOPATOLOGIA", question: "Êxtase", answer: "Perda das fronteiras entre o eu e o mundo externo, o sujeito se sente fundido ao ambiente." },
    { id: 36, subject: "PSICOPATOLOGIA", question: "Percepção maníaca do espaço", answer: "O espaço é percebido como dilatado e amplo, o sujeito sente que não há fronteiras espaciais e o mundo é seu." },
    { id: 37, subject: "PSICOPATOLOGIA", question: "Percepção depressiva do espaço", answer: "O espaço é vivenciado como encolhido, contraído, escuro e de difícil penetração pelo sujeito e pelos outros." },
    { id: 38, subject: "PSICOPATOLOGIA", question: "Percepção paranoide do espaço", answer: "O indivíduo percebe ameaças ao seu espaço interno, sentindo-se invadido ou controlado por outros." },
    { id: 39, subject: "PSICOPATOLOGIA", question: "Agorafobia", answer: "O espaço externo é percebido como sufocante, pesado, perigoso e potencialmente aniquilador." }
];