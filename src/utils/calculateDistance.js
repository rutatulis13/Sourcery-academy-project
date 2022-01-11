function calculateDistance(lat1, lng1, lat2, lng2) {
  if (lat1 === lat2 && lng1 === lng2) {
    return 0;
  }

  const radlat1 = (Math.PI * lat1) / 180;
  const radlat2 = (Math.PI * lat2) / 180;

  const theta = lng1 - lng2;
  const radtheta = (Math.PI * theta) / 180;

  let distance =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

  distance = Math.acos(distance);
  distance = (distance * 180) / Math.PI;
  distance = distance * 60 * 1.1515;
  distance = distance * 1.609344; //convert miles to km

  return distance;
}

export { calculateDistance };
