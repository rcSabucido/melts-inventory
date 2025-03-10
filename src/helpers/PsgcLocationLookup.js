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