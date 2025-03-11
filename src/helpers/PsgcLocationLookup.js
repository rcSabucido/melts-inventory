import psgcData from './PSGC.json'

function isValidCode(psgcCode) {
  return psgcCode == 9
}

export async function getCityName(psgcCodeNum) {
  let psgcCode = "" + psgcCodeNum
  let cityCode = psgcCode.substring(0, psgcCode.length - 3) + "000";
  const url = `https://psgc.gitlab.io/api/cities/${cityCode}/`;
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status == 404) { return null; }
    throw new Error(`Response status: ${response.status}`)
  }
  const json = await response.json();
  if (Array.isArray(json) && json.length == 0) {
    return null;
  }
  return json["name"];
}

export async function getMunicipalityName(psgcCodeNum) {
  let psgcCode = "" + psgcCodeNum
  let cityCode = psgcCode.substring(0, psgcCode.length - 3) + "000";
  const url = `https://psgc.gitlab.io/api/municipalities/${cityCode}/`;
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status == 404) { return null; }
    throw new Error(`Response status: ${response.status}`)
  }
  const json = await response.json();
  if (Array.isArray(json) && json.length == 0) {
    return null;
  }
  return json["name"];
}

export async function getBarangayName(barangayCodeNum) {
  let barangayCode = "" + barangayCodeNum
  const url = `https://psgc.gitlab.io/api/barangays/${barangayCode}/`;
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status == 404) { return null; }
    throw new Error(`Response status: ${response.status}`)
  }
  const json = await response.json();
  if (Array.isArray(json) && json.length == 0) {
    return null;
  }
  return json["name"];
}

export async function getProvinceName(provinceCodeNum) {
  let provinceCode = ("" + provinceCodeNum)
  provinceCode = provinceCode.substring(0, provinceCode.length - 5) + "00000"
  const url = `https://psgc.gitlab.io/api/provinces/${provinceCode}/`;
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status == 404) { return null; }
    throw new Error(`Response status: ${response.status}`)
  }
  const json = await response.json();
  if (Array.isArray(json) && json.length == 0) {
    return null;
  }
  return json["name"];
}

export async function getCityOrMunicipalityName(psgcCodeNum) {
  let cityName = await getCityName(psgcCodeNum)
  if (cityName == null) {
    return await getMunicipalityName(psgcCodeNum)
  }
  return cityName
}

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