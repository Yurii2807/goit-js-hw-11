export function fetchImages(searchDescription) {

  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
    const params = new URLSearchParams({
    key: '44364811-49b1c0cdbd7356dfdac934983',
    q: encodeURIComponent(searchDescription),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
 
  const url = `${BASE_URL}${END_POINT}?${params}`;
  
 return fetch(url).then(res => res.json());
  }