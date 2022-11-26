// These mock data is used to get the weather of specified cities using latitude and longitude
//The correct way is to implement this is using the google geocode API
export const staticContryDetails: any = {
  countries: [
    {
      name: 'United Kingdom',
      cities: [
        {
          name: 'London',
          lon: 0.1276,
          lat: 51.5072
        }, 
        {
          name:'Warwick',
          lon: 1.5849,
          lat: 52.2823
        }, 
        { 
          name: 'Birmingham',
          lon: 1.8904,
          lat: 52.4862
        }]
    },
    {
      name: 'United States',
      cities: [
        {
          name: 'New York',
          lon: 40.7128,
          lat: 74.0060
        }, 
        {
          name:'Chicago',
          lon: 23.4372,
          lat: 54.5952
        }, 
        { 
          name: 'Washington',
          lon: 24.4860,
          lat: 3.8736
        }]
    },
    {
      name: 'Australia',
      cities: [
        {
          name: 'Sydney',
          lon: 151.2093,
          lat: 33.8688
        }, 
        {
          name:'Adelaide',
          lon: 138.6007,
          lat: 34.9285
        }, 
        { 
          name: 'Melbourne',
          lon: 144.9631,
          lat: 37.8136
        }]
    },
    {
      name: 'Sri Lanka',
      cities: [
        {
          name: 'Matara',
          lon: 80.5469,
          lat: 5.9496
        }, 
        {
          name:'Colombo',
          lon: 79.8612,
          lat: 6.9271
        }, 
        { 
          name: 'Kandy',
          lon: 80.6337,
          lat: 7.2906
        }]
    }
]};