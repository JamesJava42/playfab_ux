export interface WeatherData {
    dt: number;
    main: MainData;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    sys: Sys;
  }
  
  export interface MainData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  
  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  export interface Clouds {
    all: number;
  }
  
  export interface Wind {
    speed: number;
    deg: number;
  }
  
  export interface Sys {
    sys: String;
  }
  