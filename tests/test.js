import { RustPackageTemplate } from '../index.cjs'

function assert_eq(a, b) {
  if (a !== b) {
    throw new Error(`${a} !== ${b}`)
  }
}

{
  const rpt = new RustPackageTemplate();

  assert_eq(rpt.pack(), true);
}