
export interface listaPets {
    id: number;
    nome: string;
    idade: string;
    foto: string;
}
export interface alertas {
    titulo: logoimg;
    aplicacao: Date;
    validade: Date;
}
export enum logoimg {
    Vacina = 'Vacina',
    Antipulga = 'Antipulga',
    Vermifulgo = 'Vermifulgo',
    Tratamento = 'Tratamento'
}
