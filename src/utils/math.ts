export function fib(n: number, start: number = 0): number[] {
  return new Array(n)
    .fill(1)
    .reduce((arr, _, i) => {
      arr.push(i <= 1 ? i : arr[i - 2] + arr[i - 1]);
      return arr;
    }, [])
    .slice(start, n);
}
