const pad = (num, size) => {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

const formatDate = (datestr) => {
  if (datestr === null || datestr === undefined || datestr == "") {
    return ""
  }

  let date = new Date(datestr)
  return `${pad(date.getMonth() + 1, 2)}-${pad(date.getDate(), 2)}-${date.getFullYear()}`
}

const formatTime = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + pad(minutes, 2) + ":" + pad(seconds, 2) + ' ' + ampm;
  return strTime;
}

export { formatDate, formatTime, pad };