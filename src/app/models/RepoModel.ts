import { CommitModel } from './CommitModel';

export class RepoModel {
    name: string;
    id: number;
    lastCommit: CommitModel;
}
