import { CommitModel } from './CommitModel';

export class RepoModel {
    name: string;
    id: number;
    lastCommit: CommitModel;
    description: string;
    language: string;
    created_at: Date;
    forks: number;
    stargazers_count: number;
    open_issues: number;
}
