export class ProcessState {
    stage!: Stage;
    projectName!: string | null;
    results?: number; // This is calculated in stage 2
}

export enum Stage {
    One = 1,
    Two,
}