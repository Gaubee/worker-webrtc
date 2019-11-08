export default function (val: any, error: any) {
  if (val) return;
  if (error instanceof Error) throw error;
  throw new Error(error);
}
