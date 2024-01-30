import jsonFlags from './countryFlags.json'
export function nameToFlag(name: string) {
  const flag = jsonFlags.find((flag) => flag.country === name)
  return flag?.flag
}
