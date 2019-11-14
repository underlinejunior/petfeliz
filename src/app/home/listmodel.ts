
export interface Pet {
    id?: string;
    name?: string;
    idade?: string;
    foto?: string;
    raca?: string;
    pelagem?: string;
    olhos?: string;
    nasc?: string;
    sexo?: string;
    tipo?: string;
    observacoes?: string;
    createdAt?: number;
    userId?: string;
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

export interface User {
    email?: string;
    password?: string;
    passwordConfim?: string;

}
