export const deprecation = (message: string) => {
  // eslint-disable-next-line no-console
  console.warn(`[aws-dynamodb-local] Deprecation notice: ${message}`);
};
