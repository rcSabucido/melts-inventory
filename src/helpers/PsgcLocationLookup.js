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

export function getRegionMap() {
  let arr = Object.entries(psgcData).map(([key, value]) => {
    return { code: key, name: value.name }
  });
  return arr
}

export function getRegion(regionCode) {
  return psgcData[regionCode]
}

export function getSecondLevelMap(region) {
  let arr = Object.entries(region.provinces).map(([key, value]) => {
    return { code: key, name: value.name }
  }).concat(
    Object.entries(region.cities).map(([key, value]) => {
      return { code: key, name: value.name }
    })
  ).concat(
    Object.entries(region.municipalities).map(([key, value]) => {
      return { code: key, name: value.name }
    })
  );
  return arr
}

export function getProvinceOrCityFromCode(code) {
  const regionCode = code.substring(0, 2) + '00000000';

  let region = psgcData[regionCode]
  if (region.provinces[code]) {
    return {"type": "province", value: region.provinces[code]}
  } else if (region.cities[code]) {
    return {"type": "city", value: region.cities[code]}
  } else if (region.municipalities[code]) {
    // Pateros
    return {"type": "municipality", value: region.municipalities[code]}
  }
  return null
}

export function getComponentCityOrMunicipalityFromCode(code) {
  const regionCode = code.substring(0, 2) + '00000000';
  const provinceOrHUCCode = code.substring(0, 5) + '00000';
  const cityCode = code;

  let region = psgcData[regionCode]
  console.log(`getComponentCityOrMunicipalityFromCode: cityCode: ${cityCode}`)
  if (region.provinces[provinceOrHUCCode]) {
    let province = region.provinces[provinceOrHUCCode]
    if (province.cities[cityCode]) {
      return {"type": "city", value: province.cities[cityCode]}
    } else if (province.municipalities[cityCode]) {
      return {"type": "municipality", value: province.municipalities[cityCode]}
    }
  } else if (region.municipalities[cityCode]) {
    // Pateros...
    return {"type": "municipality", value: region.municipalities[code]}
  // For City of Manila, which contains submunicipalities
  } else if (region.cities[provinceOrHUCCode]?.submunicipalities[cityCode]) {
    return {"type": "submunicipality", value: region.cities[provinceOrHUCCode].submunicipalities[cityCode]}
  }
  return null
}

export function getMunicipalitiesCities(state) {
  return [
    Object.entries(state.municipalities)
  ]
}
