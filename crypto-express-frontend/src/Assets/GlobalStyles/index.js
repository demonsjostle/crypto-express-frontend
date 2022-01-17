import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
    	box-sizing: border-box;
    	margin: 0;
    	padding: 0; 
		
 	}
	
	body { 
		font-family: "Roboto", sans-serif;
	}
	
	:root {
		--nav-size: 60px;
		--nav-btn-size: calc(var(--nav-size) * 0.5);
	}
	
	::-webkit-scrollbar{
    	width: 8px;
 
 	}
 	::-webkit-scrollbar-thumb{
    	border-radius: 10px;
    	background-color: #a6a6a6;
    	box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
 	} 
 	::-webkit-scrollbar-track{
 	   border-radius: 10px;
 	   background-color: white;
 	   box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
 	}
`;


// Responsive settings 
const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
}


export const device = {
	mobileS: `screen and (max-width: ${size.mobileS})`,
	mobileM: `screen and (max-width: ${size.mobileM})`,
	mobileL: `screen and (max-width: ${size.mobileL})`,
	tablet: `screen and (max-width: ${size.tablet})`,
	laptop: `screen and (max-width: ${size.laptop})`,
	laptopL: `screen and (max-width: ${size.laptopL})`,
	desktop: `screen and (max-width: ${size.desktop})`,
	desktopL: `screen and (max-width: ${size.desktop})`,
};
