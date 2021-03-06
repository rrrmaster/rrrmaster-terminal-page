import { getBio } from '../../api';

export const about = async (args: string[]): Promise<string> => {
  const bio = await getBio();

  return `
  ,-.       _,---._ __  / 
  /  )    .-'       \`./ /   
 (  (   ,'            \`/    /|
  \  \`-"             \'\   / |
   \`.              ,  \ \ /  |
    /\`.          ,'-\`----Y   |
   (            ;        |   '
   |  ,-.    ,-'         |  /
   |  | (   |        hjw | /
   )  |  \  \`.___________|/
   \`--'   \`--'
  `;
};
