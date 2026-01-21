import type {ChildProcess} from 'node:child_process';
import type {StartOptions} from './start';

type InstanceDefinition = {
	options: Partial<StartOptions> | undefined;
	process: ChildProcess;
};

export const instances = new Map<number, InstanceDefinition>();
