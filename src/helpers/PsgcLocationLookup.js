import psgcData from './PSGC.json'

export function getAddressFromId(psgcCodeNum) {
  let code = psgcCodeNum + ''
  while (code.length < 10) {
    code = "0" + code
  }
  const regionCode = code.substring(0, 2) + '00000000';
  const provinceOrHUCCode = code.substring(0, 5) + '00000';
  const cityCode = code.substring(0, 7) + '000';

  let address = ""

  let region = psgcData[regionCode]
  address = region.name
  if (region.cities[provinceOrHUCCode]) {
    let city = region.cities[provinceOrHUCCode]
    address = city.name + ", " + address
    if (city.submunicipalities[cityCode]) {
      let submun = city.submunicipalities[cityCode]
      address = submun.name + ", " + address
      if (submun.barangays[code]) {
        let barangayName = submun.barangays[code]
        address = barangayName + ", " + address
      }
    } else if (city.barangays[code]) {
      let barangayName = city.barangays[code]
      address = barangayName + ", " + address
    }
  } else if (region.provinces[provinceOrHUCCode]) {
    let province = region.provinces[provinceOrHUCCode]
    address = province.name + ", " + address
    if (province.cities[cityCode] || province.municipalities[cityCode]) {
      let mun = region.cities[cityCode] ? region.cities : province.municipalities[cityCode]
      address = mun.name + ", " + address
      if (mun.barangays[code]) {
        address = mun.barangays[code] + ", " + address
      }
    }
  }

  return address
}