import { instances } from './instances';

export const stop = async (port: number): Promise<void> => {
  const instance = instances.get(port);
  if (instance) {
    instance.process.kill('SIGTERM');
    instances.delete(port);
  }
};
