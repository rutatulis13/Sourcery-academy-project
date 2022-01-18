function calculateDistance(coordinates1, coordinates2) {
  const radlat1 = (Math.PI * coordinates1.lat) / 180;
  const radlat2 = (Math.PI * coordinates2.lat) / 180;

  const theta = coordinates1.lng - coordinates2.lng;
  const radtheta = (Math.PI * theta) / 180;

  let distance =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

  distance = Math.acos(distance);
  distance = (distance * 180) / Math.PI;
  distance = distance * 60 * 1.1515;
  distance = distance * 1.609344;

  return distance;
}

export { calculateDistance };
