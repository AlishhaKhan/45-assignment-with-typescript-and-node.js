function describe_city(city : string , country : string = 'defult country'){
  console.log(`${city} is in ${country}`);
}
describe_city('karachi','Pakistan');
describe_city('Tokyo','Japan');
describe_city('Paris');