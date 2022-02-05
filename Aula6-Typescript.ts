export class MaisUmCode {
    private alunos: any[];
    private turma: string;
    private mentor: string;

    constructor(alunos: any[], turma: string, mentor: string) {
        [this.alunos, this.turma, this.mentor] = [alunos, turma, mentor];

        /* this.alunos = alunos,
        this.turma = turma,
        this.mentor = mentor   */
    }
}
const turma1 = new MaisUmCode(['Daiane', 'Lucas'], 'Lab5', 'Mendex');
console.log('Meu novo objeto ->', turma1)