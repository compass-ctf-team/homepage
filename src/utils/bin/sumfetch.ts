import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
                                                      
                      ░██░▒████████▒       ░          
                     ░███▓▒███████████████░           
                          ▓▓▒▓▓████████▓░             
                       ▓░         ░█████████░         
                   ░░▒░█▓▒▒░░                         
               ▒██████░██▒██████░                     
         ▒  ▒██████▒  ▒██░  ▒██████░ ░▓             sumfetch                                                                                                                           
          ▒████▒      ███▒      ▓████░             -----------                                                                                                                          
         ███▓▒░      ░████       ░░███▓             ABOUT                                                                                                                              
       ░███▒  ██▒░   ▒████░   ░██▒  ███▓            ${config.name}                                                                                                                     
       ███▒    ▓███▓░█████▒░████▒    ▓███          爵 <u><a href="/" target="_blank">Join Us!</a></u>                                                                    
      ▓██▓      ████▒▓▒░░▒▒████▒      ███░                                                                                                                                              
      ███░       ▒▒░ ░███▓░░░▒░       ░███         -----------                                                                                                                          
      ▒▒▒▒▓███████▓ ▓█░  ░█░ ████████▓▒▒▒▒          CONTACT                                                                                                                            
░▒ ▒▓▓████████████▒ █▓    ██ ▓████████████▓▓░░▒░    <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>                                                        
      ███   ░░▒▓███ ░██▒▒██ ░██▓▓▒░░   ███          <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>                 
      ███▒      ░███░  ░░  ▒███░      ▓██▓          <u><a href="https://ctftime.org/team/${config.social.ctftime}" target="_blank">ctftime.org/team/${config.social.ctftime}</a></u>   
      ▒███     ▒████▓█████▓█████     ▒███          -----------                                                                                                                          
       ▓███   ░███▒  ▓████░  ▒███░  ░███░             
        ▓███▒▒█░     ░████      ▒█░▓███░              
         ░██▓█░      ░███▓       ▒█▓██                
           ▒████▓░    ▓██▒    ▒█████░                 
         ░   ░████████▒██░███████▓░   ░               
                ░▒▓███░██▓███▓░                       
                       ▓▒                             
                       ░                              
`;
};

export default sumfetch;
