import { PACKAGE_B_VALUE, PackageB } from "@internal/package-b"

export const PACKAGE_A_VALUE = "fizzbuzz"

export interface PackageA {fizz: string;}

export const packageA: PackageA = { fizz: PACKAGE_A_VALUE }
export const packageB: PackageB = { foo: PACKAGE_B_VALUE }

console.log({
  packageA,
  packageB,
})
