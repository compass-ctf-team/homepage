// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `=========== Available Commands ===============
\n${c}\n==============================================
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
Type 'sumfetch' to display summary.\n
Thanks <u><a href="https://github.com/Cveinnt" target="_blank">Cveinnt</a></u> for the amazing <u><a href="https://github.com/Cveinnt/LiveTerm" target="_blank">LiveTerm</a></u>!
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, We are ${config.name}. 
Welcome to our website!
More about us:
'sumfetch' - short summary.
'members' - our members.`;
};

export const members = async (args: string[]): Promise<string> => {
  return `Active Members
${config.members.active.length > 0 ? config.members.active.map((member: string) => `  - ${member}`).join('\n') : '  NULL'}

Alumni Members
${config.members.alumni.length > 0 ? config.members.alumni.map((member: string) => `  - ${member}`).join('\n') : '  NULL'}`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

// Socials
export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

export const awards = async (args: string[]): Promise<string> => {
  window.open(`https://blog.compassc.tf/award`);
  return 'Going to find our trophies...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.bilibili.com/video/BV1Gj7DzxEX2', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const env = async (args?: string[]): Promise<string> => {
  return `USER=${config.ps1_username}
HOME=/home/${config.ps1_username}
HOST=${config.ps1_hostname}
TERM=xterm-256color
FLAG=flag{m4k3_c0mp4s5_gr34t_4g41n!}`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███████╗███████╗     ██████╗████████╗███████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗██╔════╝██╔════╝    ██╔════╝╚══██╔══╝██╔════╝
██║     ██║   ██║██╔████╔██║██████╔╝███████║███████╗███████╗    ██║        ██║   █████╗  
██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║╚════██║╚════██║    ██║        ██║   ██╔══╝  
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║███████║███████║    ╚██████╗   ██║   ██║     
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝     ╚═════╝   ╚═╝   ╚═╝     
                                                                                         
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
`;
};
